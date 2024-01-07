import React from 'react'
import Image from 'next/image'
import quoteIcon from '@/core/images/quote.svg'
import quotes from '@/core/constant/quotes'

const Quote = () => {
	const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]

	if (selectedQuote) null

	return (
		<div className='mt-28 w-4/5 xl:w-[1200px] flex flex-col lg:flex-row justify-center items-center  border-y-2 border-stone-300 py-7 gap-8'>
			<div className='lg:w-3/5'>
				<h2 className='text-neutral-900 text-[40px] dark:text-white font-normal text-center relative'>
					{selectedQuote.quotes}
					{/* <Image
						src={quoteIcon}
						alt=''
						className='absolute -top-10 -left-8 -z-10'
					/> */}
					<div className='absolute -top-10 -left-8 -z-10'>
						<svg width="104" height="104" viewBox="0 0 104 104" className='fill-[#D8D3FF] dark:fill-[#6552FF]' fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="968749 1">
							<path id="Vector" d="M20.3667 76.7C16.0333 71.9333 13.4333 66.7333 13.4333 58.0667C13.4333 42.9 24.2667 29.4667 39.4334 22.5333L43.3334 28.1667C29.0334 35.9667 26 45.9333 25.1334 52.4333C27.3 51.1333 30.3333 50.7 33.3667 51.1333C41.1667 52 47.2333 58.0667 47.2333 66.3C47.2333 70.2 45.5 74.1 42.9 77.1333C39.8667 80.1667 36.4 81.4667 32.0667 81.4667C27.3 81.4667 22.9667 79.3 20.3667 76.7ZM63.7 76.7C59.3667 71.9333 56.7667 66.7333 56.7667 58.0667C56.7667 42.9 67.6 29.4667 82.7667 22.5333L86.6667 28.1667C72.3667 35.9667 69.3334 45.9333 68.4667 52.4333C70.6334 51.1333 73.6667 50.7 76.7 51.1333C84.5 52 90.5667 58.0667 90.5667 66.3C90.5667 70.2 88.8334 74.1 86.2334 77.1333C83.6333 80.1667 79.7333 81.4667 75.4 81.4667C70.6333 81.4667 66.3 79.3 63.7 76.7Z"/>
							</g>
						</svg>
					</div>
				</h2>
				<p className='mt-2 text-neutral-900 dark:text-[#E3E3E3] text-base font-normal text-center'>
					― {selectedQuote.author}
				</p>
			</div>
			<Image
				src={selectedQuote.image.src}
				className='rounded-lg'
				alt={selectedQuote.author}
				width={225}
				height={225}
			/>
		</div>
	)
}

export default Quote
