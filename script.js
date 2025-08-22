// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
// JavaScript Quiz Data
const quizData = [
  {
    question: "다음중 연소시 가장 낮은 온도를 나타내는 색깔은?",
    options: [
      "❶ 적색",
      "② 백적색",
      "③ 황적색",
      "④ 회백색"
    ],
    correct_answer: "적색"
  },
  {
    question: "다음 중 연소의 관련된 사항이 아닌 것은?",
    options: [
      "❶ 흡열반응이 일어난다.",
      "② 산소공급원이 있어야 한다.",
      "③ 연소시에 빛을 발생할 수 있어야 한다.",
      "④ 반응열에 의해서 연소 생성물의 온도가 올라가야 한다."
    ],
    correct_answer: "흡열반응이 일어난다."
  },
  {
    question: "다음 가스 중 연소와 관련한 성질이 다른 것은?",
    options: [
      "❶ 산소",
      "② 부탄",
      "③ 수소",
      "④ 일산화탄소"
    ],
    correct_answer: "산소"
  },
  {
    question: "기체 연료를 미리 공기와 혼합시켜 놓고 점화해서 연소하는 것으로 혼합기만으로도 연소할 수 있는 연소방식은?",
    options: [
      "① 확산연소",
      "❷ 예혼합연소",
      "③ 증발연소",
      "④ 분해연소"
    ],
    correct_answer: "예혼합연소"
  },
  {
    question: "폭굉유도거리에 대한 올바른 설명은?",
    options: [
      "❶ 최초의 느린 연소가 폭굉으로 발전할 때 까지의 거리",
      "② 어느 온도에서 가열,발화,폭굉에 이르기까지의 거리",
      "③ 폭굉 등급을 표시할때의 안전간격을 나타내는 거리",
      "④ 폭굉이 단위시간당 전파되는 거리"
    ],
    correct_answer: "최초의 느린 연소가 폭굉으로 발전할 때 까지의 거리"
  },
  {
    question: "CH4(g) + 2O2(g) 偵 CO2(g) +2H2O(ℓ )의 반응열은 얼마인가?",
    options: [
      "① -144.5 kcal",
      "② -180.3 kcal",
      "❸ -212.9 kcal",
      "④ -248.7 kcal"
    ],
    correct_answer: "-212.9 kcal"
  },
  {
    question: "아래 세 반응의 반응열 사이에서 Q3 = Q1 + Q2 의 식이 성립되는 법칙을 무엇이라 하는가?",
    options: [
      "① 돌톤의 법칙",
      "❷ 헤스의 법칙",
      "③ 헨리의 법칙",
      "④ 톰슨의 법칙"
    ],
    correct_answer: "헤스의 법칙"
  },
  {
    question: "등유(C10H20)을 산소로 완전 연소시킬 때 산소와 발생한 탄산가스의 몰비는 얼마인가?",
    options: [
      "① 1 : 1",
      "② 2 : 1",
      "❸ 3 : 2",
      "④ 2 : 3"
    ],
    correct_answer: "3 : 2"
  },
  {
    question: "공기와 혼합되어져 있는 상태에서 폭발 한계농도 범위가 가장 넓은 물질은?",
    options: [
      "① 에탄",
      "❷ 에틸렌",
      "③ 메탄",
      "④ 프로판"
    ],
    correct_answer: "에틸렌"
  },
  {
    question: "30℃, 1기압에서 수소 0.15g, 질소 0.90g, 암모니아 0.68g으로 된 혼합가스가 있다. 이 혼합가스의 부피는 약몇 L인가?(단, 원자량은 H : 1, N : 14)",
    options: [
      "① 3.66",
      "❷ 2.97",
      "③ 1.73",
      "④ 0.011"
    ],
    correct_answer: "2.97"
  },
  {
    question: "기체상수 R을 계산한 결과 1.987가 되었다. 이 때 단위로 올바른 것은?",
    options: [
      "① L·atm/mol.K",
      "❷ cal/mol·K",
      "③ erg/kmol·K",
      "④ Joule/mol·K"
    ],
    correct_answer: "cal/mol·K"
  },
  {
    question: "압력 1 atm, 온도 20℃ 에서 공기 1 kg의 부피를 구하면 몇 m3인가? (단, 공기의 평균분자량은 29임.)",
    options: [
      "① 0.42 m3",
      "② 0.62 m3",
      "③ 0.75 m3",
      "❹ 0.83 m3"
    ],
    correct_answer: "0.83 m3"
  },
  {
    question: "연소속도에 영향을 주는 요인이 아닌 것은?",
    options: [
      "① 화염온도",
      "② 산화제의 종류",
      "❸ 지연성물질의 온도",
      "④ 미연소가스의 열전도율"
    ],
    correct_answer: "지연성물질의 온도"
  },
  {
    question: "연소파와 폭굉파에 관한 설명 중 옳은 것은?",
    options: [
      "① 연소파 : 반응 후 온도감소",
      "❷ 폭굉파 : 반응 후 온도상승",
      "③ 연소파 : 반응 후 압력감소",
      "④ 폭굉파 : 반응 후 밀도감소"
    ],
    correct_answer: "폭굉파 : 반응 후 온도상승"
  },
  {
    question: "가연성 가스의 위험성에 대한 설명으로 잘못된 것은?",
    options: [
      "① 폭발범위가 넓을수록 위험하다.",
      "② 폭발범위 밖에서는 위험성이 감소한다.",
      "③ 온도나 압력이 증가할수록 위험성이 증가한다.",
      "❹ 폭발범위가 좁고 하한계가 낮은 것은 위험성이 매우 적다."
    ],
    correct_answer: "폭발범위가 좁고 하한계가 낮은 것은 위험성이 매우 적다."
  },
  {
    question: "밀폐된 용기내에 1atm, 27℃ 프로판과 산소가 부피비로 1: 5의 비율로 혼합되어 있다. 프로판이 다음과 같이 완전연소하여 화염의 온도가 1000℃가 되었다면 용기내에 발생하는 압력은 얼마가 되겠는가?",
    options: [
      "① 1.95atm",
      "② 2.95atm",
      "③ 3.95atm",
      "❹ 4.95atm"
    ],
    correct_answer: "4.95atm"
  },
  {
    question: "상온, 표준대기압하에서 어떤 혼합기체의 각 성분에 대한 부피백분율이 각각 CO2:20%, N2:20%, O2:40%, Ar:20% 이면 이 혼합기체 중 CO2분압은 ㎜Hg로 얼마인가?",
    options: [
      "❶ 152㎜Hg",
      "② 252㎜Hg",
      "③ 352㎜Hg",
      "④ 452㎜Hg"
    ],
    correct_answer: "152㎜Hg"
  },
  {
    question: "다음 중 비중이 가장 큰 물질은?",
    options: [
      "① 메탄",
      "② 프로판",
      "❸ 염소",
      "④ 이산화탄소"
    ],
    correct_answer: "염소"
  },
  {
    question: "두 물체가 열평형 상태에 있을 때 관련된 열역학 법칙은?",
    options: [
      "❶ 열역학제0법칙",
      "② 열역학제1법칙",
      "③ 열역학제2법칙",
      "④ 열역학제3법칙"
    ],
    correct_answer: "열역학제0법칙"
  },
  {
    question: "다음 중 반응속도가 빨라지는 것은?",
    options: [
      "❶ 활성화 에너지가 작을수록 좋다.",
      "② 열의 발산 속도가 클수록 좋다.",
      "③ 착화점과 인화점이 높을수록 좋다.",
      "④ 연소점이 높을수록 좋다."
    ],
    correct_answer: "활성화 에너지가 작을수록 좋다."
  },
  {
    question: "타 펌프에 비하여 정밀도가 높아 소유량 고양정에 매우 좋으며 소요마력이 적어 주로 보일러 급수용으로 쓰이는 펌프는?",
    options: [
      "① 원심 펌프",
      "❷ 웨스코펌프",
      "③ 베인펌프",
      "④ 플런저 펌프"
    ],
    correct_answer: "웨스코펌프"
  },
  {
    question: "가스액화 사이클의 종류가 아닌 것은?",
    options: [
      "❶ 비가역식",
      "② 린데고압식",
      "③ 클라우드식",
      "④ 캐피자식"
    ],
    correct_answer: "비가역식"
  },
  {
    question: "왕복동식(용적용 펌프)에 속하지 않는 것은?",
    options: [
      "① 플런저 펌프",
      "② 다이어프램 펌프",
      "③ 피스톤 펌프",
      "❹ 제트 펌프"
    ],
    correct_answer: "제트 펌프"
  },
  {
    question: "촉매를 사용하여 반응온도 400~800℃ 로서 탄화수소와 수증기를 반응시켜 CH4, H2, CO, CO2 로 변화하는 공정은?",
    options: [
      "① 열분해공정",
      "❷ 접촉분해공정",
      "③ 수소화분해공정",
      "④ 대체 천연가스공정"
    ],
    correct_answer: "접촉분해공정"
  },
  {
    question: "흡입압력이 대기압과 같으며 최종압력이 124kg/m2· G의 3단 공기압축기의 압축비는 얼마 인가? (단, 대기압은 1kg/cm2 A로 한다.)",
    options: [
      "① 2",
      "② 3",
      "③ 4",
      "❹ 5"
    ],
    correct_answer: "5"
  },
  {
    question: "왕복식 압축기의 특성에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 압축하면 맥동이 생기기 쉽다.",
      "② 토출압력에 의한 용량 변화가 적다.",
      "③ 기체의 비중에 영향이 없다.",
      "❹ 원심형이어서 압축 효율이 낮다."
    ],
    correct_answer: "원심형이어서 압축 효율이 낮다."
  },
  {
    question: "설정온도에서 용기내의 온도가 규정온도 이상이면 퓨즈가 녹아서 용기내의 전체 가스를 배출하는 구조로 되어 있는 밸브는?",
    options: [
      "① 파열판식 안전밸브",
      "② 중추식 안전밸브",
      "❸ 가용전식 안전밸브",
      "④ 스프링식 안전밸브"
    ],
    correct_answer: "가용전식 안전밸브"
  },
  {
    question: "고압가스 용기를 내압 시험한 결과 전증가량은 250cc, 영구 증가량이 15cc이다. 영구 증가율은 얼마인가? 또 이 용기는 내압 시험에 합격할 수 있는가?",
    options: [
      "① 6％, 불합격이다.",
      "② 5.7％, 불합격이다.",
      "③ 5.7％, 합격이다.",
      "❹ 6％, 합격이다."
    ],
    correct_answer: "6％, 합격이다."
  },
  {
    question: "가스 배관으로 강재를 사용 할 경우 수분이 있으면 가장 피해가 큰 것은?",
    options: [
      "① 아세틸렌 배관",
      "② 도시가스 배관",
      "❸ 염소 배관",
      "④ 산소 배관"
    ],
    correct_answer: "염소 배관"
  },
  {
    question: "총 발열량이 10,000[Kcal/Nm3], 비중이 1.2인 도시가스의 웨베지수는?",
    options: [
      "① 12000",
      "② 8333",
      "③ 10954",
      "❹ 9129"
    ],
    correct_answer: "9129"
  },
  {
    question: "도시가스 배관의 내진설계 기준에서 일반도시가스사업자가 소유하는 배관의 경우 내진 1등급에 해당되는 가스 최고사용압력은?",
    options: [
      "① 1.5MPa",
      "② 5 MPa",
      "❸ 0.5MPa",
      "④ 6.9MPa"
    ],
    correct_answer: "0.5MPa"
  },
  {
    question: "SNG 에 대한 설명으로 옳은 것은?",
    options: [
      "① SNG는 순수 천연가스를 뜻한다.",
      "② SNG는 각 부생가스로 고로가스가 주성분이다.",
      "③ SNG는 각종 도시가스의 총칭이다.",
      "❹ SNG는 대체(합성) 천연가스를 뜻한다."
    ],
    correct_answer: "SNG는 대체(합성) 천연가스를 뜻한다."
  },
  {
    question: "가스 연소시 역화(flash back)의 원인이 아닌 것은?",
    options: [
      "① 가스압력이 낮아진 때",
      "② 노즐의 부식",
      "❸ 과다한 가스의 공급",
      "④ 버너의 과열"
    ],
    correct_answer: "과다한 가스의 공급"
  },
  {
    question: "자연기화와 비교한 기화기 사용 시 특징으로 거리가 먼 것은?",
    options: [
      "① LPG 종류에 관계없이 한냉시에도 충분히 기화된다.",
      "② 공급가스의 조성이 일정 하다.",
      "③ 기화량을 가감할 수 있다.",
      "❹ 설비장소가 적게 들지만 설비비는 많이 든다."
    ],
    correct_answer: "설비장소가 적게 들지만 설비비는 많이 든다."
  },
  {
    question: "탄소강에 각종 원소를 첨가하면 특수한 성질을 지니게 되는데 각 원소의 영향을 바르게 연결한 것은?",
    options: [
      "① Ni - 내마멸성 및 내식성 증가",
      "② Cr - 인성 및 저온충격저항 증가",
      "❸ Mo - 고온에서 인장강도 및 경도 증가",
      "④ Cu - 전자기성 및 경화능력 증가"
    ],
    correct_answer: "Mo - 고온에서 인장강도 및 경도 증가"
  },
  {
    question: "가스액화 분리장치의 구성 요소가 아닌 것은?",
    options: [
      "① 한냉 발생장치",
      "② 정류장치",
      "③ 불순물 제거장치",
      "❹ 접촉 분해장치"
    ],
    correct_answer: "접촉 분해장치"
  },
  {
    question: "강의 열처리에서 적당한 경도를 얻기 위하여 가열 후 급속히 냉각시키는 작업은?",
    options: [
      "❶ 담금질(quenching)",
      "② 뜨임(tempering)",
      "③ 풀림(annealing)",
      "④ 노오멀라이징(normalizing)"
    ],
    correct_answer: "담금질(quenching)"
  },
  {
    question: "사용압력이 중· 고압인 도시가스 배관의 유량을 구하는 식은? (단, K=유량계수, P1=초압, P2=종압, L=배관길이, S=비중, υ =동점도 이다.)",
    options: [
      "❶ ",
      "② ",
      "③ ",
      "④ "
    ],
    correct_answer: ""
  },
  {
    question: "전기방식법 중 외부전원법에 대한 설명으로 거리가 먼 것은?",
    options: [
      "① 간섭의 우려가 있다.",
      "② 설비비가 비교적 고가이다.",
      "③ 방식전류의 양을 조절할 수 있다.",
      "❹ 방식 효과 범위가 좁다."
    ],
    correct_answer: "방식 효과 범위가 좁다."
  },
  {
    question: "정압기에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 직동식은 파일럿식에 비해 일반적으로 응답속도가 빠르다.",
      "② 파일럿식은 높은 압력의 제어 정도가 요구되는 경우에 적합하다.",
      "❸ 직동식은 2차 압력이 설정압력보다 높아진 경우에 밸브가 열리는 구조로 되어 있다.",
      "④ 파일럿식은 언로딩형과 로딩형으로 나눌 수 있다."
    ],
    correct_answer: "직동식은 2차 압력이 설정압력보다 높아진 경우에 밸브가 열리는 구조로 되어 있다."
  },
  {
    question: "아세틸렌용기의 다공물질의 다공도를 측정하기 위해 사용되는 물질이 아닌 것은?",
    options: [
      "① 아세톤",
      "② 디메틸포름아미드",
      "③ 물",
      "❹ 메탄올"
    ],
    correct_answer: "메탄올"
  },
  {
    question: "액화석유가스 저장탱크를 지하에 묻는 경우의 설치 기준으로 옳지 않은 것은?",
    options: [
      "① 저장탱크를 묻는 곳의 주위에는 경계선을 지상에 표시 한다.",
      "② 지면으로부터 저장탱크의 정상부까지의 깊이는 60cm 이상으로 한다.",
      "❸ 저장탱크가 2개 이상 설치될 때 탱크사이의 간격은 2m 이상의 거리를 유지한다.",
      "④ 저장탱크실을 만들 때는 30cm 이상의 두께로 방수 조치한 철근콘크리트로 한다."
    ],
    correct_answer: "저장탱크가 2개 이상 설치될 때 탱크사이의 간격은 2m 이상의 거리를 유지한다."
  },
  {
    question: "다음 중 용기의 각인 표시 사항이 틀린 것은?",
    options: [
      "① 내용적 : V",
      "② 내압시험압력 : TP",
      "❸ 최고충전압력 : HP",
      "④ 동판 두께 : t"
    ],
    correct_answer: "최고충전압력 : HP"
  },
  {
    question: "도시가스배관은 지진발생시 피해규모에 따라 내진등급을 구분하고 있다. 내진1등급 배관을 옳게 나타낸 것은?",
    options: [
      "❶ 최고사용압력이 0.5MPa 이상인 배관",
      "② 최고사용압력이 3MPa 이상인 배관",
      "③ 최고사용압력이 5MPa 이상인 배관",
      "④ 최고사용압력이 6.9MPa 이상인 배관"
    ],
    correct_answer: "최고사용압력이 0.5MPa 이상인 배관"
  },
  {
    question: "다음 중 의료용 가스용기의 도색 표시가 옳게 된 것은?",
    options: [
      "① 질소 - 백색",
      "❷ 액화탄산가스 - 회색",
      "③ 헬륨 - 자색",
      "④ 산소 - 흑색"
    ],
    correct_answer: "액화탄산가스 - 회색"
  },
  {
    question: "독성 가스의 배관중 2중관의 외층관 내경은 내층관 외경의 몇 배로 하여야 하는가?",
    options: [
      "❶ 1.2배 이상",
      "② 1.5배 이상",
      "③ 2.0배 이상",
      "④ 2.5배 이상"
    ],
    correct_answer: "1.2배 이상"
  },
  {
    question: "고압가스 충전 용기의 운반 기준 중 운반책임자가 동승하지 않아도 되는 경우는?",
    options: [
      "① 가연성 압축가스 400m3을 차량에 적재하여 운반하는 경우",
      "❷ 독성 압축가스 90m3을 차량에 적재하여 운반하는 경우",
      "③ 조연성 액화가스 6500㎏을 차량에 적재하여 운반하는 경우",
      "④ 독성 액화가스 1200㎏을 차량에 적재하여 운반하는 경우"
    ],
    correct_answer: "독성 압축가스 90m3을 차량에 적재하여 운반하는 경우"
  },
  {
    question: "고압가스충전시설의 압축기 최종단에 설치된 안전밸브의 점검주기로 옳은 것은?",
    options: [
      "① 매월 1회이상",
      "❷ 1년에 1회이상",
      "③ 1주일에 1회이상",
      "④ 2년에 1회이상"
    ],
    correct_answer: "1년에 1회이상"
  },
  {
    question: "액화석유가스의 특성에 대한 설명으로 옳지 않은 것은?",
    options: [
      "① 액체는 물보다 가볍고, 기체는 공기보다 무겁다.",
      "❷ 액체의 온도에 의한 부피변화가 작다.",
      "③ 일반적으로 LNG보다 발열량이 크다.",
      "④ 연소시 다량의 공기가 필요하다."
    ],
    correct_answer: "액체의 온도에 의한 부피변화가 작다."
  },
  {
    question: "조정압력이 3.3kPa 이하인 조정기의 안전장치 작동 표준 압력은?",
    options: [
      "① 3kPa",
      "② 5kPa",
      "❸ 7kPa",
      "④ 10kPa"
    ],
    correct_answer: "7kPa"
  },
  {
    question: "부취제의 구비 조건으로 옳지 않은 것은?",
    options: [
      "① 독성이 없을 것",
      "② 부식성이 없고 화학적으로 안정할 것",
      "❸ 수용성으로 토양에 대한 투과성 좋을 것",
      "④ 완전연소 후 유해가스 발생이 없고 응축되지 않을 것"
    ],
    correct_answer: "수용성으로 토양에 대한 투과성 좋을 것"
  },
  {
    question: "다음 독성가스중 허용농도가 가장 낮은 가스는?",
    options: [
      "① 암모니아",
      "② 염소",
      "③ 산화에틸렌",
      "❹ 포스겐"
    ],
    correct_answer: "포스겐"
  },
  {
    question: "도시가스배관의 접합부분에 대한 원칙적인 연결방법은?",
    options: [
      "❶ 용접접합",
      "② 플렌지접합",
      "③ 기계적적합",
      "④ 나사접합"
    ],
    correct_answer: "용접접합"
  },
  {
    question: "공기액화분리기의 운전을 중지하여야 하는 조건으로 옳은 것은?",
    options: [
      "① 액화산소 5ℓ 중 아세틸렌 질량이 2㎎ 함유",
      "② 액화산소 5ℓ 중 아세틸렌 질량이 4㎎ 함유",
      "③ 액화산소 5ℓ 중 탄화수소의 탄소질량이 400㎎ 함유",
      "❹ 액화산소 5ℓ 중 탄화수소의 탄소질량이 600㎎ 함유"
    ],
    correct_answer: "액화산소 5ℓ 중 탄화수소의 탄소질량이 600㎎ 함유"
  },
  {
    question: "동절기 등 습도가 50% 이하인 경우에는 수소용기 밸브의 개폐를 특히 서서히 하여야 한다. 그 이유는 무엇인가?",
    options: [
      "① 밸브파열",
      "② 분해폭발",
      "❸ 정전기방지",
      "④ 용기압력유지"
    ],
    correct_answer: "정전기방지"
  },
  {
    question: "공기중에서 연소범위가 가장 넓은 가스는?",
    options: [
      "① 에탄",
      "❷ 에틸렌",
      "③ 프로판",
      "④ 프로필렌"
    ],
    correct_answer: "에틸렌"
  },
  {
    question: "도시가스사용시설중 가스누출경보차단장치 또는 가스누출 자동차단기의 설치 대상이 아닌 것은?",
    options: [
      "① 특정가스사용시설",
      "② 지하에 있는 음식점의 가스사용시설",
      "③ 식품접객업소로서 영업장면적이 100m2 이상인 가스 사용시설",
      "❹ 가스보일러가 설치된 가정용 가스사용시설"
    ],
    correct_answer: "가스보일러가 설치된 가정용 가스사용시설"
  },
  {
    question: "다음 중 LPG 저장용기에 대한 설명으로 가장 거리가 먼 것은?",
    options: [
      "① 용기의 재질은 탄소강을 주로 사용한다.",
      "② 용기의 색은 회색이다.",
      "③ 스프링식 안전밸브를 사용한다.",
      "❹ 내압시험 압력은 15.6 kg/㎝2 이하이다."
    ],
    correct_answer: "내압시험 압력은 15.6 kg/㎝2 이하이다."
  },
  {
    question: "부탄가스의 완전연소방정식을 다음과 같이 나타낼 때 화학양론 농도(Cst)는? (단, 공기중 산소는 21% 이다.)",
    options: [
      "① 1.8%",
      "❷ 3.1%",
      "③ 5.5%",
      "④ 8.9%"
    ],
    correct_answer: "3.1%"
  },
  {
    question: "연소기에서 역화(Flash Back)가 발생하는 경우를 바르게 설명한 것은?",
    options: [
      "① 가스의 분출속도보다 연소속도가 느린 경우에 발생",
      "❷ 부식에 의해 염공이 커진 경우",
      "③ 가스압력의 이상 상승시에 발생",
      "④ 가스량이 과도할 경우 발생"
    ],
    correct_answer: "부식에 의해 염공이 커진 경우"
  },
  {
    question: "접촉식과 비접촉식 온도계를 비교 설명한 것 중 옳은 것은?",
    options: [
      "① 접촉식은 움직이는 물체의 온도측정에 유리하다.",
      "❷ 일반적으로 접촉식이 더 정밀하다.",
      "③ 접촉식은 고온의 측정에 적합하다.",
      "④ 접촉식은 물체의 표면온도 측정에 주로 이용된다."
    ],
    correct_answer: "일반적으로 접촉식이 더 정밀하다."
  },
  {
    question: "도시가스회사에서는 가스홀더에서 매주 성분분석을 하는 데 다음 중 유해성분이 아닌 것은?",
    options: [
      "① H2S",
      "② S",
      "③ NH3",
      "❹ H2"
    ],
    correct_answer: "H2"
  },
  {
    question: "전자유량계의 측정원리는?",
    options: [
      "① Rutherford 법칙",
      "❷ Faraday 법칙",
      "③ Joule 법칙",
      "④ Bernoulli 법칙"
    ],
    correct_answer: "Faraday 법칙"
  },
  {
    question: "소형이며 대용량의 가스 측정에 적합하며 특히 중압가스의 계량도 가능한 가스미터는?",
    options: [
      "① 막식가스미터",
      "❷ 루트미터",
      "③ 습식가스미터",
      "④ 오리피스미터"
    ],
    correct_answer: "루트미터"
  },
  {
    question: "막식 가스계량기에서 가스가 가스계량기를 통과하나 지침이 작동하지 않는 고장을 무엇이라 하는가?",
    options: [
      "❶ 부동(不動)",
      "② 불통(不通)",
      "③ 기차(器差)불량",
      "④ 누설(漏泄)"
    ],
    correct_answer: "부동(不動)"
  },
  {
    question: "3× 3× 9cm의 직육면체로된 물체를 그림과 같이 물에 담그었더니 2/3가 물에 잠겼다. 이 물체의 비중은? (단, 물의 밀도는 1.0 g/cm3 이다. )",
    options: [
      "① 0.45",
      "❷ 0.67",
      "③ 0.85",
      "④ 0.97"
    ],
    correct_answer: "0.67"
  },
  {
    question: "검지가스와 반응하여 변색하는 시약을 여지 등에 침투시켜 검지하는 방법은?",
    options: [
      "❶ 시험지법",
      "② 검지관법",
      "③ 헴펠(Hempel)법",
      "④ 가연성 가스 검출기법"
    ],
    correct_answer: "시험지법"
  },
  {
    question: "가스미터 선정시 주의사항으로 옳지 않은 것은?",
    options: [
      "① 액화가스용일 것",
      "② 내압, 내열성이 좋을 것",
      "❸ 가스의 사용 최소유량에 적합한 계량능력의 것일 것",
      "④ 사용 중 기차변화가 없을 것"
    ],
    correct_answer: "가스의 사용 최소유량에 적합한 계량능력의 것일 것"
  },
  {
    question: "차압식 유량계 중 오리피스식이 벤투리식보다 좋은 특징을 갖는 것은?",
    options: [
      "① 내구성이 좋다",
      "② 정밀도가 높다",
      "❸ 제작비가 싸다",
      "④ 압력손실이 적다"
    ],
    correct_answer: "제작비가 싸다"
  },
  {
    question: "다음 중 계통오차가 아닌 것은?",
    options: [
      "① 계기오차",
      "② 환경오차",
      "❸ 과오오차",
      "④ 이론오차"
    ],
    correct_answer: "과오오차"
  },
  {
    question: "초음파 레벨 측정기의 특징으로 옳지 않은 것은?",
    options: [
      "① 측정대상에 직접 접촉하지 않고 레벨을 측정할 수 있다.",
      "② 부식성 액체나 유속이 큰 수로의 레벨도 측정할 수 있다.",
      "③ 측정범위가 넓다.",
      "❹ 고온, 고압의 환경에서도 사용이 편리하다."
    ],
    correct_answer: "고온, 고압의 환경에서도 사용이 편리하다."
  },
  {
    question: "열전대온도계의 종류 및 특성에 대한 설명으로 거리가 먼 것은?",
    options: [
      "① R형은 접촉식으로 가장 높은 온도를 측정할 수 있다.",
      "② K형은 산화성 분위기에서는 열화가 빠르다.",
      "❸ J형은 철과 콘스탄탄으로 구성되며 산화성 분위기에 강하다.",
      "④ T형은 극저온 계측에 주로 사용된다."
    ],
    correct_answer: "J형은 철과 콘스탄탄으로 구성되며 산화성 분위기에 강하다."
  },
  {
    question: "벨로즈식 압력계에서 압력 측정 시 벨로즈 내부에 압력이 가해질 경우 원래 위치로 돌아가지 않는 현상을 의미하는 것은?",
    options: [
      "① limited 현상",
      "② bellows 현상",
      "③ end all 현상",
      "❹ hysteresis 현상"
    ],
    correct_answer: "hysteresis 현상"
  },
  {
    question: "금속제의 저항이 온도가 올라가면 증가하는 원리를 이용한 저항온도계가 갖추어야 할 조건으로 거리가 먼 것은?",
    options: [
      "❶ 저항온도계수가 적을 것",
      "② 기계적으로, 화학적으로 안정할 것",
      "③ 교환하여 쓸 수 있는 저항요소가 많을 것",
      "④ 온도저항 곡선이 연속적으로 되어 있을 것"
    ],
    correct_answer: "저항온도계수가 적을 것"
  },
  {
    question: "가스 크로마그래피법의 특징이 아닌 것은?",
    options: [
      "① 응답속도가 늦다.",
      "❷ 선택성이 낮고 고감도로 측정할 수 있다.",
      "③ 분리능력이 좋고 여러 종류의 가스분석이 가능하다.",
      "④ 미량성분의 분석이 가능하지만 캐리어가스가 필요하다."
    ],
    correct_answer: "선택성이 낮고 고감도로 측정할 수 있다."
  },
  {
    question: "편차의 크기에 비례하여 조절요소의 속도가 연속적으로 변하는 동작은?",
    options: [
      "❶ 적분동작",
      "② 비례동작",
      "③ 미분동작",
      "④ 온-오프동작"
    ],
    correct_answer: "적분동작"
  },
  {
    question: "오리피스 유량계의 측정원리로 옳은 것은?",
    options: [
      "① 하이젠-포아제 원리",
      "② 팬닝법칙",
      "③ 아르키메데스 원리",
      "❹ 베르누이 원리"
    ],
    correct_answer: "베르누이 원리"
  },
  {
    question: "힘(f )을 가하여 스프링이 신장(y )되었다면, 이와 같은 제어동작은?",
    options: [
      "① 적분(I )동작",
      "② 미분(D )동작",
      "❸ 비례(P )동작",
      "④ 비례적분(PI )동작"
    ],
    correct_answer: "비례(P )동작"
  },
  {
    question: "실측식 가스미터가 아닌 것은?",
    options: [
      "❶ 터빈식 가스미터",
      "② 건식 가스미터",
      "③ 습식 가스미터",
      "④ 막식 가스미터"
    ],
    correct_answer: "터빈식 가스미터"
  },
  {
    question: "건조공기 단위질량에 수반되는 수증기의 질량은 어느 습도에 해당되는가?",
    options: [
      "① 상대습도",
      "❷ 절대습도",
      "③ 몰습도",
      "④ 비교습도"
    ],
    correct_answer: "절대습도"
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