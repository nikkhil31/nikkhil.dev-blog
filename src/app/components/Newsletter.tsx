import React from 'react'

const Newsletter = () => {
	return (
		<div className='mt-12 lg:mt-28 flex flex-col items-center px-4 lg:px-0'>
			<div className='w-4/5 xl:w-[1200px] bg-stone-200 rounded-lg flex flex-col lg:flex-row items-center p-6 lg:p-12'>
				<div className='flex flex-col lg:flex-grow justify-start items-center lg:items-start text-center lg:text-left'>
					<h2 className='text-2xl lg:text-4xl font-semibold mb-4'>
						Email Newsletter
					</h2>
					<p className='text-neutral-700 text-sm lg:text-base font-normal'>
						I love building things and am periodically available for hire on all
						types of software engineering projects.
					</p>
				</div>
				<div className='flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-stretch w-full lg:w-auto mt-6 lg:mt-0 gap-4'>
					<input
						type='email'
						placeholder='Enter your email'
						className='w-full lg:w-64 px-4 py-2 bg-stone-100 rounded-lg text-neutral-900 text-base font-normal border border-stone-300 focus:outline-none'
					/>
					<button className='h-12 px-6 py-2 bg-indigo-500 rounded shadow flex items-center justify-center'>
						<span className='text-white text-lg font-bold'>Subscribe</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
