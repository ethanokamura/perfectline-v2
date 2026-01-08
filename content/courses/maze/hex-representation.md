---
title: Hex Representation
description: A deep dive on the hexidecimal maze representation
tags:
  - data-structure
  - disjoint-set
  - hexidecimal
published: true
lang: cpp
course: maze
order: 101
---

## Overview:

For the entirety of this course. We will be representing the cells in our maze via hexidecimal values.

The cells will have a left, right, top and bottom wall (unless one or more is removed). Each wall is represented by the following values:

| Wall Position | Value | Binary |
|-----------------|-----|------|
| Right Wall      |  1  | 0001 |
| Bottom Wall     |  2  | 0010 |
| Left Wall       |  4  | 0100 |
| Top Wall        |  8  | 1000 |

The binary values will be important later on when we are detecting if walls are connected. It will allow us to use **Bitwise Operations**.

A cell with all 4 walls will have an integer value of `15`, a hex value of `f`, and a binary value of `1111`. 

A cell with no walls will have a value of `0` or `0000` in binary.

## Connected Cells:
Two cells are connected if the walls between them are missing.

Given two cells $A$ and $B$, where $A$ is to the left of $B$ (ie $A\leftrightarrow B$),
- $A$ and $B$ are **connected** if $A$ is missing its right wall and $B$ is missing its left wall.
- Numerically, this means that $A$ does not have the value of $1$ and $B$ does not have the value of $4$.

You might be asking how we know if a cell is missing a value... This is where the binary values matter!

If $A$'s first bit is `0` and $B$'s third bit is `0`, then the walls are **connected**.

For example:
```cpp
A = 1110  // missing right wall
B = 1011  // missing left wall
```

$A$ and $B$ would not be connected if there is a wall between them. Such that these cells are **not connected**:
```cpp
A = 1110  // missing right wall
B = 1111  // contains left wall
```

## Valid Maze
A valid maze means that the starting cell eventually connects to the ending cell. For simplicity, the starting cell will always be at position $(0,\;0)$ and the ending cell will be at $(n,\;n)$

Here's an example of a valid $2\times 2$ maze:
```sh
9D
62
```

In this example, the starting cell (represented by the value `9`), is connected to the cell below it (`6`). `6` is then connected to the cell on its right (represented by the value `2`).

Since `2` is the ending cell, we do, in fact, have a **valid path** from the starting cell to the ending cell.

Note, we do not really care about the cell on the top right. Even though it is connected to the ending cell, it is not contained in the shortest path from start to finish.