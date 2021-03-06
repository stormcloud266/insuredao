import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as styles from './title.module.scss'

const Title = ({
	tag,
	center,
	black,
	sm,
	lg,
	weightMd,
	margin,
	className,
	children,
	...rest
}) => {
	const classes = classnames(
		center && styles.center,
		black && styles.black,
		margin && styles.margin,
		sm && styles.sm,
		lg && styles.lg,
		weightMd && styles.weightMd,
		styles.title,
		className
	)

	switch (tag) {
		case 'h1':
			return (
				<h1 className={classes} {...rest}>
					{children}
				</h1>
			)
		case 'h3':
			return (
				<h3 className={classes} {...rest}>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4 className={classes} {...rest}>
					{children}
				</h4>
			)
		case 'h5':
			return (
				<h5 className={classes} {...rest}>
					{children}
				</h5>
			)
		case 'h6':
			return (
				<h6 className={classes} {...rest}>
					{children}
				</h6>
			)
		case 'p':
			return (
				<p className={classes} {...rest}>
					{children}
				</p>
			)
		default:
			return (
				<h2 className={classes} {...rest}>
					{children}
				</h2>
			)
	}
}

export default Title

Title.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
	center: PropTypes.bool,
	black: PropTypes.bool,
	sm: PropTypes.bool,
	lg: PropTypes.bool,
	weightMd: PropTypes.bool,
	margin: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
