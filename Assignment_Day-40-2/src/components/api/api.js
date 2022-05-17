import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);

  const result = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setData(res.data);
      })
      .catch(Error);
  };

  useEffect(() => {
    result();
  }, [result]);

  return (
    <>
      {data.map((dt) => {
        const { id, title } = dt;
        return (
          <div key={id}>
            <p>{title}</p>
          </div>
        );
      })}
    </>
  );
};

export default Api;
