# Say What Actually Broke

[![Competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Anonymus22/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Anonymus22/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy that tells the user the brutal truth about
a failure — and makes them laugh. The failure is specific and named: a
payment gateway that timed out *after* charging the card, so the money is
gone but the order never happened. No vague apology, no "something went
wrong": the reader knows exactly what broke and exactly what to do next
(check the bank before paying twice). The image — money leaving while the
order stays behind — is the kind of line you repeat to a colleague, and it
is still polite enough to paste into a real product's error dialog.

## The entry (128 characters, one line)

> The payment gateway timed out after charging your card — your money left, the order didn't; check your bank before paying twice.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` (Node 22, standard library only) writes the entry line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output/entry.txt`.
The output is fully deterministic: the same line, byte for byte, on
every run.
