# Vite manual Scaffolding

React 개발을 위한 Vite custom template 작성하기

## 폴더 구성

![파일경로](/public/img/imgforMD/image.png)

본 폴더에선 React + eslint + vite + vitest를 manual scaffold 로 설정하였습니다.

## 과정

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
   `pnpm add @types/react @types/react-dom @types/node -D`

   - new JSX transform 사용 가능

10. Vite 플러그인 구성
    `pnpm add @vitejs/plugin-react -D`

    - vite.config.js 생성
    - fast refresh, automatic JSX runtime, custom babel plugins/presets 사용 가능

11. ESLint 구성
    `pnpm create @eslint/config@latest`

    ESLint의 v9.8버전 업데이트로 React v18에 호환이 안됨. 때문에 수동조작 필요함.

    ```js
    import globals from "globals";
    import pluginJs from "@eslint/js";
    import pluginReact from "eslint-plugin-react";

    //Flat Config
    export default [
      {
        files: ["**/*.{js,mjs,cjs,jsx}"],
      },
      {
        settings: {
          react: {
            version: "detect",
          },
        },
        plugins: {
          react: pluginReact,
        },
      },
      {
        languageOptions: {
          parserOptions: {
            ecmaFeatures: {
              jsx: true,
            },
          },
          globals: {
            ...globals.browser,
            ...globals.node,
          },
        },
      },
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      {
        rules: {
          "react/react-in-jsx-scope": "off",
        },
      },
    ];
    ```

    - ESLint 명령어 인터페이스
      eslint.config.js에서 version 명시 필요
      `pnpm eslint ./src --report-unused-disable-directives --ignore-pattern .gitignore` : 배포시 linting 할 파일들 지정
      package.json 에 script 부분에 `"eslint \"./src/**\" --report-unused-disable-directives --ignore-pattern .gitignore"`를 lint 명령어로 설정

    - ESLint 플러그인 구성

      eslint-plugin-react
      eslint-plugin-react-hooks
      eslint-plugin-react-refresh
      `pnpm add eslint-plugin-react-hooks eslint-plugin-react-refresh -D`
      경고 뜨는건 eslint에 `import pluginReactHooks from 'eslint-plugin-react-hooks'` 추가 및 rules에 전개
      refresh도 동일하게 진행 후 rules에 필요한 것 추가

12. Vite 절대경로 설정

```js
import { fileURLToPath, URL } from "node:url";

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src"), import.meta.url),    //@기호를 사용하여 절대기호로 나타낼 수 있음.
    },
  },
```

13. Vite server 설정

```js
  base: "/",
  server: {
    host: "localhost",
    port: 3000,
    open: false,
  },
```

14. vscode의 @ 경로 설정
    jsconfig.json 생성 후

    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        }
      }
    }
    ```

15. sass 설정 추가
    `pnpm add sass`
    Vite는 SCSS를 자동으로 지원하기 때문에, 확장자만 설정해주면 자동으로 적용된다.
