import { Fragment } from "react";
import Showcase from "~/components/Showcase";

export default function _Scaling() {
  return (
    <Showcase
      short="Unlimited Scale"
      title="Empowering machine learning for teams of any size."
      content={
        <Fragment>
          <p>
            Whether you are first getting started with AI or a veteran machine
            learning practitioner, DataTorch makes building datasets as simple
            as it gets, while being as powerful as you need.
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
  );
}
