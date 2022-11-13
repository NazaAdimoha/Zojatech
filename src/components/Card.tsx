import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 lg:p-10 border border-[1px solid #DDE2E4] w-2/3">
            {children}
        </div>
    )
}

export default Card;