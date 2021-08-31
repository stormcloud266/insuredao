import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero, Stats, InfoText, Cards, Cta } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Stats />
		<InfoText />
		<Cards />
		<Cta />
	</Layout>
)

export default IndexPage
