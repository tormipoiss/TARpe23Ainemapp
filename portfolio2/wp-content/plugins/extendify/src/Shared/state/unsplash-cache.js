import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

const ONE_WEEK_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 7;

const state = (set, get) => ({
	images: [],
	expiration: 0,
	isEmpty: () => get().images.length === 0,
	hasExpired: () => Date.now() > get().expiration,
	updateCache: (images) =>
		set({ images, expiration: Date.now() + ONE_WEEK_IN_MILLISECONDS }),
});

export const useUnsplashCacheStore = create(
	persist(devtools(state, { name: 'Extendify Unsplash Images' }), {
		name: 'extendify-unsplash-images',
		storage: createJSONStorage(() => localStorage),
	}),
);
