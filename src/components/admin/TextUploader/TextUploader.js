import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './../Borders.css';

export default function TextUploader({ title, name }) {
  const [text, setText] = useState('');

  const onNameChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://localhost:4000/api/text';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title, text }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Submitted successfully'))
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <div className="UploadWrapper">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" value={text} onChange={onNameChange}></TextField>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}
