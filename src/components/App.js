import React, { useState } from 'react';
import Accordion from './Accordion';
import AccordionInput from './AccordionInput';
import Search from './Search';
import Dropdown from './Dropdown';

const App = () => {
  const initialitems = [
    { title: 'What is the Game of the Year?', content: 'Elden Ring' },
    { title: 'What is the largest continent?', content: 'Asia' },
    { title: 'Who is the Father of Geometry?', content: 'Euclid' },
  ];

  const [items, setItems] = useState(initialitems);

  const [showDropdown, setShowDropdown] = useState(true);

  const [activeTab, setActiveTab] = useState(0);

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
    <div className="ui container">
      <div className="ui header" style={{ marginTop: '10px' }}>
        Widgets:
      </div>
      <div className="ui top attached tabular menu">
        <div
          id="tab0"
          className={`item ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(0)}
        >
          Accordion
        </div>
        <div
          id="tab1"
          className={`item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          Search
        </div>
        <div
          id="tab2"
          className={`item ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          Dropdown
        </div>
      </div>
      <div
        id="widget0"
        className={`ui bottom attached tab segment ${
          activeTab === 0 ? 'active' : ''
        }`}
      >
        <Accordion items={items} />
        <AccordionInput addItem={addItem} />
      </div>
      <div
        id="widget1"
        className={`ui bottom attached tab segment ${
          activeTab === 1 ? 'active' : ''
        }`}
      >
        <Search />
      </div>
      <div
        id="widget2"
        className={`ui bottom attached tab segment ${
          activeTab === 2 ? 'active' : ''
        }`}
      >
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
