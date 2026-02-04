/**
 * Brand Compass Data Engine (Final High-Fidelity)
 * Handles brand-specific data, deep sentiment, and marketing orientation.
 */

export const brandProfiles = {
    "AESTURA": {
        name: "에스트라 (AESTURA)",
        aliases: ["에스트라", "아토베리어", "estura"],
        intent: "고기능성 더마 안티에이징",
        toneAndManner: {
            vibe: "Trustworthy, Scientific, Minimalist",
            colors: ["#3b82f6", "#f8fafc", "#e2e8f0"],
            instaAssets: ["src/data/aestura_insta_grid.png"]
        },
        kpi: {
            brandAwareness: 88,
            csat: 92,
            hIndex: 78, // Healthcare Identity Index
            repurchaseRate: 65
        },
        marketingRoadmap: [
            {
                term: "Short-term (Q1-Q2)",
                goal: "장벽 케어 카테고리 절대 우위 선점",
                strategy: "아토베리어 365 '속건조 유목민 정착' 캠페인",
                tactics: [
                    "올리브영 단독 기획 세트(크림+미스트) 출시 및 매대 점유율 확대",
                    "유튜버 '디렉터파이' 협업: 성분 분석 및 임상 결과 팩트 체크 콘텐츠",
                    "강남/홍대 플래그십 스토어 내 '피부 장벽 진단' 체험존 운영"
                ],
                kpi: "올리브영 더마 카테고리 1위 수성"
            },
            {
                term: "Mid-term (Q3-Q4)",
                goal: "더마 코스메틱 글로벌 팬덤 확장",
                strategy: "동남아/일본 인플루언서 파트너십 및 의료 채널 진입",
                tactics: [
                    "Qoo10, 라자다 등 일본/동남아 주요 이커머스 내 브랜드관 오픈",
                    "현지 피부과 전문의(Dermatologist) 추천 인증 마크 획득 마케팅",
                    "K-Derma 트렌드 리포트 발간 및 미디어 데이 개최"
                ],
                kpi: "해외 매출 비중 25% 달성"
            },
            {
                term: "Long-term (Next Year)",
                goal: "라이프스타일 헬스케어 리더 도약",
                strategy: "개인화 스킨 데이터 기반 구독 서비스 런칭",
                tactics: [
                    "AI 피부 진단 앱 런칭 및 제품 정기 구독 모델 도입",
                    "이너뷰티 라인업(피부 유산균 등) 확장을 통한 토탈 케어 솔루션 구축",
                    "친환경 리필 패키지 전면 도입으로 ESG 경영 강화"
                ],
                kpi: "정기 구독 회원 10만 명 확보"
            }
        ],
        strengths: ["압도적인 속건조 해결 능력", "민감성 피부 대상 높은 신뢰도", "무향/무자극 대중성"],
        reviewAnalysis: {
            positive: [
                { keyword: "속건조 해결", rank: 1, solution: "바이럴 캠페인 강화: '속건조 유목민 정착지' 캠페인 확장" },
                { keyword: "성분 안심", rank: 2, solution: "전성분 및 임상 결과 시각화 자료 배포" },
                { keyword: "무자극", rank: 3, solution: "민감성 피부 대상 샘플링 이벤트 확대" },
                { keyword: "발림성", rank: 4, solution: "메이크업 전 사용 가능한 '부스터' 이미지 강조" },
                { keyword: "보습 지속력", rank: 5, solution: "24시간 수분 지속 임상 데이터 강조" }
            ],
            negative: [
                { keyword: "밀림 현상", rank: 1, solution: "사용 가이드 제공: 소량 레이어링 기법 및 흡수 팁 안내" },
                { keyword: "용기 불편", rank: 2, solution: "Next Version 개선: 원터치 캡 또는 펌프형 디자인 검토" },
                { keyword: "가격대", rank: 3, solution: "리필 제품 출시 및 대용량 기획 세트 구성" },
                { keyword: "흡수 지연", rank: 4, solution: "피부 온도 낮추는 쿨링 팁과 함께 홍보" },
                { keyword: "향 없음", rank: 5, solution: "무향의 가치(알러지 프리)에 대한 교육적 콘텐츠 제작" }
            ]
        },
        targetAudience: {
            main: "2534 수분 유목민",
            description: "성분을 꼼꼼히 따지고 실질적인 효능(속건조)을 중시하는 스마트 컨슈머",
            behavior: "화해/올리브영 리뷰 상위권 제품 위주 소비"
        },
        keywords: [
            { id: 'k1', text: '속건조 해결', score: 0.95, volume: 450, type: 'desire', mece: 'Functional Value', matrix: { x: 85, y: 90 }, importance: 9.5 },
            { id: 'k2', text: '순한 보습', score: 0.92, volume: 380, type: 'desire', mece: 'Functional Value', matrix: { x: 80, y: 85 }, importance: 9.0 },
            { id: 'k3', text: '무향/자극없음', score: 0.88, volume: 310, type: 'desire', mece: 'Emotional Value', matrix: { x: 75, y: 70 }, importance: 8.5 },
            { id: 'k4', text: '피부장벽 강화', score: 0.85, volume: 240, type: 'desire', mece: 'Functional Value', matrix: { x: 70, y: 80 }, importance: 8.0 },
            { id: 'k5', text: '밀림 현상', score: 0.12, volume: 150, type: 'pain', mece: 'Negative Factors', matrix: { x: -40, y: 60 }, importance: 7.0 },
            { id: 'k6', text: '좁쌀 트러블', score: 0.25, volume: 110, type: 'pain', mece: 'Negative Factors', matrix: { x: -50, y: 80 }, importance: 7.5 },
            { id: 'k7', text: '용기 불편', score: 0.45, volume: 90, type: 'pain', mece: 'Negative Factors', matrix: { x: -20, y: 30 }, importance: 4.0 },
            { id: 'k8', text: '흡수 지연', score: 0.35, volume: 120, type: 'pain', mece: 'Negative Factors', matrix: { x: -30, y: 50 }, importance: 5.0 }
        ],
        reviews: [
            { source: 'Olive Young', text: "속건조 진짜 잘 잡아줘요. 아침까지 촉촉합니다.", sentiment: 0.95, category: '속건조 해결' },
            { source: 'Hwahae', text: "성분이 착해서 믿고 써요. 트러블 하나도 안 나네요.", sentiment: 0.92, category: '순한 보습' },
            { source: 'Naver Shopping', text: "좋긴 한데 화장 전에 바르면 좀 밀리는 느낌이 있어요.", sentiment: 0.4, category: '밀림 현상' },
        ],
        nextAction: {
            season: "Summer (여름 대비)",
            focus: "Cooling Relief & Zero-Pilling",
            nextNarrative: "피부 온도와 밀림의 상관관계 분석",
            productIdea: "Watery Gel Texture (No-pilling formula)",
            copy: [
                "아침 화장 전에도 밀림 없는 압도적 속건조 해결",
                "민감 피부를 위한 0.00 저자극 수분 레이어링",
                "여름철 열 오른 피부를 위한 급속 진정 솔루션"
            ]
        }
    },
    "SULWHASOO": {
        name: "설화수 (Sulwhasoo)",
        aliases: ["설화수", "자음생", "sulwhasoo"],
        intent: "전통 한방 럭셔리 스킨케어",
        toneAndManner: {
            vibe: "Luxury, Heritage, Timeless Beauty",
            colors: ["#d97706", "#fffbeb", "#fef3c7"],
            instaAssets: ["src/data/sulwhasoo_insta_grid.png"]
        },
        kpi: {
            brandAwareness: 95,
            csat: 94,
            hIndex: 89, // Heritage Luxury Index
            repurchaseRate: 82
        },
        marketingRoadmap: [
            {
                term: "Short-term (Q1-Q2)",
                goal: "영 타겟 럭셔리 경험 확산 및 브랜드 리주브네이션",
                strategy: "글로벌 앰버서더(로제) 활용 'Modern Heritage' 캠페인",
                tactics: [
                    "성수/한남 팝업스토어 'Sulwhasoo Universe' 오픈으로 2030 접점 확대",
                    "숏폼 챌린지: #SulwhasooGlow 해시태그 확산 (틱톡/릴스)",
                    "한정판 아티스트 콜라보 패키지 출시 (MZ세대 취향 저격)"
                ],
                kpi: "2030 신규 고객 유입률 30% 증가"
            },
            {
                term: "Mid-term (Q3-Q4)",
                goal: "프리미엄 리츄얼 서비스 및 멤버십 고도화",
                strategy: "VIP 전용 프라이빗 스파 및 멤버십 프로그램 런칭",
                tactics: [
                    "플래그십 스토어 내 '진생 스파' 프로그램 리뉴얼 및 예약 시스템 고도화",
                    "충성 고객 대상 'Heritage Club' 커뮤니티 운영 및 정기 클래스 개최",
                    "호텔/리조트 제휴 어메니티 공급 확대"
                ],
                kpi: "VIP 고객 재구매율 85% 유지"
            },
            {
                term: "Long-term (Next Year)",
                goal: "글로벌 럭셔리 뷰티 헤리티지 표준 정립",
                strategy: "북미/유럽 시장 내 'K-Luxury' 포지셔닝 강화",
                tactics: [
                    "메트로폴리탄 박물관 등 글로벌 문화 예술 기관 파트너십 체결",
                    "글로벌 뷰티 어워드 출품 및 '한방 과학' 심포지엄 개최",
                    "아마존 프레스티지 뷰티관 입점 및 전용 라인업 운영"
                ],
                kpi: "북미 시장 매출 전년비 200% 성장"
            }
        ],
        strengths: ["깊은 영양감과 윤기", "선물하기 좋은 압도적 브랜드 파워", "차별화된 한방 향"],
        reviewAnalysis: {
            positive: [
                { keyword: "브랜드 품격", rank: 1, solution: "VIP 로열티 프로그램 및 프라이빗 런칭 행사 유지" },
                { keyword: "선물 선호도", rank: 2, solution: "커스텀 보자기 패키징 서비스 고도화" },
                { keyword: "윤기/광채", rank: 3, solution: "'윤조' 라인 기반의 결광 피부 캠페인 지속" },
                { keyword: "깊은 영양감", rank: 4, solution: "시니어 타겟 고기능성 안티에이징 서사 강화" },
                { keyword: "한방 향", rank: 5, solution: "시그니처 향을 활용한 웰니스/아로마테라피 연계" }
            ],
            negative: [
                { keyword: "무거운 제형", rank: 1, solution: "라이트 버전 라인업 확장 (Younger Audience용)" },
                { keyword: "올드한 이미지", rank: 2, solution: "앰버서더 다양화 및 현대적 헤리티지 컨셉의 팝업스토어" },
                { keyword: "고가격대", rank: 3, solution: "가치 소비 강조: '나를 위한 투자' 개념의 럭셔리 마케팅" },
                { keyword: "접근장벽", rank: 4, solution: "디지털 채널(카카오 선물하기 등) 전용 기획 패키지 출시" },
                { keyword: "성분 생소함", rank: 5, solution: "한방 성분의 과학적 효능(진생 사이언스) 리포트 발행" }
            ]
        },
        targetAudience: {
            main: "3545 럭셔리 케어 희망층",
            description: "자신을 위한 투자와 품격 있는 선물을 선호하는 고관여 여성 고객",
            behavior: "백화점 및 브랜드 몰 중심의 프리미엄 쇼핑"
        },
        keywords: [
            { id: 's1', text: '고급스러운 향', score: 0.98, volume: 520, type: 'desire', mece: 'Emotional Value', matrix: { x: 90, y: 75 }, importance: 9.0 },
            { id: 's2', text: '영양감', score: 0.94, volume: 480, type: 'desire', mece: 'Functional Value', matrix: { x: 95, y: 95 }, importance: 9.8 },
            { id: 's3', text: '선물용 패키지', score: 0.96, volume: 410, type: 'desire', mece: 'Social Value', matrix: { x: 92, y: 80 }, importance: 9.2 },
            { id: 's4', text: '윤기/광채', score: 0.90, volume: 350, type: 'desire', mece: 'Functional Value', matrix: { x: 85, y: 70 }, importance: 8.5 },
            { id: 's5', text: '가격적 부담', score: 0.20, volume: 300, type: 'pain', mece: 'Cost Value', matrix: { x: -30, y: 60 }, importance: 7.5 },
            { id: 's6', text: '무거운 제형', score: 0.30, volume: 210, type: 'pain', mece: 'Negative Factors', matrix: { x: -40, y: 50 }, importance: 6.0 },
            { id: 's7', text: '올드한 이미지', score: 0.40, volume: 180, type: 'pain', mece: 'Emotional Value', matrix: { x: -20, y: 40 }, importance: 5.5 }
        ],
        reviews: [
            { source: 'Olive Young', text: "어머니 생신 선물로 드렸는데 너무 좋아하시네요.", sentiment: 0.98, category: '선물용 패키지' },
            { source: 'Naver Shopping', text: "바르고 나면 얼굴에 광이 나요. 근데 너무 비싸요.", sentiment: 0.6, category: '가격적 부담' },
        ],
        nextAction: {
            season: "Spring (봄 시즌)",
            focus: "Brightening Vitality & Modern Heritage",
            nextNarrative: "유산을 현대적으로 재해석한 가벼운 럭셔리",
            productIdea: "Light Essential Mist (MZ Line Extension)",
            copy: [
                "무겁지 않게 채워지는 설화수만의 맑은 윤기",
                "일상을 럭셔리로 바꾸는 한 방울의 영양",
                "MZ세대도 반한 가벼운 텍스처의 반전 매력"
            ]
        }
    },
    "AHC": {
        name: "에이에이치씨 (AHC)",
        aliases: ["에이에이치씨", "카버코리아", "ahc"],
        intent: "에스테틱 노하우를 담은 효율적인 스킨케어",
        toneAndManner: {
            vibe: "Professional, Accessible, Elegant",
            colors: ["#1e293b", "#f1f5f9", "#cbd5e1"],
            instaAssets: ["src/data/ahc_insta_grid.png"]
        },
        kpi: {
            brandAwareness: 92,
            csat: 88,
            hIndex: 74, // Aesthetic Professional Index
            repurchaseRate: 72
        },
        marketingRoadmap: [
            {
                term: "Short-term (Q1-Q2)",
                goal: "프로페셔널 선케어 & 안티에이징 이미지 강화",
                strategy: "박세리 감독 콜라보레이션: 'Sun & Field' 전문성 캠페인",
                tactics: [
                    "TVC 및 디지털 광고 송출: '필드 위에서도 무너지지 않는 차단력' 강조",
                    "골프/테니스 클래스 연계 오프라인 샘플링 프로모션",
                    "올리브영 '마스터즈 픽' 기획 세트 구성"
                ],
                kpi: "선케어 카테고리 점유율 1위 및 검색량 40% 증가"
            },
            {
                term: "Mid-term (Q3-Q4)",
                goal: "데일리 홈 에스테틱 카테고리 본격 확장",
                strategy: "디바이스 결합형 고효능 스킨케어 패키지 런칭",
                tactics: [
                    "홈쇼핑 메인 타임 'AHC 스파 루틴' 풀패키지(앰플+디바이스) 방송 편성",
                    "유명 뷰티 크리에이터 활용 '집에서 하는 10분 에스테틱' 숏폼 챌린지",
                    "자사몰 정기 배송 서비스(구독) 활성화 프로모션"
                ],
                kpi: "홈쇼핑 매진 기록 10회 및 자사몰 회원 50% 증가"
            },
            {
                term: "Long-term (Next Year)",
                goal: "글로벌 라이프 에스테틱 리딩 브랜드 안착",
                strategy: "북미/유럽 시장 프리미엄 포지셔닝 및 채널 다각화",
                tactics: [
                    "세포라(Sephora) 등 글로벌 프리미엄 뷰티 채널 입점 확대",
                    "글로벌 인플루언서 시딩: 'K-Aesthetic Routine' 바이럴 유도",
                    "현지 피부 특성 맞춤형 전용 라인 개발 및 출시"
                ],
                kpi: "글로벌 매출 비중 30% 돌파"
            }
        ],
        strengths: ["국민 아이크림의 압도적 시장 점유율", "합리적인 가격 대비 고효율 성능(가성비)", "다양한 라인업을 통한 폭넓은 고객층"],
        reviewAnalysis: {
            positive: [
                { keyword: "아이크림 명가", rank: 1, solution: "시즌별 아이크림 한정판 에디션 출시로 수집욕구 자극" },
                { keyword: "가성비 최고", rank: 2, solution: "대용량 기획 세트 및 1+1 프로모션으로 '쟁임템' 이미지 강화" },
                { keyword: "부드러운 흡수", rank: 3, solution: "제형의 흡수 속도를 시각화한 짧은 영상 광고 활용" },
                { keyword: "풍부한 영양", rank: 4, solution: "홈쇼핑 런칭 시 임상 데이터 10종 이상 노출로 신뢰도 확보" },
                { keyword: "온가족 사용", rank: 5, solution: "남녀노소 누구나 사용 가능한 패밀리 브랜드 캠페인 전개" }
            ],
            negative: [
                { keyword: "유분기 과다", rank: 1, solution: "지복합성 피부용 '라이트' 라인 별도 홍보 및 추천 가이드" },
                { keyword: "잦은 리뉴얼", rank: 2, solution: "버전별 차이점 명확히 정리한 비교 차트 제공" },
                { keyword: "끈적임", rank: 3, solution: "여름 시즌용 '논스티키' 포뮬러 강조 및 샘플링" },
                { keyword: "향의 호불호", rank: 4, solution: "저자극 무향 버전의 아이크림 라인업 추가" },
                { keyword: "용량 조절", rank: 5, solution: "정교한 양 조절이 가능한 '팁' 형태의 용기 적용" }
            ]
        },
        targetAudience: {
            main: "3040 실속형 케어족",
            description: "검증된 베스트셀러를 선호하며 합리적인 가격에 에스테틱 수준의 케어를 원하는 여성",
            behavior: "홈쇼핑 및 온라인 몰의 대구성 기획 세트 구매 비중 높음"
        },
        keywords: [
            { id: 'a1', text: '아이크림', score: 0.96, volume: 600, type: 'desire', mece: 'Functional Value', matrix: { x: 95, y: 95 }, importance: 9.8 },
            { id: 'a2', text: '가성비', score: 0.94, volume: 550, type: 'desire', mece: 'Cost Value', matrix: { x: 90, y: 90 }, importance: 9.5 },
            { id: 'a3', text: '영양감', score: 0.88, volume: 420, type: 'desire', mece: 'Functional Value', matrix: { x: 80, y: 80 }, importance: 8.8 },
            { id: 'a4', text: '부드러운 발림', score: 0.90, volume: 380, type: 'desire', mece: 'Functional Value', matrix: { x: 85, y: 75 }, importance: 8.5 },
            { id: 'a5', text: '유분기', score: 0.25, volume: 320, type: 'pain', mece: 'Negative Factors', matrix: { x: -30, y: 65 }, importance: 7.0 },
            { id: 'a6', text: '끈적임', score: 0.30, volume: 280, type: 'pain', mece: 'Negative Factors', matrix: { x: -40, y: 70 }, importance: 7.2 },
            { id: 'a7', text: '잦은 리뉴얼', score: 0.45, volume: 150, type: 'pain', mece: 'Negative Factors', matrix: { x: -20, y: 40 }, importance: 5.0 }
        ],
        reviews: [
            { source: 'Home Shopping', text: "역시 아이크림은 AHC예요. 양도 많아서 얼굴 전체에 발라요.", sentiment: 0.96, category: '아이크림' },
            { source: 'Olive Young', text: "가성비는 최고인데 여름에 쓰기엔 약간 번들거릴 수 있어요.", sentiment: 0.7, category: '가성비' },
        ],
        nextAction: {
            season: "Summer (여름 시즌)",
            focus: "Light Hydration & Sun Protection",
            nextNarrative: "무겁지 않게 채우는 에스테틱 수분 레이어링",
            productIdea: "Fresh Sun Stick (Anti-sticky formula)",
            copy: [
                "여름에도 끈적임 없이 빛나는 에스테틱 광채",
                "국민 아이크림의 영양을 그대로 담은 수분 선케어",
                "지친 여름 피부를 위한 급속 진정 에너지 필링"
            ]
        }
    }
};

// --- 3. Dynamic Data Generation (Real-time Web Search) ---

// Helper for timeout
const fetchWithTimeout = async (resource, options = {}) => {
    const { timeout = 3000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
};

async function fetchWikipediaSummary(query) {
    // Try detailed query first, then simple query
    const queries = [query, query + " (brand)", query + " (company)"];

    for (const q of queries) {
        try {
            // Wikipedia API: multi-language support 
            const lang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(q) ? 'ko' : 'en';
            const endpoint = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`;

            // Use timeout fetch
            const response = await fetchWithTimeout(endpoint, { timeout: 3000 });

            if (response.ok) {
                const data = await response.json();
                if (data.type === 'standard' && data.extract) {
                    return {
                        title: data.title,
                        extract: data.extract,
                        thumbnail: data.thumbnail ? data.thumbnail.source : null,
                        lang: lang
                    };
                }
            }
        } catch (e) {
            // Ignore abort errors or fetch failures, try next
            if (e.name !== 'AbortError') console.warn(`Wiki fetch failed for ${q}:`, e);
        }
    }
    return null;
}

export async function fetchBrandData(query) {
    console.log(`[DataEngine] fetchBrandData called for: "${query}"`);
    const start = performance.now();

    // 1. Try Local Profile first
    const localProfile = searchBrandLocal(query);
    if (localProfile) {
        console.log("[DataEngine] Found local profile:", localProfile.name);
        return localProfile;
    }

    // 2. Try Wikipedia API (Real-time)
    const wikiData = await fetchWikipediaSummary(query);

    if (wikiData) {
        // Hydrate a generic profile with real data
        const profile = generateGenericBrand(wikiData.title); // Use proper title

        // Overwrite with real info
        profile.name = `${wikiData.title} (Wiki Verified)`;
        profile.intent = wikiData.extract.length > 100 ? wikiData.extract.substring(0, 100) + "..." : wikiData.extract;

        // Add full summary to a context variable (optional)
        profile.wikiSummary = wikiData.extract;

        // Add fake roadmap based on real context
        // Note: The original generateGenericBrand creates marketingRoadmap as an array.
        // This line assumes a different structure (e.g., { q1: { focus: ... } }).
        // For now, we'll adapt it to modify the first item in the array if it exists.
        if (profile.marketingRoadmap && profile.marketingRoadmap.length > 0) {
            profile.marketingRoadmap[0].goal = `Analyze '${wikiData.title}' Ecosystem`;
        }

        console.log(`[DataEngine] Fetched from Wikipedia in ${Math.round(performance.now() - start)}ms`);
        return profile;
    }

    // 3. Fallback to AI Generative
    console.log(`[DataEngine] Fallback to Generative ID`);
    return generateGenericBrand(query);
}

// Renamed internal synchronous search for local lookups
function searchBrandLocal(query) {
    const lowerQuery = query.toLowerCase().trim();

    // 1. Exact Key Match
    let key = Object.keys(brandProfiles).find(k => k.toLowerCase() === lowerQuery);

    // 2. Alias Match
    if (!key) {
        key = Object.keys(brandProfiles).find(k => {
            const profile = brandProfiles[k];
            return profile.aliases && profile.aliases.some(alias => alias.toLowerCase() === lowerQuery);
        });
    }

    return brandProfiles[key] || null;
}

export function searchBrand(query) {
    console.warn("Deprecated: Use fetchBrandData(query) for async search.");
    return searchBrandLocal(query) || generateGenericBrand(query);
}

function generateGenericBrand(name) {
    // Generate a consistent pseudo-random seed from the name string
    let seed = 0;
    for (let i = 0; i < name.length; i++) {
        seed = (seed << 5) - seed + name.charCodeAt(i);
        seed |= 0;
    }
    const random = () => {
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    return {
        name: `${name} (AI Analysis)`,
        intent: "AI-Generated Brand Insight",
        toneAndManner: {
            vibe: "Modern, Data-Driven, Dynamic",
            colors: ["#6366f1", "#e0e7ff", "#c7d2fe"],
            instaAssets: [] // No specific assets for generic
        },
        kpi: {
            brandAwareness: Math.floor(70 + random() * 25),
            csat: Math.floor(75 + random() * 20),
            hIndex: Math.floor(60 + random() * 30),
            repurchaseRate: Math.floor(50 + random() * 40)
        },
        marketingRoadmap: [
            {
                term: "Short-term (Q1-Q2)",
                goal: "Brand Awareness Expansion",
                strategy: "Social Media Viral Campaign",
                tactics: [
                    "Collaborate with micro-influencers to boost organic reach",
                    "Launch short-form video challenge on TikTok/Reels",
                    "Implement localized digital ads targeting core demographics"
                ],
                kpi: "Increase engagement by 25%"
            },
            {
                term: "Mid-term (Q3-Q4)",
                goal: "Customer Retention & Loyalty",
                strategy: "Relationship Marketing & Community Building",
                tactics: [
                    "Develop a tiered membership/loyalty program",
                    "Host offline community meetups and pop-up events",
                    "Personalized email marketing automation"
                ],
                kpi: "Achieve 40% Repeat Purchase Rate"
            },
            {
                term: "Long-term (Next Year)",
                goal: "Global Market Penetration",
                strategy: "Cross-border E-commerce Expansion",
                tactics: [
                    "Establish logistics partnerships in key overseas markets",
                    "localize product packaging and communication",
                    "Participate in international industry expos"
                ],
                kpi: "International sales to exceed 15% of total revenue"
            }
        ],
        strengths: ["Innovative Product Design", "Strong Online Presence", "Agile Response to Trends"],
        reviewAnalysis: {
            positive: [
                { keyword: "Quality", rank: 1, solution: "Highlight craftsmanship in marketing materials" },
                { keyword: "Design", rank: 2, solution: "Launch design-focused limited editions" },
                { keyword: "Speed", rank: 3, solution: "Emphasize fast delivery in value proposition" },
                { keyword: "Service", rank: 4, solution: "Showcase customer testimonials" },
                { keyword: "Value", rank: 5, solution: "Create comparison charts vs competitors" }
            ],
            negative: [
                { keyword: "Price", rank: 1, solution: "Introduce entry-level product lines" },
                { keyword: "Durability", rank: 2, solution: "Extend warranty period to build trust" },
                { keyword: "Shipping", rank: 3, solution: "Partner with premium logistics providers" },
                { keyword: "Stock", rank: 4, solution: "Implement 'Notify Me' for restocks" },
                { keyword: "CS Response", rank: 5, solution: "Deploy AI chatbots for 24/7 support" }
            ]
        },
        targetAudience: {
            main: "Gen Z & Millennials",
            description: "Digital natives looking for authentic brand experiences and value.",
            behavior: "High engagement on social platforms and mobile commerce."
        },
        keywords: [
            { id: 'g1', text: 'Innovative', score: 0.9, volume: 500, type: 'desire', mece: 'Functional Value', matrix: { x: 80, y: 80 }, importance: 9 },
            { id: 'g2', text: 'Trendy', score: 0.85, volume: 450, type: 'desire', mece: 'Emotional Value', matrix: { x: 70, y: 75 }, importance: 8.5 },
            { id: 'g3', text: 'Reliable', score: 0.8, volume: 400, type: 'desire', mece: 'Functional Value', matrix: { x: 60, y: 85 }, importance: 8 },
            { id: 'g4', text: 'Expensive', score: 0.3, volume: 300, type: 'pain', mece: 'Cost Value', matrix: { x: -40, y: 50 }, importance: 7 },
            { id: 'g5', text: 'Shipping Delay', score: 0.2, volume: 200, type: 'pain', mece: 'Service Value', matrix: { x: -30, y: 40 }, importance: 6 }
        ],
        reviews: [
            { source: 'Instagram', text: `I really love the vibe of ${name}! Totally worth the hype.`, sentiment: 0.95, category: 'Trendy' },
            { source: 'Twitter', text: `${name} has some cool designs, but shipping took forever.`, sentiment: 0.4, category: 'Shipping Delay' },
        ],
        nextAction: {
            season: "Upcoming Season",
            focus: "Growth & Innovation",
            nextNarrative: `Redefining the standard for ${name}`,
            productIdea: "New Signature Collection",
            copy: [
                `Experience the future of ${name}`,
                "Innovation meets everyday utility",
                "Join the movement"
            ]
        }
    };
}

export function calculateBrandImageScore(keywords) {
    const desireVol = keywords.filter(k => k.type === 'desire').reduce((acc, k) => acc + (k.score * k.volume), 0);
    const painVol = keywords.filter(k => k.type === 'pain').reduce((acc, k) => acc + ((1 - k.score) * k.volume), 0);
    const totalVol = keywords.reduce((acc, k) => acc + k.volume, 0);
    const score = ((desireVol / totalVol) * 100) - ((painVol / totalVol) * 20) + 10;
    return Math.min(100, Math.max(0, score)).toFixed(1);
}

export function getKeywordsForCluster(brandKeywords) {
    return brandKeywords.map(k => ({
        ...k,
        radius: Math.sqrt(k.volume) * 2.5,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        type: k.type === 'desire' ? 'good' : 'bad'
    }));
}
