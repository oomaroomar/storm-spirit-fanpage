import React from 'react'

function StageOne(props) {
    return(
        <div className='company-middle-container'>
            <h1>Do you read doujinshi?</h1>
            <div className='company-button-container'>
                <button className='yes-button' onClick={props.handleCorrect}>Hai はい</button>
                <button className='no-button' onClick={props.handleIncorrect}>Iie いいえ</button>
            </div>
        </div>
    )
}
export default StageOne