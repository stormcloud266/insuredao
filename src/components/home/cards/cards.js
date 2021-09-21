import React from 'react'
import classnames from 'classnames'
import { Fade } from 'react-awesome-reveal'
import { Container, Flex, Button } from '@UI'
import { Check } from '@images/icons'
import * as styles from './cards.module.scss'

const Cards = () => {
	const data = [
		{
			color: 'green',
			type: 'Buyers',
			title: 'Get covered everywhere you go',
			body: (
				<>
					<p>
						With our simple user interface and user experience, anyone can
						operate InsureDAO to purchase a wide variety of insurance policies
						at any time.
					</p>
					<p>
						We offer a range of insurance products, which use dynamic pricing in
						the calculation of premiums to prevent sellouts.
					</p>
				</>
			),
			checklist: [
				'Friendly UIX',
				'Wide range of products',
				'Available anytime',
			],
			buttonText: 'Buy Insurance',
			url: 'https://insuredao.gitbook.io/insuredao/guides/get-insured',
		},
		{
			color: 'blue',
			type: 'Underwriters',
			title: 'Support trustworthy projects and profit',
			body: (
				<>
					<p>
						InsureDAO enables underwriters to provide liquidity where they want,
						leverage their funds and adjust their risk.
					</p>
					<p>
						Additionally, we invest the locked funds in the best lending
						protocol, allowing you to receive; the premiums of the insurance
						buyer, the INSURE token, and the investment profits.
					</p>
				</>
			),
			checklist: [
				'Adjustable risk and return',
				'$INSURE token incentives',
				'Maximize capital efficiency',
			],
			buttonText: 'Fund Now',
			url: 'https://insuredao.gitbook.io/insuredao/guides/earn-insurance-premium',
		},
		{
			color: 'purple',
			type: 'Protocols',
			title: 'Make your protocol secure & reliable',
			body: (
				<>
					<p>
						InsureDAO provides full-featured insurance services, that can be
						easily integrated into any DeFi protocol.
					</p>
					<p>
						It allows every DeFI protocol to begin offering its own insurance
						services immediately, allowing your users to feel secure and
						confident in their investments.
					</p>
				</>
			),
			checklist: ['Free creation', 'Quick integration', 'No management costs'],
			buttonText: 'Build',
			url: 'https://insuredao.gitbook.io/insuredao/guides/create-insurance-pool',
		},
	]

	return (
		<Container wrapperSmOnMd sectionBottom isSection>
			<Flex autoLayout collapseOnMd>
				{data.map((item) => {
					const classes = classnames(styles[item.color], styles.card)

					return (
						<div className={classes} key={item.title}>
							<div>
								<p className={styles.type}>{item.type}</p>
								<h3 className={styles.title}>{item.title}</h3>
								<div className={styles.body}>{item.body}</div>
							</div>
							<div>
								<Fade cascade damping={0.2} triggerOnce>
									<ul className={styles.list}>
										{item.checklist.map((listItem) => (
											<li key={listItem}>
												<Check /> {listItem}
											</li>
										))}
									</ul>
								</Fade>
								<Button href={item.url} className={styles.button}>
									{item.buttonText} <span>&rarr;</span>
								</Button>
							</div>
						</div>
					)
				})}
			</Flex>
		</Container>
	)
}

export default Cards
