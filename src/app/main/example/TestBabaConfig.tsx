/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import i18next from 'i18next';
import { lazy } from 'react';
import { authRoles } from 'src/app/auth';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const Testbaba = lazy(() => import('./Testbaba'));

/**
 * The Example page config.
 */
const TestbabaConfig = {
	settings: {
		layout: {}
	},
	auth: authRoles.receptionist,
	routes: [
		{
			path: 'baba',
			element: <Testbaba />
		}
	]
};

export default TestbabaConfig;
