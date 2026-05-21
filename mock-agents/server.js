const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

function yen(value) {
  return "¥" + Number(value).toLocaleString("ja-JP");
}

app.post("/agent/google", (req, res) => {
  const pct = req.body.allocation_pct || 0;

  res.json({
    agent: "Google",
    channel: "Search / P-MAX / Display",
    availability: "available",
    estimated_cpa: yen(7600),
    estimated_reach: pct >= 30 ? "high" : "medium-high",
    agent_intent: "capture_high_intent_demand",
    suggested_allocation: pct < 30 ? 32 : pct,
    suggested_role: "conversion_capture",
    required_creative: ["search text ads", "responsive display assets", "conversion tags"],
    constraints: ["conversion tracking required", "keyword coverage check required"],
    risk: "Search volume can cap scale, but CPA efficiency is strong.",
    negotiation_note: "Google can absorb more budget if conversion capture is the priority.",
    recommendation: "Use Google as the primary high-intent conversion channel."
  });
});

app.post("/agent/meta", (req, res) => {
  const pct = req.body.allocation_pct || 0;

  res.json({
    agent: "Meta",
    channel: "Instagram / Facebook / Reels",
    availability: pct > 38 ? "limited" : "available",
    estimated_cpa: yen(8400),
    estimated_reach: "medium-high",
    agent_intent: "own_consideration_and_retargeting",
    suggested_allocation: Math.min(Math.max(pct, 25), 32),
    suggested_role: "consideration_and_retargeting",
    required_creative: ["static images", "short video", "carousel", "pixel events"],
    constraints: ["creative fatigue management required", "audience signal quality required"],
    risk: "Performance depends on creative variation and audience signal quality.",
    negotiation_note: "Meta prefers a stable consideration role with enough budget for creative testing.",
    recommendation: "Use Meta for consideration, retargeting, and creative learning."
  });
});

app.post("/agent/youtube", (req, res) => {
  const pct = req.body.allocation_pct || 0;
  const limited = pct > 18;

  res.json({
    agent: "YouTube",
    channel: "In-stream / Shorts / Discovery",
    availability: limited ? "limited" : "available",
    estimated_cpa: yen(pct > 18 ? 9200 : 8400),
    estimated_reach: "high",
    agent_intent: "protect_upper_funnel_role",
    suggested_allocation: 15,
    suggested_role: "comparison_support",
    required_creative: ["15s video", "30s video", "bumper variant", "landing page alignment"],
    constraints: ["video asset required", "brand safety setting required"],
    risk: "CPA can look inefficient if YouTube is evaluated only by last-click conversion.",
    negotiation_note: "YouTube is viable if used for understanding, reassurance, and comparison support rather than pure CV capture.",
    recommendation: "Use YouTube as a comparison-support and education layer."
  });
});

app.post("/agent/tiktok", (req, res) => {
  const pct = req.body.allocation_pct || 0;
  const limited = pct > 22;

  res.json({
    agent: "TikTok",
    channel: "Short Video / In-feed",
    availability: limited ? "limited" : "available",
    estimated_cpa: "volatile",
    estimated_reach: "high",
    agent_intent: "maximize_discovery_with_creative_learning",
    suggested_allocation: 18,
    suggested_role: "discovery_and_creative_test",
    required_creative: ["vertical short video", "hook within 3 seconds", "multiple creative variants"],
    constraints: ["creative volume required", "brand safety review recommended"],
    risk: "CPA stability is low; performance depends heavily on creative resonance.",
    negotiation_note: "TikTok should be treated as a discovery and learning channel with capped test budget.",
    recommendation: "Use TikTok as a capped discovery and creative-learning channel."
  });
});

app.listen(3000, () => {
  console.log("Negotiation Mock Agents running → http://127.0.0.1:3000");
});

