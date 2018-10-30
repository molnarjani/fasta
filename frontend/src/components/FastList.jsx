import React, { Component } from "react";

class FastList extends Component {
  state = {
    fasts: []
  };

  componentDidMount() {
    fetch(`${this.props.api}/fasts`)
      .then(response => response.json())
      .then(data => this.setState({ fasts: data }));
  }
  render() {
    return (
      <React.Fragment>
        <div>FastList</div>
        <div>{this.props.api}</div>
        {this.state.fasts.map(fast => (
          <li key={fast.id}>
            {fast.user}: {fast.start} - {fast.end}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default FastList;
