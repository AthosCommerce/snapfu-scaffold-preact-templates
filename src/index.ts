import { SnapTemplates } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';

// const breakpoints = {
// 	mobile: 830,
// 	tablet: 1030,
// 	desktop: 1230
// };

new SnapTemplates({
	config: {
		siteId: '{{ snapfu.siteId }}',
		platform: '{{ snapfu.variables.platform }}',
	},
	// plugins: {},
	// components: {
	// 	result: {
	// 		CustomResult: async () => (await import('./components/Result')).CustomResult,
	// 	},
	// },
	theme: {
		extends: 'pike',
		style: globalStyles,
		// variables: {
		// 	breakpoints: breakpoints,
		// 	colors: {}
		// },
		// overrides: {
		// 	default: {},
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
				// resultComponent: 'CustomResult',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input#search-input',
				selector: 'input#search-input',
				component: 'AutocompleteFixed',
				// resultComponent: 'CustomResult',
			},
		],
	},
});
