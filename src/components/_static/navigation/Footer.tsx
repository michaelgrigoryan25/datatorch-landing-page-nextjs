import { nanoid } from "nanoid";
import Link from "next/link";
import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { SiDiscord } from "react-icons/si";

type Link = {
  name: string;
  href: string;
  blank?: boolean;
};

const links: Link[] = [
  {
    blank: true,
    name: "Documentation",
    href: "https://docs.datatorch.io/",
  },
  {
    blank: true,
    name: "Privacy & Terms",
    href: "https://datatorch.io/terms",
  },
  {
    blank: true,
    name: "Contact Us",
    href: "https://datatorch.io/contact",
  },
];

type Social = {
  href: string;
  name: string;
  icon: IconType;
};

const socials: Social[] = [
  { name: "Discord", icon: SiDiscord, href: "https://discord.gg/egrHYYHy2e" },
  {
    name: "GitHub",
    icon: GoMarkGithub,
    href: "https://github.com/datatorch",
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    href: "https://www.linkedin.com/company/datatorchio/",
  },
];

export default function _Footer() {
  return (
    <footer>
      <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex gap-12 justify-center items-center">
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

        <nav className="mt-8" aria-labelledby="footer-navigation">
          <h2 className="sr-only" id="footer-navigation">
            Footer navigation
          </h2>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link) => (
              <li key={nanoid()}>
                <a
                  target={link.blank ? "_blank" : "_self"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex justify-center align-middle items-center mt-8 gap-6 md:gap-8">
          {socials.map((social) => (
            <li key={nanoid()}>
              <a
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
