import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/about.js</code>
        </p>
        <div>
          <Link href="/">Ir a Home</Link>
        </div>
      </div>
    </MainLayout>
  );
}
