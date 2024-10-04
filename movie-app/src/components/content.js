import React from 'react';

const Content = () => {
  return (
    <div>
        {/**excerise one, have this displayed on your screen */}
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;