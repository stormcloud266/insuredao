import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './container.module.scss'

const Container = ({
	wrapper,
	wrapperSm,
	wrapperSmOnMd,
	section,
	sectionTop,
	sectionBottom,
	textBlock,
	isSection,
	className,
	children,
	...rest
}) => {
	const classes = classnames(
		wrapper && styles.wrapper,
		wrapperSm && styles.wrapperSm,
		wrapperSmOnMd && styles.wrapperSmOnMd,
		section && styles.section,
		sectionTop && styles.sectionTop,
		sectionBottom && styles.sectionBottom,
		textBlock && styles.textBlock,
		className && className
	)

	return isSection ? (
		<section className={classes} {...rest}>
			{children}
		</section>
	) : (
		<div className={classes} {...rest}>
			{children}
		</div>
	)
}

export default Container

Container.propTypes = {
	wrapper: PropTypes.bool,
	wrapperSm: PropTypes.bool,
	wrapperSmOnMd: PropTypes.bool,
	section: PropTypes.bool,
	sectionTop: PropTypes.bool,
	sectionBottom: PropTypes.bool,
	textBlock: PropTypes.bool,
	isSection: PropTypes.bool,
	className: PropTypes.string,
	rest: PropTypes.object,
	children: PropTypes.node.isRequired,
}
