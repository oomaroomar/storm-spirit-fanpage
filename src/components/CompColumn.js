import React from 'react'

const CompColumn = ({ column }) => {
    
    return column.map(({check, text}, i) => <div key={i} >
        {check ? 
            <img className='check' src={require('../images/check.png')} alt=""/>
            : null
        }
        {text ?
            <h3>{text}</h3>
            : null
        }
    </div>)

}

export { CompColumn }