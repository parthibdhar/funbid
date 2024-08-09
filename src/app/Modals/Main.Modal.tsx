import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";

type MainModalProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
};

const MainModal: React.FC<MainModalProps> = ({ modalOpen, setModalOpen, children }) => {
  const cancelButtonRef = useRef<HTMLElement | null>(null);
  console.log("modalOpen" + "children")
  console.log(modalOpen, children)

  return (
    <>
      <Transition show={modalOpen} as={Fragment} appear>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center  bg-inputBg bg-opacity-50"
          initialFocus={cancelButtonRef}
          onClose={() => setModalOpen(false)}
        >
          <div className="fixed inset-0 bg-black opacity-60" />
          <div className="px-4 min-h-screen">
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition
              as={Fragment}
              show={modalOpen}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              
            >
              <div className="inline-block w-full h-fit max-w-md p-6 my-8 overflow-hidden align-middle transition-all bg-inputBg transform  shadow-xl rounded-lg">
                {children}
              </div>
            </Transition>
            <div className="absolute right-5 top-5">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="justify-center w-10 h-10 flex-colo text-base font-medium text-white bg-subMain rounded-full hover:bg-white hover:text-subMain transitions"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MainModal;
