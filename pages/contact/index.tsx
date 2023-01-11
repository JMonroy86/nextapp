import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/contact.js</code>
        </p>
        <div>
          <Link href="/about">Ir a About</Link>
        </div>
      </div>
    </MainLayout>
  );
}
