"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {

  const tasks = useQuery(api.tasks.get);

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-image.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </section>

    </>
  );
}
