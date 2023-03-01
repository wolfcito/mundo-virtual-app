import Head from "next/head";
import { Card, Card2 } from "~/components/card";
import { Navbar } from "~/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <main>
        <Navbar />
        <div>Development and Research</div>
        <div>Adding our grain of sand.</div>

        <div>
          MundoVirtual focuses its efforts to support people to translate their
          ideas through advice, construction prototypes and land them in an MVP.
        </div>
        <Card />
        <div className="grid grid-cols-1 gap-y-0.5 my-4 mx-auto md:grid-cols-2 md:gap-x-px md:mx-auto md:w-[750px] lg:w-[990px] lg:max-w-[1300px] lg:grid-cols-3  lg:gap-1">
          <Card isExpanded />
          <Card isExpanded />
          <Card isExpanded />
          <Card isExpanded />
          <Card isExpanded />
        </div>
        <Card isExpanded createAt={new Date()} />
      </main>
    </>
  );
}
