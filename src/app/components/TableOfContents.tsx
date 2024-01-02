import React from 'react'

interface TableOfContentsItem {
	id: string
	level: number
	slug: string
	title: string
	parentId: string | null
}

interface TableOfContentItemProps {
	item: TableOfContentsItem
	children?: React.ReactNode
}

const TableOfContentItem: React.FC<TableOfContentItemProps> = ({
	item,
	children
}) => {
	return (
		<li>
			<a
				href={`#heading-${item.slug}`}
				aria-label={item.title}
				className='mb-1 flex items-center gap-x-2 rounded-lg px-2 focus:outline-none hover:bg-slate-800 focus:bg-slate-800'
			>
				<div
					id={item.id}
					className='w-full break-words py-2 text-base focus:outline-none text-slate-200'
				>
					{item.title}
				</div>
			</a>
			{children && (
				<ul className='pl-4'>
					{children}
				</ul>
			)}
		</li>
	)
}

interface TableOfContentsData {
	items: TableOfContentsItem[]
}

interface TableOfContentsProps {
	data: TableOfContentsData
}

const buildTableOfContents = (
	items: TableOfContentsItem[],
	parentId: string | null = null
): JSX.Element[] => {
	return items
		.filter((item) => item.parentId === parentId)
		.map((item) => (
			<TableOfContentItem key={item.id} item={item}>
				{buildTableOfContents(items, item.id)}
			</TableOfContentItem>
		))
}

const TableOfContents: React.FC<TableOfContentsProps> = ({data}) => {
	return (
		<section className='blog-content-main z-20 col-span-8 mb-10 px-4 md:z-10 lg:col-span-6 lg:col-start-2 lg:px-0 xl:col-span-6 xl:col-start-2 2xl:col-span-6 2xl:col-start-3'>
			<div className='relative'>
				<div className='relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 mx-auto mb-10'>
					<div className='pr-4 pb-4'>
						<h2 className='px-6 py-5 pb-4 text-lg font-semibold text-slate-100'>
							<span>Table of contents</span>
						</h2>
						<ul className='pl-4'>{buildTableOfContents(data.items)}</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TableOfContents
