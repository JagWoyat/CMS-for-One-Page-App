import { useState } from 'react';
import './../Borders.css';

export default function TextUploader({ type }) {
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
      body: JSON.stringify({ type, text }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Submitted successfully'))
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <div className="UploadWrapper">
      <h1>{type}</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={onNameChange}></input>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
