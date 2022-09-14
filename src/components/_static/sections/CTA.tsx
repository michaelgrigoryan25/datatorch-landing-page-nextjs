import { nanoid } from "nanoid";

type Link = {
  name: string;
  href: string;
  blank?: boolean;
  color?: string;
};

const links: Link[] = [
  {
    name: "Sign Up",
    href: "https://datatorch.io/register",
  },
  {
    blank: true,
    name: "Contact Sales",
    color: "bg-orange-50",
    href: "https://datatorch.io/contact",
  },
];

export default function _CTA() {
  return (
    <section
      className="bg-orange-600 mx-auto px-12 h-full py-24 flex items-center"
      style={{ fontFamily: "poppins" }}>
      <div className="mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl text-center md:text-3xl text-white">
            Ready to start annotating?
          </h1>

          <p className="text-sm md:text-md text-center text-gray-50">
            Create an account, and start creating COCO datasets with ease.
          </p>
        </div>

        <div className="mx-auto items-center gap-3 justify-center flex flex-col md:flex-row">
          {links.map((link) => (
            <a
              key={nanoid()}
              href={link.href}
              target={link.blank ? "_blank" : "_self"}
              className={`px-8 rounded-full py-2 ${
                link.color || "bg-orange-200"
              }`}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
