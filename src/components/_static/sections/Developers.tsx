import { Fragment } from "react";
import Showcase from "~/components/Showcase";

export default function _Developers() {
  return (
    <Showcase
      reversed
      short="Developer Centric APIs and SDKs"
      title="The clean and simple UI is really just for the annotators."
      content={
        <Fragment>
          <p>
            Beneath the surface, DataTorch is an extensible developer tool that
            has been refined over multiple iterations to streamline our users
            with total control over how and when their data is handled.
          </p>

          <p>
            DataTorch provides engineers a robust APIs and SDKs, giving a
            complete control over every aspect of their data, helping with
            automating deployments, creating AI-assisted annotation tools, and
            more with DataTorch Agents and Pipelines.
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
  );
}
