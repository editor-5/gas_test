// JavaScript Quiz Data
// JavaScript Quiz Data (전체 정리)

// 퀴즈 데이터 구조 통일 (question, options, correct_answer)
const quizData = [
  {
    question: "불완전연소에 의한 매연,먼지등을 제거하는 집진장치 중 건식 집진장치가 아닌 것은?",
    options: [
      "① 백필터",
      "② 사이클론",
      "③ 멀티클론",
      "❹ 사이클론스크레버"
    ],
    correct_answer: "사이클론스크레버"
  },
  {
    question: "연소속도에 영향을 주는 인자가 아닌 것은?",
    options: [
      "① 온도",
      "② 압력",
      "❸ 가스의 부피",
      "④ 가스의 조성"
    ],
    correct_answer: "가스의 부피"
  },
  {
    question: "발화지연에 대한 설명으로 맞는 것은?",
    options: [
      "① 저온, 저압일수록 발화지연은 짧아진다.",
      "❷ 어느 온도에서 가열하기 시작하여 발화시까지 걸린 시간을 말한다.",
      "③ 화염의 색이 적색에서 청색으로 변하는데 걸리는 시간을 말한다.",
      "④ 가연성가스와 산소의 혼합비가 완전 산화에 가까울수록 발화지연은 길어진다."
    ],
    correct_answer: "어느 온도에서 가열하기 시작하여 발화시까지 걸린 시간을 말한다."
  },
  {
    question: "다음은 유동층 연소의 특성에 대한 설명이다. 이 중 틀린 것은?",
    options: [
      "① 연소시 화염층이 작아진다.",
      "② 크링커 장해를 경감할 수 있다.",
      "❸ 질소산화물(NOx)의 발생량이 증가한다.",
      "④ 화격자의 단위 면적당 열부하를 크게 얻을 수 있다."
    ],
    correct_answer: "질소산화물(NOx)의 발생량이 증가한다."
  },
  {
    question: "연소시 배기가스 중의 질소산화물(NOx)의 함량을 줄이는 방법중 적당하지 않은 것은?",
    options: [
      "❶ 굴뚝을 높게한다.",
      "② 연소온도를 낮게한다.",
      "③ 질소함량이 적은 연료를 사용한다.",
      "④ 연소가스가 고온으로 유지되는 시간을 짧게한다."
    ],
    correct_answer: "굴뚝을 높게한다."
  },
  {
    question: "다음의 연소와 폭발에 관한 설명중 틀린 것은?",
    options: [
      "① 연소란 빛과 열의 발생을 수반하는 산화반응이다.",
      "② 분해 또는 연소등의 반응에 의한 폭발원인은 화학적 폭발이다.",
      "❸ 발열속도＞방열속도인 경우 발화점이하로 떨어져 연소 과정에서 폭발로 이어진다.",
      "④ 폭발이란 급격한 압력의 발생 또는 음향을 내며 파열 되거나 팽창하는 현상이다."
    ],
    correct_answer: "발열속도＞방열속도인 경우 발화점이하로 떨어져 연소 과정에서 폭발로 이어진다."
  },
  {
    question: "연소공기비가 표준보다 큰 경우 어떤 현상이 발생하는가?",
    options: [
      "① 매연 발생량이 적어진다.",
      "❷ 배가스량이 많아지고 열효율이 저하된다.",
      "③ 화염온도가 높아져 버너에 손상을 입힌다.",
      "④ 연소실 온도가 높아져 전열효과가 커진다."
    ],
    correct_answer: "배가스량이 많아지고 열효율이 저하된다."
  },
  {
    question: "다음 가스 중 연소범위가 가장 작은 것은?",
    options: [
      "① 수소",
      "❷ 프로판",
      "③ 암모니아",
      "④ 프로필렌"
    ],
    correct_answer: "프로판"
  },
  {
    question: "메탄 60%, 에탄 30%, 프로판 5%, 부탄 5% 인 혼합가스의 공기중 폭발하한값은? (단, 각 성분의 하한값은 메탄 5%, 에탄 3%, 프로판 2.1%, 부탄 1.8%이다.)",
    options: [
      "❶ 3.8",
      "② 7.6",
      "③ 13.5",
      "④ 18.3"
    ],
    correct_answer: "3.8"
  },
  {
    question: "CmHn 1Nm3가 연소해서 생기는 H2O의 양(Nm3)은 얼마인가?",
    options: [
      "① n/4",
      "❷ n/2",
      "③ n",
      "④ 2n"
    ],
    correct_answer: "n/2"
  },
  {
    question: "0℃, 1 atm 에서 10m3 의 다음 조성을 가지는 기체연료의 이론공기량은?",
    options: [
      "❶ 29.8m3",
      "② 20.6m3",
      "③ 16.8m3",
      "④ 8.7m3"
    ],
    correct_answer: "29.8m3"
  },
  {
    question: "이상기체를 일정한 부피에서 가열하면 압력과 온도의 변화는 어떻게 되는가?",
    options: [
      "❶ 압력증가 온도상승",
      "② 압력증가 온도일정",
      "③ 압력일정 온도상승",
      "④ 압력일정 온도일정"
    ],
    correct_answer: "압력증가 온도상승"
  },
  {
    question: "다음 중 폭발방지를 위한 본질안전장치에 해당되지 않는 것은?",
    options: [
      "❶ 압력 방출장치",
      "② 온도 제어장치",
      "③ 조성 억제장치",
      "④ 착화원 차단장치"
    ],
    correct_answer: "압력 방출장치"
  },
  {
    question: "증기속에 수분이 많을 때 일어나는 현상은?",
    options: [
      "① 증기손실이 적다.",
      "② 증기엔탈피가 증가된다.",
      "③ 증기배관에 수격작용이 방지된다.",
      "❹ 증기배관 및 장치부식이 발생된다."
    ],
    correct_answer: "증기배관 및 장치부식이 발생된다."
  },
  {
    question: "다음은 폭굉을 일으킬 수 있는 기체가 파이프 내에 있을 때 폭굉 방지 및 방호에 관한 내용이다. 옳지 않은 사항은?",
    options: [
      "① 파이프의 지름대 길이의 비는 가급적 작도록 한다.",
      "② 파이프 라인에 오리피스 같은 장애물이 없도록 한다.",
      "❸ 파이프 라인을 장애물이 있는 곳은 가급적이면 축소 한다.",
      "④ 공정 라인에서 회전이 가능하면 가급적 완만한 회전을 이루도록 한다."
    ],
    correct_answer: "파이프 라인을 장애물이 있는 곳은 가급적이면 축소 한다."
  },
  {
    question: "폭굉이 발생하는 경우 파면의 압력은 정상연소에서 발생하는 것보다 일반적으로 얼마나 큰가?",
    options: [
      "❶ 2배",
      "② 5배",
      "③ 8배",
      "④ 10배"
    ],
    correct_answer: "2배"
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
    question: "어떤 혼합가스가 산소 10몰, 질소 10몰, 메탄 5몰을 포함하고 있다. 이 혼합가스의 비중은 얼마인가? (단, 공기의 평균분자량:29임)",
    options: [
      "❶ 0.52",
      "② 0.62",
      "③ 0.72",
      "④ 0.82"
    ],
    correct_answer: "0.52"
  },
  {
    question: "불꽃 중 탄소가 많이 생겨서 황색으로 빛나는 불꽃은?",
    options: [
      "❶ 휘염",
      "② 층류염",
      "③ 환원염",
      "④ 확산염"
    ],
    correct_answer: "휘염"
  },
  {
    question: "기체 연료의 특성을 설명한 것이다. 맞는 것은?",
    options: [
      "① 가스 연료의 화염은 방사율이 크기 때문에 복사에의한 열전달률이 작다.",
      "❷ 기체연료는 연소성이 뛰어나기 때문에 연소 조절이 간단하고 자동화가 용이하다.",
      "③ 단위 체적당 발열량이 액체나 고체연료에 비해 대단히 크기 때문에 저장이나 수송에 큰 시설을 필요로 한다.",
      "④ 저 산소 연소를 시키기 쉽기 때문에 대기오염 물질인 질소산화물(NOx)의 생성이 많으나 분진이나 매연의 발생은 거의 없다."
    ],
    correct_answer: "기체연료는 연소성이 뛰어나기 때문에 연소 조절이 간단하고 자동화가 용이하다."
  },
  {
    question: "액화천연가스(LNG)의 탱크로서 저온수축을 흡수하는 기구를 가진 금속박판을 사용한 탱크는?",
    options: [
      "① 프레스트래스트 콘크리이트제탱크",
      "② 동결식 반지하탱크",
      "③ 금속제 이중구조탱크",
      "❹ 금속제 멤브레인탱크"
    ],
    correct_answer: "금속제 멤브레인탱크"
  },
  {
    question: "다음 중 회전펌프에 해당되지 않는 것은?",
    options: [
      "① 기어펌프",
      "② 나사펌프",
      "③ 베인펌프",
      "❹ 피스톤펌프"
    ],
    correct_answer: "피스톤펌프"
  },
  {
    question: "최고 충전압력이 150atm 인 용기에 산소가 35℃ 에서 150atm 으로 충전되었다. 이 용기가 화재로 온도가 상승하여 안전밸브가 작동했다면 이 때 산소의 온도는?",
    options: [
      "① 104℃",
      "② 120℃",
      "③ 162℃",
      "❹ 138℃"
    ],
    correct_answer: "138℃"
  },
  {
    question: "다음 중 역류방지 밸브에 해당되지 않는 것은?",
    options: [
      "① 볼체크 밸브",
      "❷ y형 나사밸브",
      "③ 스윙형 체크밸브",
      "④ 리프트형 체크밸브"
    ],
    correct_answer: "y형 나사밸브"
  },
  {
    question: "다음 고압가스 제조장치의 재료에 대한 설명으로 틀린 것은?",
    options: [
      "① 상온건조 상태의 염소가스에서는 보통강을 사용해도 된다.",
      "❷ 암모니아 아세틸렌의 배관재료에는 구리재를 사용해도 된다.",
      "③ 탄소강의 충격치는 -70℃ 부근에서 거의 0으로 된다.",
      "④ 암모니아 합성탑 내통의 재료에는 18-8 스테인레스강을 사용 한다."
    ],
    correct_answer: "암모니아 아세틸렌의 배관재료에는 구리재를 사용해도 된다."
  },
  {
    question: "다음 정전기 제거 또는 발생방지 조치에 관한 설명이다. 관계가 먼 것은?",
    options: [
      "① 대상물을 접지 시킨다.",
      "② 상대습도를 높인다.",
      "③ 공기를 이온화 시킨다.",
      "❹ 전기 저항을 증가 시킨다."
    ],
    correct_answer: "전기 저항을 증가 시킨다."
  },
  {
    question: "최고 사용온도가 100℃,길이ℓ =10m 인 배관을 상온(15℃)에서 설치하였다면 최고온도 사용시 팽창으로 늘어나는 길이는 몇 mm 인가? (단,선팽창계수 α =12x10-6 m/m℃)",
    options: [
      "① 5.1 mm",
      "❷ 10.2 mm",
      "③ 102 mm",
      "④ 204 mm"
    ],
    correct_answer: "10.2 mm"
  },
  {
    question: "온도가 120℃ 를 초과하는 경우에 온수보일러에 안전밸브를 설치하여야 하는데 안전밸브의 호칭 지름은 몇 mm 이상으로 하는가",
    options: [
      "① 16mm",
      "❷ 20mm",
      "③ 26mm",
      "④ 32mm"
    ],
    correct_answer: "20mm"
  },
  {
    question: "펌프에서 발생하는 현상이 아닌 것은?",
    options: [
      "❶ 초킹(Choking)",
      "② 서어징(Surging)",
      "③ 수격작용(Water hammering)",
      "④ 캐비테이숀(Cavitation)"
    ],
    correct_answer: "초킹(Choking)"
  },
  {
    question: "특수강에 내마멸성 내식성을 부여하기 위하여 첨가하는 원소는?",
    options: [
      "① 니켈",
      "❷ 크롬",
      "③ 몰리브덴",
      "④ 망간"
    ],
    correct_answer: "크롬"
  },
  {
    question: "고압가스 용기의 충전구에 관한 내용 중 옳은 것은?",
    options: [
      "① 가연성 가스의 경우 대개 오른 나사이다.",
      "② 충전가스가 암모니아인 경우 왼 나사이다.",
      "③ 가스 충전구는 나사가 없을수는 없다.",
      "❹ 가연성 가스의 경우 대개 왼 나사이다."
    ],
    correct_answer: "가연성 가스의 경우 대개 왼 나사이다."
  },
  {
    question: "탄화수소와 수증기의 반응을 이용하여 가스를 제조할 때 반응후 생성되지 않는 것은?",
    options: [
      "① CO",
      "❷ SO2",
      "③ H2O",
      "④ CO2"
    ],
    correct_answer: "SO2"
  },
  {
    question: "도시가스 공장에 내용적 25(m3) 의 저장탱크가 2개 설치되어있다. 총저장 능력은 몇 톤 인가? (단, 도시가스비중:0.71)",
    options: [
      "① 35.50",
      "② 45.50",
      "③ 53.40",
      "❹ 63.40"
    ],
    correct_answer: "63.40"
  },
  {
    question: "정압기를 평가, 선정할 경우에는 정압기의 각 특성이 사용 조건에 적합하도록 선정하여야 한다. 다음 정압기 평가 및 선정과 관계가 먼 특성은?",
    options: [
      "① 정특성",
      "② 동특성",
      "③ 유량특성",
      "❹ 혼합특성"
    ],
    correct_answer: "혼합특성"
  },
  {
    question: "다음 용어 정의 중 틀리게 설명한 것은 어느것 인가?",
    options: [
      "① 액화석유가스라 함은 프로판 부탄을 주성분으로 한 가스를 액화한 것을 말한다.",
      "② 액화석유가스충전사업은 액화석유가스를 용기에 충전하여 공급하는 사업을 말한다.",
      "③ 액화석유가스판매사업은 용기에 충전된 액화석유가스를 판매하는 것을 말한다.",
      "❹ 가스용품제조사업은 일반고압가스를 사용하기 위한 가스용품을 제조하는 사업을 말한다."
    ],
    correct_answer: "가스용품제조사업은 일반고압가스를 사용하기 위한 가스용품을 제조하는 사업을 말한다."
  },
  {
    question: "저압 가스 배관에서 관의 내경이 1/2 배로 되면 유량은 몇 배로 되는가? (단, 다른 모든 조건은 동일한 것으로 본다.)",
    options: [
      "❶ 0.17",
      "② 0.50",
      "③ 2.00",
      "④ 4.00"
    ],
    correct_answer: "0.17"
  },
  {
    question: "배관의 관경:40mm, 길이:100m 인 배관에 비중1.5 인 가스를 저압으로 공급시 압력손실이 30mmH20 발생되었다.이때 배관을 통과하는 가스의 시간당 유량은 얼마인가? (단, Pole상수는 0.707)",
    options: [
      "❶ 10.1m3/h",
      "② 1.4m3/h",
      "③ 5.5m3/h",
      "④ 15.1m3/h"
    ],
    correct_answer: "10.1m3/h"
  },
  {
    question: "왕복식 압축기에서 실린더를 냉각시켜서 얻을 수 있는 냉각 효과가 아닌 것은?",
    options: [
      "① 윤활유의 질화방지",
      "② 윤활기능의 유지향상",
      "❸ 체적효율의 감소",
      "④ 압축효율의 증가(동력감소)"
    ],
    correct_answer: "체적효율의 감소"
  },
  {
    question: "매설관의 전기방식법 중 유전 양극법에 대한 설명으로 틀린 것은?",
    options: [
      "① 희생양극을 사용하여 관로의 부식 전위차를 제거한다.",
      "② 양극은 소모되므로 보충할 필요가 없다.",
      "③ 타 매설물에의 간섭이 거의 없다.",
      "❹ 방식전류의 세기(강도)의 조절이 자유롭다."
    ],
    correct_answer: "방식전류의 세기(강도)의 조절이 자유롭다."
  },
  {
    question: "고온,고압하에서 수소를 사용하는 장치공정의 재질은 어느 재료를 사용 하는가?",
    options: [
      "① 탄소강",
      "❷ 크롬강",
      "③ 조강",
      "④ 실리콘강"
    ],
    correct_answer: "크롬강"
  },
  {
    question: "독성액화 가스를 차량으로 운반할 때 몇 kg 이상 이면 한국가스안전공사에서 실시하는 운반에 관한 소정의 교육을 이수한 사람 또는 운반 책임자가 동승해야만 하는가? (단, 허용농도가 100 만분의 1 이상일 경우)",
    options: [
      "① 6,000kg",
      "② 3,000kg",
      "③ 2,000kg",
      "❹ 1,000kg"
    ],
    correct_answer: "1,000kg"
  },
  {
    question: "액화석유가스 충전사업자가 가스공급시마다 실시하는 안전점검 기준으로 점검하지 않아도 되는 것은?",
    options: [
      "① 충전용기의 설치위치",
      "② 가스용품의 관리 및 작동상태",
      "③ 충전용기와 화기와의 거리",
      "❹ 충전량 표시 증지의 부착 여부확인"
    ],
    correct_answer: "충전량 표시 증지의 부착 여부확인"
  },
  {
    question: "고압가스 충전용기의 운반에 관한 사항으로 바르지 않은 것은?",
    options: [
      "① 밸브가 돌출된 충전용기는 고정식 프로텍터를 부착시켜야 한다.",
      "② 충전용기를 로프로 견고하게 결속해야 한다.",
      "③ 충전용기는 항상 40℃ 이하로 유지해야 한다.",
      "❹ 운반시 보기쉬운 곳에 황색글씨로 위험표시를 하여야한다."
    ],
    correct_answer: "운반시 보기쉬운 곳에 황색글씨로 위험표시를 하여야한다."
  },
  {
    question: "액화산소 탱크에 설치하여야 할 안전밸브의 작동압력은 어느 것인가?",
    options: [
      "① 내압시험압력 × 1.5배 이하",
      "② 상용압력 × 0.8배 이하",
      "③ 내압시험압력 × 0.8배 이하",
      "❹ 상용압력 × 1.5배 이하"
    ],
    correct_answer: "상용압력 × 1.5배 이하"
  },
  {
    question: "고압가스 용기중 잔가스를 배출하고자 할 때 안전관리상 바른 방법은?",
    options: [
      "① 잔가스 배출이므로 소화기를 준비하지 않아도 된다.",
      "❷ 통풍이 양호한 옥외에서 서서히 배출시킨다.",
      "③ 통풍이 양호한 구조물내에서 급속히 배출시킨다.",
      "④ 기존용기보다 큰 용기로 이송시킨다."
    ],
    correct_answer: "통풍이 양호한 옥외에서 서서히 배출시킨다."
  },
  {
    question: "액화석유가스의 저장설비 및 가스설비실의 통풍구조에 대한 설명 중 옳은 것은?",
    options: [
      "① 사방을 방호벽으로 설치하는 경우 한방향으로 2개소의 환기구를 설치 한다.",
      "❷ 환기구의 1개소 면적은 2,400 cm2 이하로 한다.",
      "③ 강제통풍 시설의 방출구는 지면에서 2M 이상의 높이에 설치 한다.",
      "④ 강제통풍 시설의 통풍능력은 1m 마다 0.3m3/ 분으로 한다."
    ],
    correct_answer: "환기구의 1개소 면적은 2,400 cm2 이하로 한다."
  },
  {
    question: "메탄:50%, 에탄:30%, 프로판:20% 인 혼합가스의 공기중 폭발하한계는 얼마인가? (단, 메탄, 에탄, 프로판의 공기중 폭발하한계는 각각 5%, 3%, 2% 이다.)",
    options: [
      "① 4.2%",
      "❷ 3.3%",
      "③ 2.8%",
      "④ 2.3%"
    ],
    correct_answer: "3.3%"
  },
  {
    question: "냉동제조의 시설기준으로 안전장치를 설치해야 할 경우 내용이 틀린 것은?",
    options: [
      "❶ 암모니아 및 브롬화메탄을 저장하는 저장소에 방폭 구조로 할 것",
      "② 냉매가스의 압력이 설계압력이상인 경우 즉시 상용의 압력이하로 되돌릴 수 있는 안전장치를 설치할 것",
      "③ 가연성가스 냉매설비에 설치하는 경우에는 지상으로부터 5m 이상의 높이로 설치할 것",
      "④ 지하에 설치하는 냉매설비는 역류되지 않도록 배기 덕트에 방출구를 연결할 것"
    ],
    correct_answer: "암모니아 및 브롬화메탄을 저장하는 저장소에 방폭 구조로 할 것"
  },
  {
    question: "역화방지 장치를 설치하여야 하는 곳으로 틀린 것은?",
    options: [
      "① 가연성가스를 압축하는 압축기와 오토크레이브사이",
      "② 아세틸렌의 고압 건조기와 충전용 교체밸브사이",
      "③ 아세틸렌의 고압 건조기와 아세틸렌 충전용지관사이",
      "❹ 가연성가스를 압축하는 압축기와 충전용주관사이"
    ],
    correct_answer: "가연성가스를 압축하는 압축기와 충전용주관사이"
  },
  {
    question: "아세틸렌가스를 온도에 불구하고 2.5MPa 의 압력으로 압축할 때 희석제로 틀린 것은?",
    options: [
      "① 질소",
      "② 메탄",
      "③ 일산화탄소",
      "❹ 산소"
    ],
    correct_answer: "산소"
  },
  {
    question: "산소· 수소 혼합가스의 일반적인 폭굉파 속도는?",
    options: [
      "① 1000m/s ∼2000m/s",
      "❷ 2000m/s ∼3500m/s",
      "③ 3500m/s ∼5000m/s",
      "④ 5000m/s 이상"
    ],
    correct_answer: "2000m/s ∼3500m/s"
  },
  {
    question: "차량에 고정된 탱크의 충전시설 기준을 정하여, 가연성 가스충전시설의 고압가스설비는 그 외면으로부터 다른 가연성가스 충전시설의 고압가스설비와 안전거리 이상을 유지하도록 하고 있다. 그 거리는 몇 m 이어야 하는가?",
    options: [
      "① 2m",
      "② 3m",
      "❸ 5m",
      "④ 6m"
    ],
    correct_answer: "5m"
  },
  {
    question: "고압 가스를 용기에 충전할 때 바르지 않는 것은?",
    options: [
      "❶ 아세틸렌은 아세톤 또는 디메틸포름 아미드를 침윤 시킨 후 충전한다.",
      "② 아세틸렌은 충전 후의 압력 15℃ 에서 1.5MPa 이하로 될 때까지 정치하여 둔다.",
      "③ 시안화수소는 아황산 가스등의 안정제를 첨가하여 충전한다.",
      "④ 시안화수소는 충전후 24 시간 정치한다."
    ],
    correct_answer: "아세틸렌은 아세톤 또는 디메틸포름 아미드를 침윤 시킨 후 충전한다."
  },
  {
    question: "가스사용시설에는 전기방폭설비를 갖춰야 한다. 전기설비 내부에 불활성기체를 압입하여 폭발성가스가 침입하는 것을 방지한 구조는?",
    options: [
      "① 내압(耐壓)방폭구조",
      "② 유입(油入)방폭구조",
      "❸ 압력(壓力)방폭구조",
      "④ 안전증(安全增)방폭구조"
    ],
    correct_answer: "압력(壓力)방폭구조"
  },
  {
    question: "도시가스 사업법에서 정하고 있는 공급시설이 아닌 것은?",
    options: [
      "① 본관",
      "② 공급관",
      "③ 사용자 공급관",
      "❹ 내관"
    ],
    correct_answer: "내관"
  },
  {
    question: "가정용 LP 가스가 안전상 취약점이 아닌 것은?",
    options: [
      "① 소량 누출로 폭발의 위험",
      "② 가스의 누출이 눈으로 식별 불가능",
      "③ 기화시 약 250배로 팽창 확산하여 인화시 피해가 큼",
      "❹ 냄새가 없어 누출을 코로 식별 불가능"
    ],
    correct_answer: "냄새가 없어 누출을 코로 식별 불가능"
  },
  {
    question: "고압가스제조설비를 검사,수리하기 위하여 작업원이 들어가서 작업을 실시해도 좋은 것은?",
    options: [
      "❶ 염소:1ppm 산소:21%",
      "② 황화수소:15ppm 메탄:0.7%",
      "③ 프로판:0.7% 산소:19%",
      "④ 암모니아:15ppm 수소:1.5%"
    ],
    correct_answer: "염소:1ppm 산소:21%"
  },
  {
    question: "제조소 및 공급소에 설치하는 가스공급시설의 외면으로부터 화기취급 장소까지 유지해야 할 거리는?",
    options: [
      "① 5m 이상의 우회거리",
      "❷ 8m 이상의 우회거리",
      "③ 10m 이상의 우회거리",
      "④ 13m 이상의 우회거리"
    ],
    correct_answer: "8m 이상의 우회거리"
  },
  {
    question: "고압가스용기의 파열사고의 큰 원인 중 하나는 용기의 내압(內壓)의 이상상승이다. 이상상승의 원인이 아닌 것은?",
    options: [
      "① 가열",
      "② 일광의 직사",
      "③ 내용물의 중합반응",
      "❹ 혼합충전"
    ],
    correct_answer: "혼합충전"
  },
  {
    question: "다음 제1종 보호시설에 해당되지 않는 것은?",
    options: [
      "❶ 사람을 수용하지 않는 독립된 단일건물의 연면적이 1000m2 이상",
      "② 수용능력이 300명 이상인 교회당, 공연장, 교회",
      "③ 수용능력이 20인 이상의 아동복지 시설및 유사시설",
      "④ 문화재 보호법에 의하여 지정 문화재로 지정된 건축물"
    ],
    correct_answer: "사람을 수용하지 않는 독립된 단일건물의 연면적이 1000m2 이상"
  },
  {
    question: "고점도 유체 또는 오리피스 미터에서는 측정이 곤란한 소유량을 측정할 수 있는 계측기는?",
    options: [
      "① 로터리 피스톤형",
      "❷ 로타미터",
      "③ 전자 유량계",
      "④ 와류 유량계"
    ],
    correct_answer: "로타미터"
  },
  {
    question: "자동조정에 속하지 않는 제어량은?",
    options: [
      "① 주파수",
      "❷ 방위",
      "③ 속도",
      "④ 전압"
    ],
    correct_answer: "방위"
  },
  {
    question: "밀도 0.8 kg/m3 의 가스를 사용최대유량 2 m3/h 로 운전하였더니 막식 가스미터의 입구압력이 50mmHg 였다. 검정통과에 필요한 측정유동율 범위에 해당하는 출구압력의 범위를 구하시오.",
    options: [
      "① 0 ∼15mmHg",
      "② 15 ∼30mmHg",
      "③ 25∼40mmHg",
      "❹ 35 ∼50mmHg"
    ],
    correct_answer: "35 ∼50mmHg"
  },
  {
    question: "액면상에 부자 (浮子) 를 띄워 부자의 위치를 측정하는 방법의 액면계는?",
    options: [
      "❶ 플로우트식 액면계",
      "② 차압식 액면계",
      "③ 정전용량식 액면계",
      "④ 퍼지식 액면계"
    ],
    correct_answer: "플로우트식 액면계"
  },
  {
    question: "내압시험에 관한 설명이 맞는 것은?",
    options: [
      "❶ 1,000mmH2O 압력의 가스 또는 공기를 미터내에 밀폐시켜 약 3분간 유지하였을 때 그 압력강하가 20mmH2O 이하여야 한다.",
      "② 1,000mmH2O 압력의 가스 또는 공기를 미터내에 밀폐시켜 약 5분간 유지하였을 때 그 압력강하가 20mmH2O 이하여야 한다.",
      "③ 1,000mmH2O 압력의 가스 또는 공기를 미터내에 밀폐시켜 약 3분간 유지하였을 때 그 압력강하가 30mmH2O 이하여야 한다.",
      "④ 1,000mmH2O 압력의 가스 또는 공기를 미터내에 밀폐시켜 약 5분간 유지하였을 때 그 압력강하가 30mmH2O 이하여야 한다."
    ],
    correct_answer: "1,000mmH2O 압력의 가스 또는 공기를 미터내에 밀폐시켜 약 3분간 유지하였을 때 그 압력강하가 20mmH2O 이하여야 한다."
  },
  {
    question: "유량과 일정한 관계에 있는 다른 양(흐름속에 있는 회전자의 회전수)을 측정하므로서 간접적으로 유량을 구하는 방법 중 가장 많이 쓰이고 있는 것은?",
    options: [
      "① 루트식",
      "② 로터리식",
      "❸ 독립내기식",
      "④ 오발식"
    ],
    correct_answer: "독립내기식"
  },
  {
    question: "발색시약을 흡착시킨 검지제를 사용하는 검지관법에 의한 아세틸렌의 검지한도는 얼마인가?",
    options: [
      "① 5 ppm",
      "❷ 10 ppm",
      "③ 20 ppm",
      "④ 100 ppm"
    ],
    correct_answer: "10 ppm"
  },
  {
    question: "다음 p동작에 관해서 기술한 것으로 옳은 것은?",
    options: [
      "① 비례대의 폭을 좁히는 등 오프세트는 작게 된다.",
      "❷ 조작량은 제어편차의 변화 속도에 비례한 제어동작이다.",
      "③ 제어편차에 비례한 속도로서 조작량을 변화시킨 제어조작 이다.",
      "④ 비례대의 폭을 넓히는등 제어동작이 작동할 때는 강하다."
    ],
    correct_answer: "조작량은 제어편차의 변화 속도에 비례한 제어동작이다."
  },
  {
    question: "비중이 910 ㎏/m3 인 기름 20L 의 무게는 몇 ㎏ 인가?",
    options: [
      "① 15.4kg",
      "② 182kg",
      "③ 16.2kg",
      "❹ 18.2kg"
    ],
    correct_answer: "18.2kg"
  },
  {
    question: "가스누출 검지기의 검지( sencer ) 부분의 금속으로 사용하지 않은 것은?",
    options: [
      "① 백금",
      "② 리튬",
      "❸ 코발트",
      "④ 바나듐"
    ],
    correct_answer: "코발트"
  },
  {
    question: "접촉 연소식 가스검지기의 특성이 아닌 것은?",
    options: [
      "① 가연성가스는 모두 검지대상이 되므로 특정한 성분만을 검지할 수 없다.",
      "❷ 완전연소가 일어나도록 순수한 산소를 공급해 준다.",
      "③ 연소반응에 따른 필라멘트의 전기저항 증가를 검출한다.",
      "④ 측정가스의 반응열을 이용하므로 가스는 일정농도 이상이 필요하다."
    ],
    correct_answer: "완전연소가 일어나도록 순수한 산소를 공급해 준다."
  },
  {
    question: "분별 연소법을 사용하여 가스를 분석할 경우 분별적으로 완전히 연소되는 가스는?",
    options: [
      "① 수소, 이산화탄소",
      "② 이산화탄소, 탄화수소",
      "③ 일산화탄소, 탄화수소",
      "❹ 수소, 일산화탄소"
    ],
    correct_answer: "수소, 일산화탄소"
  },
  {
    question: "수용가에 부착되어 있는 사용중인 가스미터의 사용공차는 얼마로 규정되어 있는가?",
    options: [
      "① 실제 사용상태의 ± 3 %",
      "❷ 실제 사용상태의 ± 4 %",
      "③ 실제 사용상태의 ± 5 %",
      "④ 실제 사용상태의 ± 6 %"
    ],
    correct_answer: "실제 사용상태의 ± 4 %"
  },
  {
    question: "오르자트 가스 분석기에서 가스의 흡수 순서가 맞는 것은?",
    options: [
      "① CO → CO2 → O2",
      "② CO2 → CO → O2",
      "③ O2 → CO2 → CO",
      "❹ CO2 → O2 → CO"
    ],
    correct_answer: "CO2 → O2 → CO"
  },
  {
    question: "다음 중 유량 측정 기기로서 바르지 못한 것은?",
    options: [
      "① 가스 유량 측정에는 가스미터가 쓰인다.",
      "② 유체의 유량측정에는 벤츄리미터가 쓰인다.",
      "③ 오리피스미터는 배관에 붙여서 압력차를 측정하여 유량을 구한다.",
      "❹ 가스 유량측정에는 스트로보스탁이 쓰인다."
    ],
    correct_answer: "가스 유량측정에는 스트로보스탁이 쓰인다."
  },
  {
    question: "다음 온도계 중 사용 온도범위가 넓고, 가격이 비교적 저렴하며, 내구성이 좋으므로 공업용으로 가장 널리 사용되는 온도계는?",
    options: [
      "① 유리온도계",
      "❷ 열전대온도계",
      "③ 바이메탈온도계",
      "④ 반도체 저항온도계"
    ],
    correct_answer: "열전대온도계"
  },
  {
    question: "기체 크로마토그래피 장치에 속하지 않는 것은?",
    options: [
      "① 주사기",
      "② column 검출기",
      "③ 유량 측정기",
      "❹ 직류 증폭장치"
    ],
    correct_answer: "직류 증폭장치"
  },
  {
    question: "가정용 LP 가스미터의 감도 유량은 얼마인가?",
    options: [
      "① 20ℓ /h",
      "② 15ℓ /h",
      "③ 10ℓ /h",
      "❹ 5ℓ /h"
    ],
    correct_answer: "5ℓ /h"
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
    question: "100 psi 를 atm 으로 환산하면 몇 atm 인가?",
    options: [
      "① 4.8 atm",
      "② 5.8 atm",
      "❸ 6.8 atm",
      "④ 7.8 atm"         
    ],
    correct_answer: "6.8 atm"
  }
];;
// 필요 시 나머지 문제 추가 가능



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