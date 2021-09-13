import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as styles from './button.module.scss'

const Button = ({
	href,
	to,
	white,
	green,
	small,
	className,
	children,
	...rest
}) => {
	const classes = classnames(
		white && styles.white,
		green && styles.green,
		small && styles.small,
		styles.button,
		className
	)

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				target='_blank'
				rel='noreferrer'
				{...rest}
			>
				{children}
			</a>
		)
	} else if (to) {
		return (
			<Link to={to} {...rest} className={classes}>
				{children}
			</Link>
		)
	} else {
		return (
			<button {...rest} className={classes}>
				{children}
			</button>
		)
	}
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	white: PropTypes.bool,
	green: PropTypes.bool,
	sm: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
