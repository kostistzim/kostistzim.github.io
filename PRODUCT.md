# Product

<!-- impeccable:product-schema 1 -->

<!-- Written without the init interview: this session ran unattended, so every fact below comes from the brief, the candidate's own CV sources on this machine, and the public GitHub profile. Facts marked (inferred) were not confirmed by the user. -->

## Platform

web

## Stack

Next.js (App Router, TypeScript, static export) built by a GitHub Actions workflow and deployed to GitHub Pages; the workflow also runs on a daily schedule so build-time data (GitHub activity, repositories) stays fresh. Chosen by the user on 2026-10-14 ("Next.js like the original", referring to ashishgogula.in). The earlier plain HTML/CSS version (transit-line design) is in git history before this change.

## Users

Recruiters, hiring managers and engineers at Copenhagen AI, data and life-science teams who open the link from a LinkedIn profile, a GitHub profile or a job application, usually on a work laptop and sometimes on a phone between meetings. Their job: within about a minute, understand who Konstantinos is, what he has actually built, what he is doing now, and how to reach him. Secondary audience: DTU supervisors and fellow students looking at the thesis and coursework. (inferred)

## Product Purpose

A CV-style personal site at kostistzim.github.io for Konstantinos (Kostis) Tzimoulias. It replaces the former DTU course-project site (San Francisco crime visualisations) that lived at the same address. Success: a visitor can read the CV, browse selected projects with live links to GitHub, see current work and the planned MSc thesis, and contact him, without downloading anything. The page must also print to a clean PDF so it doubles as the CV document.

## Positioning

A mathematician (BSc Mathematics, Athens) who moved into applied AI engineering and now works on knowledge-grounded AI: LLM systems, knowledge graphs, retrieval, MLOps and data systems built from first principles. The site is the single place where the CV, the public code, and the thesis direction meet. A neighbouring candidate's page could not truthfully copy the combination of the mathematics background, the data-systems-from-first-principles special course, and the knowledge-graph thesis direction.

## Operating Context

- Content sources: `~/Desktop/job applications/CLAUDE.md` (candidate profile), `~/Desktop/job applications/documents/cv/Konstantinos_Tzimoulias_Halfspace_CV_v2.pdf` (technical CV), public repositories at github.com/kostistzim.
- The GitHub profile carries the avatar used on the site (`assets/portrait.jpg`, 200×200 source).
- Visitors arrive from LinkedIn, GitHub and job applications; most will skim, a few will read in full.

## Capabilities and Constraints

- Sections required by the brief: CV (profile, experience, education, skills), personal projects, current work, MSc thesis, contact.
- **Amass confidentiality:** the current internship at Amass may be named with its title and a one-line public description only. No project details, data, pipeline descriptions, client names or internal tooling from Amass appear anywhere on the site. The thesis section may say it is planned in collaboration with Amass and give the public research direction only.
- Contact: email, GitHub, LinkedIn. Phone number is deliberately omitted from the public page. (inferred)
- No publications, awards or certifications exist; the site must not invent any.
- Projects link to real GitHub repositories only. Descriptions come from the repository READMEs and the CV.
- Static hosting: no server, no forms, no analytics. The GitHub REST API may be read client-side for live repository metadata, with a static fallback when the API is unavailable.
- Terminology: the candidate goes by "Kostis"; the formal name "Konstantinos Tzimoulias" appears in the title and print header.
- Undecided: the thesis title (not yet fixed; expected completion January 2027).

## Brand Commitments

- Name: Konstantinos Tzimoulias, known as Kostis.
- Voice: plain, factual, first person singular, no hype and no claims beyond the CV. Early-career honesty: internships and student roles are described as such.
- Asset: GitHub avatar portrait.
- Pinned visual reference (user, 2026-10-14): ashishgogula.in. A quiet, dark, single narrow column with small type, plain section labels, ruled lists, a row of small live widgets under the intro, and a GitHub contribution graph. The user wants the site to feel like that reference, not a copy of it.
- Widgets the user asked for (2026-10-14): Copenhagen clock with live weather, now-playing music (needs a Last.fm account connected), reading now, a Danish word a day, GitHub contribution graph. The thesis knowledge-graph widget was removed the same day: the thesis is private work and must not be visualised or described beyond the hedged Thesis section. More ideas later, possibly around no-gi jiu-jitsu.
- Daily generated content (user, 2026-10-14): a Danish word, a maths theorem/fact/puzzle, a LeetCode-style coding problem and an olympiad-style problem, each with a full solution, generated by one cheap Claude call a day in the deploy workflow (`scripts/daily.mjs`, default model claude-haiku-5-5), committed to `src/data/daily/` and archived at `/daily`. The page must say the content is model-generated and the solutions unverified; the first day (2026-10-14) was written by hand.

## Evidence on Hand

- CV text (profile, experience, education, skills, selected projects, activities).
- Public repositories with READMEs: NLP-LLMOps-KnowledgeGraphs-DTU (seven FastAPI microservices incl. CourseCompass), data-systems-from-first-principles (MLStore-Lite), Winning-Ticket-Hypothesis-Study, Plant_Leaves_Classification_MLOps_DTU02476, EHR-Mamba-Classification-on-ICU-Data (fork, DTU 02456 project), Airbnb-Athens-Data-Analysis, Introduction-to-Statistical-Learning-with-Python-Solutions, KaggleCompetitions.
- Absent and not to be fabricated: testimonials, publications, metrics about Amass work, thesis title, thesis results.

## Product Principles

- Truth over polish: every line on the page traces to the CV or a repository.
- The page is the CV: it reads top to bottom as a document and prints as one.
- Code is evidence: each project links to the repository that proves it.
- Respect the reader's minute: the first viewport answers who, what now, and how to contact.
- Protect the employer: nothing about Amass beyond the role title and a public one-liner.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, full keyboard navigation with visible focus, semantic headings for screen readers, reduced-motion respected, readable at 390px wide and in print.
