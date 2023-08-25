import React from 'react'

const Project = ({proj}) => {

    const {name, image, desc, code, link} = proj

  return (
    <article className='shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md overflow-hidden bg-[#a64da6] text-light-text flex justify-between'>
        <img className="w-[85%] h-[100%] object-cover dark:brightness-75" src={image} alt={name} />
        <div className='px-[20px] py-[40px] flex flex-col justify-between items-center text-lg md:text-2xl'>
            <a className="" href={link} target='_blank'><i class="fa-solid fa-laptop"></i></a>
            <a className="" href={code} target='_blank'><i class="fa-brands fa-github"></i></a>
        </div>
    </article>
  )
}

export default Project