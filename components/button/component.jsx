import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { forwardClassRef } from '../utils/forwardref-wrapper.jsx';
import * as Styled from './styled.jsx';
import { BaseButton } from './base-button.jsx';

/** Standard button with transition styles */
export const Button = forwardClassRef(
	class Button extends PureComponent {
		static propTypes = {
			...BaseButton.propTypes,
			/** The type of button (for instance, submit) */
			type: PropTypes.string,
		};

		static defaultProps = {
			type: 'button',
		};

		render() {
			const { forwardedRef, ...props } = this.props;
			return <BaseButton baseComponent={Styled.Button} {...props} ref={forwardedRef} />;
		}
	},
);
