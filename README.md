# Vite manual Scaffolding

React 개발을 위한 Vite custom template 작성하기

1. `README.md`, `.gitignore` 생성

2. pnpm 프로젝트 초기화 / 혹은 새 package.json에 빈 객체를 넣기

   - `pnpm init` / `touch package.json`으로 생성 후 {} 집어넣기

3. Vite 패키지 생성

   Manual Installation

   - `pnpm add -D vite`

4. package.json 파일 조정

5. index.html 생성

6. Vite CLI 작성

   ```json
   "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
   },
   ```

7. React 패키지 설치
   react, reactdom 설치
   `pnpm add react react-dom`

8. html에 main.jsx 연결 및 main.jsx 작성

9. react, node 타입 선언 패키지 설치
