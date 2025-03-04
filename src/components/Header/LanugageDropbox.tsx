import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { languages } from '@src/lib/defaultConstants';
import Image from 'next/image';
import React, { useState } from 'react';

const LanguageDropbox = () => {
  const [isCurrent, setCurrent] = useState(languages[0]);

  return (
    <Menu as="div" className="relative flex justify-center text-left">
      <MenuButton className="flex items-center rounded-lg border border-nx-border-100 px-3 py-2.5 text-center font-medium text-white focus:outline-none">
        <div className="flex items-center justify-start space-x-1">
          <Image src={isCurrent.flag} alt={isCurrent.id} width={20} height={12} />
          <p>{isCurrent.id.toUpperCase()}</p>
        </div>
        <svg
          className="ms-1 h-2 w-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </MenuButton>

      <MenuItems
        transition
        className="data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute top-full z-10 divide-y divide-gray-100 overflow-hidden rounded-sm bg-white shadow-md dark:bg-gray-700 lg:min-w-[120px]"
      >
        <div className="bg-black py-2 text-nx-white-100">
          {languages.map((item: any, index: number) => (
            <MenuItem key={index}>
              <a
                onClick={() => setCurrent(item)}
                className={`flex cursor-pointer items-center justify-start space-x-2 px-4 py-2 ${
                  isCurrent.id === item.id ? 'bg-nx-nav-color-200 hover:bg-nx-nav-color-300' : ''
                }`}
              >
                <Image src={item.flag} alt={item.id} width={20} height={12} />
                <span>{item.name}</span>
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageDropbox;
