import React from 'react'

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