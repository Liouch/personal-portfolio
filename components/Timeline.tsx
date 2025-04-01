import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import FallbackIcon from '../public/favicon-16x16.png';
import { Bookmark } from '../types/types';

export type TimelineProps = {
  bookmarks: Bookmark[];
  title: string;
};

export type BookmarkItemProps = Bookmark;

const BookmarkItem = ({
  title,
  url,
  createdAt,
  favIconURL,
}: BookmarkItemProps) => {
  const formmatedDate = new Date(createdAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className='p-4 border-solid border-[2px] hover:border-2 border-[var(--color-gray-light)] hover:border-[var(--marine)] bg-white dark:bg-slate-900 rounded-lg shadow-sm mb-3'>
      <p className='text-sm'>{formmatedDate}</p>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='block text-lg font-semibold hover:underline w-fit'
      >
        <div className='flex items-center gap-2 mb-2 w-fit'>
          <Image
            src={favIconURL ?? FallbackIcon}
            alt='Bookmark Icon'
            width={16}
            height={16}
            unoptimized
            className='max-h-[16px] max-w-[16px]'
          />
          <div className='flex items-center gap-2'>
            <span>{title}</span>
            <FiExternalLink className='inline-block' />
          </div>
        </div>
      </a>
    </div>
  );
};

const Timeline = ({ bookmarks, title }: TimelineProps) => {
  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <h3 className='text-center'>{title}</h3>
      <div className='flex flex-col items-center w-full max-w-2xl mx-auto max-h-[35vh] overflow-y-auto p-4 scrollbar-hide fading-box'>
        <div className='border-l-2 border-gray-300 dark:border-gray-700'>
          {bookmarks.map((bookmark, index) => (
            <div key={index} className='relative mb-8 ml-6'>
              {/* Timeline Dot */}
              <div className='absolute w-4 h-4 bg-[var(--marine)] dark:bg-[var(--feather)] rounded-full -left-8 top-8 border-2 border-white dark:border-gray-900'></div>

              {/* Bookmark Content */}
              <BookmarkItem
                title={bookmark.title}
                url={bookmark.url}
                createdAt={bookmark.createdAt}
                favIconURL={bookmark.favIconURL}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
