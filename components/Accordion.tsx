import React, { createContext, useState } from 'react';
import { ExperienceInfo } from '../data/experienceData';
import { IoLocationSharp } from 'react-icons/io5';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

type Accordion2Props = {
  items: ExperienceInfo[];
  renderItem: (
    item: Accordion2Props['items'][number],
    onClick: (index: number) => void
  ) => React.ReactNode;
  initialItemsOpen?: boolean;
};

type AccordionItem2Props = {
  info: ExperienceInfo;
  onClick: (index: number) => void;
};

type AccordionContextType = {
  isOpen: boolean;
  index: number;
};

const AccordionContext = createContext<AccordionContextType | null>(null);
AccordionContext.displayName = 'AccordionContext';

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(`useAccordion must be used within a AccordionProvider`);
  }
  return context;
};

export const AccordionItem = ({ info, onClick }: AccordionItem2Props) => {
  const { isOpen, index } = useAccordion();

  const renderDetails = () => {
    const renderTag = (tag: string) => (
      <span
        className='flex items-center rounded-3xl bg-[var(--forest)] text-white px-3 py-1'
        key={tag}
      >
        <small>{tag}</small>
      </span>
    );
    return (
      <div className='animate-fade my-2 p-4 bg-[var(--color-gray-light)] dark:bg-[var(--feather)] rounded-lg'>
        <div>
          <div className='flex items-start gap-4 mb-2'>
            <span className='flex items-center gap-2'>
              <IoLocationSharp className='text-[var(--marine)] dark:text-[var(--forest)]' />
              {info.location}
            </span>
            <span className='flex items-center gap-2'>
              <BsArrowUpRightSquareFill className='text-[var(--marine)] dark:text-[var(--forest)]' />
              <a href={info.website}>{info.company}</a>
            </span>
          </div>
          <div className='mb-4'>
            <p className='mb-2'>{info.description.summary}</p>
            <ul className='list-disc px-8'>
              {info.description.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-wrap mt-2 gap-2'>
            {info.tags.length > 0 && info.tags.map((tag) => renderTag(tag))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='mb-2'>
      <section>
        <div className='bg-[var(--marine)] text-white rounded-lg'>
          <h4>
            <button
              type='button'
              className='flex justify-between items-center w-full text-left px-4 py-2'
              onClick={() => onClick(index)}
            >
              <span>{info.title}</span>
              <span className='text-right'>{info.date}</span>
            </button>
          </h4>
        </div>
        {isOpen && renderDetails()}
      </section>
    </div>
  );
};

export const Accordion = ({
  items,
  renderItem,
  initialItemsOpen,
}: Accordion2Props) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>(
    initialItemsOpen ? Array.from(Array(items.length).keys()) : []
  );
  const onClickHandler = (idx: number) => {
    const selectedIndexesCopy = [...selectedIndexes];
    const itemIdx = selectedIndexes.indexOf(idx);
    if (itemIdx < 0) {
      selectedIndexesCopy.push(idx);
    } else {
      selectedIndexesCopy.splice(itemIdx, 1);
    }
    setSelectedIndexes(selectedIndexesCopy);
  };
  return (
    <div>
      {items.map((item, index) => {
        const isOpen = selectedIndexes.includes(index);
        const value = { isOpen, index };
        return (
          <AccordionContext.Provider key={item.id} value={value}>
            {renderItem(item, onClickHandler)}
          </AccordionContext.Provider>
        );
      })}
    </div>
  );
};
