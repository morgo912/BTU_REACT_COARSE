import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image src="/next.svg" alt="img" width={800} height={600} />
    </div>
  );
}
