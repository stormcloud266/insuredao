import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import * as styles from './button.module.scss'

const Button = ({
	href,
	to,
	square,
	white,
	green,
	small,
	children,
	...rest
}) => {
	const classes = classnames(
		square && styles.square,
		white && styles.white,
		green && styles.green,
		small && styles.small,
		styles.button
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
