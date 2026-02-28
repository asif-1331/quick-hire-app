import React from 'react'

const Container = ({ className, children }) => {
    return (
        <div className={`xl:max-w-[1194px] md:px-8 px-4 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container