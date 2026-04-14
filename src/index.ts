import { SnapTemplates } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';

// const breakpoints = {
// 	mobile: 830,
// 	tablet: 1030,
// 	desktop: 1230
// };

const templatesConfig: SnapTemplatesConfig = {
	unlocked: false,
	config: {
		siteId: '{{ snapfu.siteId }}',
		platform: '{{ snapfu.variables.platform }}',
		language: 'en',
		currency: 'usd',
	},
	// plugins: {},
	// components: {
	// 	result: {
	// 		CustomResult: async () => (await import('./components/Result')).CustomResult,
	// 	},
	// },
	theme: {
		extends: 'base',
		style: globalStyles,
		// variables: {
		// 	breakpoints: breakpoints,
		// 	colors: {}
		// },
		// overrides: {
		// 	default: {
		// 		'search result': {
		// 			// customComponent: 'CustomResult',
		// 		},
		// 	},
		// 	mobile: {},
		// 	tablet: {},
		// 	desktop: {}
		// },
	},
	search: {
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input#search-input',
				selector: 'input#search-input',
				component: 'AutocompleteFixed',
			},
		],
	},
};

new SnapTemplates(templatesConfig);
