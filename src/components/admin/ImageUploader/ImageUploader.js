import { useState } from 'react';
import './../Borders.css';

export default function ImageUploader({ title, name }) {
  const [image, setImage] = useState({});

  const onFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append('img', image);
    formData.append('name', name);
    formData.append('title', title);

    console.log(formData);
    const url = 'http://localhost:4000/api/upload';
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Submitted successfully'))
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <div className="UploadWrapper">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
