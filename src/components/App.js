import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const items = [
    { title: 'What are you?', content: "I don't know." },
    { title: 'Who are you?', content: 'NANA' },
    { title: 'What are you talking about?', content: 'stuff' },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
