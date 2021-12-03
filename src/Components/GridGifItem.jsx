import React from 'react'

const GridGifItem = ({id, title, url}) => {

    return (
        <div className="card animate__animated animate__backInDown">
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}

export default GridGifItem
