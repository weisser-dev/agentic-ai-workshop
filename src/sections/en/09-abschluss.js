export const abschlussSlides = [
  // ===== SECTION DIVIDER - Closing =====
  {
    id: 'section-closing',
    theme: 'slide--primary slide--divider',
    label: 'Closing',
    content: `
      <div class="divider-number">&#11088;</div>
      <h2 class="slide-title">Closing &amp; Outlook</h2>
      <p class="slide-subtitle">What comes next?</p>
    `,
  },

  // ===== Outlook =====
  {
    id: 'outlook',
    theme: 'slide--dark',
    label: 'Outlook',
    content: `
      <span class="slide-label">Outlook</span>
      <h2 class="slide-title">What else would be possible?</h2>
      <p class="slide-subtitle">We are just getting started &ndash; all of this is already conceivable today</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title" style="font-size:0.9rem">Anomaly Detection</div>
          <div class="card-text" style="font-size:0.75rem">Agent monitors logs, metrics, error rates &ndash; detects patterns and alerts before users notice.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128274;</div>
          <div class="card-title" style="font-size:0.9rem">CVE Auto-Patching</div>
          <div class="card-text" style="font-size:0.75rem">Agent checks CVE databases daily, finds affected dependencies and automatically creates PRs with fixes.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#9881;</div>
          <div class="card-title" style="font-size:0.9rem">System Optimization</div>
          <div class="card-text" style="font-size:0.75rem">Agent analyzes performance data, finds bottlenecks and suggests infrastructure changes.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#129514;</div>
          <div class="card-title" style="font-size:0.9rem">Auto-Testing via MCP</div>
          <div class="card-text" style="font-size:0.75rem">Agent reads Jira stories, connects to the system via MCP and automatically tests whether features work.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128203;</div>
          <div class="card-title" style="font-size:0.9rem">Auto-Roadmaps</div>
          <div class="card-text" style="font-size:0.75rem">Agent analyzes backlog, tech debt, market trends and generates roadmap suggestions for the next quarter.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128337;</div>
          <div class="card-title" style="font-size:0.9rem">Daily System Check</div>
          <div class="card-text" style="font-size:0.75rem">Once daily: health checks, dependency updates, certificate checks, security scans &ndash; report via Slack.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#127760;</div>
          <div class="card-title" style="font-size:0.9rem">Internet Monitoring</div>
          <div class="card-text" style="font-size:0.75rem">Agent scans release notes, blog posts, changelogs &ndash; informs you when relevant new features appear.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128196;</div>
          <div class="card-title" style="font-size:0.9rem">Keep Pages Up to Date</div>
          <div class="card-text" style="font-size:0.75rem">Agent compares docs with code, finds discrepancies and automatically updates Confluence, README, API docs.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128247;</div>
          <div class="card-title" style="font-size:0.9rem">Content &amp; Social Media</div>
          <div class="card-text" style="font-size:0.75rem">Create content, manage Instagram pages, schedule posts, generate images &ndash; all via agent workflow.</div>
        </div>
      </div>
    `,
  },

  // ===== Feedback Round (Presenter only) =====
  {
    id: 'feedback',
    theme: 'slide--dark',
    label: 'Feedback',
    desktopOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px">&#128221; Feedback &amp; Reflection</h2>
        <p class="slide-subtitle" style="font-size:0.9rem">Your honest feedback helps &ndash; it&rsquo;s the only way we can improve</p>
      </div>
      <div style="max-width:700px;margin:16px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:14px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            &#127891; <strong style="color:var(--color-accent)">What were your learnings?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">What are you taking away today? What was most valuable for you?</span>
          </p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            &#128260; <strong>Should we do this more often?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">On other topics too? Which ones would interest you?</span>
          </p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            &#11088; <strong>How did you find it overall?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">What was good, what would you leave out, what was missing?</span>
          </p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            &#128203; <strong style="color:var(--color-accent)">Do you remember your expectations?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">From the beginning &ndash; were they met? What&rsquo;s still missing?</span>
          </p>
        </div>
      </div>
    `,
  },

  // ===== About this Project =====
  {
    id: 'about-project',
    theme: 'slide--dark',
    label: 'About this Project',
    content: `
      <span class="slide-label">Open Source</span>
      <h2 class="slide-title">&#128187; About this Project</h2>
      <p class="slide-subtitle">How this presentation was built &amp; deployed for free</p>
      <div class="two-cols" style="margin-top:18px;gap:20px">
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
            <p style="font-size:0.82rem;font-weight:700;color:var(--color-accent);margin-bottom:5px">&#9889; Tech Stack</p>
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-on-dark-subdued)"><strong style="color:var(--color-text-on-dark)">Vite 5</strong> + Vanilla JS &ndash; no framework, no UI library. Just HTML, CSS and JS. Build output: static files (~500 KB).</p>
          </div>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
            <p style="font-size:0.82rem;font-weight:700;color:var(--color-accent);margin-bottom:5px">&#128272; Domain at Strato &rarr; Cloudflare</p>
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">Domain registered at <strong style="color:var(--color-text-on-dark)">Strato</strong>, nameservers pointing to <strong style="color:var(--color-text-on-dark)">Cloudflare</strong> &ndash; so DNS, SSL and CDN all run through Cloudflare.</p>
          </div>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
            <p style="font-size:0.82rem;font-weight:700;color:var(--color-accent);margin-bottom:5px">&#127381; Cloudflare Pages &ndash; free</p>
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">GitHub repo connected &rarr; every <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px">git push</code> builds &amp; deploys automatically. Custom domain in Pages &rarr; SSL in minutes. Same setup runs <strong style="color:var(--color-text-on-dark)">scrumbuddy.org</strong>, <strong style="color:var(--color-text-on-dark)">cv.weisser.dev</strong> and others.</p>
          </div>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
            <p style="font-size:0.82rem;font-weight:700;color:var(--color-accent);margin-bottom:5px">&#129302; Built with OpenCode</p>
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">CSS &amp; styling, project structure, slide content &ndash; all developed and reviewed with <strong style="color:var(--color-text-on-dark)"><a href="https://opencode.ai" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">OpenCode</a></strong>. This presentation is its own best example.</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:var(--color-text-on-dark);text-decoration:none;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.15)'">
            <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor" style="flex-shrink:0;opacity:0.8"><path d="M8 .2C3.6.2 0 3.8 0 8.2c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.7 16 11.7 16 8.2 16 3.8 12.4.2 8 .2z"/></svg>
            <div>
              <p style="font-size:0.85rem;font-weight:700;margin-bottom:2px">GitHub &rarr; weisser-dev/agentic-ai-workshop</p>
              <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued)">Source code, AGENTS.md, complete slide content</p>
            </div>
          </a>
          <a href="https://blog.weisser.dev/operations/devops/2026/03/24/frontend-hosting-cloudflare-pages.html" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:var(--color-text-on-dark);text-decoration:none;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.15)'">
            <span style="font-size:1.4rem;flex-shrink:0">&#128214;</span>
            <div>
              <p style="font-size:0.85rem;font-weight:700;margin-bottom:2px">Blog: My typical frontend hosting setup</p>
              <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued)">Strato nameservers &rarr; Cloudflare &rarr; Pages &rarr; custom domain &ndash; step by step</p>
            </div>
          </a>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25)">
            <p style="font-size:0.8rem;font-weight:700;color:var(--color-accent);margin-bottom:8px">&#128161; Hidden Features</p>
            <div style="display:flex;flex-direction:column;gap:5px">
              <div style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);display:flex;align-items:baseline;gap:6px"><span style="color:var(--color-accent);flex-shrink:0">&#9654;</span> <span><strong style="color:var(--color-text-on-dark)">Presenter Mode</strong> &ndash; timer, confetti, break countdown, discussion slides (<code style="background:rgba(255,255,255,0.08);padding:1px 4px;border-radius:3px">?presenter</code>)</span></div>
              <div style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);display:flex;align-items:baseline;gap:6px"><span style="color:var(--color-accent);flex-shrink:0">&#9654;</span> <span><strong style="color:var(--color-text-on-dark)">Session Timer</strong> &ndash; runs automatically in the background, visible only in Presenter Mode</span></div>
              <div style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);display:flex;align-items:baseline;gap:6px"><span style="color:var(--color-accent);flex-shrink:0">&#9654;</span> <span><strong style="color:var(--color-text-on-dark)">Wireless Presenter optimized</strong> &ndash; PageUp/PageDown, Tab &rarr; Presenter Mode, 2&times; Tab &rarr; Fullscreen</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Thank You =====
  {
    id: 'closing',
    theme: 'slide--dark',
    label: 'Thank You',
    content: `
      <div style="text-align:center">
        <h2 class="slide-title">Thank You for participating!</h2>
        <p class="slide-subtitle">Questions, feedback, discussion? Feel free to connect.</p>
        <div style="display:flex;justify-content:center;gap:48px;margin-top:20px;align-items:start">
          <a href="https://www.linkedin.com/in/erik-weisser/" target="_blank" rel="noopener" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:12px">
            <img src="/assets/erik-weisser-linkedin.jpg" alt="Erik Weisser LinkedIn" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-accent)">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.linkedin.com/in/erik-weisser/&bgcolor=001631&color=ffffff" alt="LinkedIn QR" style="width:120px;height:120px;border-radius:10px">
            <span style="color:var(--color-text-on-dark);font-size:0.9rem;font-weight:600">LinkedIn</span>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Erik Weisser</span>
          </a>
          <a href="https://github.com/weisser-dev" target="_blank" rel="noopener" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:12px">
            <img src="/assets/weisser-dev-avatar.jpg" alt="Erik Weisser GitHub" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-accent)">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://github.com/weisser-dev&bgcolor=001631&color=ffffff" alt="GitHub QR" style="width:120px;height:120px;border-radius:10px">
            <span style="color:var(--color-text-on-dark);font-size:0.9rem;font-weight:600">GitHub</span>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">weisser-dev</span>
          </a>
          <a href="https://blog.weisser.dev" target="_blank" rel="noopener" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:12px">
            <img src="/weisser-dev-blog-avatar.jpg" alt="Blog weisser.dev" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-accent)">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://blog.weisser.dev&bgcolor=001631&color=ffffff" alt="Blog QR" style="width:120px;height:120px;border-radius:10px">
            <span style="color:var(--color-text-on-dark);font-size:0.9rem;font-weight:600">Blog</span>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Occasionally updated</span>
          </a>
        </div>
        <div class="tags" style="justify-content:center;margin-top:20px">
          <span class="tag">#AIAssistedCoding</span>
          <span class="tag">#OpenCode</span>
          <span class="tag">#VibeCoding</span>
          <span class="tag">#agents.md</span>
          <span class="tag">#Workshop2026</span>
        </div>
        <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;margin-top:16px;padding:10px 20px;border-radius:50px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:var(--color-text-on-dark);text-decoration:none;font-size:0.85rem;font-weight:600;transition:transform 0.2s ease,background 0.2s ease" onmouseover="this.style.background='rgba(255,255,255,0.15)';this.style.transform='scale(1.03)'" onmouseout="this.style.background='rgba(255,255,255,0.08)';this.style.transform='scale(1)'">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" style="flex-shrink:0"><path d="M8 .2C3.6.2 0 3.8 0 8.2c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.7 16 11.7 16 8.2 16 3.8 12.4.2 8 .2z"/></svg>
          <span>&#11088; Star this project on GitHub</span>
        </a>
        <p style="margin-top:12px;font-size:0.75rem;color:var(--color-text-on-dark-subdued);opacity:0.5">&copy; 2026 weisser-dev &middot; Built with OpenCode &amp; Anthropic Claude</p>
      </div>
    `,
  },

  // ===== Sources =====
  {
    id: 'sources',
    theme: 'slide--dark',
    label: 'Sources',
    content: `
      <span class="slide-label">Sources &amp; Links</span>
      <h2 class="slide-title" style="font-size:1.4rem;margin-bottom:12px">All Sources &amp; Resources Used</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:0.72rem">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Tools &amp; Products</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://opencode.ai" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai</a>
            <a href="https://continue.dev" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">continue.dev</a>
            <a href="https://openwebui.com" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">openwebui.com</a>
            <a href="https://openclaw.ai" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">openclaw.ai</a>
            <a href="https://www.moltbook.com" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">moltbook.com</a>
            <a href="https://agents.md" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">agents.md</a>
            <a href="https://kiro.dev" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">kiro.dev</a>
            <a href="https://www.agidefinition.ai/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">agidefinition.ai</a>
            <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">artificialanalysis.ai</a>
            <a href="https://www.trackingai.org/home" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">trackingai.org (IQ development)</a>
            <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">modelcontextprotocol.io</a>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;margin-top:10px;text-transform:uppercase;letter-spacing:0.05em">Pricing</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://aws.amazon.com/bedrock/pricing/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">aws.amazon.com/bedrock/pricing</a>
            <a href="https://claude.com/pricing#api" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">claude.com/pricing</a>
            <a href="https://azure.microsoft.com/en-us/pricing/details/azure-openai/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">azure.microsoft.com/openai/pricing</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">GitHub</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">anomalyco/opencode</a>
            <a href="https://github.com/continuedev/continue" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">continuedev/continue</a>
            <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">open-webui/open-webui</a>
            <a href="https://github.com/microsoft/playwright-mcp" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">microsoft/playwright-mcp</a>
            <a href="https://github.com/darrenhinde/OpenAgentsControl" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">darrenhinde/OpenAgentsControl</a>
            <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">VoltAgent/awesome-claude-code-subagents</a>
            <a href="https://github.com/weisser-dev/openpastebin" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">weisser-dev/openpastebin</a>
            <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">weisser-dev/agentic-ai-workshop</a>
            <a href="https://github.com/huk-coburg" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">huk-coburg (GitHub)</a>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;margin-top:10px;text-transform:uppercase;letter-spacing:0.05em">Documentation</h3>
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai/docs/agents</a>
            <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai/docs/de/web</a>
            <a href="https://opencode.ai/docs/de/commands/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai/docs/de/commands</a>
            <a href="https://opencode.ai/docs/de/mcp-servers/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai/docs/de/mcp-servers</a>
            <a href="https://opencode.ai/docs/de/skills/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai/docs/de/skills</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Articles &amp; Studies</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">GitHub: AI Impact on Dev Experience</a>
            <a href="https://a16z.com/navigating-the-high-cost-of-ai-compute/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">a16z: High Cost of AI Compute</a>
            <a href="https://www.cosmicjs.com/blog/claude-sonnet-45-vs-opus-45-a-real-world-comparison" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Sonnet 4.5 vs Opus 4.5 Comparison</a>
            <a href="https://www.businessinsider.de/wirtschaft/international-business/klarna-entlaesst-haelfte-der-mitarbeiter-wegen-ki/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Business Insider: Klarna &amp; AI</a>
            <a href="https://winfuture.de/news,155972.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">WinFuture: Stack Overflow</a>
            <a href="https://www.faz.net/aktuell/feuilleton/medien-und-film/medienpolitik/grok-erzeugt-weiter-sexualisierte-bilder-200502477.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">FAZ: Grok &amp; Content Filter</a>
            <a href="https://www.ndr.de/kultur/ki-agenten-unter-sich-welche-gefahren-hinter-moltbook-stecken,moltbook-100.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">NDR: Moltbook Dangers</a>
            <a href="https://www.capital.de/wirtschaft-politik/trump-gegen-ki-giganten--wer-regiert-die-welt-in-zukunft--37225614.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Capital: Trump vs. AI Giants</a>
            <a href="https://x.com/tobi/status/2010438500609663110" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Tobi L&uuml;tke / Shopify CEO (X)</a>
            <a href="https://www.instagram.com/p/DVhN7gRk9xC/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Instagram: $82k API Story</a>
            <a href="https://newsletter.genai.works/p/cursor-s-new-model-beats-claude-and-costs-86-less" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">GenAI Newsletter: Cursor beats Claude</a>
            <a href="https://www.reddit.com/r/singularity/comments/1ryrs2w/cursors_composer_2_model_is_apparently_just_kimi/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Reddit: Cursor = Kimi k2.5?</a>
            <a href="https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Business Insider: Jensen Huang &amp; Tokens</a>
            <a href="https://www.youtube.com/shorts/3RnzkJjgvfw" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">YouTube: Jensen Huang (All-In Podcast)</a>
            <a href="https://github.com/dilatchi/cloudflare-static-site-demo" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">dilatchi/cloudflare-static-site-demo</a>
            <a href="https://blog.weisser.dev/operations/devops/2026/03/24/frontend-hosting-cloudflare-pages.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Blog: My typical frontend hosting setup</a>
            <a href="https://www.heise.de/hintergrund/Hat-KI-bereits-eine-Art-Bewusstsein-entwickelt-Forscher-streiten-darueber-6522868.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Heise: AI &amp; Consciousness</a>
            <a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">GitHub Copilot Statistics</a>
            <a href="https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Pragmatic Engineer: Stack Overflow</a>
            <a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Anthropic: Distillation Attacks</a>
            <a href="https://www.dataiku.com/stories/detail/ai-agents/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Dataiku: Understanding AI Agents</a>
            <a href="https://x.com/sama/status/2033935276079510011" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Sam Altman Tweet (@sama)</a>
            <a href="https://futurism.com/artificial-intelligence/sam-altman-thanks-programmers-over" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Futurism: Reactions to Altman Tweet</a>
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Claude Code: Sub-Agents</a>
            <a href="https://code.claude.com/docs/de/agent-teams" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Claude Code: Agent Teams</a>
            <a href="https://blog.weisser.dev/blog/2026/03/24/frontend-hosting-cloudflare-pages/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Blog: Frontend on Cloudflare Pages</a>
            <a href="https://blog.weisser.dev/projects/ai/2026/03/24/opencode-remote-telegram.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Blog: OpenCode Remote Telegram</a>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;margin-top:10px;text-transform:uppercase;letter-spacing:0.05em">More GitHub Repos</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">RooCodeInc/Roo-Code</a>
            <a href="https://github.com/weisser-dev/opencode-remote-telegram" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">weisser-dev/opencode-remote-telegram</a>
            <a href="https://github.com/RoundTable02/remote-opencode" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">RoundTable02/remote-opencode</a>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;margin-top:10px;text-transform:uppercase;letter-spacing:0.05em">Services</h3>
          <div style="display:flex;flex-direction:column;gap:3px">
            <a href="https://goqr.me/api/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">goqr.me API (QR codes)</a>
            <a href="https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">AWS: Bedrock vs SageMaker</a>
          </div>
        </div>
      </div>
    `,
  },
];
