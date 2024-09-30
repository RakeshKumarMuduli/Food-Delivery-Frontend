import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        
        <div className="w-full md:w-1/4 mb-4">
          <h2 className="text-2xl font-bold mb-2">Vision</h2>
          <p className="text-gray-400">Your one-stop shop for all your fashion needs. We offer the best deals and quality products.</p>
        </div>

        
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">as</h3>
          <ul>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/"  className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/"  className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 0h-20c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10v-9h-3v-3h3v-2c0-3.1 2.4-5.7 5.4-5.7 1.1 0 2 .1 2.2.1v2.6h-1.5c-1.4 0-1.7.7-1.7 1.7v2.3h3.4l-.5 3h-2.9v9h5.4c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.61.59-2.49.7.89-.53 1.58-1.38 1.9-2.39-.84.5-1.77.87-2.75 1.06-.79-.84-1.92-1.37-3.16-1.37-2.39 0-4.32 1.93-4.32 4.31 0 .34.03.67.1 1-3.59-.18-6.78-1.9-8.91-4.51-.37.64-.58 1.38-.58 2.18 0 1.5.76 2.83 1.91 3.6-.7-.02-1.35-.21-1.93-.53v.05c0 2.1 1.49 3.86 3.46 4.26-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3.01-1.49 1.17-3.35 1.86-5.38 1.86-.35 0-.69-.02-1.03-.06 1.91 1.22 4.19 1.93 6.63 1.93 7.94 0 12.28-6.57 12.28-12.27 0-.19 0-.37-.01-.56.84-.61 1.57-1.37 2.15-2.24z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.1 0 3.5.01 4.7.07 1.2.06 2.04.25 2.7.53.7.3 1.31.74 1.88 1.32.57.57 1.02 1.17 1.32 1.88.28.66.47 1.49.53 2.7.06 1.2.07 1.6.07 4.7s-.01 3.5-.07 4.7c-.06 1.2-.25 2.04-.53 2.7-.3.7-.74 1.31-1.32 1.88-.57.57-1.17 1.02-1.88 1.32-.66.28-1.49.47-2.7.53-1.2.06-1.6.07-4.7.07s-3.5-.01-4.7-.07c-1.2-.06-2.04-.25-2.7-.53-.7-.3-1.31-.74-1.88-1.32-.57-.57-1.02-1.17-1.32-1.88-.28-.66-.47-1.49-.53-2.7-.06-1.2-.07-1.6-.07-4.7s.01-3.5.07-4.7c.06-1.2.25-2.04.53-2.7.3-.7.74-1.31 1.32-1.88.57-.57 1.17-1.02 1.88-1.32.66-.28 1.49-.47 2.7-.53 1.2-.06 1.6-.07 4.7-.07m0-2.2c-3.2 0-3.6.01-4.9.07-1.3.06-2.2.27-3.03.58-.84.33-1.55.76-2.25 1.46-.7.7-1.13 1.42-1.46 2.25-.32.82-.52 1.73-.58 3.03-.06 1.3-.07 1.7-.07 4.9s.01 3.6.07 4.9c.06 1.3.27 2.2.58 3.03.33.84.76 1.55 1.46 2.25.7.7 1.42 1.13 2.25 1.46.82.32 1.73.52 3.03.58 1.3.06 1.7.07 4.9.07s3.6-.01 4.9-.07c1.3-.06 2.2-.27 3.03-.58.84-.33 1.55-.76 2.25-1.46.7-.7 1.13-1.42 1.46-2.25.32-.82.52-1.73.58-3.03.06-1.3.07-1.7.07-4.9s-.01-3.6-.07-4.9c-.06-1.3-.27-2.2-.58-3.03-.33-.84-.76-1.55-1.46-2.25-.7-.7-1.42-1.13-2.25-1.46-.82-.32-1.73-.52-3.03-.58-1.3-.06-1.7-.07-4.9-.07zm0 5.8c-3.42 0-6.2 2.78-6.2 6.2s2.78 6.2 6.2 6.2 6.2-2.78 6.2-6.2-2.78-6.2-6.2-6.2zm0 10.2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-10.2c-.796 0-1.44-.645-1.44-1.44 0-.795.644-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44 0 .795-.645 1.44-1.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 Numetry. All Rights Reserved by R.K.
      </div>
    </div>
  </footer>

  )
}

export default Footer
