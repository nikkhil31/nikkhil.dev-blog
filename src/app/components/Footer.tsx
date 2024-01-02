import React from 'react'

import Image from 'next/image'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'

const Footer: React.FC = () => {
	return (
		<footer className='mt-28 w-4/5 xl:w-[1200px] h-[178px] flex-col justify-center items-center gap-10 flex'>
			<div className='flex-col justify-start items-center gap-8 flex'>
				<div className='flex gap-8 flex-wrap justify-center'>
					<div className='text-neutral-900 text-lg font-normal'>Home</div>
					<div className='text-neutral-900 text-lg font-normal'>Blog</div>
					<div className='text-neutral-900 text-lg font-normal'>About</div>
					<div className='text-neutral-900 text-lg font-normal'>Contact</div>
					<div className='text-neutral-900 text-lg font-normal'>Hire</div>
				</div>
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
			<div className='self-stretch h-[52px] flex-col justify-start items-center gap-8 flex'>
				<div className='self-stretch h-[0px] border border-stone-300'></div>
				<div className='text-neutral-700 text-base font-normal'>
					Nikhil Limbad @ 2023
				</div>
			</div>
		</footer>
	)
}

export default Footer
