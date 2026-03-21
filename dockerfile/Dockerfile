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
ENV OLLAMA_CONTEXT_LENGTH="22000"

WORKDIR /app

# 현재 제일 성능이 좋다.
#  qwen3:latest    500a1f067a9f    8.7 GB    100% GPU     22000      6 minutes
# ENV OLLAMA_CONTEXT_LENGTH="22000" 세팅을 하였다.
# docker compose down, docker compose build --no-cache, docker compose up -d