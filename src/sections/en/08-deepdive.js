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

  // ===== Recommendation: Sandbox & Security =====
  {
    id: 'deepdive-recommendation',
    theme: '',
    label: 'Recommendation',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Important</span>
      <h2 class="slide-title">Recommendation: Sandbox, Tokens &amp; Security</h2>
      <p class="slide-subtitle">Before you start &ndash; 3 rules that protect you from nasty surprises</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">&#128274; Always work in a Sandbox</h3>
          <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary);margin-bottom:8px;font-size:0.82rem;line-height:1.5">
            AI is <strong>not 100% predictable</strong>. An agent can delete files, change configs or run unexpected commands. Therefore: <strong>Only mount the project repo</strong>, not your home directory.
          </div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:6px">&#128272; Tokens &ndash; always project-specific</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.8rem">
            <li><span class="check">!</span><span><strong>No global tokens</strong> &ndash; Don&rsquo;t mount <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.72rem">~/.aws/credentials</code></span></li>
            <li><span class="check">!</span><span><strong>Project-specific tokens</strong> via env variables</span></li>
            <li><span class="check">!</span><span><strong>Read-only where possible</strong> &ndash; agents rarely need infra write access</span></li>
            <li><span class="check">!</span><span><strong>Token rotation</strong> &ndash; use short-lived bearer tokens</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:6px">&#128051; Run OpenCode in Docker</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Docker &ndash; isolated sandbox</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-comment"># Mount only the project folder</span>
<span class="code-function">docker run</span> -it --rm \\
  -v <span class="code-string">"\$(pwd)"</span>:/workspace \\
  -w /workspace \\
  -e <span class="code-property">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
  -e <span class="code-property">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> \\
  node:20 \\
  bash -c <span class="code-string">"npm i -g opencode-ai && opencode"</span>

<span class="code-comment"># What happens:</span>
<span class="code-comment"># - Only /workspace is visible (your project)</span>
<span class="code-comment"># - No access to host filesystem</span>
<span class="code-comment"># - Token only for this session</span>
<span class="code-comment"># - Container deleted after exit (--rm)</span></pre></div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.75rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Summary:</strong><br>
            &#10003; Only mount project repo, not <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">~</code> or <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">/</code><br>
            &#10003; Tokens via <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">-e</code> env var, not via volume<br>
            &#10003; <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">--rm</code> so nothing persists<br>
            &#10003; Commit results via Git, don&rsquo;t copy out via volume
          </div>
        </div>
      </div>
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


  // ===== Deep Dive: Remote OpenCode via Telegram =====
  {
    id: 'deepdive-remote',
    theme: 'slide--dark',
    label: 'Wanna see some unreal?',
    content: `
      <span class="slide-label">Deep Dive 6 &ndash; Bonus</span>
      <h2 class="slide-title" style="font-size:1.4rem">Wanna see some unreal? &#129327;</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">From idea to published npm package &rarr; <strong>control OpenCode from your phone</strong> &ndash; built with OpenCode.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2);margin-bottom:12px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">&#128337; What was built</h3>
            <div style="display:flex;flex-direction:column;gap:5px">
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; <strong style="color:var(--color-text-on-dark)">opencode-remote-telegram</strong> &ndash; published npm package</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Vibe Coding Mode &ndash; just type, no commands needed</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Inline keyboards for project &amp; model selection</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; /new_project &rarr; GitHub URL &rarr; git clone &rarr; done</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Token usage &amp; cost after every response</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; <strong style="color:var(--color-accent)">Control OpenCode from your smartphone</strong></div>
            </div>
          </div>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal &ndash; Setup (once)</div>
            <button class="copy-btn" data-copy="npm install -g @weisser-dev/opencode-remote-telegram&#10;opencode-remote-telegram start">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Install globally</span>
npm install -g @weisser-dev/opencode-remote-telegram

<span class="code-comment"># Start &rarr; setup wizard runs automatically on first launch</span>
opencode-remote-telegram start</pre></div>
          </div>
          <p style="margin-top:8px;font-size:0.72rem">
            <a href="https://github.com/weisser-dev/opencode-remote-telegram" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/weisser-dev/opencode-remote-telegram</a>
            &nbsp;&middot;&nbsp;
            <a href="https://blog.weisser.dev/projects/ai/2026/03/24/opencode-remote-telegram.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:underline">Blog post &rarr;</a>
          </p>
        </div>
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:10px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">&#128241; Telegram Commands (Vibe Coding Flow)</h3>
            <div style="display:flex;flex-direction:column;gap:4px">
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/list_projects</code> &rarr; pick project (inline button)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/list_models</code> &rarr; pick model (inline button)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/vibe_coding</code> &rarr; start session</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark);margin-top:2px"><em style="color:var(--color-text-on-dark-subdued)">then just type:</em> &ldquo;fix the auth bug&rdquo;</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px;border-top:1px solid rgba(255,255,255,0.08);padding-top:4px">
                &#129300; Let me have a look&hellip; &rarr; response streams &rarr; stats
              </div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/new_project</code> &rarr; GitHub URL &rarr; git clone</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/show_stats</code> &rarr; tokens, cost, duration</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/stop_coding</code> &rarr; end session</div>
            </div>
          </div>
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-bottom:4px">
              <strong style="color:var(--color-text-on-dark)">That&rsquo;s the point:</strong> No framework built from scratch. Take an existing concept, describe what you want &mdash; published npm package.
            </p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              Inspired by <a href="https://github.com/RoundTable02/remote-opencode" target="_blank" rel="noopener" style="color:var(--color-accent)">remote-opencode</a> (Discord variant).
            </p>
          </div>
        </div>
      </div>
    `,
  },
// ===== Deep Dive: OpenCode Agents =====
  {
    id: 'deepdive-agents',
    theme: 'slide--dark',
    label: 'Agents',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">OpenCode Agents &ndash; Specialized Assistants</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Primary agents to switch (Tab) + subagents invoked automatically</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Built-in Agents</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:10px">
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);font-size:0.78rem;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Build</strong> (Primary) &ndash; All tools. Default for development.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>Plan</strong> (Primary) &ndash; Read-only. Analysis without changes.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>General</strong> (Subagent) &ndash; Multi-step tasks in parallel.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>Explore</strong> (Subagent) &ndash; Fast codebase exploration.</div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Create custom agents</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/agents/review.md</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-property">description</span>: Code review without write access
<span class="code-property">mode</span>: subagent
<span class="code-property">model</span>: anthropic/claude-sonnet-4-20250514
<span class="code-property">permission</span>:
  <span class="code-property">edit</span>: deny
  <span class="code-property">bash</span>:
    <span class="code-string">"git diff"</span>: allow
    <span class="code-string">"grep *"</span>: allow
<span class="code-comment">---</span>
You are a code reviewer. Focus on security,
performance and maintainability.</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">JSON Config</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"agent"</span>: {
    <span class="code-property">"docs"</span>: {
      <span class="code-property">"description"</span>: <span class="code-string">"Writes docs"</span>,
      <span class="code-property">"mode"</span>: <span class="code-string">"subagent"</span>,
      <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-20250514"</span>,
      <span class="code-property">"permission"</span>: { <span class="code-property">"bash"</span>: <span class="code-string">"deny"</span> }
    }
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Pro Tips</h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.75rem;color:rgba(255,255,255,0.7)">
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#9889; <strong>Tab</strong> switches between primary agents</div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#64; <strong>@agent-name</strong> invokes subagent manually</div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#128274; Permissions per agent: <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">allow</code> / <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">ask</code> / <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">deny</code></div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#128176; Haiku for simple tasks = <strong>90% token savings</strong></div>
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:rgba(255,255,255,0.5)">
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-accent)">Docs: Agents</a> &bull; <a href="https://github.com/darrenhinde/OpenAgentsControl" target="_blank" rel="noopener" style="color:var(--color-accent)">OpenAgentsControl</a> &bull; <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent)">Claude Sub-Agents</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: OpenCode Skills =====
  {
    id: 'deepdive-skills-detail',
    theme: '',
    label: 'Skills',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">OpenCode Skills &ndash; Reusable Instructions</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">SKILL.md files the agent can load on-demand &ndash; like plugins for your project</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">How it works</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/skills/git-release/SKILL.md</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-property">name</span>: git-release
<span class="code-property">description</span>: Creates consistent releases
<span class="code-comment">---</span>

<span class="code-comment">## Was ich tue</span>
- Generate release notes from PRs
- Suggest version bump
- Output gh release create command

<span class="code-comment">## When to use me</span>
When preparing a tagged release.</pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">File locations</h3>
          <div style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem">
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Projekt:</strong> .opencode/skills/&lt;name&gt;/SKILL.md</div>
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Global:</strong> ~/.config/opencode/skills/&lt;name&gt;/SKILL.md</div>
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Kompatibel:</strong> .claude/skills/ oder .agents/skills/</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Skill ideas for your project</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>git-release</strong> &ndash; Create changelogs + releases</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>pr-review</strong> &ndash; Code review checklist</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>migration</strong> &ndash; DB migrations per team standard</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>test-patterns</strong> &ndash; Testing conventions of the project</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>deploy</strong> &ndash; Deployment steps for different envs</div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Control permissions</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"permission"</span>: {
    <span class="code-property">"skill"</span>: {
      <span class="code-string">"*"</span>: <span class="code-string">"allow"</span>,
      <span class="code-string">"internal-*"</span>: <span class="code-string">"deny"</span>,
      <span class="code-string">"experimental-*"</span>: <span class="code-string">"ask"</span>
    }
  }
}</pre></div>
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:var(--color-text-subdued)">
            <a href="https://opencode.ai/docs/skills/" target="_blank" rel="noopener" style="color:var(--color-primary)">Docs: Agent Skills</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Modell-Recommendationen =====
  {
    id: 'deepdive-models',
    theme: 'slide--dark',
    label: 'Modelle',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">Which Model for Which Task?</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Save tokens with task-specific model assignment &ndash; not everything needs Opus</p>
      <div style="margin-top:12px;overflow-x:auto">
        <table class="comparison" style="font-size:0.72rem;width:100%">
          <thead><tr><th>Task</th><th>Empfehlung</th><th>Why</th><th>Cost Factor</th></tr></thead>
          <tbody>
            <tr><td><strong>Complex Coding</strong></td><td style="color:var(--color-accent)">Claude Opus 4.6</td><td>Best reasoning, long contexts</td><td>$$</td></tr>
            <tr><td><strong>Standard Coding</strong></td><td style="color:var(--color-accent)">Claude Sonnet 4.6</td><td>Very good, 60% cheaper than Opus</td><td>$</td></tr>
            <tr><td><strong>Code Review</strong></td><td>Claude Sonnet 4.6</td><td>Read-only, no max reasoning needed</td><td>$</td></tr>
            <tr><td><strong>Write docs</strong></td><td>Claude Haiku 4.5</td><td>Fast, cheap, text quality sufficient</td><td>$</td></tr>
            <tr><td><strong>Explore / Search</strong></td><td>Haiku 4.5 / Kimi k2.5</td><td>Read-only, needs speed not quality</td><td>$</td></tr>
            <tr><td><strong>Title / Summary</strong></td><td>Haiku / MiniMax</td><td>Trivial tasks, almost free</td><td>&cent;</td></tr>
            <tr><td><strong>Brainstorming</strong></td><td>GPT-5 / Gemini 3.1</td><td>Creative, large context window</td><td>$</td></tr>
            <tr><td><strong>Local testing</strong></td><td>Ollama + Qwen 3.5</td><td>Free, local, no internet</td><td>Gratis</td></tr>
          </tbody>
        </table>
      </div>
      <div class="two-cols" style="margin-top:10px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.85rem;margin-bottom:4px">In practice: opencode.json</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Models per agent</div>
            <div class="code-body" style="padding:6px 10px;font-size:0.6rem"><pre style="margin:0">{
  <span class="code-property">"agent"</span>: {
    <span class="code-property">"build"</span>:   { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-sonnet-4-6"</span> },
    <span class="code-property">"plan"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"explore"</span>: { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"docs"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> }
  }
}</pre></div>
          </div>
        </div>
        <div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.75rem;color:rgba(255,255,255,0.7);line-height:1.4">
            <strong style="color:var(--color-accent)">Token saving tip:</strong> Haiku for Explore + Plan + Docs = <strong>80-90% less cost</strong> with same results. Opus/Sonnet only for build tasks where reasoning matters.
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:rgba(255,255,255,0.5)">
            <a href="https://opencode.ai/docs/models/" target="_blank" rel="noopener" style="color:var(--color-accent)">Docs: Models</a> &bull; <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">opencode models</code> shows all available models
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Best Practices Repo =====
  {
    id: 'deepdive-bestpractices',
    theme: '',
    label: 'Best Practices',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Open Source</span>
      <h2 class="slide-title" style="font-size:1.3rem">Awesome OpenCode &ndash; 108 Agents, 15 Skills, 18 MCPs</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">The most comprehensive collection for OpenCode &ndash; plus a CLI that sets up your project automatically</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:8px">What&rsquo;s inside?</h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.78rem">
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#129302; <strong>108 Agents</strong> in 10 categories (Core, Languages, Infra, Security, AI...)</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#127919; <strong>15 Skills</strong> (git-release, ci-pipeline, dependency-audit...)</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128268; <strong>18 curated MCP servers</strong> + live search of official MCP Registry</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128176; <strong>Smart Model Detection</strong> &ndash; recognizes 26+ models, auto-optimizes costs</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128218; <strong>Docs</strong> on Agents, Skills, MCP, Models, Rules, Permissions</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">One command &ndash; everything set up</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">npx</span> @weisser-dev/awesome-opencode

<span class="code-comment"># Analyzes your project (language, framework)</span>
<span class="code-comment"># Reads opencode.json: detects your models</span>
<span class="code-comment"># Asks interactively:</span>
<span class="code-string">"Agents?"</span>  <span class="code-comment"># 108 to choose from</span>
<span class="code-string">"Skills?"</span>  <span class="code-comment"># 15 to choose from</span>
<span class="code-string">"MCPs?"</span>    <span class="code-comment"># 18 + live registry</span>
<span class="code-string">"Optimize models?"</span> <span class="code-comment"># Auto-mapping</span>

<span class="code-comment"># Generates:</span>
<span class="code-comment"># .opencode/agents/*.md</span>
<span class="code-comment"># .opencode/skills/*/SKILL.md</span>
<span class="code-comment"># opencode.json (updated)</span>
<span class="code-comment"># AGENTS.md (generated)</span></pre></div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);text-align:center">
            <a href="https://github.com/weisser-dev/awesome-opencode" target="_blank" rel="noopener" style="display:inline-block;padding:8px 20px;border-radius:8px;background:var(--color-primary);color:#fff;text-decoration:none;font-size:0.85rem;font-weight:600">&#128279; weisser-dev/awesome-opencode</a>
            <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:6px">MIT &bull; Contributions welcome &bull; <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.65rem">npx @weisser-dev/awesome-opencode</code></p>
          </div>
        </div>
      </div>
    `,
  },
];

