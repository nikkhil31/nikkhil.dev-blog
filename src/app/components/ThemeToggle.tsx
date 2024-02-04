'use client'
import React, {useEffect, useState} from 'react'
import sun from '@/core/images/sun.svg'
import moon from '@/core/images/moon.svg'
import Image from 'next/image'
import {useTheme} from 'next-themes'

const ThemeToggle = () => {
	const {theme, setTheme} = useTheme()

	return (
		<>
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='w-8 h-8'>
				<Image src={sun} alt='darkmode' className='hidden dark:block' />
				<Image src={moon} alt='darkmode' className='block dark:hidden' />
			</button>
		</>
	)
}

export default ThemeToggle
