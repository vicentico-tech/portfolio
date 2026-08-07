"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, Sparkles, X, Bot } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Role = "user" | "assistant";
type Message = { id: string; role: Role; content: string; streaming?: boolean };

const SUGGESTED = [
  "What's your primary tech stack?",
  "Tell me about your current role",
  "Are you open to new opportunities?",
  "How do you approach state management?",
];

function uid() {
  return Math.random().toString(36).slice(2);
}

async function* streamChat(
  messages: Message[],
  signal: AbortSignal
): AsyncGenerator<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
    signal,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error: ${err}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const data = trimmed.slice(5).trim();
      if (data === "[DONE]") return;
      try {
        const json = JSON.parse(data);
        const delta = json.choices?.[0]?.delta?.content;
        if (typeof delta === "string" && delta) yield delta;
      } catch {
        /* skip malformed SSE chunks */
      }
    }
  }
}

export function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Auto-scroll on new content
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const submit = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;
      setError(null);
      setInput("");

      const userMsg: Message = { id: uid(), role: "user", content: trimmed };
      const assistantId = uid();

      setMessages((prev) => [
        ...prev,
        userMsg,
        { id: assistantId, role: "assistant", content: "", streaming: true },
      ]);
      setLoading(true);

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        for await (const chunk of streamChat(
          [...messages, userMsg],
          controller.signal
        )) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: m.content + chunk }
                : m
            )
          );
        }
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        setError("Something went wrong. Please try again.");
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      } finally {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, streaming: false } : m
          )
        );
        setLoading(false);
      }
    },
    [loading, messages]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with my digital twin"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 1.2 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 h-14 rounded-full shadow-[0_16px_48px_-10px_rgba(124,92,255,0.65),0_0_0_1px_rgba(255,255,255,0.12)] bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] text-black font-semibold text-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <MessageSquare size={18} />
              Ask my digital twin
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[min(420px,calc(100vw-1.5rem))] h-[min(600px,calc(100svh-7rem))] flex flex-col rounded-2xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.09)] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg,#0f1118 0%,#0a0c14 100%)",
            }}
          >
            {/* Header */}
            <div className="shrink-0 flex items-center gap-3 px-5 py-4 border-b border-white/8">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] shadow-[0_6px_20px_-6px_rgba(124,92,255,0.7)]">
                <Bot size={16} className="text-black" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0f1118]" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm text-white leading-tight">
                  Jose — Digital Twin
                </div>
                <div className="text-[11px] text-[color:var(--color-muted)] flex items-center gap-1.5">
                  <Sparkles size={10} className="text-[#7c5cff]" />
                  Powered by AI · Ask me anything about my career
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-[color:var(--color-muted)] hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-6 px-2"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c5cff]/30 to-[#22d3ee]/20 border border-white/10 flex items-center justify-center">
                      <Bot size={24} className="text-[#7c5cff]" />
                    </div>
                    <p className="text-sm text-[color:var(--color-muted)] leading-relaxed max-w-[260px]">
                      Hi — I&apos;m Jose&apos;s AI twin. Ask me about his
                      experience, stack, or how he works.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {SUGGESTED.map((q) => (
                      <button
                        key={q}
                        onClick={() => submit(q)}
                        className="text-left text-sm px-4 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/14 text-[color:var(--color-foreground)] transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-[#7c5cff] to-[#5b3fd8] text-white rounded-br-md"
                        : "bg-white/[0.06] border border-white/8 text-[color:var(--color-foreground)] rounded-bl-md"
                    }`}
                  >
                    {msg.content || (
                      <span className="flex gap-1 items-center h-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:120ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:240ms]" />
                      </span>
                    )}
                    {msg.streaming && msg.content && (
                      <span className="inline-block w-0.5 h-4 bg-current opacity-70 ml-0.5 align-middle animate-pulse" />
                    )}
                  </div>
                </motion.div>
              ))}

              {error && (
                <div className="text-xs text-red-400 text-center py-1">
                  {error}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-white/8 px-4 py-3">
              <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.04] focus-within:border-[#7c5cff]/50 focus-within:bg-white/[0.06] transition-all px-3 py-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask something about Jose's career…"
                  rows={1}
                  disabled={loading}
                  className="flex-1 resize-none bg-transparent text-sm text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-muted-2)] outline-none leading-relaxed max-h-28 overflow-y-auto disabled:opacity-50"
                  style={{ scrollbarWidth: "none" }}
                />
                <button
                  onClick={() => submit(input)}
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] text-black transition-opacity disabled:opacity-30"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="mt-1.5 text-[10px] text-center text-[color:var(--color-muted-2)]">
                AI responses · not a substitute for direct contact
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
