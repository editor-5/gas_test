// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "다음 중 연소반응과 직접 관계가 없는 것은?",
    options: [
      "① 연소열",
      "② 점화에너지",
      "❸ 중화열",
      "④ 발화온도"
    ],
    correct_answer: "중화열"
  },
  {
    question: "최초의 완만한 연소가 격렬한 폭굉으로 발전할 때까지의 거리를 폭굉유도거리(DID)라 하는데 폭굉유도거리가 짧아지는 원인이 아닌 것은?",
    options: [
      "① 정상연소 속도가 큰 혼합가스일수록",
      "② 관속에 방해물이 있을 때",
      "③ 관경이 가늘수록",
      "❹ 압력이 낮을수록"
    ],
    correct_answer: "압력이 낮을수록"
  },
  {
    question: "유동층 연소의 장점에 대한 설명으로 가장 거리가 먼 것은?",
    options: [
      "❶ 부하변동에 따른 적응력이 좋다.",
      "② 광범위하게 연료에 적용할 수 있다.",
      "③ 질소산화물의 발생량이 감소된다.",
      "④ 전열면적이 적게 소요된다."
    ],
    correct_answer: "부하변동에 따른 적응력이 좋다."
  },
  {
    question: "이상기체를 정적 하에서 가열하면 압력과 온도의 변화는 어떻게 되는가?",
    options: [
      "❶ 압력증가, 온도상승",
      "② 압력일정, 온도일정",
      "③ 압력일정, 온도상승",
      "④ 압력증가, 온도일정"
    ],
    correct_answer: "압력증가, 온도상승"
  },
  {
    question: "연소속도에 영향을 주는 인자로서 가장 거리가 먼 것은?",
    options: [
      "① 온도",
      "② 활성화에너지",
      "❸ 발열량",
      "④ 가스의 조성"
    ],
    correct_answer: "발열량"
  },
  {
    question: "공기와 혼합하였을 때 폭발성 혼합가스를 형성할 수 있는 것은?",
    options: [
      "❶ NH3",
      "② N2",
      "③ CO2",
      "④ SO2"
    ],
    correct_answer: "NH3"
  },
  {
    question: "부탄가스의 공기 중 연소범위(%) 값을 가장 옳게 나타낸 것은?",
    options: [
      "❶ 1.9~8.5",
      "② 2.7~9.5",
      "③ 2.4~10.3",
      "④ 5~15"
    ],
    correct_answer: "1.9~8.5"
  },
  {
    question: "공기 20kg과 증기 5kg이 15m3의 용기 속에 들어있다. 만약 이 혼합가스의 온도가 50℃라면 혼합가스의 압력은 약 몇 kg/cm2인가? (단, 공기와 증기의 가스 정수는 각각 29.5, 47.0kg·m/kg·K이다)",
    options: [
      "① 0.39",
      "② 0.99",
      "③ 1.27",
      "❹ 1.78"
    ],
    correct_answer: "1.78"
  },
  {
    question: "가연성 액체로부터 발생한 증기가 공기 중에서 연소범위 내에 있으면 그 표면에 불꽃을 접근시켰을 때 불이 붙는 필요 최저온도를 무엇이라 하는가?",
    options: [
      "❶ 인화점",
      "② 발화점",
      "③ 착화온도",
      "④ 비점"
    ],
    correct_answer: "인화점"
  },
  {
    question: "프로판(C3H8)의 표준 총발열량이 -530600cal/gmol 일 때 표준 진발열량은 몇 cal/gmol인가? (단, HO(L) → H2O(g), H=10519cal/gmol이다.)",
    options: [
      "① -530600",
      "❷ -488524",
      "③ -520081",
      "④ -430432"
    ],
    correct_answer: "-488524"
  },
  {
    question: "액체연료의 연소형태와 가장 거리가 먼 것은?",
    options: [
      "① 분무연소",
      "② 등심연소",
      "❸ 분해연소",
      "④ 증발연소"
    ],
    correct_answer: "분해연소"
  },
  {
    question: "대기압 760mmHg 하에서 계기압력이 2atm이었다면 절대압력은 약 몇 PSI인가?",
    options: [
      "① 22.3",
      "② 33.2",
      "❸ 44.1",
      "④ 55.1"
    ],
    correct_answer: "44.1"
  },
  {
    question: "표준상태에서 질소가스의 밀도는 몇 g/L인가?",
    options: [
      "① 0.97",
      "② 1.00",
      "③ 1.07",
      "❹ 1.25"
    ],
    correct_answer: "1.25"
  },
  {
    question: "다음 중 연소 시 가장 낮은 온도를 나타내는 색깔은?",
    options: [
      "❶ 적색",
      "② 백적색",
      "③ 황적색",
      "④ 휘백색"
    ],
    correct_answer: "적색"
  },
  {
    question: "100℃의 수증기 1kg이 100℃의 물로 응결될 때 수증기 엔트로피 변화량은 몇 KJ/K인가? (단, 물의 증발잠열은 2256.7KJ/kg이다)",
    options: [
      "① -4.87",
      "❷ -6.05",
      "③ -7.24",
      "④ -8.67"
    ],
    correct_answer: "-6.05"
  },
  {
    question: "“압력이 일정할 때 기체의 부피는 온도에 비례하여 변화한다.”라는 법칙은?",
    options: [
      "① 보일(Boyle)의 법칙",
      "❷ 샤를(Charles)의 법칙",
      "③ 보일-샤를의 법칙",
      "④ 아보가드로의 법칙"
    ],
    correct_answer: "샤를(Charles)의 법칙"
  },
  {
    question: "다음 설명 중 옳지 않은 것은?",
    options: [
      "① 화염속도는 화염면이 진행하는 속도를 말한다.",
      "② 화염속도는 연소속도에 미연소가스의 전방이동속도를 합한 것이다.",
      "❸ 어떤 물질의 화염속도는 그 물질의 고유상수이다.",
      "④ 연소속도는 미연소가스가 화염면에 직각으로 들어오는 속도를 말한다."
    ],
    correct_answer: "어떤 물질의 화염속도는 그 물질의 고유상수이다."
  },
  {
    question: "메탄가스에 대한 설명 중 옳은 것은?",
    options: [
      "❶ 고온에서 수증기와 작용하면 반응하여 일산화탄소와 수소를 생성한다.",
      "② 공기 중 메탄가스가 60% 정도 함유되어 있는 기체가 점화되면 폭발한다.",
      "③ 수분을 함유한 메탄은 금속을 급격히 부식시킨다.",
      "④ 메탄은 조연성 가스이기 때문에 유기화합물을 연소시킬 때 사용한다."
    ],
    correct_answer: "고온에서 수증기와 작용하면 반응하여 일산화탄소와 수소를 생성한다."
  },
  {
    question: "다음의 반응식을 이용하면 프로판(C3H8) 1kg이 연소될 때의 발열량은 몇 kcal인가?",
    options: [
      "① 521",
      "② 3513",
      "❸ 11850",
      "④ 521400"
    ],
    correct_answer: "11850"
  },
  {
    question: "다음 설명 중 틀린 것은?",
    options: [
      "① 가스 폭발범위는 측정 조건을 바꾸면 변화한다.",
      "② 점화원의 에너지가 약할수록 폭굉유도거리는 길다.",
      "③ 혼합가스의 폭발한계는 르 샤트리에 식으로 계산한다.",
      "❹ 가스 연료의 점화에너지는 가스농도에 관계없이 결정된 값이다."
    ],
    correct_answer: "가스 연료의 점화에너지는 가스농도에 관계없이 결정된 값이다."
  },
  {
    question: "접촉분해 공정에서 반응압력과 평형가스 조성과의 관계를 옳게 나타낸 것은?",
    options: [
      "① 압력이 상승하면 CH4, CO2 감소",
      "② 압력이 상승하면 H2, CO 증가",
      "❸ 압력이 내려가면 CH4, CO2 감소",
      "④ 압력이 내려가면 H2, CO 감소"
    ],
    correct_answer: "압력이 내려가면 CH4, CO2 감소"
  },
  {
    question: "가로 15㎝, 세로 20㎝의 급기구에 목제 가리개를 설치한 경우 유효면적은 몇 cm2인가? (단, 개구율은 0.3이다)",
    options: [
      "① 60",
      "❷ 90",
      "③ 150",
      "④ 300"
    ],
    correct_answer: "90"
  },
  {
    question: "용접부 내부 결함검사에 가장 적합한 방법으로서 검사결과의 기록이 가능한 검사방법은?",
    options: [
      "① 자분검사",
      "② 침투검사",
      "❸ 방사선투과검사",
      "④ 누설검사"
    ],
    correct_answer: "방사선투과검사"
  },
  {
    question: "다양한 기계에서 일을 하기 위해 발휘하는 힘 중 몇 %가 실제로 이용되는지 알려주는 값으로서 η=Le/Li 로 나타낼 수 있는 효율을 무엇이라고 하는가? (단, 기관에서 발생하는 마력은 Li, 실제로 이용되는 마력은 Le이다)",
    options: [
      "① 체적효율",
      "❷ 기계효율",
      "③ 수력효율",
      "④ 이상효율"
    ],
    correct_answer: "기계효율"
  },
  {
    question: "산소제조장치에서 공기 중 CO2가스를 흡수하기 위하여 주로 사용되는 흡수제는?",
    options: [
      "① CH3COOH",
      "② H2SO4",
      "❸ NaOH",
      "④ H2O2"
    ],
    correct_answer: "NaOH"
  },
  {
    question: "축류펌프의 날개수를 증가시켰을 때 펌프성능에 주는 영향으로 옳은 것은?",
    options: [
      "① 양정이 일정하고 유량이 증가",
      "❷ 유량이 일정하고 양정이 증가",
      "③ 유량과 양정이 모두 증가",
      "④ 유량과 양정이 모두 감소"
    ],
    correct_answer: "유량이 일정하고 양정이 증가"
  },
  {
    question: "액화가스 공장에 내용적 25m의 저장탱크가 2개 설치되어 있다. 총 저장능력은 몇 톤인가? (단, 액화가스의 비중은 0.71이다)",
    options: [
      "❶ 31.95",
      "② 35.50",
      "③ 50.00",
      "④ 63.40"
    ],
    correct_answer: "31.95"
  },
  {
    question: "냉간가공과 열간가공을 구분하는데 기준이 되는 온도는?",
    options: [
      "① 끓는 온도",
      "② 상용온도",
      "❸ 재결정온도",
      "④ 섭씨 0도"
    ],
    correct_answer: "재결정온도"
  },
  {
    question: "Fisher식 정압기에서 2차압의 이상 상승원인이 아닌 것은?",
    options: [
      "① 가스 중 수분의 동결",
      "❷ 2차압 조절관 파손",
      "③ 바이패스 밸브류의 누출",
      "④ 파이롯트 서플리밸브에서의 누설"
    ],
    correct_answer: "2차압 조절관 파손"
  },
  {
    question: "프로판(C3H8) 11g을 완전 연소시켰을 때 발생되는 이산화탄소는 표준 상태에서 약 몇 L인가?",
    options: [
      "① 5.6",
      "❷ 16.8",
      "③ 22.4",
      "④ 39.2"
    ],
    correct_answer: "16.8"
  },
  {
    question: "고온, 고압 하에서 수소를 사용하는 장치공정의 재질은 어느 재료를 사용하는 것이 가장 적당한가?",
    options: [
      "① 탄소강",
      "❷ 크롬강",
      "③ 타프치동",
      "④ 실리콘강"
    ],
    correct_answer: "크롬강"
  },
  {
    question: "저온(T2)로부터 고온(T1)으로 열을 보내는 냉동기의 성능계수 산정식은?",
    options: [
      "① ",
      "❷ ",
      "③ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "배관 내의 마찰저항에 의한 압력손실에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 관내경의 5승에 반비례한다.",
      "② 유속의 제곱에 비례한다.",
      "❸ 관의 길이에 반비례한다.",
      "④ 유체점도가 크면 압력손실이 크다."
    ],
    correct_answer: "관의 길이에 반비례한다."
  },
  {
    question: "다음 중 플레어스택 용량 산정 시 가장 큰 영향을 주는 것은?",
    options: [
      "① 인터록 기구",
      "② 긴급차단장치",
      "③ 내부반응 검사장치",
      "❹ 긴급이송설비"
    ],
    correct_answer: "긴급이송설비"
  },
  {
    question: "다음 중 정압기에 관한 설명으로 틀린 것은?",
    options: [
      "① 정압기는 2년에 1회 이상 분해점검을 실시한다.",
      "❷ 불순물 제거장치는 정압기 출구측에 설치한다.",
      "③ 내부 응결수의 동결방지를 위해 방한 시공한다.",
      "④ 가스 공급의 중단방지를 위해 바이패스관을 설치한다."
    ],
    correct_answer: "불순물 제거장치는 정압기 출구측에 설치한다."
  },
  {
    question: "직류전철 등에 의한 누출전류의 영향을 받는 배관에 적합한 전기방식법은?",
    options: [
      "① 희생양극법",
      "② 교호법",
      "❸ 배류법",
      "④ 외부전원법"
    ],
    correct_answer: "배류법"
  },
  {
    question: "20kg 용기(내용적 47L)를 3.1MPa 수압으로 내압시험 결과 내용적이 47.8L로 증가 하였다. 영구(항구)증가율은 얼마인가? (단, 압력을 제거하였을 때 내용적은 47.1L이었다)",
    options: [
      "① 8.3%",
      "② 9.7%",
      "③ 11.4%",
      "❹ 12.5%"
    ],
    correct_answer: "12.5%"
  },
  {
    question: "다음은 어떤 가스의 합성법을 나열한 것인가?",
    options: [
      "① 아세틸렌",
      "② 프로판",
      "③ 이산화탄소",
      "❹ 암모니아"
    ],
    correct_answer: "암모니아"
  },
  {
    question: "탄화수소에서 아세틸렌가스를 제조할 경우의 반응에 대한 설명으로 옳은 것은?",
    options: [
      "❶ 탄화수소 분해반응 온도는 보통 1000~3000℃이고, 고온일수록 아세틸렌이 많이 생성된다.",
      "② 원료나프타는 방향족계가 가장 좋다.",
      "③ 반응압력은 저압일수록 아세틸렌이 적게 생성된다.",
      "④ 중축합 반응을 촉진시켜 아세틸렌 수율을 높인다."
    ],
    correct_answer: "탄화수소 분해반응 온도는 보통 1000~3000℃이고, 고온일수록 아세틸렌이 많이 생성된다."
  },
  {
    question: "압축기의 압축비에 대한 설명 중 옳은 것은?",
    options: [
      "① 압축비는 고압측 압력계의 압력을 저압측 압력계의 압력으로 나눈 값이다.",
      "② 압축비가 적을수록 체적효율은 낮아진다.",
      "❸ 흡입압력 흡입온도가 같으면 압축비가 크게 될 때 토출가스의 온도가 높게 된다.",
      "④ 압축비는 토출가스의 온도에는 영향을 주지 않는다."
    ],
    correct_answer: "흡입압력 흡입온도가 같으면 압축비가 크게 될 때 토출가스의 온도가 높게 된다."
  },
  {
    question: "지름이 각각 8m인 LPG 저장탱크사이에 물분무장치를 하지 않은 경우 탱크사이에 유지해야 되는 간격은?",
    options: [
      "① 1m",
      "② 2m",
      "❸ 4m",
      "④ 8m"
    ],
    correct_answer: "4m"
  },
  {
    question: "연소기구에 접속된 고무관이 노후되어 직경 0.5㎜의 구멍이 뚫려 수주 280㎜의 압력으로 LP가스가 5시간 누출하였을 경우 LP가스 분출량은 약 몇 L인가? (단, LP가스의 분출압력 280mmH2O 에서 비중은 1.7로 한다)",
    options: [
      "❶ 144L",
      "② 166L",
      "③ 180L",
      "④ 204L"
    ],
    correct_answer: "144L"
  },
  {
    question: "차량에 고정된 탱크를 운행 중 주차할 필요가 있을 경우에 제1종 보호시설로부터의 최소 이격 주차거리는?",
    options: [
      "① 10m",
      "❷ 15m",
      "③ 20m",
      "④ 30m"
    ],
    correct_answer: "15m"
  },
  {
    question: "도시가스공급시설 또는 그 시설에 속하는 계기를 장치하는 회로에는 온도 및 압력과 그 시설의 상황에 따라 안전 확보를 위한 주요부분에 설비가 잘못 조작되거나 이상이 발생하는 경우에 자동으로 원료의 공급은 차단시키는 장치를 무엇이라고 하는가?",
    options: [
      "① 긴급차단장치",
      "② 안전제어장치",
      "❸ 인터록장치",
      "④ 가스차단장치"
    ],
    correct_answer: "인터록장치"
  },
  {
    question: "아황산가스에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 물에 용해되어 산성이 된다.",
      "② 공기 중의 농도가 0.5~1.0ppm일 때 감각적으로 그 소재를 알 수 있다.",
      "③ 30~40ppm일 때 호흡이 곤란하게 된다.",
      "❹ 50~100ppm일 때 짧은 시간에 생명이 위험하게 된다."
    ],
    correct_answer: "50~100ppm일 때 짧은 시간에 생명이 위험하게 된다."
  },
  {
    question: "일정 기준 이상의 고압가스를 적재 운반 시는 운반책임자가 동승해야 하는데 운반책임자의 동승기준으로 틀린 것은?",
    options: [
      "① 가연성 압축가스 : 300m3 이상",
      "② 조연성 압축가스 : 600m3 이상",
      "③ 독성 액화가스 : 1000kg 이상",
      "❹ 가연성 액화가스 : 4000kg 이상"
    ],
    correct_answer: "가연성 액화가스 : 4000kg 이상"
  },
  {
    question: "차량에 고정된 독성가스 탱크의 내용적은 몇 L를 초과하지 않아야 하는가?",
    options: [
      "① 1000",
      "② 3000",
      "❸ 12000",
      "④ 18000"
    ],
    correct_answer: "12000"
  },
  {
    question: "아세틸렌용기의 신규검사 항목이 아닌 것은?",
    options: [
      "① 외관검사",
      "② 다공도시험",
      "③ 기밀시험",
      "❹ 내압시험"
    ],
    correct_answer: "내압시험"
  },
  {
    question: "충전용기(30L 이하의 용접용기) 집적에 의한 액화석유가스 저장소에서 용기의 단위 집적량은 몇 톤을 초과하지 않아야 하는가?",
    options: [
      "① 20",
      "② 25",
      "❸ 30",
      "④ 50"
    ],
    correct_answer: "30"
  },
  {
    question: "다음 중 가연성가스 또는 산소를 운반하는 차량에 휴대하여야 하는 소화기로 옳은 것은?",
    options: [
      "① 포말소화기",
      "❷ 분말소화기",
      "③ 화학포소화기",
      "④ 간이소화제"
    ],
    correct_answer: "분말소화기"
  },
  {
    question: "어떤 실내에 메탄이 공기 중 폭발한계인 5.0%가 존재하는 경우 혼합공기 1m3에 함유된 메탄의 중량은 약 얼마인가? (단, 표준상태 기준이며, 메탄은 이상기체로 간주한다)",
    options: [
      "❶ 35.7g",
      "② 357.0g",
      "③ 24.4g",
      "④ 244.0g"
    ],
    correct_answer: "35.7g"
  },
  {
    question: "1일간 처리능력이 25000m3인 산소 저장설비 외면과 주택과는 몇 m 이상의 안전거리를 유지하여야 하는가?",
    options: [
      "① 8",
      "② 9",
      "❸ 11",
      "④ 13"
    ],
    correct_answer: "11"
  },
  {
    question: "액화석유가스의 안전관리 및 사업법상 “다중이용시설”에 해당하지 않는 것은?",
    options: [
      "① 유통산업발전법에 의한 대형점, 백화점, 쇼핑센터",
      "② 항공법에 의한 공항의 여객청사",
      "③ 한국마사회법에 의한 경마장",
      "❹ 문화재보호법에 의하여 지정문화재로 지정된 건축물"
    ],
    correct_answer: "문화재보호법에 의하여 지정문화재로 지정된 건축물"
  },
  {
    question: "산소, 수소 및 아세틸렌의 품질검사에서 순도는 각각 얼마 이상이어야 하는가?",
    options: [
      "① 산소 : 99.5%, 수소 : 98.0%, 아세틸렌 : 98.5%",
      "❷ 산소 : 99.5%, 수소 : 98.5%, 아세틸렌 : 98.0%",
      "③ 산소 : 98.0%, 수소 : 99.5%, 아세틸렌 : 98.5%",
      "④ 산소 : 98.5%, 수소 : 99.5%, 아세틸렌 : 98.0%"
    ],
    correct_answer: "산소 : 99.5%, 수소 : 98.5%, 아세틸렌 : 98.0%"
  },
  {
    question: "고압가스제조자 또는 고압가스판매자가 실시하는 용기의 안전점검 및 유지관리기준 중 틀린 것은?",
    options: [
      "① 용기는 도색 및 표시가 되어 있는지의 여부를 확인할 것",
      "② 용기 캡이 씌어져 있거나 프로텍터가 부착되어 있는지의 여부를 확인할 것",
      "③ 용기의 재검사시간의 도래여부를 확인할 것",
      "❹ 유통 중 열영향을 받았는지 여부를 점검하고, 열영향을 받은 용기는 재 도색 할 것"
    ],
    correct_answer: "유통 중 열영향을 받았는지 여부를 점검하고, 열영향을 받은 용기는 재 도색 할 것"
  },
  {
    question: "용기 내부에서 가연성가스의 폭발이 발생할 경우 그 용기가 폭발압력에 견디고 접합면, 개구부 등을 통하여 외부의 가연성가스에 인화되지 아니하도록 한 구조는?",
    options: [
      "❶ 내압방폭구조",
      "② 유입방폭구조",
      "③ 압력방폭구조",
      "④ 특수방폭구조"
    ],
    correct_answer: "내압방폭구조"
  },
  {
    question: "고압가스용기에 의한 운반의 기준으로 틀린 것은?",
    options: [
      "① 200km 이상의 거리를 운행할 경우 중간에 충분한 휴식을 취한 후 운행한다.",
      "❷ 고압가스운반 시 고압가스의 명칭, 성질 및 이동 중 재해방지를 위한 필요한 주의사항을 구두로 교육한다.",
      "③ 고압가스 운반 시 운반책임자와 운전자가 동시에 차량에서 이탈하여서는 안 된다.",
      "④ 노면이 나쁜 도로는 가능한 한 운행하지 않아야 한다."
    ],
    correct_answer: "고압가스운반 시 고압가스의 명칭, 성질 및 이동 중 재해방지를 위한 필요한 주의사항을 구두로 교육한다."
  },
  {
    question: "용기의 각인 기호에 대해 잘못 나타낸 것은?",
    options: [
      "① V : 내용적",
      "② W : 용기의 질량",
      "❸ TP : 기밀시험압력",
      "④ FP : 최고충전압력"
    ],
    correct_answer: "TP : 기밀시험압력"
  },
  {
    question: "프로판가스의 폭발 위험도는 약 얼마인가?",
    options: [
      "❶ 3.5",
      "② 12.5",
      "③ 15.5",
      "④ 20.2"
    ],
    correct_answer: "3.5"
  },
  {
    question: "액체염소가 누출된 경우 필요한 조치가 아닌 것은?",
    options: [
      "① 소석회의 살포",
      "② 가성소다의 살포",
      "③ 중화제 살포 후 폴리에틸렌 sheet로 덮음",
      "❹ 물의 살포"
    ],
    correct_answer: "물의 살포"
  },
  {
    question: "회로의 두 접점 사이의 온도차로 열기전력을 일으키고 그 전위차를 측정하여 온도를 알아내는 온도계는?",
    options: [
      "❶ 열전대온도계",
      "② 저항온도계",
      "③ 광고온도계",
      "④ 방사온도계"
    ],
    correct_answer: "열전대온도계"
  },
  {
    question: "그림과 같이 실린더에 압축된 가스가 같은 온도, 동일압력조건에서 밸브를 통해 대기로 방출된다고 할 때, 다음 기체 중 가장 많이 누출되는 가스는?",
    options: [
      "❶ 헬륨(He)",
      "② 질소(N2)",
      "③ 아르곤(Ar)",
      "④ 이산화탄소(CO2)"
    ],
    correct_answer: "헬륨(He)"
  },
  {
    question: "가스조정기(Regulator)의 역할에 대한 설명으로 가장 옳은 것은?",
    options: [
      "① 용기 내로의 역화를 방지한다.",
      "② 용기 내의 압력이 급상승할 경우 정상화한다.",
      "③ 가스를 정제하고 유량을 조절한다.",
      "❹ 공급되는 가스의 압력을 연소기구에 적당한 압력까지 감압시킨다."
    ],
    correct_answer: "공급되는 가스의 압력을 연소기구에 적당한 압력까지 감압시킨다."
  },
  {
    question: "저급탄화수소의 분석용으로 사용되는 게겔법에서 CO2의 흡수액은?",
    options: [
      "① 87% H2SO4",
      "② 알칼리성 피롤카롤용액",
      "❸ 33% KOH용액",
      "④ 옥소수은 칼륨용액"
    ],
    correct_answer: "33% KOH용액"
  },
  {
    question: "비중량이 910kg/m3인 기름 20L의 무게는 약 몇 kg인가?",
    options: [
      "① 15.4",
      "❷ 18.2",
      "③ 19.1",
      "④ 19.8"
    ],
    correct_answer: "18.2"
  },
  {
    question: "오리피스, 플로노즐, 벤츄리 유량계의 공통점은?",
    options: [
      "① 직접식",
      "② 초음속 유체만의 유량측정",
      "❸ 압력강하 측정",
      "④ 열전대를 사용"
    ],
    correct_answer: "압력강하 측정"
  },
  {
    question: "측정 범위가 넓어 탄성체 압력계의 교정용으로 주로 사용되는 압력계는?",
    options: [
      "① 벨로즈식 압력계",
      "② 다이어프램식 압력계",
      "③ 부르돈관식 압력계",
      "❹ 표준 분동식 압력계"
    ],
    correct_answer: "표준 분동식 압력계"
  },
  {
    question: "계량기의 감도가 좋으면 어떠한 변화가 오는가?",
    options: [
      "① 측정시간이 짧아진다.",
      "❷ 측정범위가 좁아진다.",
      "③ 측정범위가 넓어지고, 정도가 좋다.",
      "④ 폭 넓게 사용할 수 가 있고, 편리하다."
    ],
    correct_answer: "측정범위가 좁아진다."
  },
  {
    question: "국제단위계(SI단위계 : The International System of Unit)의 기본단위인 것은?",
    options: [
      "❶ 질량(kg)",
      "② 진동수(Hz)",
      "③ 압력(Pa)",
      "④ 일(J)"
    ],
    correct_answer: "질량(kg)"
  },
  {
    question: "배관장치에서 이상상태가 발생한 경우 제어기능을 갖는 안전제어장치를 설치하여야 한다. 이 때 “이상상태가 발생한 경우”가 아닌 것은?",
    options: [
      "① 가스누출경보기가 작동하였을 때",
      "❷ 유량계로 측정한 유량이 정상운전시의 유량보다 10% 이상 증가하였을 때",
      "③ 압력계로 측정한 압력이 정상운전시의 압력보다 30% 이상 강하하였을 때",
      "④ 압력계로 측정한 압력이 상용압력의 1.1배를 초과하였을 때"
    ],
    correct_answer: "유량계로 측정한 유량이 정상운전시의 유량보다 10% 이상 증가하였을 때"
  },
  {
    question: "가스계량기의 설치장소로 부적당한 곳은?",
    options: [
      "❶ 전기계량기와는 15cm 떨어진 위치",
      "② 화기와는 2m 이상의 우회거리를 유지한 곳",
      "③ 직사광선 또는 빗물을 받을 우려가 없는 곳",
      "④ 설치높이는 바닥으로부터 1.6m 이상 2m 이내"
    ],
    correct_answer: "전기계량기와는 15cm 떨어진 위치"
  },
  {
    question: "계통적 오차에 대한 설명 중 옳지 않은 것은?",
    options: [
      "❶ 오차의 원인을 알 수 없어 제거할 수 없다.",
      "② 측정 조건변화에 따라 규칙적으로 생긴다.",
      "③ 참값에 대하여 치우침이 생길 수 있다.",
      "④ 계기오차, 개인오차, 이론오차 등으로 분류된다."
    ],
    correct_answer: "오차의 원인을 알 수 없어 제거할 수 없다."
  },
  {
    question: "유속이 6m/s인 물속에 피토(Pitot)관을 세울 때 수주의 높이는 몇 m인가?",
    options: [
      "① 0.54",
      "② 0.92",
      "③ 1.63",
      "❹ 1.83"
    ],
    correct_answer: "1.83"
  },
  {
    question: "가스분석계를 화학적 가스분석계와 물리적 가스분석계로 나눌 때 화학적 가스분석계에 해당되는 방법은?",
    options: [
      "① 가스의 자기적 성질을 이용한다.",
      "② 흡수용액의 전기전도도를 이용한다.",
      "③ 가스의 밀도, 점도를 이용한다.",
      "❹ 고체 흡수제를 이용한다."
    ],
    correct_answer: "고체 흡수제를 이용한다."
  },
  {
    question: "측정지연 및 조절지연이 작을 경우 좋은 결과를 얻을 수 있으며 제어량의 편차가 없어질 때까지 동작을 계속하는 제어동작은?",
    options: [
      "❶ 적분동작",
      "② 비례동작",
      "③ 평균2위치동작",
      "④ 미분동작"
    ],
    correct_answer: "적분동작"
  },
  {
    question: "다음 보기에서 설명하는 액주식 압력계의 종류는?",
    options: [
      "① U자관 압력계",
      "② 단관식 압력계",
      "❸ 경사관식 압력계",
      "④ 링밸런스 압력계"
    ],
    correct_answer: "경사관식 압력계"
  },
  {
    question: "막식 가스미터에 있어 계량막의 파손, 밸브의 탈락, 밸브시트에서의 누설 등이 발생하여 고장이 생겼을 때 일어나는 고장형태는?",
    options: [
      "❶ 부동(不動)",
      "② 기차불량",
      "③ 불통(不通)",
      "④ 누설"
    ],
    correct_answer: "부동(不動)"
  },
  {
    question: "온도가 60°F 에서 100F 까지 비례 제어된다. 측정온도가 71°F에서 75°F로 변할 때 출력압력이 3psi에서 15psi로 도달하도록 조정될 때 비례대역(%)은?",
    options: [
      "① 5%",
      "❷ 10%",
      "③ 20%",
      "④ 33%"
    ],
    correct_answer: "10%"
  },
  {
    question: "다음 ( ) 안에 알맞은 것은?",
    options: [
      "① 1년",
      "② 2년",
      "③ 3년",
      "❹ 5년"
    ],
    correct_answer: "5년"
  },
  {
    question: "다음 중 회전자식 가스미터는?",
    options: [
      "① 막식미터",
      "❷ 루트미터",
      "③ 벤츄리미터",
      "④ 델타미터                   전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "루트미터"
  }
];;



let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionNavElement = document.getElementById('question-nav');

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const questionTextElement = document.getElementById('question-text');
const optionsContainerElement = document.getElementById('options-container');
const resultsElement = document.getElementById('results');

const gotoInput = document.getElementById('goto-input');
const gotoButton = document.getElementById('goto-button');

// 번호 입력 후 이동 기능
if (gotoButton && gotoInput) {
  gotoButton.onclick = function() {
    const val = parseInt(gotoInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= quizData.length) {
      currentQuestionIndex = val - 1;
      loadQuestion();
    } else {
      gotoInput.value = '';
      gotoInput.placeholder = `1~${quizData.length} 사이 번호`;
    }
  };
  gotoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      gotoButton.click();
    }
  });
}

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
    // 화면에 표시되는 텍스트와 클릭 이벤트 모두 normalize 적용
    function normalize(str) {
      return str.replace(/\s+/g, ' ').replace(/[.,:;!?]/g, '').trim().toLowerCase();
    }
    optionElement.textContent = normalize(option);
    optionElement.addEventListener('click', () => {
      selectOption(optionElement, normalize(option));
      checkAnswerInstant();
    });
    optionsContainerElement.appendChild(optionElement);
  });

  resultsElement.textContent = '';

  // 문제 번호 버튼 생성
  // 문제 번호 버튼 숨김 처리
  questionNavElement.style.display = 'none';
}

function selectOption(element, answer) {
  // Remove selected class from all options
  optionsContainerElement.querySelectorAll('.option').forEach(opt => {
    opt.classList.remove('selected');
  });
  // Add selected class to the clicked option
  element.classList.add('selected');
  // 옵션 선택 시에도 normalize 적용
  function normalize(str) {
    return str.replace(/\s+/g, ' ').replace(/[.,:;!?]/g, '').trim().toLowerCase();
  }
  selectedAnswer = normalize(answer);
}

function checkAnswerInstant() {
  if (selectedAnswer === null) {
    resultsElement.textContent = '답을 선택하세요!';
    return;
  }
  const currentQuestion = quizData[currentQuestionIndex];
  function normalize(str) {
    return str.replace(/\s+/g, ' ').replace(/[.,:;!?]/g, '').trim().toLowerCase();
  }
  const normalizedCorrectAnswer = normalize(currentQuestion.correct_answer);
  const normalizedSelectedAnswer = normalize(selectedAnswer);
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
    resultsElement.textContent = `오답입니다. 정답: ${normalizedCorrectAnswer}`;
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
    optionsContainerElement.querySelectorAll('.option').forEach(opt => {
      opt.style.pointerEvents = 'auto';
      opt.classList.remove('correct', 'incorrect', 'selected');
    });
  } else {
    showResults();
  }
}

function showResults() {
  questionTextElement.textContent = '퀴즈 종료!';
  optionsContainerElement.innerHTML = '';
  resultsElement.textContent = `최종 점수: ${score} / ${quizData.length}`;
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