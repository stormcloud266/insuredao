import React from 'react'
import { Container, Flex } from '@UI'
import { Twitter, Medium, Telegram, Discord } from '@images/icons'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<Container wrapper>
			<Flex className={styles.inner}>
				<p className={styles.text}>© 2021 InsureDAO. All Rights Reserved.</p>
				<div className={styles.socialContainer}>
					<a
						href='https://twitter.com/insuredao'
						target='_blank'
						rel='noreferrer'
					>
						<Twitter />
					</a>
					<a
						href='https://medium.com/insuredao'
						target='_blank'
						rel='noreferrer'
					>
						<Medium />
					</a>
					<a
						href='https://t.me/joinchat/3UrkC9PvIgg1YTA1'
						target='_blank'
						rel='noreferrer'
					>
						<Telegram />
					</a>
					<a
						href='https://discord.gg/8BA5f5rurq'
						target='_blank'
						rel='noreferrer'
					>
						<Discord />
					</a>
				</div>
			</Flex>
		</Container>
	</footer>
)

export default Footer
