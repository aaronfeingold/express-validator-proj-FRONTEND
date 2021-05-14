import React, { Component } from 'react'

class CallAPI extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:8000/")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI()
  }

  render() {
    return (
      <div className="HelloWorld">
        <p className="Hello">{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default CallAPI