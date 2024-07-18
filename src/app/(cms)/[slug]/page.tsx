import React, { Suspense } from 'react'
import fetcher from '@/core/fetch/fetcher'
import Breadcrumb from '@/app/components/Breadcrumb'
import {GET_PAGE} from './core/schema'
import {notFound} from 'next/navigation'
import '@/app/blog/[series]/[slug]/blogdetail.css'


import type {Metadata, ResolvingMetadata} from 'next'

type Props = {
	params: {slug: string}
	searchParams: {[key: string]: string | string[] | undefined}
}

export async function generateMetadata(
	{params, searchParams}: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const data = await fetcher(GET_PAGE(params.slug))

	if (!data.publication.staticPage) {
		notFound()
	}

	return {
		title: data.publication.staticPage.title,
		description: data?.publication?.staticPage?.seo?.description
	}
}

const CMS: React.FC<{params: {slug: string}}> = async ({params}) => {
	const data = await fetcher(GET_PAGE(params.slug))

	if (!data.publication.staticPage) {
		notFound()
	}

	return (
		<div className='w-4/5 xl:w-[1200px]'>
			<Suspense fallback={<p>Loading feed...</p>}>
				<Breadcrumb
					items={[
						{text: 'Home', href: '/'},
						{text: data.publication.staticPage.title}
					]}
				/>

				<div className='flex flex-col justify-center gap-6 items-center'>
					<h2 className='text-neutral-900 text-2xl sm:text-[40px] font-semibold dark:text-white'>
						{data.publication.staticPage.title}
					</h2>
					<p className='w-full sm:w-[538px] text-center text-neutral-700 text-sm sm:text-base dark:text-[#E3E3E3]'>
						{data?.publication?.staticPage?.seo?.description || ''}
					</p>
				</div>

				<div
					className='prose prose-lg mt-8 mx-auto mb-10 min-h-30 break-words dark:prose-dark xl:prose-xl'
					dangerouslySetInnerHTML={{
						__html: data.publication.staticPage.content.html
					}}
				/>
			</Suspense>
		</div>
	)
}

export default CMS
