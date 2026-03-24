export const handoutSlides = [
  // ===== SECTION - Handout (Pause) =====
  {
    id: 'handout',
    theme: 'slide--dark',
    label: 'Handout',
    content: `
      <span class="slide-label presenter-only-text">&#9749; Handout &ndash; let's take 5 minutes to pause and check if we've understood everything</span>
      <h2 class="slide-title" style="margin-bottom:8px">Key Terms at a Glance</h2>
      <div class="pause-timer" id="pause-timer">
        <span class="pause-timer-icon">&#9749;</span>
        <span class="pause-timer-display" id="pause-timer-display">20:00</span>
        <span class="pause-timer-label">Break</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">AI / KI</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Software that mimics human intelligence &ndash; learns from data instead of fixed rules.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">LLM</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Large Language Model &ndash; a neural network trained on massive amounts of text. Predicts the most likely next word.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Token</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Smallest text unit for an LLM &ndash; approx. &frac34; of a word. Everything is broken into tokens, processed, and billed.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Context / Context Window</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">The "memory" of a conversation. Limited size &ndash; when full, older information is compressed or forgotten.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Agent</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">An LLM running in a loop: Think &rarr; Use tool &rarr; Check result &rarr; Repeat. Can solve tasks autonomously.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Agent Framework</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Software that controls the agent loop: Which LLM, which tools, which rules. Examples: OpenCode, Claude Code, Cursor.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">MCP</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Model Context Protocol &ndash; open standard for agent tools. Build once, use everywhere. The agent's toolbox.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Prompt / System Prompt</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Your input to the LLM. System Prompt = invisible instructions that control behavior (e.g. "You are a helpful assistant").</p>
        </div>
      </div>
      <p class="presenter-only-text" style="text-align:center;margin-top:12px;font-size:0.75rem;color:var(--color-text-on-dark-subdued);opacity:0.7">&#9749; Coffee break &ndash; keep this page open as a reference</p>
    `,
  },
];
