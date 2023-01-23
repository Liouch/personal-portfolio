import React from 'react';
import { Accordion, AccordionItem } from '../components/Accordion';
import Layout from '../components/Layout';
import { experienceList } from '../data/experienceData';

const Experience = () => {
  return (
    <Layout>
      <h2>Professional experience</h2>
      <div className='mb-10 lg:mb-20'>
        <div className=''>
          <Accordion
            items={experienceList}
            renderItem={(item, onClick) => (
              <AccordionItem info={item} onClick={onClick} />
            )}
            initialItemsOpen
          />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
