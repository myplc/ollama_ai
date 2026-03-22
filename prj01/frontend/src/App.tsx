import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [optimizedCode, setOptimizedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"analysis" | "optimization">("analysis");
  const [result, setResult] = useState<any>(null);

  const handleAction = async (action: "analyze" | "optimize") => {
    if (!code) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();

      if (action === "analyze") {
        setResult(data.analysis);
        setActiveTab("analysis");
      } else {
        setOptimizedCode(data.optimizedCode || "// 최적화 결과가 여기에 표시됩니다.");
        setActiveTab("optimization");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">🚀 AI Code Reviewer</div>
        <nav className="nav">
          <button className={activeTab === "analysis" ? "active" : ""} onClick={() => setActiveTab("analysis")}>
            분석 리포트
          </button>
          <button className={activeTab === "optimization" ? "active" : ""} onClick={() => setActiveTab("optimization")}>
            코드 최적화
          </button>
        </nav>
      </header>

      <main className="main">
        <div className="editor-section">
          <div className="section-header">
            <h3>Original Code</h3>
            <div className="button-group">
              <button onClick={() => handleAction("analyze")} disabled={loading}>
                {loading ? "분석 중..." : "분석하기"}
              </button>
              <button className="secondary" onClick={() => handleAction("optimize")} disabled={loading}>
                {loading ? "최적화 중..." : "최적화 제안"}
              </button>
            </div>
          </div>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="여기에 코드를 붙여넣으세요..." className="code-editor" />
        </div>

        <div className="result-section">
          {activeTab === "analysis" ? (
            <div className="analysis-view">
              <h3>Analysis Results</h3>
              {result ? (
                <div className="report-card">
                  <div className="metric">
                    복잡도: <span className="badge">{result.complexity}</span>
                  </div>
                  <div className="list-section">
                    <h4>잠재적 이슈</h4>
                    <ul>{result.issues.length > 0 ? result.issues.map((i: any, idx: number) => <li key={idx}>{i}</li>) : <li>발견된 이슈가 없습니다.</li>}</ul>
                  </div>
                  <div className="list-section">
                    <h4>개선 제안</h4>
                    <ul>{result.suggestions.length > 0 ? result.suggestions.map((s: any, idx: number) => <li key={idx}>{s}</li>) : <li>코드가 깔끔합니다!</li>}</ul>
                  </div>
                </div>
              ) : (
                <div className="placeholder">코드를 분석하면 결과가 여기에 표시됩니다.</div>
              )}
            </div>
          ) : (
            <div className="optimization-view">
              <h3>Optimized Code</h3>
              <textarea value={optimizedCode} readOnly placeholder="최적화된 코드가 여기에 표시됩니다..." className="code-editor readonly" />
            </div>
          )}
        </div>
      </main>
      <footer className="footer">Powered by Ollama & Express</footer>
    </div>
  );
}

export default App;
