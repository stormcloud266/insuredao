import React from 'react'
import { Container, Flex } from '@UI'
import { Twitter, Medium, Telegram, Discord } from '@images/icons'
import * as styles from './footer.module.scss'

const Footer = () => {
	const links = [
		{
			url: 'https://medium.com/insuredao',
			icon: <Medium />,
		},
		{
			url: 'https://twitter.com/insuredao',
			icon: <Twitter />,
		},
		{
			url: 'https://t.me/joinchat/3UrkC9PvIgg1YTA1',
			icon: <Telegram />,
		},
		{
			url: 'https://discord.gg/8BA5f5rurq',
			icon: <Discord />,
		},
	]
	return (
		<footer className={styles.footer}>
			<Container wrapper>
				<Flex className={styles.inner}>
					<p className={styles.text}>© 2021 InsureDAO. All Rights Reserved.</p>
					<div className={styles.socialContainer}>
						{links.map(({ url, icon }) => (
							<a href={url} target='_blank' rel='noreferrer' key={url}>
								{icon}
							</a>
						))}
					</div>
				</Flex>
			</Container>
		</footer>
	)
}
export default Footer
