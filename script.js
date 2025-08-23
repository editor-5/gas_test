// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "급격한 압력의 발생 또는 해방의 결과로 가스가 폭음을 수반하며 격렬하게 팽창하는 현상을 무엇이라고 하는가?",
    options: [
      "❶ 폭발",
      "② 분출",
      "③ 분해연소",
      "④ 자연발화"
    ],
    correct_answer: "폭발"
  },
  {
    question: "다음은 폭굉을 일으킬 수 있는 기체가 파이프 내에 있을 때 폭굉 방지 및 방호에 관한 내용이다. 옳지 않은 사항은?",
    options: [
      "① 파이프의 지름대 길이의 비는 가급적 작도록 한다.",
      "② 파이프 라인에 오리피스 같은 장애물이 없도록 한다.",
      "❸ 파이프 라인을 장애물이 있는 곳은 가급적이면 축소한다.",
      "④ 공정 라인에서 회전이 가능하면 가급적 완만한 회전을 이루도록 한다."
    ],
    correct_answer: "파이프 라인을 장애물이 있는 곳은 가급적이면 축소한다."
  },
  {
    question: "증기폭발(Vapor expiosion)에 관한 설명 중 옳은 것은?",
    options: [
      "① 수증기가 갑자기 응축하여 그 결과로 압력 강하가 일어나 폭발하는 현상",
      "② 가연성 기체가 상온에서 혼합 기체가 되어 발화원에 의하여 폭발하는 현상",
      "③ 가연성 액체가 비점 이상의 온도에서 발생한 증기가 혼합기체가 되어 폭발되는 현상",
      "❹ 뜨거운 액체가 차가운 액체와 접촉할 때 찬 액체가 큰 열을 받아 증기가 발생하여 증기의 압력에 의한 폭발현상"
    ],
    correct_answer: "뜨거운 액체가 차가운 액체와 접촉할 때 찬 액체가 큰 열을 받아 증기가 발생하여 증기의 압력에 의한 폭발현상"
  },
  {
    question: "다음은 수소의 성질을 설명한 것이다. 틀린 것은?",
    options: [
      "① 고온에서 금속산화물을 환원시킨다.",
      "❷ 불완전연소하면 일산화탄소가 발생된다.",
      "③ 고온,고압에서 철에 대해 탈탄작용(脫炭作用)을 한다.",
      "④ 염소와의 혼합기체에 일광(日光)을 비추면 폭발적으로 반응한다."
    ],
    correct_answer: "불완전연소하면 일산화탄소가 발생된다."
  },
  {
    question: "5 atm, 10L의 기체 A와 1.0 atm, 5L의 기체 B를 전체부피 15L의 용기에 넣을 경우, 전압은 얼마인가? (단, 온도는 항상 일정하다.)",
    options: [
      "① 1/3 atm",
      "❷ 2/3 atm",
      "③ 1.5 atm",
      "④ 1 atm"
    ],
    correct_answer: "2/3 atm"
  },
  {
    question: "다음 중 연소의 3요소에 해당되는 사항이 아닌 것은?",
    options: [
      "① 산소",
      "② 정전기 불꽃",
      "❸ 질소",
      "④ 수소"
    ],
    correct_answer: "질소"
  },
  {
    question: "1기압 20L의 공기를 4L 용기에 넣었을 때 산소의 분압은 얼마인가? (단, 압축시 온도변화는 없고, 공기는 이상기체로 가정하며, 공기중 산소의 백분율은 20%로 가정한다.)",
    options: [
      "❶ 1기압",
      "② 2기압",
      "③ 3기압",
      "④ 4기압"
    ],
    correct_answer: "1기압"
  },
  {
    question: "메탄 60%, 에탄 20%, 프로판 15%, 부탄 5%인 혼합가스의 공기 중 폭발 하한계(%)는 약 얼마인가? (단, 각 성분의 하한계는 메탄5.0%, 에탄 3.0%, 프로판 2.1%,부탄 1.8%로 한다.)",
    options: [
      "① 2.5",
      "② 3.0",
      "❸ 3.5",
      "④ 4.0"
    ],
    correct_answer: "3.5"
  },
  {
    question: "다음은 연소에 관한 설명이다. 틀린 것은?",
    options: [
      "❶ 가연성 물질의 환원 과정이다.",
      "② 자발적으로 반응이 계속 된다.",
      "③ 발열반응에 의해 열을 발생한다.",
      "④ 연소범위는 온도나 압력에 따라 달라진다."
    ],
    correct_answer: "가연성 물질의 환원 과정이다."
  },
  {
    question: "일정량의 기체의 체적은 온도가 일정할 때 어떤 관계가 있는가? (단, 기체는 이상기체로 거동한다.)",
    options: [
      "① 비열에 반비례한다.",
      "❷ 압력에 반비례한다.",
      "③ 압력에 비례한다.",
      "④ 비열에 비례한다."
    ],
    correct_answer: "압력에 반비례한다."
  },
  {
    question: "다음 물질 중 분진폭발과 가장 관계가 깊은 것은?",
    options: [
      "❶ 소백분",
      "② 에테르",
      "③ 탄산가스",
      "④ 암모니아"
    ],
    correct_answer: "소백분"
  },
  {
    question: "가연성 가스의 연소범위에 대한 설명 중 옳은 것은?",
    options: [
      "① 폭굉에 의한 폭풍이 전달되는 범위",
      "② 폭굉에 의해 피해를 받는 범위",
      "❸ 공기 중 연소할 수 있는 가연성 가스의 농도 범위",
      "④ 가연성 가스와 공기의 혼합기체가 연소하는데 필요한 혼합기체의 압력범위"
    ],
    correct_answer: "공기 중 연소할 수 있는 가연성 가스의 농도 범위"
  },
  {
    question: "다음 중 폭발의 발화원이 될 수 있는 것들로 짝지워진 것은?",
    options: [
      "① ",
      "① ",
      "② ",
      "① ,",
      "② ",
      "③ ",
      "① ,",
      "② .",
      "③ ",
      "❹ ",
      "① ,",
      "② ,",
      "③ ,",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "다음은 예혼합연소를 설명한 것이다. 잘못된 것은?",
    options: [
      "① 전형적인 층류예혼합화염은 원추상 화염이다.",
      "❷ 난류연소속도는 연료의 종류, 온도, 압력에 대응하는 고유값을 갖는다.",
      "③ 층류예혼합화염의 경우 대기압에 의한 화염두께는 대단히 얇다.",
      "④ 난류예혼합화염은 층류화염보다 휠씬 높은 연소속도를 가진다."
    ],
    correct_answer: "난류연소속도는 연료의 종류, 온도, 압력에 대응하는 고유값을 갖는다."
  },
  {
    question: "다음 중 가열만으로도 폭발의 우려가 있는 물질은 무엇인가?",
    options: [
      "① 에틸렌글리콜",
      "② 산화철",
      "③ 수산화나트륨",
      "❹ 산화에틸렌"
    ],
    correct_answer: "산화에틸렌"
  },
  {
    question: "다음 설명 중 틀린 것은?",
    options: [
      "① 층류 연소속도는 온도에 따라 결정된다.",
      "② 층류 연소속도는 압력에 따라 결정된다.",
      "③ 층류 연소속도는 연료의 종류에 따라 결정된다.",
      "❹ 층류 연소속도는 흐름 상태에 따라 결정된다."
    ],
    correct_answer: "층류 연소속도는 흐름 상태에 따라 결정된다."
  },
  {
    question: "아래 반응식을 이용하여 C2H2(g)의 생성열 복원중을 계산하면 얼마인가? (반응식이 오류로 복원중입니다. 정확한 내용을 아시는 분께는 오류신고를 통하여 내용작성 부탁드립니다. 정답은 3번입니다.)",
    options: [
      "① 148.26kcal/g-mol",
      "② 190.83kcal/g-mol",
      "❸ 54.21kcal/g-mol",
      "④ -472.18kcal/g-mol"
    ],
    correct_answer: "54.21kcal/g-mol"
  },
  {
    question: "가연성 증기속에 수분이 많이 포함 되어 있을때 일어나는 현상이 아닌 것은?",
    options: [
      "① 수격작용 유발 가능성이 높다.",
      "② 증기 엔탈피가 감소한다.",
      "③ 열효율 저하된다.",
      "❹ 건조가 높아진다."
    ],
    correct_answer: "건조가 높아진다."
  },
  {
    question: "(CO2)max는 연료가 연소하여 생성될 수 있는 최대의 이산화탄소율을 나타낸다. 그러면 (CO2)max(%)는 공기비(m)가 어떤 때를 기준으로 하는가?",
    options: [
      "① m = 0",
      "❷ m = 1",
      "③ m = 2",
      "④ 아무 관계가 없다."
    ],
    correct_answer: "m = 1"
  },
  {
    question: "완전가스에 대한 설명으로 틀린 것은?",
    options: [
      "① 완전가스는 분자 상호간의 인력을 무시한다.",
      "② 완전가스에 가까운 실제기체로는 H2, He등이 있다.",
      "③ 완전가스는 분자 자신이 차지하는 부피를 무시한다.",
      "❹ 완전가스는 저온, 고압에서 보일-샤를의 법칙이 성립한다."
    ],
    correct_answer: "완전가스는 저온, 고압에서 보일-샤를의 법칙이 성립한다."
  },
  {
    question: "조정기(Regulator)의 사용 목적은?",
    options: [
      "① 유량조절",
      "② 발열량조절",
      "③ 가스의 유속조절",
      "❹ 가스의 유출압력조절"
    ],
    correct_answer: "가스의 유출압력조절"
  },
  {
    question: "성능계수가 3.2 인 냉동기가 10ton 의 냉동을 하기 위하여 공급하여야 할 동력은?",
    options: [
      "① 10kW",
      "❷ 12kW",
      "③ 14kW",
      "④ 16kW"
    ],
    correct_answer: "12kW"
  },
  {
    question: "자동절체식 조정기를 사용할 때 잇점에 해당하지 않는 것은?",
    options: [
      "① 잔액이 거의 없어질 때까지 가스를 소비할 수 있다.",
      "② 전체용기의 개수가 수동 절체식보다 적게 소요 된다.",
      "③ 용기교환 주기의 폭을 넓힐 수 있다.",
      "❹ 일체형을 사용하면 단단감압식 조정기의 경우보다 압력 손실을 크게 하여도 된다."
    ],
    correct_answer: "일체형을 사용하면 단단감압식 조정기의 경우보다 압력 손실을 크게 하여도 된다."
  },
  {
    question: "일반소비기기용, 지구정압기로 널리 사용되며 구조와 기능이 우수하고 정특성이 좋지만 안전성이 부족하고 크기가 다른 것에 비하여 대형인 정압기는?",
    options: [
      "① 피셔식",
      "② AFV식",
      "❸ 레이놀드식",
      "④ 서비스식"
    ],
    correct_answer: "레이놀드식"
  },
  {
    question: "정압기의 정특성에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 정상상태에서의 유량과 2차 압력의 관계를 뜻한다.",
      "② Lock-up 이란 폐쇄압력과 기준유량일때의 2차압력과의 차를 뜻한다.",
      "❸ 오프셋 값은 클수록 바람직하다.",
      "④ 유량이 증가할수록 2차압력은 점점 낮아진다."
    ],
    correct_answer: "오프셋 값은 클수록 바람직하다."
  },
  {
    question: "배관의 관경을 50cm에서 25cm로 변화시키면 일반적으로 압력손실은 몇 배가 되는가?",
    options: [
      "① 2배",
      "② 4배",
      "③ 16배",
      "❹ 32배"
    ],
    correct_answer: "32배"
  },
  {
    question: "가스액화 분리장치를 구성하는 장치로서 가장 거리가 먼 것은?",
    options: [
      "① 한냉 발생장치",
      "② 정류(분축,흡수)장치",
      "❸ 내부연소식 반응장치",
      "④ 불순물 제거장치"
    ],
    correct_answer: "내부연소식 반응장치"
  },
  {
    question: "가스 분출시 정전기가 가장 발생하기 쉬운 경우는?",
    options: [
      "① 다성분의 혼합가스인 경우",
      "❷ 가스중에 액체나 고체의 미립자가 섞여 있는 경우",
      "③ 가스의 분자량이 적은 경우",
      "④ 가스가 많이 건조해 있을 경우"
    ],
    correct_answer: "가스중에 액체나 고체의 미립자가 섞여 있는 경우"
  },
  {
    question: "물 27kg 를 모두 전기분해하여 산소를 제조하여 내용적 40ℓ의 용기에 0℃, 150kg/cm2 까지 충전하고자 할 때 필요한 용기수는?",
    options: [
      "① 3개",
      "❷ 6개",
      "③ 7개",
      "④ 9개"
    ],
    correct_answer: "6개"
  },
  {
    question: "다음 중 터보형 펌프가 아닌 것은?",
    options: [
      "① 원심식",
      "② 사류식",
      "③ 축류식",
      "❹ 회전식"
    ],
    correct_answer: "회전식"
  },
  {
    question: "금속 재료에서 어느 온도 이상에서 일정 하중이 작용할 때 시간의 경과와 더불어 그 변형이 증가하는 현상을 무엇이라고 하는가?",
    options: [
      "❶ 클리이프",
      "② 시효경과",
      "③ 응력부식",
      "④ 저온취성"
    ],
    correct_answer: "클리이프"
  },
  {
    question: "어떤 설비의 상용압력이 320kg/cm2 일 때 안전밸브의 최고 작동 압력은?",
    options: [
      "① 480kg/cm2",
      "② 426kg/cm2",
      "❸ 384kg/cm2",
      "④ 360kg/cm2"
    ],
    correct_answer: "384kg/cm2"
  },
  {
    question: "고압가스 용기의 안전밸브중 밸브 부근의 온도가 일정 온도를 넘으면 휴즈 메탈이 열려서 가스를 전부 방출시키는 방식은?",
    options: [
      "❶ 가용전식",
      "② 스프링식",
      "③ 파괴막식",
      "④ 수동식"
    ],
    correct_answer: "가용전식"
  },
  {
    question: "내용적 10m3 의 액화산소 저장설비(지상설치)와 제1종 보호시설과 유지해야 할 안전거리는? (단, 액화산소의 상용온도에서의 액화비중:1.14 로 본다.)",
    options: [
      "① 7 m",
      "② 9 m",
      "❸ 14 m",
      "④ 21 m"
    ],
    correct_answer: "14 m"
  },
  {
    question: "도시가스제조 원료의 저장 설비에서 액화석유가스(LPG) 저장법으로 옳은 것은?",
    options: [
      "❶ 가압식저장법, 저온식(냉동식)저장법",
      "② 고온저압식저장법, 저온식(냉동식)저장법",
      "③ 가압식저장법, 고온증발식저장법",
      "④ 고온저압식저장법, 예열증발식저장법"
    ],
    correct_answer: "가압식저장법, 저온식(냉동식)저장법"
  },
  {
    question: "다음 중 주철관과 비교한 강관의 특징으로 옳은 것을 모두 고른 것은?",
    options: [
      "① ㉠, ㉡",
      "② ㉠, ㉢",
      "③ ㉡, ㉢",
      "❹ ㉡, ㉣"
    ],
    correct_answer: "㉡, ㉣"
  },
  {
    question: "흐름의 방향이 역류하는 것을 차단하는 밸브는?",
    options: [
      "① 글로우브 밸브",
      "② 게이트 밸브",
      "③ 플러그 밸브",
      "❹ 체크 밸브"
    ],
    correct_answer: "체크 밸브"
  },
  {
    question: "펌프의 공동현상(Cavitation) 발생에 따라 일어나는 현상이 아닌 것은?",
    options: [
      "① 진동과 소음이 생긴다.",
      "② 임펠러의 침식이 생긴다.",
      "③ 토출량이 점차 감소한다.",
      "❹ 양정효율이 증가한다."
    ],
    correct_answer: "양정효율이 증가한다."
  },
  {
    question: "압축기의 가스별 내부 윤활유로 옳지 않게 짝지은 것은?",
    options: [
      "① 수소 - 양질의 광유",
      "② 아세틸렌 - 양질의 광유",
      "③ 이산화황 - 화이트유",
      "❹ 산소 - 디젤 엔진유"
    ],
    correct_answer: "산소 - 디젤 엔진유"
  },
  {
    question: "고압가스용기 밸브의 구조에 따른 종류에 해당하지 않는 것은?",
    options: [
      "① 패킹식",
      "❷ 글로우브식",
      "③ 백 시트식",
      "④ 0 링식"
    ],
    correct_answer: "글로우브식"
  },
  {
    question: "주택은 제 몇종 보호시설로 분류되는가?",
    options: [
      "① 제0종",
      "② 제1종",
      "❸ 제2종",
      "④ 제3종"
    ],
    correct_answer: "제2종"
  },
  {
    question: "압축된 기체를 단열팽창시켰을 때 온도의 변화는?",
    options: [
      "① 올라간다.",
      "❷ 내려간다.",
      "③ 변하지 않는다.",
      "④ 상황에 따라 다르다."
    ],
    correct_answer: "내려간다."
  },
  {
    question: "고압가스 충전용기 또는 접합용기에 충전하여 포장한 것을 운반차량에 표시하는 용어로 바른 것은?",
    options: [
      "① 주의고압가스",
      "❷ 위험고압가스",
      "③ 고압가스주의",
      "④ 고압가스 운반차량"
    ],
    correct_answer: "위험고압가스"
  },
  {
    question: "다음 포스겐가스(COCl2)를 취급할 때의 주의사항으로 옳지 않은 것은?",
    options: [
      "① 취급시 반드시 방독마스크를 착용할 것",
      "❷ 공기보다 가벼우므로 보관장소의 환기시설은 윗쪽에 설치할 것",
      "③ 사용후 폐가스를 방출할 때에는 중화시킨후 옥외로 방출시킬 것",
      "④ 취급장소는 환기가 잘되는 곳일 것"
    ],
    correct_answer: "공기보다 가벼우므로 보관장소의 환기시설은 윗쪽에 설치할 것"
  },
  {
    question: "에어졸 제조 시 금속제 용기의 두께는 얼마 이상이어야 하는가?",
    options: [
      "① 0.05㎜",
      "② 0.1㎜",
      "❸ 0.125㎜",
      "④ 0.2㎜"
    ],
    correct_answer: "0.125㎜"
  },
  {
    question: "액화석유가스 시설의 배관은 상용압력의 얼마이상의 압력에 항복을 일으키지 아니하는 두께이상이어야 하는가?",
    options: [
      "① 1배",
      "② 1.5배",
      "❸ 2배",
      "④ 2.5배"
    ],
    correct_answer: "2배"
  },
  {
    question: "압력방폭구조의 표시는?",
    options: [
      "❶ Exp",
      "② Exd",
      "③ Exi",
      "④ Exs"
    ],
    correct_answer: "Exp"
  },
  {
    question: "LPG용 가스렌지를 사용하는 도중 불꽃이 치솟아 사고가 발생되었을 시 가장 직접적인 사고 원인은?",
    options: [
      "① 가스누출자동차단기 미작동",
      "② T 관으로 가스누출",
      "❸ 조정기 불량",
      "④ 연소기의 연소불량"
    ],
    correct_answer: "조정기 불량"
  },
  {
    question: "시안화수소를 용기에 충전할 때 안정제로서 무엇을 첨가하는가?",
    options: [
      "① 탄산가스 또는 일산화탄소",
      "② 메탄 또는 에틸렌",
      "③ 질소",
      "❹ 아황산가스 또는 황산"
    ],
    correct_answer: "아황산가스 또는 황산"
  },
  {
    question: "독성가스 제해설비 설치 대상가스가 아닌 것은?",
    options: [
      "① 아황산가스",
      "② 염화메탄",
      "③ 산화에틸렌",
      "❹ 아세틸렌"
    ],
    correct_answer: "아세틸렌"
  },
  {
    question: "자동차 용기 충전시설에서 충전용 호스의 끝에 설치하여야 하는 것은?",
    options: [
      "① 긴급차단장치",
      "② 가스누출경보기",
      "❸ 정전기 제거장치",
      "④ 인터록 장치"
    ],
    correct_answer: "정전기 제거장치"
  },
  {
    question: "부피 함유율이 C3H8 :10%, CH4 :70%, H2 :15%, O2 :5% 인 혼합가스의 연소 속도는? (단, 가스의 비중은 0.6, K = 1.2로 한다.)",
    options: [
      "① 60.1cm/s",
      "❷ 65.1cm/s",
      "③ 70.1cm/s",
      "④ 75.1cm/s"
    ],
    correct_answer: "65.1cm/s"
  },
  {
    question: "가연성 액화가스 저장탱크에서 가스누출에 의해 화재가 발생했다. 대책으로 가장 거리가 먼 것은?",
    options: [
      "① 즉각 송입 펌프를 정지 시킨다.",
      "❷ 즉각 저조 내부의 액을 방류둑내에서 플로우 - 다운(flow-down) 시킨다.",
      "③ 살수 장치를 작동시켜 저장탱크를 냉각한다.",
      "④ 소정의 방법으로 경보를 울린다."
    ],
    correct_answer: "즉각 저조 내부의 액을 방류둑내에서 플로우 - 다운(flow-down) 시킨다."
  },
  {
    question: "이음매 없는 용기 제조 시 탄소함유량은 얼마 이하를 사용하여야 하는가?",
    options: [
      "① 0.04 %",
      "② 0.05 %",
      "③ 0.33 %",
      "❹ 0.55 %"
    ],
    correct_answer: "0.55 %"
  },
  {
    question: "독성가스는 허용농도 얼마 미만인 경우 용기승하차용 리프트와 밀폐된 구조의 적재함이 부착된 전용차랑으로 운반하여야 하는가?",
    options: [
      "① 천분의 1",
      "② 만분의 1",
      "③ 10만분의 1",
      "❹ 100만분의 1"
    ],
    correct_answer: "100만분의 1"
  },
  {
    question: "가스폭발 시 목조건물에 대한 폭풍압이 0.6 ‾ 0.7 kg/㎝2일 경우 나타나는 현상으로 가장 옳은 것은?",
    options: [
      "① 창 유리가 갈라진다.",
      "② 창틀이 파손된다.",
      "❸ 가옥의 뼈대가 들려지고 기둥이 부러진다.",
      "④ 땅이 솟아오른다."
    ],
    correct_answer: "가옥의 뼈대가 들려지고 기둥이 부러진다."
  },
  {
    question: "가스홀더, 가스발생기는 외면으로부터 사업장의 경계까지 거리가 최고사용압력이 중압인 경우 몇 m 이상의 안전거리가 되어야 하는가?",
    options: [
      "❶ 10m",
      "② 15m",
      "③ 20m",
      "④ 25m"
    ],
    correct_answer: "10m"
  },
  {
    question: "압력이 10kg/㎝2 체적이 0.1m3의 기체가 일정한 압력하에서 팽창하여 체적이 0.3m3로 되었다. 이 기체가 한 일은 얼마인가?",
    options: [
      "❶ 20,000kgㆍm",
      "② 30,000kgㆍm",
      "③ 40,000kgㆍm",
      "④ 50,000kgㆍm"
    ],
    correct_answer: "20,000kgㆍm"
  },
  {
    question: "액화석유가스 용기보관장소 주위 우회거리 얼마 이내에 화기 또는 발화성 물질을 두지 않아야 하는가?",
    options: [
      "① 5m",
      "❷ 8m",
      "③ 10m",
      "④ 20m"
    ],
    correct_answer: "8m"
  },
  {
    question: "액화가스저장탱크의 저장능력이 얼마 이상일 때 방류둑을 설치하여야 하는가?",
    options: [
      "① 100톤",
      "② 300톤",
      "❸ 500톤",
      "④ 1000톤"
    ],
    correct_answer: "500톤"
  },
  {
    question: "가스미터의 구비조건으로 잘못된 것은?",
    options: [
      "① 내구성이 클 것",
      "② 구조가 간단하고 수리가 용이할 것",
      "③ 감도가 예민하고 압력손실이 작을 것",
      "❹ 소형으로 계량용량이 적을 것"
    ],
    correct_answer: "소형으로 계량용량이 적을 것"
  },
  {
    question: "일반적으로 공장자동화에 가장 많이 응용되는 제어방법은 무엇인가?",
    options: [
      "① 캐스케이드제어",
      "② 프로그램제어",
      "❸ 시퀀스제어",
      "④ 피드백제어"
    ],
    correct_answer: "시퀀스제어"
  },
  {
    question: "토마스식 유량계는 어떤 유체의 유량을 측정하는데 가장 적당한가?",
    options: [
      "① 용액의 유량",
      "❷ 가스의 유량",
      "③ 석유의 유량",
      "④ 물의 유량"
    ],
    correct_answer: "가스의 유량"
  },
  {
    question: "Roots 가스미터의 장점에 대한 설명으로 옳지 않은 것은?",
    options: [
      "❶ 스트레이너의 설치가 필요 없다.",
      "② 대유량 가스미터에 적합하다.",
      "③ 중압가스의 계량이 가능하다.",
      "④ 설치장소가 작다."
    ],
    correct_answer: "스트레이너의 설치가 필요 없다."
  },
  {
    question: "주로 기체연료의 발열량을 측정하는 열량계는?",
    options: [
      "① Richter 열량계",
      "② Scheel 열량계",
      "❸ Junker 열량계",
      "④ Thomson 열량계"
    ],
    correct_answer: "Junker 열량계"
  },
  {
    question: "바이메탈에 사용되는 인바판의 길이를 20℃에서 측정하니 20mm 이었다. 100℃에서 다시 측정했을 경우 늘어난 길이는 얼마인가? (단, 인바의 선팽창계수는 0.877×10-6 이다.)",
    options: [
      "① 0.014mm",
      "② 0.04mm",
      "❸ 0.0014mm",
      "④ 0.004mm"
    ],
    correct_answer: "0.0014mm"
  },
  {
    question: "다음 중 일반적으로 가장 낮은 온도를 측정할 수 있는 온도계는?",
    options: [
      "① 유리온도계",
      "② 압력온도계",
      "③ 색온도계",
      "❹ 열전대온도계"
    ],
    correct_answer: "열전대온도계"
  },
  {
    question: "기체크로마토그래피에서 운반기체(Carrier gas)로 사용 되지 않는 것은?",
    options: [
      "① N2",
      "② He",
      "❸ O2",
      "④ H2"
    ],
    correct_answer: "O2"
  },
  {
    question: "기체크로마토그래피(Gaschromatography)의 칼럼(Clumn)은 종이크로마토그래프의 어떤 것과 비슷한가?",
    options: [
      "❶ 여과지",
      "② 발색시약",
      "③ 전개용매",
      "④ 실린더"
    ],
    correct_answer: "여과지"
  },
  {
    question: "막식가스미터에서 계량막이 신축하여 계량식 부피가 변화하거나 막에서의 누출, 밸브시트 사이에서의 누출등의 원인이 되면 주로 어떤 현상이 발생하게 되는가?",
    options: [
      "① 감도불량",
      "❷ 기차불량",
      "③ 부동",
      "④ 불통"
    ],
    correct_answer: "기차불량"
  },
  {
    question: "접촉식 온도계 중 알콜온도계의 특징으로 가장 옳은 것은?",
    options: [
      "❶ 저온측정에 적합하다.",
      "② 열팽창계수가 작다.",
      "③ 열전도율이 좋다.",
      "④ 액주의 복원시간이 짧다."
    ],
    correct_answer: "저온측정에 적합하다."
  },
  {
    question: "가스미터 부착기준 중 유의할 사항이 아닌 것은?",
    options: [
      "① 수평부착",
      "② 배관의 상호부담배제",
      "③ 입구배관에 드레인부착",
      "❹ 입, 출구 구분할 필요 없음"
    ],
    correct_answer: "입, 출구 구분할 필요 없음"
  },
  {
    question: "HCN 가스의 검지반응에 사용하는 시험지와 반응색이 옳게 짝지어진 것은?",
    options: [
      "① 리트머스지 - 적색",
      "② KI전분지 - 청색",
      "③ 염화파라듐지 - 적색",
      "❹ 초산벤젠지 - 청색"
    ],
    correct_answer: "초산벤젠지 - 청색"
  },
  {
    question: "기체크로마토그래피에서 시료의 분리가 일어나는 곳은?",
    options: [
      "❶ 항온조",
      "② 캐리어가스",
      "③ 검출부",
      "④ 기록부"
    ],
    correct_answer: "항온조"
  },
  {
    question: "하중을 받아서 이와 비례되는 전기 또는 공기압적인 신호를 발신하여 중량을 측정하는 계량기는?",
    options: [
      "❶ 로드셀",
      "② 천칭",
      "③ 대저울",
      "④ 콘베어스케일"
    ],
    correct_answer: "로드셀"
  },
  {
    question: "가연성가스누설검지기에 반도체 재료가 널리 쓰이고 있다. 이 반도체 재료로 가장 적당한 것은?",
    options: [
      "① 산화니켈(NiO)",
      "❷ 산화알루미늄(Al2O3)",
      "③ 산화주석(SnO2)",
      "④ 이산화망간(MnO2)"
    ],
    correct_answer: "산화알루미늄(Al2O3)"
  },
  {
    question: "오리피스로 유량을 측정하는 경우 압력차가 2배로 변했다면 유량은 몇 배로 변하겠는가?",
    options: [
      "① 2배",
      "② 4배",
      "❸ 배",
      "④ 1배"
    ],
    correct_answer: "배"
  },
  {
    question: "다음 가스미터 중 추량식 가스미터는?",
    options: [
      "① 습식형",
      "② 루츠형",
      "③ 막식형",
      "❹ 터빈형"
    ],
    correct_answer: "터빈형"
  },
  {
    question: "압력의 단위를 차원(dimension)으로 표시한 것은?",
    options: [
      "① MLT",
      "② ML2T2",
      "❸ M/LT2",
      "④ M/L2T2"
    ],
    correct_answer: "M/LT2"
  },
  {
    question: "게이지 압력이 720mmHg 일 때 절대압력은 몇 psia인가?",
    options: [
      "① 13.9 psia",
      "② 15.9 psia",
      "❸ 28.6 psia",
      "④ 30.6 psia                                                   전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "28.6 psia"
  }
];



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