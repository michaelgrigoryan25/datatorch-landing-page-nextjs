import { AiOutlineCloudServer } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import { GrCycle } from "react-icons/gr";
import { HiOutlineDatabase } from "react-icons/hi";
import Feature from "~/components/Feature";

export default function _Features() {
  return (
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
  );
}
