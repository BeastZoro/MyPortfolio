import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {

    const [navMenu, setNavMenu] = useState(false)

    const navLinks = [
        {
            name: 'home',
            link: '#'
        },
        {
            name: 'about',
            link: '#'
        },
        {
            name: 'projects',
            link: '#'
        },
        {
            name: 'contact',
            link: '#'
        }
    ]

    return (
        <nav className='fixed z-[100] w-full md:px-[5%] dark:bg-dark bg-light h-[90px]'>
            <div className='container mx-auto flex items-center justify-between dark:text-light-text text-dark-text'>
                <div className='logo'>
                    <h1 className='bg-[#A64DA6] text-light-text px-5 py-3.5 rounded-full'>M</h1>
                    <p className='text-lg font-bold'>Kumar</p>
                </div>

                <div className={`nav_links_wrapper absolute top-[0] ${navMenu ? 'right-0' : 'right-[-100%]'} duration-500 w-[70%] md:static md:w-full md:bg-transparent md:h-fit h-[100vh] flex md:justify-end bg-[#E6E6E6] text-dark-text dark:bg-[#808080] dark:text-light-text md:dark:bg-transparent`}>

                    <ul className='nav_links flex-col md:flex-row md:items-center md:gap-[40px] md:space-y-0 md:p-0 px-[50px] py-[100px]'>
                        {navLinks.map((ele, index) => {
                            return (
                                <li key={index} className='text-lg border-b-2 border-transparent dark:hover:border-white
                                hover:border-black duration-300 cursor-pointer'>
                                    <a href={ele.link}>{ele.name}</a>
                                </li>
                            )
                        })}

                        {/* social Icons */}
                        <div className='social_icons md:hidden flex gap-8 text-lg pt-[20px]'>
                            <a href='https://github.com/BeastZoro'><i className='fa-brands fa-github'></i></a>
                            <a href='https://www.linkedin.com/in/mukesh-kumar-1b510b16a/'><i className='fa-brands fa-linkedin'></i></a>
                            <a href='mailto:mukesh0221998@gmail.com'><i className='fa-brands fa-google'></i></a>
                        </div>
                    </ul>
                </div>
                
                <div className='md:ml-10 flex gap-5 items-center  z-10'>
                    <div onClick={toggleTheme} className='cursor-pointer'>
                        {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </div>

                    <div className='md:hidden text-[22px] cursor-pointer ' onClick={() => setNavMenu(!navMenu)}>
                        {navMenu ? <i className='fa-solid fa-xmark'></i> : <i className="fa-solid fa-bars"></i>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar