import {siteUrl} from '@/core/constant/env'

// schema.ts
export const GET_BLOG_LIST = `
	query Publication {
		publication(host: "${siteUrl}") {
			posts(first: 21) {
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
`
