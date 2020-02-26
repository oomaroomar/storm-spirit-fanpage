import React from 'react'

const MainIntro = () => 
    <div className='main-intro'>
        <h1>Raijin Thunderkeg, the Storm Spirit</h1>
        <h2>The best hero <b>Ever.</b></h2>
        <div className='invitation-links'>
            <div>
                <a target='_blank' rel='noopener noreferrer' className='discord-button button' href='https://discordapp.com/invite/0Pj5D1QKnY7t1L9K'>
                <img alt='' src={require('../images/discord-logo.png')}/> <p>Join the Discord</p></a>
            </div>
            <div>
                <a target='_blank' rel='noopener noreferrer' className='reddit-button button' href='https://www.reddit.com/r/DotA2/'>
                <img alt='' src={require('../images/Reddit-logo.png')}/> <p>Join the Subreddit</p></a>
            </div>
        </div>
        <h3><span role='img'>⬇</span> Scroll down to learn more</h3>
        <div className='back-overlay'></div>
    </div>

export default MainIntro