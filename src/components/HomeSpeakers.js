import { teamdata } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const HomeSpeakers = () => {
  // Limiting the number of items to 5
  const limitedTeamData = teamdata.slice(0, 4);

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET THE SPEAKERS' /> <br />
            <br />
            <Title title='A team of highly qualified, professional and experienced security analysts' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {limitedTeamData.map((item) => (
              <Card data={item} key={item.id} caption={item.post} role={item.role} />
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default HomeSpeakers;
