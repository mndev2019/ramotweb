import React from 'react'

const Heading = ({title , subtitle}) => {
    return (
        <>
            <p className=' text-[20px] font-[600] leading-[28px] text-[var(--primary)]'>
                {title}
            </p>
            <h2 className='text-[#001D08] lg:text-[35px] text-[25px] font-[700]'>
                {subtitle}
            </h2>
        </>
    )
}

export default Heading
