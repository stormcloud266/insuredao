import React from 'react'
import { Container, Title, Flex } from '@UI'
import { Pyramid } from '@images/icons'
import * as styles from './infoText.module.scss'

const InfoText = () => {
	return (
		<Container wrapper section isSection>
			<Flex>
				<div className={styles.textContainer}>
					<Title margin>
						Insurance is the masterpiece of DeFi scalability - we stabilize the
						entire ecosystem
					</Title>
					<p className={styles.body}>
						What makes InsureDAO different is our ability to handle everything
						from creating and selling insurance, to managing surplus funds. We
						enable DeFi protocols to easily provide full-featured insurance
						services to users, whilst ensuring maximum returns for our
						underwriters.
					</p>
				</div>

				<div className={styles.iconContainer}>
					<Pyramid />
				</div>
			</Flex>
		</Container>
	)
}

export default InfoText
