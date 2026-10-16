import React from 'react'

const Image = ({ srcimg, srcalt,className }) => {
    return (
        <img src={srcimg} alt={srcalt} className={className} />
    )
}

export default Image