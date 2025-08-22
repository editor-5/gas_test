// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "gas연료에 연소에 있어서 확산염을 사용할 경우 예혼합염을 사용하는 것에 비해 얻을 수 있는 잇점이 아닌 것은?",
    options: [
      "① 역화의 위험이 없다.",
      "② 가스량의 조절범위가 크다.",
      "③ 가스의 고온 예열이 가능하다.",
      "❹ 개방 대기중에서도 완전연소가 가능하다."
    ],
    correct_answer: "개방 대기중에서도 완전연소가 가능하다."
  },
  {
    question: "다음은 가연물의 연소형태를 나타낸 것이다. 틀린 것은?",
    options: [
      "① 금속분-표면연소",
      "② 파라핀-증발연소",
      "③ 목재-분해연소",
      "❹ 유황-확산연소"
    ],
    correct_answer: "유황-확산연소"
  },
  {
    question: "다음 물질중 가연성가스로만 묶어진 항은 어느것인가?",
    options: [
      "① a.c.d.g",
      "❷ a,d,e,i",
      "③ b,e,f,i",
      "④ b,d,e,h"
    ],
    correct_answer: "a,d,e,i"
  },
  {
    question: "다음 폭발 종류 중 그 분류가 화학적 폭발로 분류 할 수 있는 것은?",
    options: [
      "① 증기폭발",
      "❷ 분해폭발",
      "③ 압력폭발",
      "④ 기계적폭발"
    ],
    correct_answer: "분해폭발"
  },
  {
    question: "기체 연료 중 수소가 산소와 화합하여 물이 생성되는 경우에 있어 H2 : O2 : H2O 의 비례 관계는?",
    options: [
      "❶ 2 : 1 : 2",
      "② 1 : 1 : 2",
      "③ 1 : 2 : 1",
      "④ 2 : 2 : 3"
    ],
    correct_answer: "2 : 1 : 2"
  },
  {
    question: "그림은 반데르바알스식에 의한 실제가스의 등온곡선을 나타낸 것이다. 그림 중 임계점은 어느 것인가?",
    options: [
      "❶ A",
      "② B",
      "③ C",
      "④ D"
    ],
    correct_answer: "A"
  },
  {
    question: "25℃에서 N2, O2, CO2의 분압이 각각 0.71atm, 0.15atm, 0.14atm이며, 이상적으로 행동할 때 이 혼합기체의 평균 분자량은 얼마인가? (단, 전압은 1atm이다.)",
    options: [
      "① 29.84",
      "② 30.00",
      "❸ 30.84",
      "④ 31.24"
    ],
    correct_answer: "30.84"
  },
  {
    question: "다음은 기체연료 중 천연가스에 관한 설명이다. 옳은 것은?",
    options: [
      "❶ 주성분은 메탄가스로 탄화수소의 혼합가스이다.",
      "② 상온,상압에서 LPG보다 액화하기 쉽다.",
      "③ 발열량이 수성가스에 비하여 작다.",
      "④ 누출시 폭발위험성이 적다."
    ],
    correct_answer: "주성분은 메탄가스로 탄화수소의 혼합가스이다."
  },
  {
    question: "다음은 화염사출율에 관한 설명이다. 옳은 것은?",
    options: [
      "❶ 화염의 사출율은 연료 중의 탄소,수소,질량비가 클수록 높다.",
      "② 화염의 사출율은 연료 중의 탄소,수소,질량비가 클수록 낮다.",
      "③ 화염의 사출율은 연료 중의 탄소,수소,질량비가 같을 수록 높다.",
      "④ 화염의 사출율은 연료 중의 탄소,수소,질량비가 같을 수록 낮다."
    ],
    correct_answer: "화염의 사출율은 연료 중의 탄소,수소,질량비가 클수록 높다."
  },
  {
    question: "다음 총발열량 및 진발열량에 관한 설명을 올바르게 표현한 것은?",
    options: [
      "❶ 총발열량은 진발열량에 생성된 물의 증발잠열을 합한 것과 같다.",
      "② 진발열량이란 액체 상태의 연료가 연소할 때 생성되는 열량을 말한다.",
      "③ 총발열량과 진발열량이란 용어는 고체와 액체 연료에서만 사용되는 말이다.",
      "④ 총발열량이란 연료가 연소할 때 생성되는 생성물중 H2O의 상태가 기체일 때 내는 열량을 말한다."
    ],
    correct_answer: "총발열량은 진발열량에 생성된 물의 증발잠열을 합한 것과 같다."
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
    question: "1 ata, 4L 기체 A와 2 ata, 5L의 기체 B를 1L 용기속에 충전시킬 때 전압(ata)은 얼마인가? (단, A와 B는 반응하지 않고 온도는 일정하다.)",
    options: [
      "❶ 14",
      "② 9",
      "③ 3",
      "④ 1"
    ],
    correct_answer: "14"
  },
  {
    question: "가스의 기본특성에 관한 설명 중 옳은 것은?",
    options: [
      "① 염소는 공기보다 무거우며 무색이다.",
      "② 질소는 스스로 연소하지 않는 조연성이다.",
      "❸ 산화에틸렌은 기체상태에서 분해폭발성이 있다.",
      "④ 일산화탄소는 수분혼합으로 중합폭발을 일으킨다."
    ],
    correct_answer: "산화에틸렌은 기체상태에서 분해폭발성이 있다."
  },
  {
    question: "다음 중 폭발 위험도를 설명한 것으로 옳은 것은?",
    options: [
      "① 폭발상한계를 하한계로 나눈 값",
      "② 폭발하한계를 상한계로 나눈 값",
      "❸ 폭발범위를 하한계로 나눈 값",
      "④ 폭발범위를 상한계로 나눈 값"
    ],
    correct_answer: "폭발범위를 하한계로 나눈 값"
  },
  {
    question: "다음 중 폭발범위의 설명으로 옳은 것은?",
    options: [
      "❶ 점화원에 의해 폭발을 일으킬 수 있는 혼합가스 중의 가연성 가스의 부피 %",
      "② 점화원에 의해 폭발을 일으킬 수 있는 혼합가스 중의 가연성 가스의 중량 %",
      "③ 점화원에 의해 폭발을 일으킬 수 있는 혼합가스 중의 지연성 가스의 부피 %",
      "④ 점화원에 의해 폭발을 일으킬 수 있는 혼합가스 중의 지연성 가스의 중량 %"
    ],
    correct_answer: "점화원에 의해 폭발을 일으킬 수 있는 혼합가스 중의 가연성 가스의 부피 %"
  },
  {
    question: "기체혼합물의 각 성분을 표현하는 방법으로 여러가지가 있다. 다음은 혼합가스의 성분비를 표현하는 방법이다. 다른 값을 갖는 것은?",
    options: [
      "① 몰분율",
      "❷ 질량분율",
      "③ 압력분율",
      "④ 부피분율"
    ],
    correct_answer: "질량분율"
  },
  {
    question: "다음은 연소범위에 관한 설명이다. 잘못 된 것은?",
    options: [
      "① 수소(H2) gas의 연소범위는 4∼75% 이다.",
      "❷ 가스의 온도가 높아지면 연소범위는 좁아진다.",
      "③ C2H2는 자체분해폭발이 가능하므로 연소상한계를 100%로 볼 수 있다.",
      "④ 연소범위는 가연성기체의 공기와의 혼합율에 있어서 점화원에 의해 필연적으로 연소가 일어날 수 있는 범위를 말한다."
    ],
    correct_answer: "가스의 온도가 높아지면 연소범위는 좁아진다."
  },
  {
    question: "1 ton의 CH4이 연소하는 경우 필요한 이론공기량은?",
    options: [
      "❶ 13333m3",
      "② 23333m3",
      "③ 33333m3",
      "④ 43333m3"
    ],
    correct_answer: "13333m3"
  },
  {
    question: "화학 반응속도를 지배하는 요인에 대한 설명이다. 맞는 것은?",
    options: [
      "① 압력이 증가하면 항상 반응속도가 증가한다.",
      "② 생성 물질의 농도가 커지면 반응속도가 증가한다.",
      "③ 자신은 변하지 않고 다른 물질의 화학변화를 촉진하는 물질을 부촉매라고 한다.",
      "❹ 온도가 높을수록 반응속도가 증가한다."
    ],
    correct_answer: "온도가 높을수록 반응속도가 증가한다."
  },
  {
    question: "메탄을 공기비 1.1로 완전연소시키고자 할 때 메탄 1m3N당 공급해야할 공기량은 약 몇m3N인가?",
    options: [
      "① 2.2",
      "② 6.3",
      "③ 8.4",
      "❹ 10.5"
    ],
    correct_answer: "10.5"
  },
  {
    question: "펌프에서 발생되는 수격현상의 방지법으로 옳지 않은 것은?",
    options: [
      "① 유속을 낮게 한다.",
      "② 압력조절용 탱크를 설치한다.",
      "③ 밸브를 펌프토출구 가까이 설치한다.",
      "❹ 밸브의 개폐는 신속히 한다."
    ],
    correct_answer: "밸브의 개폐는 신속히 한다."
  },
  {
    question: "가스 비등점이 낮은 것부터 바르게 나열한 것은?",
    options: [
      "❶ ⓑ-ⓒ-ⓐ-ⓓ",
      "② ⓑ-ⓓ-ⓐ-ⓒ",
      "③ ⓒ-ⓐ-ⓓ-ⓑ",
      "④ ⓒ-ⓓ-ⓐ-ⓑ"
    ],
    correct_answer: "ⓑ-ⓒ-ⓐ-ⓓ"
  },
  {
    question: "금속의 성질을 개선하기 위한 열처리에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 소둔(풀림)을 하면 인장강도가 저하한다.",
      "② 소입(담금질)을 하면 신율이 감소한다.",
      "③ 소려(뜨임)은 취성을 작게하는 조작이다.",
      "❹ 탄소강을 냉간가공하면 단면수축율은 증가하고 가공 경화를 일으킨다."
    ],
    correct_answer: "탄소강을 냉간가공하면 단면수축율은 증가하고 가공 경화를 일으킨다."
  },
  {
    question: "배관의 스케쥴 번호를 정하기 위한 식은? (단, P 는 사용압력(kg/cm2), S 는 허용응력(kg/mm2))",
    options: [
      "① ",
      "② ",
      "❸ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "암모니아 합성가스 및 수소제조 설비에 고온변성 촉매로 사용되는 것은?",
    options: [
      "❶ 산화철 – 산화크롬계촉매",
      "② 산화아연 – 산화크롬계촉매",
      "③ 산화철 – 산화아연계촉매",
      "④ 산화아연 - 일산화구리계촉매"
    ],
    correct_answer: "산화철 – 산화크롬계촉매"
  },
  {
    question: "프로판(C3H8) 11g을 태워서 나오는 이산화탄소는 표준 상태에서 얼마(L) 인가?",
    options: [
      "① 39.2 L",
      "② 22.4 L",
      "❸ 16.8 L",
      "④ 5.6 L"
    ],
    correct_answer: "16.8 L"
  },
  {
    question: "도시가스 제조 공정 중 가열방식에 의한 분류로 원료에 소량의 공기와 산소를 혼합하여 가스발생의 반응기에 넣어 원료의 일부를 연소시켜 그 열을 열원으로 이용하는 방식은?",
    options: [
      "① 자열식",
      "❷ 부분연소식",
      "③ 축열식",
      "④ 외열식"
    ],
    correct_answer: "부분연소식"
  },
  {
    question: "이산화탄소 소화설비의 가스압력식 기동장치의 설비 기준 중 기동용 가스용기에 사용하는 밸브의 압력은 얼마 이상이어야 하는가?",
    options: [
      "① 100 Kg/cm2",
      "② 200 Kg/cm2",
      "❸ 250 Kg/cm2",
      "④ 300 Kg/cm2"
    ],
    correct_answer: "250 Kg/cm2"
  },
  {
    question: "구리 및 구리합금으로 되어있는 장치를 사용할 수 있는 물질은?",
    options: [
      "❶ 알곤",
      "② 황화수소",
      "③ 아세틸렌",
      "④ 암모니아"
    ],
    correct_answer: "알곤"
  },
  {
    question: "LP 가스의 충전 방법으로 적합치 않은 것은?",
    options: [
      "❶ 진공펌프에 의한 방법",
      "② 차압에 의한 방법",
      "③ 액체펌프에 의한 방법",
      "④ 압축기에 의한 방법"
    ],
    correct_answer: "진공펌프에 의한 방법"
  },
  {
    question: "15℃ 볼탱크에 저장된 액화프로판(C3H8)을 시간당 50Kg씩 15℃의 기체로 공급하려고 증발기에 전열기를 설치했을때 필요한 전열기의 용량은? (단, 프로판 증발열 3740 cal/gmol 15℃, 1 cal = 1.163 × 10-6 KWH)",
    options: [
      "❶ 4.94 KW",
      "② 0.217 KW",
      "③ 2.17 KW",
      "④ 0.494 KW"
    ],
    correct_answer: "4.94 KW"
  },
  {
    question: "펌프의 송출유량이 Q[m3/s], 양정이 H[m], 취급하는 액체의 비중량이 r[kg/m3] 일 때 펌프의 수동력 Lw[kW]을 구하는 식은?",
    options: [
      "① ",
      "❷ ",
      "③ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "도시가스의 원료 중 제진, 탈유, 탈탄산, 탈습 등의 전처리를 필요로 하는 것은?",
    options: [
      "① 천연가스",
      "❷ LNG",
      "③ LPG",
      "④ 나프타"
    ],
    correct_answer: "LNG"
  },
  {
    question: "다기능 가스 안전계량기는 통상 사용 상태에서 출구측의 압력을 감지하여, 압력이 얼마가 되면 가스가 차단하도록 되어 있는가?",
    options: [
      "① 200 mmH2O",
      "② 130 mmH2O",
      "③ 100 mmH2O",
      "❹ 60 mmH2O"
    ],
    correct_answer: "60 mmH2O"
  },
  {
    question: "염소가스 공급 설비에서 용량 결정은 가열기의 전열 면적 1[m2]당 염소 가스의 기화능력(㎏/hr)이 얼마일 때 인가?",
    options: [
      "① 20 - 40 kg/h",
      "② 30 - 40 kg/h",
      "❸ 50 - 80 kg/h",
      "④ 60 - 170 kg/h"
    ],
    correct_answer: "50 - 80 kg/h"
  },
  {
    question: "냉동기의 냉매로서 가장 부적당한 물질은?",
    options: [
      "❶ 펜탄가스",
      "② 암모니아가스",
      "③ 프로판가스",
      "④ 부탄가스"
    ],
    correct_answer: "펜탄가스"
  },
  {
    question: "프로판(C3H8)과 부탄(C4H10)의 몰비가 2:1인 혼합가스가 3atm(절대압력), 25℃로 유지되는 용기속에 존재할 때 이 혼합 기체의 밀도는? (단, 이상 기체로 가정)",
    options: [
      "① 6.548 g/ℓ",
      "② 7.121 g/ℓ",
      "③ 5.402 g/ℓ",
      "❹ 5.975 g/ℓ"
    ],
    correct_answer: "5.975 g/ℓ"
  },
  {
    question: "고압가스 용기에 사용되는 강의 성분원소 작용에 대한 설명으로 옳은 것은?",
    options: [
      "❶ 탄소량이 증가할수록 인장강도는 증가한다.",
      "② 인(P)는 적열취성의 원인이 된다.",
      "③ 황(S)는 상온취성의 원인이 된다.",
      "④ 망간(Mn)은 적열취성의 원인이 된다."
    ],
    correct_answer: "탄소량이 증가할수록 인장강도는 증가한다."
  },
  {
    question: "용접부내 결함 검사에 가장 적합한 방법으로 검사결과의 기록이 가능하나 검사비용이 비싼 검사방법은?",
    options: [
      "① 자분검사",
      "② 침투검사",
      "❸ 방사선투과검사",
      "④ 음향검사"
    ],
    correct_answer: "방사선투과검사"
  },
  {
    question: "염소가스 압축기의 실린더에 사용되는 윤활제는?",
    options: [
      "❶ 진한황산",
      "② 양질의 광유",
      "③ 식물성유",
      "④ 묽은 글리세린"
    ],
    correct_answer: "진한황산"
  },
  {
    question: "역류방지밸브의 설치 장소로 옳지 않은 것은?",
    options: [
      "❶ C2H2 고압건조기와 충전용 교체밸브 사이",
      "② 가연성 가스압축기와 충전용 주관 사이",
      "③ C2H2을 압축하는 압축기의 유분리기와 고압건조기 사이",
      "④ NH3, CH3OH 합성탑 또는 정제탑과 압축기 사이"
    ],
    correct_answer: "C2H2 고압건조기와 충전용 교체밸브 사이"
  },
  {
    question: "초저온 용기의 정의로 옳은 것은?",
    options: [
      "① 임계온도가 -30℃ 이하인 액화가스를 충전하기 위한 용기.",
      "❷ 임계온도가 -50℃ 이하인 액화가스를 충전하기 위한 용기.",
      "③ 임계온도가 -70℃ 이하인 액화가스를 충전하기 위한 용기.",
      "④ 임계온도가 -90℃ 이하인 액화가스를 충전하기 위한 용기."
    ],
    correct_answer: "임계온도가 -50℃ 이하인 액화가스를 충전하기 위한 용기."
  },
  {
    question: "정전기로 인한 화재· 폭발 사고를 예방하기 위해 취해야 할 조치가 아닌 것은?",
    options: [
      "① 유체의 분출 방지",
      "❷ 절연체의 도전성 감소",
      "③ 공기의 이온화 장치 설치",
      "④ 유체를 이· 충전시 유속의 제한"
    ],
    correct_answer: "절연체의 도전성 감소"
  },
  {
    question: "20kg의 LPG가 누출하여 폭발할 경우 TNT 폭발 위력으로 환산하면 TNT몇 kg에 해당하는가? (단, 가스의 발열량: 12,000 kcal/㎏ TNT의 연소열:1,100 kcal/㎏ 폭발효율: 3%이다.)",
    options: [
      "① 0.6kg",
      "❷ 6.5kg",
      "③ 16.2kg",
      "④ 26.6kg"
    ],
    correct_answer: "6.5kg"
  },
  {
    question: "고압가스제조허가의 종류가 아닌 것은?",
    options: [
      "① 고압가스특정제조",
      "② 고압가스일반제조",
      "③ 고압가스충전",
      "❹ 특정고압가스제조"
    ],
    correct_answer: "특정고압가스제조"
  },
  {
    question: "아세틸렌을 용기에 충전하는 때에는 미리 용기에 다공질물을 고루 채워 다공도가 75％이상 92％미만이 되도록 한 후 ( ) 또는 디메틸포름아미드를 고루 침윤시키고 충전해야 한다. ( )안에 적당한 물질은?",
    options: [
      "① 질소",
      "② 에틸렌",
      "❸ 아세톤",
      "④ 암모니아"
    ],
    correct_answer: "아세톤"
  },
  {
    question: "독성가스 충전시설에는 다른 제조시설과 구분하여 외부로 부터 충전 시설임을 쉽게 식별할 수 있는 설치 조치는?",
    options: [
      "① 충전표지",
      "② 경계표지",
      "❸ 위험표지",
      "④ 안전표지"
    ],
    correct_answer: "위험표지"
  },
  {
    question: "산소를 운반하는 챠량에 고정된 탱크의 내용적은 얼마를 초과할 수 없는가? (단, 철도차량 또는 견인차에 고정된 탱크는 제외)",
    options: [
      "❶ 18,000L",
      "② 21,000L",
      "③ 33,000L",
      "④ 42,000L"
    ],
    correct_answer: "18,000L"
  },
  {
    question: "공기 중 폭발범위가 가장 큰 것은?",
    options: [
      "① 수소",
      "② 암모니아",
      "③ 일산화탄소",
      "❹ 아세틸렌"
    ],
    correct_answer: "아세틸렌"
  },
  {
    question: "각종 용기의 검사방법에 대한 설명으로 옳은 것은?",
    options: [
      "① 아세틸렌 용기의 내압시험압력은 최고충전압력의 1.5배이다.",
      "❷ 수조식 내압시험의 항구증가율이 10% 이하이어야 합격한 것이다.",
      "③ 초저온 및 저온 용기의 기밀시험 압력은 최고충전압력의 1.8배이다.",
      "④ 고압가스설비의 내압시험압력은 최고충전압력의 1.1배이다."
    ],
    correct_answer: "수조식 내압시험의 항구증가율이 10% 이하이어야 합격한 것이다."
  },
  {
    question: "고압가스 및 유독 물질을 처리하는 공정 등에 적용하는 정량적 위험성 평가 기법으로 가장 적절한 것은?",
    options: [
      "❶ FTA(Fault Tree Analysis)",
      "② PHA(Preliminary Hazard Analysis)",
      "③ FMEA(Failure Mode Effect Analysis)",
      "④ FMECA(Failure Mode Effect Criticality Analysis)"
    ],
    correct_answer: "FTA(Fault Tree Analysis)"
  },
  {
    question: "도시가스배관을 도로매설 시 배관의 외면으로부터 도로경계까지 얼마 이상의 수평거리를 유지하여야 하는가?",
    options: [
      "① 1.5m",
      "② 0.8m",
      "❸ 1.0m",
      "④ 1.2m"
    ],
    correct_answer: "1.0m"
  },
  {
    question: "독성가스와 그 제독 처리제를 짝지은 것 중 옳지 않은 것은?",
    options: [
      "① NH3 - 다량의 물",
      "❷ Cl2 - 다량의 물, 염화 제2철",
      "③ H2Se - 금속산화물, 염화 제2철, 알칼리 수용액",
      "④ H2S - 금속산화물, 염화 제2철"
    ],
    correct_answer: "Cl2 - 다량의 물, 염화 제2철"
  },
  {
    question: "도시가스의 제조 방식 중 가열방식에 의한 분류가 아닌 것은?",
    options: [
      "❶ Cyclic식",
      "② 자열식",
      "③ 외열식",
      "④ 부분연소식"
    ],
    correct_answer: "Cyclic식"
  },
  {
    question: "내용적 50ℓ 의 용기에 프로판을 충전할 때 최대 충전량은? (단, 프로판 충전정수는 2.35 이다.)",
    options: [
      "❶ 21.3 ㎏",
      "② 47 ㎏",
      "③ 117.5 ㎏",
      "④ 11.8 ㎏"
    ],
    correct_answer: "21.3 ㎏"
  },
  {
    question: "아황산 가스에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 강한 자극성이 있는 무색의 기체이다.",
      "② 공기중의 그 농도가 0.5-1ppm일 때 감각적으로 그 소재를 알 수 있다.",
      "③ 30-40ppm일때 호흡이 곤란하게 된다.",
      "❹ 300-400ppm일때 생명이 위험하다."
    ],
    correct_answer: "300-400ppm일때 생명이 위험하다."
  },
  {
    question: "가연성 가스의 내부가스를 치환하여 수리할 때 가스농도는 폭발하한계의 얼마 이하까지 치환시키는가?",
    options: [
      "① 1/2 이하",
      "② 2/4 이하",
      "③ 1/3 이하",
      "❹ 1/4 이하"
    ],
    correct_answer: "1/4 이하"
  },
  {
    question: "차량에 고정된 탱크를 운행할 경우에 휴대하여야 할 안전운행 서류철에 포함사항이 아닌 것은?",
    options: [
      "① 탱크 테이블",
      "❷ 안전성향상계획서",
      "③ 차량등록증",
      "④ 고압가스 이동계획서"
    ],
    correct_answer: "안전성향상계획서"
  },
  {
    question: "아세틸렌의 품질 검사에서 순도 기준으로 맞는 것은? (단, 발연황산 시약을 사용한 오르잣드법)",
    options: [
      "① 99.5 % 이상",
      "② 99 % 이상",
      "❸ 98 % 이상",
      "④ 98.5 % 이상"
    ],
    correct_answer: "98 % 이상"
  },
  {
    question: "제1종 보호시설로서 가연성 가스의 저장능력이 20,000m3일 때 안전거리는?",
    options: [
      "❶ 21m",
      "② 24m",
      "③ 27m",
      "④ 17m"
    ],
    correct_answer: "21m"
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
    question: "열전대 온도계의 종류로서 옳지 않은 것은?",
    options: [
      "① 구리-콘스탄탄",
      "② 백금-백금로듐",
      "❸ 크로멜-콘스탄탄",
      "④ 크로멜-알루멜"
    ],
    correct_answer: "크로멜-콘스탄탄"
  },
  {
    question: "가스크로마토그래피의 운반가스로서 적당하지 않은 것은?",
    options: [
      "① 질소",
      "❷ 염소",
      "③ 수소",
      "④ 알곤"
    ],
    correct_answer: "염소"
  },
  {
    question: "다음 설명에 적당한 제어동작은?",
    options: [
      "① I 동작",
      "② D 동작",
      "❸ PI 동작",
      "④ PD 동작"
    ],
    correct_answer: "PI 동작"
  },
  {
    question: "실측식가스미터의 기능에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 대량수요시 루트식이 적합하다.",
      "② 막식 미터는 소용량(100m3/hr)에 적당하다.",
      "③ 습식가스미터는 가스발열량도 측정이 가능하다.",
      "❹ 습식가스미터는 사용 중 기압차 변동이 많다."
    ],
    correct_answer: "습식가스미터는 사용 중 기압차 변동이 많다."
  },
  {
    question: "수은을 이용한 U자관식 액면계에서 그림과 같이 높이가 70cm일 때 P2는 절대압으로 얼마인가?",
    options: [
      "① 1.92kg/cm2",
      "❷ 1.92 atm",
      "③ 1.87 bar",
      "④ 20.24mH2O"
    ],
    correct_answer: "1.92 atm"
  },
  {
    question: "가스미터의 검정공차는 최대 유량이 4/5 이상일 때 얼마인가?",
    options: [
      "① ± 1.5%",
      "❷ ± 2.5%",
      "③ ± 3.5%",
      "④ ± 4.5%"
    ],
    correct_answer: "± 2.5%"
  },
  {
    question: "가연성 가스검출기의 종류로서 옳지 않은 것은?",
    options: [
      "❶ 리트머스지형",
      "② 안전등형",
      "③ 간섭계형",
      "④ 열선형"
    ],
    correct_answer: "리트머스지형"
  },
  {
    question: "가스크로마토그래피 컬럼재료로 사용되는 흡착제가 아닌 것은?",
    options: [
      "① 실리카겔",
      "② 뮬레큘레시브(Molecular Sieve)",
      "❸ 고상 가성소다",
      "④ 활성알루미나"
    ],
    correct_answer: "고상 가성소다"
  },
  {
    question: "가스크로마토그래피법에서 고정상 액체의 구비조건으로 옳지 않은 것은?",
    options: [
      "① 분석대상 성분의 분리능이 높아야 한다.",
      "❷ 사용온도에서 증기압이 높아야 한다.",
      "③ 화학적으로 안정된 것이어야 한다.",
      "④ 점성이 작아야 한다."
    ],
    correct_answer: "사용온도에서 증기압이 높아야 한다."
  },
  {
    question: "2 개의 회전자로 구성되고, 소형으로 대용량의 가스측정이 가능한 가스미터는?",
    options: [
      "① 막식미터",
      "❷ 루츠미터",
      "③ 터빈식미터",
      "④ 와류식미터"
    ],
    correct_answer: "루츠미터"
  },
  {
    question: "차압식 유량계에서 조리개 전후의 압력차가 처음보다 두배만큼 커졌다면 유량은 어떻게 변하는가?",
    options: [
      "① Q2 = Q1",
      "② Q2 = 2Q1",
      "❸ ",
      "④ Q2 = 4Q1"
    ],
    correct_answer: ""
  },
  {
    question: "정확한 계량이 가능하여 기준기로 이용되며, 드럼의 회전수로 유량을 산출하는 가스미터는?",
    options: [
      "① 건식가스미터",
      "② 루트미터",
      "③ 막식가스미터",
      "❹ 습식가스미터"
    ],
    correct_answer: "습식가스미터"
  },
  {
    question: "광학적 방법인 슈리렌법(schlieren method)은 무엇을 측정하는가?",
    options: [
      "① 기체의 흐름에 대한 속도변화",
      "② 기체의 흐름에 대한 온도변화",
      "③ 기체의 흐름에 대한 압력변화",
      "❹ 기체의 흐름에 대한 밀도변화"
    ],
    correct_answer: "기체의 흐름에 대한 밀도변화"
  },
  {
    question: "염화제1구리 착염지는 어떤 가스를 검지할 때 사용하는 시험지인가?",
    options: [
      "① 일산화탄소",
      "② 포스겐",
      "③ 황화수소",
      "❹ 아세틸렌"
    ],
    correct_answer: "아세틸렌"
  },
  {
    question: "액주식압력계에 사용되는 액주의 구비조건으로 거리가 먼 것은?",
    options: [
      "① 점도가 낮을 것",
      "❷ 혼합 성분일 것",
      "③ 밀도변화가 적을 것",
      "④ 모세관 현상이 적을 것"
    ],
    correct_answer: "혼합 성분일 것"
  },
  {
    question: "증기 비중이 제일 적은 기체는?",
    options: [
      "❶ NH3",
      "② O2",
      "③ C3H8",
      "④ HCN"
    ],
    correct_answer: "NH3"
  },
  {
    question: "기준 입력과 주피드백량의 차로서 제어동작을 일으키는 신호는?",
    options: [
      "① 기준입력 신호",
      "② 조작 신호",
      "❸ 동작 신호",
      "④ 주피드백 신호"
    ],
    correct_answer: "동작 신호"
  },
  {
    question: "바이메탈온도계의 특징으로 옳지 않은 것은?",
    options: [
      "① 히스테리시스 오차가 발생한다.",
      "② 온도변화에 대한 응답이 빠르다.",
      "③ 온도조절 스위치로 많이 사용한다",
      "❹ 작용하는 힘이 작다."
    ],
    correct_answer: "작용하는 힘이 작다."
  },
  {
    question: "계통적 오차(systematic error)에 해당되지 않는 것은?",
    options: [
      "① 계기오차",
      "② 환경오차",
      "③ 이론오차",
      "❹ 우연오차                                                                                              전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "우연오차                                                                                              전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
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