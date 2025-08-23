// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "폭발범위가 넓은 것부터 차례로 된 것은?",
    options: [
      "❶ 일산화탄소 ＞ 메탄 ＞ 프로판",
      "② 일산화탄소 ＞ 프로판 ＞ 메탄",
      "③ 프로판 ＞ 메탄 ＞ 일산화탄소",
      "④ 메탄 ＞ 프로판 ＞ 일산화탄소"
    ],
    correct_answer: "일산화탄소 ＞ 메탄 ＞ 프로판"
  },
  {
    question: "일산화탄소와 수소의 부피비가 3:7인 혼합가스의 온도 100℃, 50atm에서의 밀도는 약 몇 g/L인가?",
    options: [
      "❶ 16",
      "② 18",
      "③ 21",
      "④ 23"
    ],
    correct_answer: "16"
  },
  {
    question: "가연성 물질의 인화 특성에 대한 설명 중 틀린 것은?",
    options: [
      "① 증기압을 높게 하면 인화위험이 커진다.",
      "② 연소범위가 넓을수록 인화위험이 커진다.",
      "③ 비점이 낮을수록 인화위험이 커진다.",
      "❹ 최소점화에너지가 높을수록 인화위험이 커진다."
    ],
    correct_answer: "최소점화에너지가 높을수록 인화위험이 커진다."
  },
  {
    question: "동절기에 사용할 수 있도록 물소화약제의 단점을 보완하기 위하여 제조하는 강화액에 용해시키는 물질은 무엇인가?",
    options: [
      "① 제1인산암모늄",
      "② 중탄산나트륨",
      "❸ 탄산칼륨",
      "④ 황산알루미늄"
    ],
    correct_answer: "탄산칼륨"
  },
  {
    question: "이산화탄소 32vol% O2 5vol% N2 63vol%의 혼합기체의 평균 분자량은 얼마인가?",
    options: [
      "① 29.3",
      "② 31.3",
      "❸ 33.3",
      "④ 35.3"
    ],
    correct_answer: "33.3"
  },
  {
    question: "수소의 연소반응은 일반적으로 H2 ＋ 1/2O2 → H2O 로 알려져 있으나 실제 반응은 수많은 소반응이 연쇄적으로 일어난다고 한다. 다음은 무슨 반응에 해당 하는가?",
    options: [
      "① 연쇄창시반응",
      "② 연쇄분지반응",
      "③ 기상정지반응",
      "❹ 연쇄이동반응"
    ],
    correct_answer: "연쇄이동반응"
  },
  {
    question: "가정용 프로판에 대한 설명으로 옳은 것은?",
    options: [
      "① 공기보다 가볍다.",
      "② 완전연소하면 탄산가스만 생성된다.",
      "❸ 1몰의 프로판을 완전 연소 하는데 5몰의 산소가 필요하다.",
      "④ 프로판은 상온에서는 액화시킬 수 없다."
    ],
    correct_answer: "1몰의 프로판을 완전 연소 하는데 5몰의 산소가 필요하다."
  },
  {
    question: "연소에 대한 설명 중 틀린 것은?",
    options: [
      "① 공기 중의 산소 농도가 높아지면 연소속도는 빨라진다.",
      "② 연소범위는 동일가스에 있어서도 온도와 압력에 따라 변한다.",
      "❸ 연소의 화염온도는 혼합비에 관계없이 동일 연료에 대해서 일정하다.",
      "④ 연소의 난이성 정도는 산소와의 친화력과 밀접한 관계가 있다."
    ],
    correct_answer: "연소의 화염온도는 혼합비에 관계없이 동일 연료에 대해서 일정하다."
  },
  {
    question: "연소온도에 직접적으로 영향을 미치는 인자가 아닌 것은?",
    options: [
      "① 연료 저위발열량",
      "❷ 열전도도",
      "③ 공기비",
      "④ 산소농도"
    ],
    correct_answer: "열전도도"
  },
  {
    question: "CmHn(탄화수소) 1Nm3이 연소하여 생기는 물의 양은 몇 Nm3인가?",
    options: [
      "① n/4",
      "❷ n/2",
      "③ n",
      "④ m＋n/4"
    ],
    correct_answer: "n/2"
  },
  {
    question: "폭굉에 대한 설명으로 옳은 것은?",
    options: [
      "❶ 가연성가스의 폭굉범위는 폭발범위보다 좁다.",
      "② 같은 조건에서 일산화탄소는 프로판의 폭굉속도보다 빠르다.",
      "③ 폭굉이 발생할 때 압력은 순간적으로 상승되었다가 원상으로 곧 돌아오므로 큰 파괴현상은 동반하지 않는다.",
      "④ 폭굉 압력파는 미연소 가스 속으로 음속 이하로 이동한다."
    ],
    correct_answer: "가연성가스의 폭굉범위는 폭발범위보다 좁다."
  },
  {
    question: "안전간격에 대한 설명 중 틀린 것은?",
    options: [
      "① 안전간격은 방폭전기기기 등의 설계에 중요하다.",
      "② 한계직경은 가는 관 내부를 화염이 진행할 때 도중에 꺼지는 한계의 직경이다.",
      "③ 두 평행판 간의 거리를 화염이 전하하지 않을 때까지 좁혔을 때 그 거리를 소염거리라고 한다.",
      "❹ 발화의 제반조건을 갖추었을 때 화염이 최대한으로 전파되는 거리를 화염일주라고 한다."
    ],
    correct_answer: "발화의 제반조건을 갖추었을 때 화염이 최대한으로 전파되는 거리를 화염일주라고 한다."
  },
  {
    question: "석유정제 과정에서 일반적으로 발생될 수 없는 가스는?",
    options: [
      "❶ 암모니아 가스",
      "② 프로판 가스",
      "③ 메탄가스",
      "④ 부탄가스"
    ],
    correct_answer: "암모니아 가스"
  },
  {
    question: "연소관리에 있어서 배기가스를 분석하는 가장 큰 목적은?",
    options: [
      "① 노내압 조절",
      "❷ 공기비 계산",
      "③ 연소열량 계산",
      "④ 매연농도 산출"
    ],
    correct_answer: "공기비 계산"
  },
  {
    question: "가스를 그대로 대기 중에 분출하여 연소시키며, 연소에 필요한 공기는 모두 불꽃 주변에서 확산에 의해 취하게 되고, 연소과정이 아주 늦고 불꽃이 길게 늘어나 적황색을 Elf 수도 있는 연소 방식은?",
    options: [
      "① 분젠식 연소법",
      "❷ 적화식 연소법",
      "③ 세미 분젠식 연소법",
      "④ Brast식 연소법"
    ],
    correct_answer: "적화식 연소법"
  },
  {
    question: "연소 또는 폭발의 3요소로서 가장 거리가 먼 것은?",
    options: [
      "① 가연성 물질",
      "② 산소공급원",
      "③ 점화원",
      "❹ 온도"
    ],
    correct_answer: "온도"
  },
  {
    question: "다음 각 물질의 일반적인 연소형태로서 틀린 것은?",
    options: [
      "❶ 경유 - 예혼합연소",
      "② 에테르 - 증발연소",
      "③ 아세틸렌 - 확산연소",
      "④ 양초 - 증발연소"
    ],
    correct_answer: "경유 - 예혼합연소"
  },
  {
    question: "중유의 저위발열량이 10000kcal/kg의 연료 1kg을 연소시킨 결과 연소열은 5500kcal/kg이었다. 연소효율은 얼마인가?",
    options: [
      "① 15%",
      "❷ 55%",
      "③ 65%",
      "④ 75%"
    ],
    correct_answer: "55%"
  },
  {
    question: "BLEVE현상 에 대한 설명으로 가장 옳은 것은?",
    options: [
      "① 물이 점성이 뜨거운 기름 표면 아래서 끓을 때 연소를 동반하지 않고 오버플로우 되는 현상",
      "② 물이 연소유의 뜨거운 표면에 들어갈 때 발생되는 오버플로우 현상",
      "③ 탱크바닥에 물과 기름의 에멀젼이 섞여있을 때 기름의 비등으로 인하여 급격하게 오버플로우 되는 현상.",
      "❹ 과열 상태의 탱크에서 내부의 액화 가스가 분출, 기화 되어 착화되었을 때 폭발적으로 증발하는 현상."
    ],
    correct_answer: "과열 상태의 탱크에서 내부의 액화 가스가 분출, 기화 되어 착화되었을 때 폭발적으로 증발하는 현상."
  },
  {
    question: "폭발사고 후의 긴급 안전대책으로 가장 거리가 먼 것은?",
    options: [
      "① 위험물질을 다른 곳으로 옮긴다.",
      "② 타 공장에 파급되지 않도록 가열원, 동력원을 모두 끈다.",
      "③ 장치 내 가연성 기체를 긴급히 비활성 기체로 치환 시킨다.",
      "❹ 폭발의 위험성이 있는 건물은 방화구조와 내화구조로 한다."
    ],
    correct_answer: "폭발의 위험성이 있는 건물은 방화구조와 내화구조로 한다."
  },
  {
    question: "다음 중 특정설비가 아닌 것은?",
    options: [
      "① 기화 장치",
      "② 독성가스 배관용 밸브",
      "③ 특정고압가스용 실린더 캐비넷",
      "❹ 초저온 용기"
    ],
    correct_answer: "초저온 용기"
  },
  {
    question: "매설배관의 경우에는 유기물질 재료를 피복재로 사용하면 방식이 된다. 이중 타르 에폭시 피복재의 특성에 대한 설명 중 틀린 것은?",
    options: [
      "❶ 저온 시에도 경화가 빠르다.",
      "② 밀착성이 좋다.",
      "③ 내마모성이 크다.",
      "④ 토양응력에 강하다."
    ],
    correct_answer: "저온 시에도 경화가 빠르다."
  },
  {
    question: "공기액화분리장치의 폭발원인으로 가장 거리가 먼 것은?",
    options: [
      "❶ 공기 취입구로부터 사염화탄소의 침입",
      "② 압축기용 윤활유의 분해에 따른 탄화수소의 생성",
      "③ 공기 중에 있는 질소 화합물의 흡입",
      "④ 액체 공기 중의 오존의 혼입"
    ],
    correct_answer: "공기 취입구로부터 사염화탄소의 침입"
  },
  {
    question: "캐비테이션 현상의 발생 방지책에 대한 설명으로 가장 거리가 먼 것은?",
    options: [
      "❶ 펌프의 회전수를 높인다.",
      "② 흡입 관경을 크게 한다.",
      "③ 펌프의 위치를 낮춘다.",
      "④ 양흡입 펌프를 사용한다."
    ],
    correct_answer: "펌프의 회전수를 높인다."
  },
  {
    question: "부취제의 구비조건이 아닌 것은?",
    options: [
      "① 도관을 부식하지 않을 것",
      "② 일상생활과 구분되는 냄새일 것",
      "❸ 연소 후에도 냄새가 남아있을 것",
      "④ 토양에 대한 투과성이 클 것"
    ],
    correct_answer: "연소 후에도 냄새가 남아있을 것"
  },
  {
    question: "사용압력이 60㎏/cm2 관의 허용응력이 20㎏/mm2일 때의 스케줄 번호는 얼마인가?",
    options: [
      "① 15",
      "② 20",
      "❸ 30",
      "④ 60"
    ],
    correct_answer: "30"
  },
  {
    question: "저온, 고압 재료로 사용되는 특수강의 구비 조건 중 틀린 것은?",
    options: [
      "① 접촉 유체에 대한 내식성이 클 것",
      "② 조작 중 예상되는 고온에 대해 기계적 강도를 가질 것",
      "❸ 크리이프 강도가 작을 것",
      "④ 저온에서 재질의 노화를 일으키지 않을 것"
    ],
    correct_answer: "크리이프 강도가 작을 것"
  },
  {
    question: "고압장치 배관 내를 흐르는 유체가 고온이면 열응력이 발생한다. 열응력을 제거하기 위한 이음이 아닌 것은?",
    options: [
      "① 벨로우즈 이음",
      "❷ 유니온 이음",
      "③ U밴드 이음.",
      "④ 스위블 이음"
    ],
    correct_answer: "유니온 이음"
  },
  {
    question: "고압가스용기의 재료로 사용되는 강의 성분 중 탄소량이 증가할수록 감소하는 것은?",
    options: [
      "❶ 연신율",
      "② 인장강도",
      "③ 경도",
      "④ 항복점"
    ],
    correct_answer: "연신율"
  },
  {
    question: "전양정이 54m 유량이 1.2m3/min인 펌프로 물을 이송하는 경우 이 펌프의 축동력(PS)은? (단, 펌프의 효율은 80%, 밀도는 1g/cm3이다.)",
    options: [
      "① 13",
      "❷ 18",
      "③ 23",
      "④ 28"
    ],
    correct_answer: "18"
  },
  {
    question: "지상에 설치된 액화석유 가스의 저장탱크와 가스충전 장소와의 사이에 반드시 설치하여야하는 것은?",
    options: [
      "① 경계표지",
      "❷ 방호벽",
      "③ 물분무설비",
      "④ 방류둑"
    ],
    correct_answer: "방호벽"
  },
  {
    question: "액화석유가스 자동절체식 일체형 저압조정기의 조정 압력은?",
    options: [
      "① 1.3~3.3kpa",
      "❷ 2.55~3.3kpa",
      "③ 5~30kpa",
      "④ 0.032~0.083mpa"
    ],
    correct_answer: "2.55~3.3kpa"
  },
  {
    question: "매설관의 전기방식법 중 유전양극법에 대한 설명으로 옳은 것은?",
    options: [
      "① 강한 전식에 대해서도 효과가 좋다.",
      "② 양극만 소모되므로 보충할 필요가 없다.",
      "❸ 타 매설물에의 간섭이 거의 없다.",
      "④ 방식전류의 세기(강도) 조절이 자유롭다."
    ],
    correct_answer: "타 매설물에의 간섭이 거의 없다."
  },
  {
    question: "압축기에서 압축비가 커질 때의 영향으로 틀린 것은?",
    options: [
      "① 토출가스 온도 상승",
      "② 소요동력 증가",
      "❸ 체적효율증가",
      "④ 실린더 과열"
    ],
    correct_answer: "체적효율증가"
  },
  {
    question: "작동식정압기와 비교한 파일럿식 정압기의 특성에 대한 설명 중 틀린 것은?",
    options: [
      "❶ 오프셋은 커진다.",
      "② 대용량이다.",
      "③ 요구 유량제어 범위가 넓은 경우에 적합하다.",
      "④ 높은 압력제어 정도가 요구되는 경우에 적합하다."
    ],
    correct_answer: "오프셋은 커진다."
  },
  {
    question: "액화석유가스의 충전용기 보관실은 가로 5m 세로 4m 높이 3m이다. 이때 환기구의 통풍 면적은 약 몇 cm2이어야 하는가? (단, 철망이 부착된 환기구로 가정하고 철망이 차지하는 면적의 합은 1000cm2이다.)",
    options: [
      "① 4000",
      "② 5000",
      "③ 6000",
      "❹ 7000"
    ],
    correct_answer: "7000"
  },
  {
    question: "도시가스 원료로서 나프타를 사용할 경우 어느 탄화수소 성분이 많아야 가스화 효율이 높아지는가?",
    options: [
      "① 나프타계",
      "❷ 파라핀계",
      "③ 올레핀계",
      "④ 방향족계"
    ],
    correct_answer: "파라핀계"
  },
  {
    question: "다음 중 재료에 대한 비파괴 검사 방법이 아닌 것은?",
    options: [
      "① 타진법",
      "② 초음파탐상시험법",
      "❸ 인장시험법",
      "④ 방사선투과시험법]"
    ],
    correct_answer: "인장시험법"
  },
  {
    question: "내용적이 300l 인 고압가스 강제용기의 방사선투과검사 방법에 대한 설명 중 틀린 것은?",
    options: [
      "① 2중벽단상 또는 단일벽 단상 촬영방법으로 실시한다.",
      "② 투과사진의 상질은 보통급으로 한다.",
      "❸ 계조계는 원둘레이음매의 경우에만 사용한다.",
      "④ 촬영부위는 길이이음과 원둘레이음과의 교차부도 포함 한다."
    ],
    correct_answer: "계조계는 원둘레이음매의 경우에만 사용한다."
  },
  {
    question: "LNG의 기화에 일반적으로 사용되지 않는 기화기는?",
    options: [
      "① 오픈 랙 기화기",
      "② 서브머지드 컨버젼 기화기",
      "③ 중간매체식 기화기",
      "❹ 전기가열식 기화기"
    ],
    correct_answer: "전기가열식 기화기"
  },
  {
    question: "액화석유가스는 공기 중에서 누출 시 그 농도가 몇 % 일 때 감지할 수 있도록 냄새가 나는 물질(부취제)을 혼합 하는가?",
    options: [
      "❶ 0.1",
      "② 0.3",
      "③ 1",
      "④ 3"
    ],
    correct_answer: "0.1"
  },
  {
    question: "산화에틸렌을 저장탱크 또는 용기에 충전할 경우의 기준 중 틀린 것은?",
    options: [
      "① 충전 전에 미리 그 내부가스를 질소가스 또는 탄산가스로 바꾼 후에 충전하여야 한다.",
      "② 저장탱크 또는 용기의 내부에는 산 또는 알칼리를 함유하지 않은 상태이어야 한다.",
      "❸ 질소가스 또는 탄산가스로 치환한 후의 저장탱크는 10도 이하로 유지하여야 한다.",
      "④ 저장탱크 및 충전용기에는 45도에서 그 내부가스의 압력이 0.4mpa 이상이 되도록 질소가스 또는 탄산가스를 충전하여야 한다."
    ],
    correct_answer: "질소가스 또는 탄산가스로 치환한 후의 저장탱크는 10도 이하로 유지하여야 한다."
  },
  {
    question: "아세틸렌을 용기에 충전 시 다공질물의 다공도는 얼마 이상 , 얼마 미만으로 하여야 하는가?",
    options: [
      "① 72% 이상 92% 미만",
      "② 72% 이상 95% 미만",
      "❸ 75% 이상 92% 미만",
      "④ 75% 이상 95% 미만"
    ],
    correct_answer: "75% 이상 92% 미만"
  },
  {
    question: "2l의 용접용기에 대하여 신규검사 후 5년이 경과 하였다면 재검사 주기는?",
    options: [
      "① 1년 마다",
      "② 2년 마다",
      "❸ 3년마다",
      "④ 5년마다"
    ],
    correct_answer: "3년마다"
  },
  {
    question: "다음 중 용기의 각인 표시 기호로 틀린 것은?",
    options: [
      "① 내용적 : V",
      "② 내압시험압력 : TP",
      "❸ 최고충전압력 : HP",
      "④ 동판 두께 : t"
    ],
    correct_answer: "최고충전압력 : HP"
  },
  {
    question: "고압가스 특정 제조시설의 배관 장치에 반드시 설치하여야 하는 안전제어 장치에 해당되지 않는 것은?",
    options: [
      "① 압력 안전장치",
      "② 긴급차단 장치",
      "③ 가스누출검지 경보장치",
      "❹ 내부반응 감시 장치"
    ],
    correct_answer: "내부반응 감시 장치"
  },
  {
    question: "자동차에 고정된 탱크로 납붙임 또는 접합용기에 액화 석유가스를 충전하는 때의 가스의 압력은 35도에서 몇 mpa 미만이 되도록 하여야 하는가?",
    options: [
      "① 0.1",
      "② 0.2",
      "③ 0.3",
      "❹ 0.5"
    ],
    correct_answer: "0.5"
  },
  {
    question: "공정에 존재하는 위험요소들과 공정의 효율을 떨어뜨릴 수 있는 운전상의 문제점을 찾아내어 그 원인을 제거 하는 정성 적인 안전성 평가기법은?",
    options: [
      "❶ 위험과 운전 분석기법",
      "② 이상위험도 분석기법",
      "③ 결함수 분석기법",
      "④ 작업자실수 분석기법"
    ],
    correct_answer: "위험과 운전 분석기법"
  },
  {
    question: "일반적으로 압축가스 용기 운반 시에는 눕혀서 적재하지만 액화가스 충전용기 운반 시에는 원칙적으로 세워서 적재하는 가장 큰 이유는?",
    options: [
      "① 용기의 밸브가 다른 용기보다 크기 때문",
      "❷ 이상 압력이 발생할 수 있기 때문",
      "③ 세워서 운반하기 좋은 구조이기 때문",
      "④ 햇빛에 노출되는 면적이 작아지기 때문"
    ],
    correct_answer: "이상 압력이 발생할 수 있기 때문"
  },
  {
    question: "압력조정기 출구에서 연소기 입구까지의 배관 및 호스는 얼마 이상의 압력으로 기밀시험을 하였을 때 누출이 없어야하는가?",
    options: [
      "① 3.5kpa",
      "❷ 8.4kpa",
      "③ 35kpa",
      "④ 84kpa"
    ],
    correct_answer: "8.4kpa"
  },
  {
    question: "차량에 고정된 2개 이상을 상호 연결한 이음매 없는 용기에 의하여 고압가스를 운반하는 차량에 대한 기준 중 틀린 것은?",
    options: [
      "① 용기 상호 간 또는 용기와 차량과의 사이를 단단하게 부착하는 조치를 한다.",
      "② 충전관에는 안전밸브, 압력계 및 긴급 탈압밸브를 설치한다.",
      "③ 차량의 보기 쉬운 곳에 '위험고압가스'라는 경계표시를 한다.",
      "❹ 용기의 주 밸브는 1개로 통일하여 긴급차단장치와 연결한다."
    ],
    correct_answer: "용기의 주 밸브는 1개로 통일하여 긴급차단장치와 연결한다."
  },
  {
    question: "메탄 80vol% 와 아세틸렌 20vol%로 혼합된 혼합가스의 공기 중 폭발한 한계는 얼마인가?",
    options: [
      "① 3.4%",
      "❷ 4.3%",
      "③ 5.4%",
      "④ 6.3%"
    ],
    correct_answer: "4.3%"
  },
  {
    question: "고압가스 제조 시 압축하면 안 되는 경우는?",
    options: [
      "① 가연성 가스 (아세틸렌, 에틸렌 및 수소를 제외) 중 산소 용량이 전용량의 2%일 때",
      "② 산소 중의 가연성 가스 (아세틸렌, 에틸렌 및 수소를 제외)의 용량이 전용량의 2%일 때",
      "❸ 아세틸렌, 에틸렌 또는 수소 중의 산소용량이 전용량의 3%일 때",
      "④ 산소 중 아세틸렌, 에틸렌 및 수소의 용량 합계가 전용량의 1%일 때"
    ],
    correct_answer: "아세틸렌, 에틸렌 또는 수소 중의 산소용량이 전용량의 3%일 때"
  },
  {
    question: "도시가스 제조 시설에 설치하는 벤트스택의 설치에 대한 설명 중 틀린 것은?",
    options: [
      "❶ 벤트스택 높이는 방출된 가스의 착지농도가 폭발 상한계값 미만이 되도록 한다.",
      "② 벤트스택에는 액화가스가 함께 방출되지 않도록 하는 조치를 한다.",
      "③ 벤트스택 방출구는 작업원이 통행하는 장소로부터 5m이상 떨어진 곳에 설치한다.",
      "④ 벤트스택에 연결된 배관에는 응축액의 고임을 제거할 수 있는 조치를 하여야한다."
    ],
    correct_answer: "벤트스택 높이는 방출된 가스의 착지농도가 폭발 상한계값 미만이 되도록 한다."
  },
  {
    question: "가스공급자는 일반수요자에게 액화석유가스를 공급할 경우 체적 판매방법에 의하여 공급하여야 한다. 다음 중 중량 판매방법에 의하여 공급할 수 있는 경우는?",
    options: [
      "① 병원에서 LPG 용기를 사용하는 경우",
      "② 학교에서 LPG 용기를 사용하는 경우",
      "③ 교회에서 LPG 용기를 사용하는 경우",
      "❹ 경로당에서 LPG 용기를 사용하는 경우"
    ],
    correct_answer: "경로당에서 LPG 용기를 사용하는 경우"
  },
  {
    question: "액화석유가스 저장설비 및 가스설비실의 통풍구조 기준에 대한 설명으로 옳은 것은?",
    options: [
      "① 사방을 방호벽으로 설치하는 경우 한 방향으로 2개소의 환기구를 설치한다.",
      "❷ 환기구의 1개소 면적은 2400cm2 이하로 한다.",
      "③ 강제통풍 시설의 방출구는 지면에서 2m 이상의 높이에 설치한다.",
      "④ 강제통풍 시설의 통풍능력은 1m2 마다 0.1m3/분 이상으로 한다."
    ],
    correct_answer: "환기구의 1개소 면적은 2400cm2 이하로 한다."
  },
  {
    question: "다음 중 가연성 가스가 아닌 것은?",
    options: [
      "① 아세트알데히드",
      "② 일산화탄소",
      "③ 산화에틸렌",
      "❹ 염소"
    ],
    correct_answer: "염소"
  },
  {
    question: "저장능력이 2톤인 액화석유가스 저장설비는 화기취급 장소와 몇 m 이상의 우회거리를 유지하여야 하는가?",
    options: [
      "① 2",
      "❷ 5",
      "③ 8",
      "④ 10"
    ],
    correct_answer: "5"
  },
  {
    question: "액화석유가스자동차충전소에 설치할 수 있는 건축물 또는 시설은?",
    options: [
      "❶ 액화석유가스충전사업자가 운영하고 있는 용기를 재검사하기 위한 시설.",
      "② 충전소의 종사자가 이용하기 위한 연면적 200m2 이하의 식당",
      "③ 충전소를 출입하는 사람을 위한 연면적 200m2 이하의 매점",
      "④ 공구 등을 보관하기 위한 연면적 200m2 이하의 창고"
    ],
    correct_answer: "액화석유가스충전사업자가 운영하고 있는 용기를 재검사하기 위한 시설."
  },
  {
    question: "다음 중 대기에 방출 되었을 때 가장 빨리 공기 중으로 확산되는 가스는?",
    options: [
      "① 부탄",
      "② 프로판",
      "❸ 질소",
      "④ 산소"
    ],
    correct_answer: "질소"
  },
  {
    question: "다음 제어에 대한 설명 중 옳지 않은 것은?",
    options: [
      "① 조작량이란 제어장치가 제어대상에 가하는 제어신호이다.",
      "② 제어량이란 제어를 받는 제어계의 출력량으로서 제어대상에 속하는 양이다.",
      "③ 기준압력이란 제어계를 동작시키는 기준으로서 직접 폐루프에 가해지는 입력신호이다.",
      "❹ 목표치란 임의의 값을 정하지 않는 무한대 값이다."
    ],
    correct_answer: "목표치란 임의의 값을 정하지 않는 무한대 값이다."
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
    question: "가스크로마토그래피로 A,B,C 3성분을 분석하였더니, 그 상대 면적이 각각 100. 300. 200mm2이었다. 이들 3성분의 보정 계수가 각각 1. 0.6 그리고 0.5라고 하면 A 성분의 함유량은 약 몇 %인가?",
    options: [
      "❶ 10",
      "② 15",
      "③ 16.7",
      "④ 26.3"
    ],
    correct_answer: "10"
  },
  {
    question: "온도 25도 기압760mmHg인 대기 속의 풍속을 피토관으로 측정하였더니 전압이 대기압보다 40mmH2O 높았다. 이때 풍속은 약 몇 m/s인가? (단 피스톤 속도계수 (C) : 0.9 공기의 기체상수 (R) : 29.27kgf·m/kg·k이다)",
    options: [
      "① 17.2",
      "❷ 23.2",
      "③ 32.2",
      "④ 37.4"
    ],
    correct_answer: "23.2"
  },
  {
    question: "다음 시료가스 중 적외선 분광법으로 측정이 가능한 것은?",
    options: [
      "① O2",
      "❷ SO2",
      "③ N2",
      "④ Cl2"
    ],
    correct_answer: "SO2"
  },
  {
    question: "100psi를 atm으로 환산하면 약 몇 atm인가?",
    options: [
      "① 4.8",
      "② 5.8",
      "❸ 6.8",
      "④ 7.8"
    ],
    correct_answer: "6.8"
  },
  {
    question: "액주식 압력계에 사용하는 액주가 가주어야 할 조건으로 옳지 않은 것은?",
    options: [
      "① 순수한 액체일 것",
      "② 온도에 대한 액의 밀도변화가 작을 것",
      "❸ 모세관 현상이 클 것",
      "④ 유독한 증기를 발생시키지 않을 것"
    ],
    correct_answer: "모세관 현상이 클 것"
  },
  {
    question: "열전대 온도계의 일반적인 종류로서 옳지 않은 것은?",
    options: [
      "① 구리 – 콘스탄탄",
      "② 백금 - 백금로듐",
      "❸ 크로멜 – 콘스탄탄",
      "④ 크로멜 - 알루멜"
    ],
    correct_answer: "크로멜 – 콘스탄탄"
  },
  {
    question: "가스크로마토그래피에서 전개제로 주로 사용되는 가스는?",
    options: [
      "❶ He",
      "② CO",
      "③ Rn",
      "④ Kr"
    ],
    correct_answer: "He"
  },
  {
    question: "막식가스미터의 고장 중 가스가 가스미터를 통과하지 못하는 불통의 발생 원인으로 가장 거리가 먼 것은?",
    options: [
      "① 크랭크축이 녹슬었을 때",
      "② 밸브시트에 이물질이 점착되었을 때",
      "③ 회전장치에 고장이 발생하였을 때",
      "❹ 계량막이 파손되었을 때"
    ],
    correct_answer: "계량막이 파손되었을 때"
  },
  {
    question: "가스의 굴절률 차를 이용하여 가연성 가스의 농도를 측정하는 검출기는?",
    options: [
      "① 안전등형",
      "❷ 간섭계형",
      "③ 연선형",
      "④ 검지관형"
    ],
    correct_answer: "간섭계형"
  },
  {
    question: "온도변화에 대한 응답이 빠르나 히스테리시스 오차가 발생될 수 있고, 온도조절 스위치나 자동기록장치에 주로 사용되는 온도계는?",
    options: [
      "① 열전대 온도계",
      "② 압력식 온도계",
      "❸ 바이메탈식 온도계",
      "④ 서미스터"
    ],
    correct_answer: "바이메탈식 온도계"
  },
  {
    question: "용적식 유량계의 특징에 대한 설명 중 옳지 않은 것은?",
    options: [
      "① 유체의 물성치에 의한 영향을 거의 받지 않는다.",
      "❷ 점도가 높은 액의 유량 측정에는 적합하지 않다.",
      "③ 유량계 전후의 작관길이에 영향을 받지 않는다.",
      "④ 외부 에너지의 공급이 없어도 측정할 수 있다."
    ],
    correct_answer: "점도가 높은 액의 유량 측정에는 적합하지 않다."
  },
  {
    question: "계측기기의 구비조건이 아닌 것은?",
    options: [
      "① 내구성이 좋아야 한다.",
      "② 신뢰성이 높아야 한다.",
      "❸ 복잡한 구조이어야 한다.",
      "④ 보수가 용이하여야 한다."
    ],
    correct_answer: "복잡한 구조이어야 한다."
  },
  {
    question: "계측기기의 감도에 대한 설명 중 틀린 것은?",
    options: [
      "① 감도가 좋으면 측정시간이 길어진다.",
      "② 감도가 좋으면 측정범위가 좁아진다.",
      "③ 계측기가 측정량의 변화에 민감한 정도를 말한다.",
      "❹ 측정량의 변화를 지시량의 변화로 나누어 준 값이다."
    ],
    correct_answer: "측정량의 변화를 지시량의 변화로 나누어 준 값이다."
  },
  {
    question: "가스미터에서 감도 유량의 의미를 가장 옳게 설명한 것은?",
    options: [
      "❶ 가스미터가 작동하기 시작하는 최소유량",
      "② 가스미터가 정상상태를 유지하는 데 필요한 최소유량",
      "③ 가스미터 유량이 최대유량의 50%에 도달했을 때의 유량",
      "④ 가스미터 유량이 오차 한도를 벗어났을 때의 유량"
    ],
    correct_answer: "가스미터가 작동하기 시작하는 최소유량"
  },
  {
    question: "제어동작에 따른 분류 중 연속되는 동작은?",
    options: [
      "① on-off 동작",
      "② 다위치 동작",
      "③ 단속도 동작",
      "❹ 비례동작"
    ],
    correct_answer: "비례동작"
  },
  {
    question: "잔류편차가 없고 응답상태가 좋은 조절동작을 위한 가장 적절한 제어기는?",
    options: [
      "① p제어기",
      "② pi제어기",
      "③ pd제어기",
      "❹ pid제어기"
    ],
    correct_answer: "pid제어기"
  },
  {
    question: "초음파의 송수파기에서 액면까지의 거리가 15m인 초음파 액면계에서 초음파가 수신될 때까지 0.3초가 걸렸다면 매질 중에서의 초음파의 전파속도는 약 몇 m/s인가?",
    options: [
      "① 12.5",
      "② 25",
      "③ 50",
      "❹ 100"
    ],
    correct_answer: "100"
  },
  {
    question: "분별연소법 중 산화구리법에 의하여 주로 정량할 수 있는 가스는?",
    options: [
      "① O2",
      "② N2",
      "❸ CH4",
      "④ CO2                       전자문제집 CBT 홈페이지 : www.comcbt.com 기출문제 및 해설집 다운로드  : www.comcbt.com/xe 전자문제집 CBT 앱(구글플레이) : [다운로드]  전자문제집 CBT란? 종이 문제집이 아닌 인터넷으로 문제를 풀고 자동으로 채점하며 모의고사, 오답 노트, 해설까지 제공하는 무료 기출문제 학습 프로그램으로 실제 시험에서 사용하는 OMR 형식의 CBT를 제공합니다. PC 버전 및 모바일 버전 완벽 연동 교사용/학생용 관리기능도 제공합니다.  오답 및 오탈자가 수정된 최신 자료와 해설은 전자문제집 CBT 에서 확인하세요."
    ],
    correct_answer: "CH4"
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