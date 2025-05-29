import { SnapTemplates } from '@searchspring/snap-preact';
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
		// 	default: {},
		// 	mobile: {},
		// 	tablet: {},
		// 	desktop: {}
		// },
	},
	// plugins: {},
	search: {
		targets: [
			{
				selector: '#searchspring-templates',
				component: 'Search',
				// resultComponent: 'Result',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input#search-input',
				selector: 'input#search-input',
				component: 'AutocompleteTemplate',
				// resultComponent: 'Result',
			},
		],
	},
});
