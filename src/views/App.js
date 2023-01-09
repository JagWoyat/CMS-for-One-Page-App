import './App.css';
//import Button from './components/Button/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Main from './../components/Material/Main/Main';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  // const [logo, setLogo] = useState(null);
  const [tlo, setTlo] = useState(null);
  // const [header, setHeader] = useState(null);
  const [title, setTitle] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios.get('/uploads/paths/Background.txt').then((res) => {
      axios.get('/uploads/imgs/' + res.data).then((res) => {
        setTlo(res.config.url);
        setCompleted(true);
      });
    });
  }, []);

  // useEffect(() => {
  //   axios.get('/uploads/paths/logo.txt').then((res) => {
  //     axios.get('/uploads/imgs/' + res.data).then((res) => {
  //       setLogo(res.config.url);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    axios.get('/uploads/paths/MainButtons.txt').then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('/uploads/paths/MainTitle.txt').then((res) => {
      setTitle(res.data);
    });
  }, []);

  return (
    <>
      <Button className="Admin">
        <Link to="/admin">Secret Admin Panel</Link>
      </Button>
      <div className="AppWrapper">
        {completed === true && (
          <>
            <Main data={data} tlo={tlo} title={title} />
            {/* <Description /> */}
            {/* <Profiles /> */}
            {/* <Contact /> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
