import Pricing from "../../Pricing";

export default function _Pricing() {
  return (
    <section id="pricing" className="px-2 md:px-24">
      <Pricing
        prices={[
          {
            price: {
              monthly: "0",
            },
            name: "Starter",
            button: {
              content: "Get Started",
              href: "https://datatorch.io/register",
            },
            info: "Best option for personal use & for your next project.",
            features: [
              { name: "10GB Encrypted Cloud Storage" },
              { name: "500 minutes/month on DataTorch Agents" },
              { name: "3 Datasets per private project" },
              { name: "DataTorch COCO Annotator" },
              { name: "DataTorch Pipelines" },
              { name: "Access via DataTorch Python SDK, and CLI" },
              { name: "Community support" },
            ],
          },
          {
            price: {
              monthly: "29.99",
              annually: "24.99",
            },
            name: "Professional",
            popular: true,
            button: {
              customBgStyle:
                "bg-transparent text-black border-2 border-dotted font-bold border-orange-400",
              content: "Try for Free",
              href: "https://datatorch.io/register",
            },
            includes: "Starter",
            info: "Best option for personal use & for your next project.",
            features: [
              { name: "1TB Encrypted Cloud Storage" },
              { name: "2000 minutes/month on DataTorch Agents" },
              { name: "Permission management" },
              { name: "Unlimited private projects" },
              { name: "Unlimited project collaborators" },
              { name: "Unlimited self-hosted DataTorch Agents" },
            ],
          },
          {
            price: {
              monthly: "99.99+",
            },
            name: "Enterprise",
            includes: "Professional",
            button: {
              content: "Contact Sales",
              href: "https://datatorch.io/contact",
            },
            info: "The complete AI/ML DataTorch production suite.",
            features: [
              { name: "Unlimited Encrypted Cloud Storage" },
              { name: "50,000 minutes/month on DataTorch Agents" },
              { name: "On-premises Deployments" },
              { name: "Custom Feature Requests" },
              { name: "SAML SSO + Advanced Security" },
              { name: "Priority Support" },
              { name: "99.9% uptime SLA" },
            ],
          },
        ]}
      />
    </section>
  );
}
