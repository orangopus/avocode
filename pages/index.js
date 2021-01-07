import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
       <title>codegasm</title>
      </Head>
    <div className="herocont">
      <div className="box">
      <h1 className="heroheader">codegasm</h1>
      </div>
      <p className="herotext">A coding community for coders and builders.</p>
      <a href="https://guilded.gg/Orangopus"><button className="button">get started</button></a>
    </div>
    </div>
  );
}
