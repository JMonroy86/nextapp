import { Inter } from "@next/font/google";
import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <div className="description">
      <p>
        Get started by editing&nbsp;
        <code className="code">pages/pricing.js</code>
      </p>
      <div>
        <Link href="/">Ir a Home</Link>
      </div>
    </div>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
