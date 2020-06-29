import isEqual from 'lodash.isequal';

export const areEqual = (prevProps, props) => {
	if (props.bindingsDependency && isEqual(prevProps.bindings, props.bindings))
		return false;
	if (props.response) return isEqual(prevProps.response, props.response);
	if (props.responses) return isEqual(prevProps.responses, props.responses);
	if (props.cells) return isEqual(prevProps.cells, props.cells);
	return true;
};