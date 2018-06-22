import React, { Component } from 'react';

class ARpage extends Component {
  state = {
    currentLine: 1
  }

  componentDidMount() {
    // this.openCurtains();
  }

  dialogue = '';

  prepLine = (line) => {
    if (line){
      return line.slice(2, line.length-1);
    }
  }

  renderDialogue = () => {
    switch (this.state.currentLine) {
      case 1:
        this.dialogue = <div className={`${this.props.show.script.line_1[0]}-bubble`} id='line_1' >{this.prepLine(this.props.show.script.line_1)}</div>
        break;
      case 2:
        this.dialogue = <div className={`${this.props.show.script.line_2[0]}-bubble`} id='line_2' >{this.prepLine(this.props.show.script.line_2)}</div>
        break;
      case 3:
        this.dialogue = <div className={`${this.props.show.script.line_3[0]}-bubble`} id='line_3' >{this.prepLine(this.props.show.script.line_3)}</div>
        break;
      case 4:
        this.dialogue = <div className={`${this.props.show.script.line_4[0]}-bubble`} id='line_4' >{this.prepLine(this.props.show.script.line_4)}</div>
        break;
      case 5:
        this.dialogue = <div className={`${this.props.show.script.line_5[0]}-bubble`} id='line_5' >{this.prepLine(this.props.show.script.line_5)}</div>
        break;
      default:
        this.dialogue = <div></div>
    };
  };

  openCurtains = () => {
    const leftCurtain = document.getElementById('img_l-curtain');
    const rightCurtain = document.getElementById('img_r-curtain');
    leftCurtain.style.left = `0px`;
    rightCurtain.style.right = `0px`;
    let i = 0;

    const moveLCurtain = () => {
      let left = leftCurtain.style.left.replace(/[^0-9.]/g, "");
      if (i < 26) {
        // console.log('moving left curtain:', `old: ${left}. updated: ${left -= 2}`);
        leftCurtain.style.left = `${left -= 2}px`;
        i += 2;
        window.requestAnimationFrame(moveLCurtain);
      } else {
        return
      };
    };

    moveLCurtain();
    // let i = 0;
    // while (i < 50){
    //   leftCurtain.style.left = `${i * (-1)}px`
    //   rightCurtain.style.right = `${i * (-1)}px`
    //     i++;
    // };
  };

  cycleDialogue = () => {
    if(this.state.currentLine < 5){
      const currentLine = this.state.currentLine + 1

      this.setState({
        currentLine
      });
    }else{
      this.setState({
        currentLine: 1
      });
    };
  };

  render() {
    this.renderDialogue();
    return (
      <React.Fragment>
        <div id='play_title'>{this.props.show.script.title}</div>
        <div id='showDiv' onClick={this.cycleDialogue} >
          {this.dialogue}
          <img id='img_chairs' src='/assets/stage_setup_chairs.png' alt='chairs' />
          <img id='img_l-curtain' src='/assets/stage_setup_l-curtain.png' alt='left curtain' />
          <img id='img_r-curtain' src='/assets/stage_setup_r-curtain.png' alt='right curtain' />
          <img id='img_stage' src='/assets/stage_setup_stage.png' alt='stage' />
          <object id='a-character' aria-label='Actor A' data={this.props.show.actors[0].svg_url} type="image/svg+xml"></object>
          <object id='b-character' aria-label='Actor B' data={this.props.show.actors[1].svg_url} type="image/svg+xml"></object>
        </div>
      </React.Fragment>
    )
  }
}

export default ARpage;
