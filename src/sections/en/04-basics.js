export const basicsSlides = [
  // ===== SECTION DIVIDER - The Basics =====
  {
    id: 'section-basics',
    theme: 'slide--accent slide--divider',
    label: 'Basics',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">&#129504;</div>
      <h2 class="slide-title" style="color:var(--color-bg-dark)">The Basics</h2>
      <p class="slide-subtitle" style="color:var(--color-bg-dark);opacity:0.7">How does all of this actually work?</p>
    `,
  },

  // ===== How does an LLM think? =====
  {
    id: 'llm-thinking',
    theme: 'slide--dark',
    label: 'LLM Basics',
    content: `
      <span class="slide-label">Fundamentals</span>
      <h2 class="slide-title">How does an LLM "think"?</h2>
      <p class="slide-subtitle">Spoiler: It doesn&rsquo;t think. It <strong>calculates probabilities</strong> &ndash; extremely well.</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Token Prediction</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:12px;font-size:0.9rem">
            An LLM does only one thing: It predicts the <strong>next token</strong>. Over and over. (Token &asymp; word parts &ndash; not always full words)
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              How it works
            </div>
            <div class="code-body"><pre><span class="code-comment">// Input</span>
<span class="code-string">"The capital of France is"</span>

<span class="code-comment">// LLM calculates probabilities:</span>
<span class="code-property">"Paris"</span>    <span class="code-number">96.2%</span>
<span class="code-property">"Lyon"</span>     <span class="code-number"> 1.1%</span>
<span class="code-property">"Berlin"</span>   <span class="code-number"> 0.3%</span>

<span class="code-comment">// Selects a probable token</span>
<span class="code-comment">// (often highest, but sampling possible):</span>
<span class="code-keyword">&rarr;</span> <span class="code-string">"Paris"</span>

<span class="code-comment">// Then: token by token.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Like your phone &ndash; but for everything</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:14px">
            <p style="font-size:0.9rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128241; <strong>Phone autocomplete</strong> &ndash; "Be right" &rarr; phone suggests "back". <strong>Same principle.</strong> But context-sensitive with billions of parameters, not simple N-grams.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Why does it work so well?</h3>
          <ul class="feature-list" style="font-size:0.9rem">
            <li><span class="check">&#128218;</span><span><strong>Large text corpora</strong> &ndash; Books, web pages, code, Wikipedia &ndash; not simply "the internet"</span></li>
            <li><span class="check">&#129504;</span><span><strong>Transformer + Attention</strong> &ndash; Recognizes relationships across thousands of tokens (2017, "Attention Is All You Need")</span></li>
            <li><span class="check">&#128200;</span><span><strong>Scaling</strong> &ndash; More data + more compute = capabilities <em>that feel like thinking</em></span></li>
          </ul>
          <div style="padding:8px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.15);margin-top:10px">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              &#9888; No real world model, no consciousness, no own goals &ndash; even if it seems that way.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== How does a neural network learn? =====
  {
    id: 'nn-learning',
    theme: 'slide--dark',
    label: 'How AI Learns',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">How does a neural network learn?</h2>
      <p class="slide-subtitle">An example: Learning whether an email is spam &ndash; <strong>step by step</strong></p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The principle: Trial &amp; Correction</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#127922; <strong>Like a child learning to ride a bike:</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Try &rarr; Fall &rarr; Correct &rarr; Get better. Not by reading rules, but through <strong>thousands of attempts</strong>.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Example: Spam Detection</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Training &ndash; Round 1
            </div>
            <div class="code-body"><pre><span class="code-comment">// Training data (with answers!):</span>
<span class="code-string">"Win a free iPhone!!!"</span>     <span class="code-keyword">&rarr; Spam</span>
<span class="code-string">"Meeting tomorrow at 10"</span>   <span class="code-keyword">&rarr; Not Spam</span>
<span class="code-string">"You won 1M EUR"</span>          <span class="code-keyword">&rarr; Spam</span>

<span class="code-comment">// Network guesses (random at first):</span>
<span class="code-property">"Win a free iPhone"</span> <span class="code-number">&rarr; 50% Spam</span>  <span class="code-comment">&#10007; Wrong!</span>

<span class="code-comment">// Calculate error (loss):</span>
<span class="code-property">Expected: 100%</span> | <span class="code-property">Got: 50%</span> | <span class="code-number">Error: 50%</span>

<span class="code-comment">// Adjust weights (backpropagation):</span>
<span class="code-comment">// "free" &amp; "!!!" get more weight</span>
<span class="code-comment">// for spam detection.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">After millions of rounds</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Training &ndash; Round 5,000,000
            </div>
            <div class="code-body"><pre><span class="code-comment">// Now the network recognizes patterns:</span>
<span class="code-string">"Free iPhone"</span>       <span class="code-number">&rarr; 99.1% Spam</span> <span class="code-comment">&#10003;</span>
<span class="code-string">"Meeting at 10"</span>     <span class="code-number">&rarr;  0.3% Spam</span> <span class="code-comment">&#10003;</span>
<span class="code-string">"Instant credit!!"</span>  <span class="code-number">&rarr; 97.8% Spam</span> <span class="code-comment">&#10003;</span>

<span class="code-comment">// Learned patterns (simplified):</span>
<span class="code-property">"free"</span>      <span class="code-keyword">+0.8 Spam</span>
<span class="code-property">"win"</span>       <span class="code-keyword">+0.7 Spam</span>
<span class="code-property">"!!!"</span>       <span class="code-keyword">+0.4 Spam</span>
<span class="code-property">"meeting"</span>   <span class="code-keyword">-0.6 Spam</span>
<span class="code-property">"project"</span>   <span class="code-keyword">-0.5 Spam</span></pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin:10px 0 8px">For an LLM &ndash; same principle</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Instead of Spam/Not-Spam: <strong>Predict the next word</strong>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Instead of thousands of emails: <strong>Trillions of sentences</strong> from the internet
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Instead of a few weights: <strong>Hundreds of billions of parameters</strong>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Instead of minutes: <strong>Months on thousands of GPUs</strong>, cost: $100M+
            </div>
          </div>
          <div style="margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Remember:</strong> No human programs rules. The network finds patterns <strong>by itself</strong> &ndash; through millions of trial-and-correction cycles.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive 1: Tokenization & Embeddings =====
  {
    id: 'llm-deepdive-1',
    theme: '',
    label: 'Deep Dive 1',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Step 1: From Text to Mathematics</h2>
      <p class="slide-subtitle">How your prompt becomes numbers that a computer can calculate with</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Tokenization</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Your text is split into tokens. Each token is assigned a <strong>fixed ID from the vocabulary</strong> (~100k entries, model-dependent).
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Prompt &rarr; Tokens &rarr; IDs
            </div>
            <div class="code-body"><pre><span class="code-comment">// Your prompt:</span>
<span class="code-string">"Write a function that sorts users"</span>

<span class="code-comment">// Tokenized (sub-words, with spaces):</span>
[<span class="code-property">"Write"</span>, <span class="code-property">" a"</span>, <span class="code-property">" function"</span>,
 <span class="code-property">" that"</span>, <span class="code-property">" sorts"</span>, <span class="code-property">" users"</span>]

<span class="code-comment">// As IDs from the vocabulary:</span>
[<span class="code-number">6761</span>, <span class="code-number">264</span>, <span class="code-number">734</span>, <span class="code-number">430</span>, <span class="code-number">21377</span>, <span class="code-number">3932</span>]

<span class="code-comment">// + Position encoding (order matters!)</span>
<span class="code-comment">// Without it: no difference between</span>
<span class="code-comment">// "dog bites man" and "man bites dog"</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Embeddings &ndash; Context as Coordinates</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Each token ID becomes a <strong>vector</strong> &ndash; a numerical representation that <strong>reflects meaning and context</strong> (statistically learned, not a real definition).
          </p>
          <div style="padding:12px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.88rem;line-height:1.5">
              &#127758; <strong>GPS coordinates for words</strong><br>
              <span style="color:var(--color-text-subdued)">"function" and "method" are close. "banana" far away. Not 2D, but <strong>typically 768–4096 dimensions</strong>.</span>
            </p>
          </div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Embedding vector (simplified)
            </div>
            <div class="code-body" style="font-size:0.8rem"><pre><span class="code-comment">// "function" (4096 dims):</span>
[<span class="code-number">0.23</span>, <span class="code-number">-0.87</span>, <span class="code-number">0.44</span>, <span class="code-number">0.12</span> ...]

<span class="code-comment">// "method" &ndash; nearby:</span>
[<span class="code-number">0.21</span>, <span class="code-number">-0.85</span>, <span class="code-number">0.41</span>, <span class="code-number">0.14</span> ...]

<span class="code-comment">// "banana" &ndash; far away:</span>
[<span class="code-number">-0.72</span>, <span class="code-number">0.54</span>, <span class="code-number">-0.11</span>, <span class="code-number">0.88</span> ...]</pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive 2: Attention & Generation =====
  {
    id: 'llm-deepdive-2',
    theme: 'slide--dark',
    label: 'Deep Dive 2',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Step 2: Attention & Token Generation</h2>
      <p class="slide-subtitle">How the AI recognizes relationships and writes code token by token</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Attention &ndash; "What do I focus on?"</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Each token <strong>weights all other tokens in context</strong> and combines the information. This runs through 80&ndash;128 layers &ndash; each refines the representation. Technically via Query-, Key- and Value-vectors.
          </p>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:12px">
            <p style="font-size:0.88rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128101; <strong>Conference room:</strong>
              <span style="color:var(--color-text-on-dark-subdued);display:block;margin-top:4px">"Write a <strong>function</strong> that <strong>sorts users</strong>" &ndash; "function", "sorts", "users" are strongly connected. "a", "that" much less. That&rsquo;s what Attention calculates &ndash; mathematically, for the entire context.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Temperature</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check">&#129482;</span><span><strong>Temp 0</strong> &ndash; Very focused, almost always the most likely token. Ideal for code.</span></li>
            <li><span class="check">&#127912;</span><span><strong>Temp 1+</strong> &ndash; Flatter probability distribution &rarr; more variety, but also more errors.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">How code is created &ndash; token by token</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Generation step by step
            </div>
            <div class="code-body"><pre><span class="code-comment">// Prompt: "Write a function that sorts users"</span>

<span class="code-comment">// Step 1:</span> <span class="code-keyword">def</span>        <span class="code-comment">(P=0.87)</span>
<span class="code-comment">// Step 2:</span> <span class="code-function">sort</span>       <span class="code-comment">(P=0.72)</span>
<span class="code-comment">// Step 3:</span> _users     <span class="code-comment">(P=0.91)</span>
<span class="code-comment">// Step 4:</span> (          <span class="code-comment">(P=0.99)</span>
<span class="code-comment">// ...</span>

<span class="code-keyword">def</span> <span class="code-function">sort_users</span>(users, key=<span class="code-string">"name"</span>):
    <span class="code-keyword">return</span> <span class="code-function">sorted</span>(
        users,
        key=<span class="code-keyword">lambda</span> u: u[key]
    )</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Important:</strong> The model has <em>no real semantic understanding like a human</em>. It uses statistical patterns: after <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">def sort_</code> comes <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">users(</code> &ndash; because it learned <strong>abstract patterns, syntax and structure</strong> from millions of examples.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Common Sense & Limitations =====
  {
    id: 'common-sense',
    theme: '',
    label: 'Common Sense',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Limitations</span>
      <h2 class="slide-title">Why AI sometimes gives "dumb" answers</h2>
      <p class="slide-subtitle">Statistics vs. world understanding &ndash; and what dimensions have to do with it</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">The Car Wash Problem</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Prompt to the AI
            </div>
            <div class="code-body"><pre><span class="code-comment">// User:</span>
<span class="code-string">"It&rsquo;s sunny. I live 100m from
the car wash.
Should I walk or drive?"</span>

<span class="code-comment">// AI responds:</span>
<span class="code-property">"At only 100m distance and sunny
weather, I&rsquo;d recommend walking.
It&rsquo;s healthy and saves gas."</span>

<span class="code-comment">// Human thinks:</span>
<span class="code-keyword">"You have to drive &ndash; the car needs
to get to the car wash!"</span> &#128561;</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.15)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-critical)">What happened?</strong> The AI applied the <strong>statistical pattern</strong> "short distance + good weather = walk". But it didn&rsquo;t truly understand the <strong>purpose</strong> (washing the car).
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Why does this happen?</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>No world model</strong> &ndash; The AI doesn&rsquo;t "know" what a car wash <em>does</em>. It only knows statistical relationships between words.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Implicit knowledge is missing</strong> &ndash; A human knows: car wash = car gets washed = car must be there. The AI only sees: distance + weather.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Dimensions help, but not enough</strong> &ndash; More dimensions (4096+) capture <em>more</em> nuance &ndash; e.g. "car wash" is closer to "car" than to "walk". But <strong>spatial reasoning, causality, and common sense</strong> aren&rsquo;t the same as word proximity.</span></li>
          </ul>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0">More classics</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "How many R&rsquo;s in <strong>Strawberry</strong>?" &ndash; AI: "2" <span style="color:var(--color-critical)">&#10007;</span> <span style="color:var(--color-text-subdued)">(It&rsquo;s 3 &ndash; tokens &#8800; characters)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "What&rsquo;s heavier: 1 kg of steel or 1 kg of feathers?" &ndash; AI used to say: "Steel" <span style="color:var(--color-text-subdued)">(Pattern: steel = heavy)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "I put an egg on the table and leave. Where is the egg?" &ndash; AI sometimes gets it wrong
            </div>
          </div>
          <div style="margin-top:8px;padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Takeaway:</strong> LLMs are getting better at common sense &ndash; but they <strong>simulate</strong> understanding through patterns, rather than truly comprehending the world. That&rsquo;s why: <strong>Always verify critically.</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== What are Tokens? =====
  {
    id: 'tokens',
    theme: '',
    label: 'Tokens',
    content: `
      <span class="slide-label">Fundamentals</span>
      <h2 class="slide-title">But what exactly are Tokens?</h2>
      <p class="slide-subtitle">We keep talking about tokens &ndash; the currency in which AI thinks, computes, and bills</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">What is a Token?</h3>
          <p style="color:var(--color-text-subdued);line-height:1.6;margin-bottom:16px">
            A token is a piece of text &ndash; usually a word or part of a word. Rule of thumb: <strong>1 token &asymp; &frac34; of a word</strong>.
          </p>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Tokenization
            </div>
            <div class="code-body"><pre><span class="code-comment">// This sentence:</span>
<span class="code-string">"Hello, how are you doing?"</span>

<span class="code-comment">// Becomes these tokens:</span>
[<span class="code-property">"Hello"</span>, <span class="code-property">","</span>, <span class="code-property">" how"</span>,
 <span class="code-property">" are"</span>, <span class="code-property">" you"</span>, <span class="code-property">" doing"</span>, <span class="code-property">"?"</span>]

<span class="code-comment">// = 7 Tokens</span>

<span class="code-comment">// Code is also tokenized:</span>
<span class="code-string">"function hello() { return 'world'; }"</span>
<span class="code-comment">// = ~11 Tokens</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Everyday comparisons</h3>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 text message</strong> (20 words) <span style="float:right;color:var(--color-primary);font-weight:700">~27 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 email</strong> (200 words) <span style="float:right;color:var(--color-primary);font-weight:700">~270 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 page of code</strong> (~50 lines) <span style="float:right;color:var(--color-primary);font-weight:700">~500 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>Harry Potter Book 1</strong> (77,000 words) <span style="float:right;color:var(--color-primary);font-weight:700">~103,000 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>Entire Spring Boot project</strong> <span style="float:right;color:var(--color-primary);font-weight:700">~500,000+ Tokens</span></p>
            </div>
          </div>
          <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Cost:</strong> 1M tokens with Claude Sonnet &asymp; $6. That&rsquo;s about 750,000 words &ndash; roughly reading and answering 10 Harry Potter books.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Context - The Memory =====
  {
    id: 'context',
    theme: 'slide--dark',
    label: 'Context',
    content: `
      <span class="slide-label">Fundamentals</span>
      <h2 class="slide-title">Context &ndash; The AI&rsquo;s "Memory"</h2>
      <p class="slide-subtitle">Everything the AI can "see" at once. And what happens when it&rsquo;s full.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">What is Context?</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.6;margin-bottom:10px">
            Imagine you&rsquo;re sitting in a meeting. <strong>The context is everything you can remember simultaneously.</strong> Some people listen extremely well, remember every detail &ndash; they have a large context. Others are distracted, only catch snippets &ndash; small context. It&rsquo;s the same with AI: system prompt, your question, all previous messages, pasted code &ndash; everything together has to fit.
          </p>
          <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);line-height:1.6">
              &#128214; <strong>Analogy: Desk</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Context window = the size of your desk. The bigger it is, the more documents fit on it at once. But at some point it&rsquo;s full &ndash; then you have to remove things.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Context windows today</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>GPT-4</strong> (2023): 8k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 10 pages</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>Claude 3</strong> (2024): 200k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 1 entire book</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,237,0,0.1);font-size:0.9rem;color:var(--color-accent);font-weight:600">
              <strong>Gemini 2.5</strong> (2025): 1M Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 13 Harry Potter books</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">What happens when it&rsquo;s full?</h3>
          <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.25);margin-bottom:10px">
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);line-height:1.6">
              &#9888; <strong>The AI forgets.</strong> Everything that no longer fits in the context window ceases to exist for it. It doesn&rsquo;t "remember" yesterday, not last week. Every conversation starts from zero.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">In practice this means:</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Long chats get "dumb"</strong> &ndash; The longer the conversation, the earlier the AI forgets the beginning. It suddenly contradicts itself.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Large codebases don&rsquo;t fit</strong> &ndash; A Spring Boot project with 500k tokens doesn&rsquo;t fit in 200k context. The AI never sees the full picture.</span></li>
            <li><span class="check">&#128161;</span><span><strong>Solution: RAG</strong> &ndash; Retrieval Augmented Generation. Only the relevant code parts are loaded, not everything. Like a librarian who fetches the right book.</span></li>
            <li><span class="check">&#128161;</span><span><strong>Solution: agent.md / CLAUDE.md</strong> &ndash; Give the AI a "memory" as a file. Project rules, architecture, conventions &ndash; always in context.</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Context Compression =====
  {
    id: 'context-compression',
    theme: '',
    label: 'Compression',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">What happens when the context is full?</h2>
      <p class="slide-subtitle">Systems around the AI must reduce the context &ndash; details get lost in the process</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:12px">
            <p style="font-size:0.95rem;line-height:1.5">
              &#129504; <strong>Analogy: Brain</strong><br>
              <span style="color:var(--color-text-subdued)">This morning it was 4.7&deg;C and drizzling. Now you only know: <strong>"It was cold and rainy."</strong><br>Details gone, essence retained &ndash; but: unlike the brain, <em>the AI stores nothing permanently</em>.</span>
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">Strategies (of the system, not the AI itself)</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check">&#9986;</span><span><strong>Sliding Window</strong> &ndash; Oldest tokens are removed. Simple, but information loss.</span></li>
            <li><span class="check">&#128221;</span><span><strong>Summarization</strong> &ndash; Content is compressed. Nuances get lost.</span></li>
            <li><span class="check">&#128269;</span><span><strong>RAG</strong> &ndash; Only load relevant parts instead of keeping everything in context.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1rem;margin-bottom:10px">The problem with this</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Compression loses <strong>nuances</strong> &ndash; "It was cold" instead of "4.7&deg;C with fog from 07:30"</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Without stored memory features, every request starts <strong>without context</strong></span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>You <strong>can&rsquo;t see what&rsquo;s missing</strong> &ndash; the AI doesn&rsquo;t signal context loss</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Missing context leads to <strong>inconsistencies</strong> &ndash; not to real "forgetting"</span></li>
          </ul>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">One possible solution:</strong> Persistent instructions loaded <strong>with every request</strong> &ndash; rules, project context, behavior. That&rsquo;s the idea behind <strong>agents.md</strong>.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== agents.md =====
  {
    id: 'agents-md',
    theme: 'slide--dark',
    label: 'agents.md',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">agents.md &ndash; The Long-Term Memory</h2>
      <p class="slide-subtitle">A file that&rsquo;s always in context. Behavioral rules, project context, personality.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">The principle &ndash; very simple</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>If cold</strong> &rarr; Put on warm clothes
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>If rain</strong> &rarr; Bring an umbrella
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);font-size:0.95rem;color:var(--color-accent)">
              <strong>If Java project</strong> &rarr; Behave like a Senior Java Dev
            </div>
          </div>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:12px">
            Every project, every agent gets such a file. It&rsquo;s automatically loaded with every conversation &ndash; no matter how often the context is compressed.
          </p>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">
            Specification: <a href="https://agents.md" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agents.md</a> &middot; Also: CLAUDE.md, .cursorrules
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Real example: My WW Agent</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              meal-screenshot-intake/agents.md
            </div>
            <div class="code-body"><pre><span class="code-comment">## Purpose</span>
<span class="code-string">Flow for incoming meal screenshots.</span>

<span class="code-comment">## Process</span>
<span class="code-number">1.</span> <span class="code-keyword">Check:</span> Does screenshot contain meals?
<span class="code-number">2.</span> <span class="code-keyword">If yes:</span> Load workflow from AGENT.md
<span class="code-number">3.</span> <span class="code-keyword">If no date:</span> Ask
   <span class="code-string">"Is this meal for today?"</span>
<span class="code-number">4.</span> <span class="code-keyword">If "no":</span> Ask for day, convert to JSON
<span class="code-number">5.</span> <span class="code-keyword">Generate JSON</span> &rarr; run_skill.sh
<span class="code-number">6.</span> <span class="code-keyword">Feedback</span> to user

<span class="code-comment">## Boundaries</span>
<span class="code-string">- Don&rsquo;t mix repo context</span>
<span class="code-string">- No external sends without permission</span></pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sub-Agents: Theory =====
  {
    id: 'subagents-theory',
    theme: '',
    label: 'Sub-Agents',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Sub-Agents &ndash; AI Specialist Team</h2>
      <p class="slide-subtitle">Every project role can be its own agent &ndash; with its own context and its own tools</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">One project &ndash; which roles does it need?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128270; <strong>Researcher</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Gather requirements</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128188; <strong>Product Owner</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Prioritize requirements</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#127959; <strong>Architect</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Plan structure</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128187; <strong>Developer</strong></span><span style="color:var(--color-primary);font-size:0.8rem;font-weight:600">Write code</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128270; <strong>Code Reviewer</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Check quality</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#129514; <strong>Tester</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Write &amp; run tests</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128196; <strong>Doc Writer</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Generate documentation</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Why Sub-Agents?</h3>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.95rem;line-height:1.6">
              &#129504; <strong>Each agent has its own context.</strong> The developer doesn&rsquo;t need to know the 200 pages of research. They just get: <em>"Build a REST endpoint for users with pagination."</em> That saves context and prevents confusion.
            </p>
          </div>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#127919;</span><span><strong>Focus</strong> &ndash; Each agent is an expert at one thing. Better results than a "can do everything" agent.</span></li>
            <li><span class="check">&#128274;</span><span><strong>Isolation</strong> &ndash; Each agent only sees what it needs. No context overflow.</span></li>
            <li><span class="check">&#9889;</span><span><strong>Parallelism</strong> &ndash; Researcher, tester, and doc agent can work simultaneously.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Cost</strong> &ndash; Simple tasks on cheap models (Haiku), complex ones on Opus.</span></li>
          </ul>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">All of these roles can be sub-agents.</strong> Each with its own agents.md, its own model, its own tools. The orchestrator distributes the work.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sub-Agents: Deep Dive =====
  {
    id: 'subagents-deepdive',
    theme: 'slide--dark',
    label: 'Sub-Agents Deep Dive',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Sub-Agents in Practice</h2>
      <p class="slide-subtitle">The concept exists everywhere &ndash; Claude Code has the most elegant implementation</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Sub-Agents are everywhere</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>Claude Code</strong></span><span style="color:var(--color-accent)">.md files, built-in agents</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>CrewAI</strong></span><span style="color:var(--color-text-on-dark-subdued)">"Crews" of specialists</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>LangGraph</strong></span><span style="color:var(--color-text-on-dark-subdued)">Multi-Agent Workflows</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>AutoGen (Microsoft)</strong></span><span style="color:var(--color-text-on-dark-subdued)">Multi-Agent Conversations</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>n8n / OpenClaw</strong></span><span style="color:var(--color-text-on-dark-subdued)">Workflow Sub-Agents</span>
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Example: Claude Code</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              .claude/agents/code-reviewer.md
            </div>
            <div class="code-body"><pre><span class="code-comment">---</span>
<span class="code-property">name</span>: <span class="code-string">code-reviewer</span>
<span class="code-property">tools</span>: <span class="code-string">Read, Grep, Glob, Bash</span>
<span class="code-property">model</span>: <span class="code-string">sonnet</span>
<span class="code-comment">---</span>

You are a Senior Code Reviewer.
Feedback by priority:
<span class="code-string">- Critical (must fix)</span>
<span class="code-string">- Warning (should fix)</span>
<span class="code-string">- Suggestion (nice to have)</span></pre></div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.8rem">
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Claude Code Docs</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://code.claude.com/docs/de/agent-teams" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Agent Teams</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">awesome-subagents</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Built-in Sub-Agents</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128270; <strong>Explore</strong> &ndash; Read-only, Haiku. Search the codebase without burdening context.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128203; <strong>Plan</strong> &ndash; Read-only. Research for planning mode.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128295; <strong>General</strong> &ndash; All tools. Complex multi-step tasks.
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Key Features</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#128176;</span><span><strong>Model per agent</strong> &ndash; Reviewer on Sonnet, Explorer on Haiku (cheaper &amp; faster)</span></li>
            <li><span class="check">&#129504;</span><span><strong>Own context</strong> &ndash; Results stay with the sub-agent, only a summary goes back</span></li>
            <li><span class="check">&#128260;</span><span><strong>Parallel &amp; Background</strong> &ndash; Multiple sub-agents simultaneously while you keep working</span></li>
            <li><span class="check">&#128218;</span><span><strong>Persistent Memory</strong> &ndash; Agents learn across sessions (patterns, conventions)</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== The Agent Landscape =====
  {
    id: 'agent-landscape',
    theme: 'slide--dark',
    label: 'Agent Tools',
    content: `
      <span class="slide-label">Coding Agents</span>
      <h2 class="slide-title">The Agent Landscape</h2>
      <p class="slide-subtitle">Which coding agents exist &ndash; and when do I need which one?</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">The most important tools</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Claude Code</strong> &ndash; Best coding agent right now. Terminal-based. Autonomous.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>OpenCode</strong> &ndash; Open-source alternative. We use it for live examples.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>OpenClaw / Clawdbot</strong> &ndash; Personal agent. Mac Mini hype.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; IDE-integrated. Autocomplete + Chat.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>Cursor / Continue / Windsurf</strong> &ndash; IDE forks with agent integration.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Local vs. Remote vs. Global</h3>
          <table class="comparison" style="font-size:0.8rem">
            <thead>
              <tr>
                <th>Use Case</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Code on my machine</td>
                <td style="color:var(--color-accent);font-weight:700">Local</td>
              </tr>
              <tr>
                <td>Code review per MR</td>
                <td style="color:#ff6c12;font-weight:700">Remote</td>
              </tr>
              <tr>
                <td>Build frontend tests</td>
                <td style="color:#ff6c12;font-weight:700">Remote</td>
              </tr>
              <tr>
                <td>Call center bot</td>
                <td style="font-weight:700">Global</td>
              </tr>
              <tr>
                <td>MCP + Confluence</td>
                <td style="font-weight:700">Global</td>
              </tr>
              <tr>
                <td>OpenClaw assistant</td>
                <td style="font-weight:700">Global</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:8px;padding:8px 10px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">Local</strong> = your machine &middot; <strong style="color:#ff6c12">Remote</strong> = CI/CD &middot; <strong>Global</strong> = centralized
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Practice: Our Agents in GitLab =====
  {
    id: 'gitlab-agents',
    theme: '',
    label: 'Practice GitLab',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">What we already use</span>
      <h2 class="slide-title">3 Agents in Production</h2>
      <p class="slide-subtitle">What we&rsquo;ve already automated with AI agents at <a href="https://github.com/huk-coburg" target="_blank" rel="noopener" style="color:var(--color-primary);font-weight:700;text-decoration:underline">@HUK-Coburg</a></p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Our 3 GitLab Agents</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128270; Code Review Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Reviews every merge request automatically. Finds bugs, security issues, style problems. Comments directly in the MR.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128196; Doc Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Generates technical documentation from code changes. API docs, changelogs, architecture overviews.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128218; Hands-On Doc Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Generates practical guides based on the latest changes. "How do I use the new feature?" &ndash; automatically.</p>
            </div>
          </div>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-positive)">Effort:</strong> 8-12 hours per agent. The effort to do it manually? <strong>At least the same &ndash; for every single MR.</strong>
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">What&rsquo;s coming next</h3>
          <div style="padding:20px;border-radius:10px;background:var(--color-bg-subdued);border:2px dashed var(--color-border-primary);margin-bottom:10px">
            <p style="font-size:1rem;line-height:1.6">
              &#128640; <strong>The next agent:</strong>
            </p>
            <ol style="margin:8px 0 0 20px;font-size:0.95rem;color:var(--color-text-subdued);line-height:1.8">
              <li>Reads <strong>Confluence</strong> pages &amp; <strong>Jira</strong> issues</li>
              <li>Checks out the affected <strong>repos</strong></li>
              <li>Supports building <strong>test cases</strong></li>
              <li>Opens PRs with finished test suites</li>
            </ol>
            <p style="font-size:0.85rem;color:var(--color-text-neutral);margin-top:12px;font-style:italic">Technically possible &ndash; via MCP for Confluence/Jira + local agent per repo.</p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">What does this mean for us?</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Code reviews</strong> happen instantly, not after 2 days</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Docs are always up to date</strong> &ndash; because they&rsquo;re regenerated with every MR</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Onboarding becomes easier</strong> &ndash; Hands-on docs for every feature</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== The Blackbox =====
  {
    id: 'blackbox',
    theme: '',
    label: 'Blackbox',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Caution</span>
      <h2 class="slide-title">AI is a Blackbox</h2>
      <p class="slide-subtitle">The results are impressive &ndash; but don&rsquo;t trust blindly. In critical situations you must understand and be able to explain everything.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">What you can trace</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Input &amp; Output</strong> &ndash; What goes in, what comes out</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Tool Calls</strong> &ndash; Which files were read, which commands were executed</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Reasoning Tokens</strong> &ndash; With "thinking" models you can see the reasoning steps</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Token usage</strong> &ndash; How much context was consumed</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:8px">What you CANNOT trace</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Why this answer?</strong> &ndash; Billions of parameters. Not even the developers understand it.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Hallucinations</strong> &ndash; AI "invents" facts because the probability was high &ndash; not because it&rsquo;s true.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>What was forgotten</strong> &ndash; Context is silently compressed. You can&rsquo;t see what&rsquo;s missing.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>No debugging</strong> &ndash; No breakpoint, no stack trace. Same input, different output.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-warning)">Conclusion:</strong> AI is not comparable to traditional software development. There&rsquo;s no source code you can read, no unit tests for the model. <strong>Use AI as a tool &ndash; but understand what it produces.</strong> That&rsquo;s why you need: <strong>Human-in-the-Loop</strong> for critical decisions, <strong>Audit trails</strong> for traceability, <strong>Guardrails</strong> against uncontrolled actions, and clear <strong>access control</strong> &ndash; who is allowed to trigger what?
        </p>
      </div>
    `,
  },

  // ===== Master the craft, then the tool =====
  {
    id: 'craft-first',
    theme: 'slide--dark',
    label: 'Craft First',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Before we use AI</span>
      <h2 class="slide-title">Master the craft, then the tool</h2>
      <p class="slide-subtitle">The best knives, the most expensive stove, and the finest pot don&rsquo;t make a good meal.</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <div style="padding:20px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#127859; A chef with perfect equipment but no knowledge of flavor, textures, and techniques cooks <strong>mediocre</strong> food.
            </p>
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-accent);margin-top:8px">
              A developer with the best AI agent but no understanding of architecture, patterns, and standards produces <strong>mediocre code</strong>.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">AI is an accelerator &ndash; not a replacement</h3>
          <ul class="feature-list">
            <li><span class="check">&#128640;</span><span>AI makes you <strong>faster</strong> &ndash; but not automatically <strong>better</strong></span></li>
            <li><span class="check">&#128640;</span><span>Bad architecture + AI = <strong>bad architecture faster</strong></span></li>
            <li><span class="check">&#128640;</span><span>Good fundamentals + AI = <strong>10x productivity</strong></span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Still our responsibility</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#127959; <strong>Software Architecture</strong> &ndash; Clean Architecture, Domain-Driven Design, Microservices vs. Monolith
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128221; <strong>Coding Standards</strong> &ndash; SOLID, Design Patterns, Code Reviews, Testing Strategies
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128274; <strong>Security</strong> &ndash; OWASP, Threat Modeling, Secure Coding. AI doesn&rsquo;t know compliance.
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128200; <strong>Industry Standards</strong> &ndash; Domain-specific norms, regulations, compliance
            </div>
          </div>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">My recommendation:</strong> Especially now, when AI takes over so much, foundational knowledge becomes <strong>more important</strong>, not less. Architecture training, pattern workshops, security courses &ndash; these are needed more than ever. Because you have to evaluate what the AI produces.
            </p>
          </div>
          <div style="margin-top:10px;padding:14px;border-radius:8px;background:rgba(191,6,67,0.08);border:1px solid rgba(191,6,67,0.15)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:#ff6c12">Sober numbers:</strong> Only about 10% of companies see significant ROI from agentic systems so far. The integration and validation effort is massively underestimated. AI is no self-runner &ndash; it needs experts who guide it.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Reality Check =====
  {
    id: 'reality-check',
    theme: '',
    label: 'Reality Check',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Reality Check</span>
      <h2 class="slide-title">What the demos don&rsquo;t show</h2>
      <p class="slide-subtitle">Before we get started &ndash; the things that are missing from most workshops</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:10px">Agents are fragile</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Probabilistic outputs</strong> &ndash; Same prompt, different result. That&rsquo;s not a bug, that&rsquo;s the principle. Testing is hard.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Tool integration = error source</strong> &ndash; Every tool the agent uses (shell, API, DB) can fail. Error handling is often poor.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Exponentially complex</strong> &ndash; 3 tools = manageable. 10 tools = the state space explodes. Every combination is a potential edge case.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>No linear scaling</strong> &ndash; What works for a simple project often fails with large codebases due to context limits and hallucinations.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">What you need</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Human-in-the-Loop</strong> &ndash; For critical actions (deploy, DB changes, customer data) a human must approve.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Audit trails</strong> &ndash; Log what the agent does. Every tool call, every change. So you can trace what happened later.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Guardrails</strong> &ndash; Define what the agent is <em>not</em> allowed to do. No access to prod data. No push to main. No deletion without confirmation.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Expectation management</strong> &ndash; AI is a productivity tool, not a miracle. Plan time for review, validation, and rework.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">This doesn&rsquo;t mean "don&rsquo;t use it".</strong> It means: Use it with open eyes. The best results come from teams that understand <em>where</em> AI helps &ndash; and <em>where</em> it hurts.
        </p>
      </div>
    `,
  },

  // ===== Quiz: Basics =====
  {
    id: 'quiz-basics',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Knowledge Check: The Basics</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. What is a token?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">A complete sentence</button>
            <button class="quiz-option" data-correct="true">A piece of text &ndash; usually a word or part of a word (&frac34; of a word)</button>
            <button class="quiz-option" data-correct="false">A single character</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. What happens when the context is full?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">The AI stops immediately</button>
            <button class="quiz-option" data-correct="false">The context gets bigger</button>
            <button class="quiz-option" data-correct="true">Older messages are compressed or removed &ndash; details are lost</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Why is AI a "Blackbox"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="true">Because you can&rsquo;t trace why a specific result was produced &ndash; no debugging possible</button>
            <button class="quiz-option" data-correct="false">Because the casing is black</button>
            <button class="quiz-option" data-correct="false">Because the code is secret</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
