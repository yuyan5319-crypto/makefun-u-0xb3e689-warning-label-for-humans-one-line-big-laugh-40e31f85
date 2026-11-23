# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/yuyan5319-crypto/makefun-u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/yuyan5319-crypto/makefun-u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/c/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

The single-line safety warning label that should come printed on every human being:

> WARNING: This human ships with no off switch, no warranty, and a battery that dies at 3 p.m. and refuses to charge until midnight.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly).

```sh
node main.ts
```

This writes the label to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`),
with mode 0644, validates it (1–160 characters, single line, no control
characters), then reads it back to verify the file matches exactly.
