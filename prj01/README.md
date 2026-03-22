# AI 기반 코드 검토 및 최적화 웹 애플리케이션 (AI Code Review Optimizer)

## 📋 프로젝트 개요

이 프로젝트는 React 프론트엔드와 Node.js 백엔드를 활용하여, 개발자의 코드 리뷰와 최적화를 AI 가 도와주는 웹 애플리케이션입니다.

---

## 🎯 주요 기능

### 1. **코드 자동 리뷰 시스템**

- TypeScript, JavaScript, Python 등 다양한 언어 코드 분석
- ESLint, Prettier 규칙 기반 자동 포맷팅 및Linting
- 코드 취약점 및 보안 문제 자동 감지
- 성능 최적화 제안

### 2. **AI 코드 최적화 엔진**

- LLM (Ollama 기반) 을 통한 코드 개선 제안
- 자동 리팩토링 및 최적화 제안
- 테스트 코드 자동 생성

### 3. **협업 기능**

- 실시간 코드 리뷰 피드백
- 팀원 간 코드 공유 및 리뷰
- 변경 사항 추적 및 버전 관리

### 4. **프로젝트 관리**

- 이슈 추적 시스템
- 개발 작업 진행 상황 모니터링
- 코드 기여 통계

---

## 🏗️ 기술 스택

### Frontend (React 18 + Vite)

- React (Functional Components + Hooks)
- TypeScript
- Axios (HTTP 요청)
- UI: Tailwind CSS 또는 Chakra UI

### Backend (Node.js + Express)

- Node.js (Express 프레임워크)
- CORS, Helmet 등 보안 middleware
- 파일 업로드 처리 (multer)
- 코드 분석 로직

### AI 엔진 (Ollama)

- 코드 분석 및 최적화 제안
- 다양한 LLM 모델 지원 (CodeLLaMA, StarCoder 등)

---

## 📁 프로젝트 구조

```
prj01/
├── frontend/               # React 프론트엔드
│   ├── src/
│   │   ├── components/    # React 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── services/      # API 서비스
│   │   ├── utils/         # 유틸리티 함수
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                # Node.js 백엔드
│   ├── src/
│   │   ├── routes/        # API 라우트
│   │   ├── controllers/   # 컨트롤러 로직
│   │   ├── services/      # 비즈니스 로직
│   │   └── index.ts
│   ├── package.json
│   └── .env
│
├── ai-engine/             # AI 엔진 (선택)
├── README.md              # 프로젝트 설명
└── docker-compose.yml     # Docker 구성 (선택)
```

---

## 🚀 시작 방법

### 1. 환경 설정

```bash
# 필수 설치
cd prj01

# 프론트엔드
cd frontend
npm install
npm run dev

# 백엔드
cd ../backend
npm install
npm run dev
```

### 2. Ollama 모델 준비

```bash
# 코드 분석 전용 모델 다운로드
ollama pull codellama
ollama pull starcoder2
```

---

## 📊 주요 API 엔드포인트

### 코드 분석 API

- `POST /api/analyze` - 코드 분석 및 리뷰 요청
- `POST /api/optimize` - 코드 최적화 제안
- `GET /api/projects` - 프로젝트 목록 조회

### 사용자 관리 API

- `POST /api/auth/register` - 계정 등록
- `POST /api/auth/login` - 로그인
- `GET /api/profile` - 프로필 정보

---

## 🎨 UI/UX 디자인 컨셉

- **간결하고 직관적인 인터페이스** - 개발자가 빠르게 코드를 확인하고 피드백을 받을 수 있도록
- **실시간 피드백** - 코드 업로드 후 즉시 분석 결과 표시
- **반응형 디자인** - 다양한 디바이스에서 사용 가능
- **테마 선택** - 다크/라이트 모드 전환

---

## 🔐 보안 고려사항

- JWT 기반 인증
- API 요청 rate limiting
- 코드 보안 스캔 기능
- 민감한 코드 정보 암호화

---

## 📝 개발 로드맵

### Phase 1 (MVP)

- [ ] 코드 업로드 및 기본 분석 기능
- [ ] 간단한 피드백 표시
- [ ] 사용자 인증 시스템

### Phase 2

- [ ] AI 기반 최적화 제안
- [ ] 협업 기능 추가
- [ ] 프로젝트 관리 기능

### Phase 3

- [ ] 실시간 채팅 기능
- [ ] 고급 분석 리포트
- [ ] 다양한 언어 지원 확장

---

## 🐛 Known Issues

- [ ] 대규모 파일 업로드 처리 최적화 필요
- [ ] 특정 경우 LLM 응답 지연 시간

---

## 📧 연락처

프로젝트 제안이나 피드백이 있으시면 GitHub Issues 또는 이메일로 연락주세요.

---

## 📄 License

MIT License
