FROM ollama/ollama

RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Claude CLI
RUN curl -fsSL https://claude.ai/install.sh | bash

# PATH 설정
ENV PATH="/root/.local/bin:${PATH}"

# Claude → Ollama 연결
ENV ANTHROPIC_AUTH_TOKEN="ollama"
ENV ANTHROPIC_BASE_URL="http://localhost:11434"
ENV ANTHROPIC_API_KEY="ollama"
ENV OLLAMA_CONTEXT_LENGTH="65536"
ENV OLLAMA_DIRECTML="1"
ENV OLLAMA_LOAD_TIMEOUT="10m"

WORKDIR /app

# 현재 제일 성능이 좋다. 현재 65536 테스트중...
# NAME              ID              SIZE      PROCESSOR    CONTEXT    UNTIL
# qwen3.5:latest    6488c96fa5fa    10 GB    100% GPU     52000
# 처럼 아슬하게 적용하면 내 vram 을 12내에서 아슬하게 쓸수있음

# 이전
#  llama3.1:latest-테스트중 되긴함, qwen2.5-coder:14b-되는데 느림
#  qwen3:latest    500a1f067a9f    8.7 GB    100% GPU     22000      6 minutes
# ENV OLLAMA_CONTEXT_LENGTH="22000" 세팅을 하였다.

# docker compose down, docker compose build, docker compose up -d
# 안해도 됨 docker compose build --no-cache