'use client'

import {ThemeProvider} from 'next-themes'
import React, {FC, PropsWithChildren} from 'react'

const AppThemeProviders: FC<PropsWithChildren> = ({children}) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			value={{light: 'light', dark: 'dark'}}
		>
			{children}
		</ThemeProvider>
	)
}

export default AppThemeProviders
