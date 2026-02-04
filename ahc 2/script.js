import { PhysicsEngine } from './src/engine/physics_engine.js';
import { calculateBrandImageScore, getKeywordsForCluster, fetchBrandData } from './src/engine/data_engine.js';
import { renderStrategySection } from './src/components/strategy_section.js';

// Removed: import { searchBrand } from './src/engine/data_engine.js'; since we use fetchBrandData now

// Main Initialization
// Main Initialization
function initApp() {
    console.log("[Script] initApp started.");


    // 1. Initialize Engines
    const engine = new PhysicsEngine('physics-canvas-dashboard');
    if (window.initAsciiEngine) {
        window.asciiEngine = window.initAsciiEngine('ascii-canvas');
    }

    // 2. DOM Elements
    const searchView = document.getElementById('search-view');
    const dashboardView = document.getElementById('dashboard-view');
    const loadingView = document.getElementById('loading-view');
    const searchInput = document.getElementById('brand-search-input');
    const arrowIcon = document.getElementById('search-arrow-icon');
    const btnBack = document.getElementById('btn-back-search');
    const btnBackSidebar = document.getElementById('btn-back-search-sidebar');
    const btnNewAnalysis = document.getElementById('btn-new-analysis');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const closeBtn = document.getElementById('close-modal');

    let currentBrand = null;

    // 3. Search Interaction Logic
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (arrowIcon) {
                if (val.length > 0) {
                    arrowIcon.classList.remove('disabled');
                    arrowIcon.classList.add('active');
                } else {
                    arrowIcon.classList.add('disabled');
                    arrowIcon.classList.remove('active');
                }
            }
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) performSearch(query);
            }
        });

        if (arrowIcon) {
            arrowIcon.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) performSearch(query);
            });
        }
    }

    // 4. Core Search Function (Async)
    async function performSearch(query) {
        console.log(`[Script] performSearch called with query: "${query}"`);
        if (!query) return;

        // UI Feedback: Loading
        const loadingEl = document.getElementById('loading-view');
        if (loadingEl) loadingEl.classList.remove('hidden');
        else console.error("[Script] loading-view element not found!");

        try {
            console.log("[Script] Calling fetchBrandData...");
            // Fetch Data (Real-time Wikipedia or Fallback)
            const brandProfile = await fetchBrandData(query);
            console.log("[Script] fetchBrandData returned:", brandProfile);

            // Update UI
            if (brandProfile) {
                console.log("[Script] Profile found. Switching to Dashboard.");
                // Hide Search, Show Dashboard
                if (searchView) searchView.classList.add('hidden');

                // Sidebar Logo handling: Ensure it doesn't break layout
                const logoArea = document.querySelector('.logo-area');
                if (logoArea) logoArea.style.display = 'none';

                initializeDashboard(brandProfile);

                if (dashboardView) dashboardView.classList.remove('hidden');
                else console.error("[Script] dashboard-view not found!");

                // Stop ASCII, Start Physics
                if (window.asciiEngine) window.asciiEngine.stop();

                // Resize Canvas after visibility change
                requestAnimationFrame(() => {
                    if (engine) engine.resize();
                    if (engine) engine.update();
                });
            } else {
                console.warn("[Script] No brand profile returned.");
                alert("데이터를 찾을 수 없습니다.");
            }
        } catch (error) {
            console.error("[Script] Search Error:", error);
            alert("검색 중 오류가 발생했습니다: " + error.message);
        } finally {
            if (loadingEl) loadingEl.classList.add('hidden');
            console.log("[Script] performSearch finished.");
        }
    }

    function initializeDashboard(brand) {
        currentBrand = brand;

        // Basic Info
        document.getElementById('current-brand-name').innerText = brand.name;
        document.querySelector('.insight-cluster-section p').innerText = "소비자 리뷰 감정 시각화";

        // KPI & Score
        const keywords = getKeywordsForCluster(brand.keywords);
        const score = calculateBrandImageScore(brand.keywords);
        document.getElementById('brand-image-score').innerText = score;

        // Physics Engine
        engine.setNodes(keywords);

        // Strategy Section
        renderStrategySection('strategy-section', brand);

        // Scroll Spy Init
        initScrollSpy();
        observeSections();
    }

    // 5. Theme Toggle
    if (themeBtn) {
        const themeIcon = themeBtn.querySelector('.material-icons-round');
        // Initialize Theme
        if (!document.documentElement.getAttribute('data-theme')) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            themeIcon.innerText = newTheme === 'dark' ? 'dark_mode' : 'light_mode';

            if (engine.updateTheme) engine.updateTheme(newTheme);
        });
    }

    // 6. Navigation & Scroll Spy
    function initScrollSpy() {
        const sections = document.querySelectorAll('.strategy-section, .insight-cluster-section');
        const navItems = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        navItems.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                }
            });
        }, {
            root: document.querySelector('.main-content'),
            threshold: 0.2,
            rootMargin: "-20% 0px -60% 0px"
        });

        sections.forEach(s => observer.observe(s));
    }

    // Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    const container = document.querySelector('.main-content');
                    // Simple scroll
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // 7. Interaction (Canvas Click)
    const canvas = document.getElementById('physics-canvas-dashboard');
    if (canvas) {
        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const clickedNode = engine.checkInteraction(x, y);
            if (clickedNode) showKeywordDetail(clickedNode);
        });
    }

    function showKeywordDetail(keyword) {
        document.getElementById('modal-keyword-title').innerText = keyword.text;
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';

        const realReviews = currentBrand.reviews.filter(r => r.category === keyword.text);
        const generatedReviews = generateMockReviews(keyword, 25 - realReviews.length);
        const reviewsToDisplay = [...realReviews, ...generatedReviews];

        reviewsToDisplay.forEach(review => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="review-item">
                    <div class="review-header">
                        <span class="source-tag">${review.source}</span>
                        <span class="sentiment-score">${Math.round(review.sentiment * 100)}% Positive</span>
                    </div>
                    <p class="review-text">${review.text}</p>
                    <div class="sentiment-track">
                        <div class="sentiment-fill" style="width: ${review.sentiment * 100}%;"></div>
                    </div>
                </div>
            `;
            reviewList.appendChild(li);
        });

        document.getElementById('keyword-modal').classList.remove('hidden');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('keyword-modal').classList.add('hidden');
        });
    }

    // 8. Helper: Mock Reviews
    function generateMockReviews(keyword, count) {
        if (count <= 0) return [];
        const templates = {
            good: ["진짜 {kw} 좋네요.", "{kw} 강추합니다.", "{kw} 때문에 씁니다."],
            bad: ["{kw} 좀 별로...", "{kw} 개선 필요.", "{kw} 아쉬워요."]
        };
        const sources = ['Olive Young', 'Naver', 'Instagram'];
        const results = [];
        for (let i = 0; i < count; i++) {
            const isPositive = keyword.type === 'good';
            const tmplList = isPositive ? templates.good : templates.bad;
            const tmpl = tmplList[Math.floor(Math.random() * tmplList.length)];
            results.push({
                source: sources[Math.floor(Math.random() * sources.length)],
                text: tmpl.replace('{kw}', keyword.text),
                sentiment: isPositive ? 0.8 : 0.2,
                category: keyword.text
            });
        }
        return results;
    }

    // 9. Reset / Back Logic
    const resetSearch = () => {
        dashboardView.classList.add('hidden');
        searchView.classList.remove('hidden');

        // Reset Search View transparency if any
        searchView.style.opacity = '1';

        if (window.asciiEngine) window.asciiEngine.start();
        engine.stop();
        searchInput.value = '';
    };

    if (btnBackSidebar) btnBackSidebar.addEventListener('click', (e) => {
        e.preventDefault();
        resetSearch();
    });

    if (btnNewAnalysis) btnNewAnalysis.addEventListener('click', (e) => {
        e.preventDefault(); // Fixed: Added preventDefault
        resetSearch();
    });

    // 10. Reveal Animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    function observeSections() {
        const reveals = document.querySelectorAll('.reveal, .fade-in-up');
        reveals.forEach(el => revealObserver.observe(el));
    }
    observeSections();
}

// Safe Execution Trigger
if (document.readyState === 'complete') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}

