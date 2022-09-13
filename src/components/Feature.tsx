type Props = {
  readonly name: string;
  readonly info: string;
  readonly icon: JSX.Element;
};

export default function Feature({ name, info, icon }: Props) {
  return (
    <div className="items-center max-w-xl md:max-w-3xl gap-4 rounded-lg p-2 md:p-4 flex bg-orange-100">
      <div className="pl-2">{icon}</div>
      <div className="w-full">
        <h2 className="font-semibold text-md md:text-xl">{name}</h2>
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
}
