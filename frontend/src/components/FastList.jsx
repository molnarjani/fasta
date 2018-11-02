import React, { Component } from "react";

class FastList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>FastList</div>
        {this.props.fasts.map(fast => (
          <li key={fast.id}>
            {fast.user}: {fast.start} - {fast.end}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default FastList;
