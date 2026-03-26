export const handsonSlides = [
  // ===== Hands-On: Setup =====
  {
    id: 'handson-setup',
    theme: 'slide--accent slide--divider',
    label: 'Hands-On',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">&#128640;</div>
      <h2 class="slide-title" style="color:var(--color-bg-dark)">Hands-On: Setup</h2>
      <p class="slide-subtitle" style="color:var(--color-bg-dark);opacity:0.7">We&rsquo;ll be working with OpenCode &ndash; the open-source coding agent</p>
      <div class="presenter-only-text" style="margin-top:20px;display:flex;align-items:center;justify-content:center;gap:24px">
        <img id="handson-qr" src="" alt="QR Code for the Hands-On" style="width:140px;height:140px;border-radius:12px;border:3px solid var(--color-bg-dark)">
        <div style="text-align:left">
          <p style="font-size:1rem;color:var(--color-bg-dark);font-weight:700;margin-bottom:4px">Scan the QR code or open:</p>
          <p id="handson-url" style="font-size:0.9rem;color:var(--color-bg-dark);opacity:0.8;word-break:break-all"></p>
          <p style="font-size:0.85rem;color:var(--color-bg-dark);opacity:0.6;margin-top:8px">From here everyone continues on their own &ndash; step by step.</p>
        </div>
      </div>
    `,
  },

  // ===== Security Notice =====
  {
    id: 'handson-security',
    theme: 'slide--dark',
    label: 'Security',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Before you start</span>
      <h2 class="slide-title" style="font-size:1.4rem">&#9888; Please note &ndash; Security with AI Agents</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">The examples here are for the workshop &ndash; stricter rules apply in production</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Ask yourself for every tool</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128269; Which MCP am I installing?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">What can it do? Read-only &ndash; or can it also write, delete, modify?</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128272; What can happen with my permissions?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">The agent has <strong>the same rights as your token</strong>. Admin token = agent is admin.</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128165; What is the worst case?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">If that&rsquo;s acceptable &rarr; go for it. If not &rarr; restrict the token or use a sandbox.</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Concrete examples</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>GitHub MCP + Token:</strong> Worst case = all repos deleted. <span style="color:rgba(255,255,255,0.5)">&rarr; Use read-only token or grant access to 1 repo only.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Confluence MCP:</strong> Worst case = all content deleted/overwritten. <span style="color:rgba(255,255,255,0.5)">&rarr; Read-only API key or sandbox space.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Shell / Filesystem:</strong> Worst case = files deleted. <span style="color:rgba(255,255,255,0.5)">&rarr; Docker sandbox, mount project folder only.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Database MCP:</strong> Worst case = DROP TABLE. <span style="color:rgba(255,255,255,0.5)">&rarr; Read-only DB user, no production DB.</span>
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(37,204,120,0.08);border:2px solid rgba(37,204,120,0.25);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
            <strong style="color:var(--color-positive)">Rule of thumb:</strong> Imagine the agent is a new intern &ndash; with <strong>your credentials</strong>. Would you give them admin access to production?
          </div>
          <div style="margin-top:6px;padding:8px 10px;border-radius:6px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.72rem;color:rgba(255,255,255,0.6);line-height:1.3">
            &#128073; In the <strong style="color:var(--color-accent)">Deep Dive</strong> later, we show how to run OpenCode securely via Docker in a sandbox &ndash; with only project context and no access to your system.
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 1: Node.js / npm =====
  {
    id: 'setup-node',
    theme: 'slide--dark',
    label: 'Node.js',
    content: `
      <span class="slide-label">Step 1</span>
      <h2 class="slide-title">Install Node.js &amp; npm</h2>
      <p class="slide-subtitle">If not already installed &ndash; standard or without admin rights</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Standard (with Admin)</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#127823; macOS</div>
              <button class="copy-btn" data-copy="brew install node">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">brew install</span> node</pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#128039; Linux</div>
              <button class="copy-btn" data-copy="sudo apt install nodejs npm">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">sudo apt install</span> nodejs npm</pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#127999; Windows</div>
              <button class="copy-btn" data-copy="winget install OpenJS.NodeJS">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">winget install</span> OpenJS.NodeJS</pre></div>
            </div>
            <details style="margin-top:2px;border-radius:8px;overflow:hidden;border:1px solid rgba(255,107,107,0.3);background:rgba(255,107,107,0.06)" class="troubleshoot-details">
              <summary style="padding:8px 12px;font-size:0.8rem;color:#ff9a9a;cursor:pointer;user-select:none;list-style:none;display:flex;align-items:center;gap:6px">
                <span style="font-size:0.9rem">&#9888;&#65039;</span> Troubleshooting: &ldquo;Script Execution is disabled&rdquo;
                <span class="details-chevron" style="margin-left:auto;font-size:0.75rem;transition:transform 0.2s ease;display:inline-block">&#9654;</span>
              </summary>
              <div style="padding:10px 14px;font-size:0.8rem;color:var(--color-text-on-dark);border-top:1px solid rgba(255,107,107,0.2)">
                <p style="margin-bottom:8px;line-height:1.5">Windows sometimes blocks script execution. Here&rsquo;s how to fix it:</p>
                <ol style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;line-height:1.5">
                  <li>Press the Windows key &rarr; type <strong>powershell</strong></li>
                  <li>Right-click &ldquo;Windows PowerShell&rdquo; &rarr; <strong>Run as Administrator</strong></li>
                  <li>Enter the following command and confirm:</li>
                </ol>
                <div class="code-block" style="margin:8px 0 6px">
                  <div class="code-header" style="font-size:0.75rem"><div class="code-dots"><span></span><span></span><span></span></div>PowerShell (Admin)</div>
                  <button class="copy-btn" data-copy="Set-ExecutionPolicy RemoteSigned">&#128203; Copy</button>
                  <div class="code-body" style="padding:8px 12px;font-size:0.82rem"><pre style="margin:0"><span class="code-function">Set-ExecutionPolicy</span> RemoteSigned</pre></div>
                </div>
                <p style="margin:6px 0 0;line-height:1.5;color:rgba(255,255,255,0.55);font-size:0.77rem">Then open a new PowerShell window and run <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px">winget install OpenJS.NodeJS</code> again.</p>
              </div>
            </details>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#10003; Verify</div>
              <button class="copy-btn" data-copy="node -v && npm -v">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">node</span> -v && <span class="code-function">npm</span> -v</pre></div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Without Admin Rights (Windows)</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>1.</strong> Download Node.js ZIP from <a href="https://nodejs.org/download" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">nodejs.org</a>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>2.</strong> Extract ZIP to <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.8rem">C:\\Users\\[NAME]\\nodejs</code>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>3.</strong> Add folder to user PATH (Control Panel &rarr; Environment Variables)
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Or via PowerShell</div>
              <button class="copy-btn" data-copy="$env:Path += ';C:\\Users\\$env:USERNAME\\nodejs'">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-function">$env:Path</span> += <span class="code-string">';C:\\Users\\$env:USERNAME\\nodejs'</span></pre></div>
            </div>
          </div>
          <div style="margin-top:10px;font-size:0.8rem">
            <a href="https://gkarthiks.github.io/quick-commands-cheat-sheet/nodeJS-in-windows.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Detailed guide without admin &rarr;</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Why npm? What is Node? =====
  {
    id: 'why-npm',
    theme: '',
    label: 'Why npm?',
    content: `
      <span class="slide-label">Context</span>
      <h2 class="slide-title">Why npm? What is Node.js?</h2>
      <p class="slide-subtitle">For Java and Python developers: Node.js is the same thing &ndash; just for JavaScript</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Why do we need this?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);font-size:0.88rem">
              <strong style="color:var(--color-primary)">OpenCode</strong> is built with Node.js &rarr; npm is a prerequisite
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid var(--color-border);font-size:0.88rem">
              <strong>Vite</strong> (our build tool) runs on Node.js &rarr; dev server, hot reload
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid var(--color-border);font-size:0.88rem">
              <strong>One foundation for everything</strong> &ndash; npm installed, the rest follows
            </div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Package managers compared</h3>
          <table class="comparison" style="font-size:0.78rem">
            <thead><tr><th>Ecosystem</th><th>Language</th><th>Pkg Manager</th><th>Config</th><th>Server</th></tr></thead>
            <tbody>
              <tr><td><strong>Node.js</strong></td><td>JS/TS</td><td style="color:var(--color-primary);font-weight:700">npm / pnpm</td><td>package.json</td><td>Vite / Express</td></tr>
              <tr><td><strong>Java</strong></td><td>Java</td><td>Maven / Gradle</td><td>pom.xml</td><td>Spring Boot</td></tr>
              <tr><td><strong>Python</strong></td><td>Python</td><td>pip / uv</td><td>pyproject.toml</td><td>Flask / Django</td></tr>
            </tbody>
          </table>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0 6px">What can you build with Node.js?</h3>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Frontend (React, Vue, Svelte)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Backend / REST APIs</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">CLI Tools</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Real-time Apps (WebSockets)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Desktop (Electron)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Mobile (React Native)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Serverless Functions</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.3);font-size:0.75rem;font-weight:600;color:var(--color-primary)">Games (like in this workshop!)</span>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">The most important npm commands</h3>
          <div class="code-block" style="margin:0;margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>npm basics</div>
            <div class="code-body" style="padding:10px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Initialize project (like mvn init)</span>
<span class="code-function">npm init</span> -y

<span class="code-comment"># Install dependencies (like mvn install)</span>
<span class="code-function">npm install</span>

<span class="code-comment"># Add a package (like pip install X)</span>
<span class="code-function">npm install</span> vite

<span class="code-comment"># Install globally (like pip install --global)</span>
<span class="code-function">npm install</span> -g opencode-ai

<span class="code-comment"># Run scripts from package.json</span>
<span class="code-function">npm run</span> dev      <span class="code-comment"># starts dev server</span>
<span class="code-function">npm run</span> build    <span class="code-comment"># builds for production</span>
<span class="code-function">npm test</span>         <span class="code-comment"># runs tests</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Debugging Node.js</h3>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Debugging</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># See errors in terminal:</span>
<span class="code-function">npm run</span> dev      <span class="code-comment"># Vite shows errors directly</span>

<span class="code-comment"># Run a Node script directly:</span>
<span class="code-function">node</span> my-script.js

<span class="code-comment"># With debug output:</span>
<span class="code-function">DEBUG</span>=* <span class="code-function">npm run</span> dev</pre></div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
            <p style="font-size:0.75rem;color:var(--color-primary-dark);line-height:1.4">
              <strong>Like Java/Python:</strong> <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">package.json</code> = your <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">pom.xml</code>. <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">node_modules</code> = your <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">.m2</code> / <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">venv</code>. <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">npm run</code> = <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">mvn exec</code> / <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">python manage.py</code>.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== What is Vite? =====
  {
    id: 'what-is-vite',
    theme: 'slide--dark',
    label: 'What is Vite?',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Build Tool</span>
      <h2 class="slide-title">What is Vite &ndash; and why do we use it?</h2>
      <p class="slide-subtitle">Our build tool for the workshop: super fast, zero config, perfect for games</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Why Vite for our games?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Get started instantly</strong> &ndash; Zero config needed. <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm create vite@latest</code> and done.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Hot Reload</strong> &ndash; Change code, browser updates instantly. Perfect when the agent writes code and you want to watch.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">ES Modules</strong> &ndash; Modern JavaScript with <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">import</code>/<code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">export</code>. That&rsquo;s why double-clicking HTML <strong>doesn&rsquo;t work</strong>.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Production Build</strong> &ndash; <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run build</code> creates optimized files for hosting.
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Comparison: What is what?</h3>
          <table class="comparison" style="font-size:0.75rem">
            <thead><tr><th>Concept</th><th>Java</th><th>Node.js</th></tr></thead>
            <tbody>
              <tr><td>Build tool</td><td>Maven / Gradle</td><td style="color:var(--color-accent);font-weight:600">Vite / Webpack</td></tr>
              <tr><td>Dev server</td><td>Spring Boot (Tomcat)</td><td style="color:var(--color-accent);font-weight:600">Vite Dev Server</td></tr>
              <tr><td>Hot Reload</td><td>Spring DevTools</td><td style="color:var(--color-accent);font-weight:600">Vite HMR (&lt;50ms)</td></tr>
              <tr><td>Build output</td><td>.jar / .war</td><td style="color:var(--color-accent);font-weight:600">dist/ (HTML/JS/CSS)</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">What else can you use Vite for?</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#127912; <strong>Web apps</strong> &ndash; React, Vue, Svelte, Angular, Solid
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128196; <strong>Static sites</strong> &ndash; Landing pages, docs, portfolios
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#127918; <strong>Games</strong> &ndash; Canvas, WebGL, Pixi.js, Three.js (our workshop!)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128218; <strong>Libraries</strong> &ndash; Build &amp; publish your own npm packages
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128187; <strong>Presentations</strong> &ndash; Exactly like this one!
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Free hosting &ndash; seriously!</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);margin-bottom:8px">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
              Everything <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run build</code> produces (HTML, JS, CSS) can be hosted <strong>completely for free</strong> &ndash; no server needed:
            </p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-accent);text-decoration:none">Cloudflare Pages</a>
            <a href="https://pages.github.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">GitHub Pages</a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">Netlify</a>
            <a href="https://vercel.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">Vercel</a>
          </div>
          <div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">As long as no backend is needed</strong> (no database, no API logic), hosting is free. Perfect for games, portfolios, docs, and presentations. <a href="https://blog.weisser.dev/blog/2026/03/24/frontend-hosting-cloudflare-pages/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Guide: Host frontend on Cloudflare Pages &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Terminal, Dev Server & Dev Tools =====
  {
    id: 'dev-workflow',
    theme: 'slide--dark',
    label: 'Dev Workflow',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Common Pitfalls</span>
      <h2 class="slide-title">Terminal, Dev Server &amp; Chrome Dev Tools</h2>
      <p class="slide-subtitle">The most common workshop problems &ndash; and how to solve them</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">"Start the server" &ndash; why it goes wrong</h3>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);margin-bottom:6px;font-size:0.82rem;color:rgba(255,255,255,0.9)">
            <strong style="color:#ff6b6b">Problem:</strong> "Start the server" to the AI &rarr; agent gets stuck because the server <strong>runs forever</strong> and the AI waits for it to finish.
          </div>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);margin-bottom:6px;font-size:0.82rem;color:rgba(255,255,255,0.9)">
            <strong style="color:var(--color-positive)">Solution:</strong> <strong>Open a new terminal</strong>, navigate to the project root (same level as <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">package.json</code>), run <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">npm i</code> if needed, then <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run dev</code>.
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:8px 0 6px">Better prompts than "start the server"</h3>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Dos &amp; Don'ts</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment">// &#10007; Bad &ndash; agent gets stuck:</span>
<span class="code-string">"Start the server"</span>
<span class="code-string">"Run npm run dev"</span>

<span class="code-comment">// &#10003; Better &ndash; delegate to agent:</span>
<span class="code-string">"Create the project with Vite config
and package.json with a dev script."</span>

<span class="code-comment">// &#10003; Start the server YOURSELF:</span>
<span class="code-comment">// New terminal &rarr; npm run dev</span></pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Working in parallel</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Terminal 1: OpenCode (Agent)</span>
<span class="code-function">opencode</span>

<span class="code-comment"># Terminal 2: NEW terminal!</span>
<span class="code-comment"># Win: Win+R &rarr; cmd | VS Code: Ctrl+Shift+\`</span>
<span class="code-function">cd</span> ~/projects/workshop-demo
<span class="code-function">npm i</span>           <span class="code-comment"># install deps (if not done yet)</span>
<span class="code-function">npm run</span> dev
<span class="code-comment"># &rarr; http://localhost:5173</span></pre></div>
          </div>
          <div style="margin-top:6px;padding:7px 10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.75rem;color:rgba(255,255,255,0.75)">
            <strong style="color:#ff6b6b">Don&rsquo;t:</strong> Open HTML files by double-clicking &ndash; ES modules need a server. Always use <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">http://localhost:...</code>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Chrome Dev Tools &ndash; your best friend</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:rgba(255,255,255,0.9)">
              <strong>F12</strong> or <strong>Ctrl+Shift+I</strong> &rarr; open Dev Tools
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:rgba(255,255,255,0.9)">
              <strong>Console</strong> tab &rarr; this is where <strong>all errors</strong> show up (red)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:rgba(255,255,255,0.9)">
              <strong>Network</strong> tab &rarr; API calls, missing files (404)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:rgba(255,255,255,0.9)">
              <strong>Elements</strong> tab &rarr; inspect and edit HTML/CSS live
            </div>
          </div>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:2px solid rgba(255,237,0,0.25);margin-bottom:8px;font-size:0.82rem;color:rgba(255,255,255,0.9)">
            <strong style="color:var(--color-accent)">Pro tip:</strong> Copy error messages from the Console and <strong>send them directly to the agent</strong> &ndash; it knows most errors and can fix them!
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">Checklist: Nothing happening?</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.9)">
              &#9744; Right folder? &rarr; check with <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">pwd</code>
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.9)">
              &#9744; Forgot <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npm install</code>? &rarr; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">node_modules</code> is missing
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.9)">
              &#9744; No output? &rarr; check logs in <strong>browser</strong> (F12 &rarr; Console)
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.9)">
              &#9744; Port in use? &rarr; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npx kill-port 5173</code> or different port
            </div>
          </div>
          <div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.75);line-height:1.4">
              <strong style="color:var(--color-accent)">Remember:</strong> <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npm run dev</code> costs 0 cents. Delegating it to the AI costs money. <strong>Start the server yourself, copy errors from Dev Tools yourself.</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 2: Install OpenCode =====
  {
    id: 'setup-opencode',
    theme: '',
    label: 'OpenCode',
    content: `
      <span class="slide-label">Step 2</span>
      <h2 class="slide-title">Install OpenCode globally</h2>
      <p class="slide-subtitle">Install once, use everywhere</p>
      <div style="max-width:700px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Install globally (recommended)
          </div>
          <button class="copy-btn" data-copy="npm i -g opencode-ai@latest">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npm i</span> -g opencode-ai@latest</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Alternative: Without global installation
          </div>
          <button class="copy-btn" data-copy="npx opencode-ai@latest">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npx</span> opencode-ai@latest</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Alternative: curl (macOS / Linux)
          </div>
          <button class="copy-btn" data-copy="curl -fsSL https://opencode.ai/install | bash">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">curl</span> -fsSL https://opencode.ai/install | bash</pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:700px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">120K+ GitHub Stars</strong> &middot; Open Source &middot; 75+ LLM Provider &middot; <a href="https://opencode.ai/docs" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Docs</a>
        </p>
      </div>
    `,
  },

  // ===== Slide 3: Install VS Code =====
  {
    id: 'setup-vscode',
    theme: '',
    label: 'VS Code',
    content: `
      <span class="slide-label">Step 3</span>
      <h2 class="slide-title">Install VS Code</h2>
      <p class="slide-subtitle">If not already installed &ndash; our editor for the workshop</p>
      <div style="max-width:700px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127823; macOS (Homebrew)
          </div>
          <button class="copy-btn" data-copy="brew install --cask visual-studio-code">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">brew install</span> --cask visual-studio-code</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#128039; Linux (Snap)
          </div>
          <button class="copy-btn" data-copy="sudo snap install code --classic">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">sudo snap install</span> code --classic</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127999; Windows (winget)
          </div>
          <button class="copy-btn" data-copy="winget install Microsoft.VisualStudioCode">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">winget install</span> Microsoft.VisualStudioCode</pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:700px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          Or download directly from <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">code.visualstudio.com/download</a>
        </p>
      </div>
    `,
  },

  // ===== Slide 5: Create project =====
  {
    id: 'setup-project',
    theme: 'slide--dark',
    label: 'Project',
    content: `
      <span class="slide-label">Step 4</span>
      <h2 class="slide-title">Create a project in VS Code</h2>
      <p class="slide-subtitle">Create a new project or open an existing one</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">&#127823; &#128039; macOS / Linux</h3>
          <div class="code-block" style="margin:0 0 16px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              New Project
            </div>
            <button class="copy-btn" data-copy="mkdir ~/projects/workshop-demo && cd ~/projects/workshop-demo && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">mkdir</span> ~/projects/workshop-demo
<span class="code-function">cd</span> ~/projects/workshop-demo
<span class="code-function">code</span> .</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Existing Project
            </div>
            <button class="copy-btn" data-copy="cd ~/projects/my-project && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">cd</span> ~/projects/my-project
<span class="code-function">code</span> .</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">&#127999; Windows</h3>
          <div class="code-block" style="margin:0 0 16px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              New Project (PowerShell)
            </div>
            <button class="copy-btn" data-copy='mkdir C:\\Users\\$env:USERNAME\\projects\\workshop-demo; cd C:\\Users\\$env:USERNAME\\projects\\workshop-demo; code .'>&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">mkdir</span> ~\\projects\\workshop-demo
<span class="code-function">cd</span> ~\\projects\\workshop-demo
<span class="code-function">code</span> .</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Existing Project
            </div>
            <button class="copy-btn" data-copy="cd C:\\Users\\%USERNAME%\\projects\\my-project && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">cd</span> ~\\projects\\my-project
<span class="code-function">code</span> .</pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 5: OpenCode Config Example =====
  {
    id: 'setup-config',
    theme: 'slide--dark',
    label: 'Config',
    content: `
      <span class="slide-label">Step 5</span>
      <h2 class="slide-title">OpenCode Config Example</h2>
      <p class="slide-subtitle">This config is for <strong>Workshop / Enterprise</strong> (AWS Bedrock). Personal use? &rarr; <a href="https://opencode.ai/docs/config/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Read the docs</a>, set up a provider subscription, or use OpenCode&rsquo;s free built-in models.</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Our Config: AWS Bedrock</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; Copy &amp; Paste!</div>
            <button class="copy-btn" data-copy='{\n  "$schema": "https://opencode.ai/config.json",\n  "enabled_providers": ["amazon-bedrock"],\n  "disabled_providers": [],\n  "share": "disabled",\n  "autoupdate": false,\n  "experimental": {\n    "openTelemetry": false\n  },\n  "provider": {\n    "amazon-bedrock": {\n      "options": {\n        "region": "eu-central-1",\n        "apiKey": "YOUR_API_KEY_HERE"\n      },\n      "models": {\n        "eu.anthropic.claude-sonnet-4-6-v1": {},\n        "eu.anthropic.claude-sonnet-4-5-20250929-v1:0": {},\n        "eu.anthropic.claude-opus-4-6-v1:0": {},\n        "eu.anthropic.claude-haiku-4-5-20251001-v1:0": {}\n      }\n    }\n  },\n  "model": "amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0",\n  "small_model": "amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"\n}'>&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.65rem;line-height:1.35"><pre style="margin:0">{
  <span class="code-property">"$schema"</span>: <span class="code-string">"https://opencode.ai/config.json"</span>,
  <span class="code-property">"enabled_providers"</span>: [<span class="code-string">"amazon-bedrock"</span>],
  <span class="code-property">"disabled_providers"</span>: [],
  <span class="code-property">"share"</span>: <span class="code-string">"disabled"</span>,
  <span class="code-property">"autoupdate"</span>: <span class="code-keyword">false</span>,
  <span class="code-property">"experimental"</span>: {
    <span class="code-property">"openTelemetry"</span>: <span class="code-keyword">false</span>
  },
  <span class="code-property">"provider"</span>: {
    <span class="code-property">"amazon-bedrock"</span>: {
      <span class="code-property">"options"</span>: {
        <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
        <span class="code-comment">// not best practice &ndash; only for workshop</span>
        <span class="code-property">"apiKey"</span>: <span class="code-string" style="color:#ff6c12">"YOUR_API_KEY_HERE"</span>
      },
      <span class="code-property">"models"</span>: {
        <span class="code-property">"eu.anthropic.claude-sonnet-4-6-v1"</span>: {},
        <span class="code-property">"eu.anthropic.claude-sonnet-4-5-20250929-v1:0"</span>: {},
        <span class="code-property">"eu.anthropic.claude-opus-4-6-v1:0"</span>: {},
        <span class="code-property">"eu.anthropic.claude-haiku-4-5-20251001-v1:0"</span>: {}
      }
    }
  },
  <span class="code-property">"model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0"</span>,
  <span class="code-property">"small_model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"</span>
}</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Alternatives</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; Login via GitHub, no API key needed.</p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>Anthropic direct</strong> &ndash; <code style="background:rgba(255,255,255,0.1);padding:0 3px;border-radius:2px;font-size:0.7rem">ANTHROPIC_API_KEY</code></p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>OpenAI / Gemini</strong> &ndash; 75+ providers via Models.dev.</p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>Local models</strong> &ndash; Ollama, llama.cpp.</p>
            </div>
          </div>
          <div style="padding:8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">Why Bedrock?</strong> Token-based, EU region, enterprise-ready.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Free Models & Providers (Self-Paced only) =====
  {
    id: 'free-models',
    theme: 'slide--dark',
    label: 'Free Models',
    selfPacedOnly: true,
    content: `
      <span class="slide-label">For home &amp; self-study</span>
      <h2 class="slide-title" style="font-size:1.4rem">Free Models &amp; Providers in OpenCode</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">No budget? No problem &ndash; OpenCode supports many free options</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">&#127381; Built into OpenCode (free)</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Big Pickle</strong> &ndash; Fast free model built directly into OpenCode
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">MiniMax 2.5</strong> &ndash; Strong model, free via OpenCode Zen
            </div>
          </div>
          <p style="font-size:0.75rem;margin-top:4px">
            <a href="https://opencode.ai/docs/zen/#pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/zen</a>
          </p>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px;margin-top:14px">&#127968; Local (fully offline)</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Ollama</strong> &ndash; Llama, Mistral, Qwen running locally on your machine
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>llama.cpp</strong> &ndash; Maximum control, CPU-optimized
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">&#128179; Use existing subscriptions</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Claude.ai Pro</strong> &ndash; Anthropic API from existing subscription
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>ChatGPT Plus / Codex</strong> &ndash; OpenAI API key from your OpenAI account
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>GitHub Copilot</strong> &ndash; Login via GitHub, no additional API key needed
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Google Gemini</strong> &ndash; Free tier via Google AI Studio
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">75+ providers.</strong> OpenCode supports virtually every LLM provider &ndash; switchable with a simple config change.
            </p>
            <p style="font-size:0.72rem;margin-top:6px">
              <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/providers</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Transferring API Keys Securely =====
  {
    id: 'setup-keys',
    theme: 'slide-werbung',
    label: 'API Keys',
    content: `
      <span class="slide-label" style="color:#3fb950"><span class="slide-label" style="color:var(--color-accent)">Quick Note</span>#128640; Ad</span>
      <h2 class="slide-title" style="font-size:1.4rem">Transferring API Keys Securely</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Need to get API keys onto your laptop? Here&rsquo;s how to do it right.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">&#128274; Self-hosted PasteBin</h3>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:12px">
            Use a self-hosted PasteBin alternative instead of insecure online services. Open source, Docker-based, with automatic deletion:
          </p>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Example</div>
            <div class="code-body" style="padding:10px 14px"><pre style="margin:0"><span class="code-comment"># Paste your key here:</span>
<span class="code-string">paste.weisser.dev</span>

<span class="code-comment"># One-time link &ndash; auto-deletes</span>
<span class="code-comment"># after 10 min or after reading</span></pre></div>
          </div>
          <p style="font-size:0.75rem;margin-top:6px">
            <a href="https://github.com/weisser-dev/openpastebin" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/weisser-dev/openpastebin</a>
          </p>
          <div style="padding:8px 10px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);margin-top:8px">
            <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              &#128161; Also great for code snippets, secrets, URLs &ndash; a secure alternative to chat tools for sensitive data.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">&#9888; Golden Rule</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 12px;border-radius:8px;background:rgba(255,107,107,0.1);border:1px solid rgba(255,107,107,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:#ff6b6b">&#10060; Never</strong> transfer or store the full key in one place
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">&#9989; Instead:</strong> Split the key into 2&ndash;3 parts
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128233; Part 1 via PasteBin (one-time link)
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128172; Part 2 via messenger / chat
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128203; Part 3 verbally or on paper
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-top:10px">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Why?</strong> If one channel is compromised, the attacker only has part of the key &ndash; useless without the other parts.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Model Guide: Which model for what? =====
  {
    id: 'setup-models',
    theme: '',
    label: 'Models',
    content: `
      <span class="slide-label">Which model for what?</span>
      <h2 class="slide-title">Claude Models Comparison</h2>
      <p class="slide-subtitle">Prices: AWS Bedrock, EU Region (Frankfurt). Which model for which purpose?</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <table class="comparison" style="font-size:0.75rem">
            <thead>
              <tr>
                <th>Model</th>
                <th>In/1M</th>
                <th>Out/1M</th>
                <th>Model ID (EU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Haiku 4.5</strong></td>
                <td style="color:var(--color-positive)">$1</td>
                <td style="color:var(--color-positive)">$5</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-haiku-4-5-20251001-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Sonnet 4.5</strong></td>
                <td>$3</td>
                <td>$15</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-sonnet-4-5-20250514-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Sonnet 4.6</strong></td>
                <td>$3</td>
                <td>$15</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-sonnet-4-6-v1</code></td>
              </tr>
              <tr>
                <td><strong>Opus 4.5</strong></td>
                <td>$5</td>
                <td>$25</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-opus-4-5-20250514-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Opus 4.6</strong></td>
                <td style="color:var(--color-warning)">$5</td>
                <td style="color:var(--color-warning)">$25</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-opus-4-6-v1</code></td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:6px">
            <a href="https://aws.amazon.com/bedrock/pricing/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">AWS Bedrock Pricing</a> &middot; Model IDs for <code style="font-size:0.65rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">opencode.json</code>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Recommendation</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-positive)">Haiku 4.5</strong> &ndash; Sub-agents, quick tasks, summaries. <strong>5x cheaper</strong> than Sonnet.</p>
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-primary)">Sonnet 4.5/4.6</strong> &ndash; <strong>Best price-performance ratio.</strong> Coding, reasoning, all-rounder. Our default.</p>
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-warning)">Opus 4.5/4.6</strong> &ndash; Maximum intelligence. Complex architecture, difficult bugs, deep research. <strong>Expensive &ndash; use selectively.</strong></p>
            </div>
          </div>
          <div style="margin-top:8px;padding:8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-subdued);line-height:1.3">
              <strong style="color:var(--color-primary)">Tip:</strong> In opencode.json: <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:0 3px;border-radius:2px;font-size:0.7rem">model</code> = Sonnet (daily use), <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:0 3px;border-radius:2px;font-size:0.7rem">small_model</code> = Haiku (sub-agents). Switch to Opus in OpenCode when needed. <a href="https://www.cosmicjs.com/blog/claude-sonnet-45-vs-opus-45-a-real-world-comparison" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Comparison</a>
            </p>
          </div>
          <div style="margin-top:8px;padding:8px;border-radius:6px;background:rgba(255,237,0,0.05);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.72rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">&#128161; Newer models = usually same price</strong><br>
              According to Claude pricing, new models often cost the same as their predecessors &ndash; on Azure they&rsquo;re frequently even <em>cheaper</em>. So: always use the latest version.
              <br>
              <a href="https://claude.com/pricing#api" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">claude.com/pricing</a>
              &nbsp;&middot;&nbsp;
              <a href="https://azure.microsoft.com/en-us/pricing/details/azure-openai/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">azure.microsoft.com/pricing/azure-openai</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 6: Place opencode.json =====
  {
    id: 'setup-json',
    theme: '',
    label: 'opencode.json',
    content: `
      <span class="slide-label">Step 6</span>
      <h2 class="slide-title">Place opencode.json</h2>
      <p class="slide-subtitle">Local config in the project &ndash; or global for all projects</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Local (in the project)</h3>
          <p style="color:var(--color-text-subdued);font-size:0.9rem;margin-bottom:8px">Creates an <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.85rem">opencode.json</code> in the project root:</p>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              ./opencode.json
            </div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"share":"disabled","autoupdate":false,"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:14px 18px;font-size:0.75rem;line-height:1.4"><pre style="margin:0"><span class="code-comment">my-project/</span>
  <span class="code-property">opencode.json</span>  <span class="code-comment">&larr; here</span>
  src/
  package.json
  ...</pre></div>
          </div>
          <p style="margin-top:12px;font-size:0.85rem;color:var(--color-text-subdued)">
            Applies only to this project. Can be checked into Git (without secrets!).
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Global (Advanced)</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Global Path</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.8rem;line-height:1.3"><pre style="margin:0"><span class="code-comment"># macOS / Linux:</span>
<span class="code-property">~/.config/opencode/config.json</span>
<span class="code-comment"># Windows:</span>
<span class="code-property">%APPDATA%\\opencode\\config.json</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0 6px">Auth Methods <span style="font-size:0.75rem;font-weight:400;opacity:0.6">(click to expand)</span></h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.8rem">
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">AWS Profile <span style="font-weight:400;opacity:0.6">&ndash; in provider.options</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","profile":"my-sso-profile"}}}'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-property">"provider"</span>: { <span class="code-property">"amazon-bedrock"</span>: {
  <span class="code-property">"options"</span>: {
    <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
    <span class="code-property">"profile"</span>: <span class="code-string">"my-sso-profile"</span>
  }
}}</pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Bearer Token <span style="font-weight:400;opacity:0.6">&ndash; Env Variable</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='AWS_BEARER_TOKEN_BEDROCK="<TOKEN>" AWS_REGION="eu-central-1" opencode'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-function">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
<span class="code-function">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> opencode</pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Access Key <span style="font-weight:400;opacity:0.6">&ndash; Env Variables</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='export AWS_ACCESS_KEY_ID="AKIA..." && export AWS_SECRET_ACCESS_KEY="..." && export AWS_REGION="eu-central-1" && opencode'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-function">export</span> AWS_ACCESS_KEY_ID=<span class="code-string">"AKIA..."</span>
<span class="code-function">export</span> AWS_SECRET_ACCESS_KEY=<span class="code-string">"..."</span>
<span class="code-function">export</span> AWS_REGION=<span class="code-string">"eu-central-1"</span>
<span class="code-function">opencode</span></pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Anthropic API Key <span style="font-weight:400;opacity:0.6">&ndash; in provider.options</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='"provider":{"anthropic":{"options":{"apiKey":"{env:ANTHROPIC_API_KEY}"}}}'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-property">"provider"</span>: { <span class="code-property">"anthropic"</span>: {
  <span class="code-property">"options"</span>: {
    <span class="code-property">"apiKey"</span>: <span class="code-string">"{env:ANTHROPIC_API_KEY}"</span>
  }
}}</pre></div>
              </div>
            </details>
          </div>
          <p style="margin-top:6px;font-size:0.7rem;color:var(--color-text-subdued)">
            Priority: Bearer &gt; Profile &gt; Access Key. <a href="https://opencode.ai/docs/config/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">All details in the docs</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Slide 7: Start OpenCode =====
  {
    id: 'setup-start',
    theme: 'slide--dark',
    label: 'Start',
    content: `
      <span class="slide-label">Step 7</span>
      <h2 class="slide-title">Start OpenCode</h2>
      <p class="slide-subtitle">Open Terminal in VS Code (<kbd style="background:rgba(255,255,255,0.1);padding:1px 6px;border-radius:3px;font-size:0.85rem">Ctrl+\`</kbd>) and go &ndash; 3 paths depending on your setup</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px">
        <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">Option A: Bearer Token</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">For this workshop &ndash; token will be provided</p>
          <div class="code-block" style="margin:0">
            <button class="copy-btn" data-copy='AWS_BEARER_TOKEN_BEDROCK="<TOKEN>" AWS_REGION="eu-central-1" opencode'>&#128203;</button>
            <div class="code-body" style="padding:8px 10px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
<span class="code-function">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> \\
<span class="code-function">opencode</span></pre></div>
          </div>
          <div style="margin-top:8px;padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              Bearer Token has highest priority &ndash; overrides profiles/SSO.
            </p>
          </div>
        </div>
        <div style="padding:14px;border-radius:10px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2)">
          <h3 style="color:var(--color-positive);font-size:0.9rem;margin-bottom:8px">Option B: AWS SSO</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">Enterprise &ndash; recommended for daily work</p>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header" style="font-size:0.6rem"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <button class="copy-btn" data-copy='"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","profile":"my-sso-profile"}}}'>&#128203;</button>
            <div class="code-body" style="padding:6px 8px;font-size:0.6rem"><pre style="margin:0"><span class="code-property">"options"</span>: {
  <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
  <span class="code-property">"profile"</span>: <span class="code-string">"my-sso-profile"</span>
}</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <button class="copy-btn" data-copy="aws sso login --profile my-sso-profile && opencode">&#128203;</button>
            <div class="code-body" style="padding:6px 8px;font-size:0.6rem"><pre style="margin:0"><span class="code-function">aws sso login</span> --profile my-sso-profile
<span class="code-function">opencode</span></pre></div>
          </div>
          <div style="margin-top:6px;padding:6px 8px;border-radius:6px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-positive)">Recommended:</strong> Credentials rotate automatically.
            </p>
          </div>
        </div>
        <div style="padding:14px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-accent)">
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">Option C: Personal / Home</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">For your own projects &ndash; no enterprise infra needed</p>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px">
            <div style="padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);font-size:0.7rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">&#11088; Claude Code Sub</strong><br>
              <span style="font-size:0.65rem;color:var(--color-text-on-dark-subdued)">$20/month. Best value for money. Anthropic models directly &ndash; no API key setup needed.</span>
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>OpenCode + Ollama</strong> &ndash; Completely free &amp; local
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>OpenCode + Big Pickle / MiniMax</strong> &ndash; Free in OpenCode
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>GitHub Copilot</strong> &ndash; Login via GitHub
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>ChatGPT / Codex</strong> &ndash; OpenAI API key
            </div>
          </div>
          <div style="padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">My recommendation:</strong> <a href="https://claude.ai/pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Claude Code sub</a> &ndash; best value for money. <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">75+ providers</a>
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
        <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-warning)">First start takes 1-2 minutes.</strong> Nothing happening or getting blocked? &rarr; <strong>Use the Desktop App &ndash; next page!</strong>
        </p>
      </div>
    `,
  },

  // ===== Step 8: Fallback Desktop App =====
  {
    id: 'setup-fallback',
    theme: '',
    label: 'Desktop App',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Step 8 &ndash; Alternative</span>
      <h2 class="slide-title">Alternative to CLI? Desktop App!</h2>
      <p class="slide-subtitle">If OpenCode doesn&rsquo;t start in the terminal &ndash; the Desktop App works just the same</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">1. Download Desktop App</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <a href="https://opencode.ai/de/download" target="_blank" rel="noopener" style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block">
              <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700">opencode.ai/de/download</p>
              <p style="font-size:0.8rem;color:var(--color-text-subdued)">Official download page</p>
            </a>
            <a href="https://github.com/anomalyco/opencode/releases" target="_blank" rel="noopener" style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block">
              <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700">GitHub Releases</p>
              <p style="font-size:0.8rem;color:var(--color-text-subdued)">If the website is blocked</p>
            </a>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">2. Create global config</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Path (Windows)</div>
            <button class="copy-btn" data-copy="C:\\Users\\<userid>\\.config\\opencode\\config.json">&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-property">C:\\Users\\&lt;userid&gt;\\.config\\opencode\\config.json</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">3. Enter Bearer Token</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>config.json</div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","apiKey":"<BEARER_TOKEN>"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px;font-size:0.68rem;line-height:1.3"><pre style="margin:0">{
  <span class="code-property">"enabled_providers"</span>: [<span class="code-string">"amazon-bedrock"</span>],
  <span class="code-property">"provider"</span>: {
    <span class="code-property">"amazon-bedrock"</span>: {
      <span class="code-property">"options"</span>: {
        <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
        <span class="code-property">"apiKey"</span>: <span class="code-string">"&lt;BEARER_TOKEN&gt;"</span>
      }
    }
  }
}</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-warning)">Insert token</strong> &rarr; Open Desktop App &rarr; Choose project folder &rarr; done.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== OpenCode successfully started =====
  {
    id: 'setup-success',
    theme: 'slide--dark',
    label: 'Started',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Done!</span>
      <h2 class="slide-title">If everything worked...</h2>
      <p class="slide-subtitle">...it should look like this:</p>
      <div style="max-width:750px;margin:24px auto 0;background:#1a1a1a;border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.4);font-family:var(--font-mono);position:relative">
        <div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:#0d0d0d">
          <span style="width:12px;height:12px;border-radius:50%;background:#ff5f57"></span>
          <span style="width:12px;height:12px;border-radius:50%;background:#ffbd2e"></span>
          <span style="width:12px;height:12px;border-radius:50%;background:#28c840"></span>
          <span style="color:#666;font-size:0.75rem;margin-left:8px">Terminal &mdash; opencode</span>
        </div>
        <div style="padding:40px 60px;text-align:center">
          <div style="margin-bottom:40px;font-size:1.8rem;letter-spacing:2px">
            <span style="color:#999">open</span><span style="color:#eee">code</span>
          </div>
          <div style="text-align:left;max-width:460px;margin:0 auto">
            <div style="border-left:3px solid #3b82f6;padding:8px 16px;background:#1f1f1f;border-radius:0 6px 6px 0;margin-bottom:6px">
               <span style="color:#777">Ask anything... "Fix a TODO in the codebase"</span>
            </div>
            <div style="padding:4px 16px;margin-bottom:8px">
              <span style="color:#3b82f6;font-weight:700">Build</span>
              <span style="color:#ccc;margin-left:8px">Claude Sonnet 4.6 (EU)</span>
              <span style="color:#666;margin-left:8px">Amazon Bedrock</span>
            </div>
            <div style="text-align:right;color:#666;font-size:0.75rem;margin-bottom:14px">
              <span style="color:#ccc">ctrl+t</span> variants
              <span style="color:#ccc;margin-left:16px">tab</span> agents
              <span style="color:#ccc;margin-left:16px">ctrl+p</span> commands
            </div>
            <div style="text-align:center;margin-bottom:8px">
              <span style="color:#f59e0b;font-size:0.6rem">&#9679;</span>
              <span style="color:#f59e0b;font-size:0.85rem;margin-left:4px">Tip</span>
              <span style="color:#999;font-size:0.85rem"> Press </span>
              <span style="color:#ccc;font-weight:700;font-size:0.85rem">Escape</span>
              <span style="color:#999;font-size:0.85rem"> to stop the AI mid-response</span>
            </div>
          </div>
        </div>
        <div style="position:absolute;bottom:10px;right:16px;color:#555;font-size:0.7rem">1.2.5</div>
      </div>
      <div style="margin-top:20px;padding:14px;border-radius:8px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.25);max-width:750px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-positive)">Ready!</strong> You can start now. Type your first question or task &ndash; the agent takes over.
        </p>
      </div>
    `,
  },

  // ===== OpenCode: More Ways =====
  {
    id: 'setup-alternatives',
    theme: '',
    label: 'More Ways',
    content: `
      <span class="slide-label">Good to know</span>
      <h2 class="slide-title">OpenCode &ndash; not just in the terminal</h2>
      <p class="slide-subtitle">Terminal is the default &ndash; but there are more options</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128187;</div>
          <div class="card-title" style="font-size:0.95rem">Terminal (TUI)</div>
          <div class="card-text" style="font-size:0.8rem">The default. <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode</code> in the project directory &ndash; start right away.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#127760;</div>
          <div class="card-title" style="font-size:0.95rem">Web Interface</div>
          <div class="card-text" style="font-size:0.8rem"><code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode web</code> &ndash; opens chat in the browser. Multiple sessions, same server.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128421;</div>
          <div class="card-title" style="font-size:0.95rem">Desktop App</div>
          <div class="card-text" style="font-size:0.8rem">Beta for macOS, Windows, Linux. <a href="https://opencode.ai/de/download" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Download now</a></div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128295;</div>
          <div class="card-title" style="font-size:0.95rem">IDE Extension</div>
          <div class="card-text" style="font-size:0.8rem">VS Code Extension &ndash; use OpenCode directly in the IDE without terminal.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#9000;</div>
          <div class="card-title" style="font-size:0.95rem">CLI (Headless)</div>
          <div class="card-text" style="font-size:0.8rem"><code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode run "..."</code> &ndash; Without UI, for scripting and CI/CD pipelines.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128279;</div>
          <div class="card-title" style="font-size:0.95rem">GitHub / GitLab</div>
          <div class="card-text" style="font-size:0.8rem">Native integrations for issues, PRs, code review &ndash; directly in your workflow.</div>
        </div>
      </div>
      <div style="margin-top:14px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);text-align:center">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
          All details: <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Web</a> &middot; <a href="https://opencode.ai/docs/de/tui/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">TUI</a> &middot; <a href="https://opencode.ai/docs/de/cli/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">CLI</a> &middot; <a href="https://opencode.ai/docs/de/ide/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">IDE</a> &middot; <a href="https://opencode.ai/docs/de/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">All Docs</a>
        </p>
      </div>
    `,
  },

  // ===== Example 1: 2048 =====
  {
    id: 'example-2048',
    theme: '',
    label: '2048',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Example 1 &ndash; Simple</span>
      <h2 class="slide-title">2048 &ndash; in one prompt</h2>
      <p class="slide-subtitle">Let&rsquo;s start simple. One prompt, one finished game.</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 1: Build the game
          </div>
          <button class="copy-btn" data-copy="Build the game 2048 as a Vite app. Use HTML, CSS and Vanilla JS. It should be usable with keyboard and touch. Read our AGENTS.md for this.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Build the game 2048 as a Vite app.
Use HTML, CSS and Vanilla JS.
It should be usable with keyboard and touch.
Read our AGENTS.md for this."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 2: Run it
          </div>
          <button class="copy-btn" data-copy="Run the game">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Run the game"</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:750px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">Watch:</strong> The agent creates package.json, installs Vite, builds grid logic, scoring &ndash; and starts the dev server. <strong>But: What does the code look like?</strong>
        </p>
      </div>
    `,
  },

  // ===== Warning: Laziness =====
  {
    id: 'warning-lazy',
    theme: 'slide--dark slide--divider',
    label: 'Warning',
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <div style="font-size:4rem;margin-bottom:14px">&#9888;</div>
        <h2 class="slide-title" style="color:#ff6c12">Stop &ndash; notice something?</h2>
        <p style="font-size:1.2rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:16px">
          We&rsquo;re already delegating simple commands like <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1.1rem">npm run dev</code> to the AI.
        </p>
        <p style="font-size:1.4rem;line-height:1.7;color:var(--color-text-on-dark);margin-top:16px">
          This prompt <strong style="color:#ff6c12">costs money</strong>.<br>Typing the command yourself <strong>doesn&rsquo;t</strong>.
        </p>
        <p style="font-size:1.1rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:16px">
          There are people who say <em>"commit my project"</em> or <em>"push that"</em> &ndash;<br>that would be a simple <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1rem">git push</code>.
        </p>
        <div style="margin-top:20px;padding:14px;border-radius:12px;background:rgba(255,108,18,0.12);border:2px solid rgba(255,108,18,0.3)">
          <p style="font-size:1.3rem;color:#ff6c12;font-weight:700">
            You get surprisingly lazy, surprisingly fast.
          </p>
        </div>
      </div>
    `,
  },

  // ===== Example 2: Create agents.md =====
  {
    id: 'example-agentsmd',
    theme: 'slide--dark',
    label: 'agents.md',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Example 2 &ndash; agents.md</span>
      <h2 class="slide-title">Now with quality</h2>
      <p class="slide-subtitle">Create agents.md &ndash; then build 2048 again with the same prompt</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Create AGENTS.md</div>
            <button class="copy-btn" data-copy="# Frontend Game Agent\n\nYou are a professional frontend developer for browser games.\n\n## Architecture\n- Check which build system is used\n- Use component-based architecture\n- Separate: Game logic, Rendering, Input handling, State\n- Each class in its own file\n\n## Quality\n- Smooth CSS animations (transitions, transforms)\n- requestAnimationFrame for game loops\n- Responsive design, Touch + Keyboard support\n- Game Over screen with score\n- Pause function (Escape/P)\n- Exit option back to menu\n\n## Code Style\n- Functions < 30 lines\n- Descriptive variable names (English)\n- JSDoc comments for public methods\n- No global variables\n- ES Modules, no var">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.7rem;line-height:1.35"><pre style="margin:0"><span class="code-comment"># Frontend Game Agent</span>
<span class="code-keyword">## Architecture</span>
- Component-based, classes separated
- Game logic / Rendering / Input / State

<span class="code-keyword">## Quality</span>
- CSS animations, rAF for game loops
- Responsive, Touch + Keyboard
- Game Over, Pause (Esc), Exit to menu

<span class="code-keyword">## Code Style</span>
- Functions &lt;30 lines, JSDoc
- ES Modules, no global variables</pre></div>
          </div>
        </div>
        <div>
          <div class="code-block" style="margin:0 0 12px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Same prompt again</div>
            <button class="copy-btn" data-copy="Delete the existing code and build the game 2048 as a Vite app. Use HTML, CSS and Vanilla JS. It should be usable with keyboard and touch. Read our AGENTS.md for this.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-string">"Delete the code and build 2048
again. HTML, CSS, Vanilla JS.
And read the new AGENTS.md."</span></pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">What changes</h3>
          <ul class="feature-list" style="gap:5px">
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>Separate classes: Game, Grid, Tile, Input</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>Smooth animations, Pause, Game Over</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>rAF instead of setInterval, JSDoc, Modules</span></li>
          </ul>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Same prompt</strong> &ndash; but the agents.md tells the agent <em>how</em> to work. That&rsquo;s the difference.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Example 2b: Improve agents.md =====
  {
    id: 'example-improve-agents',
    theme: '',
    label: 'Improve agents.md',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Example 2b &ndash; Meta</span>
      <h2 class="slide-title">Why are we writing the agents.md ourselves?</h2>
      <p class="slide-subtitle">Let the AI optimize its own rules &ndash; then build again.</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt: Let the AI improve agents.md
          </div>
          <button class="copy-btn" data-copy="Read our AGENTS.md and improve it the way an expert in AI prompting would write it. Focus on clear structure, precise instructions, edge cases and best practices. Save the improved version.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Read our AGENTS.md and improve it
the way an expert in AI prompting
would write it. Focus on clear structure,
precise instructions, edge cases and
best practices. Save the improved version."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Then: Build 2048 again
          </div>
          <button class="copy-btn" data-copy="Delete the existing code and build the game 2048 completely from scratch based on the improved AGENTS.md.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Delete the existing code and build 2048
completely from scratch based on the
improved AGENTS.md."</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:750px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-primary)">The meta lesson:</strong> The AI can not only write code &ndash; it can also optimize its own instructions. Compare the improved agents.md with yours and see if the result improves even further.
        </p>
      </div>
    `,
  },

  // ===== Example 3: Extend =====
  {
    id: 'example-extend',
    theme: '',
    label: 'Extend',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Example 3 &ndash; Complex</span>
      <h2 class="slide-title">Now it gets exciting</h2>
      <p class="slide-subtitle">Home page with game selection &ndash; and a second game</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 3: Home page + second game
          </div>
          <button class="copy-btn" data-copy="Build a home page where you can select games. Show 2048 as the first game. Add Doodle Jump as a second game (canvas-based, platforms, gravity, score). The home page should be nicely designed with preview images and descriptions.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Build a home page where you can select games.
Show 2048 as the first game.
Add Doodle Jump as a second game
(canvas-based, platforms, gravity, score).
The home page should be nicely designed
with preview images and descriptions."</span></pre></div>
        </div>
      </div>
      <div class="two-cols" style="margin-top:16px;max-width:750px;margin-left:auto;margin-right:auto">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">What the agent does now</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">1</span><span>Analyze existing 2048 code</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">2</span><span>Add router/navigation</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">3</span><span>Create home page with grid</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">4</span><span>Build Doodle Jump from scratch</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">5</span><span>Exit buttons back to home page</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Why this is impressive</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#129504;</span><span><strong>Understands context</strong> &ndash; 2048 already exists, gets integrated</span></li>
            <li><span class="check">&#127959;</span><span><strong>Architecture decisions</strong> &ndash; Because agents.md specifies them</span></li>
            <li><span class="check">&#127912;</span><span><strong>Design</strong> &ndash; Looks good because "nicely designed" is in the prompt</span></li>
            <li><span class="check">&#128640;</span><span><strong>Effort</strong> &ndash; One prompt. Minutes. Not hours.</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Hands-On: Space Invaders =====
  {
    id: 'handson-space-invaders',
    theme: '',
    label: 'Space Invaders',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Hands-On: Prompt 4</span>
      <h2 class="slide-title" style="color:var(--color-text);font-size:1.5rem">Space Invaders &ndash; with a custom retro AGENTS.md</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">First a specialized AGENTS.md, then the game</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Step 1: Retro Game AGENTS.md</h3>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="Create a new AGENTS.md that is specifically optimized for retro games in pixel graphics. It should contain rules for: canvas rendering with pixel art style, retro color palettes, sprite-based graphics, classic game mechanics (lives, score, waves, power-ups), and responsive touch controls.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Create a new AGENTS.md for
retro games: pixel art, retro palettes,
sprites, game mechanics (lives, score,
waves), touch controls."</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Step 2: Build the game</h3>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="Add Space Invaders as a third game on the home page. Pixel graphics style, waves of aliens, shooting, lives, highscore. Read the AGENTS.md and follow it.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Add Space Invaders as the 3rd game.
Pixel graphics, waves of aliens,
shooting, lives, highscore.
Read the AGENTS.md."</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Why this matters</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#127919; <strong>Specialized AGENTS.md</strong> &ndash; for exactly this type of project
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#128260; <strong>Self-improvement</strong> &ndash; Agent writes rules that make it better
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#127912; <strong>Consistent style</strong> &ndash; all games share the same retro look
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#129504; <strong>Context</strong> &ndash; knows 2048 + Doodle Jump, integrates Space Invaders
            </div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Guess:</strong> How long for Space Invaders? With the right AGENTS.md: <strong>One prompt. Minutes.</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== More Examples =====
  {
    id: 'example-real',
    theme: 'slide--dark',
    label: 'More Examples',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Keep experimenting</span>
      <h2 class="slide-title">Even more ideas</h2>
      <p class="slide-subtitle">Choose a task that fits your project</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px">
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128196;</div>
          <div class="card-title">Generate docs</div>
          <div class="card-text">"Create API documentation for all endpoints"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#129514;</div>
          <div class="card-title">Write tests</div>
          <div class="card-text">"Write integration tests for the UserController"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title">Code Review</div>
          <div class="card-text">"Review the last 3 commits for bugs &amp; security"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128736;</div>
          <div class="card-title">Refactoring</div>
          <div class="card-text">"Extract the validation into a separate service"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128640;</div>
          <div class="card-title">New Feature</div>
          <div class="card-text">"Add a health check endpoint"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128027;</div>
          <div class="card-title">Fix a bug</div>
          <div class="card-text">"Pagination returns a 500 at page=0 &ndash; fix it"</div>
        </div>
      </div>
      <div style="margin-top:20px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-accent)">Remember:</strong> You are the expert, the agent is your tool. Review everything, question the decisions, learn along the way.
        </p>
      </div>
    `,
  },

  // ===== Prompt ideas for daily work =====
  {
    id: 'example-prompts',
    theme: '',
    label: 'Prompt Ideas',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">For daily work</span>
      <h2 class="slide-title">Prompt ideas for your daily workflow</h2>
      <p class="slide-subtitle">Copy, adapt, try it out</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Find outdated docs</div>
          <button class="copy-btn" data-copy="Compare the README.md and code comments with the current code. List everything that is outdated or incorrect and fix it.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Compare README and code comments
with the current code. What is outdated?
Fix it."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Generate changelog</div>
          <button class="copy-btn" data-copy="Create a CHANGELOG.md from the last 20 Git commits. Group by features, fixes and refactoring.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Create a CHANGELOG.md from the
last 20 Git commits. Group by
features, fixes, refactoring."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Security Audit</div>
          <button class="copy-btn" data-copy="Check all dependencies for known vulnerabilities. Check the code for SQL injection, XSS and insecure API calls.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Check dependencies for vulnerabilities.
Check code for SQL injection, XSS
and insecure API calls."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Onboarding Guide</div>
          <button class="copy-btn" data-copy="Create an onboarding guide for new developers. Explain the project structure, setup, important conventions and how to create a first PR.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Create an onboarding guide.
Project structure, setup, conventions
and first PR."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Find dead code</div>
          <button class="copy-btn" data-copy="Find unused code, unused imports, dead functions and empty files. List everything and remove it.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Find unused code, imports,
dead functions, empty files.
Clean up."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Plan migration</div>
          <button class="copy-btn" data-copy="Analyze the project and create a plan to migrate from Java 11 to Java 21. List breaking changes, deprecated APIs and necessary changes.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Plan for migration Java 11 &rarr; 21.
Breaking changes, deprecated APIs,
necessary changes."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Performance Review</div>
          <button class="copy-btn" data-copy="Analyze the code performance. Find N+1 queries, unnecessary database calls, missing indexes and optimization potential.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Performance analysis: N+1 queries,
unnecessary DB calls, missing
indexes, optimizations."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Improve error handling</div>
          <button class="copy-btn" data-copy="Check all error handling. Find empty catch blocks, missing error handling and unspecific exceptions. Fix it.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Check error handling. Empty catch
blocks, missing handling,
unspecific exceptions. Fix."</span></pre></div>
        </div>
      </div>
    `,
  },

  // ===== Not just code =====
  {
    id: 'example-non-code',
    theme: 'slide--dark',
    label: 'Not just code',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Think bigger</span>
      <h2 class="slide-title">Not just code</h2>
      <p class="slide-subtitle">OpenCode can do anything related to text, files and research &ndash; not just programming</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#127912;</div>
          <div class="card-title" style="font-size:0.9rem">Presentations</div>
          <div class="card-text" style="font-size:0.75rem">"Create an HTML presentation on topic X" &ndash; that&rsquo;s exactly how <strong>this presentation</strong> was created.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title" style="font-size:0.9rem">Research</div>
          <div class="card-text" style="font-size:0.75rem">"Research the top 10 AI tools of 2026 with prices and pros/cons. Create a comparison table."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128221;</div>
          <div class="card-title" style="font-size:0.9rem">Confluence Pages</div>
          <div class="card-text" style="font-size:0.75rem">"Create a Confluence page for our architecture concept based on the code in the repo."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#9986;</div>
          <div class="card-title" style="font-size:0.9rem">Shorten documents</div>
          <div class="card-text" style="font-size:0.75rem">"Condense this 20-page document to the most important 3 pages. Keep all numbers and decisions."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128202;</div>
          <div class="card-title" style="font-size:0.9rem">Analyze data</div>
          <div class="card-text" style="font-size:0.75rem">"Analyze this CSV and create a summary with the top trends and outliers."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128172;</div>
          <div class="card-title" style="font-size:0.9rem">Meeting Preparation</div>
          <div class="card-text" style="font-size:0.75rem">"Create an agenda and discussion points for our sprint review based on the latest commits."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128203;</div>
          <div class="card-title" style="font-size:0.9rem">Write ADRs</div>
          <div class="card-text" style="font-size:0.75rem">"Create an Architecture Decision Record for the migration from REST to GraphQL."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128231;</div>
          <div class="card-title" style="font-size:0.9rem">Emails &amp; Texts</div>
          <div class="card-text" style="font-size:0.75rem">"Write a polite rejection to the vendor referencing the contract clause."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128218;</div>
          <div class="card-title" style="font-size:0.9rem">Learn &amp; Explain</div>
          <div class="card-text" style="font-size:0.75rem">"Explain Kubernetes networking so I can explain it to a non-technical person."</div>
        </div>
      </div>
    `,
  },

  // ===== Quiz: Hands-On =====
  {
    id: 'quiz-handson',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Knowledge Check: Hands-On</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. What does the command "npx opencode-ai@latest" do?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Installs OpenCode permanently globally</button>
            <button class="quiz-option" data-correct="true">Runs the latest version of OpenCode without permanent installation</button>
            <button class="quiz-option" data-correct="false">Updates Node.js to the latest version</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. What does an agents.md in the project do?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">It replaces the package.json</button>
            <button class="quiz-option" data-correct="false">It is only read once at startup</button>
            <button class="quiz-option" data-correct="true">It gives the agent behavioral rules that are loaded with every conversation</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Why should you not delegate "run npm run dev" to the AI?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Because the AI doesn&rsquo;t know the command</button>
            <button class="quiz-option" data-correct="true">Because it costs money &ndash; typing the command yourself is free</button>
            <button class="quiz-option" data-correct="false">Because npm run dev is dangerous</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
