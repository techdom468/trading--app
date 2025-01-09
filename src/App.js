import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradingApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trading App</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}: {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default TradingApp;
