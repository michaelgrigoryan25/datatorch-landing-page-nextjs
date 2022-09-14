import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

type Content = {
  name: string;
  info: string;
  href: string;
  icon: JSX.Element;
};

type Props = {
  readonly content: Content[];
  readonly more?: JSX.Element;
};

export function MobilePopover({ content, more }: Props) {
  return (
    <Popover>
      {({ open }) => (
        <Fragment>
          <Popover.Button className="bg-orange-600 rounded-full bg-opacity-90 px-3 py-1.5">
            <Icon
              inline={true}
              className="text-white text-lg ui-open:transform"
              icon={
                !open
                  ? "material-symbols:menu-rounded"
                  : "heroicons:x-mark-20-solid"
              }
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="bg-white absolute left-1/2 border-solid border-b border-b-gray-300 z-10 mt-3 w-full -translate-x-1/2 transform px-4">
              <div className="overflow-hidden rounded-lg">
                <div className="relative grid items-center gap-8 bg-white p-7 lg:grid-cols-2">
                  {content.map((item) => (
                    <a
                      key={nanoid()}
                      href={item.href}
                      rel={"noreferrer noopener"}
                      className="-m-3 hover:bg-gray-100 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <span aria-hidden={true}>{item.icon}</span>
                      </div>

                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {!!more && <div className="bg-gray-50 p-4">{more}</div>}
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  );
}

export function WebPopover({ content, more }: Props) {
  return (
    <Popover>
      {({ open }) => (
        <Fragment>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center focus:outline-black rounded-md text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span>Solutions</span>

            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-500 ui-open:transform ui-open:rotate-180 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {content.map((item) => (
                    <a
                      key={nanoid()}
                      href={item.href}
                      rel={"noreferrer noopener"}
                      className="-m-3 hover:bg-gray-100 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <span aria-hidden={true}>{item.icon}</span>
                      </div>

                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {!!more && <div className="bg-gray-50 p-4">{more}</div>}
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  );
}
