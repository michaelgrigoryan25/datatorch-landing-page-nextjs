type Props = {
  readonly name: string;
  readonly text: string;
  readonly image: string;
  readonly href: string;
  readonly position: string;
};

export default function Testimonial({
  name,
  text,
  position,
  image,
  href,
}: Props) {
  return (
    <div className="max-w-screen-xl px-4 mx-auto text-center">
      <figure className="max-w-screen-md mx-auto">
        <blockquote>
          <p
            style={{ fontFamily: "poppins" }}
            className="text-lg md:text-2xl font-medium text-gray-900">
            "<span className="italic">{text}</span>"
          </p>
        </blockquote>

        <hr className="max-w-sm mx-auto my-4" />

        <figcaption className="flex items-center justify-center space-x-3">
          <div className="flex align-middle flex-col md:flex-row items-center divide-x-2 gap-2 sm:gap-4 divide-gray-500">
            <span className="font-medium text-gray-900">{name}</span>
            <span className="hidden md:inline-block">•</span>
            <span style={{ fontFamily: "poppins" }} className="text-sm">
              {position}
            </span>
            <span className="hidden md:inline-block">•</span>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              <img width="100" src={image} alt="Testimonial company logo." />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
