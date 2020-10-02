import React from 'react';
import TagBar from './TagBar';
import SearchableGallery from './SearchableGallery';

const Dashboard = (props) => {
  const types = ['js', 'react', 'c'];
  return (
    <div>
      <TagBar types={types} baseUrl="/repos" />
      <SearchableGallery data={props.data.default} />
    </div>
  );
};

export default Dashboard;
