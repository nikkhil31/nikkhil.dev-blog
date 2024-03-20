import { siteUrl } from "@/core/constant/env";

const GET_SERIES_LIST = (slug:string) =>  `
		query Publication {
			publication(host: "${siteUrl}") {
                series(slug: "${slug}") {
                    id
                    name
                    description {
                        text
                    }
                    posts(first: 10) {
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
		}
	`

export default GET_SERIES_LIST