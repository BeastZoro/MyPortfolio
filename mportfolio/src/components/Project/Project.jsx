import React from 'react'

const Project = ({proj}) => {

    const {name, image, code, link} = proj

  return (
    <article className='shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md overflow-hidden text-light-text'>
        <img className="w-[100%] h-[85%] object-cover bg-top  dark:brightness-75" src={image} alt={name} />
        <div className='bg-[#a64da6] h-[15%] px-[30px] flex items-center justify-between text-xl md:text-lg'>
            <a className="" href={link} target='_blank' rel="noreferrer"><i class="fa-solid fa-laptop"></i></a>
            <a className="" href={code} target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>
    </article>
  )
}

export default Project