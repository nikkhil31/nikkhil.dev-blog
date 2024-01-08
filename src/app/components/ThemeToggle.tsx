import React, {useEffect, useState} from 'react'
import sun from '@/core/images/sun.svg'
import moon from '@/core/images/moon.svg'
import Image from 'next/image'

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	const toggleTheme = () => {
		setDarkMode(!darkMode)
		if (darkMode) {
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else {
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
	}

	return (
		<button onClick={toggleTheme}>
			<Image src={sun} alt='darkmode' className='hidden dark:block' />
			<Image src={moon} alt='darkmode' className='block dark:hidden' />
		</button>
	)
}

export default ThemeToggle
