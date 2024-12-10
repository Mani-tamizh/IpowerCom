import React from 'react';
import './SkeletonLoader.css'; // Import the necessary CSS file for styles

const SkeletonLoader = () => {
  return (
    <div className='bg-body'>
    <div id="load">
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </div>
    </div>
  );
};

export default SkeletonLoader;
