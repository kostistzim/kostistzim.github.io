import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import { person } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="page">
      <h1 className="name">Nothing here</h1>
      <p className="role">This page does not exist, or it moved when the site was rebuilt.</p>
      <p><Link href="/">Back to the front page</Link>, or write to me directly:</p>
      <CopyEmail email={person.email} />
    </main>
  );
}
