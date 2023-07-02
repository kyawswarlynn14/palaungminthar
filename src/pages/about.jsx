import React from 'react'
import AboutImage from '../assets/about.jpg'

export const About = () => {
  return (
    <div className=' flex flex-col gap-6 justify-center items-center h-screen '>
      <h1 className='text-3xl font-serif font-bold tracking-wider'>About Us</h1>
      <img 
      className='w-[16rem] md:w-96 h-auto rounded-lg' src={AboutImage} />

      <p className=' md:text-xl text-center leading-loose md:leading-10 text-gray-300'>
          ရှမ်းပြည်နယ်မြောက်ပိုင်း <br/> နမ့်ဆန် တအောင်း(ပလောင်)ဒေသထွက် <br/> အော်ဂဲနစ်လက်ဖက်ခြောက် ဖြန့်ချီရေးလုပ်ငန်း
      </p>
    </div>
  )
}
