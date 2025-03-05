import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MenuIcon } from '@public/svg/icons';
import FreeCallButton from '@src/components/Header/FreeCallButton';
import LoginButton from '@src/components/Header/LoginButton';
import React from 'react';

const MobileMenu = () => {
  return (
    <div className="relative gap-8 xs:flex lg:hidden">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <MenuIcon />
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="z-99 divide-y divide-nx-border-100 rounded-xl bg-black transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 xs:min-w-[300px] md:min-w-[400px]"
        >
          <div className="flex w-full items-center justify-center py-2">
            <LoginButton />
          </div>
          <div className="flex w-full items-center justify-center py-2">
            <FreeCallButton />
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default MobileMenu;
