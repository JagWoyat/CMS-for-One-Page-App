import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Main({ data }) {
  const [tlo, setTlo] = useState('');

  useEffect(() => {
    axios.get('/uploads/imgs/' + data.Background).then((res) => {
      setTlo(res.config.url);
    });
  });

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 z-10">
        <h1 className="absolute left-8 top-8 text-4xl text-white font-bold z-50">{data.Header}</h1>
        <div
          style={{
            backgroundImage: `url(${tlo})`,
          }}
          className="absolute top-0 h-full w-full bg-cover bg-center"
        />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                {data.Title}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                {data.Paragraph}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
