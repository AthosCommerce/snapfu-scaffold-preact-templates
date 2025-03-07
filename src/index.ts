import { SnapTemplates } from '@searchspring/snap-preact';
import { globalStyles } from './styles';

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
	themes: {
		global: {
			extends: 'bocachica',
			style: globalStyles,
			// resultComponent: 'CustomResult',
			// variables: {
			// 	breakpoints: [768, 1024, 1280],
			// },
			// overrides: {
			// 	components: {},
			// 	layoutOptions: [],
			// 	responsive: [
			// 		{
			// 			components: {},
			// 			layoutOptions: [],
			// 		},
			// 		{
			// 			components: {},
			// 			layoutOptions: [],
			// 		},
			// 		{
			// 			components: {},
			// 			layoutOptions: [],
			// 		},
			// 	],
			// },
		},
	},
	recommendation: {
		default: {
			Recs: {
				component: 'Recommendation',
			}
		},
	},
	search: {
		targets: [
			{
				selector: '#searchspring-templates',
				component: 'Search',
				// resultComponent: 'CustomResult',
				// theme: 'global',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				selector: 'input#search-input',
				component: 'Autocomplete',
				// resultComponent: 'CustomResult',
				// theme: 'global',
			},
		],
	},
});
