import Image from "next/image";

import { ExampleChart } from "./components/charts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Graph components below</h1>
      <ExampleChart />
    </main>
  );
}
