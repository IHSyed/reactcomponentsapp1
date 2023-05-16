import React from 'react'
import Component1 from "./Component1"
import ClassComponent from './ClassComponent';

const App = () => {
  return (
    <>
      <div>
        <h1> This is a Heading "h1" </h1>
        <p> This is First Paragraph</p>
      </div>

      <div>
        <h2>Hello Nono. Heading "h2"</h2>
        <p> This is Second Paragraph</p>
      </div>

      <Component1 />
      <ClassComponent />

    </>
  );
};

export default App;

// You can copy the sane component as many time you want
// This is called RE-USABILITY in React


