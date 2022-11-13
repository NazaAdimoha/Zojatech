import React from 'react';
import EmailDraft from '../assets/sent-email 1.png'
import Button from './Button';

const CheckEmailMail = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-[117px] flex flex-row justify-center align-middle items-center' src={EmailDraft} alt="" />
            <div>
                <p className='text-2xl font-medium text-gray-800 text-center mt-2'>Check your mailbox !</p> 
                <p className='w-[310px] p-[4px 4px 4px 0px] font-extralight tracking-normal text-sm text-gray-600 mt-4 gap-4 font-sans'>
                We’ve sent an email to <span className='text-gray-800'>seyi@zojatech.com</span> with a an OTP to confirm your account. Check your inbox to activate your account.
                </p>

                <div className='mt-6 flex flex-col justify-center items-center align-middle lg:order-2'>
                    <Button 
                        onClick={() => console.log('clicked')}
                        type='primary'
                        size='small'
                        label='Confirm Email'
                    />
                </div>

                <div className='mt-6'>
                    <p className='flex justify-center text-sm text-gray-600 mt-4'>Didn’t get email? <span className='text-[#FF8600] ml-2'>Resend</span></p>
                </div>
            </div>
        </div>
    )
}

export default CheckEmailMail