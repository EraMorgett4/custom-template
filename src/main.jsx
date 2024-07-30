import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.scss";

// Vite 클라이언트 환경에서 사용가능한 환경변수
console.log(import.meta.env);
// %()% 구문을 import { globals } from 'globals'; 통해 위의 환경변수를 HTML 파일 내에서 사용 가능하다.

function App() {
  return (
    <div className="App">
      <h1>React 웹 앱</h1>
    </div>
  );
}

const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
