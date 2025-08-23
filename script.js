// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "폭발등급에 대한 설명중 옳은 것은?",
    options: [
      "① 1등급은 안전간격이 1.6mm이상이며 메탄, 에틸렌이 여기에 속한다.",
      "② 3등급은 안전간격이 0.5mm이하이며, 프로판,암모니아,아세톤이 여기에 속한다.",
      "③ 1등급은 안전간격이 0.6mm이상이며, 석탄가스,수소,아세틸렌이 여기에 속한다.",
      "❹ 2등급은 안전간격이 0.6~0.4mm이며, 에틸렌,석탄가스가 여기에 속한다."
    ],
    correct_answer: "2등급은 안전간격이 0.6~0.4mm이며, 에틸렌,석탄가스가 여기에 속한다."
  },
  {
    question: "천연가스의 일반적인 연소 특성에 대한 설명 중 가장 옳은 내용은?",
    options: [
      "① 지연성이다.",
      "❷ 화염전파속도가 늦다.",
      "③ 폭발범위가 넓다.",
      "④ 연소시 많은 공기가 필요하다."
    ],
    correct_answer: "화염전파속도가 늦다."
  },
  {
    question: "아염소산염류나 염소산염류는 산화성 고체로서, 위험물로 분류된 가장 큰 이유는?",
    options: [
      "① 폭발성 물질이다.",
      "② 물에 흡수되면 많은 열이 발생한다.",
      "③ 강력한 환원제이다.",
      "❹ 산소를 많이 함유한 강산화제이다."
    ],
    correct_answer: "산소를 많이 함유한 강산화제이다."
  },
  {
    question: "목탄이나 코크스는 고체연료의 연소형태중 어느 연소에 가장 가까운가?",
    options: [
      "① 증발연소",
      "❷ 표면연소",
      "③ 등심연소",
      "④ 내부연소"
    ],
    correct_answer: "표면연소"
  },
  {
    question: "다음 중 착화열에 대한 가장 적절한 표현은?",
    options: [
      "① 연료가 착화해서 발생하는 전 열량",
      "② 연료1kg이 착화해서 연소하여 나오는 총 발열량",
      "③ 외부로부터 열을 받지 않아도 스스로 연소하여 발생하는 열량",
      "❹ 연료를 초기온도로부터 착화온도까지 가열하는데 필요한 열량"
    ],
    correct_answer: "연료를 초기온도로부터 착화온도까지 가열하는데 필요한 열량"
  },
  {
    question: "가스의 반응속도를 설명한 것 중 가장 거리가 먼 내용은?",
    options: [
      "❶ 반응속도상수는 온도에 비례한다.",
      "② 일반적으로 촉매는 반응속도를 증가시켜준다.",
      "③ 반응은 원자나 분자의 충돌에 의해 이루어진다.",
      "④ 반응속도에 영향을 미치는 요인에는 온도, 압력 그리고 농도 등을 들수 있다."
    ],
    correct_answer: "반응속도상수는 온도에 비례한다."
  },
  {
    question: "연료의 위험도를 바르게 나타낸 것은?",
    options: [
      "❶ 폭발범위를 폭발 하한값으로 나눈값",
      "② 폭발 상한 값에서 폭발 하한값으로 뺀 값",
      "③ 폭발 상한값을 폭발 하한값으로 나눈 값",
      "④ 폭발범위를 폭발 상한값으로 나눈 값"
    ],
    correct_answer: "폭발범위를 폭발 하한값으로 나눈값"
  },
  {
    question: "불완전연소에 의한 매연, 먼지 등을 제거하는 집진장치 중 건식 집진장치가 아닌 것은?",
    options: [
      "① 백필터",
      "② 사이클론",
      "③ 멀티클론",
      "❹ 사이클론스크레버"
    ],
    correct_answer: "사이클론스크레버"
  },
  {
    question: "연소에서 사용되는 용어와 정의가 가장 올바르게 연결된 것은?",
    options: [
      "① 폭발- 정상연소",
      "② 착화점- 점화시 최대에너지",
      "❸ 연소범위- 위험도의 계산기준",
      "④ 자연발화-불씨에 의한 최고 연소시작 온도"
    ],
    correct_answer: "연소범위- 위험도의 계산기준"
  },
  {
    question: "연소에서 혼합비와 혼합기체 농도 표시에 대한 설명중 가장 올바른 것은?",
    options: [
      "① 이론 연공비는 이론 공기량과 같다.",
      "② 당량비가 1보다 작을 때의 연소를 과농연소라 한다.",
      "③ 이론 공연비에 대한 실제 공연비의 비를 당량비라 한다.",
      "❹ 연공비는 단위 질량의 공기에 대하여 공급되는 연료의 질량비이다."
    ],
    correct_answer: "연공비는 단위 질량의 공기에 대하여 공급되는 연료의 질량비이다."
  },
  {
    question: "난류연소의 가장 큰 원인이 되는 것은?",
    options: [
      "① 연료의 종류",
      "② 혼합기체의 조성",
      "③ 혼합기체의 온도",
      "❹ 혼합기체의 흐름 형태"
    ],
    correct_answer: "혼합기체의 흐름 형태"
  },
  {
    question: "일정압력하에서 -50℃의 탄산가스의 체적은 0℃에서의 몇 배가 되는가?",
    options: [
      "① 0.715",
      "❷ 0.817",
      "③ 0.871",
      "④ 0.945"
    ],
    correct_answer: "0.817"
  },
  {
    question: "LPG를 연료로 사용할 때의 장점으로 옳지 않은 것은?",
    options: [
      "① 도시가스에 비하여 열용량이 크다.",
      "② 발열량이 크다.",
      "❸ 특별한 가압장치가 필요하다.",
      "④ 조성이 일정하다."
    ],
    correct_answer: "특별한 가압장치가 필요하다."
  },
  {
    question: "가스의 특성에 대한 설명 중 가장 옳은 내용은? (문제오류로 복원중입니다. 보기의 정확한 내용을 아시는 분께서는 오류신고를 통하여 내용 작성 부탁드립니다. 정답은 3번입니다.)",
    options: [
      "① 염소는 공기보다 무거우며 무색이다.",
      "② 질소는 스스로 연소하지 않는 조연성이다.",
      "❸ 산화에틸렌은 분해폭발을 일으킬 위험이 있다.",
      "④ 복원중"
    ],
    correct_answer: "산화에틸렌은 분해폭발을 일으킬 위험이 있다."
  },
  {
    question: "다음 중 공기비를 옳게 표시한 것은?",
    options: [
      "❶ 실제공기량/이론공기량",
      "② 이론공기량/실제공기량",
      "③ 사용공기량/1-이론공기량",
      "④ 이론공기량/1-사용공기량"
    ],
    correct_answer: "실제공기량/이론공기량"
  },
  {
    question: "공기 중 폭발 하한계 값이 가장 낮은 가스는?",
    options: [
      "① 수소",
      "② 메탄",
      "❸ 아세틸렌",
      "④ 일산화탄소"
    ],
    correct_answer: "아세틸렌"
  },
  {
    question: "어느 연소가스를 분석한 결과 질소:75V%, 산소:8V%,이산화탄소:10 V%, 일산화탄소: 7 V% 이었다. 이연소가스의 평균 분자량 약 얼마인가?",
    options: [
      "① 23.81",
      "② 26.45",
      "❸ 29.92",
      "④ 32.58"
    ],
    correct_answer: "29.92"
  },
  {
    question: "나프타를 주원료로 열분해, 접촉분해, 부분연소 등으로 제조되는 가스는?",
    options: [
      "❶ 오일가스",
      "② 수성가스",
      "③ 고로가스",
      "④ 오프가스"
    ],
    correct_answer: "오일가스"
  },
  {
    question: "프로판 30 V% 및 부탄70 V% 의 혼합가스 1L가 완전 연소하는데 필요한 이론공기량은 약 몇 L 인가?",
    options: [
      "① 10",
      "② 20",
      "❸ 30",
      "④ 40"
    ],
    correct_answer: "30"
  },
  {
    question: "메탄올 96g과 아세톤 116g 을 함께 진공 상태의 용기에 놓고 기화시켜 25℃의 혼합 기체를 만들었다. 이때 전압력은? (단, 25℃에서 순수한 메탄올과 아세톤의 증기압 및 분자량은 각 각 96.5mmHg, 56mmHg 및 32, 58이다.)",
    options: [
      "① 76.3mmHg",
      "❷ 80.3mmHg",
      "③ 152.5mmHg",
      "④ 170.5mmHg"
    ],
    correct_answer: "80.3mmHg"
  },
  {
    question: "두께3mm내경 20mm 강관에 내압이 2kgf/cm 일때 원주 방향으로 강관에 작용하는 응력을 얼마인가?",
    options: [
      "① 3.33kgf/cm2",
      "❷ 6.67kgf/cm2",
      "③ 3.33kgf/m2",
      "④ 6.67kgf/m2"
    ],
    correct_answer: "6.67kgf/cm2"
  },
  {
    question: "배관에서 관경이 큰 관과 관경이 작은관을 연결할때 주로 사용하는 것은?",
    options: [
      "① T(Tee)",
      "❷ 레듀사(reduce)",
      "③ 플랜지( flange)",
      "④ 엘보우(Elbow)"
    ],
    correct_answer: "레듀사(reduce)"
  },
  {
    question: "물 수송량이 6,000L/min 전양정이 45m 효율이 75% 인 터빈 펌프의 소요 마력은 약 몇 KW 인가?",
    options: [
      "① 40",
      "② 47",
      "❸ 59",
      "④ 68"
    ],
    correct_answer: "59"
  },
  {
    question: "저온 재료의 요구 특성에 대한 설명중 옳지 않은 것은?",
    options: [
      "❶ 열팽창계수가 큰 것을 사용할 것",
      "② 저온에 대한 기계적 성질이 보증될 것",
      "③ 내용물에 대한 내식성이 좋을 것",
      "④ 가공성 및 용접성이 좋을 것"
    ],
    correct_answer: "열팽창계수가 큰 것을 사용할 것"
  },
  {
    question: "LPG충전소 내의 가스 사용시설 수리에 대한 설명으로 옳은 것은?",
    options: [
      "❶ 화기를 사용하는 경우에는 설비내부의 가연성 가스가 폭발하한계의1/4이하인 것을 확인하고 수리한다.",
      "② 충격에 의한 불꽃에 가스가 인화할 염려는 없다고 본다.",
      "③ 내압이 완전히 빠져 있으면 화기를 사용해도 좋다.",
      "④ 보울트를 조일때는 한쪽만 잘 조이면 된다."
    ],
    correct_answer: "화기를 사용하는 경우에는 설비내부의 가연성 가스가 폭발하한계의1/4이하인 것을 확인하고 수리한다."
  },
  {
    question: "산소제조장치 중 액화된 공기를 비등점 차이를 이용하여 산소와 질소로 분리하여 산소를 채취하는 장치는?",
    options: [
      "① 여과기",
      "② 흡수탑",
      "③ 팽창기",
      "❹ 정류기"
    ],
    correct_answer: "정류기"
  },
  {
    question: "증기압축식 냉동기에서 고온·고압의 액체 냉매를 교축작용에 의해 증발을 일으킬 수 있는 압력까지 감압시켜 주는 역할을 하는 기기는?",
    options: [
      "① 압축기",
      "❷ 팽창밸브",
      "③ 증발기",
      "④ 응축기"
    ],
    correct_answer: "팽창밸브"
  },
  {
    question: "암모니아를 취급하는 설비의 재료에 대한 설명 중 가장 거리가 먼 내용은?",
    options: [
      "① 저온이나 상온에서는 강재를 침식하지 않는다.",
      "② 고온·고압하에서 질화와 수소취성이 동시에 일어난다.",
      "③ 부식및 취성 방지를 위해 18-8스테인리스 강과 같은 재료를 사용한다.",
      "❹ 직접 접촉하는 부분에는 내식성 재료인 동 및 동합금을 사용하여야 한다."
    ],
    correct_answer: "직접 접촉하는 부분에는 내식성 재료인 동 및 동합금을 사용하여야 한다."
  },
  {
    question: "냄새가 나는 물질(부취제)의 구비조건으로 옳지 않은 것은?",
    options: [
      "① 화학적으로 안정하여야 한다.",
      "② 부식성이 없어야 한다.",
      "❸ 토양에 대한 투과성이 낮아야 한다.",
      "④ 물에 녹지 않아야 한다."
    ],
    correct_answer: "토양에 대한 투과성이 낮아야 한다."
  },
  {
    question: "회전식 펌프에 대한 일반적인 설명 중 가장 거리가 먼 내용은?",
    options: [
      "❶ 고점성 액체는 적당하지 않다.",
      "② 깃형과 기어형이 있다.",
      "③ 연속 회전하므로 토출액의 맥동이 적다.",
      "④ 용적식이다."
    ],
    correct_answer: "고점성 액체는 적당하지 않다."
  },
  {
    question: "LPG 공급, 소비설비에서 용기의 크기와 개수를 결정할 때 고려할 사항으로 가장 거리가 먼 것은?",
    options: [
      "① 소비자 가구수",
      "② 피크시의 기온",
      "❸ 감압방식의 결정",
      "④ 1가구당 1일의 평균가스 소비량"
    ],
    correct_answer: "감압방식의 결정"
  },
  {
    question: "내용적이 500L, 압력이 12MPa이고 용기 본수는 120개 일 때 압축가스의 저장능력은 몇 m3인가?",
    options: [
      "① 3,260",
      "② 5,230",
      "❸ 7,260",
      "④ 7,580"
    ],
    correct_answer: "7,260"
  },
  {
    question: "자동절체식 조정기를 사용할 때의 이점을 가장 잘 설명한 것은?",
    options: [
      "① 가스소비시 압력변동이 크다",
      "❷ 수동절체방식보다 발생량이 크다",
      "③ 용기교환시기가 짧고 계획배달이 가능하다",
      "④ 수동절체방식보다 용기설치 본수가 많다"
    ],
    correct_answer: "수동절체방식보다 발생량이 크다"
  },
  {
    question: "정압기의 특성 중 기준유량이 Qs일때 2차 압력을 Ps에 설정하고 유량이 Q2로 변화했을 경우 2차 압력 P2가 Ps로부터 벗어나는 것을 의미하는 것은?",
    options: [
      "❶ 오프셋(offset)",
      "② 락업(lock up)",
      "③ 쉬프트(shift)",
      "④ 스팬 (span)"
    ],
    correct_answer: "오프셋(offset)"
  },
  {
    question: "산소 압축기의 내부 윤활제로 주로 사용되는 것은?",
    options: [
      "❶ 물",
      "② 유지류",
      "③ 석유류",
      "④ 진한 황산"
    ],
    correct_answer: "물"
  },
  {
    question: "어떤 냉동기가 20℃의 물에서 -10℃의 얼음을 만드는데 톤당 50PSH 의 일이 소요되었다. 물의 융해열의 80Kcal/Kg 얼음의 비열을 0.5Kcal/Kg.℃라 할 때 냉동기의 성능 계수는 얼마인가?",
    options: [
      "① 30.05",
      "❷ 3.32",
      "③ 4.15",
      "④ 5.17"
    ],
    correct_answer: "3.32"
  },
  {
    question: "압연재나 단조재에서 비금속 개재물이 원인이 되어, 두 층 이상으로 벗겨지기 쉬운것을 무엇이라 하는가?",
    options: [
      "① 미생물 부식",
      "② 공동(cavitation)",
      "③ 공식(pitting)",
      "❹ 라미네이션(lamination)"
    ],
    correct_answer: "라미네이션(lamination)"
  },
  {
    question: "아래의 몰리에르 선도에서 증발기 내에서 기화된 냉매가 압축기의 흡입된 후 실린더에 의하여 압축되는 지점에 대해 가장 옳게 나타 낸 것은?",
    options: [
      "❶ 1-->2",
      "② 2-->3",
      "③ 4-->5",
      "④ 5-->1"
    ],
    correct_answer: "1-->2"
  },
  {
    question: "플레어스텍 구조 중 역화 및 공기 등과의 혼합폭발을 방지하기 위하여 가스 종류 등에 따라 갖추어야 할 역화방지 장치의 구성 요소로서 가장 거리가 먼 것은?",
    options: [
      "❶ PILOT BUNNER",
      "② LIQUID SEAL",
      "③ FLAME ARRESTOR",
      "④ VAPOR SEAL"
    ],
    correct_answer: "PILOT BUNNER"
  },
  {
    question: "금속의 성질을 개선하기 위한 열처리 중 풀림(annealing)에 대한 설명으로 가장 거리가 먼 내용은?",
    options: [
      "① 냉간가공이나 기계가공을 용이하게 한다.",
      "② 주로 재료를 연하게 하는 일잔적인 처리를 말한다.",
      "③ 가공 중의 내부응력을 제거한다.",
      "❹ 불림과 다른 점은 가열 후 급격하게 냉각시키는 것이다."
    ],
    correct_answer: "불림과 다른 점은 가열 후 급격하게 냉각시키는 것이다."
  },
  {
    question: "액화 염소 142g 을 기화시키면 표준상태에서 몇 L의 기체 염소가 되는가? (단, 염소의 분자량은 71로 한다.)",
    options: [
      "① 22.4",
      "❷ 44.8",
      "③ 67.2",
      "④ 89.6"
    ],
    correct_answer: "44.8"
  },
  {
    question: "용기 신규 검사후 16년 된 300L 용접용기의 재검사 주기는 ?",
    options: [
      "❶ 2년 마다",
      "② 3년 마다",
      "③ 4년 마다",
      "④ 5년 마다"
    ],
    correct_answer: "2년 마다"
  },
  {
    question: "도시가스 지하 배관에는 전기방식조치를 하여야 하며, 전위를 측정하기 위한 터미널(T/B)를 설치하여야 한다. 전위 측정용 터미널 설치간격으로 옳은 것은?",
    options: [
      "① 희생양극법에 의한 배관은 500M 이내",
      "❷ 배류법에 의한 배관은 300M 이내",
      "③ 외부전원법에 의한 배관은 300M 이내",
      "④ 전위측정용 터미널은 전기방식 종류 및 배관길이에 관계없이 1 개소만 설치"
    ],
    correct_answer: "배류법에 의한 배관은 300M 이내"
  },
  {
    question: "고압가스일반제조의 시설기준에 관한 안전 사항으로 ( )안에 알맞은 것은?",
    options: [
      "① 3",
      "❷ 5",
      "③ 8",
      "④ 10"
    ],
    correct_answer: "5"
  },
  {
    question: "충전용기를 차량에 적재운반 하는 경우에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 독성가스 운반 시 붉은 글씨로“위험고압가스 “독성가스”라는 경계표시를 한다.",
      "② 충전용기와 질산은 동일한 차량에 적재하여 운반하지 않는다.",
      "③ 납붙임용기 또는 접합용기에 고압가스를 충전운반시 용기의 이탈방지를 위하여 보호망을 씌운 후 운반한다.",
      "❹ 300KM 이상의 거리를 운행하는 경우에는 중간에 충분한 휴식을 취한 후 운행하여야 한다."
    ],
    correct_answer: "300KM 이상의 거리를 운행하는 경우에는 중간에 충분한 휴식을 취한 후 운행하여야 한다."
  },
  {
    question: "LP가스 용기를 제작하여 분체도료(폴리에스 테르계)도장을 하려 한다. 최소 도장 두께와 도장 횟수는?",
    options: [
      "① 25μm 1회 이상",
      "② 25μm 2회 이상",
      "❸ 60μm 1회 이상",
      "④ 60μm 2회 이상"
    ],
    correct_answer: "60μm 1회 이상"
  },
  {
    question: "액화석유가스 충전소 내에 설치할 수 없는 시설은?",
    options: [
      "① 충전소의 관계자가 근무하는 대기실",
      "② 자동차의 세정을 위한 자동세차시설",
      "③ 충전소에 출입하는 사람을 대상으로 한 자동판매기 및 현금자동지급기",
      "❹ 충전소의 관계자 및 충전소에 출입하는 사람을 대상으로 한 놀이방"
    ],
    correct_answer: "충전소의 관계자 및 충전소에 출입하는 사람을 대상으로 한 놀이방"
  },
  {
    question: "HCN 은 충전한 후 며칠이 경과하기 전에 다른 용기에 옮겨 충전하여야 하는가?",
    options: [
      "① 7일",
      "② 30일",
      "③ 50일",
      "❹ 60일"
    ],
    correct_answer: "60일"
  },
  {
    question: "산소 저장탱크의 주위에는 액상의 가스가 누출된 경우에 대비하여 방류둑을 설치해야 하는데 저장능력이 얼마 이상 일때 인가?",
    options: [
      "① 5톤 이상",
      "② 500톤 이상",
      "❸ 100톤 이상",
      "④ 3000톤 이상"
    ],
    correct_answer: "100톤 이상"
  },
  {
    question: "용기집합대가 설치된 특정고압가스사용시설의 고압가스설비에서 안전밸브를 설치하여야 하는 액화가스 저장능력의 기준은?",
    options: [
      "① 200Kg",
      "❷ 300Kg",
      "③ 400Kg",
      "④ 500Kg"
    ],
    correct_answer: "300Kg"
  },
  {
    question: "겨울에 LP 가스 용기의밸브가 얼었을 경우 조치방법으로 가장 적절한 것은?",
    options: [
      "① 더운물(60℃)을 사용한다.",
      "② 얼음을 깨고 사용한다.",
      "③ 가스토치로 녹여 사용한다.",
      "❹ 40℃이하의 열습포로 녹여 사용한다."
    ],
    correct_answer: "40℃이하의 열습포로 녹여 사용한다."
  },
  {
    question: "초저온 저장탱크의 내용적이 20,000L 일때 충전할 수 있는 액체 산소량은 몇kg 인가?",
    options: [
      "① 18,000",
      "② 16,350",
      "③ 22,800",
      "❹ 20,520"
    ],
    correct_answer: "20,520"
  },
  {
    question: "가스의 폭발 상한계에 영향을 주는 요인으로 가장 거리가 먼 것은?",
    options: [
      "① 온도",
      "② 가스의 농도",
      "③ 산소의 농도",
      "❹ 부피"
    ],
    correct_answer: "부피"
  },
  {
    question: "폭명기로도 불리우며, 약 530℃이상에서 폭발적으로 반응 하여 폭음을 내는 가스는?",
    options: [
      "① 산소",
      "❷ 수소",
      "③ 암모니아",
      "④ 메탄"
    ],
    correct_answer: "수소"
  },
  {
    question: "차량에 고정된 탱크에 의하여 가연성 가스를 운반할 때 비치하여야 할 소화기의 최소 수량은? (단, 능력단위는 고려치 않음.)",
    options: [
      "① 분말소화기1대",
      "❷ 분말소화기 2대",
      "③ 포말소화기1대",
      "④ 포말소화기 2대"
    ],
    correct_answer: "분말소화기 2대"
  },
  {
    question: "도시가스 사용시설의 배관에 대한 가장 옳은 설명은?",
    options: [
      "① 입상관은 화기와 1M 이상의 우회거리를 유지하여야 한다.",
      "❷ 관경 50MM 인 저압배관은 비파괴시험을 실시하지 않아도 된다.",
      "③ 배관의 접합은 모두 용접시공하여야 한다.",
      "④ 배관의이음부와 전기계량기와는 30cm이상의 거리를 유지하여야 한다."
    ],
    correct_answer: "관경 50MM 인 저압배관은 비파괴시험을 실시하지 않아도 된다."
  },
  {
    question: "자기압력기록계로 최고사용압력이 중압인 도시가스배관의 기밀시험을 하고자 한다. 배관의 용적이 15m3일때 기밀유지시간은 몇 분 이상이어야 하는가?",
    options: [
      "① 24분",
      "② 36분",
      "③ 240분",
      "❹ 360분"
    ],
    correct_answer: "360분"
  },
  {
    question: "언전관리자의 업무범위 중 가장 거리가 먼 내용은?",
    options: [
      "❶ 종업원에 대한 인사 및 노무관리",
      "② 가스시설의 안전유지",
      "③ 정기검사 결과 부적합 시설의 개선",
      "④ 안전관리규정 실시기록의 작성·보존"
    ],
    correct_answer: "종업원에 대한 인사 및 노무관리"
  },
  {
    question: "액화 석유가스의 안전관리 및 사업법상 용어의 정의를 나타낸 것 중 옳은 것은?",
    options: [
      "① 저장설비: 액화 석유가스를 저장하기 위한 설비로서 저장탱크, 소형저장탱크 및 용기를 말한다.",
      "② 저장탱크: 액화석유가스를 저장하기 위하여 지상또는 지하에 고정 설치된 탱크로서 그 저상능력이 3톤 이상인 탱크를 말한다.",
      "③ 충전설비: 용기 또는 차량에 고정된 탱크에 액화석유가스를 충전하기 위한 설비로서 충전기와 저장탱크에 부속된 펌프,압축기를 말한다.",
      "❹ 충전용기: 액화석유가스의 충전질량의 3분의 1 이상이 충전되어 있는 용기를 말한다."
    ],
    correct_answer: "충전용기: 액화석유가스의 충전질량의 3분의 1 이상이 충전되어 있는 용기를 말한다."
  },
  {
    question: "도시가스의 총발열량이 10,500Kcal/m3이고 도시가스의 비중이 0.66인 경우 도시가스의 웨버지수(W.I)는?",
    options: [
      "① 17,500",
      "❷ 12,925",
      "③ 10,500",
      "④ 6,300"
    ],
    correct_answer: "12,925"
  },
  {
    question: "화씨[℉]와 섭씨[℃]의 온도눈금 수치가 일치하는 경우의 절대온도[k]는?",
    options: [
      "① 201",
      "❷ 233",
      "③ 313",
      "④ 345"
    ],
    correct_answer: "233"
  },
  {
    question: "가스미터의 종류 중 추량식 가스미터가 아닌 것은?",
    options: [
      "❶ 로터리피스톤식미터",
      "② 오리피스미터",
      "③ 터빈식미터",
      "④ 벤츄리식미터"
    ],
    correct_answer: "로터리피스톤식미터"
  },
  {
    question: "시퀀셜 제어에 대한 설명 중 가장 거리가 먼 내용은?",
    options: [
      "① 개회로이다.",
      "② 승강기,교통신호 등이 이에 해당한다.",
      "❸ 제어결과에 따라 조작이 수동적으로 진행 순서에 따라 일방적으로 제어명령이 전해진다.",
      "④ 정해진 순서에 따라 가동 된다."
    ],
    correct_answer: "제어결과에 따라 조작이 수동적으로 진행 순서에 따라 일방적으로 제어명령이 전해진다."
  },
  {
    question: "액면 상에 부자의 움직이는 변위를 여러 가지 기구를 이용하여 지침을 움직여 액면을 측정하는 방식은?",
    options: [
      "❶ 플로트식 액면계",
      "② 차압식 액면계",
      "③ 정전용량식 액면계",
      "④ 퍼지식 액면계"
    ],
    correct_answer: "플로트식 액면계"
  },
  {
    question: "막식 가스미터 고장의 종류 중 부동(不動)의 의미를 가장 올바르게 나타낸 것은?",
    options: [
      "① 가스가 크랭크축이 녹슬거나 밸브와 밸브시트가 타르(tar)접착 등으로 통과하지 않는다.",
      "② 가스의 누출로 통과하나 정상적으로 미터가 작동하지 않아 부정확한 양만 측정 가능하다.",
      "❸ 가스가 미터는 통과하나 계량막의 파손, 밸브의 탈락 등으로 미터지침이 작동하지 않는 것이다",
      "④ 날개나 조절기에 고장이 생겨 회전장치에 고장이생긴 것이다."
    ],
    correct_answer: "가스가 미터는 통과하나 계량막의 파손, 밸브의 탈락 등으로 미터지침이 작동하지 않는 것이다"
  },
  {
    question: "보상도선,측온접점 및 기준접점,보호관 등으로 구성되어 있는 온도계는?",
    options: [
      "① 복사온도계",
      "❷ 열전온도계",
      "③ 광고온도계",
      "④ 저항온도계"
    ],
    correct_answer: "열전온도계"
  },
  {
    question: "어떤 비례 제어기가 50℃에서 100℃사이에 온도를 조절하는데 사용되고 있다. 만일 이 제어기기가 측정한 온도가 84℃에서 90℃ 일 때 비례대(propotional band)는 얼마인가?",
    options: [
      "① 10%",
      "② 11%",
      "❸ 12%",
      "④ 13%"
    ],
    correct_answer: "12%"
  },
  {
    question: "가스크로마토그래피에서 캐리어가스로 사용되지 않는 것은?",
    options: [
      "❶ O2",
      "② H2",
      "③ He",
      "④ N2"
    ],
    correct_answer: "O2"
  },
  {
    question: "용적식 유량계에 해당되지 않는 것은?",
    options: [
      "① 루트식",
      "❷ 피토관",
      "③ 오벌식",
      "④ 로터리피스톤식"
    ],
    correct_answer: "피토관"
  },
  {
    question: "다음의 제어동작 중 비례, 적분동작을 나타 낸 것은?",
    options: [
      "① ",
      "② ",
      "③ ",
      "❹ "
    ],
    correct_answer: ""
  },
  {
    question: "액주식압력계에 사용되는 구비조건으로 옳지 않은것은?",
    options: [
      "① 점도가 낮을것",
      "❷ 혼합성분일것",
      "③ 밀도변화가 적을 것",
      "④ 모세관 현상이 적을 것"
    ],
    correct_answer: "혼합성분일것"
  },
  {
    question: "압력계의 눈금이 1.2MPa 를 나타내고 있으며, 대기압이 750mmHg 일 때 절대 압력은 약 몇 KPa 인가?",
    options: [
      "① 1000",
      "② 1100",
      "③ 1200",
      "❹ 1300"
    ],
    correct_answer: "1300"
  },
  {
    question: "직접적으로 자동제어가 가장 어려운 액면계는?",
    options: [
      "❶ 유리관식 액면계",
      "② 부력 검출식 액면계",
      "③ 부작식 액면계",
      "④ 압력 검출식 액면계"
    ],
    correct_answer: "유리관식 액면계"
  },
  {
    question: "그림과 같이 시차 액주계의 놓이H가60mm 일 때 유속 V[m/s]는 약 얼마인가? (단, 비중 r 와 r' 는 1과 13.6이고 ,속도계수는 1, 중력가속도는 9.8m/s2이다.)",
    options: [
      "① 1.08",
      "② 3.36",
      "❸ 3.85",
      "④ 5.00"
    ],
    correct_answer: "3.85"
  },
  {
    question: "가스크로마토그래피에서 일반적으로 사용되지 않는 검출기는?",
    options: [
      "① TCD",
      "❷ RID",
      "③ FID",
      "④ ECD"
    ],
    correct_answer: "RID"
  },
  {
    question: "가스누출 확인 시험지와 검지가스가 옳게 연결된 것은?",
    options: [
      "❶ 리트머스시험지-산성,염기성가스",
      "② KI전분지- CO",
      "③ 염화파라듐지-HCN",
      "④ 연당지-할로겐가스"
    ],
    correct_answer: "리트머스시험지-산성,염기성가스"
  },
  {
    question: "가스분석용 검지관법에 있어 검지관의 검지 한계가 잘못 연결된 것은?",
    options: [
      "① 아세틸렌: 10 PPM",
      "② 벤젠: 0.1 PPM",
      "③ 암모니아: 5 PPM",
      "❹ 염소: 0.02 PPM"
    ],
    correct_answer: "염소: 0.02 PPM"
  },
  {
    question: "대량 수용가에 적합하며 100~5,000m3/h의 용량 범위를 가지는 가스미터는?",
    options: [
      "① 막식 가스미터",
      "② 습식 가스미터",
      "③ 마노미터",
      "❹ 루츠미터"
    ],
    correct_answer: "루츠미터"
  },
  {
    question: "가스크로마토그래피에서 이상적인 검출기의 구비조건으로 가장 거리가 먼 내용은?",
    options: [
      "① 안정성과 재현성이 좋아야 한다.",
      "② 모든 분석물에 대한 감응도가 비슷해야 좋다.",
      "③ 용질량에 대해 선형적인 감응도를 보여야한다.",
      "❹ 유속을 조절하여 감응시간을 빠르게 할수 있어야 한다."
    ],
    correct_answer: "유속을 조절하여 감응시간을 빠르게 할수 있어야 한다."
  },
  {
    question: "헴벨법으로 시료 가스를 분석하고자 한다. 시료가스 중 질소(N2)를 분석하는 방법은?",
    options: [
      "① 시료 가스 중 질소(N2)를 수산화칼륨 300g을 1L에 녹인 흡수액에 흡수시켜 가스부피의 감소량으로부터 분석한다.",
      "② 시료가스 중 질소(N2)를 삼산화황을 약25% 함유하는 발열 황산 용액에 흡수시켜 시료 가스 부피의 감소량으로 분석한다.",
      "③ 시료가스 중 질소(N2)를 연소시켜 시료가스 부피의 감소량으로부터 분석한다.",
      "❹ 흡수법 및 연소법으로 정량한 각 성분의 합계량을 100 으로부터 빼서 구한다.                                                                                             전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "흡수법 및 연소법으로 정량한 각 성분의 합계량을 100 으로부터 빼서 구한다.                                                                                             전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
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