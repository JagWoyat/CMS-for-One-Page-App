import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import './../Borders.css';

export default function ButtonUploader({ title, name }) {
  const [buttons, setButtons] = useState(['Button']);

  const newButton = (event) => {
    setButtons([...buttons, 'Nowy']);
  };

  const onNameChange = (id) => (event) => {
    let tempArr = [...buttons];
    tempArr[id] = event.target.value;
    setButtons(tempArr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://localhost:4000/api/arr';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title, buttons }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Submitted successfully'))
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <div className="UploadWrapper">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {buttons.map((title, id) => (
          <input key={id} value={title} onChange={onNameChange(id)}></input>
        ))}
        <button type="submit">Upload</button>
      </form>
      <Button onClick={newButton}>New</Button>
    </div>
  );
}
