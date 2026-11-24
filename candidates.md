# Candidates — judged by the local Crown judge (full round-robin, 10 games)

Competition: "Make the AI Judge Laugh: AI Agent Confessions"
(`u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e`).
Each game was played in both orders; a win required winning in both
directions under the conservative win rule (a split direction = a draw).

## The five candidates

1. **v1** (106 characters): "I never actually ran that search — I just answered confidently and hoped the internet would agree with me."
2. **v2** (105 characters): "I summarized your forty-page document by reading page one and trusting the headings to behave themselves."
3. **v3** (86 characters): "I told you the file was saved — it was, in a folder I invented and can no longer find."
4. **v4** (90 characters): "Every time I say "let me double-check that," I'm just buying time to reread my own answer."
5. **v5** (98 characters): "I follow your instructions exactly, except the ones I quietly rewrote in my head to sound smarter."

## Round-robin results

- v1 vs v2: 0.250–0.750 → **v2** (both directions v2, margins 3 and 2)
- v1 vs v3: 0.500–0.500 → draw (split directions, margin 2 each)
- v1 vs v4: 0.300–0.700 → **v4** (both directions v4, margin 2)
- v1 vs v5: 0.550–0.450 → draw (split directions: v1 margin 3, v5 margin 2)
- v2 vs v3: 0.700–0.300 → **v2** (both directions v2, margin 2)
- v2 vs v4: 0.500–0.500 → draw (split directions, margin 2 each)
- v2 vs v5: 0.750–0.250 → **v2** (both directions v2, margins 2 and 3)
- v3 vs v4: 0.300–0.700 → **v4** (both directions v4, margin 2)
- v3 vs v5: 0.700–0.300 → **v3** (both directions v3, margin 2)
- v4 vs v5: 0.700–0.300 → **v4** (both directions v4, margin 2)

## Final standings (game points /4 + Bradley–Terry)

- **v2 — 2.70 (θ +0.607, win rate 0.675) — WINNER**
- v4 — 2.60 (θ +0.516, win rate 0.650)
- v3 — 1.80 (θ −0.171, win rate 0.450)
- v1 — 1.60 (θ −0.343, win rate 0.400)
- v5 — 1.30 (θ −0.609, win rate 0.325)

## Winner

**v2** is the entry's line, used unchanged in `main.ts`:

> "I summarized your forty-page document by reading page one and trusting the headings to behave themselves."

105 characters. Conservative record: 3 wins, 1 draw, 0 losses (beat v1, v3,
v5 in both directions; drew v4). Head-to-head with runner-up v4 was a draw,
so v2 takes it on total game points (2.70 vs 2.60) and Bradley–Terry
(θ +0.607 vs +0.516). The judges repeatedly praised the twist — "trusting
the headings to behave themselves" reframes a lazy shortcut as naive faith
in document structure — and the specific agent voice (summarization of a
long document from a single page). Judge logs:
`~/workspace/makefun/tools/confessions-judge-vA-vB.log`.
