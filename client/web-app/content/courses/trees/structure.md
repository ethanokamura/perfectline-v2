---
title: Tree Structures
description: Let's dive a little deeper into certain types of tree structures.
tags:
  - data-structure
  - binary-search-tree
  - red-black-tree
  - avl-tree
  - heaps
published: true
lang: cpp
course: trees
order: 6
---

## Complete Binary Tree (CBT)
A complete binary tree is a binary tree where all the leaves have the same depth and all internal nodes have 2 children.

Note: The number of nodes at depth $d$ is $2^d$

An example of a complete tree with height 2:
```
0:          5
          /   \
         /     \
1:      3       8 
       / \     / \
2:    2   4   7   10
```

If $T$ is a tree with height $h$, then the number of nodes $n$ is

$$
n = \sum\limits^{h}\limits_{d=0} 2^d = {2^{h+1} - 1 \over 2 - 1} = 2^{h+1} - 1
$$

Where $\sum\limits^{h}\limits_{d=0} 2^d$ is a geometric series that simplifies to $2^{h+1} - 1$

Notice that a complete binary tree must have one less node than a power of 2 (0, 1, 3, 7, etc).

## Nearly Complete Binary Tree (NCBT)
The last level in a nearly complete binary tree is not completely filled. An almost (or nearly) complete binary tree can have any number of nodes.

```
        5
      /   \
     /     \
    3       8 
   / \     /
  2   4   7 
```

However, the number of nodes $n$ in a nearly complete tree of height $h$ satsifies the following conditions:

$$
2^h - 1 < n \leq 2^{h+1} -1
$$

Note that each one of these values are integers, so if we remove a one from each side, we get the following new inequality:

$$
2^h \leq n < 2^{h+1}
$$

To simplify, we can take the $\log$ base 2 of each component

$$
h \leq \lg(n) < h+1
$$

Note that $\lg(n)$ could be equal to $h$, but is never equal to $h+1$. This is equivalent to the floor function

$$
h = \lfloor{\lg(n)}\rfloor
$$

Now it should be clear why the best possible runtime for binary tree algorithms is $\lg(n)$ (It is the shortest possible line of ancestory).