import React, { useState } from 'react';
import Accordion from './Accordion';
import AccordionInput from './AccordionInput';
import Search from './Search';

const App = () => {
  const initialitems = [
    { title: 'What is the Game of the Year?', content: 'Elden Ring' },
    { title: 'Who are you?', content: "Nobody you'd know." },
    {
      title: 'What are you talking about?',
      content: 'Mostly programming stuff.',
    },
  ];

  const [items, setItems] = useState(initialitems);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      {/* <Accordion items={items} />
      <AccordionInput addItem={addItem} /> */}
      <Search />
    </div>
  );
};

export default App;
