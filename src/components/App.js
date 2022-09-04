import React, { useState } from 'react';
import Accordion from './Accordion';
import AccordionInput from './AccordionInput';

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

  // const dummyItem = {
  //   title: 'I just added an item.',
  //   content: 'Yeah bro.',
  // };

  return (
    <div>
      <Accordion items={items} />
      <AccordionInput addItem={addItem} />
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          addItem(dummyItem);
        }}
      >
        Add an Item
      </button> */}
    </div>
  );
};

export default App;
