import React from 'react'

import { CompColumn } from './CompColumn'

const CompareAlt = () => {

    const stormColumn = [{check: true, text: '' }, {check: true, text: '' }, 
        {check: true, text: '' }, {check: true, text: '' }, {check: true, text: '' },{check: true, text: '' }
    ]
    const earthColumn = [{check: true, text: "doesn't benefit from manaloss reduction" }, {check: false, text: '' }, 
        {check: false, text: '' }, {check: false, text: '' }, {check: false, text: '' }, {check: true, text: '' }, 
    ]
    const emberColumn = [{check: false, text: '' }, {check: true, text: "isn't as flashy" }, 
        {check: false, text: '' }, {check: false, text: '' }, {check: false, text: '' }, {check: false, text: '' }, 
    ]
    const voidColumn = [{check: true, text: '' }, {check: false, text: '' }, 
        {check: false, text: '' }, {check: false, text: '' }, {check: false, text: '' }, {check: false, text: '' }, 
    ]


    return <div className='section compare'>
        <h1>The only spirit that has spirit</h1>
        <div className='compare-container'>
            <div className="stats contests">
                <div className='first' ></div>
                <div>Utilizes arcane runes like a complete God</div>
                <div>Can prevent highground pushes without assistance</div>
                <div>Makes regen runes seem like an exploit</div>   
                <div>Takes aegis priority over carry <span aria-label='emoji' role='img'>😎</span></div>
                <div>Can 1v1 any hero early-, mid-, and lategame</div> 
                <div>Is regarded as one of the most mechanically intensive heroes</div>  
            </div>
            <div className='stats'>
                <img className='character storm first' src={require('../images/Storm_Spirit_icon.png')} alt=""/>
                <CompColumn column={stormColumn} />
            </div>
            <div className='stats'>
                <img className='character earth first' src={require('../images/Earth_Spirit_icon.png')} alt=""/>
                <CompColumn column={earthColumn} />
            </div>
            <div className='stats'>
                <img className='character ember first' src={require('../images/Ember_Spirit_icon.png')} alt=""/>
                <CompColumn column={emberColumn} />
            </div>
            <div className='stats'>
                <img className='character void first' src={require('../images/Void_Spirit_icon.png')} alt=""/>
                <CompColumn column={voidColumn} />
            </div>
        </div>
    </div>
}


export default CompareAlt