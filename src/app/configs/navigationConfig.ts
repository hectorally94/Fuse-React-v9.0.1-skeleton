import i18next from 'i18next';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavigationType = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		auth : authRoles.user,
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	},
	{
		id: 'baba-component',
		title: 'testo',
		translate: 'BABA',
		auth : authRoles.receptionist,
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'baba'
	}
];

export default navigationConfig;
