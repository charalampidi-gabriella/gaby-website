---
title: Your AI has a clipboard, not a memory
date: 2026-07-05
topic: AI
description: A plain-language primer on the context window, the one idea that explains why an AI assistant feels sharp one minute and sloppy the next.
---

The AI you talk to reads from a clipboard, not a filing cabinet. Everything it can see while it answers you lives on that clipboard right now: your prompt, its instructions, the back-and-forth so far, and its own replies. When the clipboard fills up, the oldest notes fall off the edge without telling you. That single idea explains why your assistant feels sharp one minute and forgetful the next.

The technical name for the clipboard is the context window. IBM calls it the model's working memory, the thing that "determines how long of a conversation it can carry out without forgetting details from earlier in the exchange." Anthropic describes it as all the text the model can reference when generating a response, including the response itself. It is not the giant dataset the model learned from. It is a live, temporary space for one conversation.

## Bigger is not automatically better

The instinct is to give the AI everything, so it has full context. The research points the other way. Anthropic's own docs put it plainly: "As token count grows, accuracy and recall degrade, a phenomenon known as context rot." Researchers testing long documents found a U-shaped curve, where models catch information at the start and the end and lose the middle. A bigger window means more middle, which means more room for things to slip.

Here is how fast it fills. Load a 100,000-word document into a 128,000-token window and you have room for maybe fifteen to twenty more exchanges before you hit the edge and need a reset (RockB). So the advertised number is a ceiling, not a promise.

## Keep the clipboard clean

Before any reset command means anything, your people need this picture in their heads. The window is working memory, and working memory works best when it is not crammed. That is the whole reason to manage it on purpose instead of running one endless thread that slowly gets worse.

Start a fresh session for each discrete task, a schedule, a memo, a coaching plan, rather than piling everything onto one clipboard. The commands come next. The clipboard comes first.

---
**Sources**
- [ibm.com](https://www.ibm.com/think/topics/context-window)
- [platform.claude.com](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- [docs.anthropic.com](https://docs.anthropic.com/en/docs/build-with-claude/context-windows)
- [baeseokjae.github.io](https://baeseokjae.github.io/posts/llm-context-window-comparison-2026/)
- [dev.to](https://dev.to/thousand_miles_ai/the-lost-in-the-middle-problem-why-llms-ignore-the-middle-of-your-context-window-3al2)
