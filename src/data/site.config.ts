interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Vladi-KZ', // Site author
	title: 'Doctora Disney', // Site title
	description: 'Salud al día.', // Description to display in the meta tags
	lang: 'es',
	ogLocale: 'es',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
