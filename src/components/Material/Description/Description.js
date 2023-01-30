import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Description({ data }) {
  const [card, setCard] = useState('');

  useEffect(() => {
    axios.get('/uploads/imgs/' + data.Card).then((res) => {
      setCard(res.config.url);
    });
  });

  return (
    <>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-16">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                {data.Title}
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                {data.Description}
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <div
                    alt="Card Image"
                    style={{
                      backgroundImage: `url(${card})`,
                      backgroundSize: '100%',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                    {data.CardTitle}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {data.CardDescription}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
