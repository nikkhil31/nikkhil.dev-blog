import {siteUrl} from '@/core/constant/env'

// schema.ts
export const GET_FEED_LIST = `
  query Publication {
    publication(host: "${siteUrl}") {
      posts(first: 9) {
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
