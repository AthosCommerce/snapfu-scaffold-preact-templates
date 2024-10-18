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
			// resultComponent: 'Result',
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
	search: {
		targets: [
			{
				selector: '#searchspring-templates',
				component: 'Search',
				// resultComponent: 'Result',
				// theme: 'global',
			},
		],
	},
	autocomplete: {
		inputSelector: 'input#search-input',
		targets: [
			{
				selector: 'input#search-input',
				component: 'Autocomplete',
				// resultComponent: 'Result',
				// theme: 'global',
			},
		],
	},
});
