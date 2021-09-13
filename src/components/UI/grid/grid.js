import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './grid.module.scss'

const Grid = ({ children }) => {
	return <div className={styles.grid}>{children}</div>
}

export default Grid

Grid.propTypes = {
	children: PropTypes.node.isRequired,
}
