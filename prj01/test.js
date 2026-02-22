import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  // '/v1'을 제거하고 기본 포트까지만 작성합니다.
  baseURL: "http://localhost:11434",
  apiKey: "ollama",
});

async function main() {
  try {
    const message = await client.messages.create({
      model: "qwen3-coder",
      max_tokens: 1024,
      messages: [{ role: "user", content: "한국어와 영어의 차이" }],
    });

    console.log(message.content[0].text);
  } catch (err) {
    // 상세한 에러 확인을 위해 err 전체를 출력해볼 수 있습니다.
    console.error("에러 발생:", err);
  }
}

main();
