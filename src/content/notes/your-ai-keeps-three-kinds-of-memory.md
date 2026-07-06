---
title: Your AI keeps three kinds of memory
date: 2026-07-06
topic: AI
description: "AI memory is three different tools wearing one word: a frozen encyclopedia, a temporary clipboard, and a saved notepad. Which one you are trusting tells you how much to believe the answer."
---

The question sounds like a trap. If an AI can remember your name from last week, doesn't it have a memory? It does. It keeps three of them, and they work nothing alike. Knowing which one you are leaning on tells you how much to trust the answer.

The first is the encyclopedia in its head. When a model trains, what it learns gets baked into its weights, "encoded in the model's weights during training" and read straight back when it answers ([aiagentmemory.org](https://aiagentmemory.org/articles/llm-parametric-memory/)). This is the layer that holds grammar, facts, and how to reason. It is also frozen. That memory is "fixed after training," so "from the moment training ends" it starts drifting out of date. The risk here is confidence, not gaps. It sounds just as sure about a price that changed last quarter as one that held.

The second is the clipboard in its hand: the context window, the working memory for one conversation. This is the one that feels most like memory, and it is the biggest illusion. The model does not hold your last message between turns. The service is stateless, so every time you send something the whole conversation gets resent and "the LLM processes all these messages again" ([arxiv.org](https://arxiv.org/pdf/2312.05516)). The memory you feel is the model re-reading the thread you keep handing back. Overflow the clipboard and the oldest lines fall off.

The third is the sticky-note pad on the wall: the memory feature. Tell ChatGPT "remember that I am vegetarian" and that saved note becomes "part of the context ChatGPT uses to generate a response" ([openai.com](https://openai.com/index/memory-and-new-controls-for-chatgpt/)). Claude does the same, keeping "your role, your preferences and how you like responses formatted" as a running summary ([sider.ai](https://sider.ai/blog/ai-tools/what-is-claude-memory-anthropic-s-new-team-feature-explained)). The model did not grow a memory. A separate system holds a notepad and slips it in before the model answers, and it survives even a deleted chat.

So match the layer to the job. For anything time-sensitive, skip the frozen encyclopedia and paste the current fact onto the clipboard yourself. Expect one endless thread to slip, and start clean per task. And if you let the notepad remember you, open the settings and read what it wrote down. Memory is not one switch you flip. It is three tools, each with its own way of failing.

---
**Sources**
- [aiagentmemory.org](https://aiagentmemory.org/articles/llm-parametric-memory/)
- [arxiv.org](https://arxiv.org/pdf/2312.05516)
- [openai.com](https://openai.com/index/memory-and-new-controls-for-chatgpt/)
- [sider.ai](https://sider.ai/blog/ai-tools/what-is-claude-memory-anthropic-s-new-team-feature-explained)
