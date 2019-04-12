import React  from 'react';
import Group from './Group';

const GroupList = (props) => {
	return (
		<ul style={{marginTop: 50}}>
			{
				props.data.map((group) => {
					return <Group key={group.id} data={group} changeGroup={props.changeGroup}/>
				})
			}
		</ul>
	)
};

export default GroupList;