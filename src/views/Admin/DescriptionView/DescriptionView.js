import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageUploader from '../../../components/admin/ImageUploader/ImageUploader';
import TextUploader from '../../../components/admin/TextUploader/TextUploader';

export default function DescriptionView() {
  const [layout, setLayout] = useState({});

  useEffect(() => {
    axios.get('/uploads/layout.txt').then((res) => {
      setLayout(res.data);
    });
  }, []);

  const listItems = Object.entries(layout).map(([name, type]) => (
    <div key={name}>
      {type === 'Type1' && (
        <>
          <h1>{`${name}: ${type}`}</h1>
          <TextUploader title={`Title`} name={name} />
          <TextUploader title={`Paragraph`} name={name} />
          <ImageUploader title={`Background`} name={name} />
          <TextUploader title={`Header`} name={name} />
        </>
      )}
      {type === 'Type2' && (
        <>
          <h1>{`${name}: ${type}`}</h1>
          <TextUploader title={`Title`} name={name} />
          <TextUploader title={`Description`} name={name} />
          <ImageUploader title={`Card`} name={name} />
          <TextUploader title={`CardTitle`} name={name} />
          <TextUploader title={`CardDescription`} name={name} />
        </>
      )}
      {type === 'Type3' && (
        <>
          <h1>{`${name}: ${type}`}</h1>
          <h2>Contact form</h2>
          <TextUploader title={`Title`} name={name} />
        </>
      )}
    </div>
  ));

  return <div>{listItems}</div>;
}

// {completed &
//   Object.entries(layout).map(([name, type]) => (
//     <div key={name}>
//       {(type === 'Type2') &
//       (
//         <>
//           {console.log(layout)}
//           <button>cos</button>
//         </>
//       )}
//     </div>
//     if (type === 'Type1')
//       <>
//         <TextUploader type={'MainTitle'} />
//         <ImageUploader type={'Logo'} />
//         <ButtonUploader type={'MainButtons'} />
//         <ImageUploader type={'Background'} />
//         <TextUploader type={'MainHeader'} />
//       </>;

//     if (type === 'Type3')
//       <>
//         <TextUploader type={'MainTitle'} />
//         <ImageUploader type={'Logo'} />
//         <ButtonUploader type={'MainButtons'} />
//         <ImageUploader type={'Background'} />
//         <TextUploader type={'MainHeader'} />
//       </>;
//     if (type === 'Type4')
//       <>
//         <TextUploader type={'MainTitle'} />
//         <ImageUploader type={'Logo'} />
//         <ButtonUploader type={'MainButtons'} />
//         <ImageUploader type={'Background'} />
//         <TextUploader type={'MainHeader'} />
//       </>;
//   ))}
