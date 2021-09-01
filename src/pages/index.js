import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import {
	Hero,
	Stats,
	InfoText,
	Cards,
	Works,
	Backers,
	Partners,
	Team,
	Cta,
} from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Stats />
		<InfoText />
		<Cards />
		<Works />
		<Backers />
		<Partners />
		<Team />
		<Cta />
	</Layout>
)

export default IndexPage
