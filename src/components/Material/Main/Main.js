import { Typography, Button } from '@material-tailwind/react';

export default function Main({ tlo, data, title }) {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
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
                {title}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat
                semper viverra. Suscipit adipiscing bibendum est ultricies integer quis. Sit amet
                venenatis urna cursus eget nunc scelerisque.
              </Typography>
            </div>
          </div>
        </div>
        <div className="ButtonWrapper">
          {data.map((text, id) => (
            <Button key={id}>{text}</Button>
          ))}
        </div>
      </div>
    </>
  );
}
