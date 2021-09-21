import React from 'react'
import { Link } from 'gatsby'
import { Container, Button } from '@UI'
import logo from '@images/logo.svg'
import * as styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo} aria-label='Go Home'>
					<img src={logo} alt='InsureDAO logo' />
				</Link>

				<Button small href='https://example.com'>
					Launch App
				</Button>
			</Container>
		</header>
	)
}

export default Header
