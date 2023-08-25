import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    message:'',
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInputs(() => ({...inputs, [name] : value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    setInputs({name:'', email:'', message:''})
  }

  return (
    <section className='contact py-[40px] min-h-[100vh] dark:bg-dark dark:text-light-text bg-light text-dark-text flex flex-col justify-center'>
     <div className='contact_title font-bold text-center'>
        <h1 className='relative uppercase tracking-widest text-[1.8rem]  py-4'>contact</h1>
        <p className='font-normal mt-3 px-[20px]'>Want to chat? I'm just a click away, no computer science degree required.</p>
      </div>
      <form className=' px-[20px] md:px-[30px] py-[40px] space-y-[30px]' onSubmit={handleSubmit}>
        <div className='form_input text-sm md:text-lg'>
          <label htmlFor='name'>Name</label>
          <input type='text'
          className='text-sm md:text-base'
            id='name'
            name='name'
            value={inputs.name}
            onChange={(e) => handleChange(e)}
            placeholder='Enter yourname'
            required
          />
        </div>

        <div className='form_input text-sm md:text-lg'>
          <label htmlFor='email'>Email</label>
          <input type='email'
          className='text-sm md:text-base'
            id='email'
            name='email'
            value={inputs.email}
            onChange={(e) => handleChange(e)}
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='form_input text-sm md:text-lg'>
          <label htmlFor='message'>Message</label>
          <textarea 
            rows={10}
            className='text-sm md:text-base'
            id='message'
            name='message'
            value={inputs.message}
            onChange={(e) => handleChange(e)}
            placeholder='Enter your message'
            required
          />
        </div>

        <button className='w-full md:max-w-[150px] dark:bg-light dark:text-dark-text bg-dark text-light-text rounded-md'>Submit</button>
      </form>
    </section>
  )
}

export default Contact