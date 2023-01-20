## ⚙️ Installation

```javascript
cd server
npm i

...
cd client
npm i
```

## ⚙️ Usage

```javascript
cd server
npm start

...
cd client
npm start
```

## 📚 리팩토링 일지

[리팩토링 일지 링크](https://shinystarforever.tistory.com/332)

<br/>

## 🔎 Directory Structure / client

```
📦src
 ┣ 📂api
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜axiosInstance.ts
 ┃ ┗ 📜todo.ts
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜InputField.tsx
 ┃ ┣ 📜LodingBar.tsx
 ┃ ┣ 📜SingleTodo.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂hooks
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜useLogin.tsx
 ┃ ┃ ┗ 📜useSignup.tsx
 ┃ ┗ 📂todos
 ┃ ┃ ┣ 📜useDeleteTodo.tsx
 ┃ ┃ ┣ 📜useGetTodo.tsx
 ┃ ┃ ┣ 📜usePostTodo.tsx
 ┃ ┃ ┗ 📜useUpdateTodo.tsx
 ┣ 📂router
 ┃ ┗ 📜Routes.tsx
 ┣ 📂types
 ┃ ┗ 📜model.ts
 ┣ 📂utils
 ┃ ┗ 📜validator.ts
 ┣ 📂view
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜Auth.tsx
 ┃ ┃ ┣ 📜Todo.tsx
 ┃ ┃ ┗ 📜TodoDetail.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## 🛠 Tech Stack

```
- 메인 라이브러리: React,React-Query
- 메인 언어 및 문법: Typescript
- CSS: styled-components
- UI Library: React-icons
```

## 📚 클라이언트 구현 과제

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [▲] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [▲] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

### 개선 사항 작성

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 화면 구성하기
- 토큰이 유효하지 않다면 로그인 페이지로 리다이렉트는 되지만 사용자에게 알리고 있지 않음
- 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되기는 하지만, 이메일이 완료되었을때 잠깐 버튼이 활성화되는 문제가 있음

## 📌 최종으로 결정된 커밋 메시지 컨벤션

```
feat : 기능 추가, 삭제, 변경
docs : 문서 추가, 삭제, 변경
test : 테스트 코드 추가, 삭제, 변경 등(or emoji) - 테스트 코드에 관련된 모든 변경에 해당
chore : 위에 해당하지 않는 모든 변경,
init : 초기 생성, 꼭 필요한 라이브러리 설치하는 경우
refactor : 수업을 듣고 리펙토링한 경우
```

# Preview

### 로그인 및 회원가입 페이지

![로그인 회원가입](https://user-images.githubusercontent.com/103437860/213402048-f96be631-bbd7-4b27-bf4c-cacca796818b.gif)

<br/>

### ToDos 메인페이지

![메인 페이지](https://user-images.githubusercontent.com/103437860/213400550-d60184ee-2eeb-4fae-9dec-074f903ff0ff.gif)

<br/>

### 게시글 작성하기

![게시글 작성하기](https://user-images.githubusercontent.com/103437860/213402419-3c81c15f-8554-4ef8-a98e-24af177152ed.gif)

<br/>

### 게시글 수정하기

![게시글 수정하기](https://user-images.githubusercontent.com/103437860/213402758-ac05f1b5-7f5e-40f1-ac56-e993fad6ea22.gif)

<br/>

### 게시글 삭제하기

![게시글 삭제하기](https://user-images.githubusercontent.com/103437860/213402769-98238a2a-2768-4cff-86ad-6b3ec8d03a9f.gif)

<br/>

### 미로그인으로 게시글 작성시 로그인 페이지로 리다이렉트

![로그인 안되었을 경우 로그인페이지로 리다이렉트](https://user-images.githubusercontent.com/103437860/213401551-ee8c484e-3d3b-4354-9c8d-d0348b5e9fea.gif)

<br/>
