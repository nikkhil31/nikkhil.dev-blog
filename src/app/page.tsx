import Image from 'next/image'
import nikhil from '@/core/images/nikhil.jpg'
import Feed from './components/Feed'
import tech from '@/core/constant/tech'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* Hero Section */}

			<div className='h-auto sm:h-[606px] flex-col justify-center items-center gap-12 flex'>
				<div className='flex-col justify-start items-center gap-6 flex'>
					<div className='text-center w-4/5 xl:w-[1200px]'>
						<span className='text-black text-3xl sm:text-5xl font-semibold'>Hello</span>
						<span className='text-black text-[32px] font-semibold'>👋</span>
						<span className='text-black text-3xl sm:text-5xl font-semibold'>
							{' '}
							My Name Is{' '}
						</span>
						<span className='text-indigo-500 text-3xl sm:text-5xl lg:block xl:inline font-semibold'>
							Nikhil Limbad
						</span>
					</div>
					<div className='w-4/5 sm:w-[683px] text-center text-neutral-700 text-sm sm:text-base'>
						Experienced Full Stack Developer specializing in React, AWS, and
						OpenAI. Passionate about creating innovative, high-quality solutions
						for diverse industry projects.
					</div>
				</div>
				<div className='w-full sm:w-[424px] h-auto sm:h-[427px] relative'>
					<Image
						className='w-4/5 xl:w-[1200px] mx-auto sm:w-[424px] h-auto sm:h-[404px] rounded-lg cursor-pointer'
						src={nikhil}
						alt=''
					/>
					<Link href={'/about-me'} className='w-[140px] h-[46px] px-6 py-3 left-1/2 -translate-x-1/2 -bottom-6 xl:-bottom-0 absolute bg-indigo-500 rounded shadow justify-center items-center gap-2 inline-flex'>
						<div className='text-white text-lg font-bold cursor-pointer'>
							About Me
						</div>
					</Link>
				</div>
			</div>

			<div className='mt-28 flex flex-col justify-center items-center'>
				<div className='flex flex-col justify-center gap-6 items-center'>
					<h2 className='text-neutral-900 text-2xl sm:text-[40px] font-semibold'>
						Tech Enthusiast
					</h2>
					<p className='w-full sm:w-[538px] text-center text-neutral-700 text-sm sm:text-base'>
						In the realm of technology, my core specializations focus on
						delivering versatile and cutting-edge solutions.
					</p>
				</div>
				<div className='mt-12 flex w-4/5 xl:w-[1200px] flex-wrap gap-6 justify-center px-4 sm:px-12'>
					{tech.map((item, index) => (
						<div
							key={index}
							className='w-28 h-24 bg-white rounded-lg flex flex-col justify-center items-center'
						>
							<Image src={item.image} alt={item.title} />
							<span className='mt-3'>{item.title}</span>
						</div>
					))}
				</div>
			</div>

			<Feed />
		</>
	)
}
