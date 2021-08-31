import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero, Stats, InfoText } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Stats />
		<InfoText />
	</Layout>
)

export default IndexPage
