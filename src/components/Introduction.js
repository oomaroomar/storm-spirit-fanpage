import React from 'react' 

function Introduction(props) {
    return(
        <div className='section introduction'>
            <div className='left'>
                <img alt='' src={require('../images/pngs/sagiriLookLeft.png')}/>
            </div>
            <div className='right'>
                <h1>
                    Body type: <em>loli.</em><br/>
                    Eyes: <em>sapphire.</em><br/>
                    Hair: <em>ethereal.</em>
                </h1>
                <br/>
                <h2>Words cannot describe her pulchritude.</h2>
                <p>Honestly if you dislike her appearance you probably want everyone to die in a fire.</p>
            </div>
        </div>
    )
}

export default Introduction