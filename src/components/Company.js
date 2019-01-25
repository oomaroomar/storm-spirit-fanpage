import React from 'react'

function Compliment(props) {
    return(
        <div className='section company'>
            <img src={require('../images/pngs/transparrentDance.gif')} alt=""/>
            {props.middleItem}
            <img src={require('../images/pngs/transparrentDance.gif')} alt=""/>
        </div>
    )
}

export default Compliment