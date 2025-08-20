// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)
const quizData = [
  {
    question: "표면연소란 다음 중 어느 것을 말하는가?",
    options: [
      "오일표면에서 연소하는 상태",
      "고체연료가 화염을 길게 내면서 연소하는 상태",
      "화염의 외부표면에 산소가 접촉하여 연소하는 현상",
      "적열된 코오크스 또는 숯의 표면에 산소가 접촉하여 연소하는 상태"
    ],
    correct_answer: "적열된 코오크스 또는 숯의 표면에 산소가 접촉하여 연소하는 상태"
  },
  {
    question: "폭발성 분위기의 생성 조건과 관련되는 위험특성에 속하는 것은?",
    options: [
      "폭발한계 ② 화염일주한계",
      "최소점화전류 ④ 폭굉유도거리"
    ],
    correct_answer: "폭발한계 ② 화염일주한계"
  },
  {
    question: "가스의 속도를 크게 할수록 압력손실은 커지나 분리 효율이 좋아지는 집진장치는?",
    options: [
      "세정 집진장치",
      "사이클론 집진장치",
      "멀티크론 집진장치",
      "벤츄리스크레버 집진장치"
    ],
    correct_answer: "사이클론 집진장치"
  },
  {
    question: "다음 중 가스의 성질을 바르게 나타낸 것은?",
    options: [
      "산소는 가연성이다.",
      "일산화탄소는 불연성이다.",
      "수소는 불연성이다.",
      "산화에틸렌은 가연성이다."
    ],
    correct_answer: "산화에틸렌은 가연성이다."
  },
  {
    question: "혼합가스의 압력 계산: 공기 20kg과 증기 5kg이 15m3 용기에, 온도 50℃, 가스정수 29.5, 47.0 kg·m/kg·K",
    options: [
      "1.776 kg/cm2 ② 1.270 kg/cm2",
      "0.987 kg/cm2 ④ 0.386 kg/cm2"
    ],
    correct_answer: "1.776 kg/cm2 ② 1.270 kg/cm2"
  },
  {
    question: "다음 사항 중 가연성가스의 연소, 폭발 설명에서 옳은 것은?",
    options: [
      "1),2) ② 2),3)",
      "1) ④ 3)"
    ],
    correct_answer: "1) ④ 3)"
  },
  {
    question: "액체가 급격한 상변화를 하여 증기가 된 후 폭발하는 현상은?",
    options: [
      "블레브(BLEVE)",
      "파이어 볼(FIRE BALL)",
      "디토네이션(DETONATION)",
      "풀 파이어(POOL FIRE)"
    ],
    correct_answer: "블레브(BLEVE)"
  },
  {
    question: "가스 폭발범위에 관한 설명 중 옳은 것은?",
    options: [
      "가스의 온도가 높아지면 폭발범위는 좁아진다.",
      "폭발상한과 폭발하한의 차이가 작을수록 위험도는 커진다.",
      "압력이 1atm보다 낮아질 때 폭발범위는 큰 변화가 생긴다.",
      "고온,고압 상태에서 가스압이 높아지면 폭발 범위는 넓어진다."
    ],
    correct_answer: "고온,고압 상태에서 가스압이 높아지면 폭발 범위는 넓어진다."
  },
  {
    question: "기체의 임계온도에 관한 설명 중 맞는 것은?",
    options: [
      "수소는 임계온도가 높으나 상온에서는 액화가 불가능하다.",
      "질소는 임계온도가 낮지만 상온에서 액화가 가능하다.",
      "메탄은 임계온도가 낮으며 상온에서는 액화가 불가능하다.",
      "이산화황은 극저온에 가압하여야만 액화가 가능하다."
    ],
    correct_answer: "메탄은 임계온도가 낮으며 상온에서는 액화가 불가능하다."
  },
  {
    question: "자연발화온도(AIT)에 영향을 주는 증기 농도 관련 사항은?",
    options: [
      "가연성 혼합기체 AIT는 가연성 가스와 공비가 1:1일 때 가장 낮다.",
      "가연성 증기에 비해 산소 농도가 클수록 AIT는 낮아진다.",
      "AIT는 가연성 증기 농도가 양론농도보다 약간 높을 때 가장 낮다.",
      "가연성 가스와 산소 혼합비 1:1일 때 AIT는 가장 낮다."
    ],
    correct_answer: "AIT는 가연성 증기 농도가 양론농도보다 약간 높을 때 가장 낮다."
  },
  {
    question: "부탄과 프로판 연소 시 생성물 관련 옳은 설명은?",
    options: [
      "부탄이 완전연소하면 일산화탄소가 생성된다.",
      "부탄이 완전연소하면 탄산가스와 물이 생성된다.",
      "프로판이 불완전연소하면 탄산가스와 불소가 생성된다.",
      "프로판이 불완전연소하면 탄산가스와 규소가 생성된다."
    ],
    correct_answer: "부탄이 완전연소하면 탄산가스와 물이 생성된다."
  },
  {
    question: "산소 압축기 윤활제에 물을 사용하는 이유는?",
    options: [
      "산소는 기름을 분해하므로",
      "기름을 사용하면 실린더 내부가 더러워지므로",
      "압축산소에 유기물이 있으면 산화력이 커서 폭발하므로",
      "산소와 기름은 중합하므로"
    ],
    correct_answer: "압축산소에 유기물이 있으면 산화력이 커서 폭발하므로"
  },
  {
    question: "3단 압축기, 흡입압력 3[kg/cm2 a], 각단 압축비 3 → 제3단 토출압력?",
    options: [
      "27[kg/cm2 a] ② 49[kg/cm2 a]",
      "81[kg/cm2 a] ④ 63[kg/cm2 a]"
    ],
    correct_answer: "81[kg/cm2 a] ④ 63[kg/cm2 a]"
  },
  {
    question: "원심 펌프 특징이 아닌 것은?",
    options: [
      "캐비테이션이나 서어징현상이 발생하기 어렵다.",
      "원심력에 의해 액체를 이용한다.",
      "고양정에 적합하다.",
      "가이드 베인이 있는 것을 터어빈펌프라 한다."
    ],
    correct_answer: "캐비테이션이나 서어징현상이 발생하기 어렵다."
  },
  {
    question: "상온 질소가스, 압력 상승 시 점도 변화는?",
    options: [
      "높게 된다. ② 낮게 된다.",
      "감소한다. ④ 변하지 않는다."
    ],
    correct_answer: "높게 된다. ② 낮게 된다."
  },
  {
    question: "주철관 내경 100mm, 길이 400m, 유속 2m/s, λ=0.04 → 마찰손실수두 계산?",
    options: [
      "2차압력이 저하하면 유체 흐름 양 증가",
      "구동압력 상승 시 유체 흐름 양 감소",
      "2차압력 상승하면 구동압력 저하",
      "구동압력 저하 시 메인밸브 열린다"
    ],
    correct_answer: "2차압력 상승하면 구동압력 저하"
  },
  {
    question: "탄소강 관련 설명 중 틀린 것은?",
    options: [
      "탄소강 1.0% 이상 → 경도 증가, 인장강도 급격히 감소",
      "규소는 탄소강 유동성과 냉간가공성을 좋게 한다.",
      "탄소강에 크롬 첨가 → 내마멸성, 내식성 증가",
      "강재 중 인(P) 많으면 연신율 저하"
    ],
    correct_answer: "규소는 탄소강 유동성과 냉간가공성을 좋게 한다."
  },
  {
    question: "용기 재료 구비조건 중 잘못된 것은?",
    options: [
      "무게가 무거울 것",
      "충분한 강도를 가질 것",
      "내식성을 가질 것",
      "가공 중 결함 생기지 않을 것"
    ],
    correct_answer: "무게가 무거울 것"
  },
  {
    question: "염화메틸(CH3Cl) 제조 시 반응온도는?",
    options: [
      "400℃ ② 300℃",
      "200℃ ④ 100℃"
    ],
    correct_answer: "400℃ ② 300℃"
  },
  {
    question: "500℃ 이상 고온, 고압 가스설비 적합 재료는?",
    options: [
      "탄소강 ② 구리",
      "크롬강 ④ 고탄소강"
    ],
    correct_answer: "크롬강 ④ 고탄소강"
  },
  {
    question: "충전 용기 운행 시 번화가 정의는?",
    options: [
      "차량 너비 + 2.5m 이하 통로 주변",
      "차량 길이 + 3.5m 이하 통로 주변",
      "차량 너비 + 3.5m 이하 통로 주변",
      "차량 길이 + 3m 이하 통로 주변"
    ],
    correct_answer: "차량 너비 + 3.5m 이하 통로 주변"
  },
  {
    question: "가연성·독성가스 용기 도색 표기 중 틀린 것은?",
    options: [
      "가연성가스 → '연'",
      "독성가스 → '독'",
      "내용적 2ℓ 미만 → 제조자가 정함",
      "액화석유가스 → '연' 표기 시 부탄가스임 표시"
    ],
    correct_answer: "액화석유가스 → '연' 표기 시 부탄가스임 표시"
  },
  {
    question: "고압가스 충전용기 운반 기준 중 틀린 것은?",
    options: [
      "차량엔 고무판/가마니로 최소 충격 방지",
      "충전용기는 항상 자전거/오토바이에 적재",
      "가연성/산소 운반 차량 → 소화설비 및 응급조치 자재 휴대",
      "독성가스 운반 차량 → 보호구 및 응급조치 자재 휴대"
    ],
    correct_answer: "충전용기는 항상 자전거/오토바이에 적재"
  },
  {
    question: "염소가스 설명 중 옳지 않은 것은?",
    options: [
      "염소 자체는 폭발성/인화성 없음",
      "조연성 있어 다른 물질 연소 도움",
      "부식성 매우 강함",
      "상온에서 무색·무취 가스"
    ],
    correct_answer: "상온에서 무색·무취 가스"
  },
  {
    question: "LP가스 방출관 방출구 높이 (공기보다 비중 무거운 경우)?",
    options: [
      "지상 5m 이하",
      "지상 5m 이상",
      "정상부 1m 이상",
      "정상부 1m 이하"
    ],
    correct_answer: "지상 5m 이상"
  },
  {
    question: "도시가스 배관 침상재료 정의?",
    options: [
      "배관침하 방지 위해 배관 하부 포설",
      "배관 작용 하중 분산 위해 포설",
      "배관기초부터 노면까지 배관주위 모든 재료",
      "배관 하중을 수직·횡 방향 지지 및 기초 아래 분산"
    ],
    correct_answer: "배관 하중을 수직·횡 방향 지지 및 기초 아래 분산"
  },
  {
    question: "도시가스 전기방식시설 유지관리 중 잘못된 것은?",
    options: [
      "관대지전위 1년에 1회 이상 점검",
      "외부전원법 정류기 출력 3개월 1회 점검",
      "지중가스배관 음극보호단자 1개월 1회 점검",
      "지중가스배관 접지저항 1년 1회 점검"
    ],
    correct_answer: "외부전원법 정류기 출력 3개월 1회 점검"
  },
  {
    question: "천연가스의 주성분은 무엇인가?",
    options: [
      "메탄 (CH₄)",
      "에탄 (C₂H₆)",
      "프로판 (C₃H₈)",
      "부탄 (C₄H₁₀)"
    ],
    correct_answer: "메탄 (CH₄)"
  }
  // 필요 시 나머지 문제 추가 가능
];


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const questionTextElement = document.getElementById('question-text');
const optionsContainerElement = document.getElementById('options-container');
const resultsElement = document.getElementById('results');

function loadQuestion() {
  // 이전/다음 버튼 항상 활성화
  prevButton.style.display = 'inline-block';
  nextButton.style.display = 'inline-block';
  nextButton.textContent = '다음 문제';
  prevButton.textContent = '이전 문제';
  // 첫 문제에서는 이전 버튼 비활성화
  prevButton.disabled = currentQuestionIndex === 0;
  selectedAnswer = null; // Reset selected answer for the new question
  const currentQuestion = quizData[currentQuestionIndex];
  // 문제 번호 표시 (예: 1/30)
  questionTextElement.textContent = `(${currentQuestionIndex + 1} / ${quizData.length}) ${currentQuestion.question}`;

  optionsContainerElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option.trim();
    optionElement.addEventListener('click', () => {
      selectOption(optionElement, option.trim());
      checkAnswerInstant();
    });
    optionsContainerElement.appendChild(optionElement);
  });

  resultsElement.textContent = '';
}

function selectOption(element, answer) {
    // Remove selected class from all options
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selected class to the clicked option
    element.classList.add('selected');
    selectedAnswer = answer;
}

function checkAnswerInstant() {
  if (selectedAnswer === null) {
    resultsElement.textContent = 'Please select an answer!';
    return;
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const normalizedCorrectAnswer = currentQuestion.correct_answer.replace(/\s+/g, ' ').trim();
  const normalizedSelectedAnswer = selectedAnswer.replace(/\s+/g, ' ').trim();

  if (normalizedSelectedAnswer === normalizedCorrectAnswer) {
    score++;
    resultsElement.textContent = '정답입니다!';
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      if (opt.classList.contains('selected')) {
        opt.classList.add('correct');
      }
    });
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        optionsContainerElement.querySelectorAll('.option').forEach(opt => {
          opt.style.pointerEvents = 'auto';
          opt.classList.remove('correct', 'incorrect', 'selected');
        });
      } else {
        showResults();
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
      }
    }, 1000);
  } else {
    resultsElement.textContent = `Incorrect. The correct answer was: ${normalizedCorrectAnswer}`;
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      if (opt.classList.contains('selected')) {
        opt.classList.add('incorrect');
      }
      if (opt.textContent.replace(/\s+/g, ' ').trim() === normalizedCorrectAnswer) {
        opt.classList.add('correct');
      }
    });
  }
  optionsContainerElement.querySelectorAll('.option').forEach(opt => {
    opt.style.pointerEvents = 'none';
  });
}

function nextQuestion() {
    currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    // Re-enable options for the next question
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      opt.style.pointerEvents = 'auto';
      opt.classList.remove('correct', 'incorrect', 'selected');
    });
  } else {
    showResults();
  }
}

function showResults() {
  questionTextElement.textContent = 'Quiz Finished!';
  optionsContainerElement.innerHTML = '';
  resultsElement.textContent = `Your final score is ${score} out of ${quizData.length}.`;
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
}

// Initial load
loadQuestion();
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      opt.style.pointerEvents = 'auto';
      opt.classList.remove('correct', 'incorrect', 'selected');
    });
  } else {
    showResults();
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
  }
});
prevButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      opt.style.pointerEvents = 'auto';
      opt.classList.remove('correct', 'incorrect', 'selected');
    });
  }
});