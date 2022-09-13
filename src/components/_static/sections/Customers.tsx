import Customers from "~/components/Customers";

export default function _Customers() {
  return (
    <section>
      <Customers
        customers={[
          { img: "https://datatorch.io/images/companies//guelph.png" },
          { img: "https://datatorch.io/images/companies//hiphen.png" },
          { img: "https://datatorch.io/images/companies//meditate-ai.png" },
          { img: "https://datatorch.io/images/companies//pearlii.png" },
          {
            img: "https://static.wixstatic.com/media/42146e_1567586067ee4f6084c1a8953e3c8f01~mv2.png",
          },
          { img: "https://datatorch.io/images/companies//jhu.png" },
          { img: "https://datatorch.io/images/companies//infarm.png" },
          { img: "https://datatorch.io/images/companies/dentuit.png" },
        ]}
      />
    </section>
  );
}
