import React, { Component } from 'react';

class ScriptDisplay extends Component {

  renderLines = () => {

    // how will we know which line belongs to which character?
    // how will the lines be passed to ScriptDisplay?

    // this.props.lines.map(line => {
    //   return (
    //     <span>
    //       {/* <p>{char}</p> */}
    //       <p>{line}</p>
    //     </span>
    //   )})
    return null;
  }

  render() {
    return this.renderLines();
    // return (
    //   {this.renderLines()}
    // )
  }
}

export default ScriptDisplay;
