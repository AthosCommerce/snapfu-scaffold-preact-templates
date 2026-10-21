export const globalStyles: StyleScript = (theme: { name?: string; variables: ThemeVariables }) => {
	const { variables } = theme;
	return {
		'.ss__result': {
			// background: 'purple',
			[`@media (max-width: ${variables.breakpoints.desktop}px)`]: {
				// background: 'blue',
			},
			[`@media (max-width: ${variables.breakpoints.tablet}px)`]: {
				// background: 'red',
			},
			[`@media (max-width: ${variables.breakpoints.mobile}px)`]: {
				// background: 'green',
			},
		},
	};
};
