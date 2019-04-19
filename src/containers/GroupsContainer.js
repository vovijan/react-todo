import React from 'react';
import GroupList from '../components/GroupList';
import { connect } from 'react-redux';
import { editGroup, deleteGroup } from '../redux/actions';

const mapStateToProps = state => ({
  groups: state.data
});

const mapDispatchToProps = dispatch => ({
  editGroup: (id, name) => {
    dispatch(editGroup({ id, name }));
  },
  deleteGroup: (id) => {
    dispatch(deleteGroup( id ))
  }
});

const GroupsContainer = ({ groups, editGroup, deleteGroup }) => {
  return  <GroupList 
            data={groups} 
            changeGroupName={editGroup} 
            deleteGroup={deleteGroup} 
          />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsContainer);