import React from 'react'

import {gql} from '@apollo/client'

import '@/app/blog/[series]/[slug]/blogdetail.css'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'
import Image from 'next/image'
import {getClient} from '@/core/graphql/client'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import TableOfContents from '@/app/components/TableOfContents'
import { siteUrl } from '@/core/constant/env'

const Detail: React.FC<{params: {slug: string}}> = async ({params}) => {
	const GET_DETAIL = gql`
		query Publication {
			publication(host: "${siteUrl}") {
				post(slug: "${params.slug}") {
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
				}
			}
		}
	`

	const {data} = await getClient().query({
		query: GET_DETAIL
	})

	const post = data.publication.post

	const {data: list} = post?.series?.slug
		? await getClient().query({
				query: gql`
			query Publication {
				publication(host: "${siteUrl}") {
					series(slug: "${post.series.slug}") {
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
			}
		`
		  })
		: {data: null}

	return (
		<div className='w-4/5 xl:w-[1200px]'>
			<Breadcrumb
				items={[
					{text: 'Home', href: '/'},
					{text: 'Blogs', href: '/blog'},
					{text: post?.series?.name, href: `/blog/${post?.series?.slug}`},
					{text: post?.title}
				]}
			/>
			<div>
				<img
					className='w-full rounded-lg shadow'
					src={`${post.coverImage.url}?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`}
				/>
				<div className='mt-8 flex justify-between'>
					<div className='flex gap-3 items-center'>
						<img
							className='w-[37px] h-[37px] rounded-full'
							src='https://via.placeholder.com/37x37'
						/>
						<h3 className='text-neutral-900 text-base font-normal leading-normal'>
							Nikhil Limbad
						</h3>
					</div>
					<div className=''>
						<p className='text-neutral-700 text-xs font-normal leading-[18px]'>
							{new Date(post.publishedAt).toLocaleDateString()}
						</p>
						<p className='text-indigo-500 text-xs font-normal leading-[18px]'>
							{post.readTimeInMinutes} mins
						</p>
					</div>
				</div>

				<div className='mt-8'>
					<h1 className='text-neutral-900 text-3xl md:text-5xl font-semibold'>
						{post.title}
					</h1>
				</div>

				<div className='border border-stone-300 mt-8' />

				<div className='mt-8'>
					<TableOfContents data={post.features.tableOfContents} />
				</div>

				<div className='mt-8'>
					<span
						className='prose prose-lg mx-auto mb-10 min-h-30 break-words dark:prose-dark xl:prose-xl'
						dangerouslySetInnerHTML={{__html: post.content.html}}
					/>
				</div>

				<div className='mt-14 flex gap-3 items-center'>
					<p>Share this Article on</p>
					<ul className='flex gap-3'>
						<li>
							<Image src={linkedinIcon} alt='linkedinIcon' />
						</li>
						<li>
							<Image src={mailIcon} alt='mailIcon' />
						</li>
						<li>
							<Image src={gitIcon} alt='giticon' />
						</li>
					</ul>
				</div>
			</div>

			{list && (
				<div className='mt-14 text-neutral-900 text-[40px] font-semibold'>
					<h1>More On This Topic</h1>

					<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-center'>
						{list &&
							list.publication.series.posts.edges.map(
								({node: article}: any) => (
									<Link
										href={`/blog/${article?.series?.slug}/${article?.slug}`}
										className='w-72'
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
											<h3 className='text-2xl font-semibold'>
												{article.title}
											</h3>
										</div>
										<div className='my-2'>
											<p className='text-sm font-normal'>{article.brief}</p>
										</div>
									</Link>
								)
							)}
					</div>
				</div>
			)}
		</div>
	)
}

export default Detail
