import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import AuthLeft from '../../AuthLeft';

type SignupLayoutProps = {
    children: React.ReactNode;
}

const SignupLayout = ({children}: SignupLayoutProps) => {
    return (
        <div className='flex flex-row w-full h-screen '>
            <div className='w-1/2 h-screen border border-[1px solid #fff]'>
                <AuthLeft />
            </div>
            <div className='w-1/2  bg-[#F8FAFC] overflow-y-auto shadow-xl flex flex-col items-center pt-[10rem]'>
                {children}
            </div>
        </div>
    )
}

export default SignupLayout;