import { motion } from "framer-motion";

type Props = {
  readonly short: string;
  readonly title: string;
  readonly content: JSX.Element;
  readonly more?: JSX.Element;
  readonly reversed?: boolean;
};

export default function Showcase({
  title,
  content,
  short,
  reversed = false,
  more,
}: Props) {
  return (
    <section className="px-8 sm:px-12 lg:px-24 pb-4">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <div
          className={[
            !reversed
              ? `flex flex-col md:flex-row`
              : "flex flex-col md:flex-row-reverse",
            "gap-10",
          ].join(" ")}>
          <div className="space-y-2 w-full">
            <span className="text-orange-500 text-xl font-semibold">
              {short}
            </span>

            <h1
              style={{ fontFamily: "poppins" }}
              className="text-2xl font-semibold">
              {title}
            </h1>

            {content}
          </div>

          {!!more && (
            <div className="flex justify-center w-full align-middle items-center">
              <div className="max-w-lg">{more}</div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
