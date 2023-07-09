import React, { useMemo } from 'react';

import './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  //this is useMemo for store data and avoid rerender when data not change
  const sortedList = useMemo(() => {
      console.log('Items sorted');
      return items.sort((a, b) => a - b);
    }, [items]); 
  console.log('DemoList RUNNING');
  
  return (
      <div className="list">
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


//this is React.memo for store component and avoid rerender when props value not change
export default React.memo(DemoList);