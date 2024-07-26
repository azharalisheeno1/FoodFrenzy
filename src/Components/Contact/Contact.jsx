import {  Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'
import BannerSec from './BannerSec';
import contact from "../../assets/contact.png"


function Contact() {
  return (
    <>
    <BannerSec/>
  <div className=" px-4 md:px-10   ">
    <div className=' flex flex-col   gap-3  lg:p-10 justify-center items-center rounded-xl lg:w-3/4 md:flex-col lg:flex-row-reverse lg:mx-auto md:mx-0 shadow-xl my-20 shadow-gray-400'>
      <div className=" p-4 md:w-2/3   ">
        {/* form */}
        <h1 className='text-center text-red-500 font-medium '>Contact Us</h1>
        <h1 className="text-2xl text-center font-bold mb-4">Please Get in Touch with Us</h1>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
       
         onSubmit={(values)=>{
          console.log(values)
       
          
         }}
        >
          {() => (
            <Form>
              <div className="mb-4  ">
                <Field
                  type="text"
                  className="border rounded-lg hover:border-blue-500 outline-none border-gray-200 w-full  md:w-72 mx-1 px-2 py-1 my-2"
                  name="name"
                  placeholder="Name"
                  id="name"
                />
              
                <Field
                  type="email"
                  name="email"
                  className="border rounded-lg hover:border-blue-500 outline-none border-gray-200  w-full md:w-72 mx-1 px-2  py-1"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="text"
                  name="cidy"
                  className="border rounded-lg hover:border-blue-500 outline-none border-gray-200 md:w-72  w-full mx-1 px-2 py-1"
                  placeholder="City"
                  id="city"
                />
                <Field
                  type="number"
                  className="border rounded-lg hover:border-blue-500 outline-none border-gray-200 w-full md:w-72 my-2 mx-1 px-2 py-1"
                  name="phone"
                  placeholder="Phone"
                  id="phone"
                />
              </div>
              <div className="mb-4">
                <Field
                  as="textarea"
                  name="message"
                  className="border rounded-lg hover:border-blue-500 outline-none border-gray-200 w-full lg:w-[590px]   mx-1 px-2 py-1"
                  placeholder="Message"
                  id="message"
                  rows="4"
                  
                />
               
              </div>
              <button type="submit" className="bg-red-600 text-white px-10  py-2  rounded-lg">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
        <div className=" md:h-full ">
        <img src={contact} alt="" />
        </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Contact