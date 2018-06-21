import React, { Component } from 'react';

import ActorsDisplay from './ActorsDisplay';
import SelectedActors from './SelectedActors';
import ScriptContainer from './ScriptContainer';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class CreateContainer extends Component {

  state = {
    title: null,
    user_id: 1,
    line_1: null,
    line_2: null,
    line_3: null,
    line_4: null,
    line_5: null,
    myActors: [],
    step: 1,
    img_url: 'https://i.pinimg.com/originals/2e/eb/61/2eeb616e06307b0e4acd01252c41edef.jpg',
  }

  storeScriptState = (scriptInfo) => {
    console.log('storeScriptState:scriptInfo', scriptInfo)
    this.setState({
      title: scriptInfo.title,
      line_1: `${scriptInfo.char1}-${scriptInfo.line1}`,
      line_2: `${scriptInfo.char2}-${scriptInfo.line2}`,
      line_3: `${scriptInfo.char3}-${scriptInfo.line3}`,
      line_4: `${scriptInfo.char4}-${scriptInfo.line4}`,
      line_5: `${scriptInfo.char5}-${scriptInfo.line5}`,
      user_id: `${scriptInfo.userId}`,
      step: 2
    }, () => {console.log('storeScriptState:state', this.state)});
  };

  checkSubmission = () => {
    if (this.state.myActors.length < 1){
      alert('Please select at least ONE actor.');
    }else {
      this.postScript()
    }
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     title: e.target.title.value,
  //     line_1: e.target.line_1.value,
  //     line_2: e.target.line_2.value,
  //     line_3: e.target.line_3.value,
  //     line_4: e.target.line_4.value,
  //     line_5: e.target.line_5.value,
  //   }, console.log('handleSubmit', this.state));
  // };

  postScript = () => {
    fetch(URL + 'scripts', {
      method: 'POST',
      body: JSON.stringify({ title: this.state.title, user_id: this.state.user_id, line_1: this.state.line_1, line_2: this.state.line_2, line_3: this.state.line_3, line_4: this.state.line_4, line_5: this.state.line_5, img_url: this.state.img_url}),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => this.postProduction(response.scriptId));
  };

  postProduction = (scriptId) => {
    fetch(URL + 'productions', {
      method: 'POST',
      body: JSON.stringify({script_id: scriptId, user_id: this.state.user_id}),
      headers: {'Content-Type': 'application/json'}
    })
      .then( res => res.json() )
      .then(response => {
        console.log('postProduction end');
        console.log('postProduction', response);
        this.postCast(response.productionId)
      });
  };

  postCast = (productionId) => {
    this.state.myActors.forEach(actor =>{
      fetch(URL + 'casts', {
        method: 'POST',
        body: JSON.stringify({production_id: productionId, actor_id: actor.id}),
        headers: {'Content-Type': 'application/json'}
      })
        .then( res => res.json() )
        .then(response => {
          console.log('postCast', response);
          window.history.pushState({}, "new state", "my-productions");
          this.setState({
            step: 1
          });
        });
    });
  };

  handleActorCardClick = (actor) => {
    if (!this.state.myActors.includes(actor) && this.state.myActors.length < 2) {
      this.setState(prevState => ({
        myActors: [...prevState.myActors, actor]
      }))
    };
  };

  removeChosenActor = (actorToRemove) => {
    let filteredActors = this.state.myActors.filter(actor => {
      return actor !== actorToRemove
    })
    this.setState({
      myActors: [...filteredActors]
    });
  };

  render() {
    return (
      <div id='createContainer'>
        {this.state.step === 1 ? <ScriptContainer storeScriptState={this.storeScriptState} /> : <React.Fragment><SelectedActors myActors={this.state.myActors} removeChosenActor={this.removeChosenActor} /> <ActorsDisplay actors={this.props.actors} handleClick={this.handleActorCardClick} checkSubmission={this.checkSubmission} /></React.Fragment> }
      </div>
    );
  };
};

export default CreateContainer;
