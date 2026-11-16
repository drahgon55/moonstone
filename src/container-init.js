import kind from 'enyo/src/kind.js';

import BodyText from './BodyText/BodyText.js';
import Button from './Button/Button.js';
import ContextualPopup from './ContextualPopup/ContextualPopup.js';
import ContextualPopupDecorator from './ContextualPopupDecorator/ContextualPopupDecorator.js';
import Divider from './Divider/Divider.js';
import Drawers from './Drawers/Drawers.js';
import FormCheckbox from './FormCheckbox/FormCheckbox.js';
import ImageItem from './ImageItem/ImageItem.js';
import Img from './Image/Image.js';
import LabeledTextItem from './LabeledTextItem/LabeledTextItem.js';
import Panels from './Panels/Panels.js';
import ProgressBar from './ProgressBar/ProgressBar.js';
import SelectableItem from './SelectableItem/SelectableItem.js';
import Spinner from './Spinner/Spinner.js';
import ToggleButton from './ToggleButton/ToggleButton.js';
import ToggleItem from './ToggleItem/ToggleItem.js';
import Tooltip from './Tooltip/Tooltip.js';
import TooltipDecorator from './TooltipDecorator/TooltipDecorator.js';

var ContainerInitializer = kind({
	components: [
		{kind: Drawers, drawers: [{}], components: [
			{kind: Panels, pattern: 'activity', components: [
				{components: [
					{kind: TooltipDecorator, components: [{kind: Button},{kind: Tooltip}]},
					{kind: ToggleButton},
					{kind: ToggleItem},
					{kind: FormCheckbox},
					{kind: Img},
					{kind: SelectableItem},
					{kind: ProgressBar},
					{kind: Spinner},
					{kind: BodyText},
					{kind: LabeledTextItem},
					{kind: ImageItem},
					{kind: Divider},
					{kind: ContextualPopupDecorator, components: [
						{},
						{kind: ContextualPopup, components: [{}]}
					]}
				]}
			]}
		]}
	]
});

export default function initContainer () {
	var initializer = new ContainerInitializer();
	initializer.renderInto(document.body, true);
	initializer.destroy();
};
