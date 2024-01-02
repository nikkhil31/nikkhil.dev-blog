'use client'
import React, {useState, useEffect, useMemo} from 'react'
import Image, {StaticImageData} from 'next/image'
import quoteIcon from '@/core/images/quote.svg'
import quotes from '@/core/constant/quotes'
import {useRouter} from 'next/navigation'

const Quote = () => {
	const router = useRouter()

	const [selectedQuote, setSelectedQuote] = useState<{
		quotes: string
		author: string
		image: StaticImageData
	} | null>()

	const i = useMemo(() => Math.floor(Math.random() * quotes.length), [router])

	useEffect(() => {
		setSelectedQuote(quotes[i])
		return () => setSelectedQuote(null)
	}, [i])

	if (!selectedQuote) return null

	return (
		<div className='mt-28 w-4/5 xl:w-[1200px] flex flex-col lg:flex-row justify-center items-center  border-y-2 border-stone-300 py-7 gap-8'>
			<div className='lg:w-3/5'>
				<h2 className='text-neutral-900 text-[40px] font-normal text-center relative'>
					{selectedQuote.quotes}
					<Image src={quoteIcon} alt='' className='absolute -top-10 -left-8 -z-10' />
				</h2>
				<p className='mt-2 text-neutral-900 text-base font-normal text-center'>
					― {selectedQuote.author}
				</p>
			</div>
			<img
				src={selectedQuote.image.src}
				className='rounded-lg'
				alt={selectedQuote.author}
			/>
		</div>
	)
}

export default Quote
