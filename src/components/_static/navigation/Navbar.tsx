import { nanoid } from "nanoid";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  MobilePopover,
  WebPopover,
} from "~/components/_static/navigation/Popover";

type Link = {
  name: string;
  href: string;
  preventDefault?: boolean;
};

const links: Link[] = [
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#pricing",
    preventDefault: true,
  },
  {
    name: "Contact",
    href: "https://datatorch.io/contact",
  },
];

const popover = {
  content: [
    {
      href: "https://datatorch.io/features/annotator",
      name: "Annotator",
      info: "An annotation experience refined by hundreds of hours of feedback and iteration.",
      icon: (
        <Icon
          inline={true}
          fontSize="2.4rem"
          className="text-orange-400"
          icon="lucide:mouse-pointer-click"
        />
      ),
    },
    {
      href: "https://datatorch.io/features/datasets",
      name: "Datasets",
      icon: (
        <Icon
          inline={true}
          fontSize="2.4rem"
          icon="codicon:files"
          className="text-orange-400"
        />
      ),

      info: "Create secure, powerful, and scalable datasets with streamlined data collection and organization.",
    },
    {
      href: "https://datatorch.io/features/pipelines",
      name: "Pipelines",
      icon: (
        <Icon
          inline={true}
          icon="carbon:workflow-automation"
          fontSize="2.4rem"
          className="text-orange-400"
        />
      ),
      info: "Automate any part of your workflow including training, processing, and deployment.",
    },
    {
      href: "https://datatorch.io/features/organizations",
      name: "Organizations",
      icon: (
        <Icon
          icon="codicon:organization"
          fontSize="2.4rem"
          className="text-orange-400"
          inline={true}
        />
      ),
      info: "Give your ML teams a home in the cloud, discuss machine learning, track and manage multiple projects.",
    },
  ],

  more: (
    <a
      rel="noreferrer noopener"
      href="https://docs.datatorch.io/"
      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
      <span className="flex items-center">
        <span className="text-sm font-medium text-gray-900">Documentation</span>
      </span>

      <span className="block text-sm text-gray-500">
        Start integrating products and tools
      </span>
    </a>
  ),
};

export default function _Navbar() {
  return (
    <nav className="shadow-md z-10 top-0 py-4 px-4 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <Link href="/">
            <a className="flex items-center gap-1">
              <img
                className="w-8 lg:w-9"
                alt="DataTorch Logo Transparent"
                src="/images/datatorch-logo-transparent.png"
              />

              <span
                style={{ fontFamily: "ubuntu" }}
                className="font-semibold text-lg md:text-2xl">
                DataTorch
              </span>
            </a>
          </Link>
        </div>

        <div className="inline-block lg:hidden">
          <MobilePopover content={popover.content} more={popover.more} />
        </div>

        <div className="hidden lg:inline-block">
          <div
            className="flex items-center gap-9"
            style={{ fontFamily: "poppins" }}>
            <WebPopover content={popover.content} more={popover.more} />

            {links.map((link) => (
              <Link key={nanoid()} href={link.href}>
                <a
                  onClick={(e) => {
                    if (link.preventDefault) {
                      e.preventDefault();
                      const el = window.document.getElementById(
                        link.href.replace("#", "")
                      );

                      el?.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="hover:text-gray-500 transition-all duration-150">
                  {link.name}
                </a>
              </Link>
            ))}

            <div>
              <Link rel="noreferrer noopener" href="https://datatorch.io/login">
                <a
                  className="inline-block text-white px-3 py-2 bg-orange-600 text-xs sm:text-sm rounded-full transition-all hover:bg-transparent hover:text-orange-400 hover:border-orange-300 border-2 border-transparent hover:outline-dotted"
                  style={{ fontFamily: "poppins" }}>
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
