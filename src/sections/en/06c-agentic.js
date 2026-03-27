export const agenticSlides = [
  // ===== SECTION DIVIDER =====
  {
    id: 'section-agentic',
    theme: 'slide--primary slide--divider',
    label: 'Agentic AI',
    content: `
      <div class="divider-number">&#127919;</div>
      <h2 class="slide-title">Agentic AI</h2>
      <p class="slide-subtitle">Autonomous AI Systems &ndash; Architecture, Layer Models &amp; Enterprise Readiness</p>
    `,
  },

  // ===== What is Agentic AI? =====
  {
    id: 'what-is-agentic',
    theme: 'slide--dark',
    label: 'What is Agentic AI?',
    content: `
      <span class="slide-label">Definition</span>
      <h2 class="slide-title">What is Agentic AI?</h2>
      <p class="slide-subtitle">AI systems that <strong>independently plan, use tools and pursue goals</strong> &ndash; without being prompted for every step</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Classic AI vs. Agentic AI</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-bottom:4px"><strong>Classic LLM</strong> (ChatGPT, Claude Chat)</p>
              <p style="font-size:0.82rem;color:rgba(255,255,255,0.8);line-height:1.5">Question &rarr; Answer. One step. No tool access. Forgets everything after the chat.</p>
            </div>
            <div style="padding:12px;border-radius:8px;background:rgba(255,237,0,0.06);border:2px solid rgba(255,237,0,0.25)">
              <p style="font-size:0.85rem;color:var(--color-accent);margin-bottom:4px"><strong>Agentic AI</strong></p>
              <p style="font-size:0.82rem;color:rgba(255,255,255,0.8);line-height:1.5">Define goal &rarr; Agent <strong>plans steps</strong>, <strong>uses tools</strong> (shell, APIs, databases), <strong>checks results</strong>, iterates &ndash; until the goal is achieved.</p>
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:12px 0 8px">Single-Agent vs. Multi-Agent</h3>
          <div style="display:flex;gap:8px">
            <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong style="color:var(--color-accent)">Single-Agent</strong><br>
              One agent with many tools. Simpler but limited. <span style="color:rgba(255,255,255,0.5)">z.B. OpenCode, Claude Code</span>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong style="color:var(--color-accent)">Multi-Agent</strong><br>
              Specialized agents collaborate. Modular. <span style="color:rgba(255,255,255,0.5)">z.B. CrewAI, OpenClaw, Sub-Agents</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">The 2 Faces of AI Agents</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.9)"><strong style="color:var(--color-accent)">&#9881; Backend Agents</strong> (Headless)</p>
              <p style="font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:4px;line-height:1.4">Run invisibly in the background. CI/CD pipelines, automatic code reviews, ticket classification, data pipelines.</p>
            </div>
            <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.9)"><strong style="color:var(--color-accent)">&#128172; Frontend Agents</strong> (Interactive)</p>
              <p style="font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:4px;line-height:1.4">Direct interaction with users. Chatbots, voice assistants, IDE coding agents, knowledge portals.</p>
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.6);line-height:1.4">
              <strong style="color:var(--color-accent)">Key difference from classic automation:</strong> Agents make <strong>decisions at runtime</strong>. They don't follow a fixed script but adapt dynamically &ndash; similar to an employee solving a task independently.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Layer-Modelle im Vergleich =====
  {
    id: 'layer-models',
    theme: '',
    label: 'Layer-Modelle',
    content: `
      <span class="slide-label">Architektur</span>
      <h2 class="slide-title">Agentic Architectures &ndash; Different Layer Models</h2>
      <p class="slide-subtitle">There is no single standard &ndash; but they all describe the same building blocks</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">3 Common Reference Models</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Boomi</strong> &ndash; 6 Layers</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">Application &bull; Orchestration &bull; Agent &bull; <strong>Context</strong> &bull; <strong>Data</strong> &bull; Model</p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Emphasizes dedicated context and data layers &ndash; important for RAG and session management.</p>
            </div>
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Vendia LAMP</strong> &ndash; 4 Layers</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">LLM &bull; Agent/App-Logik &bull; MCP-Gateway &bull; <strong>Persistenz</strong></p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Compact. Frontend is part of app logic. No separate output layer.</p>
            </div>
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Mezmo / AURA</strong> &ndash; Practical</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">Chat-Frontend &rarr; Agent &rarr; LLM-Provider (austauschbar) &rarr; MCP-Tools</p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Shows: providers and tools are independently swappable at runtime.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">Our Workshop Model</h3>
          <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);margin-bottom:10px">
            <div style="display:flex;flex-direction:column;gap:3px;font-size:0.78rem">
              <div style="padding:4px 8px;border-radius:4px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);color:var(--color-primary);font-weight:600">1. Interface <span style="font-weight:400;color:var(--color-text-subdued)">(IDE, Chat, Voice, API)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr;</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">2. Agent Framework <span style="color:var(--color-text-subdued)">(OpenCode, LangChain...)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; &uarr; Loop</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">3. LLM Provider <span style="color:var(--color-text-subdued)">(Claude, GPT, Ollama...)</span></div>
              <div style="display:flex;gap:4px;align-items:center"><div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued);flex:1">&darr; &uarr; Tool Calls</div><div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued);flex:1">&harr; Context</div></div>
              <div style="display:flex;gap:4px">
                <div style="flex:1;padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">4. MCP / Tools</div>
                <div style="flex:1;padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-style:italic">Context / Memory</div>
              </div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; API Calls</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">5. Backends / Services <span style="color:var(--color-text-subdued)">(Jira API, DB, S3...)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; / &larr;</div>
              <div style="padding:4px 8px;border-radius:4px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);color:var(--color-positive)">Output &rarr; User / System</div>
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.72rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Fazit:</strong> All models describe the same building blocks. Our model combines context/data and makes backends + output explicitly visible. F&uuml;r Enterprise m&uuml;ssen zus&auml;tzlich <strong>security, compliance and data persistence</strong> be considered.
          </div>
        </div>
      </div>
    `,
  },

// ===== Agentic Architecture Deep Dive =====
  {
    id: 'agentic-architecture-deep',
    theme: 'slide--dark',
    label: 'Architektur',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title">Agentic Architecture &ndash; die Schichten</h2>
      <p class="slide-subtitle">Jede Agentic-L&ouml;sung besteht aus denselben 5 Schichten &ndash; nur die Bausteine variieren</p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:12px" id="arch-layers">
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">1. INTERFACE</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">IDE Plugin</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Chat UI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">CLI / TUI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Chatbot Widget</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Voice / Call Center</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">API / Webhook</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595;</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">2. AGENT<br>FRAMEWORK</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">OpenCode</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Claude Code</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">OpenClaw</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">LangChain</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">CrewAI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595; &#8593; Loop</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">3. LLM<br>PROVIDER</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">Claude (Bedrock)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">GPT (OpenAI)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Gemini</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Ollama (lokal)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Mistral</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595; &#8593; Tool Calls</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">4. MCP /<br>TOOLS</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">Shell</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Filesystem</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Database</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Jira</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Confluence</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">SharePoint</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Git</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom Script</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom Backend</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595;</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(37,204,120,0.12);border:1px solid rgba(37,204,120,0.3);font-size:0.7rem;color:var(--color-positive);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">5. OUTPUT</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Code / PR</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Doku</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Tickets</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Reports</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Deployments</span>
          </div>
        </div>
      </div>
      <div style="margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
        <p style="font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Yellow highlighted</strong> = our workshop config. Each layer is swappable &ndash; on the next page you can build your own architecture. <a href="https://www.dataiku.com/stories/detail/ai-agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.65rem">Source: Dataiku &ndash; Understanding AI Agents</a>
        </p>
      </div>
    `,
  },

// ===== Interaktiver Agent Architecture Builder =====
  {
    id: 'arch-builder',
    theme: '',
    label: 'Arch Builder',
    content: `
      <div class="arch-viewport-desktop">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <div>
            <span class="slide-label" style="color:var(--color-primary)">Interactive</span>
            <h2 class="slide-title" style="font-size:1.4rem;margin:4px 0 0">Agent Architecture Designer</h2>
          </div>
          <button id="arch-export-btn" style="display:none"></button>
        </div>
        <div id="arch-controls" style="display:flex;flex-direction:column;align-items:center;gap:8px;margin-bottom:16px">
          <p id="arch-cta-text" style="font-size:1rem;color:var(--color-text-subdued);font-weight:500;margin:0">Select a use case to see the architecture:</p>
          <select id="arch-usecase" style="padding:0 16px;border-radius:10px;border:2px solid var(--color-border-primary);background:var(--color-bg-subdued);color:var(--color-text-primary);font-size:0.9rem;cursor:pointer;font-weight:600;min-width:280px;appearance:auto;height:44px">
            <option value="" disabled selected>&lt;Select use case&gt;</option>
            <optgroup label="&#128187; Local (Developer PC)">
              <option value="coding">Coding Assistant</option>
              <option value="docs">Docs Agent</option>
            </optgroup>
            <optgroup label="&#128172; Remote (Server / Cloud)">
              <option value="review">Code Review (CI/CD)</option>
              <option value="chatbot">Customer Chatbot (Web)</option>
              <option value="voice">Call Center Voice Agent</option>
              <option value="tickets">Ticket Automation</option>
              <option value="knowledge">Knowledge Agent (Wiki)</option>
              <option value="data">Data Pipeline Agent</option>
            </optgroup>
            <optgroup label="&#9881; Headless (no user)">
              <option value="cve">CVE Auto-Patching</option>
              <option value="anomaly">Anomaly Detection</option>
              <option value="healthcheck">Daily System Health Check</option>
            </optgroup>
          </select>
        </div>
        <div id="arch-diagram" style="padding:16px;border-radius:14px;background:#fff;border:1px solid #e2e8f0;box-shadow:0 2px 12px rgba(0,0,0,0.06);opacity:0;transition:opacity 0.5s ease,transform 0.5s ease;transform:translateY(8px);overflow:auto;max-height:60vh"></div>
        <div id="arch-builder-detail" style="margin-top:10px;padding:10px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem;color:var(--color-text-subdued);line-height:1.5;min-height:20px;opacity:0;transition:opacity 0.5s ease"></div>
      </div>
      <div class="arch-viewport-mobile">
        <span class="slide-label" style="color:var(--color-primary)">Interactive</span>
        <h2 class="slide-title" style="font-size:1.3rem;margin-bottom:16px">Agent Architecture Designer</h2>
        <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px dashed var(--color-border);text-align:center">
          <div style="font-size:2.5rem;margin-bottom:12px">&#128421;</div>
          <p style="font-size:1rem;color:var(--color-text-primary);font-weight:600;margin-bottom:8px">Interactive Feature &ndash; Desktop Only</p>
          <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">Open the presentation on a laptop or desktop to explore 8 different use-case architectures interactively.</p>
          <p style="font-size:0.75rem;color:var(--color-text-subdued);opacity:0.6;margin-top:12px">Use Cases: Coding Assistant, Code Review, Docs Agent, Kunden-Chatbot, Voice Agent, Ticket Automation, Wissens-Agent, Data Pipeline</p>
        </div>
      </div>
    `,
  },

  // ===== Warum Agenten die Branche verändern =====
  {
    id: 'agents-disrupt',
    theme: 'slide--dark',
    label: 'Disruption',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Thesis</span>
      <h2 class="slide-title" style="font-size:1.3rem">3 Paths to the Same Goal &ndash; When to Choose Which?</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">The effort doesn't disappear &ndash; it shifts. The question is: <strong>where to?</strong></p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">
        <div style="padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(255,107,107,0.12);border:1px solid rgba(255,107,107,0.3);font-size:0.65rem;color:#ff6b6b;font-weight:700">BUILD YOURSELF</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Team builds classically</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Backend &rarr; API &rarr; frontend &rarr; tests &rarr; deployment. Full control, but <strong>months of effort</strong>.</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Highly regulated systems (medical, finance)</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Real-time requirements &lt;50ms</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Deterministic logic mandatory</span>
          </div>
        </div>
        <div style="padding:10px 12px;border-radius:10px;background:rgba(255,237,0,0.05);border:2px solid rgba(255,237,0,0.2)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(255,237,0,0.15);border:1px solid rgba(255,237,0,0.35);font-size:0.65rem;color:var(--color-accent);font-weight:700">AGENT BUILDS</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Agent as developer &ndash; builds for you</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Spec + agents.md &rarr; Agent builds code, tests, infra. Human reviews &amp; deploys. <strong>Hours instead of months.</strong></p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Clear concept / spec available</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Human-in-the-loop for review</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Standard patterns (CRUD, API, UI)</span>
          </div>
          <div style="font-size:0.68rem;color:rgba(255,255,255,0.4);line-height:1.3"><strong>Practical:</strong> Website feature, REST API, CLI tool, DB migration, refactoring, test suite &ndash; anything where a clear spec defines the scope and a human reviews the output.</div>
        </div>
        <div style="padding:10px 12px;border-radius:10px;background:rgba(37,204,120,0.06);border:2px solid rgba(37,204,120,0.2)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(37,204,120,0.15);border:1px solid rgba(37,204,120,0.35);font-size:0.65rem;color:var(--color-positive);font-weight:700">AGENT IS</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Agent <em>is</em> the backend &ndash; no code</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Agent + MCP tools + spec = finished product. <strong>Zero code.</strong> Effort: functional tests &amp; monitoring.</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Proof of concept / PoC / MVP</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; MCPs for all required services</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Error tolerance acceptable</span>
          </div>
          <div style="font-size:0.68rem;color:rgba(255,255,255,0.4);line-height:1.3"><strong>Practical:</strong> Internal knowledge chatbot (Confluence+Jira MCP), code review agent (Git MCP), docs generator, ticket triage, customer demo prototype. Whenever MCP tools cover the required APIs.</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div style="flex:1;padding:7px 10px;border-radius:8px;background:rgba(255,168,0,0.08);border:1px solid rgba(255,168,0,0.2)">
          <p style="font-size:0.68rem;color:rgba(255,255,255,0.55);line-height:1.3">
            <strong style="color:var(--color-warning)">Effort shift:</strong> Implementation &rarr; <strong>spec, functional tests, monitoring, review</strong>. No tests = no agents.
          </p>
        </div>
        <div style="flex:1;padding:7px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
          <p style="font-size:0.68rem;color:rgba(255,255,255,0.55);line-height:1.3">
            <strong style="color:var(--color-accent)">Rule of thumb:</strong> The clearer the spec + the better the MCP coverage + the higher the error tolerance &rarr; the further right (Agent IS). Critical systems &rarr; left (build yourself).
          </p>
        </div>
      </div>
    `,
  },

  // ===== Sind Agenten resilient? Enterprise-tauglich? =====
  {
    id: 'agents-resilience',
    theme: '',
    label: 'Resilienz',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Critical Question</span>
      <h2 class="slide-title">Are Agents Resilient? Deterministic? Enterprise-Ready?</h2>
      <p class="slide-subtitle">Can I expect the same result 100,000 times from 100,000 requests with the same spec?</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-critical);font-size:0.95rem;margin-bottom:8px">The honest answer: No &ndash; not automatically</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">LLMs are non-deterministic.</strong> Selbst mit <code style="background:rgba(0,0,0,0.1);padding:1px 3px;border-radius:2px;font-size:0.7rem">temperature: 0</code> answers vary. Floating-point, batching and provider updates affect results.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">Tool calls are side effects.</strong> Jira tickets, DB entries, commits &ndash; not easily undone if wrong.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">Context changes.</strong> New data, changed code, updated knowledge base &rarr; different result.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,168,0,0.08);border:1px solid rgba(255,168,0,0.25);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-warning)">Model updates!</strong> Claude 4.5 &rarr; 4.6, GPT-4 &rarr; GPT-5: Providers update models without warning. Behavior can change even with the same API. <strong>Pinning to model version is mandatory.</strong>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:8px">How to achieve resilience</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Spec as contract:</strong> Clear, measurable specs define <em>what</em> should come out. Validate agent output against spec.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Functional tests:</strong> Not "is the output identical?" but "does the output meet functional criteria?" Like QA in software &ndash; acceptance tests, not byte comparisons.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Model pinning + regression:</strong> Pin model version (z.B. <code style="background:rgba(0,0,0,0.08);padding:1px 3px;border-radius:2px;font-size:0.68rem">claude-sonnet-4-20250514</code>). On change: run regression tests against test suite.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Monitoring &amp; observability:</strong> Log every agent step. Input, output, tool calls, latency, cost. Dashboards for anomaly detection. <span style="color:var(--color-text-subdued)">(z.B. LangSmith, Datadog, custom)</span>
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Human-in-the-Loop:</strong> Agent proposes, human approves. PR review instead of auto-merge.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Idempotency:</strong> Build agents so repeated execution is safe. Checks before every action.
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.7rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Fazit:</strong> Not 100,000x <em>identical</em>, but 100,000x <strong>correct</strong>. Like humans: two developers don't write the same code &ndash; but both pass the tests.
          </div>
        </div>
      </div>
    `,
  },

  // ===== Build your own MCP =====
  {
    id: 'build-mcp',
    theme: 'slide--dark',
    label: 'Build MCP',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Hands-On</span>
      <h2 class="slide-title" style="font-size:1.3rem">Build Your Own MCP Server &amp; Client</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Connect your own tools to any agent &ndash; in under 50 lines of code</p>
      <div class="two-cols" style="margin-top:10px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">MCP Server (Node.js)</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>server.ts &ndash; expose your own tool</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.62rem"><pre style="margin:0"><span class="code-keyword">import</span> { McpServer } <span class="code-keyword">from</span> <span class="code-string">"@modelcontextprotocol/sdk/server/mcp.js"</span>;
<span class="code-keyword">import</span> { StdioServerTransport } <span class="code-keyword">from</span> <span class="code-string">"...sdk/server/stdio.js"</span>;
<span class="code-keyword">import</span> { z } <span class="code-keyword">from</span> <span class="code-string">"zod"</span>;

<span class="code-keyword">const</span> server = <span class="code-keyword">new</span> <span class="code-function">McpServer</span>({
  <span class="code-property">name</span>: <span class="code-string">"my-tool"</span>,
  <span class="code-property">version</span>: <span class="code-string">"1.0.0"</span>
});

<span class="code-comment">// Register tool &ndash; the agent will see this</span>
server.<span class="code-function">registerTool</span>(<span class="code-string">"get_user"</span>, {
  <span class="code-property">description</span>: <span class="code-string">"Fetches user data from our DB"</span>,
  <span class="code-property">inputSchema</span>: {
    <span class="code-property">userId</span>: z.<span class="code-function">string</span>().<span class="code-function">describe</span>(<span class="code-string">"User ID"</span>)
  }
}, <span class="code-keyword">async</span> ({ userId }) =&gt; {
  <span class="code-comment">// Here: DB query, API call, anything</span>
  <span class="code-keyword">const</span> user = <span class="code-keyword">await</span> <span class="code-function">db.findUser</span>(userId);
  <span class="code-keyword">return</span> { content: [{ type: <span class="code-string">"text"</span>, text: JSON.<span class="code-function">stringify</span>(user) }] };
});

<span class="code-comment">// Start server (STDIO transport)</span>
<span class="code-keyword">const</span> transport = <span class="code-keyword">new</span> <span class="code-function">StdioServerTransport</span>();
<span class="code-keyword">await</span> server.<span class="code-function">connect</span>(transport);</pre></div>
          </div>
          <div style="padding:6px 10px;border-radius:6px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.68rem;color:rgba(255,255,255,0.6);line-height:1.3">
            <strong style="color:var(--color-accent)">What happens:</strong> The agent automatically discovers the <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">get_user</code> tool and can call it &ndash; just like Shell or Filesystem.
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">Connect to OpenCode</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; register MCP server</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"mcp"</span>: {
    <span class="code-property">"my-tool"</span>: {
      <span class="code-property">"command"</span>: <span class="code-string">"node"</span>,
      <span class="code-property">"args"</span>: [<span class="code-string">"./build/server.js"</span>]
    }
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:8px 0 6px">Setup in 3 steps</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">npm install</span> @modelcontextprotocol/sdk zod
<span class="code-function">npm install</span> -D typescript @types/node
<span class="code-function">npx tsc</span> && <span class="code-function">node</span> build/server.js</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin:8px 0 6px">What can you build with this?</h3>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Internal API access</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Database access</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Jira / Confluence</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Send emails</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Kubernetes API</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Custom monitoring</span>
          </div>
          <div style="margin-top:6px;padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.62rem;color:rgba(255,255,255,0.5);line-height:1.3">
            <strong style="color:var(--color-accent)">Docs:</strong> <a href="https://modelcontextprotocol.io/docs/develop/build-server" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Build MCP Server</a> &bull; <a href="https://modelcontextprotocol.io/docs/develop/build-client" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Build MCP Client</a> &bull; <a href="https://mcp.so" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">18,000+ ready MCPs on mcp.so</a> &bull; Also available in Python, Java, Kotlin.
          </div>
        </div>
      </div>
    `,
  },
];