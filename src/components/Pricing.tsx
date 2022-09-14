import { nanoid } from "nanoid";
import { Fragment, useState } from "react";

type Feature = {
  readonly name: string;
};

type Pricing = {
  name: string;
  info: string;
  price: {
    monthly: string;
    annually?: string;
  };
  popular?: boolean;
  includes?: string;
  button: {
    href: string;
    content: string;
    textColor?: string;
    customBgStyle?: string; // background color + hover
  };
  className?: string;
  features: Feature[];
};

function Card({
  pricing,
  _displayYearlyState,
}: {
  pricing: Pricing;
  _displayYearlyState: boolean;
}) {
  return (
    <div
      className={`${
        pricing.className ?? ""
      } border-solid border border-gray-200 p-4 flex flex-col justify-between w-full max-w-sm bg-white rounded-lg shadow-lg sm:p-8`}>
      <div>
        <h5
          style={{ fontFamily: "poppins" }}
          className="mb-2 text-xl font-medium text-black items-center">
          {pricing.name}{" "}
          {pricing.popular && (
            <span className="bg-orange-500 font-light text-white text-xs p-1 rounded">
              POPULAR
            </span>
          )}
        </h5>

        <p className="mb-4 font-medium text-gray-500">{pricing.info}</p>

        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {!_displayYearlyState
              ? pricing.price.monthly
              : pricing.price.annually || pricing.price.monthly}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
        </div>

        <div className="mt-4 font-semibold text-gray-600">
          {pricing.includes && (
            <p className="text-md">
              Includes everything in{" "}
              <span className="font-bold text-black">{pricing.includes}</span>,
              plus...
            </p>
          )}
        </div>

        <ul role="list" className="mb-7 mt-5 space-y-5">
          {pricing.features.map((feature) => (
            <li key={nanoid()} className={"flex space-x-3"}>
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-base font-normal leading-tight text-gray-500">
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={pricing.button.href}
        className={[
          pricing.button.customBgStyle
            ? pricing.button.customBgStyle
            : `bg-orange-600 hover:bg-orange-700`,
          `${
            pricing.button.textColor || "text-white"
          } bottom-0 transition-all duration-150 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`,
        ].join(" ")}>
        {pricing.button.content}
      </a>
    </div>
  );
}

interface Props {
  readonly prices: Pricing[];
  readonly className?: string;
}

export default function Pricing({ prices, className = "" }: Props) {
  prices = prices.sort((a, b) => Number(a.price) - Number(b.price));

  const [displayYearly, setDisplayYearly] = useState(true);

  return (
    <Fragment>
      <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2
            style={{ fontFamily: "poppins" }}
            className="mb-4 text-2xl md:text-3xl tracking-tight font-bold text-gray-900">
            DataTorch is made for teams like yours.
          </h2>

          <p
            style={{ fontFamily: "poppins" }}
            className="mb-5 text-gray-500 text-sm md:text-md">
            Here at DataTorch we focus on bringing advanced state-of-the-art
            annotation tools to AI/ML teams. Choose the plan that fits your
            needs, and start working on your next project within minutes!
          </p>

          <div className="flex items-center justify-center flex-col sm:flex-row gap-3">
            <button
              onClick={() => !displayYearly && setDisplayYearly(true)}
              className={[
                "p-2 font-semibold rounded-lg border-solid border-2 border-transparent transition-all",
                displayYearly
                  ? "bg-orange-500 text-white"
                  : "text-black border-orange-300",
              ].join(" ")}>
              Yearly Billing (Save 17%!)
            </button>

            <button
              onClick={() => displayYearly && setDisplayYearly(false)}
              className={[
                "p-2 font-semibold border-solid border-2 border-transparent rounded-lg transition-all",
                displayYearly
                  ? "text-black border-orange-300"
                  : "bg-orange-500 text-white",
              ].join(" ")}>
              Monthly Billing
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center h-full justify-center">
          <div
            className={`items-stretch align-middle flex-col xl:flex-row flex gap-7 ${className}`}>
            {prices.map((p) => (
              <Card
                _displayYearlyState={displayYearly}
                key={nanoid()}
                pricing={p}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
