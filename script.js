// 가스산업기사 시험 문제 데이터
const EXAM_QUESTIONS = [
    {
        text: "가스산업기사 시험에서 천연가스의 주성분은 무엇인가?",
        options: ["메탄 (CH₄)", "에탄 (C₂H₆)", "프로판 (C₃H₈)", "부탄 (C₄H₁₀)"],
        correctAnswer: 0,
        explanation: "천연가스의 주성분은 메탄(CH₄)으로, 전체 성분의 80-95%를 차지합니다.",
        category: "기본이론"
    },
    {
        text: "LPG의 주성분으로 올바른 것은?",
        options: ["메탄", "프로판과 부탄", "에틸렌", "아세틸렌"],
        correctAnswer: 1,
        explanation: "LPG(액화석유가스)의 주성분은 프로판(C₃H₈)과 부탄(C₄H₁₀)입니다.",
        category: "기본이론"
    },
    {
        text: "가스배관의 압력시험에서 수압시험의 시험압력은 사용압력의 몇 배인가?",
        options: ["1.2배", "1.5배", "2.0배", "2.5배"],
        correctAnswer: 1,
        explanation: "가스배관의 수압시험 압력은 사용압력의 1.5배로 실시합니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 공급시설에서 정압기의 역할은?",
        options: ["압력을 높인다", "압력을 낮춘다", "유량을 조절한다", "온도를 조절한다"],
        correctAnswer: 1,
        explanation: "정압기는 고압의 가스를 저압으로 감압하여 안전하게 공급하는 역할을 합니다.",
        category: "설비"
    },
    {
        text: "가스계량기의 설치 위치로 가장 적절한 곳은?",
        options: ["지하실", "보일러실", "통풍이 잘되는 곳", "밀폐된 곳"],
        correctAnswer: 2,
        explanation: "가스계량기는 통풍이 잘되고 점검이 용이한 곳에 설치해야 합니다.",
        category: "설비"
    },
    {
        text: "가스누출 검사에 사용되는 검지기의 종류가 아닌 것은?",
        options: ["비누거품 검지기", "전자식 검지기", "염색액 검지기", "초음파 검지기"],
        correctAnswer: 2,
        explanation: "가스누출 검사에는 비누거품, 전자식, 초음파 검지기가 사용되며, 염색액 검지기는 사용되지 않습니다.",
        category: "안전관리"
    },
    {
        text: "도시가스 배관의 매설깊이는 최소 몇 미터 이상이어야 하는가?",
        options: ["0.3m", "0.6m", "0.9m", "1.2m"],
        correctAnswer: 1,
        explanation: "도시가스 배관의 최소 매설깊이는 0.6m 이상이어야 합니다.",
        category: "배관공사"
    },
    {
        text: "가스사고 예방을 위한 안전점검 주기는?",
        options: ["매월", "3개월", "6개월", "1년"],
        correctAnswer: 3,
        explanation: "가스시설의 안전점검은 1년에 1회 이상 실시해야 합니다.",
        category: "안전관리"
    },
    {
        text: "가스보일러의 연소가스 배출을 위한 배기구의 높이는 지면에서 최소 몇 미터 이상이어야 하는가?",
        options: ["1.8m", "2.1m", "2.4m", "2.7m"],
        correctAnswer: 1,
        explanation: "가스보일러 배기구는 지면에서 최소 2.1m 이상 높이에 설치해야 합니다.",
        category: "설비"
    },
    {
        text: "LNG의 저장온도는 약 몇 도인가?",
        options: ["-120℃", "-140℃", "-162℃", "-180℃"],
        correctAnswer: 2,
        explanation: "LNG(액화천연가스)의 저장온도는 약 -162℃입니다.",
        category: "기본이론"
    },
    {
        text: "가스누출 시 응급조치로 가장 우선해야 할 것은?",
        options: ["환기", "가스차단", "대피", "신고"],
        correctAnswer: 1,
        explanation: "가스누출 시 가장 우선해야 할 조치는 가스공급을 차단하는 것입니다.",
        category: "안전관리"
    },
    {
        text: "도시가스 배관에 사용되는 PE관의 정식명칭은?",
        options: ["폴리에틸렌관", "폴리염화비닐관", "폴리프로필렌관", "폴리우레탄관"],
        correctAnswer: 0,
        explanation: "PE관은 폴리에틸렌(Polyethylene)관의 줄임말입니다.",
        category: "배관공사"
    },
    {
        text: "가스배관의 용접작업 시 사용하는 가스는?",
        options: ["산소와 수소", "산소와 아세틸렌", "질소와 아르곤", "헬륨과 네온"],
        correctAnswer: 1,
        explanation: "가스배관 용접작업에는 산소와 아세틸렌 가스를 사용합니다.",
        category: "배관공사"
    },
    {
        text: "가스레인지의 점화방식이 아닌 것은?",
        options: ["압전소자 점화", "열전대 점화", "전자동 점화", "자동온도조절 점화"],
        correctAnswer: 3,
        explanation: "자동온도조절 점화는 가스레인지의 점화방식이 아닙니다.",
        category: "설비"
    },
    {
        text: "도시가스 공급압력의 분류에서 중압은?",
        options: ["1kPa 미만", "1~30kPa", "30kPa~1MPa", "1MPa 이상"],
        correctAnswer: 2,
        explanation: "도시가스 중압은 30kPa에서 1MPa 미만의 압력을 말합니다.",
        category: "기본이론"
    },
    {
        text: "가스배관의 기밀시험에서 누출이 발견되지 않는 시간은?",
        options: ["10분", "15분", "20분", "30분"],
        correctAnswer: 3,
        explanation: "가스배관의 기밀시험은 30분간 압력강하가 없어야 합니다.",
        category: "배관공사"
    },
    {
        text: "가스보일러의 효율을 높이기 위한 방법이 아닌 것은?",
        options: ["적정 공기비 유지", "열교환기 청소", "배기온도 상승", "연소실 점검"],
        correctAnswer: 2,
        explanation: "배기온도 상승은 열손실을 증가시켜 효율을 떨어뜨립니다.",
        category: "설비"
    },
    {
        text: "가스계량기의 검정 유효기간은?",
        options: ["5년", "7년", "10년", "15년"],
        correctAnswer: 2,
        explanation: "가스계량기의 검정 유효기간은 10년입니다.",
        category: "설비"
    },
    {
        text: "LPG 저장탱크의 안전밸브 설정압력은 설계압력의 몇 % 이하인가?",
        options: ["90%", "95%", "100%", "110%"],
        correctAnswer: 3,
        explanation: "LPG 저장탱크의 안전밸브는 설계압력의 110% 이하에서 작동되도록 설정합니다.",
        category: "안전관리"
    },
    {
        text: "도시가스 내관공사에서 사용하는 배관재료는?",
        options: ["아연도금강관", "스테인리스강관", "구리관", "모든 것"],
        correctAnswer: 3,
        explanation: "도시가스 내관공사에는 아연도금강관, 스테인리스강관, 구리관 모두 사용 가능합니다.",
        category: "배관공사"
    },
    {
        text: "가스기구의 배기방식 중 자연배기방식의 특징은?",
        options: ["전원이 필요하다", "배기팬을 사용한다", "부력에 의한 배기", "강제순환배기"],
        correctAnswer: 2,
        explanation: "자연배기방식은 연소가스의 부력을 이용하여 배기하는 방식입니다.",
        category: "설비"
    },
    {
        text: "가스누출검지기의 경보농도는 폭발하한계의 몇 %인가?",
        options: ["10%", "25%", "50%", "75%"],
        correctAnswer: 1,
        explanation: "가스누출검지기의 경보농도는 폭발하한계의 25%로 설정됩니다.",
        category: "안전관리"
    },
    {
        text: "도시가스 배관의 도장색상은?",
        options: ["빨간색", "노란색", "파란색", "회색"],
        correctAnswer: 1,
        explanation: "도시가스 배관의 표준 도장색상은 노란색입니다.",
        category: "배관공사"
    },
    {
        text: "가스보일러의 연소안전장치가 아닌 것은?",
        options: ["화염검출기", "가스차단밸브", "압력조절기", "온도조절기"],
        correctAnswer: 3,
        explanation: "온도조절기는 연소안전장치가 아닌 온도제어장치입니다.",
        category: "설비"
    },
    {
        text: "LPG의 비중은 공기보다?",
        options: ["가볍다", "무겁다", "같다", "온도에 따라 다르다"],
        correctAnswer: 1,
        explanation: "LPG의 비중은 공기보다 무거워서 낮은 곳에 체류하는 성질이 있습니다.",
        category: "기본이론"
    },
    {
        text: "가스배관의 신축이음에 사용되는 것은?",
        options: ["플렉시블 호스", "벨로우즈", "신축관", "모든 것"],
        correctAnswer: 3,
        explanation: "가스배관의 신축이음에는 플렉시블 호스, 벨로우즈, 신축관 모두 사용됩니다.",
        category: "배관공사"
    },
    {
        text: "가스기구의 연소상태를 나타내는 화염색상으로 정상적인 것은?",
        options: ["빨간색", "노란색", "파란색", "흰색"],
        correctAnswer: 2,
        explanation: "정상적인 가스 연소 시에는 파란색 화염이 나타납니다.",
        category: "설비"
    },
    {
        text: "도시가스 공급시설의 정압기실 환기횟수는 시간당 몇 회 이상인가?",
        options: ["3회", "5회", "10회", "15회"],
        correctAnswer: 2,
        explanation: "정압기실의 환기횟수는 시간당 10회 이상이어야 합니다.",
        category: "설비"
    },
    {
        text: "가스배관의 방식(부식방지)에 사용되는 재료가 아닌 것은?",
        options: ["아스팔트", "폴리에틸렌", "에폭시", "페인트"],
        correctAnswer: 3,
        explanation: "페인트는 가스배관의 방식재료로 사용되지 않습니다.",
        category: "배관공사"
    },
    {
        text: "LNG 기화장치의 종류가 아닌 것은?",
        options: ["공기식 기화기", "온수식 기화기", "증기식 기화기", "압축식 기화기"],
        correctAnswer: 3,
        explanation: "압축식 기화기는 LNG 기화장치의 종류가 아닙니다.",
        category: "설비"
    },
    {
        text: "가스보일러의 급배기방식 중 밀폐연소방식의 장점은?",
        options: ["설치비가 저렴하다", "실내공기를 사용한다", "산소부족이 없다", "배기가 간단하다"],
        correctAnswer: 2,
        explanation: "밀폐연소방식은 외부공기를 직접 사용하여 실내 산소부족 현상이 없습니다.",
        category: "설비"
    },
    {
        text: "도시가스 공급관의 최소 관경은?",
        options: ["15A", "20A", "25A", "32A"],
        correctAnswer: 1,
        explanation: "도시가스 공급관의 최소 관경은 20A입니다.",
        category: "배관공사"
    },
    {
        text: "가스누출 시 전기스위치 조작에 대한 올바른 행동은?",
        options: ["즉시 켠다", "즉시 끈다", "조작하지 않는다", "천천히 조작한다"],
        correctAnswer: 2,
        explanation: "가스누출 시에는 전기스위치를 조작하지 않아야 점화위험을 방지할 수 있습니다.",
        category: "안전관리"
    },
    {
        text: "LPG 저장탱크의 충전율은 최대 몇 %인가?",
        options: ["80%", "85%", "90%", "95%"],
        correctAnswer: 1,
        explanation: "LPG 저장탱크의 최대 충전율은 85%입니다.",
        category: "안전관리"
    },
    {
        text: "가스계량기 후단에 설치하는 차단밸브의 종류는?",
        options: ["볼밸브", "게이트밸브", "글로브밸브", "체크밸브"],
        correctAnswer: 0,
        explanation: "가스계량기 후단에는 조작이 용이한 볼밸브를 설치합니다.",
        category: "설비"
    },
    {
        text: "도시가스 배관의 최대사용압력에 따른 분류에서 저압은?",
        options: ["1kPa 미만", "1kPa 이하", "3kPa 이하", "10kPa 이하"],
        correctAnswer: 2,
        explanation: "도시가스 저압은 3kPa 이하의 압력을 말합니다.",
        category: "기본이론"
    },
    {
        text: "가스기구의 불완전연소 원인이 아닌 것은?",
        options: ["공기부족", "화구 막힘", "과도한 공기공급", "연통 막힘"],
        correctAnswer: 2,
        explanation: "과도한 공기공급은 불완전연소의 원인이 아닙니다.",
        category: "설비"
    },
    {
        text: "LNG 탱크로리의 최대적재용량은?",
        options: ["10톤", "15톤", "20톤", "25톤"],
        correctAnswer: 2,
        explanation: "LNG 탱크로리의 최대적재용량은 20톤입니다.",
        category: "설비"
    },
    {
        text: "가스배관의 이음방법 중 나사이음에 사용하는 실링재는?",
        options: ["테프론테이프", "삼베", "페이스트", "모든 것"],
        correctAnswer: 3,
        explanation: "나사이음에는 테프론테이프, 삼베, 페이스트 모두 실링재로 사용됩니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 정압기의 구성요소가 아닌 것은?",
        options: ["다이어프램", "스프링", "안전밸브", "압축기"],
        correctAnswer: 3,
        explanation: "압축기는 정압기의 구성요소가 아닙니다.",
        category: "설비"
    },
    {
        text: "가스보일러 설치 시 주위 가연물과의 이격거리는?",
        options: ["5cm", "10cm", "15cm", "20cm"],
        correctAnswer: 2,
        explanation: "가스보일러는 주위 가연물과 15cm 이상 이격하여 설치해야 합니다.",
        category: "설비"
    },
    {
        text: "LPG의 착취제로 사용되는 것은?",
        options: ["메르캅탄", "황화수소", "암모니아", "에틸알코올"],
        correctAnswer: 0,
        explanation: "LPG의 착취제로는 메르캅탄이 사용됩니다.",
        category: "기본이론"
    },
    {
        text: "가스배관의 시공에서 배관 구배는?",
        options: ["1/100", "1/200", "1/300", "1/500"],
        correctAnswer: 1,
        explanation: "가스배관의 구배는 1/200 이상으로 시공해야 합니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 공급시설에서 긴급차단밸브의 작동방식은?",
        options: ["수동", "자동", "원격조작", "모든 것"],
        correctAnswer: 3,
        explanation: "긴급차단밸브는 수동, 자동, 원격조작 모든 방식으로 작동 가능해야 합니다.",
        category: "안전관리"
    },
    {
        text: "가스기구의 열효율 측정 시 기준이 되는 발열량은?",
        options: ["고위발열량", "저위발열량", "평균발열량", "설계발열량"],
        correctAnswer: 1,
        explanation: "가스기구의 열효율은 저위발열량을 기준으로 측정합니다.",
        category: "설비"
    },
    {
        text: "LNG 저장탱크의 단열방식이 아닌 것은?",
        options: ["진공단열", "분말단열", "다층단열", "가압단열"],
        correctAnswer: 3,
        explanation: "가압단열은 LNG 저장탱크의 단열방식이 아닙니다.",
        category: "설비"
    },
    {
        text: "가스배관 용접부의 비파괴검사 방법이 아닌 것은?",
        options: ["방사선투과검사", "자분탐상검사", "액체침투탐상검사", "화학분석검사"],
        correctAnswer: 3,
        explanation: "화학분석검사는 비파괴검사 방법이 아닙니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 내관의 최대압력은?",
        options: ["3kPa", "10kPa", "30kPa", "100kPa"],
        correctAnswer: 0,
        explanation: "도시가스 내관의 최대압력은 3kPa입니다.",
        category: "기본이론"
    },
    {
        text: "가스기구의 연소용 공기 공급방법이 아닌 것은?",
        options: ["자연통풍", "강제통풍", "자연급기", "액체순환"],
        correctAnswer: 3,
        explanation: "액체순환은 연소용 공기 공급방법이 아닙니다.",
        category: "설비"
    },
    {
        text: "LPG 충전소의 저장탱크와 충전건물 사이의 최소 이격거리는?",
        options: ["3m", "5m", "8m", "10m"],
        correctAnswer: 2,
        explanation: "LPG 충전소에서 저장탱크와 충전건물 사이의 최소 이격거리는 8m입니다.",
        category: "안전관리"
    },
    {
        text: "가스배관의 현장용접에서 예열온도는?",
        options: ["50-100℃", "100-150℃", "150-200℃", "200-250℃"],
        correctAnswer: 1,
        explanation: "가스배관 현장용접 시 예열온도는 100-150℃입니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 공급설비의 정기점검 주기는?",
        options: ["1개월", "3개월", "6개월", "1년"],
        correctAnswer: 3,
        explanation: "도시가스 공급설비의 정기점검은 1년에 1회 이상 실시합니다.",
        category: "안전관리"
    },
    {
        text: "가스보일러의 대기오염물질 배출기준에서 질소산화물(NOx)의 허용기준은?",
        options: ["100ppm", "150ppm", "200ppm", "250ppm"],
        correctAnswer: 2,
        explanation: "가스보일러의 질소산화물 배출허용기준은 200ppm입니다.",
        category: "환경"
    },
    {
        text: "LNG의 취급에서 저온화상 방지를 위한 보호구가 아닌 것은?",
        options: ["안전장갑", "보안경", "안전화", "방독면"],
        correctAnswer: 3,
        explanation: "방독면은 저온화상 방지용 보호구가 아닙니다.",
        category: "안전관리"
    },
    {
        text: "가스배관의 매설표시테이프 설치 위치는 관상부에서?",
        options: ["20cm", "30cm", "40cm", "50cm"],
        correctAnswer: 1,
        explanation: "매설표시테이프는 관상부에서 30cm 위에 설치합니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 계량기의 온도보정계수는 15℃ 기준으로 온도가 1℃ 상승하면?",
        options: ["1/273 증가", "1/273 감소", "1/288 증가", "1/288 감소"],
        correctAnswer: 1,
        explanation: "온도가 1℃ 상승하면 가스체적은 1/273만큼 증가하므로 보정계수는 감소합니다.",
        category: "설비"
    },
    {
        text: "가스기구의 안전장치 중 화염을 감시하는 장치는?",
        options: ["서모커플", "바이메탈", "압력스위치", "유량계"],
        correctAnswer: 0,
        explanation: "서모커플은 화염의 유무를 감시하는 안전장치입니다.",
        category: "설비"
    },
    {
        text: "LPG 저장탱크의 안전장치가 아닌 것은?",
        options: ["안전밸브", "압력계", "액면계", "압축기"],
        correctAnswer: 3,
        explanation: "압축기는 LPG 저장탱크의 안전장치가 아닙니다.",
        category: "설비"
    },
    {
        text: "가스배관의 전기방식에서 희생양극의 재료는?",
        options: ["구리", "아연", "철", "알루미늄"],
        correctAnswer: 1,
        explanation: "전기방식에서 희생양극으로는 아연이 주로 사용됩니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 정압기의 출구압력 조정방법은?",
        options: ["스프링 조정", "다이어프램 교체", "오리피스 교체", "밸브 교체"],
        correctAnswer: 0,
        explanation: "정압기의 출구압력은 스프링의 장력을 조정하여 설정합니다.",
        category: "설비"
    },
    {
        text: "가스기구의 점화방식 중 전기점화의 장점은?",
        options: ["구조가 간단하다", "정확한 점화가 가능하다", "전원이 불필요하다", "가격이 저렴하다"],
        correctAnswer: 1,
        explanation: "전기점화는 정확하고 확실한 점화가 가능한 것이 장점입니다.",
        category: "설비"
    },
    {
        text: "LNG 기지의 저장탱크 형식이 아닌 것은?",
        options: ["지상식", "반지하식", "지하식", "부유식"],
        correctAnswer: 3,
        explanation: "부유식은 LNG 저장탱크의 형식이 아닙니다.",
        category: "설비"
    },
    {
        text: "가스배관의 시공에서 신축이음의 설치 간격은?",
        options: ["50m", "100m", "150m", "200m"],
        correctAnswer: 1,
        explanation: "가스배관에서 신축이음은 100m 간격으로 설치합니다.",
        category: "배관공사"
    },
    {
        text: "도시가스 공급업자의 의무사항이 아닌 것은?",
        options: ["안전관리", "공급안정성 확보", "요금규제", "사용자 교육"],
        correctAnswer: 2,
        explanation: "요금규제는 공급업자의 의무사항이 아닌 정부의 역할입니다.",
        category: "법규"
    }
];

// 전역 변수
let currentQuestionIndex = 0;
let selectedAnswers = new Array(60).fill(-1);
let showingFeedback = false;
let examStartTime = null;

// DOM 요소 참조
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    questionCard: document.getElementById('question-card'),
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    progressBar: document.getElementById('progress-bar'),
    questionBadge: document.getElementById('question-badge'),
    questionText: document.getElementById('question-text'),
    answerOptions: document.getElementById('answer-options'),
    feedbackSection: document.getElementById('feedback-section'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    resultsModal: document.getElementById('results-modal'),
    totalScore: document.getElementById('total-score'),
    correctAnswers: document.getElementById('correct-answers'),
    incorrectAnswers: document.getElementById('incorrect-answers'),
    percentage: document.getElementById('percentage'),
    passStatus: document.getElementById('pass-status'),
    passResult: document.getElementById('pass-result'),
    closeModal: document.getElementById('close-modal'),
    restartExam: document.getElementById('restart-exam')
};

// 초기화
function init() {
    examStartTime = new Date();
    
    // 로딩 화면 숨기고 문제 카드 표시
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
        elements.questionCard.classList.remove('hidden');
        loadQuestion(0);
    }, 1000);

    // 이벤트 리스너 등록
    elements.prevBtn.addEventListener('click', goToPreviousQuestion);
    elements.nextBtn.addEventListener('click', goToNextQuestion);
    elements.closeModal.addEventListener('click', closeResultsModal);
    elements.restartExam.addEventListener('click', restartExam);

    // 모달 백드롭 클릭으로 닫기
    elements.resultsModal.addEventListener('click', (e) => {
        if (e.target === elements.resultsModal || e.target.classList.contains('modal-backdrop')) {
            closeResultsModal();
        }
    });

    // 총 문제 수 설정
    elements.totalQuestions.textContent = EXAM_QUESTIONS.length;
}

// 문제 로드
function loadQuestion(index) {
    const question = EXAM_QUESTIONS[index];
    if (!question) return;

    currentQuestionIndex = index;
    showingFeedback = false;

    // UI 업데이트
    elements.currentQuestion.textContent = index + 1;
    elements.questionBadge.textContent = `문제 ${index + 1}`;
    elements.questionText.textContent = question.text;

    // 진행률 업데이트
    const progress = ((index + 1) / EXAM_QUESTIONS.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    // 답변 옵션 생성
    createAnswerOptions(question, index);

    // 피드백 섹션 숨기기
    elements.feedbackSection.classList.add('hidden');

    // 네비게이션 버튼 상태 업데이트
    updateNavigationButtons();

    // 애니메이션 효과
    elements.questionCard.classList.add('fade-in');
    setTimeout(() => {
        elements.questionCard.classList.remove('fade-in');
    }, 300);
}

// 답변 옵션 생성
function createAnswerOptions(question, questionIndex) {
    elements.answerOptions.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.onclick = () => selectAnswer(index, questionIndex);

        // 이미 선택된 답변이 있다면 표시
        if (selectedAnswers[questionIndex] === index) {
            button.classList.add('selected');
        }

        button.innerHTML = `
            <span class="option-number">${index + 1}</span>
            <span class="option-text">${option}</span>
        `;

        elements.answerOptions.appendChild(button);
    });
}

// 답변 선택
function selectAnswer(answerIndex, questionIndex) {
    if (showingFeedback) return;

    const question = EXAM_QUESTIONS[questionIndex];
    selectedAnswers[questionIndex] = answerIndex;

    // 모든 답변 옵션 비활성화 및 스타일링
    const options = elements.answerOptions.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.classList.add('disabled');
        
        if (index === answerIndex) {
            if (index === question.correctAnswer) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        } else if (index === question.correctAnswer) {
            option.classList.add('correct');
        }
    });

    // 피드백 표시
    showFeedback(question, answerIndex);
    showingFeedback = true;

    // 1초 후 자동으로 다음 문제로 이동
    setTimeout(() => {
        if (currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        } else {
            finishExam();
        }
    }, 2000);
}

// 피드백 표시
function showFeedback(question, selectedAnswer) {
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    elements.feedbackSection.classList.remove('hidden');
    elements.feedbackSection.className = `feedback-section ${isCorrect ? 'correct' : 'incorrect'}`;
    
    elements.feedbackTitle.textContent = isCorrect ? '정답입니다!' : '틀렸습니다.';
    elements.feedbackExplanation.textContent = question.explanation;
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === EXAM_QUESTIONS.length - 1) {
        elements.nextBtn.textContent = '완료';
    } else {
        elements.nextBtn.innerHTML = `
            다음
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
        `;
    }
    
    elements.nextBtn.disabled = currentQuestionIndex >= EXAM_QUESTIONS.length - 1 && !showingFeedback;
}

// 이전 문제로 이동
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// 다음 문제로 이동
function goToNextQuestion() {
    if (currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        finishExam();
    }
}

// 시험 완료
function finishExam() {
    const score = calculateScore();
    const percentage = Math.round((score / EXAM_QUESTIONS.length) * 100);
    const isPassed = percentage >= 60;
    const incorrectCount = EXAM_QUESTIONS.length - score;

    // 결과 모달 데이터 업데이트
    elements.totalScore.textContent = score;
    elements.correctAnswers.textContent = score;
    elements.incorrectAnswers.textContent = incorrectCount;
    elements.percentage.textContent = `${percentage}%`;
    
    // 합격/불합격 상태 업데이트
    elements.passStatus.className = `pass-status ${isPassed ? 'passed' : 'failed'}`;
    elements.passResult.textContent = isPassed ? '합격' : '불합격';
    elements.passResult.className = `pass-result ${isPassed ? 'passed' : 'failed'}`;

    // 결과 모달 표시
    elements.resultsModal.classList.remove('hidden');
}

// 점수 계산
function calculateScore() {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === EXAM_QUESTIONS[index].correctAnswer) {
            score++;
        }
    });
    return score;
}

// 결과 모달 닫기
function closeResultsModal() {
    elements.resultsModal.classList.add('hidden');
}

// 시험 다시 시작
function restartExam() {
    currentQuestionIndex = 0;
    selectedAnswers = new Array(60).fill(-1);
    showingFeedback = false;
    examStartTime = new Date();
    
    closeResultsModal();
    loadQuestion(0);
}

// 키보드 이벤트 처리
document.addEventListener('keydown', (e) => {
    if (showingFeedback) return;
    
    // 숫자 키로 답변 선택 (1-4)
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        const question = EXAM_QUESTIONS[currentQuestionIndex];
        if (answerIndex < question.options.length) {
            selectAnswer(answerIndex, currentQuestionIndex);
        }
    }
    
    // 화살표 키로 네비게이션
    if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        goToPreviousQuestion();
    } else if (e.key === 'ArrowRight' && currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
        goToNextQuestion();
    }
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);