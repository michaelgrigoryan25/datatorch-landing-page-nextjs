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
          <button className="bg-orange-200 px-8 rounded-full py-2">
            Sign Up
          </button>

          <button className="bg-orange-50 px-8 rounded-full py-2">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
