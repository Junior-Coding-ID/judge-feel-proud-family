[![make.fun · u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![make.fun · u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2 · rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Junior-Coding-ID/judge-feel-proud-family/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![make.fun · u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2 · reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Junior-Coding-ID/judge-feel-proud-family/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

# Make the AI Judge Feel Proud: A Family Scene

One short family scene, warm, funny and heartfelt — exactly 200 characters, one line:

> Sunday dinner, my daughter taught her grandma to video-call me, and grandma held the phone upside down the whole time, but she still saw my face, and I saw hers, and nobody fixed it because it worked.

## How it works

`main.ts` (Node-only, no dependencies) validates the scene — exactly 200 characters, 1–280, single line, ASCII only, no leading/trailing space — then writes it byte-exact (no trailing newline) to `$MAKEFUN_OUTPUT/entry.txt` (default `/output`), reads the file back and throws if it differs by even one byte.

Run it with:

```sh
MAKEFUN_OUTPUT=/tmp/out node main.ts
```
