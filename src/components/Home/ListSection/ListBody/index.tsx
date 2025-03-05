import ItemCard from '@src/components/Home/ListSection/ListBody/ItemCard';
import { listValues } from '@src/lib/defaultConstants';
import React from 'react';

const ListBody = () => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-start lg:w-[calc(100%+.625rem+.625rem)]">
        {listValues
          .sort((a: any, b: any) => {
            return b.availiblity - a.availiblity;
          })
          .map((item: any, ind: number) => (
            <ItemCard key={ind} values={item} />
          ))}
      </div>
    </>
  );
};

export default ListBody;
