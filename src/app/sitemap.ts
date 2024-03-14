import {siteUrl} from '@/core/constant/env'
import fetcher from '@/core/fetch/fetcher'
import {MetadataRoute} from 'next'

const GET_SITEMAP = `
query Publication {
  publication(host: "nikkhil.dev") {
    seriesList(first: 19) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    posts(first: 99) {
      edges {
        node {
          id
          title
          slug
          series {
            slug
          }
        }
      }
    }
  }
}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await fetcher(GET_SITEMAP)
	let sitemapEntries: MetadataRoute.Sitemap = [
		{
			url: `https://${siteUrl}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: `https://${siteUrl}/about-me`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `https://${siteUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: `https://${siteUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `https://${siteUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7
		},
		{
			url: `https://${siteUrl}/term-of-use`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7
		}
	]

	data.publication.seriesList.edges.forEach((series: any) => {
		sitemapEntries.push({
			url: `https://${siteUrl}/blog/${series.node.slug}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		})

		data.publication.posts.edges
			.filter(
				(post: {node: {series: {slug: any}}}) =>
					post.node.series.slug === series.node.slug
			)
			.forEach((post: {node: {slug: any}}) => {
				sitemapEntries.push({
					url: `https://${siteUrl}/blog/${series.node.slug}/${post.node.slug}`,
					lastModified: new Date(),
					changeFrequency: 'weekly',
					priority: 0.6
				})
			})
	})

	return sitemapEntries
}
