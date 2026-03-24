export const deepDiveSlides = [
  // ===== SECTION DIVIDER - Deep Dive =====
  {
    id: 'section-deepdive',
    theme: 'slide--primary slide--divider',
    label: 'Deep Dive',
    content: `
      <div class="divider-number">&#128300;</div>
      <h2 class="slide-title">Deep Dive</h2>
      <p class="slide-subtitle">Tasks, resources, and the path to a self-improving system</p>
    `,
  },

  // ===== Deep Dive: MCP - Playwright =====
  {
    id: 'deepdive-mcp',
    theme: 'slide--dark',
    label: 'Connect MCP',
    content: `
      <span class="slide-label">Deep Dive 1</span>
      <h2 class="slide-title">Connect your first MCP</h2>
      <p class="slide-subtitle">We talked about MCP as a toolbox &ndash; now let&rsquo;s use one: <strong>Playwright MCP</strong></p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:12px">What is Playwright MCP?</h3>
          <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:16px">
            An MCP server by <strong>Microsoft</strong> that gives OpenCode real browser capabilities: open web pages, click, fill out forms, take screenshots, test &ndash; all via prompt.
          </p>
          <div class="code-block" style="margin-bottom:16px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; Add MCP</div>
            <button class="copy-btn" data-copy='{ "mcp": { "playwright": { "type": "local", "command": ["npx", "@playwright/mcp@latest"], "enabled": true } } }'>&#128203; Copy</button>
            <div class="code-body"><pre style="margin:0"><span class="code-comment">// Add under "mcp" in opencode.json:</span>
<span class="code-key">"mcp"</span>: {
  <span class="code-key">"playwright"</span>: {
    <span class="code-key">"type"</span>: <span class="code-string">"local"</span>,
    <span class="code-key">"command"</span>: [<span class="code-string">"npx"</span>, <span class="code-string">"@playwright/mcp@latest"</span>],
    <span class="code-key">"enabled"</span>: <span class="code-value">true</span>
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Try it out</h3>
          <div class="code-block" style="margin-bottom:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="Open https://example.com and take a screenshot. Then fill out the search field and click Submit.">&#128203; Copy</button>
            <div class="code-body" style="padding:12px 16px"><pre style="margin:0"><span class="code-string">"Open https://example.com and take
a screenshot. Then fill out the
search field and click Submit."</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:12px">What can OpenCode do with it?</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#127912; <strong>Screenshots</strong> &ndash; Visually analyze web pages
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128270; <strong>Web Scraping</strong> &ndash; Extract data from pages
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#9989; <strong>E2E Tests</strong> &ndash; Write automated UI tests
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128196; <strong>Forms</strong> &ndash; Automatically fill out pages
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128187; <strong>Debugging</strong> &ndash; Read console logs and network requests
            </div>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">29,000+ Stars</strong> on GitHub &ndash; the most popular MCP server of all. Works without a vision model via the Accessibility Tree.
            </p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Task:</strong> Configure Playwright MCP in your project and have OpenCode open and describe a website of your choice. Bonus: Have it write an E2E test.
            </p>
          </div>
          <p style="margin-top:8px;font-size:0.75rem">
              <a href="https://github.com/microsoft/playwright-mcp" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/microsoft/playwright-mcp</a>
              &nbsp;&middot;&nbsp;<a href="https://opencode.ai/docs/de/mcp-servers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/mcp-servers</a>
            </p>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Sub-Agents =====
  {
    id: 'deepdive-subagents',
    theme: 'slide--dark',
    label: 'Build Sub-Agents',
    content: `
      <span class="slide-label">Deep Dive 2</span>
      <h2 class="slide-title">Build your first Sub-Agent</h2>
      <p class="slide-subtitle">We talked about Sub-Agents &ndash; now let&rsquo;s build some. And: <strong>The system improves itself.</strong></p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Way 1: OpenCode Agents</h3>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:10px">
            You define agents as Markdown files with system prompt, model, and rules.
          </p>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/agents/reviewer.md</div>
            <button class="copy-btn" data-copy="---\ndescription: Code Review Agent\nmodel: anthropic/claude-sonnet-4-6\n---\n\nYou are a Code Reviewer.\nCheck the code for:\n- Security Issues\n- Performance\n- Best Practices\n\nBe direct and constructive.">&#128203; Copy</button>
            <div class="code-body"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-key">description</span>: <span class="code-string">Code Review Agent</span>
<span class="code-key">model</span>: <span class="code-string">anthropic/claude-sonnet-4-6</span>
<span class="code-comment">---</span>

You are a Code Reviewer.
Check the code for:
- Security Issues
- Performance
- Best Practices</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Way 2: OpenAgentsControl</h3>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-bottom:6px">
            Full agent framework: Coder, Tester, Reviewer, ContextScout &ndash; with Approval Gates.
          </p>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/agents</a>
            &nbsp;&middot;&nbsp;<a href="https://github.com/darrenhinde/OpenAgentsControl" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">OpenAgentsControl</a>
          </p>
        </div>
        <div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:12px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">&#128260; The system improves itself</h3>
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              Remember: We wrote an <strong>AGENTS.md</strong>, then built the game again &ndash; and it was better. The exact same principle: Write agents, test them, improve their prompts, write sub-agents that check each other. <strong>A self-optimizing system.</strong>
            </p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:12px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Task:</strong> Create a <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px">reviewer.md</code> agent in your project. Have it review your 2048 code. Then: Improve the prompt based on the result.
            </p>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong>&#128293; Extreme Sub-Agents?</strong> Check out what&rsquo;s possible &ndash; a curated collection of complex agent setups:
            </p>
            <p style="font-size:0.75rem;margin-top:4px">
              <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/VoltAgent/awesome-claude-code-subagents</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: OpenCode Web =====
  {
    id: 'deepdive-web',
    theme: 'slide--dark',
    label: 'OpenCode Web',
    content: `
      <span class="slide-label">Deep Dive 3</span>
      <h2 class="slide-title" style="font-size:1.5rem">OpenCode Web &ndash; your local ChatGPT</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Instead of ChatGPT &ndash; use OpenCode Web. Runs locally, has access to your project.</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128172; <strong>Chat with context</strong> &ndash; Understands your entire codebase
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128269; <strong>Research</strong> &ndash; "How does our auth system work?"
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128218; <strong>Learning</strong> &ndash; "Explain this pattern to me"
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128274; <strong>Local</strong> &ndash; Data stays on your machine
            </div>
          </div>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/web</a>
          </p>
        </div>
        <div>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <button class="copy-btn" data-copy="opencode web">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px"><pre style="margin:0"><span class="code-comment"># Start Web UI</span>
opencode web</pre></div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Tip:</strong> Perfect for the workshop &ndash; questions about the material? Ask OpenCode Web.
            </p>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Task:</strong> Start <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">opencode web</code> and ask: "Explain the game logic of my 2048."
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Custom Commands =====
  {
    id: 'deepdive-commands',
    theme: 'slide--dark',
    label: 'Commands',
    content: `
      <span class="slide-label">Deep Dive 4</span>
      <h2 class="slide-title" style="font-size:1.5rem">Custom Commands &ndash; Code Review at the push of a button</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Define recurring tasks once &ndash; execute them anytime</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div class="code-block" style="margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/commands/review.md</div>
            <button class="copy-btn" data-copy="---\ndescription: Perform Code Review\n---\n\nPerform a code review:\n\n1. Check all changed files (git diff)\n2. Look for Security Issues\n3. Check Performance and Best Practices\n4. Create a summary\n\nBe direct, constructive and specific.">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.8rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-key">description</span>: <span class="code-string">Code Review</span>
<span class="code-comment">---</span>

Perform a code review:
1. Check changed files (git diff)
2. Security Issues, Performance, Best Practices
3. Create a summary</pre></div>
          </div>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Execute</div>
            <button class="copy-btn" data-copy="/review">&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px"><pre style="margin:0"><span class="code-value">/review</span></pre></div>
          </div>
        </div>
        <div>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/test</strong> &ndash; Write tests for changed files
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/refactor</strong> &ndash; Refactor to standards
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/docs</strong> &ndash; Document the API
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/security</strong> &ndash; Security audit
            </div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Key point:</strong> Commands also run in CI/CD &ndash; code review on every PR.
            </p>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Task:</strong> Create <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">.opencode/commands/review.md</code> and run <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">/review</code>.
            </p>
          </div>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/de/commands/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/commands</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Skills =====
  {
    id: 'deepdive-skills',
    theme: 'slide--dark',
    label: 'Skills',
    content: `
      <span class="slide-label">Deep Dive 5</span>
      <h2 class="slide-title" style="font-size:1.5rem">Agent Skills + All Links</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Skills = specialized knowledge on demand. Plus: AGENTS.md &rarr; Agents &rarr; Commands &rarr; Skills &rarr; MCP &ndash; <strong>it improves itself.</strong></p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128295; <strong>Testing</strong> &ndash; Knows how to write tests
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128640; <strong>Deploy</strong> &ndash; Set up CI/CD pipelines
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128196; <strong>Migration</strong> &ndash; Database migrations
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128209; <strong>Custom</strong> &ndash; Your own workflows
            </div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">&#128260;</strong> AGENTS.md &rarr; better code &rarr; Sub-Agents &rarr; Commands &rarr; Skills &rarr; MCP. <strong>Each layer makes the system better.</strong>
            </p>
          </div>
        </div>
        <div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark);text-decoration:none;font-size:0.8rem;display:block">
              &#128172; <strong>OpenCode Web</strong> <span style="color:var(--color-text-on-dark-subdued)">&ndash; Local ChatGPT</span>
            </a>
            <a href="https://opencode.ai/docs/de/commands/" target="_blank" rel="noopener" style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark);text-decoration:none;font-size:0.8rem;display:block">
              &#9889; <strong>Commands</strong> <span style="color:var(--color-text-on-dark-subdued)">&ndash; Automate tasks</span>
            </a>
            <a href="https://opencode.ai/docs/de/mcp-servers/" target="_blank" rel="noopener" style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark);text-decoration:none;font-size:0.8rem;display:block">
              &#128268; <strong>MCP Server</strong> <span style="color:var(--color-text-on-dark-subdued)">&ndash; Connect tools</span>
            </a>
            <a href="https://opencode.ai/docs/de/skills/" target="_blank" rel="noopener" style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark);text-decoration:none;font-size:0.8rem;display:block">
              &#128218; <strong>Skills</strong> <span style="color:var(--color-text-on-dark-subdued)">&ndash; Load specialized knowledge</span>
            </a>
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark);text-decoration:none;font-size:0.8rem;display:block">
              &#129302; <strong>Agents</strong> <span style="color:var(--color-text-on-dark-subdued)">&ndash; Build your own agents</span>
            </a>
          </div>
        </div>
      </div>
    `,
  },
  // ===== Deep Dive: Remote OpenCode via Telegram =====
  {
    id: 'deepdive-remote',
    theme: 'slide--dark',
    label: 'Wanna see some unreal?',
    content: `
      <span class="slide-label">Deep Dive 6 &ndash; Bonus</span>
      <h2 class="slide-title" style="font-size:1.4rem">Wanna see some unreal? &#129327;</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Forked an existing project &rarr; added Telegram support &rarr; <strong>control OpenCode from your phone</strong> &ndash; in ~1 hour.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2);margin-bottom:12px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">&#128337; What happened in ~1 hour</h3>
            <div style="display:flex;flex-direction:column;gap:5px">
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Forked <strong style="color:var(--color-text-on-dark)">remote-opencode</strong> (Discord bot &rarr; Telegram)</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Vibe Coding Mode &ndash; just type, no /command needed</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; /sps &amp; /lm &ndash; one-tap project &amp; model switching</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Token usage, cost &amp; branch after every response</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Voice messages via Telegram &#127908;</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; <strong style="color:var(--color-accent)">Control OpenCode from your smartphone</strong></div>
            </div>
          </div>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal &ndash; Setup (once)</div>
            <button class="copy-btn" data-copy="git clone https://github.com/weisser-dev/remote-opencode-telegram.git&#10;cd remote-opencode-telegram&#10;npm install && npm run build && npm link&#10;remote-opencode configure&#10;remote-opencode telegram start">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Clone, build, link globally</span>
git clone https://github.com/weisser-dev/remote-opencode-telegram.git
cd remote-opencode-telegram &amp;&amp; npm install &amp;&amp; npm run build &amp;&amp; npm link

<span class="code-comment"># Configure once (bot token, projects, model)</span>
remote-opencode configure

<span class="code-comment"># Start the bot</span>
remote-opencode telegram start</pre></div>
          </div>
        </div>
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:10px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">&#128241; Telegram Commands (Vibe Coding Flow)</h3>
            <div style="display:flex;flex-direction:column;gap:4px">
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/sps</code> &rarr; pick project (<code>/sp1</code>, <code>/sp2</code> &ndash; one tap)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/lm</code> &rarr; pick model (<code>/sm1</code>, <code>/sm2</code> &ndash; one tap)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/vibe_coding</code> &rarr; start session</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark);margin-top:2px"><em style="color:var(--color-text-on-dark-subdued)">then just type:</em> &ldquo;fix the auth bug&rdquo;</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px;border-top:1px solid rgba(255,255,255,0.08);padding-top:4px">
                After each response: tokens, cost, branch, model
              </div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/stop_coding</code> &rarr; end session</div>
            </div>
          </div>
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-bottom:4px">
              <strong style="color:var(--color-text-on-dark)">That&rsquo;s the point:</strong> No framework built from scratch. Take an existing project, AI tells you what to change, done in 1 hour.
            </p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              This is exactly what we mean by <em style="color:var(--color-accent)">AI-Assisted Development</em>.
            </p>
          </div>
          <p style="margin-top:8px;font-size:0.72rem">
            <a href="https://github.com/weisser-dev/remote-opencode-telegram" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/weisser-dev/remote-opencode-telegram</a>
            &nbsp;&middot;&nbsp;<span style="color:var(--color-text-on-dark-subdued)">v1.5.1</span>
          </p>
        </div>
      </div>
    `,
  },
];

