export const diskussionSlides = [
  // ===== Discussion Round (Presenter only) =====
  {
    id: 'discussion',
    theme: 'slide--dark',
    label: 'Discussion',
    desktopOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px">&#128172; Discussion Round</h2>
        <p class="slide-subtitle" style="font-size:0.9rem">Before we jump into the hands-on part &ndash; let's take a moment to reflect</p>
      </div>
      <div class="pause-timer discussion-timer" id="discussion-timer" data-duration="900">
        <span class="pause-timer-icon">&#128172;</span>
        <span class="pause-timer-display" id="discussion-timer-display">15:00</span>
        <span class="pause-timer-label">Discussion</span>
      </div>
      <div style="max-width:650px;margin:12px auto 0;display:flex;flex-direction:column;gap:8px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#129300;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>What was new for you?</strong> What surprised you?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#10067;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Any questions?</strong> Now is the moment &ndash; anything that remained unclear.</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#9888;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>What should we keep in mind?</strong> Risks, concerns, governance&hellip;</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128260;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong style="color:var(--color-accent)">Has anything changed?</strong> Regarding your AI usage so far &ndash; after what you now know?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#11088;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Quick feedback on the presentation so far</strong> &ndash; who else should see this?</p>
        </div>
      </div>
    `,
  },
];
