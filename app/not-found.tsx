import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackgroundGlow } from "@/components/BackgroundGlow";

export default function NotFound() {
  return (
    <>
      <BackgroundGlow />
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link href="/" className="btn-primary mt-8">
            <ArrowLeft size={16} /> Back home
          </Link>
        </div>
      </main>
    </>
  );
}
