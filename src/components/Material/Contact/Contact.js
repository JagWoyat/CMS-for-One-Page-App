import { Card, Typography, Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';
import { contactData } from '../../../data/index';
import PageTitle from '../../../widgets/layout/page-title';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = '/api/contact';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log('Contact Form Submitted'))
      .catch((error) => console.log('Contact Form Error', error));
  };

  return (
    <>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down to low ice.
            According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: 'w-5 h-5',
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">{description}</Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center" onSubmit={handleSubmit}>
            <div className="mb-8 flex gap-8">
              <Input
                variant="standard"
                size="lg"
                label="Full Name"
                onChange={handleNameChange}
                value={name}
              />
              <Input
                variant="standard"
                size="lg"
                label="Email Address"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <Textarea
              variant="standard"
              size="lg"
              label="Message"
              rows={8}
              onChange={handleMessageChange}
              value={message}
            />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
