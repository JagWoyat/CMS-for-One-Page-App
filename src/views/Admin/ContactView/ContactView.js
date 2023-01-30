import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ContactView() {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    axios.get('/mes/m').then((res) => {
      setMessages(res.data);
    });
  }, []);

  function deleteFile(name) {
    axios.delete(`/mes/${name}`).then((res) => {
      console.log('dziala');
    });
  }

  const listMessages = Object.entries(messages).map(([name, content]) => (
    <div className="border-2 border-black shadow-lg w-96 m-8 p-2" key={name}>
      <h1>{content.name}</h1>
      <h2>{content.email}</h2>
      <h3>{content.message}</h3>
      <Button onClick={() => deleteFile(name)}>Delete</Button>
    </div>
  ));

  return <div>{listMessages}</div>;
}
