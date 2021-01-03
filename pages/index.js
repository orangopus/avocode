import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
       <title>avocode</title>
      </Head>
    <div className="herocont">
      <div className="box">
      <h1 className="heroheader">avocode</h1>
      </div>
      <p className="herotext">A coding community for coders and builders.</p>
      <a href="https://guilded.gg/Orangopus"><button className="button">get started</button></a>
    </div>
    </div>
  );
}
