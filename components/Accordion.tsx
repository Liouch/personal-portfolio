import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { AccordionContext, useAccordion } from '../hooks/useAccordion';
import { ExperienceInfo } from '../types/types';

export type AccordionProps = {
  items: ExperienceInfo[];
  renderItem: (
    item: ExperienceInfo,
    onClick: (index: number) => void
  ) => React.ReactNode;
  initialItemsOpen?: boolean;
};

export type AccordionItemProps = {
  info: ExperienceInfo;
  onClick: (index: number) => void;
};

export const Tag = ({ tag }: { tag: string }) => (
  <span className='flex items-center rounded-3xl bg-[var(--forest)] text-white px-3 py-1'>
    <small>{tag}</small>
  </span>
);

export const AccordioItemDetails = ({ info }: { info: ExperienceInfo }) => (
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
      {info.tags.length > 0 && (
        <div className='flex flex-wrap mt-2 gap-2'>
          {info.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export const AccordionItem = ({ info, onClick }: AccordionItemProps) => {
  const { isOpen, index } = useAccordion();

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
        {isOpen && <AccordioItemDetails info={info} />}
      </section>
    </div>
  );
};

export const Accordion = ({
  items,
  renderItem,
  initialItemsOpen,
}: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    initialItemsOpen ? new Set(items.map((_, index) => index)) : new Set()
  );

  const onClickHandler = (idx: number) => {
    setOpenIndexes((prev) => {
      const newState = new Set(prev);
      newState.has(idx) ? newState.delete(idx) : newState.add(idx);
      return newState;
    });
  };
  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
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
