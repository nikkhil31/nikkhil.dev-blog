import Image from 'next/image'
import React from 'react'

import {gql} from '@apollo/client'
import {getClient} from '@/core/graphql/client'

import gitIcon from '@/core/images/giticon.svg'
import mailIcon from '@/core/images/mailIcon.svg'
import linkedinIcon from '@/core/images/linkedinIcon.svg'
import nikhil from '@/core/images/Nikhil.png'
import sun from '@/core/images/sun.svg'
import Link from 'next/link'
import { siteUrl } from '@/core/constant/env'

const GET_SERIES_LIST = gql`
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
	const {data} = await getClient().query({
		query: GET_SERIES_LIST
	})
	return (
		<>
			<header className='flex justify-center'>
				<div className='w-full md:w-4/5  flex justify-between h-28 items-center px-4'>
					<ul className='hidden md:flex gap-3'>
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
					<Link href={'/'}>
						<Image src={nikhil} alt='nikhil' className='w-28 md:w-36' />
					</Link>
					<div className='flex items-center gap-6'>
						<div className='hidden w-[121px] h-[46px] px-6 py-3 bg-indigo-500 rounded shadow-inner justify-center items-center gap-2 lg:inline-flex'>
							<button className='text-white text-lg font-bold'>Hire Me</button>
						</div>
						<button>
							<Image src={sun} alt='darkmode' />
						</button>
					</div>
				</div>
			</header>
			<div className='w-full h-16 border border-stone-300 justify-center items-center flex'>
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
									className='text-neutral-900 text-sm font-normal cursor-pointer block w-max'
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
