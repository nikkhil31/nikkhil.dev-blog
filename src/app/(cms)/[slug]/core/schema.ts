import {siteUrl} from '@/core/constant/env'

export const GET_PAGE = (slug: string) => `
query Publication {
    publication(host: "${siteUrl}") {
      descriptionSEO
      staticPage(slug: "${slug}") {
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
