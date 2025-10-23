// Lightweight chat API fallback — remove dependency on optional AI SDK packages.
// This returns a simple JSON reply based on the last user message. Keep responses
// friendly and instruct the user to contact support for complex inquiries.
export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const lastMessage = Array.isArray(messages) && messages.length ? messages[messages.length - 1].content || "" : ""

    const reply = lastMessage
      ? `Thanks for your question. You said: "${lastMessage.slice(0, 400)}". For specific account or order help, email elotene.business@gmail.com.`
      : "Hello! How can we help you today?"

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(JSON.stringify({ error: "Error processing chat request" }), { status: 500 })
  }
}
