import React from 'react'

function MainIntro(props) {
    return(
        <div className='main-intro'>
            <h1>Sagiri</h1>
            <h2>The best Waifu. <b>Ever.</b></h2>
            <div className='invitation-links'>
                <div>
                    <a target='_blank' rel='noopener noreferrer' className='discord-button button' href="https://discord.gg/uYA9srJ">
                    <img alt="" src={require('../images/portraits/discord-logo.png')}/> <p>Join the Discord</p></a>
                </div>
                <div>
                    <a target='_blank' rel='noopener noreferrer' className='reddit-button button' href="https://www.reddit.com/r/EroMangaSensei/">
                    <img alt="" src={require('../images/portraits/Reddit-logo.png')}/> <p>Join the Subreddit</p></a>
                </div>
            </div>
            <h3><span role='img'>⬇</span> Scroll down to learn more</h3>
            <div className='back-overlay'></div>
        </div>
    )
}

export default MainIntro