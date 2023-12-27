import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>test</h1>
      <br />
      <Link href="/albums">albums</Link>
      <br />
      <Link href="/posts">posts</Link>
    </>
  );
}
