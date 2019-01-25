import React from 'react'

function StageTwo(props) {
    return(
        <div className='company-middle-container'>
            <h1>Do you talk about doujinshi with anyone?</h1>
            <div className='company-button-container'>
                <button className='yes-button' onClick={props.handleIncorrect}>Hai はい</button>
                <button className='no-button' onClick={props.handleCorrect}>Iie いいえ</button>
            </div>
        </div>
    )
}
export default StageTwo