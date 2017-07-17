import React, { Component } from 'react'
import './App.css'
import madLibs from './fixtures/madLibs.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partsOfSpeech: {}
    }
  }

  findPartsOfSpeech(sentence) {
    let properNouns = 0
    let nouns = 0
    let adjectives = 0
    let verbs = 0
    let words = sentence.split(' ')
    for (var word of words) {
      if (word.includes('1')) properNouns++
      if (word.includes('2')) nouns++
      if (word.includes('3')) adjectives++
      if (word.includes('4')) verbs++
    }
    return {
      'properNoun' : properNouns,
      'noun' : nouns,
      'adjective' : adjectives,
      'verb' : verbs }
  }

  componentDidMount() {
    let parts = this.findPartsOfSpeech(madLibs.madLibs[0].text)
    console.log('parts ', parts)
    this.setState({ partsOfSpeech: parts }, () => {
      console.log(this.state.partsOfSpeech)
    })
  }

  onSubmit(e) {
    e.preventDefault()
    alert('i submit!')
  }

  render() {
    //const { partsOfSpeech } = this.state
    //console.log('here in render: ', partsOfSpeech)
    return (
      <div className='mad-libs-app'>
        <div className='title'>Mad Libs</div>
        <div className='content'>
          <form onSubmit={() => this.onSubmit()}>
          <input type='text' placeholder='part' />
          <input type='submit' value='I submit!' onClick={(e) => this.onSubmit(e)}/>
        </form>
        </div>
      </div>
    )
  }
}

export default App
