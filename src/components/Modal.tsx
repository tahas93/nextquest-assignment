import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface ModalProps {
  closeModal: (x?: any) => void;
  setIsOpen?: () => void;
  isOpen: boolean;
  ModalTitle: React.JSX.Element | string;
  content: React.JSX.Element | string;
  modalClass?: string;
  titleClass?: string;
  contentClass?: string;
}

const Modal = (props: ModalProps) => {
  const { closeModal, isOpen, ModalTitle, content, modalClass, titleClass, contentClass } = props;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-999" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#2E3646] bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`flex w-full transform flex-wrap items-start justify-start overflow-hidden overflow-y-auto rounded-xl bg-nx-black-300 text-nx-gray-100 shadow-xl transition-all lg:min-w-[840px] ${modalClass}`}
              >
                <Dialog.Title as="h3" className={`w-full ${titleClass}`}>
                  {ModalTitle}
                </Dialog.Title>
                <div className={contentClass}>{content}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
