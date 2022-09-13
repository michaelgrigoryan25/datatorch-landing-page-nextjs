import Testimonial from "~/components/Testimonial";

export default function _DentuitTestimonial() {
  return (
    <section className="px-2 md:px-24 pb-12">
      <Testimonial
        name="John Winder"
        href="https://dentuit.ai/"
        position="Chief Technology Officer"
        image="https://datatorch.io/images/companies/dentuit.png"
        text="We have managed to have our data annotated well, quickly. This service has allowed us to iterate our internal process more efficiently, increasing the quality of our R&D."
      />
    </section>
  );
}
