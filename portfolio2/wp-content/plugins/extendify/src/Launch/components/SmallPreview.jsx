import { BlockPreview } from '@wordpress/block-editor';
import { rawHandler } from '@wordpress/blocks';
import {
	useState,
	useRef,
	useCallback,
	useEffect,
	useMemo,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { pageNames } from '@shared/lib/pages';
import classNames from 'classnames';
import { colord } from 'colord';
import { AnimatePresence, motion } from 'framer-motion';
import themeJSON from '@launch/_data/theme-processed.json';
import { usePreviewIframe } from '@launch/hooks/usePreviewIframe';
import { lowerImageQuality } from '@launch/lib/util';

export const SmallPreview = ({ style, onSelect, selected, siteTitle }) => {
	const previewContainer = useRef(null);
	const blockRef = useRef(null);
	const observer = useRef(null);
	const [ready, setReady] = useState(false);
	const variation = style?.variation;
	const theme = variation?.settings?.color?.palette?.theme;

	const onLoad = useCallback(
		(frame) => {
			// Run this 150 times at an interval of 100ms (15s)
			// This is a brute force check that the styles are there
			let lastRun = performance.now();
			let counter = 0;
			const checkOnStyles = () => {
				if (counter >= 150) return;
				const now = performance.now();
				if (now - lastRun < 100) return requestAnimationFrame(checkOnStyles);
				lastRun = now;
				const content = frame?.contentDocument;
				if (content) {
					content.querySelector('[href*=load-styles]')?.remove();
					const siteTitleElement = content.querySelector('[href*=site-title]');
					if (siteTitleElement) siteTitleElement.textContent = siteTitle;
				}
				const stylesToInject = `<style id="ext-tj">
					${themeJSON[style?.variation?.title]}
					.wp-block-missing { display: none !important }
					img[src^=data] { filter: url(#wp-duotone-primary) !important }
				</style>`;
				if (!frame.contentDocument?.getElementById('ext-tj')) {
					frame.contentDocument?.body?.insertAdjacentHTML(
						'beforeend',
						stylesToInject,
					);
				}
				counter++;
				requestAnimationFrame(checkOnStyles); // recursive
			};
			checkOnStyles();
		},
		[style?.variation?.title, siteTitle],
	);

	const { loading, ready: show } = usePreviewIframe({
		container: blockRef.current,
		ready,
		onLoad,
		loadDelay: 2000,
	});
	const blocks = useMemo(() => {
		const links = [
			pageNames.about.title,
			pageNames.blog.title,
			pageNames.contact.title,
		];

		const code = [
			style?.headerCode,
			style?.patterns
				.map(({ code }) => code)
				.flat()
				.slice(0, 3)
				.join('\n'),
			style?.footerCode,
		]
			.filter(Boolean)
			.join('')
			.replace(
				// <!-- wp:navigation --> <!-- /wp:navigation -->
				/<!-- wp:navigation[.\S\s]*?\/wp:navigation -->/g,
				`<!-- wp:paragraph {"className":"tmp-nav"} --><p class="tmp-nav">${links.join(' | ')}</p ><!-- /wp:paragraph -->`,
			)
			.replace(
				// <!-- wp:navigation /-->
				/<!-- wp:navigation.*\/-->/g,
				`<!-- wp:paragraph {"className":"tmp-nav"} --><p class="tmp-nav">${links.join(' | ')}</p ><!-- /wp:paragraph -->`,
			)
			.replace(
				/<!-- wp:site-logo.*\/-->/g,
				'<!-- wp:paragraph {"className":"custom-logo"} --><img class="custom-logo" style="height: 40px;" src="https://assets.extendify.com/demo-content/logos/extendify-demo-logo.png"><!-- /wp:paragraph -->',
			);
		return rawHandler({ HTML: lowerImageQuality(code) });
	}, [style]);

	useEffect(() => {
		if (observer.current) return;
		observer.current = new IntersectionObserver((entries) => {
			entries[0].isIntersecting && setReady(true);
		});
		observer.current.observe(blockRef.current);
		return () => observer.current.disconnect();
	}, []);

	return (
		<>
			<div
				data-test="layout-preview"
				className="relative h-full w-full overflow-hidden"
				ref={blockRef}
				role={onSelect ? 'button' : undefined}
				tabIndex={onSelect ? 0 : undefined}
				aria-label={
					onSelect ? __('Press to select', 'extendify-local') : undefined
				}
				aria-selected={onSelect ? selected : undefined}
				onKeyDown={(e) => {
					if (['Enter', 'Space', ' '].includes(e.key)) {
						onSelect && onSelect({ ...style, variation });
					}
				}}
				onClick={onSelect ? () => onSelect({ ...style, variation }) : () => {}}>
				{ready ? (
					<motion.div
						ref={previewContainer}
						className={classNames('absolute inset-0 z-20', {
							'opacity-0': !show,
						})}
						initial={{ opacity: 0 }}
						animate={{ opacity: loading ? 0 : 1 }}>
						<BlockPreview
							blocks={blocks}
							viewportWidth={1400}
							additionalStyles={[
								// TODO: { css: themeJSON[style.variation.title] },
								{
									css: '.rich-text [data-rich-text-placeholder]:after { content: "" }',
								},
							]}
						/>
					</motion.div>
				) : null}
				<AnimatePresence>
					{show || (
						<motion.div
							initial={{ opacity: 0.7 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 z-30"
							style={{
								backgroundColor: colord(
									theme?.find(({ slug }) => slug === 'primary')?.color ??
										'#ccc',
								)
									.alpha(0.25)
									.toRgbString(),
								backgroundImage:
									'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
								backgroundSize: '600% 600%',
								animation:
									'extendify-loading-skeleton 10s ease-in-out infinite',
							}}
						/>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};
