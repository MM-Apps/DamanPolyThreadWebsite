# Claude Code Project Skills Reference Guide

This comprehensive reference manual documents all 22 project-local Claude Code skills installed in `.claude/skills/` for the **DamanPolyThread Website** project.

Each skill entry provides its **purpose**, **technical description**, **layman's analogy**, **exact initiation methods**, **concrete real-world examples**, and **operational best practices**.

---

## Table of Contents

1. [Architecture & Workflow Overview](#architecture--workflow-overview)
2. [Quick Reference Matrix](#quick-reference-matrix)
3. [Architecture & Planning Skills](#1-architecture--planning-skills)
   - [ask-matt](#ask-matt)
   - [brainstorming](#brainstorming)
   - [grill-with-docs](#grill-with-docs)
   - [writing-plans](#writing-plans)
   - [to-spec](#to-spec)
   - [to-tickets](#to-tickets)
   - [improve-codebase-architecture](#improve-codebase-architecture)
4. [Implementation & Engineering Discipline](#2-implementation--engineering-discipline)
   - [karpathy-guidelines](#karpathy-guidelines)
   - [tdd (Test-Driven Development)](#tdd-test-driven-development)
   - [implement](#implement)
   - [executing-plans](#executing-plans)
   - [prototype](#prototype)
5. [Debugging, Verification & Quality Assurance](#3-debugging-verification--quality-assurance)
   - [systematic-debugging](#systematic-debugging)
   - [diagnosing-bugs](#diagnosing-bugs)
   - [verification-before-completion](#verification-before-completion)
   - [webapp-testing](#webapp-testing)
6. [Design, UI & Frontend Aesthetics](#4-design-ui--frontend-aesthetics)
   - [frontend-design](#frontend-design)
   - [web-artifacts-builder](#web-artifacts-builder)
7. [Research & External Documentation](#5-research--external-documentation)
   - [research](#research)
   - [find-docs](#find-docs)
   - [context7-cli](#context7-cli)
8. [Cognitive Focus & Communication Style](#6-cognitive-focus--communication-style)
   - [i-have-adhd](#i-have-adhd)
9. [Recommended End-to-End Development Lifecycle](#recommended-end-to-end-development-lifecycle)

---

## Architecture & Workflow Overview

Skills are modular bundles of prompt engineering, constraints, workflows, and tools stored in `.claude/skills/<skill-name>/SKILL.md`.

In Claude Code, skills operate in two distinct modes:

1. **User-Invoked (`disable-model-invocation: true`)**:
   Triggered explicitly by typing slash commands in the prompt box (e.g., `/to-spec`, `/implement`, `/i-have-adhd`). The AI model will never secretly trigger these on its own; they are user-directed orchestration checkpoints.
2. **Model-Invoked (Default / Autonomous)**:
   Claude automatically identifies when a task matches the skill's domain and pulls in its guidelines dynamically (e.g., `frontend-design` fires when generating CSS/React code, `systematic-debugging` fires when encountering errors, `karpathy-guidelines` applies across all coding tasks).

---

## Quick Reference Matrix

| Skill | Primary Domain | Invocation | Provenance |
| :--- | :--- | :--- | :--- |
| **ask-matt** | Workflow Routing | User (`/ask-matt`) | Matt Pocock Skills |
| **brainstorming** | Requirements Discovery | Auto / On Prompt | Superpowers |
| **context7-cli** | Documentation CLI | Auto / On Mention | Context7 |
| **diagnosing-bugs** | Deep Bug Diagnosis | Auto (`diagnose`, `bug`) | Matt Pocock Skills |
| **executing-plans** | Plan Execution | Auto / Workflow | Superpowers |
| **find-docs** | Live Library Docs | Auto / Framework query | Context7 |
| **frontend-design** | Distinctive UI / UX | Auto / UI Creation | Anthropic |
| **grill-with-docs** | Socratic Architecture Interview | User (`/grill-with-docs`) | Matt Pocock Skills |
| **i-have-adhd** | Concise Numbered Output | User (`/i-have-adhd`) | ayghri |
| **implement** | Ticket / Spec Execution | User (`/implement`) | Matt Pocock Skills |
| **improve-codebase-architecture** | Deep Module Refactoring | User (`/improve-codebase-architecture`) | Matt Pocock Skills |
| **karpathy-guidelines** | Surgical, Simple Coding | Auto / All Coding | Andrej Karpathy / Multica |
| **prototype** | Throwaway Explorations | Auto / Design Spike | Matt Pocock Skills |
| **research** | Background Investigation | Auto / Deep Questions | Matt Pocock Skills |
| **systematic-debugging** | 4-Phase Root Cause Isolation | Auto / Test Failures | Superpowers |
| **tdd** | Red-Green-Refactor Loop | Auto / Test-first asks | Matt Pocock Skills |
| **to-spec** | Conversation to Technical Spec | User (`/to-spec`) | Matt Pocock Skills |
| **to-tickets** | Spec to Dependency Tickets | User (`/to-tickets`) | Matt Pocock Skills |
| **verification-before-completion** | Evidence Before Assertions | Auto / Pre-PR check | Superpowers |
| **web-artifacts-builder** | Multi-component UI Artifacts | Auto / Complex Prototypes | Anthropic |
| **webapp-testing** | Playwright Browser Testing | Auto / E2E Verification | Anthropic |
| **writing-plans** | Step-by-Step Task Planning | Auto / Pre-implementation | Superpowers |

---

## 1. Architecture & Planning Skills

### ask-matt

* **Purpose**: Acts as an interactive navigation switchboard that inspects your current challenge and directs you to the optimal engineering skill or sequence.
* **Description**: Prevents context clutter and paralysis by mapping your current state against established engineering workflows (the main flow, on-ramps, vocabulary layers, and standalone tools). It evaluates whether you need an interview, an ADR, an architecture review, a bug reproduction loop, or a prototype.
* **Layman's Analogy**: Like a hospital triage receptionist or an airport information desk. You don't have to memorize which specialist doctor you need; you explain your symptoms, and they give you a direct pass to the correct clinic.
* **How to Initiate**:
  * Slash command: `/ask-matt`
  * With arguments: `/ask-matt I have an idea for a responsive mega-menu but don't know where to start`
* **Concrete Example**:
  * *User Prompt*: `/ask-matt We need to redesign the product catalog page with 50 yarn varieties, but the team disagrees on filtering mechanisms.`
  * *Agent Behavior*: Analyzes the conflict. Advises detouring into `/prototype` for UI filter patterns, followed by `/grill-with-docs` to lock down decisions into an ADR before writing any application code.

---

### brainstorming

* **Purpose**: Explores user intent, unearths hidden assumptions, and validates core requirements before any architectural design or code is drafted.
* **Description**: LLMs tend to immediately start writing code based on flimsy assumptions. This skill enforces Socratic questioning, trade-off comparisons, user-persona analysis, and constraint checking before touching any files.
* **Layman's Analogy**: Like an experienced custom tailor who spends twenty minutes discussing how you move, where you'll wear the suit, and your climate comfort before even touching a tape measure or cutting fabric.
* **How to Initiate**:
  * Auto-triggers on prompts proposing new features, components, or major refactors.
  * Direct prompt: `Let's brainstorm the layout and information hierarchy for the Daman PolyThread company history timeline.`
* **Concrete Example**:
  * *User Prompt*: `Add a customer quotation request form to the website.`
  * *Agent Behavior*: Instead of immediately generating HTML forms, it asks: What yarn specifications must be captured (denier, color code, tenacity, spool quantity)? Should guest quotes be allowed or require verification? Where should submissions route (email, database, CRM)?

---

### grill-with-docs

* **Purpose**: Sharpens concepts through an intense, Socratic interview process while capturing decisions into Architecture Decision Records (ADRs) and a project `GLOSSARY.md`.
* **Description**: Combines relentless interrogation with persistent documentation. It interrogates edge cases, performance implications, state lifecycles, and security boundaries. As decisions are agreed upon, it creates standardized ADRs and establishes a strict domain vocabulary so terms like "spool", "bobbin", and "cone" are never conflated.
* **Layman's Analogy**: Like a rigorous PhD thesis defense committee that challenges every paragraph of your proposal, but helpfully writes down the approved definitions and conclusions in your official binder as you defend them.
* **How to Initiate**:
  * Slash command: `/grill-with-docs`
  * With arguments: `/grill-with-docs Multi-language support (English, Hindi, Gujarati) for textile product specifications`
* **Concrete Example**:
  * *User Prompt*: `/grill-with-docs We want a client portal where textile buyers download invoice PDFs and test certificates.`
  * *Agent Behavior*: Runs successive question rounds: How are certificates authenticated? What is the retention policy? Generates `docs/adr/0001-certificate-portal-auth.md` and records authentication terms in `GLOSSARY.md`.

---

### writing-plans

* **Purpose**: Transforms approved requirements into bite-sized, deterministic implementation plans where each task has clear file paths, interface signatures, and test verification checks.
* **Description**: Plans written by this skill are engineered for an implementer who has never seen the codebase before. It strictly adheres to YAGNI (You Aren't Gonna Need It), DRY (Don't Repeat Yourself), and TDD principles, breaking large endeavors into 2-5 minute tasks with fresh git commit markers.
* **Layman's Analogy**: Like a modular architectural blueprint with pre-cut numbered beams and step-by-step IKEA assembly instructions. Anyone following it will assemble the exact same piece of furniture without needing to guess dimensions.
* **How to Initiate**:
  * Auto-triggers when multi-step feature implementation is requested after spec approval.
  * Direct prompt: `Write a detailed implementation plan for the yarn denier calculation widget.`
* **Concrete Example**:
  * *User Prompt*: `We approved the contact inquiry form spec. Write the implementation plan.`
  * *Agent Behavior*: Produces a markdown plan with tasks: Task 1: Create Zod schema & unit tests; Task 2: Build server action handler; Task 3: Assemble UI component with accessible error states; Task 4: Integration test.

---

### to-spec

* **Purpose**: Distills sprawling conversation transcripts and brainstorming threads into a crisp, authoritative technical specification.
* **Description**: Operates without further user interviews. It synthesizes existing context, maps out system seams (interfaces where behavior can be validated), declares non-functional requirements, and formats the output into a ready-to-build specification file.
* **Layman's Analogy**: Like a court reporter who takes hundreds of pages of free-form courtroom debate and summarizes it into a single legally binding contract.
* **How to Initiate**:
  * Slash command: `/to-spec`
* **Concrete Example**:
  * *User Prompt*: `/to-spec` (after discussing product filtration and catalog indexing for 20 messages).
  * *Agent Behavior*: Emits a complete specification containing: Context, Scope Boundaries, Interface Seams, Data Contracts, Performance Criteria, and Test Strategy.

---

### to-tickets

* **Purpose**: Deconstructs a monolithic technical specification into independent tracer-bullet tickets connected by clear dependency blocking edges.
* **Description**: Solves the problem of monolithic, unmanageable pull requests. Each ticket represents an end-to-end slice of behavior that can be built, tested, and reviewed in isolation. Declares explicit `blocked-by` relationships to establish a clean dependency graph.
* **Layman's Analogy**: Like breaking down the construction of a house into a dependency chart: foundation first, framing blocked by foundation, roofing blocked by framing, electrical blocked by roofing.
* **How to Initiate**:
  * Slash command: `/to-tickets`
  * With arguments: `/to-tickets docs/specs/product-catalog.md`
* **Concrete Example**:
  * *User Prompt*: `/to-tickets`
  * *Agent Behavior*: Outputs `.scratch/tickets/TICKET-01-data-model.md`, `TICKET-02-filter-logic.md` (blocked by 01), `TICKET-03-grid-ui.md` (blocked by 02).

---

### improve-codebase-architecture

* **Purpose**: Scans a codebase for architectural decay, shallow interfaces, and leaking abstractions, proposing "deep module" refactorings.
* **Description**: Leverages John Ousterhout's *Philosophy of Software Design* principles. It hunts for "shallow modules" (large interfaces doing trivial work) and transforms them into "deep modules" (simple, intuitive interfaces hiding substantial, robust functionality).
* **Layman's Analogy**: Like replacing a chaotic web of exposed plumbing and manual valves in a factory with a clean control panel featuring a single on/off toggle and pressure gauge.
* **How to Initiate**:
  * Slash command: `/improve-codebase-architecture`
* **Concrete Example**:
  * *User Prompt*: `/improve-codebase-architecture`
  * *Agent Behavior*: Scans components. Discovers that yarn filtering logic is duplicated across 4 components with exposed internal array slicing. Proposes a deep `useCatalogFilter` engine with a 3-method surface area.

---

## 2. Implementation & Engineering Discipline

### karpathy-guidelines

* **Purpose**: Enforces four foundational behavioral principles to eliminate typical LLM failure modes: thinking before coding, radical simplicity, surgical edits, and verifiable goals.
* **Description**: Codifies Andrej Karpathy's analysis of LLM programming mistakes. It prohibits silent assumptions, resists premature overengineering (rewriting 200 lines into 50 clean lines), prevents accidental modifications of unrelated files, and requires empirical verification tests for every step.
* **Layman's Analogy**: Like a senior flight surgeon in an operating room who demands that the surgeon announce every incision, touch only the targeted tissue, keep instruments minimal, and verify vital signs before closing.
* **How to Initiate**:
  * Applies automatically across all code modification and review prompts.
  * Direct invocation: `Apply Karpathy guidelines to refactor the navigation header.`
* **Concrete Example**:
  * *User Prompt*: `Add a dark mode toggle to the navbar.`
  * *Agent Behavior*: States assumptions on persistence (localStorage vs cookie). Modifies solely `ThemeToggle.tsx` and the root theme provider without reformatting neighboring CSS files or adding an unasked-for theme marketplace.

---

### tdd (Test-Driven Development)

* **Purpose**: Enforces a strict red-green-refactor loop that guarantees test coverage, clear interfaces, and regression prevention.
* **Description**: Prohibits writing production code before an automated test exists and fails for the expected reason (Red). Writes the absolute minimum code necessary to make the test pass (Green), then refactors for clarity, speed, and clean seams without altering behavior.
* **Layman's Analogy**: Like an accountant double-entry booking system or a high-wire acrobat who rigs the safety net securely into place before stepping onto the wire.
* **How to Initiate**:
  * Auto-triggers on prompts mentioning "test-first", "TDD", "unit test", or "red-green-refactor".
  * Direct prompt: `Use TDD to build the yarn weight converter utility.`
* **Concrete Example**:
  * *User Prompt*: `Build a function to convert Denier to Tex and Decitex.`
  * *Agent Behavior*:
    1. Writes `yarn-units.test.ts` with assertions for `denierToTex(150) -> 16.67`.
    2. Runs test suite; observes failure (module not found).
    3. Writes minimal implementation in `yarn-units.ts`.
    4. Runs test suite; observes green pass.
    5. Refactors floating-point precision logic.

---

### implement

* **Purpose**: Orchestrates the autonomous execution of a single ticket or spec slice using TDD, regular typechecking, and self-review.
* **Description**: Takes a ticket reference, loads its context, writes failing unit/integration tests at defined seams, writes code to satisfy them, runs typechecks and linter rules, commits changes cleanly, and finishes with an automated code review.
* **Layman's Analogy**: Like an experienced journeyman builder who picks up Work Order #42, checks materials, builds the doorframe, checks level and plumb with a spirit level, and stamps the inspection tag.
* **How to Initiate**:
  * Slash command: `/implement`
  * With arguments: `/implement .scratch/tickets/TICKET-02-filter-logic.md`
* **Concrete Example**:
  * *User Prompt*: `/implement TICKET-02`
  * *Agent Behavior*: Reads ticket specs, runs test suite, implements the filter reducer, verifies tests pass, runs typecheck, commits with conventional commit message, and prints diff summary.

---

### executing-plans

* **Purpose**: Executes an approved implementation plan sequentially within the current conversation session, keeping tight track of progress.
* **Description**: Designed for inline execution without the overhead of spawning detached subagents for every trivial step. Uses the plan as a strict ledger, marking tasks off step-by-step, running verification commands between steps, and requesting human review at milestone boundaries.
* **Layman's Analogy**: Like a pilot diligently checking off every item on the pre-flight checklist before advancing the throttles.
* **How to Initiate**:
  * Auto-triggers when the user says "Execute this plan" or "Proceed with the implementation plan".
* **Concrete Example**:
  * *User Prompt*: `The plan in docs/plans/catalog-redesign.md looks great. Execute it.`
  * *Agent Behavior*: Announces start, executes Task 1, verifies, commits; executes Task 2, verifies, commits; presents completed ledger for final validation.

---

### prototype

* **Purpose**: Creates rapid, throwaway prototypes to explore user interfaces or state models before committing to permanent application architecture.
* **Description**: Explicitly branches into either:
  1. **Logic/State spikes**: A single self-contained HTML file with button-driven state transitions to test complex workflows.
  2. **UI spikes**: A single page rendering 3 radically different visual variations switchable via URL parameters.
* **Layman's Analogy**: Like making a rough cardboard and duct-tape mockup of a new car dashboard to see if your hands reach the radio knobs comfortably before ordering expensive plastic injection molds.
* **How to Initiate**:
  * Auto-triggers when asked to "build a quick prototype", "explore what this could look like", or "test this state logic".
  * Direct prompt: `Build a prototype exploring 3 different hero section layouts for the textile landing page.`
* **Concrete Example**:
  * *User Prompt*: `I'm not sure whether the product gallery should be a horizontal filmstrip or a vertical accordion. Prototype it.`
  * *Agent Behavior*: Generates a prototype with a floating selector bar at the bottom allowing instant switching between Variant A (Filmstrip) and Variant B (Accordion).

---

## 3. Debugging, Verification & Quality Assurance

### systematic-debugging

* **Purpose**: Enforces an uncompromising 4-phase investigation protocol that forbids guessing or applying symptom fixes before the root cause is proven.
* **Description**: Mandates:
  1. *Phase 1 — Root Cause Investigation*: Reproduce the issue with a minimal script, inspect logs, trace data flow, and form a testable hypothesis.
  2. *Phase 2 — Pattern Analysis*: Check whether the defect exists in similar components.
  3. *Phase 3 — Hypothesis Testing*: Prove the hypothesis before editing production code.
  4. *Phase 4 — Implementation & Regression Defense*: Apply fix, verify with tests, add defensive barriers.
* **Layman's Analogy**: Like an aircraft crash investigation board. No one is allowed to replace parts on the fleet until the flight data recorder is analyzed and the exact failure physics are reproduced in a wind tunnel.
* **How to Initiate**:
  * Auto-triggers when an error, test failure, exception, or unexpected behavior is reported.
  * Direct prompt: `Use systematic debugging to investigate why the contact form throws a 500 error on submit.`
* **Concrete Example**:
  * *User Prompt*: `The yarn filtering dropdown intermittently shows blank items on Safari.`
  * *Agent Behavior*: Refuses to guess CSS fixes. First inspects the network response on WebKit, isolates the issue to a `Set` iteration bug, writes a failing unit test, fixes the serialization, and re-verifies.

---

### diagnosing-bugs

* **Purpose**: Establishes a fast, automated feedback loop (a single command that reliably fails) for elusive, intermittent, or performance-related defects.
* **Description**: Focuses on creating an infallible reproduction harness. Automatically redacts all secrets/tokens from output. Once a tight red-green feedback command exists, uses bisection and instrumentation to pinpoint the exact failure point.
* **Layman's Analogy**: Like a master mechanic diagnosing a squeak that only happens at 45 mph on damp mornings. Instead of replacing random belts, they hook up sound sensors to the chassis and run the car on a dynamometer until the sensor lights up.
* **How to Initiate**:
  * Triggered by phrases: `diagnose this`, `debug this bug`, `performance regression`.
  * Direct prompt: `Diagnose why page transitions on mobile feel sluggish.`
* **Concrete Example**:
  * *User Prompt*: `Diagnose why our yarn denier search takes 2.4 seconds.`
  * *Agent Behavior*: Crafts a reproducible benchmark script (`npm run bench:search`), identifies unindexed regex matching on 10,000 items, and pinpoints line 42 as the bottleneck.

---

### verification-before-completion

* **Purpose**: Prohibits claiming that any task is complete, fixed, or passing without fresh, empirical terminal command output proving it.
* **Description**: The Iron Law: "Evidence before claims, always." Even if code changes look flawless, the agent cannot tell the user "All tests pass" or "The bug is fixed" unless it has actually executed the test suite in the current turn and inspected the exit code and output.
* **Layman's Analogy**: Like a bank teller counting cash out onto the counter in front of you under the camera before handing you the receipt, rather than just saying "Trust me, it's all in the envelope."
* **How to Initiate**:
  * Auto-triggers automatically before closing any ticket, finishing any PR, or declaring any bug resolved.
* **Concrete Example**:
  * *User Prompt*: `Fix the broken link in the footer and finish the task.`
  * *Agent Behavior*: Updates the footer link, immediately executes `npm run build` and `npm run test:e2e`, checks terminal output for `0 failures`, quotes the output, and only then confirms completion.

---

### webapp-testing

* **Purpose**: Executes automated end-to-end browser testing, UI verification, accessibility checks, and visual debugging using Playwright.
* **Description**: Drives local web applications inside headless or headed browser sessions. Can start local servers automatically, navigate pages, click buttons, fill out textile inquiry forms, capture full-page screenshots, inspect console logs, and verify responsive viewports.
* **Layman's Analogy**: Like having a dedicated human QA tester sitting beside you with a clipboard, opening Chrome, clicking every link on your website, typing weird characters into forms, and taking photos of layout glitches.
* **How to Initiate**:
  * Auto-triggers on tasks involving Playwright, UI verification, screenshot inspection, or browser automation.
  * Direct prompt: `Test the responsive mobile menu on iPhone 14 viewport and take a screenshot.`
* **Concrete Example**:
  * *User Prompt*: `Verify that submitting an empty contact form shows red error indicators on all required inputs.`
  * *Agent Behavior*: Executes a Python Playwright script targeting `http://localhost:3000/contact`, clicks Submit, waits for DOM mutations, verifies aria-invalid attributes, and captures `error-state.png`.

---

## 4. Design, UI & Frontend Aesthetics

### frontend-design

* **Purpose**: Elevates web interfaces into distinctive, production-grade visual designs while ruthlessly eliminating generic "AI slop" aesthetics.
* **Description**: Developed by Anthropic's design leads. Enforces intentional aesthetic choices grounded in the subject matter. Actively bans stereotypical AI design tells: generic warm cream or near-black backgrounds, cookie-cutter purple gradients, identical rounded SaaS cards, and boring system fonts. Establishes custom color tokens, expressive typography scales, asymmetric grids, and choreographed micro-interactions.
* **Layman's Analogy**: Like hiring an award-winning creative art director from Milan instead of buying a $19 generic WordPress template from 2018.
* **How to Initiate**:
  * Auto-triggers whenever UI components, web pages, landing sections, or CSS styling are generated or revised.
  * Direct prompt: `Design the hero and product showcase for our industrial polypropylene yarn catalog.`
* **Concrete Example**:
  * *User Prompt*: `Create the homepage hero section for Daman PolyThread.`
  * *Agent Behavior*: Avoids cliché generic gradients. Picks an industrial, precision-engineered aesthetic: high-contrast technical typography paired with rich textile-weave textures, subtle spool-winding geometric motifs, and responsive layout hierarchy tailored to B2B textile procurement executives.

---

### web-artifacts-builder

* **Purpose**: Packages complex, multi-component frontend applications into standalone, responsive HTML artifacts with state management, routing, and rich styling.
* **Description**: Bundles modern web stacks (React 18 + TypeScript + Vite/Parcel + Tailwind CSS + Radix/shadcn UI primitives) into clean, self-contained single-file outputs suitable for interactive previewing, stakeholder reviews, and rapid user testing.
* **Layman's Analogy**: Like an architect delivering a working miniature interactive 3D scale model of a planned building where the doors open and lights turn on, rather than showing static 2D paper sketches.
* **How to Initiate**:
  * Auto-triggers when asked for complex interactive web mockups, dashboards, or calculators.
  * Direct prompt: `Build an interactive yarn denier and tenacity calculation simulator artifact.`
* **Concrete Example**:
  * *User Prompt*: `Build an interactive thread strength calculator where clients can slide filament count and test tensile strength curves.`
  * *Agent Behavior*: Initializes component structure, wires interactive sliders with real-time SVG charting, bundles the code, and delivers a self-contained interactive artifact.

---

## 5. Research & External Documentation

### research

* **Purpose**: Offloads technical investigations, competitive comparisons, and specification lookups to an isolated background agent.
* **Description**: Frees up the primary session while an agent reads primary sources (official RFCs, library source code, developer specs, security advisories). Produces a cited, permanent markdown dossier in the repository without polluting your main conversation context.
* **Layman's Analogy**: Like a senior partner asking an associate to spend three hours in the law library researching precedent and leaving a two-page cited memo on their desk by 2 PM.
* **How to Initiate**:
  * Auto-triggers on research-heavy requests.
  * Direct prompt: `Research modern WebGL vs CSS-based yarn spool 3D rendering approaches for web performance.`
* **Concrete Example**:
  * *User Prompt*: `Research whether we should use Next.js App Router or Vite SSR for an SEO-focused textile export catalog.`
  * *Agent Behavior*: Spawns background agent, inspects official documentation and benchmarks, compiles findings into `docs/research/ssr-vs-ssg-evaluation.md` with trade-offs and recommendations.

---

### find-docs

* **Purpose**: Fetches real-time, version-specific API references, method signatures, and code examples for any library or framework.
* **Description**: Solves the AI hallucination problem for modern software libraries. LLM training data is perpetually outdated; `find-docs` overrides outdated memory by pulling live documentation for Tailwind CSS, Next.js, React 19, Prisma, Playwright, or Radix UI before code is written.
* **Layman's Analogy**: Like checking the latest 2026 building code manual before specifying wiring standards, instead of relying on memory of what the rules were four years ago.
* **How to Initiate**:
  * Auto-triggers whenever specific framework syntax, migration steps, or library APIs are needed.
  * Direct prompt: `Find docs on Lucide React icon dynamic imports in Vite.`
* **Concrete Example**:
  * *User Prompt*: `How do I configure custom color scales in Tailwind CSS v4?`
  * *Agent Behavior*: Pulls current Tailwind documentation directly, discovers the new CSS theme variable syntax, and applies the exact syntax rather than deprecated `tailwind.config.js` patterns.

---

### context7-cli

* **Purpose**: Operates the Context7 command-line interface to index libraries, query specific package docs, and resolve library IDs.
* **Description**: Provides direct terminal commands (`npx ctx7 docs <library> <query>`) to retrieve concise markdown summaries of libraries directly into your development workflow without launching a web browser.
* **Layman's Analogy**: Like having a dedicated terminal hotline directly into the documentation servers of every open-source repository on GitHub.
* **How to Initiate**:
  * Auto-triggers when mentions of `ctx7` or `context7` occur, or via terminal tool.
  * Direct prompt: `Use ctx7 to check how to configure Playwright webServer in playwright.config.ts.`
* **Concrete Example**:
  * *User Prompt*: `Look up the exact API signature for Playwright expect.toHaveScreenshot.`
  * *Agent Behavior*: Runs `npx ctx7 docs playwright toHaveScreenshot`, extracts current parameters, and applies them to the test spec.

---

## 6. Cognitive Focus & Communication Style

### i-have-adhd

* **Purpose**: Restructures all Claude output to be exceptionally high-signal, action-first, and ADHD-friendly.
* **Description**: Enforces 10 cognitive clarity rules:
  1. *Action first*: State what needs to be done on line 1.
  2. *Numbered steps*: Break multi-part work into strictly numbered sequences.
  3. *Restate state*: Briefly summarize current state across conversational turns.
  4. *Zero preamble*: Completely eliminates conversational filler ("Sure, I can help with that!", "Hope this helps!").
  5. *Suppress tangents*: Focus solely on the active decision.
  6. *Time estimates*: Provide realistic estimates for each step.
  7. *Visible wins*: Highlight accomplished milestones.
  8. *Concrete next action*: Close with one clear next prompt or action.
* **Layman's Analogy**: Like an executive assistant who hands you a color-coded index card with 3 numbered bullets and a highlighted checkbox, instead of sending a rambling 5-paragraph email.
* **How to Initiate**:
  * Slash command: `/i-have-adhd`
  * To disable: Say `stop adhd mode` or `normal mode`
* **Concrete Example**:
  * *User Prompt*: `/i-have-adhd`
  * *Agent Output*:
    ```markdown
    ADHD mode on.

    Next action: Create the navigation menu component.

    Steps:
    1. Scaffold src/components/Navbar.tsx (5 min)
    2. Add responsive drawer toggle (5 min)
    3. Run test: npm test navbar (2 min)

    Type 'go' to begin step 1.
    ```

---

## Recommended End-to-End Development Lifecycle

When building a major feature or redesigning pages for the **DamanPolyThread Website**, combine these skills into this tested pipeline:

```
┌──────────────────────────────────────────────────────────────────┐
│ 1. EXPLORATION & DISCOVERY                                       │
│    /ask-matt → brainstorming → /grill-with-docs                  │
│    Result: Solid domain understanding, ADRs, GLOSSARY.md         │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 2. SPECIFICATION & TICKETING                                     │
│    /to-spec → /to-tickets                                        │
│    Result: Concrete technical specification & tracer-bullet tasks│
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 3. DESIGN & ARCHITECTURE SPIKE                                   │
│    frontend-design → prototype → find-docs                       │
│    Result: Distinctive UI palette & validated technical APIs     │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 4. TDD IMPLEMENTATION                                            │
│    karpathy-guidelines → /implement → tdd                        │
│    Result: Clean, surgical, test-backed code at defined seams    │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ 5. VERIFICATION & QUALITY DEFENSE                                │
│    webapp-testing → systematic-debugging                         │
│    → verification-before-completion                              │
│    Result: Fresh empirical evidence, screenshots, green tests    │
└──────────────────────────────────────────────────────────────────┘
```

---

*Document generated automatically for DamanPolyThread Website.*
*Skill configurations verified against Claude Code CLI specification.*
