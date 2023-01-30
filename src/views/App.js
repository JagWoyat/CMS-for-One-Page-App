import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Component from '../components/Material/Component';

function App() {
  const [layout, setLayout] = useState(null);
  const [names, setNames] = useState(null);
  const [data, setData] = useState({});
  const [fetch, setFetch] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!fetch) {
      axios.get('/uploads/layout.txt').then((res) => {
        setLayout(res.data);
        setNames(Object.keys(layout));
        setFetch(true);
      });
    }
  });

  function fetchData() {
    if (fetch && !completed) {
      names.map((name) => {
        axios.get('/' + name).then((res) => {
          let type = layout[name];
          let stuff = data;
          stuff[name] = { type, ...res.data };
          setData({ ...data });
        });
      });
      console.log(layout);
      setCompleted(true);
    }
  }

  return (
    <>
      {/* <Button className="Admin">
        <Link to="/admin">Secret Admin Panel</Link>
      </Button> */}
      {fetch === true && completed === false && fetchData()}
      <div className="AppWrapper">
        {completed === true && (
          <>
            {Object.entries(data).map(([name, obj]) => (
              <Component data={obj} key={name} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
