import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/dash"}>dashboard</Link>
    </>
  );
}
