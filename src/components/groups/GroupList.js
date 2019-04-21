import React from 'react';
import Group from '../groups/Group';

import './styleGroups.css';

const GroupList = props => {
	return (
		<>
			<h3>Group List:</h3>
			<ul className="group__list">
				{
					props.data.map((group) => {
						return <Group 
											key={group.id} 
											data={group} 
											changeGroupName={props.changeGroupName} 
											deleteGroup={props.deleteGroup}
										/>
					})
				}
			</ul>
		</>
	)
};

export default GroupList;