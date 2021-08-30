import React from 'react'
import { Link } from 'gatsby'
import { Logo } from '@images/icons'
import { Container, Button } from '@UI'
import * as styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					<Logo />
				</Link>

				<Button small href='https://example.com'>
					Launch App
				</Button>
			</Container>
		</header>
	)
}

export default Header
