export function handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

export default handleChange;
