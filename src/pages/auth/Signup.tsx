import React from 'react';
import Card from '../../components/Card';
import FormContent from '../../components/FormContent';
import SignupLayout from '../../components/layout/SignupLayout/SignupLayout';

const Signup = () => {
    return (
        <SignupLayout 
            children={<Card children={<FormContent />} />}
        />
    )
};

export default Signup;