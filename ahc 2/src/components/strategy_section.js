
export function renderStrategySection(containerId, brand) {
    const container = document.getElementById(containerId);
    if (!container || !brand) return;

    const { intent, keywords, nextAction, reviewAnalysis } = brand;
    const topDesire = keywords.find(k => k.type === 'desire')?.text || "Needs Analysis";

    const meceGroups = brand.keywords.reduce((acc, k) => {
        const cat = k.mece || 'Uncategorized';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(k);
        return acc;
    }, {});

    const html = `
        <!-- Section 1: KPI Dashboard -->
        <div id="section-kpi" class="strategy-section fade-in-up delay-1">
            <div class="section-title-group">
                <span class="section-tag">PERFORMANCE METRICS</span>
                <h3 class="section-heading">Key Performance Indicators</h3>
                <p class="section-sub">브랜드의 현재 시장 위치와 성과를 나타내는 핵심 지표입니다.</p>
            </div>
            
            <div class="kpi-container">
                <div class="glass-card">
                    <div class="kpi-title">Brand Awareness</div>
                    <div class="kpi-number">${brand.kpi.brandAwareness}%</div>
                    <div class="kpi-trend up">▲ 2.3% vs Last Month</div>
                </div>
                <div class="glass-card">
                    <div class="kpi-title">Customer Satisfaction (CSAT)</div>
                    <div class="kpi-number">${brand.kpi.csat}/5.0</div>
                    <div class="kpi-trend up">▲ 0.4pt Increase</div>
                </div>
                <div class="glass-card">
                    <div class="kpi-title">Market Influence (H-Index)</div>
                    <div class="kpi-number">${brand.kpi.hIndex}</div>
                    <div class="kpi-trend neutral">- Stable</div>
                </div>
                <div class="glass-card">
                    <div class="kpi-title">Repurchase Intent</div>
                    <div class="kpi-number">${brand.kpi.repurchaseRate}%</div>
                    <div class="kpi-trend up">▲ High Retention</div>
                </div>
            </div>
        </div>

        <!-- Section 2: Perception Gap -->
        <div id="section-gap" class="strategy-section fade-in-up delay-2">
            <div class="section-title-group">
                <span class="section-tag">INSIGHT DISCOVERY</span>
                <h3 class="section-heading">Perception Gap Analysis</h3>
                <p class="section-sub">브랜드가 '주장하는 가치(Intent)'와 소비자가 '인식하는 가치(Perception)'의 간극을 분석합니다.</p>
            </div>
            
            <div class="gap-card">
                <div class="gap-node">
                    <div class="gap-label">Brand Intent</div>
                    <div class="gap-value">${intent}</div>
                </div>
                <div class="gap-arrow material-icons-round">east</div>
                <div class="gap-node">
                    <div class="gap-label">Consumer Perception</div>
                    <div class="gap-value" style="color: var(--accent-secondary);">${topDesire}</div>
                </div>
            </div>
            
            <p class="gap-insight">
                "데이터 분석 결과, 브랜드는 <strong>'${intent}'</strong>의 가치를 지향하고 있으나, 
                실제 소비자들은 <strong>'${topDesire}'</strong> 키워드를 통해 브랜드를 정의하고 있습니다. 
                이 간극을 좁히는 것이 차기 시즌의 핵심 과제입니다."
            </p>
        </div>

        <!-- Section 3: Strategic Framework (MECE & Matrix) -->
        <div id="section-matrix" class="strategy-section fade-in-up delay-3">
            <div class="section-title-group">
                <span class="section-tag">STRATEGIC FRAMEWORK</span>
                <h3 class="section-heading">McKinsey Strategic Analysis</h3>
                <p class="section-sub">데이터를 MECE(Mutually Exclusive Collectively Exhaustive) 구조로 분해하고 전략적 위치를 시각화합니다.</p>
            </div>

            <!-- MECE Decomposition -->
            <h4 class="subsection-title"><span class="material-icons-round">account_tree</span> MECE Keyword Structure</h4>
            <div class="mece-container">
                ${Object.entries(meceGroups).map(([category, items]) => `
                    <div class="mece-group glass-card">
                        <div class="mece-header">${category}</div>
                        <div class="mece-list">
                            ${items.map(item => `
                                <div class="mece-item ${item.type}">
                                    <span class="mece-text">${item.text}</span>
                                    <span class="mece-score">${item.score}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Strategic Matrix -->
            <h4 class="subsection-title" style="margin-top: 40px;"><span class="material-icons-round">grid_view</span> Strategic Competitiveness Matrix</h4>
            <div class="strategic-matrix glass-card">
                <div class="matrix-axis-y-label">Consumer Importance (High)</div>
                <div class="matrix-axis-x-label">Brand Competitiveness (Dominant)</div>
                
                <!-- Axis Lines -->
                <div class="matrix-line x-axis"></div>
                <div class="matrix-line y-axis"></div>

                <!-- Quadrant Labels -->
                <div class="quadrant-label q1">Star (Maintain)</div>
                <div class="quadrant-label q2">Opportunity (Invest)</div>
                <div class="quadrant-label q3">Risk (Monitor)</div>
                <div class="quadrant-label q4">Cash Cow (Harvest)</div>

                <!-- Bubbles -->
                ${brand.keywords.map(k => {
        if (!k.matrix) return '';
        // Convert -100~100 range to 0~100% css position
        // x: -100 (left) to 100 (right) -> 0% to 100%
        // y: -100 (bottom) to 100 (top) -> 0% to 100% (but css bottom 0 is bottom)
        const left = (k.matrix.x + 100) / 2;
        const bottom = (k.matrix.y + 100) / 2;
        const size = (k.importance || 5) * 6 + 20; // Size factor
        return `
                        <div class="matrix-bubble ${k.type}" 
                             style="left: ${left}%; bottom: ${bottom}%; width: ${size}px; height: ${size}px;"
                             data-label="${k.text}">
                            <div class="bubble-content">${k.text}</div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>

        <!-- Section 4: Roadmap -->
        <div id="section-roadmap" class="strategy-section fade-in-up delay-1">
            <div class="section-title-group">
                <span class="section-tag">ACTION PLAN</span>
                <h3 class="section-heading">Communication Roadmap</h3>
                <p class="section-sub">단계별 캠페인 전개 전략 및 마일스톤입니다.</p>
            </div>
            
            <div class="glass-card" style="padding: 40px;">
                <div class="roadmap-list">
                    ${brand.marketingRoadmap.map((r, index) => `
                        <div class="roadmap-row detailed">
                            <div class="roadmap-time-col">
                                <span class="step-badge">STEP ${index + 1}</span>
                                <div class="roadmap-term">${r.term}</div>
                            </div>
                            <div class="roadmap-content-col">
                                <h4 class="roadmap-goal">${r.goal}</h4>
                                <div class="roadmap-strategy">
                                    <span class="label">Strategy</span>
                                    <span class="text">${r.strategy}</span>
                                </div>
                                <div class="roadmap-tactics">
                                    <span class="label">Key Tactics</span>
                                    <ul>
                                        ${r.tactics.map(t => `<li>${t}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="roadmap-kpi">
                                    <span class="material-icons-round">flag</span>
                                    <span>Expected KPI: <strong>${r.kpi}</strong></span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Section 5: VOC Analysis -->
        <div id="section-feedback" class="strategy-section fade-in-up delay-2">
            <div class="section-title-group">
                <span class="section-tag">VOICE OF CUSTOMER</span>
                <h3 class="section-heading">Sentiment Analysis</h3>
                <p class="section-sub">실제 리뷰 데이터를 기반으로 도출된 강점(Props)과 개선점(Cons)입니다.</p>
            </div>
            
            <div class="matrix-grid" style="grid-template-columns: 1fr 1fr;">
                <div class="glass-card">
                    <div class="matrix-header" style="color: var(--accent-success); border-color: rgba(16, 185, 129, 0.2);">
                        <span class="material-icons-round">thumb_up</span> Positives (Strengths)
                    </div>
                    ${reviewAnalysis.positive.map(item => `
                        <div class="matrix-item" style="margin-top: 16px;">
                            <span class="item-label" style="color: var(--accent-success);">#${item.rank} ${item.keyword}</span>
                            <p class="item-desc">${item.solution}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="glass-card">
                    <div class="matrix-header" style="color: var(--accent-error); border-color: rgba(239, 68, 68, 0.2);">
                        <span class="material-icons-round">warning</span> Negatives (Improvements)
                    </div>
                    ${reviewAnalysis.negative.map(item => `
                        <div class="matrix-item" style="margin-top: 16px;">
                            <span class="item-label" style="color: var(--accent-error);">#${item.rank} ${item.keyword}</span>
                            <p class="item-desc">${item.solution}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}
