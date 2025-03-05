import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';

interface RegionDropdownProps {
  listItems: any;
}

const RegionDropdown = (props: RegionDropdownProps) => {
  const { listItems } = props;
  const [selected, setSelected] = useState(null);
  const [, setQuery] = useState('');

  console.log('selected', selected);

  return (
    <div className="relative flex w-full items-center">
      <Combobox
        value={selected}
        onChange={(value: any) => setSelected(value)}
        onClose={() => setQuery('')}
      >
        <ComboboxButton className="relative flex w-full items-center text-nx-gray-100">
          <ComboboxInput
            readOnly
            aria-label="Assignee"
            displayValue={(val: any) => val?.name}
            onChange={(event) => setQuery(event.target.value)}
            className={`relative flex w-full cursor-pointer items-center rounded-lg border px-4 py-2.5 text-nx-gray-100 focus:outline-none data-[hover]:border-nx-gray-100 ${
              selected
                ? 'border-nx-black-100 bg-nx-black-100'
                : 'border-nx-black-200 bg-nx-black-200'
            }`}
          />
          {selected === null && (
            <ComboboxLabel
              htmlFor="age_range"
              className={`absolute left-4 inline-flex transform items-center justify-start space-x-1 duration-300 data-[open]:top-3 data-[open]:z-9 data-[open]:origin-[0] data-[open]:-translate-y-6 data-[open]:scale-75 ${
                selected ? 'top-3 z-9 origin-[0] -translate-y-6 scale-75' : ''
              }`}
            >
              <svg
                className="h-6 w-6"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="RoomOutlinedIcon"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
              </svg>
              <span>Region</span>
            </ComboboxLabel>
          )}
          <ComboboxLabel className="absolute right-2 transition-transform duration-75 data-[open]:rotate-180">
            <ChevronDownIcon className="w-5" />
          </ComboboxLabel>
        </ComboboxButton>
        {selected !== null && (
          <a
            onClick={() => {
              setSelected(null);
              setQuery('');
            }}
            className="absolute right-4 z-9 mr-5 flex cursor-pointer text-nx-gray-100"
          >
            <svg
              className="h-6 w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ClearIcon"
              fill="currentColor"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </a>
        )}
        <ComboboxOptions
          anchor="bottom"
          transition
          className="w-[var(--input-width)] rounded-md bg-black py-2 text-nx-gray-100 shadow-md transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] empty:invisible data-[leave]:data-[closed]:opacity-0"
        >
          {listItems.map((item: any) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="cursor-pointer px-4 py-1.5 data-[focus]:text-nx-white-100"
            >
              {item.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default RegionDropdown;
