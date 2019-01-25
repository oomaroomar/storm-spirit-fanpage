import React from 'react'

export default props => 
<div className='section compare'>
    <h1>No one can compete</h1>
    <div className='characters'>
        <img className='character sagiri' src={require('../images/portraits/sagiri.jpg')} alt=""/>
        <img className='character elf-yamada' src={require('../images/portraits/yamada-elf.jpg')} alt=""/>
        <img className='character muramasa' src={require('../images/portraits/muramasa.jpg')} alt=""/>
        <img className='character megumi' src={require('../images/portraits/megumi.jpg')} alt=""/>
    </div>
    <div className='compare-container'>
        <div className="stats">
            <div> Has goals in life</div>
            <div>Has surmounted hard challenges</div>
            <div>Has a deep, tragic backstory</div>   
            <div>Has a good work ethic</div>
            <div>Would care about you</div> 
            <div>Number of doujinshi on nhentai</div>  
        </div>
        <div className="stats">
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
                <h3>(Watching her own anime with <br/> onii-san.)</h3>
            </div>
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
                <h3>(Came out of her room to get fanmail.)</h3>
            </div>
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
                <h3>(Lost her father at a young age)</h3>
            </div>
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
            </div>
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
            </div>
            <div>
                <h3>157</h3>
            </div>
        </div>
        <div className="stats">
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
                <h3>(Very basic. Lets society determine her values.)</h3>
            </div>
            <div></div>
            <div></div>
            <div><h3>lmao</h3></div>
            <div><h3>(Only cares about sales figures)</h3></div>
            <div><h3>87</h3></div>
        </div>
        <div className="stats">
            
            <div></div>
            <div></div>
            <div></div>
            <div>
                <img className='check' src={require('../images/pngs/check.png')} alt=""/>
            </div>
            <div><h3>(Workaholic. Wouldn't love you as a person)</h3> </div>
            <div><h3>33</h3></div>

        </div>
        <div className="stats ">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div></div>
            <div> <h3>Seriously, what's her appeal?</h3></div>
            <div><h3>15</h3></div>
        </div>
    </div>
</div>
