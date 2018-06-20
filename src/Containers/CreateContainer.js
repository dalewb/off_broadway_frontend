import React, { Component } from 'react';

import ActorsDisplay from './ActorsDisplay'
import SelectedActors from './SelectedActors'
import ScriptContainer from './ScriptContainer'

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class CreateContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }

  state = {
    title: '',
    user_id: 1,
    line_1: '',
    line_2: '',
    line_3: '',
    line_4: '',
    line_5: '',
    img_url: 'https://i.pinimg.com/originals/2e/eb/61/2eeb616e06307b0e4acd01252c41edef.jpg',
    a_actor_id: 1,
    b_actor_id: 2,
    myActors: [],
  }

  createScript = (scriptInfo) => {
    this.setState({
      title: scriptInfo.title,
      line_1: `${scriptInfo.char1}-${scriptInfo.line1}`,
      line_2: `${scriptInfo.char2}-${scriptInfo.line2}`,
      line_3: `${scriptInfo.char3}-${scriptInfo.line3}`,
      line_4: `${scriptInfo.char4}-${scriptInfo.line4}`,
      line_5: `${scriptInfo.char5}-${scriptInfo.line5}`,
      user_id: `${scriptInfo.userId}`
    }, () => {this.postScript()})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.title.value,
      line_1: e.target.line_1.value,
      line_2: e.target.line_2.value,
      line_3: e.target.line_3.value,
      line_4: e.target.line_4.value,
      line_5: e.target.line_5.value,
    }, () => this.postScript() );
  };

  postScript = () => {
    fetch(URL + 'scripts', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => this.postProduction(response.scriptId));
  };

  postProduction = (scriptId) => {
    // debugger
    fetch(URL + 'productions', {
      method: 'POST',
      body: JSON.stringify({script_id: scriptId, user_id: this.state.user_id}),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => {
        console.log('postProduction end');
        console.log('postACast', response);
        // debugger
        this.postACast(response.productionId)
      });
  }

  postACast = (productionId) => {
    // debugger
    fetch(URL + 'casts', {
      method: 'POST',
      body: JSON.stringify({production_id: productionId, actor_id: this.state.a_actor_id}),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => {
        console.log('postACast end');
        console.log('postACast', response);
        // debugger
        this.postBCast(productionId)
      });
  }

  postBCast = (productionId) => {
    // debugger
    fetch(URL + 'casts', {
      method: 'POST',
      body: JSON.stringify({production_id: productionId, actor_id: this.state.b_actor_id}),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => {
        console.log('postBCast end');
        console.log(response);
        // debugger
      });
  }

  handleActorCardClick = (actor) => {
    debugger
    this.setState({
      actors: [...this.state.myActors, actor]
    }, () => {console.log(this.state.myActors)})
  }

  render() {
    return (
      <div id='createContainer'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' /><br />
          <input type='text' name='line_1' /><br />
          <input type='text' name='line_2' /><br />
          <input type='text' name='line_3' /><br />
          <input type='text' name='line_4' /><br />
          <input type='text' name='line_5' /><br />
          <input type='submit' />
        </form>
        <SelectedActors />
        <ActorsDisplay actors={this.props.actors} handleClick={this.handleActorCardClick}/>
        <ScriptContainer createScript={this.createScript}/>
      </div>
    )
  }
}

export default CreateContainer;
