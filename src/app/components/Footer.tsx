import React from 'react'

import Image from 'next/image'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'
import Link from 'next/link'
import { social } from '@/core/constant/env'

const Footer: React.FC = () => {
	return (
		<footer className='mt-28 w-4/5 xl:w-[1200px] h-[178px] flex-col justify-center items-center gap-10 flex'>
			<div className='flex-col justify-start items-center gap-8 flex'>
				<div className='flex gap-8 flex-wrap justify-center'>
					<Link href={'/'} className='text-neutral-900 text-lg font-normal'>
						Home
					</Link>
					<Link href={'/blog'} className='text-neutral-900 text-lg font-normal'>
						Blog
					</Link>
					<Link
						href={'/about-me'}
						className='text-neutral-900 text-lg font-normal'
					>
						About
					</Link>
					<Link
						href={'/contact'}
						className='text-neutral-900 text-lg font-normal'
					>
						Contact
					</Link>
					<Link
						href={'/contact'}
						className='text-neutral-900 text-lg font-normal'
					>
						Hire
					</Link>
					<Link
						href={'/privacy-policy'}
						className='text-neutral-900 text-lg font-normal'
					>
						Privacy Policy
					</Link>
					<Link
						href={'/term-of-use'}
						className='text-neutral-900 text-lg font-normal'
					>
						Term of Use
					</Link>
				</div>
				<ul className='flex gap-3'>
					<li>
						<Link href={social.linkedin}>
							<Image
								src={linkedinIcon}
								alt='linkedinIcon'
								className='cursor-pointer'
							/>
						</Link>
					</li>
					<li>
						<Link href={social.mail}>
							<Image src={mailIcon} alt='mailIcon' className='cursor-pointer' />
						</Link>
					</li>
					<li>
						<Link href={social.github}>
							<Image src={gitIcon} alt='giticon' className='cursor-pointer' />
						</Link>
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
