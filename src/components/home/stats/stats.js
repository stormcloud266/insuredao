import React from 'react'
import { Container, Title, Button, Flex } from '@UI'
import * as styles from './stats.module.scss'

const Stats = () => {
	return (
		<Container wrapper>
			<Title center>Insurance For Everyone!</Title>

			<Flex autoLayout className={styles.row}>
				<div className={styles.column}>
					<p className={styles.number}>50+</p>
					<p className={styles.label}>Insurance Products</p>
				</div>
				<div className={styles.column}>
					<p className={styles.number}>50+</p>
					<p className={styles.label}>Insurance Products</p>
				</div>
				<div className={styles.column}>
					<p className={styles.number}>50+</p>
					<p className={styles.label}>Insurance Products</p>
				</div>
			</Flex>
		</Container>
	)
}

export default Stats
