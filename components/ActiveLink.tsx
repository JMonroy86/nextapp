import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#fff",
  textDecoration: "underline",
};

interface Props{
  text: string;
  href:string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
