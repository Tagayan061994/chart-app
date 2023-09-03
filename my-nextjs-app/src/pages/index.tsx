import Head from "next/head";
import JoinUs from "@/components/Home/JoinUs";
import useAuth from "@/hook/useAuth";

export default function Home() {
  const user = useAuth();
  console.log("user", user);

  return (
    <>
      <Head>
        <title>Cargonect</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>home</div>
    </>
  );
}
