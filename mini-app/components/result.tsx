"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PrincessCard } from "./ui/princess-card";
import { Share } from "./share";
import { GradientCard } from "./ui/gradient-card";
import { Animation } from "./ui/animation";
import { description, title, url } from "@/lib/metadata";

const princessData: Record<string, { name: string; image: string; bio: string }> = {
  Mulan: {
    name: "Mulan",
    image: "/princesses/mulan.png",
    bio: "A brave warrior who defends her family and country.",
  },
  Aurora: {
    name: "Aurora",
    image: "/princesses/aurora.png",
    bio: "A gentle princess who dreams of a peaceful life.",
  },
  Belle: {
    name: "Belle",
    image: "/princesses/belle.png",
    bio: "A curious soul who loves books and kindness.",
  },
  Elsa: {
    name: "Elsa",
    image: "/princesses/elsa.png",
    bio: "A powerful queen who embraces her true self.",
  },
  Tiana: {
    name: "Tiana",
    image: "/princesses/tiana.png",
    bio: "A hardworking entrepreneur who loves cooking.",
  },
};

export function Result() {
  const params = useSearchParams();
  const princessKey = params.get("princess") ?? "Mulan";
  const data = princessData[princessKey] ?? princessData["Mulan"];
  const router = useRouter();

  const shareUrl = `${url}/result?princess=${encodeURIComponent(princessKey)}`;

  return (
    <Animation>
      <GradientCard className="max-w-2xl mx-auto p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Your Disney Princess Match</h2>
        <PrincessCard
          name={data.name}
          image={data.image}
          bio={data.bio}
          className="mb-6"
        />
        <Share
          title={`${title} – ${data.name}`}
          description={description}
          url={shareUrl}
          imageUrl={data.image}
        />
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => router.push("/quiz")}
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      </GradientCard>
    </Animation>
  );
}
