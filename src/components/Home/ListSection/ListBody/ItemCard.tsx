import React from 'react';

interface ItemCardProps {
  values: any;
}

const ItemCard = (props: ItemCardProps) => {
  const { values } = props;
  return (
    <div className="m-2 box-border flex items-start justify-start xs:w-full md:w-[calc(100%/3.23)] lg:w-[calc(100%/4.23)]">
      <a href="" className="flex w-full flex-col items-center justify-start">
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gray-400 p-4 xs:min-h-[320px] lg:min-h-[432px]">
          <div className="absolute left-3 top-3 z-9">
            {values.availiblity && (
              <div className="relative ml-5 flex items-center justify-start">
                <img
                  src="/images/fire-ani.gif"
                  alt="highly available"
                  className="absolute left-0 w-[42px] -translate-x-6 -translate-y-1"
                />
                <p className="flex items-center justify-center rounded-md bg-gradient-hot py-3 pl-8 pr-6 text-sm text-white shadow-nx-hot-shadow">
                  Highly available
                </p>
              </div>
            )}
          </div>
          <span className="absolute right-3 top-3 z-9 text-white">
            <svg
              className="h-6 w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FavoriteBorderIcon"
              fill="currentColor"
            >
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path>
            </svg>
          </span>
        </div>
        <div className="flex w-full flex-col items-start justify-start px-2 py-4">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-1 items-center justify-start space-x-2">
              <p className="max-w-[85px] truncate text-ellipsis text-lg font-semibold text-white">
                {values.name}
              </p>
              {values.online && (
                <p className="flex h-3 w-3 items-center justify-center overflow-hidden rounded-full border border-nx-green-200 bg-nx-green-200">
                  <span className="h-2 w-2 overflow-hidden rounded-full bg-nx-green-100"></span>
                </p>
              )}
              {values.country && values.country !== '' && (
                <p>
                  <img
                    src={`/svg/flags/${values.country}-flag.svg`}
                    alt={values.country}
                    className="w-4"
                  />
                </p>
              )}
            </div>
            <div className="flex items-center justify-center space-x-2">
              <img src="/images/dollar-img.jpg" alt="credits" className="w-5" />
              <span className="text-xs font-normal text-white">{values.credits} credits/min</span>
            </div>
          </div>
          <div className="flex w-full items-stretch space-x-2">
            <p className="text-sm font-medium text-nx-gray-100">26</p>
            <div className="w-[1px] self-stretch bg-nx-gray-100"></div>
            <p className="max-w-[90px] truncate text-ellipsis text-sm font-medium text-nx-gray-100">
              {values.languages}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemCard;
