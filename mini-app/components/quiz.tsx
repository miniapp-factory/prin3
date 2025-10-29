"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GradientCard } from "./ui/gradient-card";
import { Animation } from "./ui/animation";

const questions = [
  {
    question: "What is your favorite type of adventure?",
    options: [
      { text: "Exploring new lands", princess: "Mulan" },
      { text: "Discovering hidden treasures", princess: "Aurora" },
      { text: "Helping friends in need", princess: "Belle" },
      { text: "Finding inner strength", princess: "Elsa" },
      { text: "Bringing joy to others", princess: "Tiana" },
    ],
  },
  {
    question: "Which trait describes you best?",
    options: [
      { text: "Brave", princess: "Mulan" },
      { text: "Graceful", princess: "Aurora" },
      { text: "Kind", princess: "Belle" },
      { text: "Independent", princess: "Elsa" },
      { text: "Hardworking", princess: "Tiana" },
    ],
  },
  {
    question: "What is your favorite pastime?",
    options: [
      { text: "Training for battle", princess: "Mulan" },
      { text: "Reading books", princess: "Belle" },
      { text: "Cooking meals", princess: "Tiana" },
      { text: "Singing in the snow", princess: "Elsa" },
      { text: "Dreaming of a castle", princess: "Aurora" },
    ],
  },
  {
    question: "How do you handle challenges?",
    options: [
      { text: "Face them head‑on", princess: "Mulan" },
      { text: "Seek wisdom", princess: "Belle" },
      { text: "Stay calm", princess: "Elsa" },
      { text: "Work hard", princess: "Tiana" },
      { text: "Stay hopeful", princess: "Aurora" },
    ],
  },
  {
    question: "What is your ideal setting?",
    options: [
      { text: "A bustling city", princess: "Tiana" },
      { text: "A quiet forest", princess: "Aurora" },
      { text: "A grand library", princess: "Belle" },
      { text: "A snowy mountain", princess: "Elsa" },
      { text: "A war‑torn battlefield", princess: "Mulan" },
    ],
  },
];

export function Quiz() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const router = useRouter();

  const handleChange = (index: number, princess: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = princess;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scores: Record<string, number> = {};
    answers.forEach((p) => {
      if (!p) return;
      scores[p] = (scores[p] || 0) + 1;
    });
    const best = Object.entries(scores).reduce(
      (a, b) => (b[1] > a[1] ? b : a),
      ["", 0]
    )[0];
    router.push(`/result?princess=${encodeURIComponent(best)}`);
  };

  return (
    <Animation>
      <GradientCard className="max-w-2xl mx-auto p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Disney Princess Quiz</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx}>
              <p className="font-medium mb-2">{q.question}</p>
              <div className="space-y-1">
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      value={opt.princess}
                      checked={answers[idx] === opt.princess}
                      onChange={() => handleChange(idx, opt.princess)}
                      className="form-radio"
                    />
                    <span>{opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            Show Result
          </button>
        </form>
      </GradientCard>
    </Animation>
  );
}
