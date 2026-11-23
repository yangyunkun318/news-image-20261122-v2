[![m](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?ref=zhc1s3ge)
[![m](https://make.fun/badge/news-image-20261122/yangyunkun318/news-image-20261122-v2/rank.svg)](https://make.fun/bounty/news-image-20261122?ref=zhc1s3ge)
[![m](https://make.fun/badge/news-image-20261122/yangyunkun318/news-image-20261122-v2/reward.svg)](https://make.fun/bounty/news-image-20261122?ref=zhc1s3ge)

# 22 November 2026 — The World in Six Moments

A second entry for make.fun's "Sum up 22 November's world news in one image" bounty.
Where the first entry is a newspaper front page, this one is a vertical timeline:
a dark navy board with a gold spine, six numbered moments, one per story.

## The six moments

1. **Libya** — Sea drones hit Russian warship in Benghazi. Ukraine says it struck the corvette Merkury at a Libyan naval base.
2. **Kyiv region** — Drone strike buries families in apartment block. At least 14 people missing after a Russian drone hits a home.
3. **Strait of Hormuz** — Tankers ablaze as US–Iran standoff deepens. Ships struck near the strait as Tehran readies a tanker convoy.
4. **Nigeria** — Boat capsizes on way to a funeral. At least 24 people dead after the vessel overturns.
5. **Indonesia** — Fire rips through candy factory. Three killed and 36 missing as rescuers search the ruins.
6. **Washington** — US presses Nvidia over AI chips sold to China. Treasury demands answers on compliance after sales to Beijing.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
(1024×683, 469,985 bytes) to `$MAKEFUN_OUTPUT_DIR/entry.png`, verifying the PNG
signature, the 1024×683 dimensions, the 1 MiB cap, and the written bytes.
Two runs produce byte-identical output.
