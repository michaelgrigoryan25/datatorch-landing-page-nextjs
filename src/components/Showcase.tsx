type Props = {
  short: string;
  title: string;
  content: JSX.Element;
  more?: JSX.Element;
  reversed?: boolean;
};

export default function Showcase({
  title,
  content,
  short,
  reversed = false,
  more,
}: Props) {
  return (
    <section className="px-8 lg:px-24 pb-4">
      <div
        className={[
          !reversed
            ? `flex flex-col md:flex-row`
            : "flex flex-col md:flex-row-reverse",
          `gap-10`,
        ].join(" ")}>
        <div className="space-y-2 w-full">
          <span className="text-orange-500 text-xl font-semibold">{short}</span>

          <h1
            style={{ fontFamily: "poppins" }}
            className="text-2xl font-semibold">
            {title}
          </h1>

          {content}
        </div>

        {!!more && <div className="flex md:max-w-sm lg:max-w-lg justify-end items-center">{more}</div>}
      </div>
    </section>
  );
}
