import { useEffect, useState, useCallback } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';
import { updateOption, getOption } from '@launch/api/WPApi';
import { AcceptTerms } from '@launch/components/BusinessInformation/AcceptTerms';
import { SiteTones } from '@launch/components/BusinessInformation/Tones';
import { LoadingIndicator } from '@launch/components/LoadingIndicator';
import { Title } from '@launch/components/Title';
import { useFetch } from '@launch/hooks/useFetch';
import { PageLayout } from '@launch/layouts/PageLayout';
import { usePagesStore } from '@launch/state/Pages';
import { pageState } from '@launch/state/factory';
import { useUserSelectionStore } from '@launch/state/user-selections';

const fetcher = async () => ({ title: await getOption('blogname') });
const fetchData = () => ({ key: 'site-info' });
export const state = pageState('Site Information', () => ({
	ready: false,
	canSkip: false,
	useNav: true,
	onRemove: () => {},
}));

export const SiteInformation = () => {
	const { loading } = useFetch(fetchData, fetcher);
	const nextPage = usePagesStore((state) => state.nextPage);
	const {
		businessInformation,
		setBusinessInformation,
		siteInformation,
		setSiteInformation,
		setSiteProfile,
	} = useUserSelectionStore();

	const title = siteInformation.title || '';
	const setTitle = useCallback(
		(t) => setSiteInformation('title', t),
		[setSiteInformation],
	);

	const description = businessInformation.description || '';
	const setDescription = useCallback(
		(v) => setBusinessInformation('description', v),
		[setBusinessInformation],
	);
	const setReady = useCallback((ready) => state.setState({ ready }), []);

	useEffect(() => {
		setSiteProfile(undefined); // this also resets state
		updateOption('extendify_site_profile', null);
	}, [setSiteProfile, description, title]);

	return (
		<PageLayout>
			<div className="grow overflow-y-auto px-6 py-8 md:p-12 3xl:p-16">
				<Title
					title={__(
						'Get Started With AI-Powered Web Creation',
						'extendify-local',
					)}
					description={__(
						"Share your vision, and we'll craft a website that's perfectly tailored to your needs, ready to launch in no time. Let's begin by learning more about what you're building.",
						'extendify-local',
					)}
				/>
				<div className="relative mx-auto w-full max-w-xl">
					{loading ? (
						<LoadingIndicator />
					) : (
						<form
							className="flex w-full flex-col gap-4"
							onSubmit={(e) => {
								e.preventDefault();
								if (!state.getState().ready) return;
								nextPage();
							}}>
							<SiteTitle
								title={title}
								setTitle={setTitle}
								setReady={setReady}
							/>
							<BusinessInfo
								description={description}
								setDescription={setDescription}
								setReady={setReady}
							/>
							<SiteTones />
							<AcceptTerms />
						</form>
					)}
				</div>
			</div>
		</PageLayout>
	);
};

const SiteTitle = ({ title, setTitle, setReady }) => {
	const [value, setValue] = useState(decodeEntities(title) || '');

	useEffect(() => {
		setReady(false);
		const timer = setTimeout(() => {
			setTitle(value);
			setReady(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, [value, setTitle, setReady]);
	return (
		<div>
			<label
				htmlFor="extendify-site-title-input"
				className="m-0 text-lg font-medium leading-8 text-gray-900 md:text-base md:leading-10">
				{__('Website title', 'extendify-local')}
			</label>
			<input
				data-test="site-title-input"
				autoComplete="off"
				autoFocus={true}
				type="text"
				name="site-title-input"
				id="extendify-site-title-input"
				className="input-focus h-12 w-full rounded border border-gray-200 px-4 py-6 ring-offset-0"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={__('Enter your website name', 'extendify-local')}
			/>
		</div>
	);
};

const BusinessInfo = ({ description, setDescription, setReady }) => {
	const [value, setValue] = useState(description);

	useEffect(() => {
		setReady(false);
		const timer = setTimeout(() => {
			setDescription(value);
			setReady(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, [value, setDescription, setReady]);

	return (
		<div>
			<label
				htmlFor="extendify-site-info-input"
				className="m-0 text-lg font-medium leading-8 text-gray-900 md:text-base md:leading-10">
				{__('Describe your business or website', 'extendify-local')}
			</label>
			<textarea
				data-test="site-info-input"
				autoComplete="off"
				rows="4"
				name="site-info-input"
				id="extendify-site-info-input"
				className={
					'input-focus placeholder:text-md h-40 w-full rounded-lg border border-gray-300 p-2 ring-offset-0 placeholder:italic placeholder:opacity-50'
				}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={__(
					'E.g., We are a yoga studio in London with professionally trained instructors with focus on hot yoga for therapeutic purposes.',
					'extendify-local',
				)}
			/>
		</div>
	);
};
