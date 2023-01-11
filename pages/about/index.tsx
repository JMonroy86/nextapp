import { Inter } from "@next/font/google";
import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="description">
      <p>
        Get started by editing&nbsp;
        <code className="code">pages/about.js</code>
      </p>
      <div>
        <Link href="/">Ir a Home</Link>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
