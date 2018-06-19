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
<<<<<<< HEAD
    return (
      <div></div>
      // {this.renderLines()}
    )
=======
    return this.renderLines();
    // return (
    //   {this.renderLines()}
    // )
>>>>>>> 17bfbaf8c88a3a6eed34ee5b10f79a17423293b4
  }
}

export default ScriptDisplay;
