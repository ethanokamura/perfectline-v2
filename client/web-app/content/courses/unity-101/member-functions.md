---
title: Member Functions
description: Learn About Unity's Included Functions
tags:
  - unity
  - functions
published: true
lang: unity
course: unity-101
order: 5
---

## Creating A Script
To create a new script go to the Assets folder and right-click. There will be a list of options to choose from, but we want the second one down `#C Script`. Next, give it a name and open it up! Hopefully, you have Visual Studio installed or an IDE of your choice. Each new Unity Script will come with this basic "boilerplate" or starting code:

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class basic_script : MonoBehaviour {
	// Start is called first frame if the script is enabled.
	void Start()
  {

  }

	// Update updates every frame.
	void Update()
  {

  }
}
```

For now, to keep things simple we will not be looking at the first few lines or reviewing syntax. I would recommend checking out my Intro to Programming course with `C++` if you do not understand some of this! If you are not interested, we will briefly review this in the upcoming Unity courses.

There are some comments included that describe the `Start()` and `Update()` functions. The `Start()` function is called as soon as the play button is hit! It only is fired once. Here we would want to initialize things like components and variables. In `Update()`, it is called as soon as the play button is pressed and is repeatedly called once per frame. These are the only two functions included in the default script, but these are not the only included functions that Unity gives us.

There are some more functions that we may use. Here are some more examples with comments explaining what they do!

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class basic_script : MonoBehaviour {
	// Awake is called regardless of whether or not the script is enabled.
	void Awake() {}

	// Start is called first frame if the script is enabled.
	void Start() {}

	// Update updates every frame.
	void Update() {}

	// FixedUpdate updates 50 calls per second (every 0.02 seconds).
	void FixedUpdate() {}

	// LateUpdate is called after all Update functions have been called.
	void LateUpdate() {}

	// OnEnable is called when the object becomes enabled and active.
	void OnEnable() {}

	// OnDisable is called when the behaviour becomes disabled
	void OnDisable() {}
}
```

We have now finally finished this basic course going over the basics of the Unity Hub, Unity Editor, and all the things that go into a game!