import React  from 'react';
import userResources from './userResources';

const ResourceList = ({ resource }) => {
    const resources = userResources(resource);

    return (
        <ul>{resources.map(record => <li>{record.title}</li>)}</ul>
    );    
};

export default ResourceList;