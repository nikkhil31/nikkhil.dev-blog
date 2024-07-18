import {siteUrl} from '@/core/constant/env'

export const GET_PAGE = (slug: string) => `
query Publication {
    publication(host: "${siteUrl}") {
      id
      descriptionSEO
      staticPage(slug: "${slug}") {
        id
        title
        content {
          html
        }
        seo {
          title
          description
        }
      }
    }
  }
`
