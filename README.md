# AI Study Studio — JSSSTU 24CS540

A static study website for Artificial Intelligence Units 1 and 2. No build step, server, API key or external library is required.

## Source priority used for this update
1. **Amended 2024 Scheme and Syllabus — 24CS540**: defines the current Unit 1 and Unit 2 examinable topic headings.
2. **Unit 1(1)(1).pptx and Unit 2 (1)(1).pptx**: primary teaching source for the explanations, terminology, examples and search procedures.
3. **Artificial_Intelligence.pdf**: scanned JSSSTU 22CS540 internal tests and older 20CS540 papers, used only to build the PYQ/practice section.

The older papers have different course codes and may reflect earlier syllabi. Their questions are clearly source-labelled and should not override the current 24CS540 syllabus. If a question relies on a graph image with unreadable edge costs/heuristics, the answer teaches the tracing procedure rather than inventing a numeric path.

## Study content
- Unit 1: AI definitions and purpose, programming vs AI, core capabilities, foundations, history/development, subareas and applications, current trends, and Tic-Tac-Toe formulation.
- Unit 2: problem formulation and characteristics, state-space representation, production systems, water-jug and other state-space examples, exhaustive search, BFS/DFS, informed vs uninformed search, Generate-and-Test, Hill Climbing, Beam Search, Best-First Search, A*, problem reduction and Means-End Analysis.
- Previous Questions + Answers: source-labelled practice questions, worked explanations, comparison tables and step-by-step solution methods, filterable by unit.
- Topic completion is stored in browser localStorage; progress is local to the browser/device.

Some topics from the supplied teaching PPTs go beyond the concise current syllabus headings. They remain available as lecturer-material support, but the current syllabus is the authority for exam scope.

## Run locally
Extract the ZIP and open `ai-study-studio/index.html` in a browser.

## Deploy/update on GitHub Pages
1. Extract the ZIP.
2. Copy the contents of the `ai-study-studio` folder (not the enclosing folder) into the root of your existing `ai-study-studio` GitHub repository, replacing the old files.
3. Commit and push the changes to `main`.
4. GitHub Pages should redeploy automatically if it is already configured. If not, open **Settings → Pages → Deploy from a branch → main → /(root)**.
5. Hard-refresh the live site (Ctrl+F5) if the browser still shows cached JavaScript.
