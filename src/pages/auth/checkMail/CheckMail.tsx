import React from 'react';
import Card from '../../../components/Card';
import CheckEmailMail from '../../../components/CheckEmail';
import SignupLayout from '../../../components/layout/SignupLayout/SignupLayout';

const CheckMail = () => {
    return (
        <SignupLayout 
            children={<Card children={<CheckEmailMail />} />}
        />
    )
};

export default CheckMail