import React, {Suspense} from 'react'

import '@/app/blog/[series]/[slug]/blogdetail.css'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'
import nikhil from '@/core/images/nikhil.jpg'
import Image from 'next/image'

import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import TableOfContents from '@/app/components/TableOfContents'
import fetcher from '@/core/fetch/fetcher'
import {GET_BLOG_LIST, GET_DETAIL} from './core/schema'

import type {Metadata, ResolvingMetadata} from 'next'

type Props = {
	params: {slug: string}
	searchParams: {[key: string]: string | string[] | undefined}
}

export async function generateMetadata(
	{params, searchParams}: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const data = await fetcher(GET_DETAIL(params.slug))

	return {
		title: data.publication.post.seo.title,
		description: data.publication.post.seo.description
	}
}

const Detail: React.FC<{params: {slug: string}}> = async ({params}) => {
	const data = await fetcher(GET_DETAIL(params.slug))

	const post = data.publication.post

	const list = post?.series?.slug
		? await fetcher(GET_BLOG_LIST(post.series.slug))
		: null

	return (
		<div className='w-4/5 xl:w-[1200px]'>
			<Suspense fallback={<p>Loading feed...</p>}>
				<Breadcrumb
					items={[
						{text: 'Home', href: '/'},
						{text: 'Blogs', href: '/blog'},
						{text: post?.series?.name, href: `/blog/${post?.series?.slug}`},
						{text: post?.title}
					]}
				/>
				<div>
					<Image
						className='w-full rounded-lg shadow'
						src={`${post.coverImage.url}?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`}
						alt={post?.title}
						width={1600}
						height={840}
					/>
					<div className='mt-8 flex justify-between'>
						<div className='flex gap-3 items-center'>
							<Image
								className='w-[37px] h-[37px] rounded-full'
								src={nikhil}
								alt='Author'
							/>
							<h3 className='text-neutral-900 text-base font-normal leading-normal dark:text-white'>
								Nikhil Limbad
							</h3>
						</div>
						<div className=''>
							<p className='text-neutral-700 text-xs font-normal leading-[18px] dark:text-[#E3E3E3]'>
								{new Date(post.publishedAt).toLocaleDateString()}
							</p>
							<p className='text-indigo-500 text-xs font-normal leading-[18px] dark:text-[#E3E3E3]'>
								{post.readTimeInMinutes} mins
							</p>
						</div>
					</div>

					<div className='mt-8'>
						<h1 className='text-neutral-900 text-3xl md:text-5xl font-semibold dark:text-white'>
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
						<p className='dark:text-white'>Share this Article on</p>
						<ul className='flex gap-3'>
							<li>
								<Link href={'#'}>
									<svg
										className='stroke-black dark:stroke-white'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M18.6667 13.3333C19.7275 13.3333 20.7449 13.7547 21.4951 14.5048C22.2452 15.255 22.6667 16.2724 22.6667 17.3333V21.9999H20V17.3333C20 16.9796 19.8595 16.6405 19.6095 16.3904C19.3594 16.1404 19.0203 15.9999 18.6667 15.9999C18.313 15.9999 17.9739 16.1404 17.7238 16.3904C17.4738 16.6405 17.3333 16.9796 17.3333 17.3333V21.9999H14.6667V17.3333C14.6667 16.2724 15.0881 15.255 15.8382 14.5048C16.5884 13.7547 17.6058 13.3333 18.6667 13.3333Z'
											strokeWidth='1.1'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M12 14H9.33334V22H12V14Z'
											strokeWidth='1.1'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M10.6667 11.9999C11.4031 11.9999 12 11.403 12 10.6666C12 9.93021 11.4031 9.33325 10.6667 9.33325C9.9303 9.33325 9.33334 9.93021 9.33334 10.6666C9.33334 11.403 9.9303 11.9999 10.6667 11.9999Z'
											strokeWidth='1.1'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<circle cx={16} cy={16} r='15.5' />
									</svg>
								</Link>
							</li>
							<li>
								<Link href={'#'}>
									<svg
										className='stroke-black dark:stroke-white'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.6667 10.6667H21.3333C22.0667 10.6667 22.6667 11.2667 22.6667 12.0001V20.0001C22.6667 20.7334 22.0667 21.3334 21.3333 21.3334H10.6667C9.93334 21.3334 9.33334 20.7334 9.33334 20.0001V12.0001C9.33334 11.2667 9.93334 10.6667 10.6667 10.6667Z'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M22.6667 12L16 16.6667L9.33334 12'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<circle cx={16} cy={16} r='15.5' />
									</svg>
								</Link>
							</li>
							<li>
								<Link href={'#'}>
									{/* <Image src={gitIcon} alt='giticon' className='cursor-pointer' /> */}
									<svg
										className='stroke-black dark:stroke-white'
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M14 20.6668C10.6667 21.6668 10.6667 19.0001 9.33334 18.6668M18.6667 22.6668V20.0868C18.6917 19.7689 18.6487 19.4493 18.5407 19.1493C18.4326 18.8493 18.262 18.5757 18.04 18.3468C20.1333 18.1135 22.3333 17.3201 22.3333 13.6801C22.3332 12.7493 21.9751 11.8543 21.3333 11.1801C21.6372 10.3658 21.6158 9.46569 21.2733 8.66679C21.2733 8.66679 20.4867 8.43345 18.6667 9.65345C17.1387 9.23934 15.528 9.23934 14 9.65345C12.18 8.43345 11.3933 8.66679 11.3933 8.66679C11.0509 9.46569 11.0294 10.3658 11.3333 11.1801C10.6868 11.8593 10.3284 12.7624 10.3333 13.7001C10.3333 17.3135 12.5333 18.1068 14.6267 18.3668C14.4073 18.5934 14.2382 18.8637 14.1302 19.1601C14.0222 19.4564 13.9779 19.7722 14 20.0868V22.6668'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<circle cx={16} cy={16} r='15.5' />
									</svg>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</Suspense>
			<Suspense fallback={<p>Loading feed...</p>}>
				{list && (
					<div className='mt-14 text-neutral-900 text-[40px] font-semibold'>
						<h1 className='dark:text-white'>More On This Topic</h1>

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
												<Image
													src={`${article.coverImage.url}?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`}
													className='w-[436px] h-[267px] rounded-lg'
													alt={article.title}
													width={436}
													height={267}
												/>
												<span className='absolute top-0 right-0 font-semibold rounded border border-indigo-500 px-2 py-1 mt-2 mr-2 text-xs bg-black bg-opacity-40 text-white'>
													{article?.series?.name || 'NodeJS'}
												</span>
											</div>
											<div className='flex justify-between my-2'>
												<span className='text-xs dark:text-[#E3E3E3]'>
													{new Date(article.publishedAt).toLocaleDateString()}
												</span>
												<span className='text-xs dark:text-[#E3E3E3]'>
													{article.readTimeInMinutes} min read
												</span>
											</div>
											<div className='my-2 dark:text-white'>
												<h3 className='text-2xl font-semibold'>
													{article.title}
												</h3>
											</div>
											<div className='my-2 dark:text-[#E3E3E3]'>
												<p className='text-sm font-normal'>{article.brief}</p>
											</div>
										</Link>
									)
								)}
						</div>
					</div>
				)}
			</Suspense>
		</div>
	)
}

export default Detail
