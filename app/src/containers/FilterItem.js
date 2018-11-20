import { connect } from 'react-redux';

import FilterItem from '../components/FilterItem';
import setVisibilityFilter from '../actionCreators/VisibilityFilter';


function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
