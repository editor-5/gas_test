// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "다음 중 폭발등급 2급인 가스는?",
    options: [
      "① 수소",
      "② 프로판",
      "❸ 에틸렌",
      "④ 아세틸렌"
    ],
    correct_answer: "에틸렌"
  },
  {
    question: "전 폐쇄 구조인 용기 내부에서 폭발성 가스의 폭발이 일어났을 때 용기가 압력에 견디고 외부의 폭발성 가스에 인화할 우려가 없도록 한 방폭구조는?",
    options: [
      "❶ 내압방폭구조",
      "② 안전증방폭구조",
      "③ 특수방폭구조",
      "④ 유입방폭구조"
    ],
    correct_answer: "내압방폭구조"
  },
  {
    question: "LPG 에 대한 설명 중 틀린 것은?",
    options: [
      "① 포화탄화수소화합물이다.",
      "② 휘발유 등 유기용매에 용해된다.",
      "③ 상온에서는 기체이나 가압하면 액화된다.",
      "❹ 액체비중은 물보다 무겁고, 기체상태에서는 공기보다 가볍다."
    ],
    correct_answer: "액체비중은 물보다 무겁고, 기체상태에서는 공기보다 가볍다."
  },
  {
    question: "다음 연소에 대한 설명 중 옳은 것은?",
    options: [
      "① 착화온도와 연소온도는 항상 같다.",
      "❷ 이론연소온도는 실제연소온도보다 높다.",
      "③ 일반적으로 연소온도는 인화점보다 상당히 낮다.",
      "④ 연소온도가 그 인화점 보다 낮게 되어도 연소는 계속된다."
    ],
    correct_answer: "이론연소온도는 실제연소온도보다 높다."
  },
  {
    question: "1kg의 공기를 20℃, 1kg/cm2인 상태에서 일정 압력으로 가열팽창시켜서 부피를 처음의 5배로 하려고 한다. 이 때 필요한 온도 상승은 약 몇 ℃인가?",
    options: [
      "❶ 1172",
      "② 1292",
      "③ 1456",
      "④ 1561"
    ],
    correct_answer: "1172"
  },
  {
    question: "가스연료의 연소에 있어서 확산염을 사용할 경우 예혼합염을 사용하는 것에 비해 얻을 수 있는 장점이 아닌 것은?",
    options: [
      "① 역화의 위험이 없다.",
      "② 가스량의 조절범위가 크다.",
      "③ 가스의 고온 예열이 가능하다.",
      "❹ 개방대기 중에서도 완전연소가 가능하다."
    ],
    correct_answer: "개방대기 중에서도 완전연소가 가능하다."
  },
  {
    question: "0℃, 1기압에서 C3H8 5kg 의 체적은 약 몇 m3인가? (단, 이상기체로 가정하고, C의 원자량은 12, H의 원자량은 1이다)",
    options: [
      "① 0.63",
      "② 1.54",
      "❸ 2.55",
      "④ 3.67"
    ],
    correct_answer: "2.55"
  },
  {
    question: "다음 중 연료비가 가장 높은 것은?",
    options: [
      "① 반역청탄",
      "② 갈탄",
      "③ 저도역청탄",
      "❹ 무연탄"
    ],
    correct_answer: "무연탄"
  },
  {
    question: "다음 중 기상 폭발 발생을 예방하기 위한 대책으로 옳지 않은 것은?",
    options: [
      "① 환기에 의해 가연성 기체의 농도상승을 억제한다.",
      "② 집진장치 등으로 분진 및 분무의 퇴적을 방지한다.",
      "❸ 휘발성 액체를 불활성 기체와 접촉을 피하기 위해 공기로 차단한다.",
      "④ 반응에 의해 가연성 기체의 발생 가능성을 검토하고, 반응을 억제하거나 또는 발생한 기체를 밀봉한다."
    ],
    correct_answer: "휘발성 액체를 불활성 기체와 접촉을 피하기 위해 공기로 차단한다."
  },
  {
    question: "다음 연료 중 착화온도가 가장 낮은 것은?",
    options: [
      "① 벙커C유",
      "② 무연탄",
      "③ 역청탄",
      "❹ 목재"
    ],
    correct_answer: "목재"
  },
  {
    question: "가연성 증기를 발생하는 액체 또는 고체가 공기와 혼합하여 기상부에 다른 불꽃이 닿았을 때 연소가 일어나는데 필요한 최저의 액체 또는 고체의 온도를 의미하는 것은?",
    options: [
      "① 이슬점",
      "❷ 인화점",
      "③ 발화점",
      "④ 착화점"
    ],
    correct_answer: "인화점"
  },
  {
    question: "10L의 C3H8 가스를 완전연소시키는데 필요한 산소의 부피 및 연소 후 발생하는 이산화탄소의 부피는 각각 얼마인가?",
    options: [
      "① O2 : 30L, CO2 : 30L",
      "❷ O2 : 50L, CO2 : 30L",
      "③ O2 : 40L, CO2 : 25L",
      "④ O2 : 20L, CO2 : 40L"
    ],
    correct_answer: "O2 : 50L, CO2 : 30L"
  },
  {
    question: "다음 연소범의에 대한 설명 중 틀린 것은?",
    options: [
      "① 수소 가스의 연소범위는 약 4~75%이다.",
      "❷ 가스의 온도가 높아지면 연소범위는 좁아진다.",
      "③ C2H2 는 자체분해폭발이 가능하므로 연소상한계를 100%로도 볼 수 있다.",
      "④ 연소범위는 가연성기체의 공기와의 혼합비율에 있어 점화원에 의해 필연적으로 연소가 일어날 수 있는 범위를 말한다."
    ],
    correct_answer: "가스의 온도가 높아지면 연소범위는 좁아진다."
  },
  {
    question: "화학 반응소도를 지배하는 요인에 대한 설명으로 가장 옳은 것은?",
    options: [
      "① 압력이 증가하면 반응속도는 항상 증가한다.",
      "② 생성물질의 농도가 커지면 반응속도는 항상 증가한다.",
      "③ 자신은 변하지 않고 다른 물질의 화학변화를 촉진하는 물질을 부촉매라고 한다.",
      "❹ 온도가 높을수록 반응속도가 증가한다."
    ],
    correct_answer: "온도가 높을수록 반응속도가 증가한다."
  },
  {
    question: "소형가열로, 열처리로 등 비교적 소규모의 가열장치에 사용되며 공기압을 높일수록 무화 공기량이 저감되는 버너는?",
    options: [
      "① 고압기류식 버너",
      "❷ 저압기류식 버너",
      "③ 유압식 버너",
      "④ 선회식 버너"
    ],
    correct_answer: "저압기류식 버너"
  },
  {
    question: "가연성 물질의 성질에 대한 설명으로 옳은 것은?",
    options: [
      "① 끓는점이 낮으면 인화의 위험성이 낮아진다.",
      "❷ 가연성액체는 온도가 상승하면 점성이 적어지고 화재를 확대시킨다.",
      "③ 전기전도도가 낮은 인화성 액체는 유동이나 여과 시 정전기를 발생시키지 않는다.",
      "④ 일반적으로 가연성액체는 물보다 비중이 작으므로 연소 시 축소된다."
    ],
    correct_answer: "가연성액체는 온도가 상승하면 점성이 적어지고 화재를 확대시킨다."
  },
  {
    question: "연소의 3요소에 해당하지 않는 것은?",
    options: [
      "① 가연성 물질",
      "② 산소공급원",
      "③ 점화원",
      "❹ 과압력원"
    ],
    correct_answer: "과압력원"
  },
  {
    question: "저발열량이 46MJ/kg인 연료 1kg 을 완전 연소시켰을 때 연소가스의 평균 정압비열이 1.3kJ/kg·K이고 연소가스량은 22kg이 되었다. 연소전의 온도가 25℃이었을 때 단열 화염온도는 약 몇 ℃인가?",
    options: [
      "① 1341",
      "② 1608",
      "❸ 1633",
      "④ 1728"
    ],
    correct_answer: "1633"
  },
  {
    question: "상온, 표준대기압 하에서 어떤 혼합기체의 각 성분에 대한 부피백분율이 각각 CO2 20%, N2 20%, O2 40%, Ar 20%이면 이 혼합기체 중 CO2 분압은 약 몇 mmHg인가?",
    options: [
      "❶ 152",
      "② 252",
      "③ 352",
      "④ 452"
    ],
    correct_answer: "152"
  },
  {
    question: "연소에 있어서 연소의 고발열량과 진발열량과의 의미의 차이는 무엇인가?",
    options: [
      "① 연소물질이 무엇인가에 따라 고발열량과 진발열량으로 구분된다.",
      "② 연소로 생긴 물을 실제 기체로 생각하는 것이다.",
      "❸ 연소로 인해 생긴 수증기의 증발 잠열을 포함하는가 또는 아닌가에 의한 차이다.",
      "④ 연소열과는 무관한 것이다."
    ],
    correct_answer: "연소로 인해 생긴 수증기의 증발 잠열을 포함하는가 또는 아닌가에 의한 차이다."
  },
  {
    question: "포스겐가스를 제조하는 방법으로 옳은 것은?",
    options: [
      "① 물과 염화수소를 저온으로 반응시켜 제조한다.",
      "❷ 일산화탄소를 활성탄 촉매 하에 염소와 반응시킨다.",
      "③ 일산화탄소와 염화주석을 고온으로 반응시켜 제조한 다.",
      "④ 염화수소와 산소를 고온으로 반응시켜 제조한다."
    ],
    correct_answer: "일산화탄소를 활성탄 촉매 하에 염소와 반응시킨다."
  },
  {
    question: "직경 100mm, 행정150mm, 회전수600rpm, 체적효율이 0.8인 2기통 왕복압축기의 송출량은 약 몇m3/min인가?",
    options: [
      "① 0.57",
      "② 0.84",
      "❸ 1.13",
      "④ 1.54"
    ],
    correct_answer: "1.13"
  },
  {
    question: "정압기의 기본구조 중 2차 압력을 감지하여 그 2차 압력의 변동을 메인밸브로 전하는 부분은?",
    options: [
      "❶ 다이어프램",
      "② 조정밸브",
      "③ 슬리브",
      "④ 웨이트"
    ],
    correct_answer: "다이어프램"
  },
  {
    question: "정압기의 부속설비에 대한 설치 및 유지관리에 대한 사항으로 옳은 것은?",
    options: [
      "① 정압기 입구배관에 가스압력이 비정상적으로 상승한 경우 통부할 수 있는 경보장치를 설치한다.",
      "② 단독사용자에게 가스를 공급하는 정압기에서 가스가 누출 시 공급자가 상주하는 곳에 통보하는 설비를 한다.",
      "③ 정압기에 바이패스관을 설치하는 경우에는 밸브를 설치하고 그 밸브에 봉인조치를 한다.",
      "❹ 단독사용자에게 가스를 공급하는 정압기는 정압기실 출입문 개폐여부 및 긴급차단밸브 개폐여부를 통보하는 경보설비를 설치하지 아니한다."
    ],
    correct_answer: "단독사용자에게 가스를 공급하는 정압기는 정압기실 출입문 개폐여부 및 긴급차단밸브 개폐여부를 통보하는 경보설비를 설치하지 아니한다."
  },
  {
    question: "관내부의 마찰계수를 0.002, 길이 100m, 관의 내경 40mm, 유속 1m/s, 중력가속도 9.8m/s2 일 때 마찰에 의한 수두손실은 약 몇 m인가?",
    options: [
      "① 0.0102",
      "② 0.102",
      "❸ 1.02",
      "④ 10.2"
    ],
    correct_answer: "1.02"
  },
  {
    question: "저장탱크에 설치하는 안전밸브는 지면에서 몇m 이상의 높이에 가스방출관을 설치하여야 하는가?",
    options: [
      "① 2",
      "❷ 5",
      "③ 7",
      "④ 10"
    ],
    correct_answer: "5"
  },
  {
    question: "LPG 공급소비시설의 설계 시 유의사항으로 가장 거리가 먼 것은?",
    options: [
      "① 사용목적에 합당한 기능을 가지고 사용상 안전할 것",
      "② 취급이 용이하고, 사용에 편리할 것.",
      "❸ 모양에 관계없이 관련시설과의 조화가 되어 있을 것",
      "④ 구조가 간단하고, 시공이 용이할 것"
    ],
    correct_answer: "모양에 관계없이 관련시설과의 조화가 되어 있을 것"
  },
  {
    question: "용기 내압시험 시 뷰렛은 300㎖의 용적을 가지고 있으며 전 증가는 200㎖, 항구증가는 15㎖ 일 때 이 용기의 항구 증가율은?",
    options: [
      "① 5%",
      "② 6%",
      "❸ 7.5%",
      "④ 8.5%"
    ],
    correct_answer: "7.5%"
  },
  {
    question: "특수강에 내마멸성, 내식성을 부여하기 위하여 주로 첨가하는 원소는?",
    options: [
      "① 니켈",
      "❷ 크롬",
      "③ 몰리브덴",
      "④ 망간"
    ],
    correct_answer: "크롬"
  },
  {
    question: "충전용기의 정의로 옳게 표현된 것은?",
    options: [
      "❶ 1/2이상 충전되어 있는 상태의 용기",
      "② 2/3이상 충전되어 있는 상태의 용기",
      "③ 3/5이상 충전되어 있는 상태의 용기",
      "④ 4/5이상 충전되어 있는 상태의 용기"
    ],
    correct_answer: "1/2이상 충전되어 있는 상태의 용기"
  },
  {
    question: "가스계량기의 건물 외부에 설치할 때 바닥으로부터 높이는 얼마가 가장 적당한가? (단.30m3/hr 미만에 한한다.)",
    options: [
      "❶ 1.6m 이상 2m 이내",
      "② 1.6m 이하",
      "③ 2.0m 이상",
      "④ 2.0m 이하"
    ],
    correct_answer: "1.6m 이상 2m 이내"
  },
  {
    question: "천연가스의 연소열을 이용하여 LNG를 기화시키는 기화장치는?",
    options: [
      "① ORV",
      "❷ SMV",
      "③ 중간열매체식",
      "④ 전기가열식"
    ],
    correct_answer: "SMV"
  },
  {
    question: "증기압축 냉동기에서 냉매의 엔탈피가 일정한 기구는?",
    options: [
      "① 응축기",
      "② 증발기",
      "③ 압축기",
      "❹ 팽창밸브"
    ],
    correct_answer: "팽창밸브"
  },
  {
    question: "이음매 없는 용기 제조 시 재료시험 항목이 아닌 것은?",
    options: [
      "① 인장시험",
      "② 충격시험",
      "③ 압궤시험",
      "❹ 기밀시험"
    ],
    correct_answer: "기밀시험"
  },
  {
    question: "고압가스 용기의 충전구에 관한 내용 중 옳은 것은?",
    options: [
      "① 가연성 가스의 경우 대개 오른 나사이다.",
      "② 충전가스가 암모니아인 경우 왼나사이다.",
      "③ 가스 충전구는 반드시 나사형이어야 한다.",
      "❹ 가연성 가스의 경우 대개 왼 나사이다."
    ],
    correct_answer: "가연성 가스의 경우 대개 왼 나사이다."
  },
  {
    question: "고압장치 배관에 발생된 열응력을 제거하기 위한 이음이 아닌 것은?",
    options: [
      "① 루프형",
      "② 슬라이드형",
      "③ 벨로우즈형",
      "❹ 플랜지형"
    ],
    correct_answer: "플랜지형"
  },
  {
    question: "시안화수소를 충전한 용기의 충전 후 정치시간과 누출검사에 대하여 옳게 설명한 것은?",
    options: [
      "❶ 24시간 정치하고 1일 1회 이상 질산구리벤젠 등의 시험지로 가스누출검사를 실시한다.",
      "② 24시간 정치하고 1일 2회 이상 염화제1동 등의 시험지로 가스누출검사를 실시한다.",
      "③ 48시간 정치하고 1일 1회 이상 질산구리벤젠 등의 시험지로 가스누출검사를 실시한다.",
      "④ 48시간 정치하고 1일 2회 이상 염화제1동 등의 시험지로 가스누출검사를 실시한다."
    ],
    correct_answer: "24시간 정치하고 1일 1회 이상 질산구리벤젠 등의 시험지로 가스누출검사를 실시한다."
  },
  {
    question: "펌프를 운전하였을 때 주기적으로 한숨을 쉬는 듯한 상태가 되어 입, 출구 압력계의 지침이 흔들리고 동시에 송출유량이 변화하는 현상과 이에 대한 대책을 옳게 설명한 것은?",
    options: [
      "❶ 서어징현상 : 회전차 안내 깃의 모양 등을 바꾼다.",
      "② 캐비테이션 : 펌프설치 위치를 낮추어 흡입양정을 짧게 한다.",
      "③ 수격작용 : 플라이휠을 설치하여 펌프의 속도가 급격히 변하는 것을 막는다.",
      "④ 베이퍼록 현상 : 흡입관의 지름을 크게 하고 펌프의 설치위치를 최대한 낮춘다."
    ],
    correct_answer: "서어징현상 : 회전차 안내 깃의 모양 등을 바꾼다."
  },
  {
    question: "도시가스 정압기에 설치되어있는 원격감시장치가 아닌 것은?",
    options: [
      "❶ 가스차단장치",
      "② 경보장치",
      "③ 가스누출검지통보설비",
      "④ 출입문 개폐통보장치"
    ],
    correct_answer: "가스차단장치"
  },
  {
    question: "그림은 수소용기의 각인이다 ❶V ❷Tp ❸Fp의 의미에 대하여 바르게 나타낸 것은?",
    options: [
      "① ",
      "① 내용적",
      "② 최고충전압력",
      "③ 내압시험압력",
      "② ",
      "① 총부피",
      "② 내압시험압력",
      "③ 기밀시험압력",
      "❸ ",
      "① 내용적",
      "② 내압시험압력",
      "③ 최고충전압력",
      "④ ",
      "① 내용적",
      "② 사용압력",
      "③ 기밀시험압력"
    ],
    correct_answer: ""
  },
  {
    question: "다음 가스 중 불연성 가스가 아닌 것은?",
    options: [
      "① 아르곤",
      "② 탄산가스",
      "③ 질소",
      "❹ 일산화탄소"
    ],
    correct_answer: "일산화탄소"
  },
  {
    question: "차량에 고정된 저장탱크를 이용하여 고압가스를 이송하려 할 때 저장탱크는 그의 후면과 차량의 뒷범퍼와의 사이의 수평거리가 몇 ㎝ 이상이 되도록 고정시켜야 하는가? (단, 후부 취출식 탱크 이외의 탱크이다.)",
    options: [
      "① 20",
      "❷ 30",
      "③ 40",
      "④ 50"
    ],
    correct_answer: "30"
  },
  {
    question: "고압가스일반제조의 시설기준에 대한 설명 중 옳은 것은?",
    options: [
      "① 초저온저장탱크에는 환형유리관 액면계를 설치할 수 있다.",
      "② 고압가스설비에 장치하는 압력계는 상용압력의 1.1배 이상 2배 이하의 최고눈금이 있어야 한다.",
      "③ 독성가스 및 공기보다 무거운 가연성 가스의 제조 시 설에는 역류방지밸브를 설치하여야 한다.",
      "❹ 저장능력이 1000톤 이상인 가연성가스(액화가스)의 지상 저장탱크의 주위에는 방류둑을 설치하여야 한다."
    ],
    correct_answer: "저장능력이 1000톤 이상인 가연성가스(액화가스)의 지상 저장탱크의 주위에는 방류둑을 설치하여야 한다."
  },
  {
    question: "위험평가는 크게 정성적 위험평가와 정량적 위험평가로 구분할 수 있다. 정량적 위험평가의 대표적인 기법으로, 하나의 특정한 사고에 집중한 연역적 기법으로 사건의 원인을 결정하는 위험평가 기법은?",
    options: [
      "① HAZOP",
      "❷ FTA",
      "③ ETA",
      "④ FMEA"
    ],
    correct_answer: "FTA"
  },
  {
    question: "고압가스 충전용기의 운반에 대한 설명 중 틀린 것은?",
    options: [
      "① 밸브가 돌출된 충전용기는 고정식 프로텍터를 부착시켜야 한다.",
      "② 충전용기를 로프로 견고하게 결속해야 한다.",
      "③ 중전용기는 항상 40℃ 이하로 유지해야 한다.",
      "❹ 운반 시 보기 쉬운 곳에 황색글씨로 위험표시를 하여야 한다."
    ],
    correct_answer: "운반 시 보기 쉬운 곳에 황색글씨로 위험표시를 하여야 한다."
  },
  {
    question: "아세틸렌을 용기에 충전하는 때에는 미리 용기에 다공물질을 고루 채워 다공도가 75%이상 92%미만이 되도록 한 후 어떤 물질로 고루 침윤시키고 충전해야 하는가?",
    options: [
      "① 질소",
      "② 에틸렌",
      "❸ 아세톤",
      "④ 암모니아"
    ],
    correct_answer: "아세톤"
  },
  {
    question: "냉동기를 제조하고자 하는 자가 갖추어야 할 제조설비가 아닌 것은?",
    options: [
      "① 프레스 설비",
      "② 조립설비",
      "③ 용접설비",
      "❹ 도막측정기"
    ],
    correct_answer: "도막측정기"
  },
  {
    question: "고압가스 충전용기의 운반기중 중 틀린 것은?",
    options: [
      "① 차량 등에는 고무판 또는 가마니 등을 항상 갖춰 충전용기를 차에 싣거나 내릴 때에는 충격을 최소한으로 방치할 것.",
      "❷ 충전용기는 항상 자전거 또는 오토바이에 적재하여 운반 할 것.",
      "③ 가연성가스 또는 산소를 운반하는 차량에는 소화설비 및 재해발생 방지를 위한 응급조치 자재 및 공구 등을 휴대할 것.",
      "④ 독성가스를 차량에 적재하여 운반할 때에는 보호구 및 재해발생 방지를 위한 응급조치 자재 및 공구 등을 휴대할 것."
    ],
    correct_answer: "충전용기는 항상 자전거 또는 오토바이에 적재하여 운반 할 것."
  },
  {
    question: "고압가스 특정제조시설 중 배관의 누출확산 방지를 휘한 시설 및 기술기준으로 옳지 않은 것은?",
    options: [
      "① 시가지, 하천, 터널 및 수로 중에 배관을 설치하는 경우에는 누출가스의 확산방지조치를 한다.",
      "② 사질토 등의 특수성 지방(해저 제외) 중에 배관을 설치하는 경우에는 누출가스의 확산방지조치를 한다.",
      "❸ 고압가스의 온도와 압력에 따라 배관의 유지관리에 필요한 거리를 확보한다.",
      "④ 고압가스의 종류에 따라 누출된 가스의 확산방지조치를 한다."
    ],
    correct_answer: "고압가스의 온도와 압력에 따라 배관의 유지관리에 필요한 거리를 확보한다."
  },
  {
    question: "공기액화분리장치의 액화산소 5L 중에 메탄이 360㎎, 에틸렌이 196㎎이 섞여 있다면, 탄화수소 중 탄소의 질량(㎎)은 얼마인가?",
    options: [
      "❶ 438",
      "② 458",
      "③ 469",
      "④ 500"
    ],
    correct_answer: "438"
  },
  {
    question: "독성가스 사용시설중 배관, 플랜지 및 밸브 접합에 대한 내용으로 가장 적당한 것은?",
    options: [
      "① 접합은 반드시 가용접에 의하여 한다.",
      "❷ 용접을 원칙으로 하되 안전상 필요한 강도를 가진 플랜지 접합으로 할 수 있다.",
      "③ 반드시 필요한 인장도를 가진 플랜지를 사용한다.",
      "④ 내산성 재료에 필요한 강도를 가지는 플랜지를 원칙으로 사용한다."
    ],
    correct_answer: "용접을 원칙으로 하되 안전상 필요한 강도를 가진 플랜지 접합으로 할 수 있다."
  },
  {
    question: "액화 가스를 충전한 차량에 고정된 탱크는 그 내부에 액면 요동을 방지하기 위하여 무엇을 설치하는가?",
    options: [
      "① 슬리튜브",
      "❷ 방파판",
      "③ 긴급차단장치",
      "④ 역류방지밸브"
    ],
    correct_answer: "방파판"
  },
  {
    question: "액화석유가스 공급시설에 사용되는 기화기 설치의 장점에 대하여 설명 중 가장 거리가 먼 것은?",
    options: [
      "① 가스조성이 일정하다.",
      "❷ 공급압력이 일정하다.",
      "③ 연속공급이 가능하다.",
      "④ 한랭 시에도 공급이 가능하다."
    ],
    correct_answer: "공급압력이 일정하다."
  },
  {
    question: "가연성가스의 제조설비 또는 전기설비는 방폭성능을 가지는 구조이어야 한다. 방폭성능 구조에서 제외되는 가스는?",
    options: [
      "❶ 브롬화메탄",
      "② 프로판",
      "③ 수소",
      "④ 메탄"
    ],
    correct_answer: "브롬화메탄"
  },
  {
    question: "고압가스 충전용기의 운반기준 중 동일 차량에 적재 운반할 수 없는 것은?",
    options: [
      "❶ 염소와 아세틸렌",
      "② 질소와 수소",
      "③ 에틸렌과 수소",
      "④ 메탄과 수소"
    ],
    correct_answer: "염소와 아세틸렌"
  },
  {
    question: "구내에서 발생한 대형 도시가스 사고 중 대구 도시가스 폭발사고의 주원인은 무엇인가?",
    options: [
      "① 내관 부식",
      "② 내관의 응력부족",
      "③ 부적절한 매설",
      "❹ 타 공사지 도시가스 배관 손상"
    ],
    correct_answer: "타 공사지 도시가스 배관 손상"
  },
  {
    question: "내용적이 50L 인 용기에 프로판가스를 충전하는 때에는 얼마의 충전량(kg)을 초과할 수 없는가? (단, 충전상수 프로판의 경우 2.35이다)",
    options: [
      "① 20",
      "② 20.4",
      "❸ 21.3",
      "④ 24.4"
    ],
    correct_answer: "21.3"
  },
  {
    question: "최고 충전압력이 12MPa 인 압축가스 용기의 내압시험 압력은 몇 MPa인가?",
    options: [
      "① 16",
      "② 18",
      "❸ 20",
      "④ 25"
    ],
    correct_answer: "20"
  },
  {
    question: "저장탱크에 액화석유가스를 충전하는 때에는 가스의 용량이 상용의 온도에서 그 저장탱크 내용적의 몇%를 넘지 아니하여야 하는가?",
    options: [
      "① 75",
      "② 80",
      "③ 85",
      "❹ 90"
    ],
    correct_answer: "90"
  },
  {
    question: "아세틸렌가스 또는 압력이 9.8MPa 이상인 압축가스를 용기에 충전하는 시설에서 방호벽을 설치하지 않아도 되는 경우는?",
    options: [
      "① 압축기와 그 충전장소 사이",
      "② 압축기와 그 가스충전용기 보관 장소 사이",
      "❸ 충전장소와 긴급차단장치 조작 장소 사이",
      "④ 충전장소와 그 충전용주관밸브 조작밸브 사이"
    ],
    correct_answer: "충전장소와 긴급차단장치 조작 장소 사이"
  },
  {
    question: "압력계 교정 또는 검정용 표준기로 사용되는 압력계는?",
    options: [
      "① 표준 브르돈관식",
      "② 기준 박막식",
      "③ 표준 드럼식",
      "❹ 기준 분동식"
    ],
    correct_answer: "기준 분동식"
  },
  {
    question: "회전자형 및 피스톤형 가스미터를 제외한 건식가스미터의 경우 검정증인의 올바른 표시위치는?",
    options: [
      "① 외부함",
      "② 부피조정장치",
      "❸ 눈금 지시부 및 상판의 접합부",
      "④ 분관의 보기 쉬운 부분 및 부관의 출입구"
    ],
    correct_answer: "눈금 지시부 및 상판의 접합부"
  },
  {
    question: "가스미터의 원격계측(검침) 시스템에서 원격계측 방법의 종류가 아닌 것은?",
    options: [
      "❶ 제트식",
      "② 기계식",
      "③ 펄스식",
      "④ 전자식"
    ],
    correct_answer: "제트식"
  },
  {
    question: "기준 가스미터의 지시량이 380m3/h이고 시험대상의 가스미터 유량이 400m3/h 이라면 이 가스미터의 오차율은 얼마인가?",
    options: [
      "① 4.0%",
      "② 4.2%",
      "❸ 5.0%",
      "④ 5.2%"
    ],
    correct_answer: "5.0%"
  },
  {
    question: "가스누출경보차단장치에 대한 설명 중 틀린 것은?",
    options: [
      "① 원격개폐가 가능하고 누출된 가스를 검지하여 경보를 울리면서 자동으로 가스통로를 차단하는 구조이어야 한다.",
      "② 제어부에서 차단부의 개폐상태를 확인할 수 있는 구조 이어야 한다.",
      "③ 차단부가 검지부의 가스검지 등에 의하여 닫힌 후에는 복원조작을 하지 않는 한 열리지 않는 구조이어야 한다.",
      "❹ 차단부가 전자밸브인 경우에는 통전 시 닫히고, 정전 시 열리는 구조이어야 한다."
    ],
    correct_answer: "차단부가 전자밸브인 경우에는 통전 시 닫히고, 정전 시 열리는 구조이어야 한다."
  },
  {
    question: "다음 중 편위법에 의한 계측기기가 아닌 것은?",
    options: [
      "① 스프링 저울",
      "② 브르돈관 압력계",
      "③ 전류계",
      "❹ 화학천징"
    ],
    correct_answer: "화학천징"
  },
  {
    question: "다음 중 열전대와 비교한 배금저항온도계의 장점에 대한 설명 중 틀린 것은?",
    options: [
      "① 큰 출력을 얻을 수 있다.",
      "② 기준접점의 온도보상이 필요 없다.",
      "❸ 측정온도의 상항이 열전대보다 높다.",
      "④ 경시변화가 적으며 안정적이다."
    ],
    correct_answer: "측정온도의 상항이 열전대보다 높다."
  },
  {
    question: "소형이며 대용량의 가스 측정에 적합하며 특히 중압가스의 계량도 가능한 가스미터는?",
    options: [
      "① 막식",
      "❷ 루트",
      "③ 습식",
      "④ 오리피스"
    ],
    correct_answer: "루트"
  },
  {
    question: "물의 유속과 정압이 각각 3m/s, 0.3kgf/cm2일 때 동압은 약 몇 ㎜H2O인가?",
    options: [
      "❶ 459",
      "② 469",
      "③ 479",
      "④ 489"
    ],
    correct_answer: "459"
  },
  {
    question: "가연성 가스검출기의 종류로서 옳지 않은 것은?",
    options: [
      "❶ 리트머스형",
      "② 안전등형",
      "③ 간섭계형",
      "④ 열선형"
    ],
    correct_answer: "리트머스형"
  },
  {
    question: "공업용 액면계가 갖추어야 할 조건으로 옳지 않은 것은?",
    options: [
      "① 연속측정이 가능하고, 고온, 고압에 견디어야 한다.",
      "② 지시, 기록 또는 원격 측정이 가능해야 한다.",
      "③ 자동제어장치에 적용가능하고, 보수가 용이해야 한다.",
      "❹ 액위 변화속도가 적고, 액면의 상, 하한계의 적용이 어려워야 한다."
    ],
    correct_answer: "액위 변화속도가 적고, 액면의 상, 하한계의 적용이 어려워야 한다."
  },
  {
    question: "서보기구에 해당되는 제어로서 목표치가 임의의 변화를 하는 제어로 옳은 것은?",
    options: [
      "① 정치제어",
      "② 캐스케이드제어",
      "❸ 추치제어",
      "④ 프로세스제어"
    ],
    correct_answer: "추치제어"
  },
  {
    question: "가스미터 출구측 배관을 수직배관으로 설치하지 않는 가장 큰 이유는?",
    options: [
      "① 검침 및 수리 등의 작업이 편리하도록 하기 위하여",
      "② 화기 및 습기 등을 피하기 위하여",
      "❸ 수분응축으로 밸브의 동결을 방지하기 위하여",
      "④ 설치면적을 줄이기 위하여"
    ],
    correct_answer: "수분응축으로 밸브의 동결을 방지하기 위하여"
  },
  {
    question: "대칭 이원자 분자 및 Ar 등의 단원자 분자를 제외한 거의 대부분의 가스를 분석할 수 있으며 선택성이 우수하고 연속분석이 가능한 가스분석 방법은?",
    options: [
      "❶ 적외선법",
      "② 반응열법",
      "③ 용액전도율법",
      "④ 열전도율법"
    ],
    correct_answer: "적외선법"
  },
  {
    question: "50L의 물이 들어 있는 욕조에 온수기를 사용하여 온수를 넣은 결과 17분후에 욕조의 온도가 42℃, 온수량이 150L가 되었다. 이 때 온수기로부터 물에 가한 열량은 약 몇 kcal인가? (단, 가스 발열량 5000kcal/m3, 온수기의 가스 소비량 5m3/h, 물의 비열 1kcal/kg℃, 수도 및 욕조의 최초 온도는 5℃로 한다)",
    options: [
      "① 3700",
      "② 5000",
      "❸ 5550",
      "④ 7083"
    ],
    correct_answer: "5550"
  },
  {
    question: "다음 가스분석법 중 물리적 가스 분석법에 해당하지 않는 것은?",
    options: [
      "① 열전도율법",
      "② 적외선흡수법",
      "❸ 오르자트법",
      "④ 가스크로마토그래피법"
    ],
    correct_answer: "오르자트법"
  },
  {
    question: "불꽃 연소되면서 생성되는 양이온과 전자에 의한 전위계에 전기적인 신호가 이온생성 가능한 물질에만 감응하는 선택성을 가진 가스크로마토그래피(GC) 검출기는?",
    options: [
      "① TCD",
      "❷ FID",
      "③ ECD",
      "④ FPD"
    ],
    correct_answer: "FID"
  },
  {
    question: "루트미터에 대한 설명 중 틀린 것은?",
    options: [
      "① 유량이 일정하거나 변화가 심한 곳, 깨끗하거나 건조하거나 관계없이 모든 가스 타입을 계량하기에 적합하다",
      "② 액체 및 아세틸렌, 바이오가스, 침전가스를 계량하는 데에는 다소 부적합하다.",
      "❸ 공업용에 사용되고 있는 이 가스미터는 칼만식과 스월식의 두 종류가 있다.",
      "④ 측정의 정확도와 예상수명은 가스 흐름 내에 먼지의 과다 퇴적이나 다른 종류의 이물질 출현도에 따라 다르다"
    ],
    correct_answer: "공업용에 사용되고 있는 이 가스미터는 칼만식과 스월식의 두 종류가 있다."
  },
  {
    question: "전기저항식 습도계의 특징에 대한 설명 중 틀린 것은?",
    options: [
      "① 저온도의 측정이 가능하고, 응답이 빠르다.",
      "② 고습도에 장기간 방치하면 감습막이 유동한다.",
      "③ 연속기록, 원격측정, 자동제어에 주로 이용된다.",
      "❹ 온도계수가 비교적 작다."
    ],
    correct_answer: "온도계수가 비교적 작다."
  },
  {
    question: "잔류편차(off-set)는 제거되지만 제어시간은 단축되지 않고, 급변할 때 큰 진동이 발생하는 제어기는?",
    options: [
      "① P 제어기",
      "② PD 제어기",
      "❸ PI 제어기",
      "④ on-off 제어기      전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "PI 제어기"
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