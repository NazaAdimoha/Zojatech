import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FormContent = () => {
    return (
        <div className='px-4 py-2'>
            <h2 className='font-medium'>Register your account</h2>
            <form action="">
            <Link to="#" className="flex items-center justify-center px-6 py-3 mt-6 text-gray-800 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <MdEmail className="w-6 h-6 mx-2 text-gray-700" />
                    <span className="mx-2 text-gray-700">Sign up with email</span>
            </Link>    
            <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or 
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>
            <a href="#" className="flex items-center justify-center px-6 py-3 mt-6 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <svg className="w-6 h-6 mx-2"  viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
            </svg>
                    <span className="mx-2 text-gray-700">Sign up with Google</span>
            </a>
            <p className='text-bg-gray-400 text-gray-500 font-light text-sm w-full mt-10'>
                By clicking the button, you agree to our <span className='text-[#FFB800]'>Terms of service </span> and <span className='text-[#FFB800]'>Privacy Policy</span>    
            </p>
            </form>
            <Link to=''>
                <p className='text-bg-gray-200 text-gray-600 font-light text-sm w-full mt-10'>
                    Already have an account? <span className='text-[#FFB800]'>Login</span>
                </p>
            </Link>
        </div>
    )
};

export default FormContent;