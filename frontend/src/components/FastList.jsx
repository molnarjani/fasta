import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFasts } from "../actions/fastActions";

class FastList extends Component {
  componentWillMount() {
    this.props.fetchFasts();
  }

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

FastList.propTypes = {
  fasts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  fasts: state.fasts.items
});

export default connect(
  mapStateToProps,
  { fetchFasts }
)(FastList);
