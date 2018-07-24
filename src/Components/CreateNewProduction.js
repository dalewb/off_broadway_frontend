import React, { Component } from 'react';

import ActorCard from './ActorCard'
import ScriptContainer from '../Containers/ScriptContainer';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class CreateNewProduction extends Component {

  state = {
    title: null,
    user_id: null,
    line_1: null,
    line_2: null,
    line_3: null,
    line_4: null,
    line_5: null,
    myActors: [],
    step: 1,
    img_url: '',
  }

  storeScriptState = (scriptInfo) => {
    this.setState({
      title: scriptInfo.title,
      line_1: `${scriptInfo.char1}-${scriptInfo.line1}`,
      line_2: `${scriptInfo.char2}-${scriptInfo.line2}`,
      line_3: `${scriptInfo.char3}-${scriptInfo.line3}`,
      line_4: `${scriptInfo.char4}-${scriptInfo.line4}`,
      line_5: `${scriptInfo.char5}-${scriptInfo.line5}`,
      user_id: scriptInfo.userId,
      img_url: scriptInfo.img_url,
      step: 2,
      production_id: null
    });
  };

  checkSubmission = () => {
    if (this.state.myActors.length < 1){
      alert('Please select at least ONE actor.');
    } else {
      this.postScript()
    }
  };

  postScript = () => {
    fetch(URL + 'scripts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        user_id: this.state.user_id,
        line_1: this.state.line_1,
        line_2: this.state.line_2,
        line_3: this.state.line_3,
        line_4: this.state.line_4,
        line_5: this.state.line_5,
        img_url: this.state.img_url
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then( res => res.json() )
      .then(response => this.postProduction(response.scriptId));
  };

  postProduction = (scriptId) => {
    fetch(URL + 'productions', {
      method: 'POST',
      body: JSON.stringify({script_id: scriptId, user_id: this.state.user_id}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then( res => res.json() )
      .then(response => {
        this.setState({production_id: response.productionId});
        this.postCast(response.productionId)
      });
  };

  postCast = (productionId) => {
    this.state.myActors.forEach(actor =>{
      fetch(URL + 'casts', {
        method: 'POST',
        body: JSON.stringify({production_id: productionId, actor_id: actor.id}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
        .then( res => res.json() )
        .then(response => {
          if (response.errors || response.error){
            console.log(response.errors);
          }
        });
    });
    this.props.pageChange('my productions');
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

  renderActors = () => {
    return (
      <React.Fragment>
        <div id='selectedCards'>
          <h4>2. Select two actors:</h4>

          <div className="ui five cards centered">
            {this.state.myActors.map((actor, index) =>  <ActorCard actor={actor} key={index} handleClick={() => {this.removeChosenActor(actor)}} />)}
          </div>
        </div>

        <div className="ui five cards centered">
          {this.props.actors.map((actor, index) => <ActorCard actor={actor} key={index} handleClick={this.handleActorCardClick}/>)}
        </div>

        <div className='divider'></div>
        <p>&nbsp;</p>
        <p>
          <button onClick={this.checkSubmission}>Submit Project</button>
        </p>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div id='createContainer'>
        {this.state.step === 1 ? <ScriptContainer storeScriptState={this.storeScriptState} /> : this.renderActors()}
      </div>
    );
  };
};

export default CreateNewProduction;
