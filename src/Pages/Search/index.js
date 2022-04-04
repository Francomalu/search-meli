import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import ListProducts from '../../Components/ListProducts'

function Search(){
    
    const [keyword, setKeyword] = useState('')

    function handleCallback(data){
        setKeyword(data)
    }
    
    return(
        <>  
            <Navbar handleCallback={handleCallback}/>
            <ListProducts keyword={keyword}/>
        </>
    )
}

export default Search