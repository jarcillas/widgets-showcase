import React, { useState } from 'react';
import Accordion from './Accordion';
import AccordionInput from './AccordionInput';
import Search from './Search';
import Dropdown from './Dropdown';

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

  const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'The Color Blue',
      value: 'blue',
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} />
      <AccordionInput addItem={addItem} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
