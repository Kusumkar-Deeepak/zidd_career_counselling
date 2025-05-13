import React from 'react';
import Placements from '../components/Placements';

const PlacementsPage = ({ language }) => {
  return (
    <div>
      <Placements language={language} />
    </div>
  );
};

export default PlacementsPage;