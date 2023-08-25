import React from 'react'
import './About.css'
import {skills} from './My_Skills'

const About = () => {


  return (
    <section className='about min-h-[fit] px-2 py-[100px] dark:bg-dark dark:text-light-text bg-light text-dark-text'>
      <div className='about_title font-bold'>
        <h1 className='relative uppercase tracking-widest text-[1.8rem] text-center py-4'>about me</h1>
      </div>

      <div className='about_info flex items-center justify-around px-5 flex-wrap gap-6'>
        <div className='about_info my-[20px] max-w-md md:max-w-2xl'>
          <h1 className='text-2xl font-bold my-[20px]'>Get to know about me!</h1>
          <ul className='flex flex-col gap-[20px]'>
            <li>
              I'm a Frontend Web Developer, passionate about crafting stunning user experiences for websites and web apps. I take pride in my work, and you can explore some of my projects in the dedicated section.
            </li>

            <li>
              When I'm not coding, I love sharing my learnings with the Web Development community. You'll find me sharing insights and knowledge on my <a href="https://github.com/BeastZoro" className='font-bold cursor-pointer'>GitHub profile</a> , where I collaborate on code and contribute to open source projects.
            </li>

            <li>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </li>
          <a href="#" className='contact_btn max-w-[150px] text-center px-[1.8rem] py-[.8rem] bg-[#A64DA6] mt-[20px] rounded-lg font-semibold cursor-pointer text-gray-200'>CONTACT</a>
          </ul>

        </div>

        <div className='skills  max-w-md md:max-w-2xl'>
          <h1 className='text-2xl font-bold my-[20px]'>My Skills</h1>
          <div className='flex flex-wrap gap-4'>
            {
              skills.map((ele, index) => {
                return (
                  <p key={index} className='skill text-center px-[1rem] py-[.5rem] rounded-md font-bold tracking-widest dark:bg-light dark:text-dark-text bg-dark text-light-text flex items-center gap-2'><span className={`${ele.icon} text-[30px]`}></span>{ele.name.toUpperCase()}</p>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

