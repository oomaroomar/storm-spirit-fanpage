import React from 'react'

function JoinUs(props) {
    return(
        <div className='section join-us'>
            <div className='left'>
                <span>
                    <h2>You can become a Sagiri subscriber today</h2>
                    <h1>b-but it's not like I need you to or anything</h1>
                </span>
            </div>
            <div className='right'>
                <img src={require('../images/pngs/sagiriShy.png')} alt=""/>
            </div>
        </div>
    )
}

export default JoinUs