import React from 'react';
import TagBar from './TagBar';
import Cards from './Cards';

const Dashboard = (props) => {
  const types = ['js', 'react', 'c'];

  return (
    <div>
      <TagBar types={types} baseUrl="/repos" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cards cards={props.data.default} />
      </div>
    </div>
  );
};

export default Dashboard;
