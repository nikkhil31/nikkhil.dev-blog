import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const About = () => {
	return (
		<div className='w-4/5 xl:w-[1200px]'>
			<Breadcrumb items={[{text: 'Home', href: '/'}, {text: 'About Me'}]} />
			<p>
				I'm a seasoned Full Stack Developer with over 4 years of experience,
				specializing in React, AWS, and OpenAI integration. My career has led me
				to complete a diverse range of projects, spanning sectors like
				Food/Grocery Delivery, Real Estate CRM/ERP systems, AlgoCrypto
				platforms, and intelligent automation using OpenAI's GPT technology.
			</p>
			<p className='mt-8'>
				My approach is rooted in a commitment to innovation and quality. Each
				project I undertake is an opportunity to solve complex challenges,
				delivering solutions that exceed client expectations. My versatility
				allows me to adapt to new challenges readily, which is what makes my
				work both exciting and fulfilling.
			</p>
			<p className='mt-8'>
				Currently, I am open to freelance opportunities and eager to collaborate
				on a contractual, remote basis. If your project's requirements align
				with my expertise, I would be thrilled to discuss how we can work
				together to accomplish your objectives. Thank you for considering my
				professional services; I'm keenly looking forward to contributing to
				your success and turning your vision into a tangible reality.
			</p>
		</div>
	)
}

export default About
