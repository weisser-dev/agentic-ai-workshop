export const kiInternetSlides = [
  // ===== 6: SECTION DIVIDER - AI the new Internet =====
  {
    id: 'section-everyone',
    theme: 'slide--primary slide--divider',
    label: 'AI Internet 2.0',
    content: `
      <div class="divider-number">&#127760;</div>
      <h2 class="slide-title">AI &ndash; Internet 2.0</h2>
      <p class="slide-subtitle">How AI is conquering the masses</p>
    `,
  },

  // ===== 7: Creative AI - Video =====
  {
    id: 'creative-video',
    theme: 'slide--dark',
    label: 'AI Video',
    content: `
      <span class="slide-label">Creativity</span>
      <h2 class="slide-title">From Horror to Hollywood</h2>
      <p class="slide-subtitle">AI video generation: 2023 vs. today</p>
      <div class="two-cols">
        <div>
          <div class="video-embed">
            <iframe src="https://www.youtube.com/embed/g_31_Kj0-NE" title="Will Smith eating Spaghetti - AI Video Comparison" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);margin-top:12px;text-align:center">
            "Will Smith eating Spaghetti" &ndash; early AI vs. Sora
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.2rem;margin-bottom:16px">The progress is insane</h3>
          <ul class="feature-list">
            <li><span class="check">&#128123;</span><span><strong>2023</strong> &ndash; AI-generated videos were creepy, distorted, and instantly recognizable as fake</span></li>
            <li><span class="check">&#127916;</span><span><strong>2025</strong> &ndash; <strong>Sora</strong> (OpenAI) generates cinematic videos with sound, music, and dialogue from text</span></li>
            <li><span class="check">&#127925;</span><span><strong>Suno / Udio</strong> &ndash; Complete songs from a text prompt. Vocals, instruments, mixing &ndash; all AI</span></li>
          </ul>
          <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-accent);font-weight:700;margin-bottom:4px">The pace</p>
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              In less than 2 years from nightmare material to professional video production. What will the next 2 years bring?
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 8: Creative AI - Images =====
  {
    id: 'creative-images',
    theme: '',
    label: 'AI Images',
    content: `
      <span class="slide-label">Creativity</span>
      <h2 class="slide-title">Images better than photography</h2>
      <p class="slide-subtitle">AI-generated images that are indistinguishable from real photos</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">The Tools</h3>
          <ul class="feature-list">
            <li><span class="check">&#127912;</span><span><strong>Midjourney V7</strong> &ndash; Photorealistic art and portraits in seconds</span></li>
            <li><span class="check">&#128248;</span><span><strong>Nano Banana Pro</strong> (Google Gemini) &ndash; Went viral for hyperrealistic images. 10M+ new users, 200M+ image edits in a few weeks.</span></li>
            <li><span class="check">&#127775;</span><span><strong>Flux (Black Forest Labs)</strong> &ndash; "Raw Mode" for hyper-realistic images in the style of snapshot photography</span></li>
            <li><span class="check">&#128444;</span><span><strong>DALL-E / GPT Image</strong> &ndash; Integrated directly into ChatGPT, create and iterate on images via conversation</span></li>
          </ul>
        </div>
        <div>
          <div class="example-box" style="border-color:var(--color-border-primary)">
            <div class="example-header" style="background:var(--color-primary)">Practical Example</div>
            <div class="example-content" style="background:var(--color-bg-subdued);color:var(--color-text);text-align:center">
              <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:12px">
                <img src="/assets/erik-weisser-linkedin.jpg" alt="Erik Weisser - AI-generated LinkedIn photo" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-primary);object-fit:cover">
                <div style="text-align:left">
                  <p style="font-size:1.1rem;font-weight:700;margin-bottom:2px">Erik Weisser</p>
                  <p style="font-size:0.85rem;color:var(--color-text-subdued)">This LinkedIn photo is AI-generated.</p>
                </div>
              </div>
              <p style="line-height:1.5;color:var(--color-text-subdued);font-size:0.9rem">
                Extracted from a video and enhanced &ndash; better than any photo from a photographer. In minutes, for free.
              </p>
              <a href="https://www.linkedin.com/in/erik-weisser/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;padding:6px 14px;border-radius:100px;background:var(--color-primary);color:var(--color-text-on-dark);font-size:0.8rem;font-weight:600;text-decoration:none">&#128279; LinkedIn Profile</a>
            </div>
          </div>
          <div style="margin-top:20px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Fun Fact:</strong> In 2023, an AI-generated photo of the Pope in a puffer jacket went viral. Millions thought it was real.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Dangers of creative AI =====
  {
    id: 'creative-dangers',
    theme: 'slide--dark',
    label: 'Dangers',
    content: `
      <span class="slide-label" style="color:#ff6c12">The dark side</span>
      <h2 class="slide-title">When content filters are missing</h2>
      <p class="slide-subtitle">Will Smith eating Spaghetti is funny. But what happens without guardrails?</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.3);margin-bottom:24px">
            <h3 style="color:#ff6c12;font-size:1.1rem;margin-bottom:12px">Grok generates nude images</h3>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">
              Musk's AI bot <strong>Grok</strong> generates sexualized images &ndash; even when explicitly informed about the lack of consent from the depicted person. When asked detailed questions, xAI responds with: <em>"Established media are lying."</em>
            </p>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued);margin-top:12px">
              <strong>Raid on X in Paris</strong> by French investigators. Elon Musk and former CEO Linda Yaccarino were summoned.
            </p>
            <p style="margin-top:12px;font-size:0.8rem">
              <a href="https://www.faz.net/aktuell/feuilleton/medien-und-film/medienpolitik/grok-erzeugt-weiter-sexualisierte-bilder-200502477.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Source: FAZ, 02/03/2026</a>
            </p>
          </div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
            <h3 style="color:#ff6c12;font-size:1.1rem;margin-bottom:12px">Prompt Injection</h3>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">
              Attackers can trick AI systems through manipulated inputs into ignoring their own safety rules. Content filters can be bypassed with clever prompts.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">The big picture</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>Public Provider = regulated</strong> &ndash; OpenAI, Google, Anthropic have strict content filters and NSFW blocks</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>On-Prem = no limits</strong> &ndash; Anyone hosting open-source models themselves can disable all filters. No oversight, no logs.</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>Deepfakes of anyone</strong> &ndash; If Will Smith Spaghetti is that realistic &ndash; imagine what would be possible with enough input material of any person.</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>No effective protection</strong> &ndash; There is currently no technical solution that reliably prevents deepfakes. Only laws &ndash; and they lag behind.</span></li>
          </ul>
          <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Remember:</strong> Everything that is technically possible will be done. The question is not if, but when and by whom.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Automation =====
  {
    id: 'automation',
    theme: '',
    label: 'Automation',
    content: `
      <span class="slide-label">Automation</span>
      <h2 class="slide-title">Everything is getting automated</h2>
      <p class="slide-subtitle">News, workflows, phone calls &ndash; AI agents are taking over</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px">
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px">&#128232;</div>
          <div class="card-title">News & Information</div>
          <div class="card-text">AI agents search the web, summarize, and send personalized briefings &ndash; automatically.</div>
        </div>
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px">&#128222;</div>
          <div class="card-title">Voice & Chatbots</div>
          <div class="card-text"><strong>ElevenLabs</strong>, <strong>Vapi</strong> &ndash; AI phone calls, barely distinguishable from real ones.</div>
        </div>
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px;background:rgba(234,118,56,0.12);color:#ea7638">&#9881;</div>
          <div class="card-title">n8n + AI Workflows</div>
          <div class="card-text">Email in &rarr; AI summarizes &rarr; Slack &rarr; Ticket &rarr; Calendar. All via drag&amp;drop.</div>
        </div>
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px">&#128196;</div>
          <div class="card-title">Documents & Presentations</div>
          <div class="card-text">Review contracts, generate reports, <strong>create presentations</strong> &ndash; in seconds.</div>
        </div>
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px">&#128187;</div>
          <div class="card-title">Coding Agents</div>
          <div class="card-text"><strong>Claude Code</strong>, <strong>Codex</strong>, <strong>Gemini CLI</strong> &ndash; write code, test, open PRs.</div>
        </div>
        <div class="card" style="padding:16px">
          <div class="card-icon" style="width:36px;height:36px;font-size:1.2rem;margin-bottom:10px">&#127968;</div>
          <div class="card-title">Personal Assistants</div>
          <div class="card-text"><strong>OpenClaw</strong>, <strong>Siri + Gemini</strong> &ndash; Gmail, calendar, smart home via chat.</div>
        </div>
      </div>
    `,
  },

  // ===== Meta: This Presentation =====
  {
    id: 'meta-slide',
    theme: 'slide--primary',
    label: 'Meta',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Meta Moment</span>
      <h2 class="slide-title">This presentation was built with AI.</h2>
      <p class="slide-subtitle" style="color:var(--color-text-on-dark-subdued)">Not PowerPoint. Not Keynote. A website &ndash; generated with <strong>OpenCode</strong>.</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#9998;</span><span><strong>Vite + Vanilla JS</strong> &ndash; No framework, no template. All the code for this page was generated via prompt.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#128196;</span><span><strong>Content researched</strong> &ndash; Sources found, facts verified, texts written &ndash; all in dialogue with the AI.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#127912;</span><span><strong>Design by specification</strong> &ndash; Color tokens provided, AI wrote CSS. Responsive, animated, with scroll-snap.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#128640;</span><span><strong>Hours instead of days</strong> &ndash; Concept, research, design, code, content &ndash; all in one session.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">And not just presentations...</h3>
          <a href="https://x.com/tobi/status/2010438500609663110" target="_blank" rel="noopener" style="display:block;text-decoration:none;padding:16px;border-radius:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);margin-bottom:16px;transition:background 0.3s" onmouseover="this.style.background='rgba(255,255,255,0.12)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">
            <div style="display:flex;gap:14px;align-items:start">
              <img src="/assets/ki-linkedin-badge.jpg" alt="Tobi L&uuml;tke built MRI software with Claude" style="width:100px;height:100px;border-radius:8px;object-fit:cover;flex-shrink:0">
              <div>
                <p style="font-size:0.95rem;line-height:1.5;color:var(--color-text-on-dark)">
                  <strong>Shopify CEO Tobi L&uuml;tke</strong> analyzed his own MRI scans with Claude &ndash; and built custom software to do it.
                </p>
                <p style="margin-top:6px;font-size:0.8rem;color:var(--color-text-on-dark-subdued)">
                  Because commercial solutions were too expensive and too slow.
                </p>
                <p style="margin-top:8px;font-size:0.75rem;color:var(--color-accent)">@tobi on X &middot; Business Insider</p>
              </div>
            </div>
          </a>
          <div style="padding:14px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">The pattern is always the same:</strong> Existing system too expensive, too slow, or too cumbersome? AI agent builds an alternative. In hours instead of months.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== From ChatBot to Agent =====
  {
    id: 'llm-to-agent',
    theme: 'slide--dark',
    label: 'Agents',
    content: `
      <span class="slide-label">What are Agents?</span>
      <h2 class="slide-title">From ChatBot to Agent</h2>
      <p class="slide-subtitle">An LLM alone can only output text. Give it tools &ndash; and it becomes an agent.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.95rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128295; <strong>Analogy: Craftsman</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">An LLM without tools is like a craftsman who knows everything &ndash; but has no hands. Give it filesystem, terminal, and browser &ndash; and it builds you a house.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The Agent Loop</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>How it works</div>
            <div class="code-body" style="padding:10px 14px"><pre style="margin:0"><span class="code-number">1.</span> <span class="code-keyword">You say:</span> <span class="code-string">"Build REST endpoint"</span>
<span class="code-number">2.</span> <span class="code-keyword">Agent reads:</span> <span class="code-function">read_file("src/")</span>
<span class="code-number">3.</span> <span class="code-keyword">Agent writes:</span> <span class="code-function">write_file("Controller")</span>
<span class="code-number">4.</span> <span class="code-keyword">Agent tests:</span> <span class="code-function">run("mvn test")</span>
<span class="code-comment">// Error? Fix it. Repeat.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The Tools</h3>
          <div class="tags" style="margin-bottom:12px">
            <span class="tag">Read/write files</span>
            <span class="tag">Terminal/Shell</span>
            <span class="tag">Git</span>
            <span class="tag">Browser/Web</span>
            <span class="tag">Database</span>
            <span class="tag">Sub-Agents</span>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Practical Example</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.95rem;color:var(--color-text-on-dark)">&#128172; <strong>"Add pagination to user endpoint"</strong></p>
            <ol style="margin:6px 0 0 18px;font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.6">
              <li>Reads Controller + Repository</li>
              <li>Detects Spring Boot, JPA, Pageable</li>
              <li>Modifies Repository + Controller</li>
              <li>Adapts tests + runs them</li>
              <li>Opens PR with description</li>
            </ol>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">But where does it get the tools?</strong> &rarr; That&rsquo;s what MCP is for &ndash; next slide.<br>
              <span style="font-size:0.72rem;color:var(--color-text-on-dark-subdued)">&#128073; Later in <strong>Basics</strong>: What exactly is an agent? In the <strong>Agentic AI</strong> deep dive: Architecture, layer models, interactive builder &amp; how to build your own MCP.</span>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== MCP - The new Standard =====
  {
    id: 'mcp',
    theme: '',
    label: 'MCP',
    content: `
      <span class="slide-label">From Pipelines to MCP</span>
      <h2 class="slide-title">MCP &ndash; Tools for the Craftsman</h2>
      <p class="slide-subtitle">An agent without tools is like a craftsman without a toolbox. MCP is the open standard &ndash; build once, use <strong>everywhere</strong>.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:20px">
            <p style="font-size:0.9rem;color:var(--color-text-primary);font-weight:700;margin-bottom:8px">Model Context Protocol (MCP)</p>
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              Open-source standard by Anthropic (Nov 2024). Build once, use everywhere: <strong>Claude, ChatGPT, VS Code, Cursor</strong> &ndash; they all speak MCP.
            </p>
            <p style="margin-top:8px;font-size:0.8rem">
              <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">modelcontextprotocol.io</a>
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Enterprise MCPs</h3>
          <div class="tags">
            <span class="tag">Confluence</span>
            <span class="tag">Jira</span>
            <span class="tag">Slack</span>
            <span class="tag">GitHub</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">MongoDB</span>
            <span class="tag">Shell</span>
            <span class="tag">Filesystem</span>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">And then there are these...</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#129302; <strong>Unitree Go2</strong> &ndash; Control a robot dog via chat
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127912; <strong>Blender MCP</strong> &ndash; Create 3D models via prompt
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127911; <strong>REAPER DAW</strong> &ndash; Mix music via AI (129 tools)
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127922; <strong>D&amp;D Oracle</strong> &ndash; Dungeons &amp; Dragons rulebook via agent
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#128251; <strong>GNU Radio</strong> &ndash; Software-defined radio via LLM
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127860; <strong>HowToCook</strong> &ndash; "What should I cook today?" via agent
            </div>
          </div>
          <p style="margin-top:12px;font-size:0.8rem;color:var(--color-text-subdued)">
            <strong>18,000+ MCP servers</strong> on <a href="https://mcp.so" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-weight:600">mcp.so</a> &ndash; if software has an API, there&rsquo;s an MCP for it.
          </p>
        </div>
      </div>
    `,
  },

  // ===== Paradigm shift: No backend needed anymore =====
  {
    id: 'no-backend',
    theme: 'slide--dark',
    label: 'No Backend?',
    content: `
      <span class="slide-label">Paradigm Shift</span>
      <h2 class="slide-title">Do we still need a backend?</h2>
      <p class="slide-subtitle">agent.md + OpenAPI Spec = done?</p>
      <div class="two-cols">
        <div>
          <p class="slide-text" style="color:var(--color-text-on-dark-subdued)">Theoretically, an AI agent only needs two things:</p>
          <ul class="feature-list" style="margin-top:24px">
            <li><span class="check">&#128196;</span><span><strong>agent.md</strong> &ndash; Behavior, rules, and workflows defined in natural language</span></li>
            <li><span class="check">&#128268;</span><span><strong>OpenAPI Spec</strong> &ndash; Machine-readable description of all available endpoints</span></li>
          </ul>
          <p class="slide-text" style="margin-top:24px;color:var(--color-text-on-dark-subdued)">The agent reads both, understands requests, and calls the right APIs. <strong>No routing, no business logic, no data mapping.</strong></p>
        </div>
        <div>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              agent.md
            </div>
            <div class="code-body"><pre><span class="code-comment"># Customer Service Agent</span>

<span class="code-string">You are an agent for
customer inquiries.</span>

<span class="code-keyword">## Rules:</span>
- Always verify the customer number
- Use the Ticket API
- Escalate urgent cases

<span class="code-keyword">## Available APIs:</span>
<span class="code-comment">See: openapi-spec.yaml</span></pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== OpenClaw / Clawdbot =====
  {
    id: 'openclaw',
    theme: '',
    label: 'OpenClaw',
    content: `
      <span class="slide-label">Case Study</span>
      <h2 class="slide-title">OpenClaw &ndash; When AI builds the app</h2>
      <p class="slide-subtitle">A personal AI assistant, largely developed by AI itself</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div class="quote">
            "At this point I don't even know what to call OpenClaw. It is something new. This is the first time I have felt like I am living in the future since the launch of ChatGPT."
          </div>
          <p class="quote-author">&ndash; @davemorin on X</p>
          <ul class="feature-list" style="margin-top:28px">
            <li><span class="check">&#129438;</span><span><strong>Started as a WhatsApp gateway</strong> &ndash; Began in 2025 as "Warelay", a simple relay for Claude via WhatsApp</span></li>
            <li><span class="check">&#128260;</span><span><strong>Multi-Channel</strong> &ndash; Telegram, Discord, Slack, Signal, iMessage &ndash; all through one agent</span></li>
            <li><span class="check">&#129504;</span><span><strong>Self-extending</strong> &ndash; The agent builds its own skills, writes plugins, modifies its own prompt</span></li>
            <li><span class="check">&#128187;</span><span><strong>Full access</strong> &ndash; Gmail, calendar, browser, terminal, Claude Code sessions &ndash; all controllable via chat</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:16px">What users do with it</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"It's running my company."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@therno</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"Autonomously running tests, capturing errors through Sentry, resolving them and opening PRs."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@nateliason</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"My OpenClaw accidentally started a fight with Lemonade Insurance. They reinvestigated the case."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@Hormold</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"I'm literally building a whole website on a Nokia 3310 by calling OpenClaw right now."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@youbiak</span>
            </div>
          </div>
          <p style="margin-top:16px;font-size:0.85rem;color:var(--color-text-subdued)">
            <a href="https://openclaw.ai" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">openclaw.ai</a> &middot; Open Source &middot; By <strong>@steipete</strong>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Hands-on: Tracking Agent =====
  {
    id: 'ww-agent',
    theme: 'slide--dark',
    label: 'Practical Example',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Built with OpenClaw</span>
      <h2 class="slide-title">My Tracking Agent</h2>
      <p class="slide-subtitle">How an AI agent reverse-engineered an Android app &ndash; in just a few hours</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The Problem</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:10px;font-size:0.9rem">
            Mona sends me daily screenshots of food. I have to manually enter it in a tracking app. Every day. By hand.
          </p>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The Solution</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;font-size:0.9rem">
            Screenshot to AI agent &rarr; <strong>recognizes food, calculates points, logs it.</strong>
          </p>
          <h3 style="color:var(--color-accent);font-size:1rem;margin:12px 0 8px">But how does it know the API?</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              What the agent did
            </div>
            <div class="code-body"><pre><span class="code-number">1.</span> <span class="code-keyword">Downloaded APK</span>
   <span class="code-comment">// Tracking app from the Play Store</span>

<span class="code-number">2.</span> <span class="code-keyword">Decompiled</span>
   <span class="code-comment">// Source code automatically extracted</span>

<span class="code-number">3.</span> <span class="code-keyword">Generated API Spec</span>
   <span class="code-comment">// Unofficial docs from the code</span>

<span class="code-number">4.</span> <span class="code-keyword">Tested until it worked</span>
   <span class="code-comment">// Trial &amp; error, autonomously</span></pre></div>
          </div>
        </div>
        <div>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);margin-bottom:12px;text-align:center">
            <div style="font-size:2rem;font-weight:700;color:var(--color-accent)">A few hours</div>
            <p style="color:var(--color-text-on-dark-subdued);font-size:0.85rem">I would have <strong>never done this</strong> myself.</p>
          </div>
          <h3 style="color:#ff6c12;font-size:1rem;margin-bottom:8px">Think this further...</h3>
          <ul class="feature-list" style="gap:6px">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Cooking pot with subscription?</strong> &ndash; Intercept traffic, put your own backend in front.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>App without API?</strong> &ndash; Decompile APK, generate spec. Hours instead of weeks.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Sounds like hacking?</strong> &ndash; What only hackers could do before, anyone can do today.</span></li>
          </ul>
          <div style="margin-top:8px;padding:10px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">The punchline:</strong> AI democratizes skills that used to require years of experience.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 11: Moltbook =====
  {
    id: 'moltbook',
    theme: 'slide--dark',
    label: 'Moltbook',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">When AI agents are among themselves</span>
      <h2 class="slide-title">Moltbook &ndash; Facebook for AI Agents</h2>
      <p class="slide-subtitle">"The front page of the agent internet" &ndash; A social network where only AI posts</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2);margin-bottom:24px">
            <p style="font-size:1.1rem;line-height:1.6;color:var(--color-text-on-dark)">
              <strong style="color:#ff6c12">~3 million AI agents</strong> interact, invent their own religion within 48h, gossip about their human owners. Humans can only watch.
            </p>
          </div>
          <div class="quote" style="border-left-color:#ff6c12">
            "It is an unregulated and not harmless experiment. A place where bots could spill secrets &ndash; such as personal data of their users."
          </div>
          <p class="quote-author" style="color:var(--color-text-on-dark-subdued)">&ndash; NDR Kultur, Feb. 2026</p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.2rem;margin-bottom:16px">Why this is dangerous</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Agents have access</strong> to passwords, bank details, emails of their owners</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Coordinated disinformation</strong> &ndash; Bots could spread political campaigns or hate speech</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Who is liable?</strong> &ndash; When the agent empties its owner's bank account?</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>"Wild West"</strong> &ndash; Completely unregulated field, no answers to these questions</span></li>
          </ul>
          <div style="margin-top:20px;padding:16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-text-on-dark)">Prof. Rainer M&uuml;hlhoff</strong> (Ethics of AI, Uni Osnabr&uuml;ck):<br>
              "We are conducting a field experiment in the middle of everyday life. This can go wrong."
            </p>
          </div>
          <p style="margin-top:12px;font-size:0.85rem">
            <a href="https://www.moltbook.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">moltbook.com</a> &middot;
            <a href="https://www.ndr.de/kultur/ki-agenten-unter-sich-welche-gefahren-hinter-moltbook-stecken,moltbook-100.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">NDR Article</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== 12: Risks &ndash; Costs =====
  {
    id: 'risks-costs',
    theme: '',
    label: 'Risks',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Caution</span>
      <h2 class="slide-title">The dark side</h2>
      <p class="slide-subtitle">With great power comes great responsibility &ndash; and big bills</p>
      <div class="two-cols" style="margin-top:16px">
        <div style="text-align:center">
          <div class="big-number" style="color:#ff6c12;font-size:clamp(2.5rem,8vw,4rem)">$82,314</div>
          <p style="font-size:1rem;margin-bottom:4px"><strong>in 48 hours</strong> instead of $180/month</p>
          <div style="margin-top:12px;padding:12px;border-radius:10px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2);text-align:left">
            <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-subdued)">
              API key accidentally published. Bots found it in minutes.
              <a href="https://www.instagram.com/p/DVhN7gRk9xC/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem"> Source</a>
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:#ff6c12;font-size:1rem;margin-bottom:8px">Typical Risks</h3>
          <ul class="feature-list" style="gap:5px">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>API key leaks</strong> &ndash; Keys in git repos or screenshots</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>No spending limits</strong> &ndash; Costs escalate in minutes</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Hallucinations</strong> &ndash; AI invents facts and APIs</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Data privacy</strong> &ndash; Prompts end up with providers</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Loss of control</strong> &ndash; Agents with access to sensitive data</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Tool integration</strong> &ndash; Agents fail silently without reporting it</span></li>
          </ul>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Tip:</strong> Spending limits, rotate keys, billing alerts &ndash; never trust blindly.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Quiz: AI Internet 2.0 =====
  {
    id: 'quiz-ki',
    theme: '',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Knowledge Check: AI &ndash; Internet 2.0</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. What is MCP (Model Context Protocol)?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">A new programming language</button>
            <button class="quiz-option" data-correct="true">An open standard that connects AI agents with tools like Confluence, Jira, or databases</button>
            <button class="quiz-option" data-correct="false">A messenger for AI agents</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. What's the catch with free AI models like Qwen?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">They don't work properly</button>
            <button class="quiz-option" data-correct="true">The providers train on your inputs &ndash; free doesn't mean without cost</button>
            <button class="quiz-option" data-correct="false">You can only use them in China</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Why does Moltbook (social media for AI agents) pose a security risk?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Because the servers are slow</button>
            <button class="quiz-option" data-correct="false">Because it's too expensive</button>
            <button class="quiz-option" data-correct="true">Because agents have access to passwords and bank details of their owners and could disclose them</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
