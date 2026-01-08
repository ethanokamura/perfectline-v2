---
title: Disjoint Set
description: Time to build a simple Union Find (Disjoint Set) ADT.
tags:
  - data-structure
  - disjoint-set
  - union-find
  - memory
  - classes
published: true
lang: cpp
course: maze
order: 102
---

## Prerequisites:
To follow along with this section. Ensure that you have cloned this [GitHub Repository](). This section requires some familiarity with tree structures. If you need a refresher on trees, check out our course on trees [here](https://www.perfectline.io/courses/trees/intro).

## Overview:
**Union Find** is a data structure that keeps track of elements which are split into one or more _disjoint sets_. Because of this, Union-Find is also sometimes referred to as a **Disjoint Set**.

Two sets are called **disjoint sets** if they do not share any common elements. Think of two separate node structures. Sometimes, we may want to unite two sets. To do this, we will use a **union** method. The goal of the union method is to _merge two disjoint sets_.

We will need to know what tree a certain element is a part of. To do this, we will use a **find** method, which will indicate the parent (or representative) element of the node structure. 

Note that visualizing these sets as trees in a forest may be helpful. The representative (or parent element) would be the root, and its children would be elements of that set. In this case, our disjoint sets would be trees that we can unite smaller trees into larger trees.

The Union-Find data structure supports three main operations:
1. `union(x, y)`: Unite two sets (yields one set)
2. `find(x)`: Finds the representative element (root node)
3. `same_component(x, y)`: Detects if two components share the same representative (meaning they are a part of the same set).

General Idea:
- Group $n$ items between $1$ and $n$ set(s) based on what you decide what equivalency means.
- Self-healing towards best time complexity (constant)

Implementation:
- Linked lists of elements in the same set would be too slow ($O(n)$ find).
- We will use a **disjoint set forest**.

Root Element:
- The root element is the representative element of a given set.
- An element of the set is its name

---

## Time Complexity:
Our _expected_ time complexity is $O(1)$, with a _worst case_ of $O(n)$, but it is _self-healing_ towards $\alpha(n)$ - Where $\alpha(n)$ is **amortized constant time** (almost, but not quite constant time).

Complexity:

| Operation | Time Complexity |
|-----|------|
| Construction | $O(n)$ |
| Union | $\alpha(n)$ |
| Find | $\alpha(n)$ |
| Get Component Size | $\alpha(n)$ |
| Check Connection | $\alpha(n)$ |
| Count components | $O(1)$ |

To stay within the $O(1)$ budget, our operations will need to make decisions quickly with only a small amount of information. We can optimize our structure in one of two ways:
- Heuristic #1: Union by rank
- Heuristic #2: Path compression

For those wondering, the goal is to reduce the height of these trees!

For our program, we will be implementing union with **union by rank** and find with **path compression**.

---

## How It Applies:
For our program, we will have $n$ nodes, none of which are initially connected. Each node represents a tree (of a single node) in the forest. We will then continue to unite the nodes together until we are left with a single tree.

In the context of our maze, we can think of each node as a cell in the maze where each cell has 4 walls. To unite the nodes, we can remove the walls between the cells. Our algorithm is complete when all the cells are connected in some way. Such that every cell is reachable.

The end goal is to create a maze-like structure. Behind the scenes this can be represented as one large tree.

---

## Make Set:
When we build our disjoint set, we will start by creating $n$ nodes, where each element is part of its own set by default. This means that we will start with $n$ **disjoint sets** containing only a single element.

Each element is the parent of itself with a default value for the representative (in this case, zero).

For our implementation, "make set" is consumed by a value constructor:
```cpp
// constructor
DisjointSet(int n) {
  if (n < 3) throw std::domain_error("invalid size!");
  p = new int[n];
  r = new int[n];
  count = n;
  this->n = n;
  for (int i = 0; i < n; i++) {
    p[i] = i;  // parent is itself
    r[i] = 0;  // all are initially rank 0
  }
}
```

---

## Union By Rank:
**Union By Rank** is an optimization technique to keep the tree height as small as possible when performing `union()` operations.

Here's the general idea:
- Each node has a "rank", which is an estimate of its tree height
- When performing `union(x, y)`, the root of the tree with a smaller rank is attached under the root of the tree with a larger rank.
- If both trees have the same rank, we choose one arbitrarily as the new root and increase its rank by one.

This optimization ensures that the tree remains balanced, reducing the time complexity of operations.

Implementation:
1. Determine representative element
2. Combine by **rank** to try to avoid worst-case

**NOTE:** Rank is an estimated upper bound.

### Union:
The union function is pretty much just a wrapper for the link function. We check to make sure the bounds are valid within our disjoint set. We then _link_ the two representatives of the sets from $x$ and $y$ together.

```cpp
/**
 * @brief union by rank
 *   unites set that includes x and y by rank
 *   determined representative element
 *   combine by rank to try to avoid worst-case
 */
void union_by_rank(int x, int y) {
  // bounds check x and y
  if (x < 0 || x >= n || y < 0 || y >= n)
	  throw std::domain_error("out of range");
  // Ensure that x and y are different elements
  if (x == y) return;
  // find the representatives (or root nodes)
  // unite then together
  link(find(x), find(y));
}
```

### Link:
The linking function itself is a little more complex. Keep in mind, with this function, x and y are the representatives of the previous sets of x and y.

Here's how the code works:
1. Check to see if the rank of x is greater than y. If so, we set the parent of y to x
2. If the rank of x is less than the rank of y, we set the parent of x to y.
3. If the ranks are equal we increase the rank of y by one.

```cpp
void link(int x, int y) {
  // tuck smaller rank under larger rank, no rank change
  // if they are the same rank, then one rank increases by one (one on top)
  if (r[x] > r[y]) {
    p[y] = x;
  } else if (r[x] < r[y]) {
    p[x] = y;
  } else {
    r[y]++;
  }
}
```

---

## Find (With Path Compression):
Path Compression is an optimization technique that flattens the structure of the tree whenever `find(x)` is called. Instead of maintaining a long chain of parent pointers, it directly links each node to the root during traversal. This significantly reduces the depth of the tree, making future queries faster.

When calling find(x), instead of returning the root immediately, we **recursively update** each node's parent to point directly to the root of the set. This way, subsequent `find(x)` calls take constant time ($O(1)$).

**NOTE:** This does not change the rank of the element.

```cpp
int find(int x) {
  // bounds check
  if (x >= n) throw std::domain_error("out of range");
  // recursively find the representative of the current node
  if (p[x] != x) p[x] = find(p[x]);
  // return the representative of x
  return p[x];
}
```