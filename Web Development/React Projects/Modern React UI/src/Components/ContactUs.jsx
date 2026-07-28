import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {


    const onSubmit= async (event) =>{
        event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e3735706-a1e0-44e1-9f47-fd1a1b0c1b42");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }

    
    }

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='React out to us' desc='From strategy to execution, we craft digital solutions that move your buisness forward.'/>

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

            <div className="">
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <img src={assets.person_icon} alt="" />
                    <input name="name" type="text" placeholder='Enter your name' className='w-full text-sm outline-none p-3'required />
                </div>
            </div>

            <div className="">
                <p className='mb-2 text-sm font-medium'>Email ID</p>
                <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <img src={assets.email_icon} alt="" />
                    <input name="email" type="email" placeholder='Enter your Email' className='w-full text-sm outline-none p-3' required/>
                </div>
            </div>
            
            <div className="sm:col-span-2">
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea name="message" rows={8} placeholder='Enter your Message' className='w-full p-3 text-sm outline-none  rounded-lg border border-gray-300 dark:border-gray-600' required/>
            </div>

            <button onSubmit={onSubmit} type="submit" className='w-max flex gap-2 bg-primary text-white  text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit
                <img src={assets.arrow_icon} alt="" className='w-4'/>
            </button>
            
        </form>
    </div>
  )
}

export default ContactUs