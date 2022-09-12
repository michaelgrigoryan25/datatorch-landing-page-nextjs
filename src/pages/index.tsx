import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Fragment } from "react";
import { GrCycle } from "react-icons/gr";
import { HiOutlineDatabase } from "react-icons/hi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import Companies from "~/components/Customers";
import Feature from "~/components/Feature";
import Showcase from "~/components/Showcase";
import Testimonial from "~/components/Testimonial";

const Home: NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="DataTorch - The collaborative COCO annotation platform for AI/ML"
        description="DataTorch provides a platform and tools for building collaborative machine learning projects. Build, and deploy models with all the tools in one place. Share and collaborate with other machine learning practitioners."
      />

      <div className="space-y-16">
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
                  DataTorch is a collaborative data annotation platform for
                  building datasets at any scale and exporting them in COCO
                  format.
                </p>
              </div>

              <div>
                <Link href="#">
                  <a
                    className="text-orange-600 text-lg md:text-2xl"
                    style={{ fontFamily: "poppins" }}>
                    Learn More&nbsp;&rarr;
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section>
          <Companies />
        </section>

        <Showcase
          short="Unlimited Scale"
          title="Empowering machine learning for teams of any size."
          content={
            <Fragment>
              <p>
                Whether you are first getting started with AI or a veteran
                machine learning practitioner, DataTorch makes building datasets
                as simple as it gets, while being as powerful as you need.
              </p>

              <p>
                Our software is designed to scale from a single user to massive
                multi-team companies. That's why DataTorch has processed over{" "}
                <span className="font-bold italic text-orange-500">
                  one million annotations
                </span>{" "}
                across people, startups, and enterprises all over the world.
              </p>
            </Fragment>
          }
          more={
            <img
              className="rounded-md shadow-2xl"
              src="/images/datatorch-annotator-chess-demo.jpg"
              alt="DataTorch Annotator Chess Demo"
            />
          }
        />

        <Showcase
          reversed
          short="Developer Centric APIs and SDKs"
          title="The clean and simple UI is really just for the annotators."
          content={
            <Fragment>
              <p>
                Beneath the surface, DataTorch is an extensible developer tool
                that has been refined over multiple iterations to streamline our
                users with total control over how and when their data is
                handled.
              </p>
            </Fragment>
          }
          more={
            <img
              className="rounded-md shadow-2xl"
              src="/images/datatorch-developer-documentation.png"
              alt="DataTorch Annotator Chess Demo"
            />
          }
        />

        <section className="px-2 md:px-24 py-12">
          <Testimonial
            name="Ruoding Tian"
            href="https://www.pearlii.com/"
            position="Machine Learning Engineer"
            image="https://datatorch.io/images/companies//pearlii.png"
            text="Datatorch is an elegant and highly engineered solution. The software has delivered our annotation team a smooth and wonderful annotating experience."
          />
        </section>

        <section className="px-2 md:px-12 lg:px-24">
          <h1
            style={{ fontFamily: "poppins" }}
            className="text-center pb-4 font-semibold text-2xl md:text-3xl lg:text-4xl">
            One project.{" "}
            <span className="text-orange-500">Infinite possibilities.</span>
          </h1>

          <div className="mt-4 space-y-4 items-center flex flex-col">
            <Feature
              name="Team Annotations"
              icon={<BiGitMerge size={"32px"} />}
              info="Add up to 2 additional collaborators to your private project at no cost. Use DataTorch for your own individual private use, free forever."
            />

            <Feature
              name="Storage Providers"
              icon={<AiOutlineCloudServer size={"32px"} />}
              info="Quickly populate your datasets with our simple drag-and-drop interface. Directly access files from any AWS, Google, or Azure cloud storage."
            />

            <Feature
              name="Workflow Integrations"
              icon={<GrCycle size={"32px"} />}
              info="Integrate DataTorch Agents into your infrastructure, and utilize DataTorch CLI, Python SDK, and GraphQL APIs for complete control."
            />

            <Feature
              name="Comprehensive Datasets"
              icon={<HiOutlineDatabase size={"32px"} />}
              info="Create datasets across multiple file storages without needing to move files. Diagram annotation classes in advance, or as-you-go in DataTorch COCO Annotator."
            />
          </div>
        </section>

        <section className="px-2 md:px-24 py-12">
          <Testimonial
            name="John Winder"
            href="https://dentuit.ai/"
            position="Chief Technology Officer"
            image="https://datatorch.io/images/companies/dentuit.png"
            text="We have managed to have our data annotated well, quickly. This service has allowed us to iterate our internal process more efficiently, increasing the quality of our R&D."
          />
        </section>

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
      </div>
    </Fragment>
  );
};

export default Home;
