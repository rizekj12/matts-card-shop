import React from 'react';
// import {Link} from 'react-router-dom'
import '../Sass/SportPage.scss'

const SportPage = props => {
    console.log(props.cards)
    return (
        <>
             
                
                    <div>
                        <h1>{`${props.data.sport} page`}</h1>
                       {
                           props.cards.data.map((item3) => (
                           <h3>{item3.name}</h3>
                           ))
                       }
                       
                    </div>
                
            
        </>
    );
}

export default SportPage;