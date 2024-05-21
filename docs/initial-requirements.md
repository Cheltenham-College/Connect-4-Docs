---
title: Initial Requirements
editLink: false
---

# {{ $frontmatter.title }}

::: info
Credit to OCR 2016 paper.
:::

Four in a Row is a game where two players drop coloured discs intoa  grid, with the aim to get four of their own colour in a row.
Each player is given a set of coloured discs, red(R) or yellow(Y). The players take it in turns to drop their disc into a column inthe grid. The disc drops down to the lowest available space in that column.

The grids below shows what happenes when the yeloow player drops a disc into column 2:

::: info
**Before**
:::

| - | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 0 | - | - | - | - | - | - | - |
| 1 | - | - | - | - | - | - | - |
| 2 | - | - | - | - | - | - | - |
| 3 | - | R | Y | Y | - | - | - |
| 4 | - | Y | R | R | Y | - | - |
| 5 | R | Y | R | R | Y | R | - |

::: info
**After**
:::

| - | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 0 | - | - | - | - | - | - | - |
| 1 | - | - | - | - | - | - | - |
| 2 | - | - | Y | - | - | - | - |
| 3 | - | R | Y | Y | - | - | - |
| 4 | - | Y | R | R | Y | - | - |
| 5 | R | Y | R | R | Y | R | - |

The game continues until one player has got four discs of their colour in a straight row in any direction. i.e. vertical, horizontal, or a diagonal.
