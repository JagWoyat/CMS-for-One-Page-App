import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { teamData } from '../../../data/index';
import PageTitle from '../../../widgets/layout/page-title';
import TeamCard from '../../../widgets/cards/feature-card';

export default function Profiles() {
  return (
    <>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
            NSIDClead scentist, puts the potentially record maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
