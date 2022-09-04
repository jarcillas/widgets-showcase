import React from 'react';
import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log('Title clicked! index: ', index);
    setActiveIndex(index);
  };

  const renderedItems = items.map(({ title, content }, index) => {
    const isItemActive = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={title}>
        <div
          className={`title ${isItemActive}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${isItemActive}`}>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
