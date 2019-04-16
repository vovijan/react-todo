import React from 'react';
import GroupList from '../components/GroupList';
import { connect } from 'react-redux';
import { rditGroup } from '../redux/actions';

const mapStateToProps = state => ({
  group: state.data
});

const mapDispatchToProps = dispatch => ({
  editGroup: (id, name) => {
    dispatch(editGroup({
      id,
      name
    }));
  }
});

const GroupsContainer = ({ groups, editGroup }) => {
  return <GroupList data={groups} changeGroupName={editGroup} />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsContainer);