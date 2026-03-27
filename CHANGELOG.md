# Changelog

All notable changes to the Agentic AI Workshop are documented here.

## [v1.9.9] – 2026-03-26

### Added
- **Version tracking**: `WORKSHOP_VERSION` constant saved to localStorage with progression data
- **"New content" badge**: Resume modal shows green badge when version changed (version diff + new slide count)
- **Version footer**: Modal shows `v1.9.9 • 125 slides` at bottom
- **Cost Calculator slide** (#cost-calculator): Token pricing for 9 models with 2048 game example, pricepertoken.com link
- **4 Deep Dive slides**: OpenCode Agents, Skills, Model Recommendations, Best Practices Repo

### Removed
- Old "Skills + Alle Links" slide (replaced by dedicated deep dives)

## [v1.9.6] – 2026-03-26

### Fixed
- **Slide internal scroll**: Slides now have fixed `height: 100vh` (was `min-height`) so `overflow-y: auto` creates actual scrollbars for long content. Wheel/trackpad scroll works within slides before navigating to next.
- **Arch Builder diagram overflow**: Container capped at `max-height: 60vh` with `overflow: auto`. Dropdown and title always visible, diagram scrolls if too tall.
- **Kiro Spec Stage**: All 3 columns (Requirements, Design, Implementation) visible in self-paced mode. Fix was inside `presenterMode`-only block and never ran in self-paced.
- **Wheel handler**: Correctly detects scrollable slides and allows trackpad/wheel scroll within content before navigating. Verified: 15 slides with internal scroll on 1280x800.

## [v1.9.5] – 2026-03-26

### Fixed
- **Wheel scroll on overflowing slides**: Slides with long content can now be scrolled internally. Only navigates to next/prev slide at top/bottom edge.
- **Kiro Spec Stage**: All 3 columns visible immediately in self-paced mode. Presenter mode retains step-by-step reveal.
- **Resume modal overlay**: Darker background (92% opacity + 8px blur) on mobile.

### Added
- **Security notice slide** in Hands-On (#handson-security) with Deep Dive Docker sandbox reference.

## [v1.9.4] – 2026-03-26

### Added
- **Security notice slide** in Hands-On (#handson-security): 3 questions for every tool, 4 worst-case examples (GitHub, Confluence, Shell, DB), Praktikant-Faustregel, Deep Dive Docker sandbox reference
- **Sandbox recommendation slide** in Deep Dive (#deepdive-recommendation): Docker example, token security, project-only mounting
- **"Build Your Own MCP" slide** (#build-mcp): Node.js MCP Server/Client, OpenCode integration, mcp.so link
- **mcp.so** linked everywhere as clickable URL

### Removed
- `agent-architecture` from Basics (covered in Agentic AI)

### Changed
- `llm-to-agent`: forward references to Basics + Agentic AI
- Custom smooth scroll (900ms easeInOutQuart, wheel handler 1s cooldown)

### Fixed
- Light-theme code elements: explicit rgba background instead of var(--color-code-bg)
- Deep-link scroll flicker
- `?uc=` auto-load compact layout

## [v1.9.2] – 2026-03-26

### Added
- **"Eigenen MCP bauen" slide** in Agentic AI section (DE + EN): Node.js MCP Server + Client code example, OpenCode integration, setup in 3 steps, use case tags, links to official MCP docs

### Changed
- **Custom smooth scroll**: Replaced CSS `scroll-snap` with JS-based scroll animation on desktop. 900ms duration with easeInOutQuart easing.
- **Wheel handler**: Mouse wheel navigates exactly one slide per scroll with 1s cooldown.
- **Architecture Builder**: Dropdown auto-generates on change. Centered CTA when empty, left-aligned after selection.
- **`llm-to-agent` slide**: Added forward references to Basics and Agentic AI sections

### Removed
- **`agent-architecture` slide** from Basics section (DE + EN) — content now covered in detail in the Agentic AI section

### Fixed
- **Deep-link scroll flicker**: App hidden until browser has jumped to target slide
- **Auto-load compact layout**: `?uc=` URL param correctly triggers compact layout

## [v1.9.1] – 2026-03-26

### Fixed
- **Deep-link scroll flicker**: Opening URLs like `?uc=anomaly#arch-builder` no longer visibly scrolls through all slides. App is hidden until browser has jumped to target.

### Updated
- README.md with all new sections, features and sources
- CHANGELOG.md created

## [v1.9.0] – 2026-03-26

### Fixed
- **Mobile tables**: All tables wrapped in scroll containers with `overflow-x: auto`. Table cells keep `white-space: nowrap` so words don't break mid-word (e.g. "Ökosystem" no longer becomes "Ökosy-stem").
- Swipe handler already ignores touches inside scrollable elements, so scrolling tables does NOT trigger slide navigation.

### Changed
- Architecture Builder: dropdown auto-generates on change (no button needed), centered CTA text when empty, left-aligned after selection
- Watermark simplified: single in-SVG text (`agentic-ai.weisser.dev → [Use Case] Agentic AI Architecture`), no extra overlay on PNG export
- Clean Link + PNG buttons with SVG icons replace old circular share widget

## [v1.8.0] – 2026-03-26

### Added
- **11 Mermaid.js architecture diagrams** with horizontal (LR) layout
- **User actors** on all diagrams (Developer, Customer, Employee, Admin, Cron, Log Stream)
- **3 headless use cases**: CVE Auto-Patching, Anomaly Detection, Daily System Health Check
- **Grouped dropdown** (`<optgroup>`): Lokal, Remote, Headless
- **Descriptive arrow labels** on all diagrams
- **Bidirectional arrows** fixed for read+write tools
- **Watermark** in live SVG inside largest subgraph box
- **Link button** copies URL with `?uc=` parameter
- **PNG export** at 2x resolution
- **URL deep-linking**: `?uc=voice#arch-builder` auto-selects and generates

### Changed
- Architecture Deep Dive slide: 2-column layout with all 7 layers per side
- Diagram container respects nav width: `max-width: calc(100vw - 240px)`

## [v1.7.0] – 2026-03-26

### Changed
- All Mermaid charts switched from top-down (TD) to left-right (LR)
- Diagram container horizontally scrollable with `overflow-x: auto`
- Share & Export buttons moved inside diagram footer

## [v1.6.0] – 2026-03-26

### Added
- **Mermaid.js** as dependency for professional SVG architecture diagrams
- 8 use-case presets fully defined as Mermaid flowcharts
- Colored subgraphs for deployment zones (Local, AWS, Azure, SaaS, On-Prem, Cloud)

### Removed
- Custom HTML div/arrow rendering replaced by Mermaid

## [v1.5.1] – 2026-03-26

### Fixed
- **Desktop navigation restored**: CSS brace mismatch from mobile overflow edit caused `.nav-sections { display: none !important }` globally. Fixed.
- Architecture Builder: replaced `.desktop-content`/`.mobile-content` with viewport-only `.arch-viewport-desktop`/`.arch-viewport-mobile` classes

### Changed
- Disruption slide: 3 scenarios (Build Yourself, Agent Builds, Agent IS) with decision criteria
- Resilience slide: added model updates, functional tests, monitoring, model pinning
- Section divider emoji: 🤖 → 🎯

## [v1.5.0] – 2026-03-26

### Added
- **New section: "Agentic AI"** between Diskussion and Hands-On with own nav entry
- "Was ist Agentic AI?" – Definition, Single vs Multi-Agent, Backend vs Frontend agents
- "Layer-Modelle im Vergleich" – Boomi (6), Vendia LAMP (4), Mezmo/AURA, Workshop model
- "Agenten könnten die Branche auf den Kopf stellen" – 3 development paradigms
- "Sind Agenten resilient?" – Non-determinism, enterprise readiness, guardrails

### Changed
- Architecture slides moved from AI Coding to new Agentic AI section
- Registered new section in main.js (imports, allSlides, sectionNames, sectionDefs)

## [v1.4.0] – 2026-03-26

### Added
- Architecture Builder: Dropdown + "Generate" button + fade-in animation
- Mobile fallback: "Desktop only" hint with use case list
- 9 missing source links added to Sources slide (DE + EN)

## [v1.3.0] – 2026-03-26

### Added
- "Agentic Architecture – die Schichten" deep dive with 5 layers
- "Baue deine Agenten-Architektur" interactive builder with 8 presets
- Renamed "Frontend" to "Interface" (covers chatbots, voice, webhooks)
- Chatbot Widget and Voice/Phone as interface options
- Dataiku article as source reference
- `setupArchBuilder()` JS logic with single/multi-select and live summary

## [v1.2.0] – 2026-03-26

### Fixed
- Mobile text overflow: all inline-styled elements respect `max-width: 100%`
- Table cells wrap text on mobile instead of `white-space: nowrap`
- Flex containers wrap on mobile

### Added
- **Progression Resume**: localStorage saves current slide on every change. On reload without hash, "Welcome back" modal with progress bar and Continue/Start over buttons.

## [v1.1.1] – 2026-03-26

### Fixed
- Mobile swipe conflict: horizontal swipes inside scrollable elements (code blocks, tables) no longer trigger slide navigation
- All inline grids forced to single column on mobile (`grid-template-columns: 1fr !important`)
- Vertical scrolling preserved on slides with overflow
- Tiny text (<0.7rem) bumped to readable size on mobile

## [v1.1.0] – 2026-03-25

### Added
Based on workshop feedback from 8 participants:

**Geschichte section:**
- "Was bedeutet GPT?" – G(enerative) P(re-trained) T(ransformer) explained
- "Warum lernt die KI nicht aus meinen Fragen?" – Training vs. Inference

**Basics section:**
- "Wie lernt ein neuronales Netz?" – Spam detection example step-by-step
- "Warum KI manchmal dumm antwortet" – Car wash problem, Common Sense limits

**Hands-On section:**
- "Warum npm? Was ist Node.js?" – Package manager comparison, npm commands, debugging
- "Was ist Vite?" – Build tool explained, free hosting, Cloudflare Pages guide
- "Terminal, Dev-Server & Chrome Dev Tools" – Common pitfalls, F12, copy errors to agent
- "OpenCode starten" – 3-column layout: Workshop, Enterprise, Private (Claude Code recommendation)

## [v1.0.0] – 2026-03-24

### Initial Release
- Full workshop presentation with 100+ slides in DE and EN
- 10 sections: Intro, Geschichte, KI–Internet 2.0, Basics, Handout, AI Coding, Diskussion, Hands-On, Deep Dive, Abschluss
- Presenter Mode with timers, confetti, discussion rounds
- Self-Paced Mode with quizzes
- Mobile app mode with swipe navigation
- Built entirely with OpenCode + Claude via Amazon Bedrock
