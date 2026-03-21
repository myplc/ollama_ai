FROM ollama/ollama

RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://claude.ai/install.sh | bash

ENV PATH="/root/.local/bin:${PATH}"
ENV ANTHROPIC_AUTH_TOKEN="ollama"
ENV ANTHROPIC_BASE_URL="http://localhost:11434"
ENV ANTHROPIC_API_KEY="ollama"
ENV OLLAMA_CONTEXT_LENGTH="64000"

WORKDIR /app