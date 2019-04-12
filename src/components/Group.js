import React from 'react';

 function Group({data}) {
 	return (
		<li key={Date.now()}>
			{data.name}
			<hr/>
		</li>
  )
}

export default Group;