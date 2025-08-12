// ...중복 선언 제거...
// 1. 연소공학, 2. 가스설비, 3. 가스안전관리, 4. 가스계측의 

const gasIndustryQuestions = [
    // 1. 연소공학 (15문제)
    { question: "메탄(CH₄)의 완전연소 생성물은?", options: ["CO₂와 H₂O", "CO와 H₂", "C와 H₂O", "CH₃OH"], answer: "CO₂와 H₂O" },
    { question: "연소의 3요소가 아닌 것은?", options: ["가연물", "점화원", "산화제", "압력"], answer: "압력" },
    { question: "공기 중 이론공기비를 초과한 연소를 무엇이라 하는가?", options: ["과잉공기 연소", "불완전연소", "자연연소", "자기연소"], answer: "과잉공기 연소" },
    { question: "CO의 연소 반응식은?", options: ["2CO + O₂ → 2CO₂", "CO + O₂ → CO₂", "2CO₂ → 2CO + O₂", "C + O₂ → CO₂"], answer: "2CO + O₂ → 2CO₂" },
    { question: "연료의 발열량 단위는?", options: ["kcal/kg", "kcal/mol", "mol/kcal", "kg/kcal"], answer: "kcal/kg" },
    { question: "아세틸렌의 폭발 범위(공기 중)는?", options: ["2.5~81%", "4~75%", "5~15%", "0.5~5%"], answer: "2.5~81%" },
    { question: "황화수소(H₂S)의 독성 등급은?", options: ["매우 독성", "약독성", "무독성", "중독성 없음"], answer: "매우 독성" },
    { question: "연소 시 가장 많은 열을 내는 것은?", options: ["수소", "메탄", "프로판", "부탄"], answer: "수소" },
    { question: "수소(H₂)의 폭발 범위(공기 중)는?", options: ["4~75%", "5~15%", "0.1~5%", "10~50%"], answer: "4~75%" },
    { question: "메탄의 폭발 하한계는?", options: ["5%", "4%", "3%", "2%"], answer: "5%" },
    { question: "연료의 완전연소 시 필요한 최소 산소량을 계산하는 비율을 무엇이라 하는가?", options: ["이론공기비", "과잉공기비", "산소비", "연소효율"], answer: "이론공기비" },
    { question: "다이옥신은 주로 어떤 연소 과정에서 발생하는가?", options: ["불완전연소", "완전연소", "자연발화", "폭발"], answer: "불완전연소" },
    { question: "연소열 중 저위발열량(LHV)은 무엇을 뺀 값인가?", options: ["응축수 잠열", "수소 연소열", "이산화탄소 연소열", "메탄 연소열"], answer: "응축수 잠열" },
    { question: "산소 농도가 몇 % 이하로 내려가면 연소가 불가능한가?", options: ["15%", "10%", "5%", "8%"], answer: "15%" },
    { question: "가스 폭발에서 압력 상승 속도를 나타내는 값은?", options: ["폭발속도", "연소속도", "압력상승률", "화염전파속도"], answer: "압력상승률" },

    // 2. 가스설비 (15문제)
    { question: "LPG 저장탱크의 설치 위치 기준 중 틀린 것은?", options: ["통풍이 잘 되는 곳", "화기 근처", "지면과 이격", "차량 진입 가능"], answer: "화기 근처" },
    { question: "배관 용접 시 사용하는 가장 흔한 방식은?", options: ["아크용접", "TIG용접", "MIG용접", "산소아세틸렌용접"], answer: "아크용접" },
    { question: "가스배관에 사용하는 플랜지의 주 기능은?", options: ["분리·연결", "온도 유지", "압력 증가", "가스 액화"], answer: "분리·연결" },
    { question: "고압가스 용기 밸브의 재질로 주로 쓰이는 것은?", options: ["황동", "철", "알루미늄", "스테인리스"], answer: "황동" },
    { question: "액화가스 펌프의 주요 기능은?", options: ["액체 이송", "기체 압축", "온도 유지", "유량 측정"], answer: "액체 이송" },
    { question: "안전밸브의 개방압력 설정 기준은?", options: ["허용압력 이하", "설계압력 초과", "정격압력", "설계압력 이하"], answer: "허용압력 이하" },
    { question: "압축기의 냉각 방식 중 공냉식의 장점은?", options: ["구조 단순", "효율 높음", "대용량 적합", "냉각수 필요"], answer: "구조 단순" },
    { question: "진공배관에서 사용하는 밸브는?", options: ["게이트 밸브", "볼 밸브", "버터플라이 밸브", "니들 밸브"], answer: "니들 밸브" },
    { question: "배관 시험압력은 통상 사용압력의 몇 배인가?", options: ["1.5배", "2배", "3배", "1배"], answer: "1.5배" },
    { question: "고압가스 용기 표면 색상 중 LPG는?", options: ["회색", "녹색", "청색", "황색"], answer: "회색" },
    { question: "LNG 저장탱크는 주로 어떤 구조인가?", options: ["이중벽 구조", "단일벽 구조", "스틸 구조", "콘크리트 구조"], answer: "이중벽 구조" },
    { question: "배관의 내식 보호 방법이 아닌 것은?", options: ["코팅", "양극방식", "내식재 사용", "고온 가열"], answer: "고온 가열" },
    { question: "유량계 중 차압식 유량계는?", options: ["오리피스", "터빈", "코리올리", "베인"], answer: "오리피스" },
    { question: "고압가스 용기의 충전율은 몇 % 이하로 제한하는가?", options: ["85%", "90%", "95%", "80%"], answer: "85%" },
    { question: "고압가스 배관의 색상은 무엇을 나타내는가?", options: ["가스 종류", "압력 등급", "온도 범위", "재질"], answer: "가스 종류" },

    // 3. 가스안전관리 (15문제)
    { question: "고압가스 사고 발생 시 최초 보고 시간은?", options: ["즉시", "1시간 이내", "3시간 이내", "24시간 이내"], answer: "즉시" },
    { question: "가스누출 경보기의 설치 위치는?", options: ["누설 가스보다 가벼운 경우 천장 부근", "항상 바닥", "창문 근처", "외부"], answer: "누설 가스보다 가벼운 경우 천장 부근" },
    { question: "LPG 누출 감지기는 어디에 설치하는가?", options: ["바닥 근처", "천장 근처", "중간 높이", "옥외"], answer: "바닥 근처" },
    { question: "산소 농도가 몇 % 이하이면 질식 위험이 있는가?", options: ["18%", "15%", "10%", "12%"], answer: "18%" },
    { question: "가스 안전관리자 선임 주체는?", options: ["제조자", "운송업체", "사용자", "소방서"], answer: "제조자" },
    { question: "고압가스 용기의 재검사 주기는?", options: ["5년", "3년", "2년", "1년"], answer: "5년" },
    { question: "고압가스 안전관리법의 목적은?", options: ["안전 확보와 재해 방지", "가격 안정", "수입 촉진", "수출 장려"], answer: "안전 확보와 재해 방지" },
    { question: "안전밸브 작동 불능 시 위험은?", options: ["압력상승에 따른 폭발", "온도상승", "누출 증가", "유량감소"], answer: "압력상승에 따른 폭발" },
    { question: "폭발 위험 지역에서 사용 금지 전기기기는?", options: ["방폭형", "비방폭형", "본질안전형", "안전증형"], answer: "비방폭형" },
    { question: "누출 시험 시 사용되는 가스는?", options: ["질소", "산소", "메탄", "아세틸렌"], answer: "질소" },
    { question: "고압가스 용기 밸브의 개폐 방향은?", options: ["시계 반대", "시계 방향", "둘 다 가능", "무관"], answer: "시계 반대" },
    { question: "고압가스 용기 보관 시 피해야 할 장소는?", options: ["직사광선 받는 곳", "통풍되는 곳", "서늘한 곳", "차광된 곳"], answer: "직사광선 받는 곳" },
    { question: "고압가스 운반차량에 의무적으로 비치해야 하는 것은?", options: ["소화기", "물통", "비상조명", "방독면"], answer: "소화기" },
    { question: "고압가스 용기의 색상 규정에서 산소는?", options: ["녹색", "회색", "청색", "황색"], answer: "녹색" },
    { question: "가스누출 시 가장 먼저 해야 할 일은?", options: ["화기 제거 및 차단", "소화기 사용", "환기", "신고"], answer: "화기 제거 및 차단" },

    // 4. 가스계측 (15문제)
    { question: "온도를 측정하는 센서 중 열전대의 원리는?", options: ["제백효과", "홀효과", "광전효과", "피에조효과"], answer: "제백효과" },
    { question: "차압식 유량계의 대표적 장치는?", options: ["오리피스", "터빈", "부르돈관", "코리올리"], answer: "오리피스" },
    { question: "압력 측정에 주로 사용하는 것은?", options: ["부르돈관 압력계", "열전대", "변위계", "전극"], answer: "부르돈관 압력계" },
    { question: "비중 측정에 사용하는 장치는?", options: ["비중계", "유량계", "압력계", "온도계"], answer: "비중계" },
    { question: "LNG의 조성 분석에 사용하는 장치는?", options: ["가스크로마토그래프", "오리피스", "열전대", "비중계"], answer: "가스크로마토그래프" },
    { question: "초음파 유량계의 장점이 아닌 것은?", options: ["비접촉 측정", "저압손실", "고정밀도", "온도에 민감"], answer: "온도에 민감" },
    { question: "정압계는 무엇을 측정하는가?", options: ["대기압과 비교한 압력", "절대압", "게이지압", "진공압"], answer: "대기압과 비교한 압력" },
    { question: "절대압력은 무엇을 기준으로 하는가?", options: ["진공", "대기압", "해수면", "기준온도"], answer: "진공" },
    { question: "열전대의 종류 중 고온 측정에 적합한 것은?", options: ["B형", "K형", "J형", "T형"], answer: "B형" },
    { question: "피토관은 무엇을 측정하는가?", options: ["유속", "압력", "온도", "농도"], answer: "유속" },
    { question: "LPG 누출 감지 센서 원리는?", options: ["반도체식", "열전대식", "광전식", "초음파식"], answer: "반도체식" },
    { question: "부르돈관 압력계의 원리는?", options: ["관의 탄성변형", "압력차", "온도차", "광센서"], answer: "관의 탄성변형" },
    { question: "유량 측정에서 체적식 유량계의 예는?", options: ["로터리", "터빈", "오리피스", "피토관"], answer: "로터리" },
    { question: "전기저항식 온도센서의 약자는?", options: ["RTD", "TC", "PTC", "NTC"], answer: "RTD" },
    { question: "폭발 하한계 측정 장치는?", options: ["가스누설검지기", "열전대", "오리피스", "비중계"], answer: "가스누설검지기" }
];

let current = 0;

let questions = gasIndustryQuestions;
// 틀린 문제 번호 저장
let wrongNumbers = [];


function showQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = `${current+1}. ${q.question}`;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
    // 틀린 문제 번호 버튼 표시 (왼쪽 하단)
    let wrongBtnsDiv = document.getElementById("wrong-btns");
    if (wrongBtnsDiv) {
        wrongBtnsDiv.innerHTML = "";
        if (wrongNumbers.length > 0) {
            wrongNumbers.forEach(num => {
                let btn = document.createElement("button");
                btn.innerText = num;
                btn.style.margin = "2px";
                btn.onclick = () => {
                    current = num - 1;
                    document.getElementById("result").innerText = "";
                    showQuestion();
                };
                wrongBtnsDiv.appendChild(btn);
            });
        }
    }
}



function checkAnswer(selected) {
    let correct = questions[current].answer;
    // 공백, 대소문자, 유니코드 normalize 비교
    const norm = s => s.trim().toLowerCase().normalize('NFC');
    if (norm(selected) === norm(correct)) {
        document.getElementById("result").innerText = "✅ 정답입니다!";
        setTimeout(() => {
            document.getElementById("next-btn").click();
        }, 700); // 0.7초 후 자동 다음 문제
    } else {
        // 중복 저장 방지
        if (!wrongNumbers.includes(current + 1)) {
            wrongNumbers.push(current + 1);
        }
        document.getElementById("result").innerText = `❌ 오답입니다! 정답: ${correct}`;
        // 틀린 문제 번호 갱신
        let wrongDiv = document.getElementById("wrong-list");
        if (wrongDiv) {
            wrongDiv.innerText = `틀린 문제 번호: ${wrongNumbers.join(", ")}`;
        }
    }
}

document.getElementById("next-btn").onclick = () => {
    current++;
    if (current < questions.length) {
        document.getElementById("result").innerText = "";
        showQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = "<h2>🎉 문제 끝! 수고하셨습니다.</h2>";
    }
};


// 문제 번호로 이동 기능
document.getElementById("goto-btn").onclick = () => {
    const input = document.getElementById("goto-input");
    let num = parseInt(input.value, 10);
    if (!isNaN(num) && num >= 1 && num <= questions.length) {
        current = num - 1;
        document.getElementById("result").innerText = "";
        showQuestion();
    } else {
        alert(`1~${questions.length} 사이의 번호를 입력하세요.`);
    }
};

showQuestion();



