export const geschichteSlides = [
  // ===== 1: SECTION DIVIDER - Geschichte =====
  {
    id: 'section-history',
    theme: 'slide--primary slide--divider',
    label: 'History',
    content: `
      <div class="divider-number">&#128214;</div>
      <h2 class="slide-title">The History of AI</h2>
      <p class="slide-subtitle">70 years &ndash; from thought experiment to revolution</p>
    `,
  },

  // ===== 2: Timeline 1950-1997 =====
  {
    id: 'history-early',
    theme: 'slide--dark',
    label: 'Early AI',
    content: `
      <span class="slide-label">1950 &ndash; 1997</span>
      <h2 class="slide-title">The Beginnings</h2>
      <p class="slide-subtitle">From the birth of a term to defeating the world chess champion</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">1956 &ndash; The term "Artificial Intelligence" is born</div>
          <div class="timeline-text">John McCarthy, Marvin Minsky and others coin the term at the <strong>Dartmouth Conference</strong>. The vision: machines that can think.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1966 &ndash; ELIZA: The first chatbot</div>
          <div class="timeline-text">Joseph Weizenbaum (MIT) builds a chatbot that simulates a therapist. Users believe they are talking to a human.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1974-1980 &ndash; First "AI Winter"</div>
          <div class="timeline-text">Expectations were too high, results too meager. Funding gets cut, research stagnates.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1980s &ndash; Expert Systems Boom</div>
          <div class="timeline-text">Rule-based systems like MYCIN (medicine) and XCON (configuration) bring AI into enterprises &ndash; followed by the second AI Winter (1987-1993).</div>
        </div>
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127922; 1997 &ndash; Deep Blue defeats Kasparov</div>
          <div class="timeline-text">IBM's Deep Blue defeats world chess champion <strong>Garry Kasparov</strong> in a 6-game match (3.5&ndash;2.5). The world is stunned.</div>
        </div>
      </div>
    `,
  },

  // ===== 2b: 1997-2012 & Why now =====
  {
    id: 'history-bridge',
    theme: '',
    label: 'Why now?',
    content: `
      <span class="slide-label">1997 &ndash; 2012</span>
      <h2 class="slide-title">Why now?</h2>
      <p class="slide-subtitle">Why didn't AI work for decades &ndash; and why suddenly it does?</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">What happened between 1997 and 2012</h3>
          <div class="timeline" style="margin-top:0">
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">1998 &ndash; Google is founded</div>
              <div class="timeline-text">PageRank: An algorithm that organizes the internet. Later the foundation for the world's largest data collection.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">2004 &ndash; Facebook launches</div>
              <div class="timeline-text">Social media generates billions of data points: texts, images, interactions. Training data for future AI.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">2006 &ndash; AWS launches Cloud Computing</div>
              <div class="timeline-text">Computing power becomes available at the click of a button. No need for your own data center anymore.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:0">
              <div class="timeline-title">2007 &ndash; iPhone & Smartphones</div>
              <div class="timeline-text">Billions of devices permanently generating data. GPS, photos, texts &ndash; everything becomes training material.</div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">The 3 ingredients that came together</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128187; Computing Power</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">GPUs from NVIDIA (originally for gaming) turned out to be perfect for AI. Cloud computing made them accessible to everyone. Costs dropped exponentially.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128202; Data</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">The internet, social media, smartphones &ndash; suddenly there was more text, images, and code than ever before. Without this data, no training.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#129504; Algorithms</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Deep Learning (2006, Hinton), Transformer (2017, Google). The theory partly existed since the 80s &ndash; but without compute and data it was useless.</p>
            </div>
          </div>
          <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">In short:</strong> The algorithms existed for a long time. But only when computing power became cheap and data became massively available did the AI revolution ignite.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 3: Timeline 2012-2019 =====
  {
    id: 'history-modern',
    theme: '',
    label: 'Deep Learning',
    content: `
      <span class="slide-label">2012 &ndash; 2019</span>
      <h2 class="slide-title">The Deep Learning Revolution</h2>
      <p class="slide-subtitle">New algorithms + more computing power = breakthrough</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">2012 &ndash; AlexNet wins ImageNet</div>
          <div class="timeline-text">A deep neural network by Krizhevsky, <strong>Sutskever</strong> & <strong>Hinton</strong> crushes the competition. The deep learning boom begins.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2015 &ndash; OpenAI is founded</div>
          <div class="timeline-text">Founded by <strong>Sam Altman</strong>, <strong>Elon Musk</strong>, Greg Brockman, <strong>Ilya Sutskever</strong> et al. &ndash; as a non-profit with a $1B pledge. Goal: safe, general AI.</div>
        </div>
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127918; 2016 &ndash; AlphaGo defeats Lee Sedol</div>
          <div class="timeline-text">DeepMind's AlphaGo wins 4&ndash;1 against the Go world champion. Go was considered too complex for AI &ndash; until then.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2017 &ndash; "Attention Is All You Need"</div>
          <div class="timeline-text">Google Brain publishes the <strong>Transformer</strong> paper. The foundation for GPT, BERT, Claude, and all modern LLMs.</div>
        </div>
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127919; 2019 &ndash; OpenAI Five wins against Dota 2 world champions</div>
          <div class="timeline-text">The AI defeats the reigning world champion team <strong>OG</strong> in a best-of-3. The first time AI dominates in a complex team strategy game.</div>
        </div>
      </div>
    `,
  },

  // ===== 4: Timeline 2020-2022 - The Big Bang =====
  {
    id: 'history-bigbang',
    theme: 'slide--dark',
    label: 'Big Bang',
    content: `
      <span class="slide-label">2020 &ndash; 2022</span>
      <h2 class="slide-title">The Big Bang</h2>
      <p class="slide-subtitle">AI becomes accessible &ndash; for everyone</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">2020 &ndash; GPT-3 is released</div>
          <div class="timeline-text">175 billion parameters. For the first time, developers can access a powerful language model via API. Few-shot learning becomes reality.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2021 &ndash; Anthropic is founded</div>
          <div class="timeline-text"><strong>Dario Amodei</strong> (ex-VP of Research, OpenAI) and <strong>Daniela Amodei</strong> found Anthropic with a focus on AI safety. Later: Claude.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2022 &ndash; Stable Diffusion & DALL-E 2</div>
          <div class="timeline-text">Image generation via text becomes possible. Suddenly anyone can create "art" &ndash; the creative world is transformed.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title" style="font-size:1.3rem;color:var(--color-accent)">November 30, 2022 &ndash; ChatGPT launches</div>
          <div class="timeline-text" style="font-size:1.05rem"><strong>100 million users in 2 months.</strong> The fastest adoption of a consumer app ever. AI is no longer research &ndash; AI is mainstream.</div>
        </div>
      </div>
    `,
  },

  // ===== What does GPT mean? =====
  {
    id: 'what-is-gpt',
    theme: '',
    label: 'What is GPT?',
    content: `
      <span class="slide-label">Fundamentals</span>
      <h2 class="slide-title">What does "GPT" actually mean?</h2>
      <p class="slide-subtitle">The name behind ChatGPT &ndash; and why it reveals more than you think</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">G &ndash; P &ndash; T</h3>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">G</strong>enerative</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">The model <strong>generates</strong> new content &ndash; text, code, ideas. It doesn&rsquo;t copy from a database but creates something new, token by token.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">P</strong>re-trained</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">The model was <strong>trained in advance</strong> &ndash; on massive amounts of text (books, web, code). This training is complete before you use it. It does <strong>not</strong> learn from your questions.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">T</strong>ransformer</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">The architecture behind it &ndash; the 2017 paper "Attention Is All You Need". Transformers can <strong>recognize relationships across thousands of words</strong>.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Why does this matter?</h3>
          <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:12px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-subdued)">
              The name tells you <strong>everything about the limitations</strong>:<br><br>
              <strong>"Pre-trained"</strong> = The knowledge is frozen. Like a book: once it&rsquo;s printed, the content doesn&rsquo;t change anymore.<br><br>
              <strong>"Generative"</strong> = It produces text that <em>sounds plausible</em> &ndash; but isn&rsquo;t necessarily <em>factually correct</em>.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Different names, same principle</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>GPT-4, GPT-5</strong></span><span style="color:var(--color-text-subdued)">OpenAI</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>Claude</strong></span><span style="color:var(--color-text-subdued)">Anthropic (also Transformer)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>Gemini</strong></span><span style="color:var(--color-text-subdued)">Google (also Transformer)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>LLaMA, Qwen, Mistral</strong></span><span style="color:var(--color-text-subdued)">Open Source (also Transformer)</span>
            </div>
          </div>
          <div style="margin-top:10px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">All LLMs</strong> are based on the Transformer architecture. "GPT" is just OpenAI&rsquo;s brand name &ndash; the principle is the same everywhere.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Training vs. Inference =====
  {
    id: 'training-vs-inference',
    theme: 'slide--dark',
    label: 'Training vs. Usage',
    content: `
      <span class="slide-label">Fundamentals</span>
      <h2 class="slide-title">Why doesn&rsquo;t the AI learn from my questions?</h2>
      <p class="slide-subtitle">The most important distinction: <strong>Training</strong> (Learning) vs. <strong>Inference</strong> (Applying)</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Training &ndash; how AI learns</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#127891; <strong>Like school &amp; university</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Months to years. Thousands of GPUs. Trillions of text tokens. The model reads essentially half the internet and learns patterns, language, logic. At the end: a <strong>finished model</strong> &ndash; like a graduate after university.</span>
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Cost:</strong> $100M+ per training run <span style="color:var(--color-text-on-dark-subdued)">(GPT-5, Claude 4)</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Duration:</strong> Weeks to months on thousands of GPUs
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Data:</strong> Trillions of tokens (books, web, code, papers)
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Result:</strong> Fixed weights &ndash; the "knowledge" is frozen
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Why new versions?</h3>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              Because <strong>each new training run creates a completely new model</strong> &ndash; with new data, better algorithms, and more compute. GPT-4 &rarr; GPT-5 = new degree, not a software update.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Inference &ndash; how you use AI</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#128172; <strong>Like a job interview</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">When you ask ChatGPT or Claude a question, <strong>the model only applies what it already learned</strong>. It doesn&rsquo;t change in the process. 1,000 users simultaneously &ndash; all using the same immutable model.</span>
            </p>
          </div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              What happens with every question
            </div>
            <div class="code-body"><pre><span class="code-comment">// Your question:</span>
<span class="code-string">"Explain Kubernetes to me"</span>

<span class="code-comment">// What does NOT happen:</span>
<span class="code-property">model.learn(question)</span>  <span class="code-comment">// &#10007; No!</span>

<span class="code-comment">// What ACTUALLY happens:</span>
<span class="code-property">answer</span> = <span class="code-function">model.apply</span>(question)
<span class="code-comment">// Model stays exactly the same.</span>
<span class="code-comment">// Next user gets the same model.</span></pre></div>
          </div>
          <div style="margin-top:10px;padding:10px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:#ff6b6b">Important:</strong> When the AI seems to "get better" during a chat, that&rsquo;s due to the <strong>growing context</strong> &ndash; not because it&rsquo;s learning. New chat = everything resets to zero.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== What happened in 4 years =====
  {
    id: 'four-years',
    theme: '',
    label: '4 Years',
    content: `
      <span class="slide-label">2023 &ndash; 2026</span>
      <h2 class="slide-title">4 years. A different world.</h2>
      <p class="slide-subtitle">What has changed since ChatGPT &ndash; and what consequences it already has</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">What emerged</h3>
          <div class="tags" style="margin-top:0">
            <span class="tag">GitHub Copilot</span>
            <span class="tag">AI Assisted Coding</span>
            <span class="tag">RAG Systems</span>
            <span class="tag">MCP as Standard</span>
            <span class="tag">Autonomous Agents</span>
            <span class="tag">Voice Agents</span>
            <span class="tag">agent.md / CLAUDE.md</span>
            <span class="tag">Vibe Coding</span>
            <span class="tag">Sora / Video AI</span>
            <span class="tag">Deepfakes</span>
            <span class="tag">AI Social Media</span>
            <span class="tag">Computer Use</span>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin:14px 0 8px">The Numbers <a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" style="font-size:0.65rem;font-weight:400;color:var(--color-primary);text-decoration:underline">(GitHub Copilot Stats)</a></h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>15M</strong> developers &bull; +400% / year</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>~50%</strong> of code generated</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>55%</strong> faster task completion</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>88%</strong> code kept unchanged</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem">PR time <strong>9.6 &rarr; 2.4 days</strong></div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>"Vibe Coding"</strong> &ndash; Word of 2025</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:12px">The Consequences</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Klarna</strong> &ndash; Half the workforce laid off. AI replaces 700 positions. <a href="https://www.businessinsider.de/wirtschaft/international-business/klarna-entlaesst-haelfte-der-mitarbeiter-wegen-ki/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Source</a></p>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Stack Overflow</strong> &ndash; Historic low. AI has essentially killed the platform. <a href="https://winfuture.de/news,155972.html" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Source</a></p>
            <a href="https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/" target="_blank" rel="noopener">
              <img src="/assets/stackoverflow-traffic-drop.png" alt="Stack Overflow Traffic Drop" style="width:100%;border-radius:6px;margin-top:8px;display:block">
            </a>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15)">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Bottleneck shifts</strong> &ndash; Not devs, but business requirements are the bottleneck. Code is built faster than it's specified. <a href="https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Source</a></p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sam Altman Tweet =====
  {
    id: 'altman-tweet',
    theme: '',
    label: 'Sama Tweet',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">A tweet that went viral</span>
      <h2 class="slide-title" style="color:var(--color-text)">Sam Altman, OpenAI CEO</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">
        <a href="https://x.com/sama/status/2033935276079510011" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">x.com/sama</a>
      </p>
      <div style="display:flex;flex-direction:column;align-items:center;margin-top:16px">
        <blockquote style="max-width:560px;width:100%;background:var(--color-bg-subdued);border:1px solid var(--color-border);border-left:4px solid var(--color-primary);border-radius:12px;padding:24px 28px;font-size:1.05rem;line-height:1.7;color:var(--color-text);font-style:italic;position:relative">
          <span style="font-size:2rem;color:var(--color-primary);line-height:0;position:relative;top:8px;margin-right:4px">&ldquo;</span>I have so much gratitude to people who wrote extremely complex software character-by-character. It already feels difficult to remember how much effort it really took. Thank you for getting us to this point.<span style="font-size:2rem;color:var(--color-primary);line-height:0;position:relative;top:12px;margin-left:4px">&rdquo;</span>
          <p style="margin-top:16px;font-size:0.85rem;font-style:normal;color:var(--color-text-subdued)">
            &mdash; Sam Altman (@sama) &middot; <a href="https://x.com/sama/status/2033935276079510011" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">X (Twitter)</a>
          </p>
        </blockquote>
      </div>
    `,
  },

  // ===== Altman Tweet Meaning =====
  {
    id: 'altman-tweet-meaning',
    theme: 'slide--dark',
    label: 'What does this mean?',
    content: `
      <span class="slide-label">Context</span>
      <h2 class="slide-title">"Thank you for getting us to this point."</h2>
      <p class="slide-subtitle">Why a simple thank you went viral &ndash; and what the reactions reveal</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">On the surface</h3>
          <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);margin-bottom:10px;font-size:0.85rem;color:var(--color-text-on-dark)">
            Recognition for developers &ndash; who wrote complex software character by character and thereby laid the foundation for today&rsquo;s AI.
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">The subtext &ndash; why the tweet was received critically</h3>
          <div style="padding:10px 14px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            <strong>"getting us to this point"</strong> &ndash; this point = today, where AI writes code itself.<br><br>
            At the same time the industry is laying off massively: Atlassian 1,600 jobs, Block nearly 50%, Meta 20%+. Many CEOs directly justify layoffs with AI capabilities.
          </div>
          <p style="font-size:0.72rem;margin-top:8px">
            <a href="https://futurism.com/artificial-intelligence/sam-altman-thanks-programmers-over" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">futurism.com &rarr; Reactions to the tweet</a>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">The reactions</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark-subdued);font-style:italic">
              "You&rsquo;re welcome. Nice to know that our reward is our jobs being taken away."
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark-subdued);font-style:italic">
              "Nothing says &lsquo;you&rsquo;re being replaced&rsquo; quite like a heartfelt thank you from the guy doing the replacing."
            </div>
          </div>
          <div style="padding:12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-top:12px">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">What this means:</strong> The role of developers is <em>changing</em> &ndash; that&rsquo;s undeniable. The question isn&rsquo;t whether, but <strong>how we adapt</strong>. That&rsquo;s exactly what this workshop is about.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 2026 - Power Shift =====
  {
    id: 'year-2026',
    theme: 'slide--dark',
    label: '2026',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">As of: March 2026</span>
      <h2 class="slide-title">How Politics Turns the Market</h2>
      <p class="slide-subtitle">ChatGPT was the universal tool. Until political decisions changed everything &ndash; within weeks.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">OpenAI: From darling to controversy</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127987; <strong>Pentagon Deal</strong><br><span style="color:var(--color-text-on-dark-subdued)">OpenAI supplies AI to the US military &amp; intelligence agencies. For a company that started as a non-profit for "safe AI" &ndash; a cultural break.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#128250; <strong>Ads in ChatGPT</strong><br><span style="color:var(--color-text-on-dark-subdued)">Ads in the free tier announced. Non-profit origins officially history.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.15);border:1px solid rgba(191,6,67,0.3)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#128148; <strong>Mass uninstallations</strong><br><span style="color:var(--color-text-on-dark-subdued)">Users delete ChatGPT in protest. Developers switch to Anthropic, Google, open source.</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Anthropic: The winner &ndash; for now</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#129351; <strong>Claude becomes #1 for developers</strong><br><span style="color:var(--color-text-on-dark-subdued)">Claude Opus 4.6 dominates coding benchmarks. Claude Code becomes the standard. Even Microsoft &amp; Google employees use it.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127944; <strong>Super Bowl: Anthropic trolls OpenAI</strong><br><span style="color:var(--color-text-on-dark-subdued)">Claude ad at the Super Bowl: "We don't show ads." Millions laugh &ndash; at OpenAI's expense.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.15);border:1px solid rgba(191,6,67,0.3)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127468;&#127480; <strong>Trump bans Anthropic</strong><br><span style="color:var(--color-text-on-dark-subdued)">Feb. 2026: Federal agencies are no longer allowed to use Anthropic. Political retaliation? The market reacts immediately.</span></p>
            </div>
          </div>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;font-size:0.8rem">
            <a href="https://www.instagram.com/p/DVjLDwKmWoH/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Instagram: Summary</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://www.capital.de/wirtschaft-politik/trump-gegen-ki-giganten--wer-regiert-die-welt-in-zukunft--37225614.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Capital: Trump vs. AI Giants</a>
          </div>
        </div>
      </div>
      <div style="margin-top:24px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-accent)">The lesson:</strong> The "best tool" is not determined by technology alone &ndash; but by politics, trust, and values. Everything can change in 12 weeks.
        </p>
      </div>
    `,
  },

  // ===== 5: The Big Players =====
  {
    id: 'big-players',
    theme: '',
    label: 'Big Player',
    content: `
      <span class="slide-label">Landscape</span>
      <h2 class="slide-title">The Big 6 of AI</h2>
      <p class="slide-subtitle">These companies are driving the AI revolution</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr)">
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/openai-logo.svg" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="OpenAI">
            <span class="card-title" style="margin:0">OpenAI</span>
          </div>
          <div class="card-text"><strong>GPT-5.4, o3, Codex</strong><br>Est. 2015. Sam Altman. ChatGPT, DALL-E, Sora. >$150B valuation.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/anthropic-favicon.ico" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="Anthropic">
            <span class="card-title" style="margin:0">Anthropic</span>
          </div>
          <div class="card-text"><strong>Claude 4.6 Opus/Sonnet</strong><br>Est. 2021. Dario &amp; Daniela Amodei. AI safety. Backed by Google &amp; Amazon.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/google-favicon.ico" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="Google">
            <span class="card-title" style="margin:0">Google DeepMind</span>
          </div>
          <div class="card-text"><strong>Gemini 2.5 Pro/Flash</strong><br>Google Brain + DeepMind (2023). Enormous data &amp; compute advantage.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/meta-logo.png" style="width:44px;height:22px;object-fit:contain;flex-shrink:0" alt="Meta">
            <span class="card-title" style="margin:0">Meta AI</span>
          </div>
          <div class="card-text"><strong>LLaMA 4 Maverick (Open Source)</strong><br>Largest open-weight contributor. Open models for everyone. Maverick, Scout.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/qwen-favicon.ico" onerror="this.src='https://raw.githubusercontent.com/QwenLM/Qwen/refs/heads/main/assets/logo.jpg'" style="width:22px;height:22px;object-fit:contain;border-radius:4px;flex-shrink:0" alt="Qwen">
            <span class="card-title" style="margin:0">Alibaba / Qwen</span>
          </div>
          <div class="card-text"><strong>Qwen 3 (free!)</strong><br>Open source, on-prem hostable. Trained with user data. Coder, 235B, MoE.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/xai-favicon.ico" onerror="this.src='https://x.com/favicon.ico'" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="xAI">
            <span class="card-title" style="margin:0">xAI</span>
          </div>
          <div class="card-text"><strong>Grok 4.20</strong><br>Est. 2023 by Elon Musk. Integrated into X (Twitter). Colossus supercluster.</div>
        </div>
      </div>
      <div class="tags reveal-ready reveal-hidden" style="margin-top:16px">
        <span class="tag">+ Mistral AI (France)</span>
        <span class="tag">+ DeepSeek (China)</span>
        <span class="tag">+ Cohere (Enterprise)</span>
        <span class="tag">+ Kimi K2.5 (Moonshot)</span>
        <span class="tag">+ Cursor (Composer 2)</span>
      </div>
    `,
  },

  // ===== AGI & Intelligence explained =====
  {
    id: 'agi-explained',
    theme: 'slide--dark',
    label: 'AGI & IQ',
    content: `
      <span class="slide-label">Before we compare</span>
      <h2 class="slide-title">What is AGI &ndash; really?</h2>
      <p class="slide-subtitle">A concrete definition: AGI = AI that can match or exceed the <strong>cognitive versatility</strong> of a well-educated adult</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">The 10 cognitive dimensions (Hendrycks et al.)</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:10px">
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128218; Knowledge</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#129504; Reasoning</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128065; Perception</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#129303; Social Cognition</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#9881; Working Memory</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,107,107,0.1);border:1px solid rgba(255,107,107,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128190; Long-term Memory &#9888;</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#9889; Processing Speed</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#127775; Creativity</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128293; Motivation &amp; Goals</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128101; Social Action</div>
          </div>
          <div style="padding:8px 10px;border-radius:6px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:#ff6b6b">Weakness ⚠</strong> AI models have a <strong>"jagged" profile</strong>: strong in knowledge &amp; logic, but <strong>critical gaps</strong> in long-term memory and common sense.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">AGI Score &ndash; where are we?</h3>
          <div style="display:flex;align-items:end;justify-content:center;gap:12px;padding:14px;border-radius:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);margin-bottom:10px">
            <div style="text-align:center">
              <div style="font-size:1.8rem;font-weight:700;color:var(--color-text-on-dark-subdued)">27%</div>
              <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued)">GPT-4 (2023)</div>
            </div>
            <div style="font-size:1.2rem;color:var(--color-text-on-dark-subdued)">&rarr;</div>
            <div style="text-align:center">
              <div style="font-size:2.2rem;font-weight:700;color:var(--color-accent)">57%</div>
              <div style="font-size:0.7rem;color:var(--color-accent)">GPT-5.4 & Gemini 3.1 Pro (March 2026)</div>
            </div>
            <div style="font-size:1.2rem;color:var(--color-text-on-dark-subdued)">&rarr;</div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:700;color:var(--color-text-on-dark-subdued);opacity:0.3">100%</div>
              <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.3">AGI</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
                <strong style="color:var(--color-accent)">+30% in 3 years.</strong> From GPT-4 to GPT-5.4 &amp; Gemini 3.1 Pro. If the pace continues &ndash; when is 100%?
              </p>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
              <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
                <strong>Based on:</strong> Cattell-Horn-Carroll theory &ndash; the most empirically validated model of human cognition. 10 dimensions, each weighted 10%.
              </p>
            </div>
          </div>
          <p style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:8px;text-align:right">
            Hendrycks et al. 2025 &middot; <a href="https://www.agidefinition.ai/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agidefinition.ai</a>
          </p>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);margin-top:8px">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:#ff6b6b">&#129300; Consciousness?</strong> Some AI founders say: they cannot completely rule out that their models have developed a form of consciousness.
              <a href="https://www.heise.de/hintergrund/Hat-KI-bereits-eine-Art-Bewusstsein-entwickelt-Forscher-streiten-darueber-6522868.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;margin-left:4px">heise.de</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== IQ Development =====
  {
    id: 'iq-development',
    theme: '',
    label: 'IQ Development',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">How has IQ developed?</span>
      <h2 class="slide-title" style="color:var(--color-text);font-size:1.5rem">AI IQ &ndash; Historical Development</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">How quickly models became smarter &ndash; in just a few years</p>
      <div style="display:flex;gap:16px;margin-top:10px;align-items:flex-start">
        <div style="flex:1;min-width:0">
          <img src="/img/TrackingAI-Historical-IQ.gif" alt="Historical IQ development of AI models" style="max-width:100%;max-height:50vh;border-radius:10px;border:1px solid var(--color-border)">
          <div style="display:flex;align-items:center;gap:12px;margin-top:6px;flex-wrap:wrap">
            <p style="font-size:0.7rem;color:var(--color-text-subdued)">As of: March 2026</p>
            <p style="font-size:0.7rem;color:var(--color-text-subdued)">
              Source: <a href="https://www.trackingai.org/home" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">trackingai.org</a>
            </p>
          </div>
        </div>
        <div style="width:200px;flex-shrink:0">
          <h3 style="color:var(--color-primary);font-size:0.85rem;margin-bottom:8px">For comparison &ndash; Human</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Average</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-text)">~100</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">General population</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.3)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Developers</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-primary)">~110&ndash;120</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Tech professions</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid var(--color-primary)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Gifted</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-primary)">130+</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Top 2% of population</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.3)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">AI 2026 (current top models)</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-warning)">~146</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Growing almost weekly</div>
            </div>
          </div>
          <p style="font-size:0.62rem;color:var(--color-text-subdued);margin-top:6px;line-height:1.3">* Rough equivalents. AI IQ &ne; human intelligence.</p>
        </div>
      </div>
    `,
  },

  // ===== 6: Model Comparison Benchmarks =====
  {
    id: 'benchmarks',
    theme: 'slide--dark',
    label: 'Benchmarks',
    content: `
      <span class="slide-label">Model Comparison</span>
      <h2 class="slide-title">Who's ahead? <span style="font-size:0.5em;font-weight:400;opacity:0.6">(As of 03/21/2026)</span></h2>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;flex-wrap:wrap">
        <p class="slide-subtitle" style="margin-bottom:0;flex:1">A regular competition &ndash; standings change weekly</p>
        <div style="display:flex;gap:8px">
          <button class="view-toggle active" data-view="table" id="btn-table">Table</button>
          <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" class="view-toggle" style="text-decoration:none">Live Leaderboard &#8599;</a>
        </div>
      </div>
      <div id="view-table">
        <table class="comparison">
          <thead>
            <tr>
              <th>Model</th>
              <th>Provider</th>
              <th>Intelligence</th>
              <th>Price ($/M Token)</th>
              <th>Speed (t/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gemini 3.1 Pro Preview</strong></td>
              <td>Google</td>
              <td style="color:var(--color-accent);font-weight:700">57</td>
              <td>$4.50</td>
              <td>120</td>
            </tr>
            <tr>
              <td><strong>GPT-5.4 (xhigh)</strong></td>
              <td>OpenAI</td>
              <td style="color:var(--color-accent);font-weight:700">57</td>
              <td>$5.63</td>
              <td>82</td>
            </tr>
            <tr>
              <td><strong>GPT-5.3 Codex (xhigh)</strong></td>
              <td>OpenAI</td>
              <td style="font-weight:700">54</td>
              <td>$4.81</td>
              <td>69</td>
            </tr>
            <tr>
              <td><strong>Claude Opus 4.6 (max)</strong></td>
              <td>Anthropic</td>
              <td style="font-weight:700">53</td>
              <td>$10.00</td>
              <td>57</td>
            </tr>
            <tr>
              <td><strong>Claude Sonnet 4.6 (max)</strong></td>
              <td>Anthropic</td>
              <td style="font-weight:700">52</td>
              <td>$6.00</td>
              <td>63</td>
            </tr>
            <tr>
              <td><strong>Grok 4.20 Beta</strong></td>
              <td>xAI</td>
              <td>48</td>
              <td>$3.00</td>
              <td>211</td>
            </tr>
            <tr>
              <td><strong>Qwen3.5 397B A17B</strong></td>
              <td>Alibaba</td>
              <td>45</td>
              <td>$1.35</td>
              <td>82</td>
            </tr>
            <tr>
              <td><strong>DeepSeek V3.2</strong></td>
              <td>DeepSeek</td>
              <td>42</td>
              <td style="color:var(--color-accent)">$0.32</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
        <div style="display:flex;gap:16px;margin-top:16px;flex-wrap:wrap;align-items:center">
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);flex:1">
            *Data from artificialanalysis.ai &ndash; Intelligence Index, Price (Blended $/M Tokens), Speed (Median t/s). Subject to constant change.
          </p>
          <div style="display:flex;gap:8px">
            <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="font-size:0.8rem;color:var(--color-accent);text-decoration:underline">artificialanalysis.ai</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Cost Calculator: What does a project cost? =====
  {
    id: 'cost-calculator',
    theme: 'slide--dark',
    label: 'Costs',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Practice</span>
      <h2 class="slide-title" style="font-size:1.3rem">What does an AI project cost? &ndash; Example: 2048 Game</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">A typical coding project: ~50K input tokens + ~20K output tokens per session</p>
      <div style="margin-top:10px;overflow-x:auto">
        <table class="comparison" style="font-size:0.72rem;width:100%">
          <thead><tr><th>Model</th><th>Input $/M</th><th>Output $/M</th><th>2048 Game<br><small>(50K in + 20K out)</small></th><th>10 Projects</th><th>Quality</th></tr></thead>
          <tbody>
            <tr><td><strong>Claude Opus 4.6</strong></td><td>$5.00</td><td>$25.00</td><td style="color:var(--color-accent);font-weight:700">~$0.75</td><td>~$7.50</td><td>&#11088;&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Claude Sonnet 4.6</strong></td><td>$3.00</td><td>$15.00</td><td style="color:var(--color-accent);font-weight:700">~$0.45</td><td>~$4.50</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Claude Haiku 4.5</strong></td><td>$1.00</td><td>$5.00</td><td style="color:var(--color-positive);font-weight:700">~$0.15</td><td>~$1.50</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>GPT-5.1 Codex</strong></td><td>$2.50</td><td>$10.00</td><td style="font-weight:700">~$0.33</td><td>~$3.30</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>GPT-4.1 Nano</strong></td><td>$0.05</td><td>$0.20</td><td style="color:var(--color-positive);font-weight:700">~$0.01</td><td>~$0.07</td><td>&#11088;&#11088;</td></tr>
            <tr><td><strong>Gemini 3.1 Pro</strong></td><td>$1.25</td><td>$5.00</td><td style="font-weight:700">~$0.16</td><td>~$1.63</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>DeepSeek V3.2</strong></td><td>$0.01</td><td>$0.03</td><td style="color:var(--color-positive);font-weight:700">&lt;$0.01</td><td>~$0.01</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Qwen 3.5 (9B)</strong></td><td>$0.04</td><td>$0.15</td><td style="color:var(--color-positive);font-weight:700">&lt;$0.01</td><td>~$0.05</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Ollama (local)</strong></td><td colspan="2" style="text-align:center">Free (electricity)</td><td style="color:var(--color-positive);font-weight:700">$0.00</td><td>$0.00</td><td>&#11088;&ndash;&#11088;&#11088;&#11088;</td></tr>
          </tbody>
        </table>
      </div>
      <div class="two-cols" style="margin-top:8px">
        <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Example:</strong> 2048 game with Claude Sonnet 4.6: <strong>~50K input + ~20K output = $0.45</strong>. With Haiku for Explore/Plan and Sonnet only for Build: <strong>~$0.25</strong>. A full day of coding: <strong>$2-5</strong>.
        </div>
        <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Live prices:</strong> <a href="https://pricepertoken.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">pricepertoken.com</a> &ndash; 300+ models compared. Prices change constantly, <strong>trend: always cheaper</strong>.
        </div>
      </div>
    `,
  },

  // ===== 7: Pricing & Hosting =====
  {
    id: 'pricing',
    theme: '',
    label: 'Pricing',
    content: `
      <span class="slide-label">Business Models</span>
      <h2 class="slide-title">Pricing, Hosting & the Catch</h2>
      <p class="slide-subtitle">Free doesn't mean without cost &ndash; and the best models are only available in the cloud</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <table class="comparison" style="font-size:0.9rem">
            <thead>
              <tr>
                <th>Model</th>
                <th>Price (API)</th>
                <th>On-Prem?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Qwen 3</strong></td>
                <td style="color:var(--color-positive);font-weight:700">Free</td>
                <td style="color:var(--color-positive)">&#10003; Yes</td>
              </tr>
              <tr>
                <td><strong>LLaMA 4</strong></td>
                <td style="color:var(--color-positive);font-weight:700">Free</td>
                <td style="color:var(--color-positive)">&#10003; Yes</td>
              </tr>
              <tr>
                <td><strong>DeepSeek R1</strong></td>
                <td>~$2.19/M</td>
                <td style="color:var(--color-positive)">&#10003; Yes</td>
              </tr>
              <tr>
                <td><strong>Gemini 2.5</strong></td>
                <td>~$1.25-10/M</td>
                <td style="color:var(--color-critical)">&#10007; No</td>
              </tr>
              <tr>
                <td><strong>GPT-4.1</strong></td>
                <td>~$2-8/M</td>
                <td style="color:var(--color-critical)">&#10007; No</td>
              </tr>
              <tr>
                <td><strong>Claude Opus 4</strong></td>
                <td>~$15-75/M</td>
                <td style="color:var(--color-critical)">&#10007; No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">The Dilemma</h3>
          <ul class="feature-list" style="gap:8px">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">$</span><span><strong>Free = Data</strong> &ndash; "If the product costs nothing, your data is the product." Alibaba learns from every prompt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#9650;</span><span><strong>Top models cloud only</strong> &ndash; Opus, Codex, o3 only via AWS, Azure, GCP.</span></li>
            <li><span class="check">&#128274;</span><span><strong>On-prem = Control</strong> &ndash; But less powerful.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Subscriptions</strong> &ndash; ChatGPT, Claude, Gemini: $20/mo each.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">&#128187;</span><span><strong>On-prem = GPU problem</strong> &ndash; Models keep growing, GPUs become outdated quickly.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-primary);font-weight:700;margin-bottom:2px">Bottom line</p>
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
          On-prem sounds like control &ndash; but models keep getting bigger every few months. <strong>Cloud remains the only option to stay up-to-date.</strong>
        </p>
      </div>
    `,
  },

  // ===== Model Hosting: GPU vs API =====
  {
    id: 'hosting',
    theme: 'slide--dark',
    label: 'Hosting',
    content: `
      <span class="slide-label">Model Hosting</span>
      <h2 class="slide-title">GPU Instances vs. Token APIs</h2>
      <p class="slide-subtitle">Why running your own GPUs in the cloud is almost never cheaper than token-based services</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <table class="comparison">
            <thead>
              <tr>
                <th></th>
                <th>GPU Instance (EC2)</th>
                <th>Token API (Bedrock)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cost</strong></td>
                <td>$24k-72k/month</td>
                <td>Pay-per-token</td>
              </tr>
              <tr>
                <td><strong>Idle cost</strong></td>
                <td style="color:#ff6c12;font-weight:700">Full &ndash; 24/7</td>
                <td style="color:var(--color-accent);font-weight:700">$0</td>
              </tr>
              <tr>
                <td><strong>Scaling</strong></td>
                <td>Manual / Cold start</td>
                <td>Automatic, instant</td>
              </tr>
              <tr>
                <td><strong>Ops effort</strong></td>
                <td>High (vLLM, drivers, OOM)</td>
                <td>Near zero</td>
              </tr>
              <tr>
                <td><strong>Model switch</strong></td>
                <td>Re-deploy required</td>
                <td>One API parameter</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:12px">
            Source: <a href="https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">AWS Decision Guide: Bedrock vs. SageMaker</a> &middot;
            <a href="https://a16z.com/navigating-the-high-cost-of-ai-compute/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">a16z: High Cost of AI Compute</a>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">The Core Problem</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>GPU utilization under 50%?</strong> &ndash; Then you're paying 2-5x more than via token API. Most companies use AI in bursts &ndash; not 24/7.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>p5.48xlarge = $72k/month</strong> &ndash; Whether 1 token or 1 trillion &ndash; the GPU bill comes regardless.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Hidden costs</strong> &ndash; ML engineers ($150-300k/year), monitoring, redundancy, GPU drivers. The instance is only 40-60% of the cost.</span></li>
            <li><span class="check">&#128200;</span><span><strong>Break-even only at ~200-500M tokens/month</strong> &ndash; That's ~10,000 conversations per day, sustained 24/7. Very few have that.</span></li>
          </ul>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">a16z (2023):</strong> "App companies generating $50M+ ARR run hosted model services. Self-hosting only pays off above >$50M/year infrastructure spend."
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 8: The Race =====
  {
    id: 'race',
    theme: 'slide--dark',
    label: 'The Race',
    content: `
      <span class="slide-label">Status Quo</span>
      <h2 class="slide-title">The Race</h2>
      <p class="slide-subtitle">A new &ldquo;best model&rdquo; every week &ndash; the pace is breathtaking</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px">
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#128640;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Monthly Releases</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Anthropic, OpenAI, Google outpacing each other on a weekly basis</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#129504;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Reasoning Explodes</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Chain-of-Thought, o3, DeepSeek R1 &ndash; models now &ldquo;think&rdquo;</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#127757;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Open Source Catches Up</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Qwen 3, LLaMA 4, DeepSeek closing the gap to closed-source</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#128176;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Prices in Free Fall</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">$60/M tokens in 2023 &rarr; $2 or less today</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#9888;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Safety Debate</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Rapid progress, open questions on alignment, bias, control</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#129352;</div>
          <strong style="font-size:0.9rem;color:var(--color-accent)">Cursor beats Claude &amp; GPT-5</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">86% less cost &ndash; reportedly based on open-source Kimi k2.5</p>
        </div>
       </div>
      <div style="padding:10px 14px;border-radius:8px;background:rgba(191,6,67,0.08);border:1px solid rgba(191,6,67,0.2);margin-top:10px">
        <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
          <strong style="color:#ff6b6b">&#9888; Models learn from models (Distillation)</strong> &ndash; Cursor is reportedly based on Kimi K2.5. Anthropic detected industrial-scale distillation by DeepSeek, Moonshot &amp; MiniMax: 16M requests via 24,000 fraudulent accounts to copy Claude's capabilities.
          <a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;margin-left:4px">Anthropic Report</a>
        </p>
      </div>
      <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
        <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Artificial Analysis</a>
        <span style="color:var(--color-text-on-dark-subdued);font-size:0.78rem">&middot;</span>
        <a href="https://newsletter.genai.works/p/cursor-s-new-model-beats-claude-and-costs-86-less" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Cursor Model</a>
        <span style="color:var(--color-text-on-dark-subdued);font-size:0.78rem">&middot;</span>
        <a href="https://www.reddit.com/r/singularity/comments/1ryrs2w/cursors_composer_2_model_is_apparently_just_kimi/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Kimi k2.5</a>
      </div>
    `,
  },

  // ===== Quiz: History =====
  {
    id: 'quiz-history',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Knowledge Check: History of AI</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. When was ChatGPT released and how quickly did it reach 100 million users?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">2021 &ndash; in 6 months</button>
            <button class="quiz-option" data-correct="true">November 30, 2022 &ndash; in 2 months</button>
            <button class="quiz-option" data-correct="false">2023 &ndash; in 1 year</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. Why did many users uninstall ChatGPT in 2026?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Because it became too expensive</button>
            <button class="quiz-option" data-correct="true">Because of OpenAI's Pentagon deal and the announcement of ads</button>
            <button class="quiz-option" data-correct="false">Because Claude was better</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. What does the example "$82,314 in 48 hours" illustrate?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">How much an AI model costs</button>
            <button class="quiz-option" data-correct="false">The revenue of an AI startup</button>
            <button class="quiz-option" data-correct="true">How quickly costs can explode from a leaked API key</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
