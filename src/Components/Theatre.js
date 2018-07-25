import React, { Component } from 'react';

import { API_URL, localToken } from '../util';

class Theatre extends Component {
  state = {
    currentLine: 0,
    production: null,
    action: false,
    hide: false
  };

  componentDidMount() {
    this.fetchProduction();
  };

  componentWillUnmount() {
    window.clearInterval(this.dialogueInterval);
  };

  fetchProduction = () => {
    fetch(`${API_URL}productions/${this.props.show}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localToken()
      }
    }).then( res => res.json() )
    .then(production => {
      this.setState({production});
    });
  };

  dialogue = '';
  dialogueInterval = '';

  startProduction = () => {
    this.openCurtains();
  };

  prepLine = (line) => {
    if (line){
      return line.slice(2, line.length);
    }
  }

  renderDialogue = () => {
    switch (this.state.currentLine) {
      case 1:
        this.dialogue = <div className={`${this.state.production.script.line_1[0]}-bubble`} id='line_1' >{this.prepLine(this.state.production.script.line_1)}</div>
        break;
      case 2:
        this.dialogue = <div className={`${this.state.production.script.line_2[0]}-bubble`} id='line_2' >{this.prepLine(this.state.production.script.line_2)}</div>
        break;
      case 3:
        this.dialogue = <div className={`${this.state.production.script.line_3[0]}-bubble`} id='line_3' >{this.prepLine(this.state.production.script.line_3)}</div>
        break;
      case 4:
        this.dialogue = <div className={`${this.state.production.script.line_4[0]}-bubble`} id='line_4' >{this.prepLine(this.state.production.script.line_4)}</div>
        break;
      case 5:
        this.dialogue = <div className={`${this.state.production.script.line_5[0]}-bubble`} id='line_5' >{this.prepLine(this.state.production.script.line_5)}</div>
        break;
      default:
        this.dialogue = <div></div>
    };
  };

  openCurtains = () => {
    this.setState({
      action: true,
      hide: true
    });
    const leftCurtain = document.getElementById('img_l-curtain');
    const rightCurtain = document.getElementById('img_r-curtain');
    const lights = document.getElementById('lights');
    lights.style.opacity = '.75';
    leftCurtain.style.left = `0px`;
    rightCurtain.style.right = `0px`;
    let left = leftCurtain.style.left.replace(/[^0-9.]/g, "");
    let right = rightCurtain.style.left.replace(/[^0-9.]/g, "");
    let opass = lights.style.opacity.replace(/[^0-9.]/g, "") * 100;

    const turnOnLights = () => {
      if (opass > 0){
        lights.style.opacity = (opass -= 1) / 100;
        window.requestAnimationFrame(turnOnLights);
      }else {
        return
      }
    };

    const moveLCurtain = () => {
      if (left > (-26)) {
        leftCurtain.style.left = `${left -= 1}px`;
        window.requestAnimationFrame(moveLCurtain);
      } else {
        return this.dialogueInterval = window.setInterval(this.cycleDialogue, 2500);
      };
    };

    const moveRCurtain = () => {
      if (right > (-26)) {
        rightCurtain.style.right = `${right -= 1}px`;
        window.requestAnimationFrame(moveRCurtain);
      } else {
        return
      };
    }
    turnOnLights();
    moveLCurtain();
    moveRCurtain();
  };

  closeCurtains = () => {
    const leftCurtain = document.getElementById('img_l-curtain');
    const rightCurtain = document.getElementById('img_r-curtain');
    let left = -Math.abs(leftCurtain.style.left.replace(/[^0-9.]/g, ""));
    let right = -Math.abs(rightCurtain.style.right.replace(/[^0-9.]/g, ""));
    const lights = document.getElementById('lights');
    lights.style.opacity = '0';
    let opass = lights.style.opacity.replace(/[^0-9.]/g, "") * 100;

    const turnOffLights = () => {
      if (opass < 75){
        lights.style.opacity = (opass += 1) / 100;
        window.requestAnimationFrame(turnOffLights);
      }else {
        this.setState({
          hide: false
        });
        return
      }
    };

    const moveLCurtain = () => {
      if (left < -1) {
        leftCurtain.style.left = `${left += 1}px`;
        window.requestAnimationFrame(moveLCurtain);
      } else {
        return
      };
    };

    const moveRCurtain = () => {
      if (right < 0) {
        rightCurtain.style.right = `${right += 1}px`;
        window.requestAnimationFrame(moveRCurtain);
      } else {
        return
      };
    }
    turnOffLights();
    moveLCurtain();
    moveRCurtain();
  };

  cycleDialogue = () => {
    if(this.state.currentLine < 5){
      const currentLine = this.state.currentLine + 1
      this.setState({
        currentLine
      });
    }else{
      this.setState({
        currentLine: 0
      });
      window.clearInterval(this.dialogueInterval);
      this.closeCurtains();
    };
  };

  renderEndPrompt = () => {
    if (!this.state.hide){
      return (
        <div id='prompt'>
          <span className='header'>The End.</span>
          <span className='action' onClick={this.startProduction}>Watch Again ></span>
        </div>
      );
    };
  };

  renderStartPrompt = () => {
    return (
      <div id='prompt'>
        <span className='header'>Welcome!</span>
        <span className='action' onClick={this.startProduction}>Start Play ></span>
      </div>
    );
  };

  render() {
    this.renderDialogue();
    return (
      <React.Fragment>
      { this.state.production ? <React.Fragment>
        <div id='play_title'>{this.state.production.script.title}</div>
        <div id='showDiv' onClick={this.cycleDialogue} >
          {this.state.action === false ? this.renderStartPrompt() : this.renderEndPrompt() }
          {this.dialogue}
          <img id='img_chairs' src='/assets/stage_setup_chairs.png' alt='chairs' />
          <img id='img_l-curtain' src='/assets/stage_setup_l-curtain.png' alt='left curtain' />
          <img id='img_r-curtain' src='/assets/stage_setup_r-curtain.png' alt='right curtain' />
          <div id='lights'></div>
          <img id='img_stage' src='/assets/stage_setup_stage.png' alt='stage' />
          <object id='a-character' aria-label='Actor A' data={this.state.production.actors[0].svg_url} type="image/svg+xml"></object>
          <object id='b-character' aria-label='Actor B' data={this.state.production.actors[1].svg_url} type="image/svg+xml"></object>
        </div>
      </React.Fragment> : null }
      </React.Fragment>
    )
  }
}

export default Theatre;
