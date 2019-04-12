import React  from 'react';
import Group from './Group';

const GroupList = (props) => {
	return (
		<ul>
			{
				props.data.map(group => {
					return <Group data={group} />
				})
			}
		</ul>
	)
};

export default GroupList;