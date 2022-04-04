import React from 'react'
import {Link} from 'react-router-dom'

function Item(props){
    return(
        <li><Link to={`carrousel/${props.id}`}>{props.name}</Link></li>
    )
}

export default Item