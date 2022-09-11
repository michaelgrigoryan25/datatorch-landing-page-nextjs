import Highlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  children: any;
  lang: string;
};

export default function Code({ children, lang, ...rest }: Props) {
  return (
    <Highlighter
      customStyle={{
        padding: "1em",
        borderRadius: "1em",
      }}
      CodeTag={"div"}
      useInlineStyles
      language={lang}
      style={atomOneDark}>
      {children}
    </Highlighter>
  );
}
