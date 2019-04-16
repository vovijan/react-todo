import React from 'react';
import Input from '../components/mainInput';
import { connect } from 'react-redux';
import { addGroup } from '../redux/actions';

const mapStateToProps = state => ({
  groups: state.data
});

const mapDispatchToProps = dispatch => ({
  addGroup: (name) => {
    dispatch(addGroup({ name }));
  }
});

const InputContainer = ({ addGroup }) => {
  return <Input addGroup={addGroup} />
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(InputContainer);