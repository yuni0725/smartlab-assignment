import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  margin: 0px 5px 20px 10px;

  font-size: 24px;

  height: 100%;

  background-color: #1f1f1f;
  padding: 10px;
`;

const Box = styled.div`
  background-color: #121212;
  padding: 10px;
`;

function taskText(fileID: string) {
  if (fileID) {
    const problem: { [key: string]: string } = {
      extra1:
        "\n> ## 1주차 추가 자료\n\n---\n\n### 수록된 내용\n\n- 변수의 할당\n- 정수(int)\n- 문자열(string)\n- 논리형(boolean)\n- **입출력/IO(input의 쓰임)**\n- **리스트(list)**\n- 랜덤함수\n\n### 변수의 할당\n\n- 변수란 변하는 수로 특정 데이터를 담는 상자(메모리)의 역할을 한다.\n- 파이썬에서 변수는 `=` 기호로 정의한다.\n- '데이터를 변수에 `할당`한다' 라고 한다.\n  ```python\n  hope_age = 8\n  real_age = 18\n  club = '스마트랩'\n  ```\n  - hope_age 변수에는 8이라는 정수형 데이터를 할당했다.\n  - real_age 변수에는 18이라는 정수형 데이터를 할당했다.\n  - club 변수에는 스마트랩이라는 문자열 데이터를 할당했다.\n- 한번 정의된 변수는 언제든 다시 사용할 수 있다.\n\n---\n\n### 정수(int)\n\n- 파이썬에는 여러가지 자료형들이 있는데 그 중 대표적인 것들 중 하나가 바로 `정수`이다.\n\n- #### 연산자\n\n  연산자는 제일 중요한 4개만 기억하고 나머지는 필요할때마다 찾으면 된다.\n\n  - `+` : 더하기\n  - `-` : 빼기\n  - `*` : 곱하기\n  - `/` : 나누기\n\n  아래 코드는 연산자를 이용한 계산이다.\n\n  ```python\n  a = 10\n  b = 5\n\n  print(a + b) #15\n  print(a - b) #5\n  print(a * b) #50\n  print(a / b) #2\n  ```\n\n- 할당연산자(Assignment Operations)\n\n  할당연산자는 다음과 같은 코드를 축약하기 위해 만들어졌다.\n\n  ```python\n  #할당연산자 사용 전\n  a = 10\n  a = a + 10\n\n  print(a) #20\n\n\n\n  #할당연산자 사용 후\n  a = 10\n  a += 10\n\n  print(a) #20\n  ```\n\n  물론 `+=` 뿐만 아니라 `-=`, `*=`, `/=`와 같은 연산자가 있다.\n\n- 문자열을 정수로 바꾸기\n\n  ```python\n  a = '10'\n  b = int(a)\n\n  print(b) #10\n  print(type(b)) #<class 'int'>\n  #참고 : type()은 확인 하고 싶은 변수의 자료형을 알려줍니다\n  ```\n\n---\n\n### 문자열(string)\n\n- 문자열은 `따옴표`로 감싸진 자료형이며 정수와 혼동하지 않아야한다.\n\n- 문자열의 덧셈(`+` 기호)\n\n  ```python\n  print('a' + 'b') #ab\n  #이렇듯 문자열을 더하기 기호로 사용하면 붙여서 쓸 수 있습니다\n  ```\n\n- 문자열처리함수\n\n  - replace(A, B) : 문자열 안에 A라는 문자열을 B로 대체해줍니다.\n  - strip() : 문자열 좌우 공백을 지워줍니다.\n  - len : 문자열의 총 길이를 반환합니다.\n\n  ```python\n    string = 'Python is the best language!'\n    string_with_blank = '  SmartLab     '\n\n    print(string.replace('Python', 'Java'))\n    # Java is the best language!\n\n    print(string_with_blank.strip())\n    # SmartLab\n\n    print(len(string))\n    # 28\n  ```\n\n- 다른 자료형의 데이터를 문자열로 바꾸기\n\n  ```python\n    a = 10\n    b = 3.141592\n\n    a_string = str(a)\n    b_string = str(b)\n\n    print(a_string) #10\n    print(type(a_string)) #<class 'str'>\n\n    print(b_string) #3.141592\n    print(type(b_string)) #<class 'str'>\n  ```\n\n- 문자열의 슬라이싱\n\n  - 문자열은 리스트처럼 슬라이싱이 가능한데 그 방법이 완전히 똑같습니다.\n  - 단 주의해야할 점들이 존재합니다.\n\n    1.  리스트처럼 문자열의 인덱스는 0번부터 시작합니다.\n    2.  문자열에서 공백 역시 하나의 값으로 취급합니다.\n\n    ```python\n    string = 'Python is the best Language'\n    print(string[0:12]) # Python is th\n\n    print(len(string)) # 27 -> 단순히 문자뿐만 아니라 공백도 포함함\n    ```\n\n---\n\n### 논리형(boolean)\n\n- 논리형(boolean)은 참, 거짓값이며 각각 `대문자`로 True, False이다.\n\n- 명제\n\n  - 파이썬에서는 명제를 쓸 수 있는데 명제의 반환값은 `오로지` True, False 둘 중 하나이다.\n  - 명제의 기호\n    - `==` : 좌변과 우변이 같다.\n    - `!=` : 좌변과 우변이 다르다.\n    - `<` : 좌변이 우변보다 더 작다.\n    - `>` : 좌변이 우변보다 더 크다.\n    - `<=` : 좌변이 우변보다 작거나 같다.\n    - `>=` : 좌변이 우변보다 크거나 같다.\n\n  ```python\n    print(10 == 10) #True\n    print(10 != 10) #False\n    print(10 > 7) #True\n  ```\n\n  - 명제는 나중에 조건문에서 주요하게 쓰이니 잘 알아두자\n\n---\n\n### 입출력/IO(input의 쓰임)\n\n- 입출력은 모든 언어 공통으로 중요하다.\n- 우린 이미 출력을 배웠다. 바로 `print()`이다.\n- 이제는 입력인 `input()`을 배워보도록하자.\n\n- #### input()\n\n  - input은 사용자에게서 입력을 받는다.\n  - 예제를 통해 알아보도록 하자\n\n    ```python\n    answer = input()\n    print(answer) #사용자가 입력한 내용 출력\n    ```\n\n  - 위와 같은 예제 같은 방식으로 input을 사용하면 사용자로부터 입력을 받을 수 있다.\n\n  - 하지만 이것만으로는 부족하다. 어떨때는 사용자가 입력하는 값이 무엇인지 알려주고 싶을 때가 있다. 예를 들어 지금 입력하고 있는 것이 아이디인지 비밀번호인지 혹은 인증코드인지를 알려주고 싶을 때에는 어떻게 할까?\n    이와 같은 기능은 다음과 같이 할 수 있다.\n\n    ```python\n    ID = input('아이디를 입력해주세요 : ')\n    PW = input('비밀번호를 입력해주세요 : ')\n    Code = input('인증코드를 입력해주세요 : ')\n\n    print(ID, PW, Code)\n    ```\n\n  - input() 에서 괄호 안에 문자열을 넣어준다면 넣은 문자열을 출력하면서 사용자에게 입력값을 받는다.\n\n  - input()을 통해서 받는 모든 값들은 모두 `string(str)` 형태로 저장이 된다. 예제를 보면서 이해해보자. 다음은 간단한 사용자가 입력한 숫자를 제곱시켜 출력하는 프로그램이다.\n\n    ```python\n    answer = input('숫자를 입력하세요')\n\n    answer **= 2\n\n    print(answer)\n    ```\n\n  - 다음 코드를 실행 했을때는 오류가 난다. 그 이유는 input으로 받은 값의 자료형은 `str`인데, **인 제곱 연산자는 `int` 자료형에서만 쓸 수 있기 때문이다. 따라서 다음과 같은 경우에는 `int()` 라는걸 사용해서 str 자료형을 int로 바꿔줘야한다.\n\n    ```python\n    answer = int(input('숫자를 입력하세요'))\n\n    answer **= 2\n\n    print(answer)\n    ```\n\n---\n\n### 리스트\n\n- 리스트는 다른 값들을 묶는데 사용되는 여러가지 자료형들중 하나이다.\n- 대괄호 사이에 쉼표로 구분된 값들의 목록으로 표현된다.\n- 이때 묶는데 사용되는 값들의 자료형이 달라도 가능하나 일반적으로는 같게 하는 것이 일반적이다.\n\n  ```python\n  list_of_score = [10, 23, 50, 100, 97, 80]\n  ```\n\n- 빈 리스트 생성하기\n\n  - 빈 리스트는 두 가지 방법으로 생성할 수 있다.\n  - 한 가지는 `list()`을 이용하는 방법이다.\n  - 다른 한 가지는 `[]`을 이용하는 방법이다.\n\n  ```python\n  blank_list1 = list()\n  blank_list2 = []\n  ```\n\n  - 주로 아래보다는 위에 있는 `list()`를 사용하는 방법이 권장되고 있다고 한다.\n\n- 리스트의 수정\n\n  - 리스트는 추가, 삭제 등을 할 수 있는데 다음과 같은 키워드를 통해 리스트를 수정할 수 있다.\n\n  - append : 리스트에 값을 추가합니다.\n  - pop : 리스트에 제일 뒤에 있는 값을 제거합니다.\n  - len : 리스트의 총 길이를 반환합니다.\n\n  ```python\n  list_num = [5, 1, 2, 4, 6, 8]\n  list_num.append(1)\n\n  print(list_num) # [5, 1, 2, 4, 6, 8, 1]\n\n  list_num.pop()\n  list_num.pop()\n\n  print(list_num) # [5, 1, 2, 4, 6]\n\n  ```\n\n- 리스트 인덱스와 슬라이싱\n\n  - `슬라이싱`은 연속적인 리스트에서 특정 범위를 선택해 새로운 리스트를 만드는 것입니다.\n  - 따라서, 슬라이싱은 리스트의 길이를 변경할 수 있습니다.\n  - `인덱스`는 리스트에서 원소가 포함되어 있는 순서를 나타낸 것입니다.\n  - **이때 첫번째 원소의 인덱스는 0번입니다.**\n  - **슬라이싱으로 지정한 원소의 직전까지 잘립니다.**\n\n  - 예제를 보면서 이해해봅시다.\n\n    ```python\n    list_num = [5, 1, 3, 19, 20]\n    print(list_num[0]) # 5\n\n    print(list_num[1:3]) # [1, 3, 19]이 아니라 [1, 3]\n    ```\n\n---\n\n### 랜덤\n\n- 코드를 짜다보면 난수를 사용해야하는 경우가 엄청나게 많이 있는데 그걸 쉽게 해주는 것이 바로 random 모듈이다.\n- random 모듈을 사용하기 위해서는 다음과 같은 코드를 프로그램 제일 위에다가 써야한다.\n- ```python\n  from random import *\n  ```\n- 향후에 내장함수, 외장함수, 모듈에 대한 이해가 높아지면 해석할 수 있는 코드인데 지금 당장은 몰라도 된다.\n\n- 아무튼 random에는 여러가지 함수들이 있는데 그 중 가장 중요한 것은 `randint`이다.\n\n- #### randint()\n\n  - randint는 입력받은 두 정수 사이의 값을 랜덤으로 반환한다.\n  - randint(m, n)은 m 이상 n 이하(m ≤ value ≤ n) 값을 반환한다.\n\n- #### randrange()\n\n  - randrange는 입력받은 두 정수 사이의 값을 랜덤으로 반환한다. 하지만 randint와는 미묘한 차이가 있다.\n  - randrange(m, n)은 m 이상, n 미만(m ≤ value < n) 의 값을 반환한다.",
      "problem-week1-1":
        "\n## 문제\n\n로또 게임은 1부터 9까지의 숫자를 랜덤하게 뽑아 6자리로 배열한 숫자를 맞추는 게임이다.\n이때 1부터 9까지의 숫자를 랜덤하게 뽑아 6자리 문자열을 다음과 같이 출력하는 프로그램을 작성하시오.\n\n### 예제 출력\n\n```\n로또 뽑기 결과는 916785 입니다.\n```",
      "problem-week1-2":
        "\n## 문제\n\n예제 출력과 같이 구구단을 출력하는 프로그램을 작성하시오.\n\n### 예제 입력\n\n```\n3\n```\n\n### 예제 출력\n\n```\n3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27\n```",
      "problem-week1-3":
        "\n## 문제\n\n과일가게 사장인 남윤이는 과일을 매일매일 한 종류만 판매하는데 이 과일을 랜덤으로 결정 짓고 싶어졌습니다. 이때 과일을 랜덤으로 골라주는 프로그램을 작성하시오.\n\n### 기본 변수\n\n복사해서 쓰세요\n\n```python\nfruit_list = ['사과', '바나나', '포도', '오렌지', '키위']\n```\n\n### 에제 출력\n\n```\n오늘의 과일은 사과입니다!\n```",
      "problem-week1-4":
        "\n#### 문제\n\n다음 규칙을 따라 사이트별로 비밀번호를 만들어주는 프로그램을 작성하시오.\n\n예시 : https://google.com (단, 입력값은 https:// 로 시작하고 .com으로 끝난다.)\n\n규칙1 : https:// 부분은 제외한다 -> google.com\n\n규칙2 : 처음 만나는 점(.) 이후 부분은 제외한다. -> google\n\n규칙3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 랜덤한 세자리 자연수 + '!'로 구성한다. -> goo6812!\n\n#### 예제 입력\n\n```\nhttps://naver.com\n```\n\n#### 예제 출력\n\n```\nnav5725!\n```",
      extra2:
        "\n> ## 2주차 추가 자료\n\n---\n\n### 수록된 내용\n\n- 조건문\n- **반복문(while)**\n- 반복문(for)\n- **break와 continue**\n\n---\n\n### 조건문\n\n- 조건문은 프로그램의 흐름을 바꾸며 **아주 아주 아주 많이** 사용된다.\n- 조건문은 명제와 깊은 관련이 있다. 이는 조금 아래에서 자세하게 살펴보자.\n- 기본문법\n  ```python\n  if 명제:\n    코드\n  elif 명제:\n    코드\n  else:\n     코드\n  ```\n- 예제를 통해 조건문의 사용에 대해서 알아보자\n\n  ```python\n  a = int(input('숫자를 입력하세요 : '))\n\n  if a > 10:\n    print('이 숫자는 10보다 큽니다.')\n  elif a < 10:\n    print('이 숫자는 10보다 작습니다.')\n  else:\n    print('이 숫자는 10이군여!')\n  ```\n\n  - 위와 같은 코드가 있다고 할 때 만약 13을 입력하면 a는 10보다 크므로 `이 숫자는 10보다 큽니다.` 라고 출력될 것이다.\n\n  - 처음 코드가 실행되면 a 값을 물어본다.\n\n  - 첫 if문에서 a > 10은 명제이다. 즉, 이 명제는 `True` 또는 `False`의 값을 반환한다. 만약 `True`이면 아래 있는 코드를 실행하고 종료할 것이다.\n\n  - 만약 a > 10 이라는 명제의 반환값이 `False`, 즉 a가 10보다 작거나 같다면 다음 elif 문으로 넘어간다.\n\n  - elif 문에서도 똑같이 if문에서 했던 것과 똑같은 일을 진행한다.\n\n  - 참고로 elif는 else if의 줄임말로 그냥 처음에는 if, 그 다음 조건문에서는 elif이라고 쓰면 된다.\n\n  - else의 경우가 특이한데, else는 가장 마지막에 오며 위에 조건이 모두 아닐 시 마지막으로 else에 있는 코드가 실행된다.\n\n- 처음 조건문을 배울때 가장 많이 하는 실수는 `:`을 빼먹는 일이다. 중요하니까 한번 더 쓰겠다. **절대로 `:`을 안쓰면 안된다.**\n\n- 조건문을 사용하다보면 두개의 명제를 같이 사용해야할 때가 있다. 이때 사용하는 것이 `논리연산자`이다.\n\n  - 논리연산자는 딱 두개만 알면 될 것 같다. `and`와 `or` 이다.\n\n  - `and` 연산자는 두 명제를 모두 충족 시킬 때 `True`을 반환한다.\n  - `or` 연산자는 두 명제 중 하나만 충족 시켜도 `True`을 반환한다.\n\n    ```python\n    a = int(input('숫자를 입력하세요 : '))\n\n    if a > 10 and a > 30:  # a가 10보다 크`고` a가 30보다 크다\n        print('a 값은 10보다 크고, a값은 30보다도 크군여!')\n    elif a < 0 or a > 5: # a가 0보다 작거'나' a가 5보다 크다\n        print('a 값을 0보다 작거나, 혹은 5보다 크군여!')\n    ```\n\n  - `in` 연산자는 어떤 배열 안에 원소가 존재하는지에 따라 `True` 또는 `False` 값을 반환합니다.\n\n    ```python\n    hope_list = ['코딩하기', '잠자기', '누워있기', '집에 가기']\n\n    if '코딩하기' in hope_list:  # 코딩하기는 리스트에 존재하므로 True\n        print('코딩')\n\n    if '공부하기' in hope_list: # 공부하기는 리스트에 존재하지 않으므로 False\n        print('그런거 왜 함')\n    ```\n\n---\n\n### 반복문(while)\n\n- 파이썬에서 반복문을 사용하는 방법은 두 가지 정도 있는데 그 중 하나가 바로 `while`이다.\n- `while` 역시도 명제를 알아야한다.\n- 기본문법\n\n  ```python\n  while 명제:  # 명제가 거짓이 될 때까지 코드를 반복해서 실행한다.\n     코드\n  ```\n\n- `while`의 기본적인 쓰임은 '`while` 뒤에 있는 명제가 거짓이 될 때까지' 아래에 있는 코드를 반복해서 실행하는 것이다.\n- 가끔가다 '`whlie` 뒤에 있는 명제가 참이 될 때까지' 실행이 된다라고 착각하는 친구들이 있는데 다르다.\n\n- 다음 코드를 보면서 `while`의 쓰임에 대해서 알아보자\n\n  ```python\n  a = 1\n\n  while a < 10:\n      print(f'현재 a의 값은 {a}입니다.')\n      a += 1\n  ```\n\n  - 위 코드를 실행하면 a값이 1부터 9까지 출력된다.\n  - 처음 a 값을 1이므로 `a < 10` 이라는 명제의 반환값은 `True`이므로 아래 코드를 실행한다. 이때 a는 1이 더해져 2가 된다.\n  - 이때 a 값이 2이므로 `a < 10` 이라는 명제의 반환값은 `True`이므로 아래 코드를 실행한다. 이때 a는 1이 더해져 3이 된다.\n  - 계속하다가 a 값이 10이 되면 `a < 10` 이라는 명제의 반환 값은 `False`이므로 코드를 실행하지 않고 멈춘다.\n\n- 이 while을 이용하여 무한 반복하는 코드를 짤 수 있다.\n\n  ```python\n  while True:\n    print('hello world')\n  ```\n\n---\n\n### 반복문(for)\n\n- for 반복문은 while과는 사용이 조금 다른 반복문이다.\n\n- for의 쓰임은 여러가지가 있다.\n\n1. **리스트를 활용한 for 문이다.**\n\n```python\n  hope_list = ['코딩하기', '잠자기', '누워있기', '집에 가기']\n\n  for hope in hope_list:\n      print(f'제가 지금 하고 싶은 것은 {hope} 입니다.')\n\n  # 출력\n  # 제가 지금 하고 싶은 것은 코딩하기 입니다.\n  # 제가 지금 하고 싶은 것은 잠자기 입니다.\n  # 제가 지금 하고 싶은 것은 누워있기 입니다.\n  # 제가 지금 하고 싶은 것은 집에 가기 입니다.\n```\n\n- 먼저 길이가 4인 리스트를 선언했다.\n\n- `for hope in hope_list:` 을 보면\n\n  - 첫 번째 실행때는 hope에 hope_list의 첫번째 원소인 '코딩하기'를 할당하고 출력했다.\n  - 두 번째 실행때는 hope에 hope_list의 두번째 원소인 '잠자기'를 할당하고 출력했다.\n  - 세 번째 실행때는 hope에 hope_list의 세번째 원소인 '누워있기'를 할당하고 출력했다.\n  - 네 번째 실행때는 hope에 hope_list의 네번째 원소인 '집에 가기'를 할당하고 출력했다.\n\n2. **range을 활용한 for 문**\n\n```python\nfor i in range(0, 6):\n  print(f'현재 i의 값은 {i}입니다.')\n# 0\n# 1\n# 2\n# 3\n# 4\n# 5\n```\n\n- `range(m, n)`은 (m, m+1, m+2 ••• n-3, n-2, n-1)의 list(~사실 tuple~)을 반환한다.\n- 따라서 첫 실행때 i의 값은 0이며\n- 다음은 i의 값이 1이고 print문을 실행\n- 그 다음은 i의 값은 2이고 print문을 실행\n- i의 값이 5가 되고 아래 print문을 실행하고 코드가 종료된다.\n\n---\n\n### break와 continue\n\n- `break`\n\n  - `break`는 현재 실행 중인 반복문을 완전히 종료할 때 사용된다.\n  - 이는 주로 특정 조건 하에서 더 이상 반복문을 진행할 필요가 없을 때 사용된다.\n  - 다음과 같은 예제를 보며 생각해보자.\n\n  ```python\n  numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]\n  for number in numbers:\n      if number % 2 == 0:\n          print(f'첫 번째 짝수는 {number}입니다.')\n          break  # 짝수를 찾으면 반복문을 종료\n  ```\n\n  - 위 코드는 리스트에서 첫번째 짝수를 찾는 프로그램이다\n  - 이때 첫번째 짝수를 찾았으므로 `break`을 사용하여 반복문을 멈출 수 있다.\n\n- `continue`\n\n  - `continue`는 현재 실행 중인 반복의 나머지 부분으르 건너뛰고 다음 반복으로 넘어갈 때 사용된다.\n  - 이는 반복문 내에서 특정 조건을 만족하는 경우, 그 조건에 해당하는 경우만 제외하고 다음 반복을 진행하고자 할 때 유용하다.\n  - 다음 예제를 보면서 이해해보자.\n\n  ```python\n  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n  for number in numbers:\n      if number % 2 == 0:\n          continue  # 짝수는 출력하지 않고 다음 반복으로 넘어감\n      print(f'홀수: {number}')\n  ```\n\n  - 위 코드는 계속 진행하다 만약 number가 짝수라면 `continue`를 통해서 아래 print문을 **실행하지 않고** 반복이 끝납니다.\n  - 만약 number이 2라면 continue 문을 실행하므로 바로 number이 3으로 바뀌고 number이 3이라면 아래 print문을 실행시킨다. 그리고 number이 4라면 다시 continue 문을 실행한다. 이런식으로 계속 반복한다.",
      "problem-week2-1":
        "\n#### 문제\n\n정수를 입력받고, 이 정수가 양수인지, 음수인지, 또는 0인지를 판단하는 프로그램을 작성하시오.\n\n#### 예제 입력 1\n\n```\n정수를 입력하세요 : 3\n```\n\n#### 예제 출력 1\n\n```\n이 숫자는 0보다 큽니다.\n```\n\n#### 예제 입력 2\n\n```\n정수를 입력하세요. : -12\n```\n\n#### 예제 출력 2\n\n```\n이 숫자는 0보다 작습니다.\n```\n\n#### 예제 입력 3\n\n```\n정수를 입력하세요 : 0\n```\n\n#### 예제 출력 3\n\n```\n이 숫자는 0입니다.\n```",
      "problem-week2-2":
        "\n#### 문제\n\n정수 N를 입력 받고, 1부터 N까지의 숫자를 출력하는 프로그램을 작성하시오.\n\n#### 예제 입력 1\n\n```\n정수를 입력하세요 : 6\n```\n\n#### 예제 출력 1\n\n```\n1\n2\n3\n4\n5\n6\n```\n\n#### 예제 입력 2\n\n```\n정수를 입력하세요. : 12\n```\n\n#### 예제 출력 2\n\n```\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n```",
      "problem-week2-3":
        "\n#### 문제\n\n주어진 리스트를 사용하여, 각 항목을 출력하는 프로그램을 작성하세요.\n\n#### 주어진 변수\n\n```python\nitems = ['사과', '바나나', '체리']\n```\n\n#### 예제 출력 1\n\n```\n나는 사과를 좋아해!\n나는 바나나를 좋아해!\n나는 체리를 좋아해!\n```",
      "problem-week2-4":
        "\n#### 문제\n\n다음 조건에 따라 날씨에 따른 활동을 추천하는 프로그램을 작성하시오.\n\n- 기온이 20도 이상이고 비가 오지 않으면 '야외에서 운동하기 좋은 날입니다!'\n\n- 기온이 20도 미만이고 비가 오지 않으면 '실내에서 책 읽기 좋은 날입니다!'\n\n- 비가 온다면 '우산을 챙기세요!'\n\n#### 예제 입력 1\n\n```\n온도를 입력하세요 (예 : 24) : 23\n비가 오나요? (y / n) : n\n```\n\n#### 예제 출력 1\n\n```\n야외에서 운동하기 좋은 날입니다!\n```\n\n#### 예제 입력 2\n\n```\n온도를 입력하세요 (예 : 24) : 19\n비가 오나요? (y / n) : n\n```\n\n#### 예제 출력 2\n\n```\n실내에서 책 읽기 좋은 날입니다!\n```\n\n#### 예제 입력 3\n\n```\n온도를 입력하세요 (예 : 24) : 21\n비가 오나요? (y / n) : y\n```\n\n#### 예제 출력 3\n\n```\n우산을 챙기세요!\n```",
      "problem-week2-5":
        "\n#### 문제\n\n자연수 N을 입력받아 N!(N의 펙토리얼)을 구하는 프로그램을 작성하시오.\n\n#### 예제 입력 1\n\n```\n5\n```\n\n#### 예제 출력 1\n\n```\n120\n```\n\n#### 예제 입력 2\n\n```\n3\n```\n\n#### 예제 출력 2\n\n```\n6\n```",
      "problem-week2-6":
        "\n#### 문제\n\n자연수 N을 입력받아 1부터 N까지의 수 중 짝수를 모두 출력하시오\n\n#### 예제 입력 1\n\n```\n10\n```\n\n#### 예제 출력 1\n\n```\n2\n4\n6\n8\n10\n```\n\n#### 예제 입력 2\n\n```\n14\n```\n\n#### 예제 출력 2\n\n```\n2\n4\n6\n8\n10\n12\n14\n```",
      "problem-week2-7":
        "\n#### 문제\n\n자연수 N을 입력받아 N!(N의 펙토리얼)을 구하는 프로그램을 작성하시오.\n\n#### 예제 입력 1\n\n```\n5\n```\n\n#### 예제 출력 1\n\n```\n120\n```\n\n#### 예제 입력 2\n\n```\n3\n```\n\n#### 예제 출력 2\n\n```\n6\n```",
      "problem-week2-8":
        "\n#### 문제\n\n자연수 N, M을 입력 받아 N과 M이 서로소인지 아닌지 출력하시오.\n\n#### 예제 입력 1\n\n```\n10\n5\n```\n\n#### 예제 출력 1\n\n```\nTrue\n```\n\n#### 예제 입력 2\n\n```\n3\n2\n```\n\n#### 예제 출력 2\n\n```\nFalse\n```\n\n- 힌트 : 두 수가 서로소이면 두 수를 서로 나누었을때 나머지가 0이다.",
      "problem-week2-9":
        "\n#### 문제\n\n자연수 N에 대해서 N이 소수인지 아닌지 판별하는 프로그램을 작성하시오. (1 < N < 1000)\n\n#### 예제 입력 1\n\n```\n41\n```\n\n#### 예제 출력 1\n\n```\nTrue\n```\n\n#### 예제 입력 2\n\n```\n25\n```\n\n#### 예제 출력 2\n\n```\nFalse\n```\n\n- 힌트 : 소수이기 위해서는 N보다 작은 모든 수를 나누어 봤을때 서로소이면 된다",
      "problem-week2-10":
        "\n#### 문제\n\n업, 다운 게임은 프로그램이 1부터 100까지의 숫자를 랜덤으로 정하고 이를 사용자가 알아맞추는 게임이다. 이때 사용자가 추측한 수가 지정한 숫자보다 크다면 업을, 그 반대면 다운을 출력한다.이때 다음 예제 입력과 예제 출력을 보고 업, 다운 게임 프로그램을 작성하시오.\n\n#### 예제\n\n```\n숫자를 맞춰보세요 : 50\n다운\n숫자를 맞춰보세요 : 25\n업\n숫자를 맞춰보세요 : 30\n다운\n숫자를 맞춰보세요 : 28\n다운\n숫자를 맞춰보세요 : 27\n정답입니다!\n```",
    };
    return problem[fileID];
  }
}

export default function TaskMarkdownRender() {
  const fileID = useParams().fileID;
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    if (fileID) {
      setMarkdown(taskText(fileID));
    }
  });

  return (
    <Wrapper>
      <Box>
        <MarkdownPreview
          source={markdown}
          wrapperElement={{ "data-color-mode": "dark" }}
        ></MarkdownPreview>
      </Box>
    </Wrapper>
  );
}
