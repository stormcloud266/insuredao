const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'InsureDAO',
		siteUrl: `https://insuredao.fi`,
		description: `InsureDAO is the open insurance market protocol.`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/favicon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'static',
				path: './static',
			},
			__key: 'static',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'avatars',
				path: './src/assets/images/avatars',
			},
			__key: 'avatars',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@UI': path.resolve(__dirname, 'src/components/UI'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@styles': path.resolve(__dirname, 'src/assets/styles/'),
				},
			},
		},
	],
}
