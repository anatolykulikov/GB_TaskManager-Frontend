import React from 'react'
import '../images/image.scss'



const Image = props => {

    return (
        <img 
            src={props.src}
            alt={props.alt}
            className={props.className}
            width={props.width}
            heigth={props.height}
        />
    )
}


export default Image