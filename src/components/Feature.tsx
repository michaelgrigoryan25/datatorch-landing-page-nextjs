type Props = {
  name: string;
  info: string;
};

export default function Feature({ name, info }: Props) {
  return (
    <div className="select-none hover:shadow-lg transition-all duration-200 max-w-3xl rounded-lg p-4 h-full bg-orange-100">
      <h2 className="font-semibold text-xl">{name}</h2>
      <p>{info}</p>
    </div>
  );
}
