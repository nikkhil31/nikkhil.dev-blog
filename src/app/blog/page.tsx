import {getClient} from '@/core/graphql/client'
import {gql} from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { siteUrl } from '@/core/constant/env'

const GET_FEED_LIST = gql`
	query Publication {
		publication(host: "${siteUrl}") {
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
`

const Blog = async () => {
	const {data} = await getClient().query({
		query: GET_FEED_LIST
	})

	return (
		<div className='w-4/5 xl:w-[1200px]'>
			<Breadcrumb items={[{text: 'Home', href: '/'}, {text: 'Blogs'}]} />
			<div className='flex flex-col justify-center items-center'>
				<div className='flex flex-col justify-center items-center gap-6'>
					<h2 className='text-neutral-900 text-2xl sm:text-[40px] font-semibold text-center'>Blogs</h2>
					<p className='w-full sm:w-[538px] text-center text-neutral-700 text-sm sm:text-base'>
						Dive into the world of Full Stack Development, AI Innovations, and
						Industry Trends with my Expertise and Experiences.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-center'>
					{data.publication.posts.edges.map(({node: article}: any) => (
						<Link
							href={`/blog/${article?.series?.slug}/${article?.slug}`}
							className='sm:w-72'
							key={article.id}
						>
							<div className='relative'>
								<img
									src={`${article.coverImage.url}?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`}
									className='w-[436px] h-[267px] rounded-lg'
									alt={article.title}
								/>
								<span className='absolute top-0 right-0 font-semibold rounded border border-indigo-500 px-2 py-1 mt-2 mr-2 text-xs bg-black bg-opacity-40 text-white'>
									{article?.series?.name || 'NodeJS'}
								</span>
							</div>
							<div className='flex justify-between my-2'>
								<span className='text-xs'>
									{new Date(article.publishedAt).toLocaleDateString()}
								</span>
								<span className='text-xs'>
									{article.readTimeInMinutes} min read
								</span>
							</div>
							<div className='my-2'>
								<h3 className='text-2xl font-semibold'>{article.title}</h3>
							</div>
							<div className='my-2'>
								<p className='text-sm font-normal'>{article.brief}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog
