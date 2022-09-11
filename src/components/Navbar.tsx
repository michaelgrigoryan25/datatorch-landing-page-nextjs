import Link from "next/link";
import Popover from "./Popover";

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <div className="shadow-md z-10 backdrop-blur-xl sticky top-0 py-4 px-4 md:px-12 lg:px-24 border">
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

        <div className="hidden lg:block">
          <div className="flex gap-9" style={{ fontFamily: "poppins" }}>
            <Popover
              content={[
                {
                  name: "Annotator",
                  info: "An annotation experience refined by hundreds of hours of feedback and iteration.",
                  icon: (
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
                      <path
                        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                        stroke="#FB923C"
                        strokeWidth="2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                        stroke="#FDBA74"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  name: "Datasets",
                  info: "Create secure, powerful, and scalable datasets with streamlined data collection and organization.",
                  icon: <div></div>,
                  href: "#",
                },
              ]}
              more={[
                <a
                  rel="noreferrer noopener"
                  href="https://docs.datatorch.io/"
                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Documentation
                    </span>
                  </span>
                  <span className="block text-sm text-gray-500">
                    Start integrating products and tools
                  </span>
                </a>,
              ]}
            />

            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="hover:text-gray-500 transition-all duration-150">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="">
          <Link href="/login">
            <a
              className="inline-block text-white px-3 py-2 bg-orange-400 text-xs sm:text-sm rounded-full transition-all hover:bg-transparent hover:text-orange-400 hover:border-orange-300 border-2 border-transparent hover:outline-dotted"
              style={{ fontFamily: "poppins" }}>
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
