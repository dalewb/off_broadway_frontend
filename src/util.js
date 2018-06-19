export function handleChange(e) {

  console.log(this.state);
  this.setState({
    [e.target.name]: e.target.value
  })
}

export default handleChange;
