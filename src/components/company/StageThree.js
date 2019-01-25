import React from 'react'

function StageThree(props) {
    return(
        <div className='company-middle-container'>
            <h1>Would you like to?</h1>
            <div className='company-button-container'>
                <button className='yes-button' onClick={props.handleCorrect}>Hai はい</button>
                <button className='no-button' onClick={props.handleIncorrect}>Iie いいえ</button>
            </div>
        </div>
    )
}
export default StageThree