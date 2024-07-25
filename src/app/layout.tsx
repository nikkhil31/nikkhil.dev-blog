import type {Metadata} from 'next'
import {Inter, Montserrat} from 'next/font/google'
import '@/core/style/globals.css'
import Header from './components/Header'
import Quote from './components/Quote'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import AppThemeProviders from './components/AppThemeProviders'

const inter = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
	title:
		'Nikhil Limbad - Freelance Full Stack Developer in India | Expert in NextJS, React, AWS, Langchain',
	description:
		'Nikhil Limbad is an experienced Freelance Full Stack Developer in India, specializing in NextJS, React, AWS, and OpenAI integration. Over 5 years of experience in diverse sectors. Open for remote freelance opportunities.',
	keywords:
		'Nikhil Limbad, Freelance Full Stack Developer, Freelance Full Stack Developer India, Expert NextJS Developer, Experienced Full Stack Developer, React, AWS, OpenAI'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} bg-[#F6F6F1] dark:bg-[#050315]`}>
				<AppThemeProviders>
					<Header />
					<main className='py-16 flex flex-col items-center'>
						{children}

						<Quote />
						<Newsletter />
						<Footer />
					</main>
				</AppThemeProviders>
			</body>
			<GoogleAnalytics />
		</html>
	)
}
