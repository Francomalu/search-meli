import React from 'react'
import './style.scss'

function Navbar(props){

    function handleChange(e){
        props.handleCallback(e.target.value)
    }
    return(
        <div className="nav-header">
            <div className="nav">
                <img className="nav-logo" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"></img>
                <input type="text" placeholder="Buscar productos, marcas y más…" className="nav-input" onChange={handleChange}/>
                <img className="nav-text"src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-52b026dd-9270-4c0f-8b85-a7526d0b3a63.png"></img>
            </div>
        </div>
    )
}

export default Navbar