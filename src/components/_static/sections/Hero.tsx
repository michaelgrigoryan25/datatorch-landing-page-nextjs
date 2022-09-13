import Link from "next/link";
import { motion } from "framer-motion";

export default function _Hero() {
  return (
    <div className="__with_pattern px-8 py-20 rounded-lg">
      <section className="px-2 sm:px-12 md:px-24 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1 max-w-4xl w-full">
          <div className="space-y-2">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "poppins" }}>
              The collaborative COCO annotator platform for{" "}
              <span className="underline decoration-dotted decoration-orange-600">
                everyone
              </span>
              .
            </h1>

            <p
              className="text-gray-600 text-sm md:text-lg"
              style={{ fontFamily: "poppins" }}>
              DataTorch is a collaborative data annotation platform for building
              datasets at any scale and exporting them in COCO format.
            </p>
          </div>

          {/* <div>
            <Link href="#">
              <a
                className="text-orange-600 text-lg md:text-2xl"
                style={{ fontFamily: "poppins" }}>
                Learn More&nbsp;&rarr;
              </a>
            </Link>
          </div> */}
        </motion.div>
      </section>
    </div>
  );
}
