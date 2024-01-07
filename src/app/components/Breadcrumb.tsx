import Link from 'next/link'
import React, {FC} from 'react'

interface Items {
	text: string
	href?: string
}

const Breadcrumb: FC<{items:Items[]}> = ({items}) => {
	if (!items || items.length === 0) return null

	return (
		<ol
			className='flex items-center flex-wrap whitespace-nowrap mb-20 overflow-hidden'
			aria-label='Breadcrumb'
		>
			{items.map((item, index: number) => (
				<li key={index} className='inline-flex items-center'>
					{item.href ? (
						<>
							<Link
								className='flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:hover:text-indigo-500 dark:text-white'
								href={item.href}
							>
								{item.text}
							</Link>
							{index < items.length - 1 && (
								<svg
									className='flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-white'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='m9 18 6-6-6-6' />
								</svg>
							)}
						</>
					) : (
						<span
							className='text-sm font-semibold text-gray-800 truncate dark:text-white'
							aria-current={index === items.length - 1 ? 'page' : undefined}
						>
							{item.text}
						</span>
					)}
				</li>
			))}
		</ol>
	)
}

export default Breadcrumb
