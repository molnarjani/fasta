import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFasts, addFast, deleteFast } from "../actions/fastActions";

class FastList extends Component {
  state = {
    user: "",
    start: "",
    end: ""
  };

  componentWillMount() {
    this.props.fetchFasts();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newFast = {
      user: this.state.user,
      start: this.state.start,
      end: this.state.end
    };
    this.props.addFast(newFast);
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        <div>FastList</div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>User</label>
            <input
              name="user"
              value={this.state.user}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Start</label>
            <input
              name="start"
              value={this.state.start}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>End</label>
            <input name="end" value={this.state.end} onChange={this.onChange} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        {this.props.fasts.map(fast => (
          <li key={fast.id}>
            #{fast.id} {fast.user}: {fast.start} - {fast.end}
            <button onClick={() => this.props.deleteFast(fast.id)}>X</button>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

FastList.propTypes = {
  fasts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  fasts: state.fasts.items
});

export default connect(
  mapStateToProps,
  { fetchFasts, addFast, deleteFast }
)(FastList);
