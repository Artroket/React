import loader from '../../../assets//images/loader.gif'
import React from 'react';

const Preloader = (props) =>{
    return <div>
        <img src={loader} height='250px' width='350px'/>
    </div>
}

export default Preloader