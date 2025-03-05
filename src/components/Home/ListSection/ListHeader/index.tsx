import AgeRange from '@src/components/Home/ListSection/ListHeader/AgeRange';
import CreditOptions from '@src/components/Home/ListSection/ListHeader/CreditOptions';
import GenderSelection from '@src/components/Home/ListSection/ListHeader/GenderSelection';
import RegionDropdown from '@src/components/Home/ListSection/ListHeader/RegionDropdown';
import { ageRange, credits, genders, regions } from '@src/lib/defaultConstants';
import React from 'react';

const ListHeader = () => {
  return (
    <div className="flex w-full items-center justify-start gap-5 xs:flex-wrap xs:items-stretch lg:flex-nowrap">
      <button className="flex gap-3 rounded-md bg-nx-black-200 px-4 py-2.5 hover:bg-nx-hover-100">
        <p className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-nx-green-200 bg-nx-green-200">
          <span className="h-4 w-4 overflow-hidden rounded-full bg-nx-green-100"></span>
        </p>
        <p className="font-light text-nx-gray-100">Currenlty Online</p>
      </button>

      <div className="flex xs:flex-1 lg:w-96">
        <RegionDropdown listItems={regions} />
      </div>

      <div className="flex items-start justify-start space-x-5 xs:w-full lg:flex-1">
        <AgeRange listItems={ageRange} />
        <GenderSelection listItems={genders} />
        <CreditOptions listItems={credits} />
      </div>
    </div>
  );
};

export default ListHeader;
