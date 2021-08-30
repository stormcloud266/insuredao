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
	bgDark,
	bgAccent,
	isSection,
	className,
	children,
}) => {
	const classes = classnames(
		wrapper && styles.wrapper,
		wrapperSm && styles.wrapperSm,
		wrapperSmOnMd && styles.wrapperSmOnMd,
		section && styles.section,
		sectionTop && styles.sectionTop,
		sectionBottom && styles.sectionBottom,
		textBlock && styles.textBlock,
		bgDark && styles.bgDark,
		bgAccent && styles.bgAccent,
		className && className
	)

	return isSection ? (
		<section className={classes}>{children}</section>
	) : (
		<div className={classes}>{children}</div>
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
	bgDark: PropTypes.bool,
	bgAccent: PropTypes.bool,
	isSection: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
