// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "산화에틸렌을 장시간 저장하지 못하게 하는 이유는 무엇 때문인가?",
    options: [
      "① 분해폭발",
      "② 분진폭발",
      "③ 산화폭발",
      "❹ 중합폭발"
    ],
    correct_answer: "중합폭발"
  },
  {
    question: "다음중 가연물의 조건으로서 가치가 없는 것은?",
    options: [
      "① 발열량이 큰 것",
      "❷ 열전도율이 큰 것",
      "③ 활성화에너지가 작은 것",
      "④ 산소와의 친화력이 큰 것"
    ],
    correct_answer: "열전도율이 큰 것"
  },
  {
    question: "다음 중 분해에 의한 가스폭발은 어느 것인가?",
    options: [
      "① 수소와 염소 가스의 혼합물에 일광직사",
      "❷ 110℃ 이상의 아세틸렌 가스폭발",
      "③ 프로판 가스의 점화 폭발",
      "④ 용기의 불량 및 압력과다"
    ],
    correct_answer: "110℃ 이상의 아세틸렌 가스폭발"
  },
  {
    question: "전 폐쇄 구조로 용기내부에서 폭발성 가스의 폭발이 일어났을 때 용기가 압력에 견디고 외부의 폭발성 가스에 인화할 우려가 없도록한 방폭구조는 ?",
    options: [
      "❶ 내압방폭구조",
      "② 안정증 방폭구조",
      "③ 특수 방폭구조",
      "④ 유입 방폭구조"
    ],
    correct_answer: "내압방폭구조"
  },
  {
    question: "1 ㎏의 공기를 20℃, 1㎏/㎝2인 상태에서 일정 압력으로 가열 팽창시켜서 부피를 처음의 5배로 하려고 한다. 이때 필요한 온도 상승은 몇 ℃ 인가?",
    options: [
      "❶ 1172℃",
      "② 1282℃",
      "③ 1465℃",
      "④ 1561℃"
    ],
    correct_answer: "1172℃"
  },
  {
    question: "다음 설명 중 맞는 것은 ?",
    options: [
      "① 폭굉속도는 보통 연소속도의 10배 정도이다.",
      "❷ 폭발범위는 온도가 높아지면 일반적으로 넓어진다.",
      "③ 폭굉(Detonation)속도는 가스인 경우 1000m/sec이하이다.",
      "④ 가연성 가스와 공기의 혼합가스에 질소를 첨가하면 폭발 범위의 상한치는 크게 된다."
    ],
    correct_answer: "폭발범위는 온도가 높아지면 일반적으로 넓어진다."
  },
  {
    question: "과열 증기의 온도와 포화 증기의 온도차를 무엇이라고 하는가?",
    options: [
      "❶ 과열도",
      "② 포화도",
      "③ 비습도",
      "④ 건조도"
    ],
    correct_answer: "과열도"
  },
  {
    question: "일반적으로 온도가 10℃ 상승하면 반응속도는 약 2배 빨라진다. 40℃의 반응온도를 100℃로 상승시키면 반응속도는 몇 배 빨라지는가?",
    options: [
      "❶ 26",
      "② 25",
      "③ 24",
      "④ 23"
    ],
    correct_answer: "26"
  },
  {
    question: "아래의 반응식은 메탄의 완전연소반응이다. 이 때 메탄, 이산화탄소, 물의 생성열이 각각 -17.9kcal, -94.1kcal, -57.8kcal 이라면 메탄의 완전연소시 발열량은 얼마인가?",
    options: [
      "① 216.5kcal",
      "❷ 191.8kcal",
      "③ 169.8kcal",
      "④ 134.0kcal"
    ],
    correct_answer: "191.8kcal"
  },
  {
    question: "다음 중 이론연소온도(화염온도)t℃를 구하는 식은 ? (단, Hh,HL : 고,저 발열량, G : 연소가스, Cp : 비열)",
    options: [
      "❶ ",
      "② ",
      "③ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "다음 중 잘못된 것은?",
    options: [
      "① 고압일수록 폭발범위가 넓어진다.",
      "② 압력이 높아지면 발화온도는 낮아진다.",
      "❸ 가스의 온도가 높아지면 폭발범위는 좁아진다.",
      "④ 일산화탄소는 공기와 혼합시 고압이 되면 폭발범위가 좁아진다."
    ],
    correct_answer: "가스의 온도가 높아지면 폭발범위는 좁아진다."
  },
  {
    question: "다음은 폭발의 위험성을 갖는 물질들이다. 이 중 폭발의 종류가 중합열에 의한 폭발물질에 해당되는 것은?",
    options: [
      "① 염소산칼륨",
      "② 과산화물",
      "❸ 부타디엔",
      "④ 아세틸렌"
    ],
    correct_answer: "부타디엔"
  },
  {
    question: "질소와 산소를 같은 질량으로 혼합 했을때 평균 분자량은 얼마인가 ?(단, 질소와 산소의 분자량은 각각 28, 32 이다.)",
    options: [
      "① 30.00",
      "❷ 29.87",
      "③ 28.84",
      "④ 26.47"
    ],
    correct_answer: "29.87"
  },
  {
    question: "화염의 온도를 높이려 할 때 해당되지 않는 조작은?",
    options: [
      "① 공기를 예열하여 사용한다.",
      "② 연료를 완전연소 시키도록 한다.",
      "③ 발열량이 높은 연료를 사용한다.",
      "❹ 과잉공기를 사용한다."
    ],
    correct_answer: "과잉공기를 사용한다."
  },
  {
    question: "위험 등급의 분류에서 특정 결함의 위험도가 가장 큰 것은?",
    options: [
      "① 안전(安全)",
      "② 한계성(限界性)",
      "③ 위험(危險)",
      "❹ 파탄(破綻)"
    ],
    correct_answer: "파탄(破綻)"
  },
  {
    question: "다음 보기중 가연성가스 중 폭발범위가 가장 큰 것과 가장 작은 것으로 묶어진 것은 ?",
    options: [
      "① a.e",
      "② a.f",
      "③ b.c",
      "❹ e.d"
    ],
    correct_answer: "e.d"
  },
  {
    question: "아래 보기항의 설명 중 틀린 것은?",
    options: [
      "① 가스 폭발 범위는 측정 조건을 바꾸면 변화한다.",
      "② 점화원의 에너지가 약할수록 폭굉유도거리는 길다.",
      "③ 혼합가스의 폭발한계는 르샤트리에 식으로 계산한다.",
      "❹ 가스 연료의 점화에너지는 가스농도에 관계없이 결정된 값이다."
    ],
    correct_answer: "가스 연료의 점화에너지는 가스농도에 관계없이 결정된 값이다."
  },
  {
    question: "다음은 연소를 위한 최소 산소량(Minimum oxygen for combustion,MOC)에 관한 사항이다. 옳은 것은?",
    options: [
      "❶ 가연성 가스의 종류가 같으면 함께 존재하는 불연성 가스의 종류에 따라 MOC 값이 다르다.",
      "② MOC를 추산하는 방법 중에는 가연성 물질의 연소상한계값(H)에 가연물 1몰이 완전 연소할 때 필요한 과잉 산소의 양론 계수값을 곱하여 얻는 방법도 있다.",
      "③ 계 내에 산소가 MOC 이상으로 존재하도록 하기 위한 방법으로 불활성 기체를 주입하여 계의 압력을 상승시키는 방법이 있다.",
      "④ 가연성 물질의 종류가 같으면 MOC 값도 다르다."
    ],
    correct_answer: "가연성 가스의 종류가 같으면 함께 존재하는 불연성 가스의 종류에 따라 MOC 값이 다르다."
  },
  {
    question: "프로판 가스를 10kg/h 사용하는 보일러의 이론 공기량은 매 시간당 몇 m3필요한가?",
    options: [
      "① 111.4 Nm3/h",
      "❷ 121.2 Nm3/h",
      "③ 131.5 Nm3/h",
      "④ 141.4 Nm3/h"
    ],
    correct_answer: "121.2 Nm3/h"
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
    question: "가단주철제 관 이음쇠의 종류가 아닌 것은?",
    options: [
      "① 소켓트",
      "② 니플",
      "③ 티",
      "❹ 가스켓"
    ],
    correct_answer: "가스켓"
  },
  {
    question: "금속재료에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 강에 인(P)의 함유량이 많으면 신율, 충격치는 저하된다.",
      "② 크롬 17-20(%), 니켈7-10(%) 함유한 강을 18-8 스테인레스강이라 한다.",
      "❸ 동과 주석의 합금은 황동이고 동과 아연의 합금은 청동이다.",
      "④ 금속가공 중에 생긴 잔류응력을 제거하기 위해 열처리한다."
    ],
    correct_answer: "동과 주석의 합금은 황동이고 동과 아연의 합금은 청동이다."
  },
  {
    question: "가스의 성질에 대한 설명으로 옳은 것은?",
    options: [
      "① 질소는 안정된 가스로 불활성 가스라고도 불리우고 고온에서도 금속과 화합하지 못한다.",
      "② 염소는 반응성이 강한 가스이며 강에 대해서 상온의 건조 상태에서도 현저한 부식성이 있다.",
      "❸ 암모니아는 산이나 할로겐과도 잘 화합한다.",
      "④ 산소는 액체 공기를 분류하여 제조하는 반응성이 강한 가스이며, 그 자신도 연소된다."
    ],
    correct_answer: "암모니아는 산이나 할로겐과도 잘 화합한다."
  },
  {
    question: "다중 원심펌프의 일반적인 성능 곡선은?",
    options: [
      "① ",
      "② ",
      "③ ",
      "❹ "
    ],
    correct_answer: ""
  },
  {
    question: "도시가스 배관에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 폭 8m 이상의 도로에는 1.2m 이상으로 묻는다.",
      "② 배관 접합은 원칙적으로 용접에 의한다.",
      "❸ 지하매설 배관 재료는 주철관으로 한다.",
      "④ 지상배관의 표면 색상은 황색으로 한다."
    ],
    correct_answer: "지하매설 배관 재료는 주철관으로 한다."
  },
  {
    question: "가장 높은 진공을 얻을 수 있는 펌프는?",
    options: [
      "❶ 분사펌프",
      "② 피스톤펌프",
      "③ 기름회전펌프",
      "④ 3단 티임이젝터"
    ],
    correct_answer: "분사펌프"
  },
  {
    question: "최고사용압력이 고압 또는 중압인 가스홀더에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 응축액을 외부로 뽑을 수 있는 장치를 설치 할 것",
      "❷ 압송기 배송기에는 냉각수의 흐름을 확인할 수 있는 장치를 설치 할 것",
      "③ 관의 입구 및 출구에는 온도압력의 변화에 의한 신축을 흡수한 조치를 할 것",
      "④ 응축액의 동결을 방지하는 조치를 할 것"
    ],
    correct_answer: "압송기 배송기에는 냉각수의 흐름을 확인할 수 있는 장치를 설치 할 것"
  },
  {
    question: "가연성 고압가스 저장탱크 외부에는 은백색도료를 바르고 주위에서 보기 쉽도록 가스의 명칭을 표시하여야 한다. 가스명칭 표시의 색상은?",
    options: [
      "① 검은글씨",
      "② 초록글씨",
      "❸ 붉은글씨",
      "④ 노란글씨"
    ],
    correct_answer: "붉은글씨"
  },
  {
    question: "LPG용 1단감압식 저압조정기의 조정압력범위를 옳게 나타낸 것은?",
    options: [
      "❶ 230mm H2O ∼ 330mm H2O",
      "② 500mm H2O ∼ 3,000mm H2O",
      "③ 230mm H2O ∼ 840mm H2O",
      "④ 500mm H2O ∼ 1,000mm H2O"
    ],
    correct_answer: "230mm H2O ∼ 330mm H2O"
  },
  {
    question: "조정압력이 3.3 KPa 이하인 조정기의 안전장치의 작동 정지 압력은?",
    options: [
      "① 2.8 - 5.0 KPa",
      "② 7KPa",
      "❸ 5.04 - 8.4 KPa",
      "④ 5.6 - 10.00KPa"
    ],
    correct_answer: "5.04 - 8.4 KPa"
  },
  {
    question: "내용적 50ℓ 의 용기에 120 kg/cm2 의 압력으로 충전되어 있는 가스를 같은 온도에서 40ℓ 의 용기에 채우면 압력(kg/cm2)은?",
    options: [
      "① 96 kg/cm2",
      "② 144 kg/cm2",
      "❸ 150 kg/cm2",
      "④ 180 kg/cm2"
    ],
    correct_answer: "150 kg/cm2"
  },
  {
    question: "가연성 가스압축기를 정지시키려 할 때 작업 안전상 그 조작 순서가 바르게 나열된 것은?",
    options: [
      "① ",
      "④ -⑤-",
      "① -",
      "③ -",
      "② ",
      "② ",
      "① -",
      "④ -",
      "③ -⑤-",
      "② ",
      "③ ",
      "① -",
      "③ -",
      "④ -⑤-",
      "② ",
      "❹ ",
      "④ -",
      "① -",
      "③ -⑤-",
      "② "
    ],
    correct_answer: ""
  },
  {
    question: "배관 설치 시 방식대책으로 옳지 않은 것은?",
    options: [
      "① 철근콘크리트 벽을 관통할 때는 슬리브 등을 설치한다",
      "❷ 점토질 토양에서는 배관이 접촉되도록 한다.",
      "③ 철근콘크리트 주변의 배관에는 전기적 절연 이음쇠를 사용한다.",
      "④ 매설관에서 지반면상으로 올라오는 관의 지중부분에는 방식조치를 하여야 한다."
    ],
    correct_answer: "점토질 토양에서는 배관이 접촉되도록 한다."
  },
  {
    question: "프로판 용기에 V:47, TP:31 로 각인이 되어 있다. 프로판의 충전상수가 2.35 일 때 충전량(kg)은?",
    options: [
      "① 10 kg",
      "② 15kg",
      "❸ 20kg",
      "④ 50kg"
    ],
    correct_answer: "20kg"
  },
  {
    question: "역화방지 장치를 설치할 장소로 옳지 않은 곳은?",
    options: [
      "① 가연성가스를 압축하는 압축기와 오토크레이브사이",
      "② 아세틸렌 충전용지관",
      "❸ 가연성기체를 압축하는 압축기와 저장탱크사이",
      "④ 아세틸렌의 고압건조기와 충전용교체밸브사이"
    ],
    correct_answer: "가연성기체를 압축하는 압축기와 저장탱크사이"
  },
  {
    question: "과열과 과냉이 없는 증기압축 냉동사이클에서 응축온도가 일정할 때 증발온도가 높을수록 성적계수는?",
    options: [
      "① 감소",
      "❷ 증가",
      "③ 불변",
      "④ 감소와 증가를 반복"
    ],
    correct_answer: "증가"
  },
  {
    question: "다음 그림의 냉동장치와 일치하는 행정 위치를 표시한 TS선도는?",
    options: [
      "❶ ",
      "② ",
      "③ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "Fisher식 정압기에 2차측 설정압력 이상 저하현상이 일어날 경우의 원인이 아닌 것은?",
    options: [
      "① 정압기의 능력부족",
      "❷ 저압 보조장치의 개폐불량",
      "③ 필터에 먼지부착",
      "④ 주 다이어그램의 파손"
    ],
    correct_answer: "저압 보조장치의 개폐불량"
  },
  {
    question: "직경 100mm, 행정 150mm, 회전수 600rpm, 체적효율이 0.8인 2기용 왕복압축기의 송출량(m3/min)은?",
    options: [
      "① 0.565 m3/min",
      "② 0.842 m3/min",
      "❸ 1.131 m3/min",
      "④ 1.540 m3/min"
    ],
    correct_answer: "1.131 m3/min"
  },
  {
    question: "산소가스를 취급하는 장치의 주의할 점으로 옳지 않은 것은?",
    options: [
      "① 고압배관에 철을 사용하지 않는다.",
      "② 윤활유를 사용하지 않는다.",
      "③ 아세틸렌이 혼입되지 않도록 한다.",
      "❹ 구리합금을 사용할 수 없다."
    ],
    correct_answer: "구리합금을 사용할 수 없다."
  },
  {
    question: "정압기를 선정할 때 고려해야 할 특성이 아닌 것은?",
    options: [
      "① 정특성",
      "② 동특성",
      "③ 유량특성",
      "❹ 공급압력 자동승압특성"
    ],
    correct_answer: "공급압력 자동승압특성"
  },
  {
    question: "공기 액화 분리 장치에서 산소를 압축하는 왕복동 압축기의 분출량이 6000kg/h 이고,27℃ 에서 안전변의 작동압력이 80kg/cm2 일 때 안전 밸브의 유효 분출면적은?",
    options: [
      "① 0.099cm2",
      "② 0.76cm2",
      "❸ 0.99cm2",
      "④ 1.19cm2"
    ],
    correct_answer: "0.99cm2"
  },
  {
    question: "공기 액화분리기(1시간의 공기압축량 1000 m3 이하제외)에 설치된 액화산소탱크내의 액화산소의 분석 주기는?",
    options: [
      "❶ 1일 1회 이상",
      "② 주 1회 이상",
      "③ 주 2회 이상",
      "④ 월 1회 이상"
    ],
    correct_answer: "1일 1회 이상"
  },
  {
    question: "시안화수소의 충전 시 주의사항으로 옳은 것은?",
    options: [
      "① 용기에 충전하는 시안화수소는 순도가 99.9% 이상이어야 한다.",
      "② 용기에 충전하는 시안화수소의 안정제로 아황산가스 또는 염산 등의 안정제를 첨가한다.",
      "③ 시안화수소를 충전하는 용기는 충전후 12 시간 정치하여야 한다.",
      "❹ 시안화수소를 충전한 용기는 1일 1회 이상 질산구리벤젠 등의 시험지로 가스누출 검사를 실시한다."
    ],
    correct_answer: "시안화수소를 충전한 용기는 1일 1회 이상 질산구리벤젠 등의 시험지로 가스누출 검사를 실시한다."
  },
  {
    question: "초저온 저장탱크의 내용적이 20,000ℓ 일 때 충전할 수 있는 액체 산소량은? (단, 액체산소의 비중은 1.14kg/ℓ 이다)",
    options: [
      "① 18,000kg",
      "② 16,350kg",
      "③ 22,800kg",
      "❹ 20,520kg"
    ],
    correct_answer: "20,520kg"
  },
  {
    question: "용기 보관실을 설치한 후 액화석유가스를 사용하여야 하는 시설은?",
    options: [
      "① 저장능력 500㎏ 이상",
      "② 저장능력 300㎏ 이상",
      "③ 저장능력 2500㎏ 이상",
      "❹ 저장능력 100㎏ 이상"
    ],
    correct_answer: "저장능력 100㎏ 이상"
  },
  {
    question: "독성가스 외의 고압가스 용기에 의한 운반기준으로 옳지 않은 것은?",
    options: [
      "① 차량의 앞뒤에 위험고압가스라는 경계표시를 한다.",
      "② 밸브가 돌출한 충전용기는 고정식 프로텍터 또는 캡을 부착 시킨다.",
      "③ 충전용기를 운반하는 때에는 넘어짐 등으로 인한 충격을 방지하기 위하여 충전용기를 단단하게 묶는다",
      "❹ 운반중의 충전용기는 항상 45℃ 이하를 유지한다."
    ],
    correct_answer: "운반중의 충전용기는 항상 45℃ 이하를 유지한다."
  },
  {
    question: "저장능력 18,000m3 인 산소 저장시설은 시장, 극장, 그 밖에 이와 유사한 시설로서 수용능력이 300인 이상인 건축물에 대해 몇 m의 안전거리를 두어야 하는가?",
    options: [
      "① 12m",
      "❷ 14m",
      "③ 17m",
      "④ 18m"
    ],
    correct_answer: "14m"
  },
  {
    question: "고압가스안전관리법에 의한 가스저장탱크 설치 시 내진설계를 해야 하는 것은?(단, 비가연성 및 비독성인 경우은 제외)",
    options: [
      "❶ 저장능력이 5톤 이상 또는 500m3 이상인 저장탱크",
      "② 저장능력이 3톤 이상 또는 300m3 이상인 저장탱크",
      "③ 저장능력이 2톤 이상 또는 200m3 이상인 저장탱크",
      "④ 저장능력이 1톤 이상 또는 100m3 이상인 저장탱크"
    ],
    correct_answer: "저장능력이 5톤 이상 또는 500m3 이상인 저장탱크"
  },
  {
    question: "도시가스 배관의 굴착으로 20m 이상 노출된 배관에 대하여는 누출된 가스가 체류하기 쉬운 장소에 가스노출경보기를 설치하는데, 설치 간격은?",
    options: [
      "① 5m",
      "② 10m",
      "③ 15m",
      "❹ 20m"
    ],
    correct_answer: "20m"
  },
  {
    question: "독성인 액화가스 저장탱크 주위에는 합산 저장 능력이 몇 톤 이상일 경우 방류둑을 설치하여야 하는가?",
    options: [
      "① 2 톤",
      "② 3 톤",
      "❸ 5 톤",
      "④ 10 톤"
    ],
    correct_answer: "5 톤"
  },
  {
    question: "고압가스 충전용기의 운반기준 중 동일차량에 적재운반 할 수 있는 것은?",
    options: [
      "❶ 가연성 가스와 산소",
      "② 염소와 수소",
      "③ 아세틸렌과 염소",
      "④ 암모니아와 염소"
    ],
    correct_answer: "가연성 가스와 산소"
  },
  {
    question: "특정설비에 대한 표시 중 기화장치에 각인 또는 표시해야 할 사항이 아닌 것은?",
    options: [
      "① 사용하는 가스의 명칭",
      "② 내압시험압력",
      "③ 가열방식 및 형식",
      "❹ 설비별 기호 및 번호"
    ],
    correct_answer: "설비별 기호 및 번호"
  },
  {
    question: "자동차에 고정된 탱크로 납붙임 또는 접합용기에 액화석유가스를 충전하는 때의 가스 압력은 35℃에서 얼마(MPa) 미만 이어야 하는가?",
    options: [
      "❶ 0.5",
      "② 0.3",
      "③ 0.2",
      "④ 0.1"
    ],
    correct_answer: "0.5"
  },
  {
    question: "액화석유가스 특정사용자의 안전관리에 관계되는 업무를 행하는 자는 안전교육을 받아야 하는데, 정기교육 기간으로 옳은 것은?",
    options: [
      "① 안전관리자 선임후 매 2년마다",
      "② 안전관리자 선임후 매 1년마다",
      "❸ 신규종사후 6월 이내",
      "④ 신규종사후 1년 이내"
    ],
    correct_answer: "신규종사후 6월 이내"
  },
  {
    question: "상온 상압의 공기 중 수소의 폭발범위는?",
    options: [
      "① 12.5 - 74.0 ％",
      "❷ 4.0 - 75.0 ％",
      "③ 2.7 - 36.0 ％",
      "④ 2.1 - 9.5 ％"
    ],
    correct_answer: "4.0 - 75.0 ％"
  },
  {
    question: "아세틸렌을 용기에 충전할 때에는 미리 용기에 다공질물을 고루 채워야 하는데 이때 다공질물의 다공도는?",
    options: [
      "① 62％이상, 95%미만",
      "② 70％이상,92%미만",
      "❸ 75％이상, 92%미만",
      "④ 80％이상,95%미만"
    ],
    correct_answer: "75％이상, 92%미만"
  },
  {
    question: "액화석유가스 충전시설에 대한 기준으로 지상에 설치된 저장탱크와 가스충전 장소와의 사이에 설치하여야 하는 것은?",
    options: [
      "① 역화방지기",
      "❷ 방호벽",
      "③ 드레인 세퍼레이터",
      "④ 정제장치"
    ],
    correct_answer: "방호벽"
  },
  {
    question: "용기부속품에 대한 표시 기호로서 옳지 않은 것은?",
    options: [
      "① 아세틸렌가스를 충전하는 용기의 부속품 : AG",
      "❷ 압축가스를 충전하는 용기의 부속품 : HG",
      "③ 초저온용기 및 저온용기의 부속품 : LT",
      "④ 액화석유가스를 충전하는 용기의 부속품 : LPG"
    ],
    correct_answer: "압축가스를 충전하는 용기의 부속품 : HG"
  },
  {
    question: "독성가스의 제해설비 중 충전설비에 적합한 기준이 아닌것은?",
    options: [
      "① 누출된 가스의 확산을 적절히 방지할 것",
      "② 독성가스의 흡입설비는 적절할 것",
      "③ 방독마스크 및 보호구는 항상 사용할 수 있는 상태로 유지할 것",
      "❹ 누출된 가스가 체류하지 않도록 강제통풍 시설을 할 것"
    ],
    correct_answer: "누출된 가스가 체류하지 않도록 강제통풍 시설을 할 것"
  },
  {
    question: "염화 제1구리 착염지로 아세틸렌 가스를 검지할 때 착염지의 변색은?",
    options: [
      "① 흑색",
      "② 청색",
      "❸ 적색",
      "④ 백색"
    ],
    correct_answer: "적색"
  },
  {
    question: "가정용 가스미터에 1000 mmH2O 라고 기재되어 있는 경우가 있다. 이것이 의미하는 것은?",
    options: [
      "❶ 기밀시험",
      "② 압력손실",
      "③ 최대유량",
      "④ 최저압력"
    ],
    correct_answer: "기밀시험"
  },
  {
    question: "크로마토그래피의 피이크가 다음 그림과 같이 기록되었을 때 피이크의 넓이(A)를 계산하는 식으로 가장 적합한 것은?",
    options: [
      "❶ Wh",
      "② 1/2Wh",
      "③ 2Wh",
      "④ 1/4Wh"
    ],
    correct_answer: "Wh"
  },
  {
    question: "가연성 가스 검출기의 종류가 아닌 것은?",
    options: [
      "① 안전등형",
      "② 간섭계형",
      "❸ 광조사형",
      "④ 열선형"
    ],
    correct_answer: "광조사형"
  },
  {
    question: "상대습도를 나타내지 않는 습도계는?",
    options: [
      "① 모발 습도계",
      "② 전기식 습도계",
      "❸ 건· 습구 습도계",
      "④ 전기저항식 습도계"
    ],
    correct_answer: "건· 습구 습도계"
  },
  {
    question: "마노미터(Manometer)에서 물 32.5mm 와 어떤 액체 50mm가 평형을 이루었을 때 이 액체의 비중은?",
    options: [
      "❶ 0.65",
      "② 1.52",
      "③ 2.0",
      "④ 0.8"
    ],
    correct_answer: "0.65"
  },
  {
    question: "계측기의 특성에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 계측기의 정오차로는 계통오차와 우연오차가 있다.",
      "② 측정기가 감지하여 얻은 최소의 변화량을 감도라고 한다.",
      "③ 계측기의 입력신호가 정상상태에서 다른 정상상태로 변화하는 응답은 과도응답이다.",
      "❹ 입력신호가 어떤 일정한 값에서 다른 일정한 값으로 갑자기 변화하는 것은 임펄스응답이다."
    ],
    correct_answer: "입력신호가 어떤 일정한 값에서 다른 일정한 값으로 갑자기 변화하는 것은 임펄스응답이다."
  },
  {
    question: "오르자트 가스분석계로 가스분석 시 적당한 온도는?",
    options: [
      "① 10-15℃",
      "② 15-25℃",
      "❸ 16-20℃",
      "④ 20-28℃"
    ],
    correct_answer: "16-20℃"
  },
  {
    question: "가스미터의 종류 중 추량식 가스미터가 아닌 것은?",
    options: [
      "❶ 막식형",
      "② 오리피스",
      "③ turbine형",
      "④ 벤튜리형"
    ],
    correct_answer: "막식형"
  },
  {
    question: "측정방법 중 간접 측정에 해당하는 것은?",
    options: [
      "① 저울로 물체의 무게를 측정",
      "❷ 시간과 부피로서 유량을 측정",
      "③ 블록 게이지로서 작은 길이를 측정",
      "④ 천평과 분동으로서 질량을 측정"
    ],
    correct_answer: "시간과 부피로서 유량을 측정"
  },
  {
    question: "1 기압에 해당되지 않은 것은?",
    options: [
      "① 1.013 bar",
      "② 1013 dyne/cm2",
      "❸ 1 torr",
      "④ 29.9 inHg"
    ],
    correct_answer: "1 torr"
  },
  {
    question: "차압식 유량계에서 압력차가 처음보다 2 배 커지고 관의 지름이 1/2 배로 되었다면, 나중 유량 ( Q2)과 처음 유량( Q1)과의 관계로 옳은 것은? (단, 나머지 조건은 모두 동일하다.)(문제 오류로 복원중입니다. 정확한 보기내용을 아시는분께서는 오류신고를 통하여 내용 작성 부탁드립니다. 정답은 3번입니다.)",
    options: [
      "① Q2= 1.412 Q1",
      "② Q2= 0.707 Q1",
      "❸ Q2= 0.3535 Q1",
      "④ 1 Q2= 복원중 Q1"
    ],
    correct_answer: "Q2= 0.3535 Q1"
  },
  {
    question: "비중이 0.9 인 액체 개방탱크에 탱크 하부로 부터 2 m위치에 압력계를 설치했더니 지침이 1.5kg/cm2 을 가르켰다. 이 때의 액위는?",
    options: [
      "❶ 14.7m",
      "② 147cm",
      "③ 17.4m",
      "④ 174cm"
    ],
    correct_answer: "14.7m"
  },
  {
    question: "일반적으로 계측기는 3 부분으로 구성 되어 있다 이에 속하지 않는 것은?",
    options: [
      "① 검출부",
      "② 전달부",
      "③ 수신부",
      "❹ 제어부"
    ],
    correct_answer: "제어부"
  },
  {
    question: "막식가스미터에서 크랭크 축이 녹슬거나 밸브와 밸브시트가 타르나 수분 등에 의해 점착 또는 고착되어 일어나는 현상은?",
    options: [
      "① 부동",
      "② 기어불량",
      "③ 떨림",
      "❹ 불통"
    ],
    correct_answer: "불통"
  },
  {
    question: "기체의 측정에 사용하는 가스미터의 설명과 관계없는 것은?",
    options: [
      "① 내용적이 일정한 드럼의 회전수에 의해 통과유량을 체적으로 구하는 형식이다.",
      "❷ 습식가스미터는 건식가스미터에 비해 정도(감도)가 좋고 대용량에 사용 한다.",
      "③ 건식가스미터는 습식가스미터에 비해 물을 사용하지 않으므로 정도(감도)가 나쁘다.",
      "④ 막식가스미터는 가정용 가스미터로 많이 사용 한다."
    ],
    correct_answer: "습식가스미터는 건식가스미터에 비해 정도(감도)가 좋고 대용량에 사용 한다."
  },
  {
    question: "오리피스, 노즐, 벤튜리 유량계의 공통점은?",
    options: [
      "① 직접계량",
      "② 초음속 유체만의 유량측정",
      "❸ 압력강하측정",
      "④ 가격이 싸며 설계가 간편"
    ],
    correct_answer: "압력강하측정"
  },
  {
    question: "압력계는 측정방법에 따라 1, 2차 압력계로 구분하는데, 1차 압력계는?",
    options: [
      "① 다이어프램 압력계",
      "② 벨로우즈 압력계",
      "❸ 마노미터",
      "④ 부르돈관 압력계"
    ],
    correct_answer: "마노미터"
  },
  {
    question: "부식성 유체의 압력을 측정하는 데 적절한 압력계는?",
    options: [
      "❶ 다이어프램형 압력계",
      "② 전기저항식 압력계",
      "③ 부유 피스톤식 압력계",
      "④ 피에조 전기 압력계"
    ],
    correct_answer: "다이어프램형 압력계"
  },
  {
    question: "가스미터 중 로우터 미터의 용량범위는?",
    options: [
      "① 1.5 - 200 m3/h",
      "② 0.2 - 3000 m3h",
      "③ 10 - 2000 m3/h",
      "❹ 100 - 5000 m3/h"                                                           
    ],
    correct_answer: "100 - 5000 m3/h"                                                           
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
    optionElement.textContent = option.trim();
    optionElement.addEventListener('click', () => {
      selectOption(optionElement, option.trim());
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
  selectedAnswer = answer;
}

function checkAnswerInstant() {
  if (selectedAnswer === null) {
    resultsElement.textContent = '답을 선택하세요!';
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