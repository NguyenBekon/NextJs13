import Link from "next/link";
import { Metadata } from "next"; // Only work on server components

export const metadata: Metadata = {
  title: "Home",
  description: "Description",
};

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/google"}>Google</Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li>
          <Link href={"/9gag"}>9gag</Link>
        </li>
      </ul>
    </div>
  );
}
