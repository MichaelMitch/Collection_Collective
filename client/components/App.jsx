import React from 'react'
import {Route, Link} from 'react-router-dom'
import Launch from './Launch'
import Header from './Header'
import Mixes from './MixesPage/Mixes'
import MixPage from './MixPage/Mix'
 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: 'hello'
    }
  }
  
  render(){
  return (
    <div className ="app">
      <Route path="/" component={Header}/>
      <Route exact path="/" component={Launch}/>
      <Route exact path="/Mixes" component={Mixes}/>
      <Route path="/Mixes/:id" component={MixPage}/>
    </div>
    
  )
  }
}

export default App