import React, { useState } from 'react';
import GridDisplay from './GridDisplay';
import ComboBox from './ComboBox';
import { products } from '../data/products';

const filterItems = (filter, items) => {
  if (filter.length === 0) return items;
  return items.filter(it => it.name
    .toLowerCase().includes(filter.toLowerCase()));
}

const Search = () => {
  const [ filter, changeFilter ] = useState('');

  const items = filterItems(filter, products);

  return <div style={{ height: '100vh', overflowY: 'hidden' }}>
    <div style={{ padding: 10 }}>
      <ComboBox items={items.map(it => it.name)} setValue={changeFilter} />
    </div>
    <div style={{padding: 10, height: '80%', overflow: 'scroll' }}>
      <GridDisplay 
        items={items.map(p => p.name)} 
        itemsPerRow={2} spacing={1} 
      />
    </div>
  </div>;
}

export default Search;
