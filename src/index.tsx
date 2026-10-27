import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';

const templatesConfig = validateTemplatesConfig({
	config: {
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
		// globalResultComponent: 'CustomResult',
		// variables: {
		// 	breakpoints: {
		// 		mobile: 830,
		// 		tablet: 1030,
		// 		desktop: 1230,
		// 	},
		// 	colors: {}
		// },
		// overrides: {
		// 	default: {
		// 		'search': {
		// 			// resultComponent: 'CustomResult',
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
				component: 'AutocompleteFixed',
			},
		],
	},
});

new SnapTemplates(templatesConfig);
