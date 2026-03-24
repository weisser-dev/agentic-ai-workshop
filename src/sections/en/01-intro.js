export const introSlides = [
  // ===== Welcome (Desktop only - organizational) =====
  {
    id: 'welcome',
    theme: 'slide--dark',
    label: 'Welcome',
    desktopOnly: true,
    content: `
      <div style="max-width:750px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.6rem;margin-bottom:4px">&#128075; Welcome!</h2>
        <p class="slide-subtitle" style="font-size:0.95rem">Before we start &ndash; a few organizational things</p>
      </div>
      <div style="max-width:750px;margin:16px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128221; <strong style="color:var(--color-accent)">Your Expectations</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">What do you want to take away? What interests you most?</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#9749; <strong>Breaks</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Until &ldquo;Basics&rdquo; is done, then <strong>20 min break</strong>, then Hands-On.</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128203; <strong>Questions? Post-its!</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Write questions on post-its &rarr; we&rsquo;ll go through them together at the end of each topic.</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128640; <strong style="color:var(--color-accent)">Ready?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Expectations shared? Let&rsquo;s go!</span>
          </p>
        </div>
      </div>
      <div style="max-width:750px;margin:12px auto 0;padding:14px 18px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
        <p style="font-size:0.85rem;line-height:1.4;color:var(--color-text-on-dark);text-align:center">
          &#127918; <strong style="color:var(--color-accent)">Quick estimation game:</strong> How long would it take you to program these games <strong>from scratch</strong>? With menu, highscore, playable in the browser?
        </p>
        <div style="display:flex;gap:12px;margin-top:10px;justify-content:center;flex-wrap:wrap">
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#127922; 2048</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Your estimate?</div>
          </div>
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#128056; Doodle Jump</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Your estimate?</div>
          </div>
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#128126; Space Invaders</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Your estimate?</div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Self-Study Hint (Presenter only) =====
  {
    id: 'self-study-hint',
    theme: 'slide--dark',
    label: 'Self-Study',
    desktopOnly: true,
    content: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center;height:100%">
        <div>
          <span class="slide-label">Quick note</span>
          <h2 class="slide-title" style="font-size:1.6rem;line-height:1.3">Missed something?<br>Need to leave early?</h2>
          <p style="font-size:1rem;color:var(--color-text-on-dark-subdued);line-height:1.6;margin-top:16px">
            No problem. &#128079;
          </p>
          <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.6;margin-top:8px">
            This workshop can easily be completed as <strong style="color:var(--color-accent)">self-study</strong> &ndash; anytime, at your own pace, on any device.
          </p>
          <div style="margin-top:20px;padding:14px 18px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2);display:flex;align-items:center;gap:14px">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://agentic-ai.weisser.dev&bgcolor=001631&color=ffed00" alt="QR Code agentic-ai.weisser.dev" style="width:64px;height:64px;border-radius:6px;flex-shrink:0">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark);line-height:1.5">
              &#127760; <strong><a href="https://agentic-ai.weisser.dev" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agentic-ai.weisser.dev</a></strong><br>
              <span style="font-size:0.82rem;color:var(--color-text-on-dark-subdued)">All slides, prompts, links &ndash; just open in any browser.</span><br>
              <span style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.6">Content outdated or inaccurate? <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">Pull requests welcome.</a></span>
            </p>
          </div>
        </div>
        <div style="border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1)">
          <img src="/mockup_en.png" alt="Agentic AI Workshop &ndash; Self-paced Mode on Desktop and Mobile" style="width:100%;display:block;border-radius:12px">
        </div>
      </div>
    `,
  },

  // ===== Check-In (Presenter only) =====
  {
    id: 'checkin',
    theme: 'slide--dark',
    label: 'Check-In',
    desktopOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px">&#128172; Quick Check-In</h2>
        <p class="slide-subtitle" style="font-size:0.9rem">Going around &ndash; 2&ndash;3 sentences each</p>
      </div>
      <div style="max-width:650px;margin:16px auto 0;display:flex;flex-direction:column;gap:8px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#129504;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">How would you <strong>describe yourself</strong> &ndash; are you familiar with AI?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128188;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">How do you <strong>already use AI today</strong> &ndash; personally or professionally?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128187;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Who has actively <strong style="color:var(--color-accent)">Vibe Coded</strong> before?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128640;</span>
          <div style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Who has used AI for <strong>other things</strong>?
            <span style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);display:block;margin-top:2px">Presentations, emails, summarizing content, planning trips, personal coach&hellip;</span>
          </div>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128269;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Who asks <strong>ChatGPT instead of Google</strong> more often?</p>
        </div>
      </div>
    `,
  },

  // ===== 0: HERO =====
  {
    id: 'hero',
    theme: 'slide--hero',
    label: 'Overview',
    labelSelfPaced: 'Start',
    content: `
      <div class="desktop-content">
        <div class="hero-badge">Workshop 2026</div>
        <h1 class="hero-title">Agentic AI<br><span class="highlight">Workshop</span></h1>
        <p class="hero-subtitle">From the history of AI through the current state of the art to hands-on work with AI agents.</p>
        <p style="font-style:italic;color:var(--color-text-on-dark-subdued);font-size:clamp(0.9rem,1.5vw,1.1rem);margin-top:8px"></p>
        <div style="display:flex;gap:24px;justify-content:center;margin-top:32px;flex-wrap:wrap">
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Part 1</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">History &amp; Status Quo</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">70 years of AI, big players, opportunities &amp; risks</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Part 2</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">AI &ndash; Internet 2.0</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">How AI is reaching the masses &ndash; explained for everyone</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Part 3</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">AI Assisted Coding</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Deep Dive &amp; Hands-On with AI agents</p>
          </div>
        </div>
        <p style="margin-top:24px;font-size:0.8rem;color:var(--color-text-on-dark-subdued);opacity:0.6;text-align:center">
          For everyone with technical understanding &ndash; from beginners to senior developers
        </p>
      </div>
      <div class="mobile-content" style="text-align:center">
        <div style="font-size:3.5rem;margin-bottom:12px">&#129302;</div>
        <h1 style="font-size:1.8rem;font-weight:800;color:var(--color-text-on-dark);line-height:1.2;margin:16px 0 8px">Welcome to your journey through the<br><span style="color:var(--color-accent)">AI Jungle</span></h1>
        <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:28px">Interactive. Accessible. Hands-on.</p>
        <button class="mobile-start-btn" id="mobile-start-btn">Start experience &#128640;</button>
      </div>
      <p class="hero-copyright" style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.4;text-align:center">
        &copy; 2026 <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">weisser-dev</a>
      </p>
    `,
  },

  // ===== Onboarding (Self-paced, all devices) =====
  {
    id: 'mobile-onboarding',
    theme: 'slide--dark',
    label: 'Overview',
    selfPacedOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div>
          <div style="margin-bottom:20px">
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#127919; Who is this for?</h3>
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">For developers and tech enthusiasts &ndash; from beginners to seniors. No prior AI knowledge required.</p>
          </div>
          <div>
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128218; What will you learn?</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128337; 70 years of AI history &ndash; how we got here</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#129504; How LLMs, tokens, and agents work</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128187; AI Assisted Coding in practice</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128296; Hands-On: Build your own projects with AI agents</div>
            </div>
          </div>
        </div>
        <div>
          <div style="margin-bottom:20px">
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128221; What will you need?</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; Laptop</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; Curiosity &amp; open-mindedness</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; At least 2&ndash;3 hours of time</div>
            </div>
          </div>
          <div>
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128274; Prerequisites</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">&#128200; You know what APIs are</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">&#129504; Basic technical understanding</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
                &#128268; Access to a model &ndash; Claude, ChatGPT, Qwen etc.<br>
                <span style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);display:block;margin-top:3px">
                  <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">75+ providers</a>
                  &nbsp;&middot;&nbsp;
                  OpenCode also offers <strong>free models</strong>: Big Pickle &amp; MiniMax 2.5
                  &nbsp;&middot;&nbsp;
                  <a href="https://opencode.ai/docs/zen/#pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/zen</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `,
  },
];
