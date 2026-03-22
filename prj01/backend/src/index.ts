import { createServer } from "http";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

// 프론트엔드 정적 파일 서빙 (만약 있다면)
const frontendDir = path.join(__dirname, "..", "dist-client");

// 코드 분석 API
app.post("/api/analyze", async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: "코드를 입력해주세요." });
    }

    // TODO: Ollama API 를 통한 코드 분석 구현
    res.json({
      success: true,
      message: "코드 분석이 완료되었습니다.",
      analysis: {
        issues: [],
        suggestions: [],
        complexity: "중간",
      },
    });
  } catch (error) {
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

// 코드 최적화 API
app.post("/api/optimize", async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: "코드를 입력해주세요." });
    }

    // TODO: Ollama API 를 통한 코드 최적화 구현
    res.json({
      success: true,
      optimizedCode: "// 최적화된 코드...",
    });
  } catch (error) {
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

// 프로젝트 목록 API
app.get("/api/projects", (req, res) => {
  res.json({
    success: true,
    projects: [],
  });
});

// 프론트엔드 정적 파일 서빙
app.use(express.static(frontendDir));

// 라우트 없이 접속 시 프론트엔드 인덱스
app.get("*", (req, res) => {
  if (existsSync(frontendDir)) {
    res.sendFile(path.join(frontendDir, "index.html"));
  } else {
    // 프론트엔드 빌드 미완료시 기본 HTML 페이지
    res.type("html").send(`
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 코드 리뷰 최적화</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
      min-height: 100vh;
    }
    .container {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }
    .info {
      background: #e7f3ff;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
      text-align: center;
      color: #1a0dab;
    }
    .code-box {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
      margin-bottom: 10px;
      font-family: monospace;
    }
    button {
      display: block;
      width: 100%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover:not(:disabled) {
      background-color: #0056b3;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    pre {
      background: #f4f4f4;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
      margin-top: 15px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 AI 코드 리뷰 최적화 (Beta)</h1>
    <div class="info">
      💡 프론트엔드 빌드가 필요합니다.<br>
      cd frontend && npm run build
    </div>
    <h2>코드 입력 영역</h2>
    <textarea 
      class="code-box" 
      id="codeInput"
      placeholder="여기에 코드를 입력하세요 (TypeScript, JavaScript, Python 등)..."
      rows="15"
      style="width:100%;font-family:monospace;"
    ></textarea>
    <button id="analyzeBtn" onclick="analyzeCode()">분석하기</button>
    <pre id="result"></pre>
    <div class="footer">
      API: http://localhost:3001/api/analyze<br>
      © 2026 AI Code Review Optimizer
    </div>
  </div>
  <script>
    function analyzeCode() {
      const code = document.getElementById('codeInput').value;
      const btn = document.getElementById('analyzeBtn');
      const result = document.getElementById('result');
      
      if (!code) {
        result.textContent = "⚠️ 코드를 입력해주세요.";
        return;
      }
      
      btn.disabled = true;
      btn.textContent = "분석 중...";
      result.textContent = "API 에 코드 전송 중...";
      
      // API 호출
      fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      .then(res => res.json())
      .then(data => {
        result.textContent = "✅ " + JSON.stringify(data, null, 2);
      })
      .catch(err => {
        result.textContent = "❌ " + err.message;
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "분석하기";
      });
    }
  </script>
</body>
</html>`);
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
