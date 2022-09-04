import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const items = [
    { title: 'What is the Game of the Year?', content: 'Elden Ring' },
    { title: 'Who are you?', content: "Nobody you'd know." },
    {
      title: 'What are you talking about?',
      content: 'Mostly programming stuff.',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
