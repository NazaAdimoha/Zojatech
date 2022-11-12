import React from 'react';
import Logo from '.././assets/buddyLogo.png';
import { AuthTextData } from './data/AuthTextData';

const AuthLeft = () => {
    return (
        <section>
            <div className="bg-[#fff] p-28">
                <img className='' src={Logo} alt="logo" />
                <div className='mt-24'>
                    {
                        AuthTextData.map((item) => {
                            return (
                                <div className='flex flex-row mb-8 justify-start align-top items-center'>
                                    <div className='mr-5'>
                                        {item.icon}
                                    </div>
                                    <div className='text-gray-600 w-[320px] text-sm'>
                                        {item.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='mt-24'>
                        <p className='text-gray-400 font-light text-xs'>
                            &copy; 2022 Revevex. All Righs reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthLeft;