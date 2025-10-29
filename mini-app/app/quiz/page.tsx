import { Quiz } from "@/components/quiz";
import { Metadata } from "next";
import { description, title, url } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${title} – Quiz`,
    description: description,
  };
}

export default function QuizPage() {
  return <Quiz />;
}
