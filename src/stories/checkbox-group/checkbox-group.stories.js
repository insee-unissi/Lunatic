import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { CheckboxGroup } from 'components';
import readme from './README.md';
import { titleDecorator } from 'utils/lib';
import {
	text,
	boolean,
	number,
	color,
	object,
	select,
} from '@storybook/addon-knobs/react';

const stories = storiesOf('CheckboxGroup', module)
	.addDecorator(withReadme(readme))
	.addDecorator(Component => {
		const WrappedComponent = titleDecorator(Component);
		return <WrappedComponent title="<CheckboxGroup />" />;
	});

const responses = [
	{ id: '1', value: false, label: 'France' },
	{ id: '2', value: false, label: 'Italy' },
];

const positioningOptions = {
	DEFAULT: 'Default',
	HORIZONTAL: 'Horizontal',
	VERTICAL: 'Vertical',
};

stories.addWithJSX('Default', () => (
	<CheckboxGroup
		id="default"
		responses={responses}
		handleChange={console.log}
	/>
));

stories.addWithJSX('Props', () => (
	<CheckboxGroup
		id="props"
		label={text('Label', "I'm the label of the checkbox group")}
		positioning={select('Items positioning', positioningOptions)}
		disabled={boolean('Disabled', false)}
		focused={boolean('Focused', false)}
		keyboardSelection={boolean('Keyboard selection', false)}
		responses={responses}
		handleChange={console.log}
	/>
));

stories.addWithJSX('Styled', () => (
	<CheckboxGroup
		id="styled"
		label={text('Label', "I'm the label of the checkbox group")}
		positioning={select('Items positioning', positioningOptions)}
		disabled={boolean('Disabled', false)}
		responses={responses}
		handleChange={console.log}
		style={object('Generated style', {
			fieldsetStyle: {
				'border-color': color('Fieldset color', '#e80a4d'),
				'border-width': number('Border-width', 3, {
					range: true,
					min: 0,
					max: 20,
					step: 1,
				}),
				'border-radius': number('Border-radius', 5, {
					range: true,
					min: 0,
					max: 20,
					step: 1,
				}),
			},
			checkboxStyle: {
				'border-color': color('Checked label border color', '#e80a4d'),
				'border-width': number('Checked label border width', 3, {
					range: true,
					min: 0,
					max: 20,
					step: 1,
				}),
				'border-radius': number('Checked label border radius', 5, {
					range: true,
					min: 0,
					max: 20,
					step: 1,
				}),
			},
		})}
	/>
));