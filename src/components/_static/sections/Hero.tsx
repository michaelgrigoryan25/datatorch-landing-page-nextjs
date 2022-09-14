export default function _Hero() {
  return (
    <div className="__with_pattern px-8 py-20 rounded-lg">
      <section className="px-2 sm:px-12 md:px-24 py-8 md:py-16">
        <div className="space-y-1 max-w-4xl w-full">
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
        </div>
      </section>
    </div>
  );
}
