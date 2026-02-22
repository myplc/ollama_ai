FROM ollama/ollama

RUN apt-get update && apt-get install -y \
    curl \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# 3. Claude Code 설치 (사용자가 제시한 명령어)
RUN curl -fsSL https://claude.ai/install.sh | bash

# 4. 환경 변수 설정 (컨테이너 내부용)
ENV PATH="/root/.local/bin:${PATH}"
ENV ANTHROPIC_BASE_URL="http://localhost:11434"
ENV ANTHROPIC_API_KEY="ollama"

# 작업 디렉토리 설정
WORKDIR /root