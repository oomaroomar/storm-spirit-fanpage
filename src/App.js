import React from 'react'
import {Helmet} from 'react-helmet'

import MainIntro from './components/MainIntro'
import Introduction from './components/Introduction'
import SimilarToLast from './components/SimilarToLast'
import Last from './components/Last'
import Company from './components/Company'
import JoinUs from './components/JoinUs';
import BigPout from './components/BigPout'
import CutePout from './components/CutePout'
import Rain from './components/Rain'
import SagiriGun from './components/SagiriGun'
import Compare from './components/Compare'

import './index.css'

import StageOne from './components/company/StageOne'
import StageTwo from './components/company/StageTwo';
import StageThree from './components/company/StageThree'
import FinalStage from './components/company/FinalStage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correctAnswers: 0,
    }
  }

  handleCorrect = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {correctAnswers: prevState.correctAnswers + 1}
    }) 
    
  }

  handleIncorrect = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {correctAnswers: 0}
    })
    alert('Try again!')
  }
  
  middleItem = (xD) => {
    switch(xD) {
      case 0:
        return <StageOne handleCorrect={this.handleCorrect} handleIncorrect={this.handleIncorrect} />
      case 1:
        return <StageTwo handleCorrect={this.handleCorrect} handleIncorrect={this.handleIncorrect} />
      case 2: 
        return <StageThree handleCorrect={this.handleCorrect} handleIncorrect={this.handleIncorrect} />
      case 3: 
        return <FinalStage handleCorrect={this.handleCorrect} handleIncorrect={this.handleIncorrect} />
      default:
        return <p>idk shits broken contact Omar Mayani</p>
    }
  }


  render() {
    const {correctAnswers} = this.state

    return(
      <div>
      <Helmet>
        <title>Sagiri: the best waifu ever</title>
        <meta
          name='description'
          content='Discover why Sagiri is the best charracter and waifu'
        />
        <meta
          name='keywords'
          content='eromanga, eromanga sensei, sagiri, izumi sagiri, izumi, masamune, izumi masamune, yamada, yamada elf, elf
          saori, makishima saori, jinno, jinno megumi, megumi, senju muramasa, muramasa, anime, kawaii, cute, little sister, imouto'
        />
        <link
          rel='icon'
          sizes='192x192'
          href={require('./images/pngs/sagiriKek.png')}
        />
      </Helmet>
      <MainIntro/>
      <div className='scroll'>
        <JoinUs/>
        <Introduction/>
        <Company middleItem={this.middleItem(correctAnswers)}/>
        <CutePout/>
        <BigPout />
        <SimilarToLast rain={<Rain />}/>
        <SagiriGun />
        <Compare />
      </div>
      <Last/>
      </div>
    )
  }
}

export default App 