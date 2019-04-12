import React  from 'react';

function GroupList(props) {
	return (
		<ul>
			{
				props.data.map(group => {
					return <li>{group.name}</li>
				})
			}
		</ul>
	)

}

export default GroupList;