import useSWRImmutable from 'swr/immutable';
import { getSiteProfile } from '@launch/api/DataApi';
import { useUserSelectionStore } from '@launch/state/user-selections';

export const useSiteProfile = () => {
	const { siteInformation, businessInformation } = useUserSelectionStore();
	const { data, error } = useSWRImmutable(
		{
			key: 'site-profile',
			title: siteInformation?.title,
			description: businessInformation?.description,
		},
		getSiteProfile,
	);

	return { siteProfile: data, error, loading: !data && !error };
};
