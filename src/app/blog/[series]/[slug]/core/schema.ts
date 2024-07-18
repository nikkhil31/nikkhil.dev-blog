import {siteUrl} from '@/core/constant/env'

export const GET_DETAIL = (slug: string) => `
		query Publication {
			publication(host: "${siteUrl}") {
				post(slug: "${slug}") {
					id
					title
					readTimeInMinutes
					publishedAt

					features {
						tableOfContents {
						  isEnabled
						  items {
							id
							level
							slug
							title
							parentId
						  }
						}
					  }

					content {
						html
						markdown
					}
					series {
						name
						slug
					}
					coverImage {
						url
					}
					seo {
						title
						description
					  }
				}
			}
		}
	`

export const GET_BLOG_LIST = (series: string) => `query Publication {
    publication(host: "${siteUrl}") {
        series(slug: "${series}") {
            name
            description {
                text
            }
            posts(first: 3) {
                edges {
                    node {
                        id
                        title
                        slug
                        brief
                        readTimeInMinutes
                        publishedAt
                        series {
                            name
                            slug
                        }
                        coverImage {
                            url
                        }
                    }
                }
            }
        }
    }
}`
