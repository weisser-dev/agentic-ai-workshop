export const aiCodingSlides = [
  // ===== SECTION DIVIDER - AI Assisted Coding =====
  {
    id: 'section-coding',
    theme: 'slide--primary slide--divider',
    label: 'AI Coding',
    content: `
      <div class="divider-number">&#128187;</div>
      <h2 class="slide-title">AI Assisted Coding</h2>
      <p class="slide-subtitle">Now that we understand the basics &ndash; how do we use this for programming?</p>
    `,
  },

  // ===== The Beginnings =====
  {
    id: 'coding-origins',
    theme: 'slide--dark',
    label: 'Origins',
    content: `
      <span class="slide-label">Evolution</span>
      <h2 class="slide-title">The Beginnings</h2>
      <p class="slide-subtitle">From copy-paste in ChatGPT to autonomous coding agents</p>
      <div class="timeline" style="margin-top:20px">
        <div class="timeline-item">
          <div class="timeline-title">2023 &ndash; Copy-Paste Era</div>
          <div class="timeline-text">Everyone copies code into ChatGPT: "Does this work?" "Extend this with XYZ." Back and forth between browser and IDE. Works &ndash; but cumbersome.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2023/24 &ndash; IDE Integration</div>
          <div class="timeline-text"><strong>GitHub Copilot</strong>, <strong>Tabnine</strong>, <strong>Codeium</strong> &ndash; Autocomplete directly in the IDE. No more copying. Suggestions while you type. Tab to accept.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2024/25 &ndash; Chat in the IDE</div>
          <div class="timeline-text"><strong>Cursor</strong>, <strong>Continue</strong>, <strong>Windsurf</strong> &ndash; IDE forks with built-in chat. Context from the project flows in automatically. No more explaining what the project is.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2025 &ndash; MCP Connects Everything</div>
          <div class="timeline-text">Model Context Protocol as a standard. The IDE talks to Confluence, Jira, databases &ndash; the agent has access to everything it needs.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title" style="color:var(--color-accent)">2025/26 &ndash; Autonomous Agents</div>
          <div class="timeline-text"><strong>Claude Code</strong>, <strong>OpenCode</strong>, <strong>Codex</strong> &ndash; Terminal-based agents with agents.md. Read, write, test, commit. Autonomous. In the background.</div>
        </div>
      </div>
    `,
  },

  // ===== The Tool Zoo =====
  {
    id: 'tool-zoo',
    theme: '',
    label: 'Tool Zoo',
    content: `
      <span class="slide-label">AI Assisted Coding</span>
      <h2 class="slide-title">The Tool Zoo</h2>
      <p class="slide-subtitle">Where there's a market, there's competition &ndash; as always, everyone claims to be the best:</p>
      <div class="cards" style="grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px">
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/github-favicon.svg" alt="GitHub Copilot" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">GitHub Copilot</div>
          <div class="card-text" style="font-size:0.75rem">Microsoft &middot; IDE Plugin<br>Autocomplete + Chat</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/anthropic-favicon.ico" alt="Claude Code" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Claude Code</div>
          <div class="card-text" style="font-size:0.75rem">Anthropic &middot; Terminal<br>Autonomous Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/cursor-favicon.ico" alt="Cursor" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Cursor</div>
          <div class="card-text" style="font-size:0.75rem">VS Code Fork<br>Chat + Agent + Composer</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/windsurf-favicon.ico" alt="Windsurf" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Windsurf</div>
          <div class="card-text" style="font-size:0.75rem">Codeium &middot; VS Code Fork<br>Cascade Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/continue-favicon.png" alt="Continue" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Continue</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; IDE Plugin<br>Multi-Model</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/tabnine-favicon.ico" alt="Tabnine" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Tabnine</div>
          <div class="card-text" style="font-size:0.75rem">Enterprise &middot; On-Prem<br>Code Completion</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/opencode-favicon.ico" alt="OpenCode" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">OpenCode</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; Terminal<br>Multi-Provider Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/openai-logo.svg" alt="Codex" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Codex</div>
          <div class="card-text" style="font-size:0.75rem">OpenAI &middot; Cloud Agent<br>Sandboxed Execution</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/google-favicon.ico" alt="Gemini CLI" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Gemini CLI</div>
          <div class="card-text" style="font-size:0.75rem">Google &middot; Terminal<br>Open Source Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/gitlab-favicon.ico" alt="GitLab Duo" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">GitLab Duo</div>
          <div class="card-text" style="font-size:0.75rem">GitLab &middot; Native<br>Code Suggestions + Chat</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/kiro-favicon.ico" alt="Kiro" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Kiro</div>
          <div class="card-text" style="font-size:0.75rem">AWS &middot; Spec-Driven<br>Requirements &rarr; Code</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/roocode-icon.png" alt="Roo Code" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Roo Code</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; VS Code<br>Spec-Driven Alternative</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/zed-favicon.png" alt="Zed" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Zed</div>
          <div class="card-text" style="font-size:0.75rem">Rust-based &middot; Editor<br>Native AI Assistant</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/openclaw-favicon.svg" alt="OpenClaw" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">OpenClaw</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; Multi-Channel<br>Personal Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/augmentcode-favicon.ico" alt="Augment" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Augment</div>
          <div class="card-text" style="font-size:0.75rem">Enterprise &middot; IDE Plugin<br>Codebase-aware AI</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/bolt-favicon.svg" alt="Bolt" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Bolt / v0</div>
          <div class="card-text" style="font-size:0.75rem">Stackblitz / Vercel<br>App via Prompt in Browser</div>
        </div>
      </div>
    `,
  },

  // ===== Tool Recommendation Enterprise =====
  {
    id: 'tool-enterprise',
    theme: 'slide--dark',
    label: 'Enterprise Tools',
    content: `
      <span class="slide-label">Tool Recommendation</span>
      <h2 class="slide-title" style="font-size:1.5rem">Open Source Tool Stack for Enterprises</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Three tools that cover everything &ndash; terminal, IDE and chat</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">The Advantages</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128268; <strong>Provider-independent</strong> &ndash; OpenAI, Anthropic, AWS Bedrock, Azure, local models &ndash; all via config
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128176; <strong>No license costs</strong> &ndash; Open source, no seats, no subscriptions
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128101; <strong>Large community</strong> &ndash; Active development, fast updates, transparent roadmap
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128640; <strong>CI/CD-ready</strong> &ndash; Commands and agents reusable in pipelines
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#127959; <strong>Enterprise &amp; on-prem</strong> &ndash; Configs for SSO, proxy, private endpoints
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128274; <strong>No vendor lock-in</strong> &ndash; Switch LLM providers at any time
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">The Tools</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#128172; Open WebUI</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">Self-hosted chat interface. ChatGPT alternative for teams &ndash; any LLM, RAG, tools and MCP.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://openwebui.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">openwebui.com</a> &middot; <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#129302; OpenCode</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">Terminal-based agent. Agentic development, sub-agents, MCP, commands, skills. For power users and CI/CD.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://opencode.ai" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai</a> &middot; <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#128187; Continue</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">IDE plugin (VS Code, JetBrains). Autocomplete, chat, edit, MCP &ndash; with any provider. Low barrier entry.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://continue.dev" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">continue.dev</a> &middot; <a href="https://github.com/continuedev/continue" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Bottom line:</strong> Terminal + IDE + Chat &ndash; fully covered. All three open source, provider-independent, MCP-capable, self-hostable.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Vibe Coding & the Tools =====
  {
    id: 'vibe-coding',
    theme: '',
    label: 'Vibe Coding',
    content: `
      <span class="slide-label">AI Assisted Coding</span>
      <h2 class="slide-title">Vibe Coding</h2>
      <p class="slide-subtitle">You describe what you want, the AI builds it. You don't necessarily understand the code &ndash; but it works.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.85rem;line-height:1.6">
              &#127925; <strong>Vibe Coding</strong> &ndash; Coined by Andrej Karpathy (Feb. 2025). Collins Dictionary Word of the Year 2025. Describes the feeling: You set the direction, the AI codes, you "feel" whether it's right.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Two Approaches</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem;line-height:1.5"><strong style="color:var(--color-primary)">Agent-Driven</strong> (agents.md)<br><span style="color:var(--color-text-subdued)">Agent receives behavioral rules and solves tasks autonomously. Flexible, but less predictable.</span></p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem;line-height:1.5"><strong style="color:var(--color-primary)">Spec-Driven</strong> (Kiro, Roo Code)<br><span style="color:var(--color-text-subdued)">Write the specification first, then implement. More structured, traceable, testable.</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">The Tools</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <a href="https://kiro.dev" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Kiro</strong> (AWS) &ndash; Spec-Driven Development. First requirements, then design, then code. <span style="font-size:0.75rem;color:var(--color-primary)">kiro.dev &rarr;</span></p>
            </a>
            <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Roo Code</strong> (Open Source) &ndash; Spec-Driven alternative. VS Code Extension. Community-driven. <span style="font-size:0.75rem;color:var(--color-primary)">GitHub &rarr;</span></p>
            </a>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem;line-height:1.5"><strong>Claude Code / OpenCode</strong> &ndash; Agent-Driven. agents.md + autonomous execution.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem;line-height:1.5"><strong>Cursor / Copilot</strong> &ndash; Hybrid. Chat + autocomplete + partial agent capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Spec-Driven Development =====
  {
    id: 'spec-driven',
    theme: 'slide--dark',
    label: 'Spec-Driven',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Spec-Driven Development</h2>
      <p class="slide-subtitle">Specify first, then generate &ndash; and whether spec or agent: both are "Vibe Coding"</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">How It Works (Kiro)</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Spec-Driven Flow
            </div>
            <div class="code-body"><pre><span class="code-number">1.</span> <span class="code-keyword">Requirements</span>
   <span class="code-string">User Story + Acceptance Criteria</span>
   <span class="code-comment">// AI helps with writing</span>

<span class="code-number">2.</span> <span class="code-keyword">Design</span>
   <span class="code-string">Technical Design Document</span>
   <span class="code-comment">// Architecture, APIs, Data Model</span>

<span class="code-number">3.</span> <span class="code-keyword">Implementation</span>
   <span class="code-string">Code is generated against the spec</span>
   <span class="code-comment">// Automatic, traceable</span>

<span class="code-number">4.</span> <span class="code-keyword">Validation</span>
   <span class="code-string">Tests are derived from the spec</span>
   <span class="code-comment">// Spec = Single Source of Truth</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">The Benefits</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Traceable</strong> &ndash; Every line of code can be traced back to a requirement</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Testable</strong> &ndash; Tests are generated directly from the spec, not added as an afterthought</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Reviewable</strong> &ndash; You review the spec, not 500 lines of generated code</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Reproducible</strong> &ndash; Same spec = same code. Less "black box" feeling.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Onboarding</strong> &ndash; New developers read the spec, not the code</span></li>
          </ul>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Agent vs. Spec &ndash; not an either/or:</strong> Spec-Driven for new features with clear requirements. Agent-Driven for refactoring, bugfixes, exploratory tasks. Both are "Vibe Coding" &ndash; just with different degrees of structure.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Spec-Driven Example =====
  {
    id: 'spec-example',
    theme: '',
    label: 'Spec Example',
    content: `
      <span class="slide-label">Example</span>
      <h2 class="slide-title">Spec-Driven in Action</h2>
      <p class="slide-subtitle">Prompt: "Build a user endpoint with pagination" &ndash; Kiro generates 3 files:</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:16px">
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            requirements.md
          </div>
          <div class="code-body" style="font-size:0.75rem;line-height:1.5"><pre><span class="code-comment">## User Story</span>
<span class="code-string">As an API consumer I want to
retrieve user data with pagination.</span>

<span class="code-comment">## Acceptance Criteria</span>
<span class="code-keyword">WHEN</span> GET /users?page=1&size=20
<span class="code-keyword">THEN</span> return max 20 users
<span class="code-keyword">AND</span> totalPages in response
<span class="code-keyword">AND</span> totalElements in response

<span class="code-keyword">WHEN</span> page > totalPages
<span class="code-keyword">THEN</span> empty list, no error

<span class="code-keyword">WHEN</span> size > 100
<span class="code-keyword">THEN</span> cap at 100</pre></div>
        </div>
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            design.md
          </div>
          <div class="code-body" style="font-size:0.75rem;line-height:1.5"><pre><span class="code-comment">## Architecture</span>
<span class="code-string">Spring Boot + JPA</span>
<span class="code-string">3-Layer: Controller, Service, Repo</span>

<span class="code-comment">## API Design</span>
<span class="code-keyword">GET</span> /api/v1/users
  <span class="code-property">?page</span>=0  <span class="code-comment">(default)</span>
  <span class="code-property">&size</span>=20 <span class="code-comment">(default, max 100)</span>

<span class="code-comment">## Response</span>
{
  <span class="code-property">"content"</span>: [User],
  <span class="code-property">"page"</span>: <span class="code-number">0</span>,
  <span class="code-property">"size"</span>: <span class="code-number">20</span>,
  <span class="code-property">"totalPages"</span>: <span class="code-number">5</span>,
  <span class="code-property">"totalElements"</span>: <span class="code-number">98</span>
}</pre></div>
        </div>
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            tasks.md
          </div>
          <div class="code-body" style="font-size:0.75rem;line-height:1.5"><pre><span class="code-comment">## Implementation Tasks</span>

<span class="code-keyword">&#9744; Task 1:</span> UserEntity
  <span class="code-string">JPA Entity + Flyway Migration</span>
  <span class="code-comment">Dependency: none</span>

<span class="code-keyword">&#9744; Task 2:</span> UserRepository
  <span class="code-string">PagingAndSortingRepository</span>
  <span class="code-comment">Dependency: Task 1</span>

<span class="code-keyword">&#9744; Task 3:</span> UserService
  <span class="code-string">Pagination + size limit</span>
  <span class="code-comment">Dependency: Task 2</span>

<span class="code-keyword">&#9744; Task 4:</span> UserController
  <span class="code-string">GET /api/v1/users</span>
  <span class="code-comment">Dependency: Task 3</span>

<span class="code-keyword">&#9744; Task 5:</span> Tests
  <span class="code-string">Unit + Integration Tests</span>
  <span class="code-comment">Dependency: Task 4</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-primary)">The advantage:</strong> Before a single line of code is written, requirements, design, and tasks are documented. Every task is traceable to a requirement. Tests are derived from the spec &ndash; not invented after the fact.
        </p>
      </div>
    `,
  },

  // ===== Agentic AI Development =====
  {
    id: 'agentic-dev',
    theme: 'slide--dark',
    label: 'Agentic Dev',
    content: `
      <span class="slide-label">In Comparison</span>
      <h2 class="slide-title">Agentic AI Development</h2>
      <p class="slide-subtitle">Same task, different approach &ndash; the agent plans, decomposes, and works autonomously</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Prompt: "Build a user endpoint with pagination"</h3>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:8px">
            No requirements document, no upfront design. The agent <strong>plans on its own</strong>:
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Agent Thinking &amp; Planning
            </div>
            <div class="code-body" style="font-size:0.75rem;line-height:1.5"><pre><span class="code-comment">// Agent analyzes the prompt:</span>
<span class="code-string">"User endpoint with pagination"</span>

<span class="code-comment">// Creates its own todo list:</span>
<span class="code-keyword">&#9744;</span> Understand project structure
<span class="code-keyword">&#9744;</span> Check existing entities
<span class="code-keyword">&#9744;</span> Create UserEntity
<span class="code-keyword">&#9744;</span> Repository with Pageable
<span class="code-keyword">&#9744;</span> Service layer
<span class="code-keyword">&#9744;</span> Controller + Pagination
<span class="code-keyword">&#9744;</span> Write tests
<span class="code-keyword">&#9744;</span> Run tests &amp; fix

<span class="code-comment">// Starts with Task 1:</span>
<span class="code-function">&rarr; Tool: glob("**/Entity*.java")</span>
<span class="code-function">&rarr; Tool: read("pom.xml")</span>
<span class="code-comment">// "Spring Boot 3.2, JPA, H2..."</span>
<span class="code-keyword">&#9745;</span> Project structure understood</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">How the Agent Works</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>1. Explore</strong> &ndash; Reads project structure, pom.xml, existing entities. Understands the stack.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>2. Plan</strong> &ndash; Breaks the task into sub-tasks. Identifies dependencies. Creates a todo list.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>3. Implement</strong> &ndash; Writes code task by task. Uses conventions from the project.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>4. Test &amp; Fix</strong> &ndash; Runs tests. Errors? Reads stacktrace, fixes, repeats.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>5. Commit</strong> &ndash; Stages, writes commit message, optionally opens PR.
            </div>
          </div>
          <div style="padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">The difference from Spec-Driven:</strong> No upfront document. The agent decides on its own what it needs. Faster for known patterns &ndash; but less traceable.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Conclusion: Agent vs. Spec =====
  {
    id: 'agent-vs-spec',
    theme: '',
    label: 'Conclusion',
    content: `
      <span class="slide-label">Conclusion</span>
      <h2 class="slide-title">Agent-Driven vs. Spec-Driven</h2>
      <p class="slide-subtitle">Both are "Vibe Coding" &ndash; just with different degrees of structure. It depends on your style.</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:8px">&#127925; Agent-Driven (Vibe Coding)</h3>
            <ul class="feature-list" style="margin-top:0">
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Get started quickly, develop iteratively</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Many follow-up questions &amp; corrections possible</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Flexible &ndash; direction changes along the way</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Ideal for refactoring, bugfixes, prototypes</span></li>
            </ul>
            <p style="margin-top:12px;font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong>Good for:</strong> Startups, prototypes, explorative development, sequential work with lots of dialogue between developer and agent.
            </p>
          </div>
        </div>
        <div>
          <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:8px">&#128203; Spec-Driven</h3>
            <ul class="feature-list" style="margin-top:0">
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Planning &amp; architecture upfront</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Traceable, testable, reviewable</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Less rework, fewer hallucinations</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Ideal for new features, teams, compliance</span></li>
            </ul>
            <p style="margin-top:12px;font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong>Good for:</strong> Larger features, team work, regulated environments. Invest upfront in planning, then let the agent run.
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">There is no "better".</strong> Both have their strengths. Many teams mix: Spec-Driven for new features, Agent-Driven for the rest. Find your style &ndash; and use the right tool for the right task.
        </p>
      </div>
    `,
  },

  // ===== Mindset =====
  {
    id: 'coding-mindset',
    theme: '',
    label: 'Mindset',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">The New Mindset</span>
      <h2 class="slide-title" style="color:var(--color-text)">Jensen Huang, Nvidia CEO</h2>
      <p class="slide-subtitle" style="font-size:0.85rem">
        <a href="https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Business Insider, March 2026</a>
        &middot;
        <a href="https://www.youtube.com/shorts/3RnzkJjgvfw" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">YouTube Short &#9654;</a>
      </p>
      <div style="display:grid;grid-template-columns:1fr auto;gap:20px;margin-top:14px;align-items:start">
        <div style="display:flex;flex-direction:column;gap:14px">
          <blockquote style="background:var(--color-bg-subdued);border:1px solid var(--color-border);border-left:4px solid var(--color-primary);border-radius:12px;padding:22px 28px;font-size:1.05rem;line-height:1.8;color:var(--color-text);font-style:italic;margin:0">
            <div><span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:10px;margin-right:4px">&ldquo;</span>If that $500,000 engineer did not consume at least $250,000 worth of tokens, I am going to be deeply alarmed.<span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:14px;margin-left:4px">&rdquo;</span></div>
            <p style="margin-top:14px;font-size:0.83rem;font-style:normal;color:var(--color-text-subdued)">&mdash; Jensen Huang (Nvidia CEO) &middot; <a href="https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Business Insider</a></p>
          </blockquote>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.8rem;font-weight:700;color:var(--color-primary);margin-bottom:5px">&#129302; AI as a tool &ndash; not a comfort</p>
              <p style="font-size:0.8rem;line-height:1.55;color:var(--color-text-subdued)">Huang compares not using AI to a chip designer who prefers paper and pencil. Token usage is for him a direct measure of effort &ndash; already discussed at Nvidia as a fourth compensation component alongside bonus and equity.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.8rem;font-weight:700;color:var(--color-primary);margin-bottom:5px">&#128176; Tokens as a recruiting argument</p>
              <p style="font-size:0.8rem;line-height:1.55;color:var(--color-text-subdued)">"How many tokens come with my job?" &ndash; already a standard question in Silicon Valley interviews. A $500k engineer should invest ~$250k in AI compute to be 10x more productive.</p>
            </div>
          </div>
        </div>
        <div style="width:200px;flex-shrink:0">
          <div style="border-radius:12px;overflow:hidden;border:1px solid var(--color-border);background:#000;aspect-ratio:9/16">
            <iframe src="https://www.youtube.com/embed/3RnzkJjgvfw" title="Jensen Huang: $500k Engineers should use $250k in tokens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" style="width:100%;height:100%;display:block"></iframe>
          </div>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);text-align:center;margin-top:6px">All-In Podcast, March 2026</p>
        </div>
      </div>
    `,
  },

  // ===== Quiz: AI Coding =====
  {
    id: 'quiz-coding',
    theme: '',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Knowledge Check: AI Assisted Coding</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. What is the difference between Spec-Driven and Agent-Driven Development?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Spec-Driven doesn't use an LLM</button>
            <button class="quiz-option" data-correct="true">Spec-Driven writes requirements/design first, Agent-Driven lets the agent plan on its own</button>
            <button class="quiz-option" data-correct="false">Agent-Driven is always better</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. What does "Vibe Coding" mean?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="true">You describe what you want, the AI builds it &ndash; you "feel" whether it's right</button>
            <button class="quiz-option" data-correct="false">Coding while listening to music</button>
            <button class="quiz-option" data-correct="false">A framework by Google</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Why is "Learn the craft first, then the tool" important?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Because AI doesn't work</button>
            <button class="quiz-option" data-correct="false">Because you're not allowed to use AI without the craft</button>
            <button class="quiz-option" data-correct="true">Because AI only accelerates &ndash; bad architecture + AI = bad architecture faster</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
