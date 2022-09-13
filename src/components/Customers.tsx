import { nanoid } from "nanoid";

type Customer = {
  img: string;
  alt?: string;
};

type Props = {
  readonly customers: Customer[];
};

export default function Customers({ customers }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg flex m-2 overflow-x-auto items-center space-x-6">
        {customers.map((customer) => (
          <img
            key={nanoid()}
            width="120"
            src={customer.img}
            alt={customer.alt}
          />
        ))}
      </div>
    </div>
  );
}
