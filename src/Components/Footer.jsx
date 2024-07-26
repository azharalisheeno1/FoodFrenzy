import React from 'react'
import footer from '../assets/footer.png';

function Footer() {
const quicklinks=[
  {id:1,name:"Home"},
  {id:2,name:"About"},
  {id:3,name:"Menu"},
  {id:4,name:"Contact"},

]
  return (
    <>
    
    <footer className="bg-cover bg-center py-12  w-full text-white " style={{ backgroundImage:`url(${footer})`  }}>
  
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            
            <p className="mb-4">4920 Trails End Road Ft United States, FL 33311</p>
            <p className="mb-4">azharalisheeno@gmail.com</p>
            <p className="mb-4">foodfrenzy@gmail.com</p>
            <p className="mb-4">+123 456 679 123</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick links</h2>
            <ul>
            {quicklinks.map((link)=>  <li key={link.id} className="mb-2">{link.name}</li>)}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <p className="mb-4">Subscribe to our newsletter and savor the latest recipes, cooking tips, and exclusive deals delivered straight to your inbox! Stay updated with our delicious updates, special promotions, and culinary inspirations.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-l-lg text-gray-700"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-500">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer