import React from 'react';
import Card from '../../components/Card';
// import CheckEmailMail from '../../../components/CheckEmail';
import VerifiedEmail from '../../components/VerifiedEmail';
import SignupLayout from '../../components/layout/SignupLayout/SignupLayout';

const EmailVerified = () => {
    return (
        <SignupLayout 
            children={<Card children={<VerifiedEmail />} />}
        />
    )
};

export default EmailVerified