import type { ResearchPaper } from "@/types";

export const research: ResearchPaper[] = [
  {
    slug: "test-time-compute",
    title:
      "Test-Time Compute Allocation: Extended Thinking vs. Iterative Refinement at Matched Token Budgets",
    subtitle:
      "Holding the inference budget fixed reveals strategy choice is budget-dependent — sometimes dramatically.",
    venue: "CSE 188 Natural Language Processing · UC Merced",
    year: 2026,
    status: "course",
    authors: ["Alex Titov"],
    abstract:
      "Modern reasoning systems can spend test-time compute in many ways: long chains of thought, self-refinement, or self-consistency over multiple samples. Most prior work compares strategies at different total budgets, conflating strategy effects with compute effects. We hold the total output-token budget fixed and compare four strategies — single-shot (S0), extended thinking (S1), self-refine (S2), and self-consistency (S3) — across two model sizes (Claude Haiku 4.5, Claude Sonnet 4.6) and three budgets (2K, 8K, 16K tokens) on the AIME 2024 benchmark. We find strategy choice is budget-dependent: refinement-based strategies collapse at small per-call budgets, extended thinking dominates middle budgets, and self-refine becomes cost-efficient only when budgets are large enough for models to produce complete solutions before being asked to critique. The result challenges the framing that 'fancy' test-time strategies always help, and provides practical guidance for budget allocation.",
    tldr: [
      "Self-refine (S2) collapses at small budgets — 0% on AIME at B=2K — because models can't produce a full solution before being asked to revise.",
      "Strong models gain only marginal accuracy from more compute (+5 pts for Sonnet 4.6 from 2K → 16K).",
      "Compute-shifting helps weak models but is bounded — Haiku 4.5 gains +10 pts but never closes the gap to Sonnet.",
      "Self-refine wins on cost-efficiency at high budgets — 95% accuracy at ~60% of single-shot's cost on Sonnet.",
    ],
    methodology: [
      {
        name: "S0 — Single-shot",
        description:
          "One generation up to the full budget. The simplest baseline. No critique, no resampling.",
      },
      {
        name: "S1 — Extended thinking",
        description:
          "Anthropic's thinking-mode budget allocated up-front; the model spends the budget privately reasoning before producing the final answer.",
      },
      {
        name: "S2 — Self-refine",
        description:
          "Two passes: a draft (≤B/2 tokens) followed by a critique-and-revise pass. Splits the budget across attempts.",
      },
      {
        name: "S3 — Self-consistency",
        description:
          "K independent samples (each ≤B/K) followed by majority vote on extracted boxed answers.",
      },
    ],
    figures: [
      {
        src: "/research/test-time-compute/fig1-pareto.png",
        caption:
          "Figure 1 — Accuracy vs. mean cost per problem on AIME 2024. Each marker is one (model, strategy, budget). The Pareto frontier shows self-refine (S2) reaches near-top accuracy at meaningfully lower cost once budgets are large enough.",
        alt: "Scatter plot of accuracy versus cost in USD per problem, with markers colored by strategy and a connecting Pareto frontier.",
      },
      {
        src: "/research/test-time-compute/fig2-acc-vs-budget.png",
        caption:
          "Figure 2 — Accuracy vs. token budget, faceted by model. Self-refine collapses at B=2K and recovers at B=8K and above; extended thinking is the most consistent winner across budgets for Haiku.",
        alt: "Two-panel line plot of accuracy on the y-axis and token budget on the x-axis, with one line per strategy in each panel.",
      },
      {
        src: "/research/test-time-compute/fig3-cost-efficiency.png",
        caption:
          "Figure 3 — Cost-efficiency leaderboard: accuracy per dollar across all conditions. Sonnet S2 at B=16K matches single-shot accuracy at roughly 60% of the cost.",
        alt: "Horizontal bar chart of cost-efficiency rankings across model, strategy, and budget combinations.",
      },
    ],
    highlights: [
      "420 total experiments across 2 models × 4 strategies × 3 budgets × seeds.",
      "Benchmarked on AIME 2024 — 30 hard, integer-answer reasoning problems with verifiable scoring.",
      "Pre-registered hypotheses and matched-budget design isolate strategy effects from compute effects.",
      "Reproducible CLI: smoke / cost / calibrate / pilot / run / analyze / plot.",
    ],
    pdfUrl: "/research/test-time-compute/paper.pdf",
    codeUrl: "https://github.com/alextitov19/test-time-compute",
    keywords: [
      "Test-time compute",
      "LLM reasoning",
      "Self-refine",
      "Self-consistency",
      "Extended thinking",
      "AIME 2024",
      "Anthropic Claude",
    ],
    citation:
      "Titov, A. (2026). Test-Time Compute Allocation: Extended Thinking vs. Iterative Refinement at Matched Token Budgets. CSE 188 Natural Language Processing, University of California, Merced.",
  },
];

export const findResearch = (slug: string): ResearchPaper | undefined =>
  research.find((p) => p.slug === slug);
