import { Fragment } from "react";
import { NextSeo } from "next-seo";
import Navbar from "~/components/_static/navigation/Navbar";
import Footer from "~/components/_static/navigation/Footer";

type Props = {
  readonly children: JSX.Element;
};

export default function Landing({ children }: Props) {
  return (
    <Fragment>
      <NextSeo
        openGraph={{
          images: [
            {
              url: "https://datatorch.io/images/features/annotator/annotator-hero.jpg",
              alt: "https://ph-files.imgix.net/e6a6589e-23be-48c5-835f-1e61359c62e5.png?auto=format&fit=crop",
            },
          ],
        }}
        title="DataTorch | A collaborative COCO annotation platform for AI/ML teams"
        description="DataTorch provides a platform and tools for building collaborative machine learning projects. Build, and deploy models with all the tools in one place. Share and collaborate with other machine learning practitioners."
      />

      <Fragment>
        <Navbar />
        {children}
        <Footer />
      </Fragment>
    </Fragment>
  );
}
