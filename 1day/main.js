// ...중복 선언 제거...
const questions = [
    // 가스일반 (24문제)
    { question: "1기압은 몇 Pa 인가?", options: ["101325", "100000", "98000", "120000"], answer: "101325" },
    { question: "아세틸렌의 화학식은?", options: ["C2H6", "C2H2", "CH4", "C3H8"], answer: "C2H2" },
    { question: "액화석유가스(LPG)의 주성분은?", options: ["프로판과 부탄", "메탄과 에탄", "에틸렌과 프로필렌", "수소와 헬륨"], answer: "프로판과 부탄" },
    { question: "PV = nRT에서 R의 단위는?", options: ["J/(mol·K)", "Pa·m³", "K/mol", "mol/J"], answer: "J/(mol·K)" },
    { question: "산소(O₂)의 분자량은?", options: ["16", "32", "28", "44"], answer: "32" },
    { question: "질소(N₂)의 비점은?", options: ["-196℃", "-183℃", "-253℃", "0℃"], answer: "-196℃" },
    { question: "LNG의 주성분은?", options: ["메탄", "에탄", "프로판", "부탄"], answer: "메탄" },
    { question: "공기 중 산소의 부피 비율은?", options: ["21%", "18%", "25%", "30%"], answer: "21%" },
    { question: "아세틸렌의 폭발하한계(공기 중)는?", options: ["2.5%", "4%", "10%", "15%"], answer: "2.5%" },
    { question: "메탄(CH₄)의 분자량은?", options: ["14", "16", "18", "20"], answer: "16" },
    { question: "수소(H₂)의 비점은?", options: ["-196℃", "-183℃", "-253℃", "0℃"], answer: "-253℃" },
    { question: "프로판(C3H8)의 분자량은?", options: ["30", "38", "44", "56"], answer: "44" },
    { question: "가스의 비중은 기준이 되는 기체는?", options: ["공기", "산소", "질소", "수소"], answer: "공기" },
    { question: "산소의 폭발하한계는?", options: ["없음", "2%", "5%", "10%"], answer: "없음" },
    { question: "고압가스 안전관리법상 고압가스는 몇 MPa 이상인가?", options: ["1", "2", "3", "4"], answer: "1" },
    { question: "질소(N₂)의 분자량은?", options: ["14", "28", "32", "44"], answer: "28" },
    { question: "암모니아(NH₃)의 비점은?", options: ["-33℃", "-78℃", "-183℃", "0℃"], answer: "-33℃" },
    { question: "아르곤(Ar)의 분자량은?", options: ["36", "38", "40", "44"], answer: "40" },
    { question: "이산화탄소(CO₂)의 분자량은?", options: ["28", "32", "40", "44"], answer: "44" },
    { question: "이산화탄소의 삼중점 온도는?", options: ["-56.6℃", "-78.5℃", "-33℃", "0℃"], answer: "-56.6℃" },
    { question: "고압가스 용기의 충전압력 단위는?", options: ["MPa", "kPa", "Pa", "bar"], answer: "MPa" },
    { question: "압축성계수(Z)가 1보다 작으면?", options: ["이상기체", "실제기체로 인력 우세", "실제기체로 반발 우세", "상변화 중"], answer: "실제기체로 인력 우세" },
    { question: "LPG의 비중(공기=1)은 대략?", options: ["0.5", "1.0", "1.5", "2.0"], answer: "1.5" },
    { question: "LNG의 비중(공기=1)은 대략?", options: ["0.55", "0.75", "1.25", "1.50"], answer: "0.55" },

    // 가스장치학 (24문제)
    { question: "압축기의 역할은?", options: ["압력 증가", "온도 감소", "가스 액화", "수분 제거"], answer: "압력 증가" },
    { question: "냉동기에서 냉매를 압축하는 장치는?", options: ["압축기", "응축기", "증발기", "팽창밸브"], answer: "압축기" },
    { question: "응축기의 역할은?", options: ["기체 냉각·액화", "액체 증발", "압력 상승", "가스 정화"], answer: "기체 냉각·액화" },
    { question: "팽창밸브의 기능은?", options: ["압력 강하", "압력 상승", "온도 상승", "온도 일정"], answer: "압력 강하" },
    { question: "증발기의 역할은?", options: ["열 흡수", "열 방출", "압력 상승", "압력 강하"], answer: "열 흡수" },
    { question: "가스 필터의 역할은?", options: ["불순물 제거", "온도 유지", "압력 유지", "색상 변경"], answer: "불순물 제거" },
    { question: "압력용기의 안전밸브 개방 압력은?", options: ["허용압력이하", "설계압력", "설계압력 이하", "허용압력 이상"], answer: "허용압력 이하" },
    { question: "안전밸브의 설치 목적은?", options: ["압력 과상승 방지", "온도 조절", "수분 제거", "색상 변경"], answer: "압력 과상승 방지" },
    { question: "압축기의 종류가 아닌 것은?", options: ["왕복동식", "스크류식", "터보식", "응축식"], answer: "응축식" },
    { question: "왕복동식 압축기의 특징은?", options: ["저유량·고압", "대유량·저압", "소형·경량", "연속 운전 부적합"], answer: "저유량·고압" },
    { question: "스크류식 압축기의 특징은?", options: ["저소음", "간단 구조", "연속 운전 가능", "모두 해당"], answer: "모두 해당" },
    { question: "터보 압축기의 특징은?", options: ["대유량·저압", "저유량·고압", "단속 운전", "고온운전"], answer: "대유량·저압" },
    { question: "냉매 순환에서 압축기 다음 장치는?", options: ["응축기", "증발기", "팽창밸브", "필터"], answer: "응축기" },
    { question: "액화가스 저장탱크에서 부식 방지를 위해 사용하는 것은?", options: ["방청제", "단열재", "코팅", "모두 해당"], answer: "모두 해당" },
    { question: "배관 플랜지의 주 기능은?", options: ["분리·연결", "압력 상승", "온도 유지", "진공 유지"], answer: "분리·연결" },
    { question: "배관에서 굴곡부에 설치하는 부품은?", options: ["엘보", "티", "플랜지", "밸브"], answer: "엘보" },
    { question: "배관에서 유량 조절에 사용하는 밸브는?", options: ["글로브 밸브", "게이트 밸브", "체크 밸브", "볼 밸브"], answer: "글로브 밸브" },
    { question: "역류 방지를 위해 설치하는 밸브는?", options: ["체크 밸브", "게이트 밸브", "글로브 밸브", "니들 밸브"], answer: "체크 밸브" },
    { question: "유량 측정에 사용되는 장치는?", options: ["오리피스", "필터", "플랜지", "엘보"], answer: "오리피스" },
    { question: "온도 측정에 사용하는 센서는?", options: ["열전대", "오리피스", "압력계", "유량계"], answer: "열전대" },
    { question: "압력 측정에 사용하는 장치는?", options: ["부르돈관 압력계", "열전대", "온도계", "유량계"], answer: "부르돈관 압력계" },
    { question: "냉동 사이클에서 저압 측에 있는 장치는?", options: ["증발기", "압축기", "응축기", "팽창밸브"], answer: "증발기" },
    { question: "냉동 능력의 단위는?", options: ["kcal/h", "kW", "TR", "모두 해당"], answer: "모두 해당" },
    { question: "냉동기의 성적계수(COP)는?", options: ["냉동효율", "전기효율", "압축비", "열손실율"], answer: "냉동효율" },

    // 가스법규 (12문제)
    { question: "고압가스 안전관리법의 목적은?", options: ["가스 수입 확대", "안전 확보와 재해 방지", "가격 안정", "수출 장려"], answer: "안전 확보와 재해 방지" },
    { question: "고압가스 제조허가권자는?", options: ["시장·군수·구청장", "산업통상자원부장관", "환경부장관", "소방청장"], answer: "시장·군수·구청장" },
    { question: "제조소 완성검사를 실시하는 기관은?", options: ["한국가스안전공사", "산업통상자원부", "소방청", "지방자치단체"], answer: "한국가스안전공사" },
    { question: "고압가스 운반 시 동승 금지 대상은?", options: ["위험물", "인화성액체", "폭발물", "모두 해당"], answer: "모두 해당" },
    { question: "고압가스 용기 재검사 주기는?", options: ["1년", "3년", "5년", "10년"], answer: "5년" },
    { question: "고압가스 제조소의 안전관리자를 선임하는 주체는?", options: ["제조자", "지방자치단체", "한국가스안전공사", "산업통상자원부"], answer: "제조자" },
    { question: "제조소 안전관리자의 자격 기준은?", options: ["관련 자격증 소지", "관련 학위 소지", "경력자", "모두 해당"], answer: "모두 해당" },
    { question: "고압가스 용기의 색상 규정은?", options: ["산소=녹색", "LPG=회색", "아세틸렌=흑색", "모두 해당"], answer: "모두 해당" },
    { question: "고압가스 안전관리법에서 규정하는 검사 종류가 아닌 것은?", options: ["완성검사", "정기검사", "수시검사", "임시검사"], answer: "임시검사" },
    { question: "고압가스 안전관리법상 운반책임자는?", options: ["운전자", "운송업체 대표", "제조소장", "경찰"], answer: "운전자" },
    { question: "고압가스 사고 발생 시 보고 시간은?", options: ["즉시", "1시간 이내", "3시간 이내", "24시간 이내"], answer: "즉시" },
    { question: "제조소에서 안전관리 기록을 보관하는 기간은?", options: ["1년", "3년", "5년", "10년"], answer: "3년" }
];


let current = 0;
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
    if (selected === correct) {
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



