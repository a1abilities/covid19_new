import React, { useState } from 'react';
import './App.css';
import './Components/responsive.css'

import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Body from './Components/Body.js'
import Suggetion from './Components/Suggestion.js';

function App() {
  const [loadItem, setLoadItem] = useState(1);
  const [type, setType] = useState('');

  const handleItemChange = (item, type) => {
    setLoadItem(item);
    setType(type);
  }
  return (
    <div>
  
      <Header />
      
  {(loadItem === 1) && <Body handleItemChange={handleItemChange} /> }
  {(loadItem === 2) &&<Suggetion handleItemChange={handleItemChange} type={type} /> }
      
      <Footer />
    </div>
  );
}

export default App;
