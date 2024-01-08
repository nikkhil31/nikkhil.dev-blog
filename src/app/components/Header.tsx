'use client'
import Image from 'next/image'
import React from 'react'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'
import nikhil from '@/core/images/Nikhil.png'
import nikhilDark from '@/core/images/nikhil-dark.png'
import sun from '@/core/images/sun.svg'
import Link from 'next/link'
import {siteUrl, social} from '@/core/constant/env'
import fetcher from '@/core/fetch/fetcher'
import ThemeToggle from './ThemeToggle'

const GET_SERIES_LIST = `
	query Publication {
		publication(host: "${siteUrl}") {
			seriesList(first: 5) {
				edges {
					node {
						name
						slug
					}
				}
			}
		}
	}
`

const Header: React.FC = async () => {
	const data = await fetcher(GET_SERIES_LIST)
	return (
		<>
			<header className='flex justify-center'>
				<div className='w-full md:w-4/5  flex justify-between h-28 items-center px-4'>
					<ul className='hidden md:flex gap-3'>
						<li>
							<Link href={social.linkedin}>
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
							<Link href={social.mail}>
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
							<Link href={social.github}>
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
					<Link href={'/'}>
						<Image
							src={nikhil}
							alt='nikhil'
							className='w-28 md:w-36 block dark:hidden'
						/>
						<Image
							src={nikhilDark}
							alt='nikhil'
							className='w-28 md:w-36 hidden dark:block'
						/>
					</Link>
					<div className='flex items-center gap-6'>
						<div className='hidden w-[121px] h-[46px] px-6 py-3 bg-indigo-500 rounded shadow-inner justify-center items-center gap-2 lg:inline-flex'>
							<button className='text-white text-lg font-bold'>Hire Me</button>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</header>
			<div className='w-full h-16 border-y border-stone-300 justify-center items-center flex'>
				<ul className='flex w-full justify-center overflow-x-scroll no-scrollbar'>
					{data.publication.seriesList.edges.map(
						({node}: any, index: React.Key) => (
							<li
								key={index}
								className={`px-4 py-5 text-center ${
									index !== 0 && 'border-l'
								} border-stone-300`}
							>
								<Link
									href={`/blog/${node.slug}`}
									className='text-neutral-900 dark:text-white text-sm font-normal cursor-pointer block w-max'
								>
									{node.name}
								</Link>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	)
}

export default Header
