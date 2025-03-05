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

interface CreditOptionsProps {
  listItems: any;
}

const CreditOptions = (props: CreditOptionsProps) => {
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
        <ComboboxButton
          as="div"
          className={`relative z-0 flex w-full items-center rounded-lg px-4 py-2.5 text-nx-gray-100 data-[hover]:border-nx-gray-100 ${
            selected ? 'border-nx-black-100 bg-nx-black-100' : 'border-nx-black-200 bg-nx-black-200'
          }`}
        >
          <ComboboxInput
            readOnly
            id="age_range"
            aria-label="Assignee"
            displayValue={(val: any) => val?.value}
            onChange={(event) => setQuery(event.target.value)}
            className={`relative flex cursor-pointer items-center border-none bg-transparent text-nx-gray-100 focus:outline-none ${
              selected ? 'w-1/2 truncate text-ellipsis' : 'w-full'
            }`}
          />
          <ComboboxLabel
            htmlFor="age_range"
            className={`absolute left-4 inline-flex transform items-center justify-start space-x-2 duration-300 data-[open]:top-3 data-[open]:z-9 data-[open]:origin-[0] data-[open]:-translate-y-6 data-[open]:scale-75 ${
              selected ? 'top-3 z-9 origin-[0] -translate-y-6 scale-75' : ''
            }`}
          >
            <img src="/images/coin-1.webp" alt="credit-coin" />
            <span>Credits</span>
          </ComboboxLabel>
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
            className="absolute right-2 z-9 mr-5 flex cursor-pointer text-nx-gray-100"
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
          className="w-[var(--button-width)] rounded-md bg-black py-2 text-nx-gray-100 shadow-md transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] empty:invisible data-[leave]:data-[closed]:opacity-0"
        >
          {listItems.map((item: any) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="cursor-pointer px-4 py-1.5 data-[focus]:text-nx-white-100"
            >
              {item.value}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default CreditOptions;
