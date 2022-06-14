---
title: When to use dispose() and when to use removeListener().
image: malene-2x.jpg
tags:
  - Flutter
  - Dart
  - Programming
description: We add listeners, but we need to take care of removing these as well. This can be done in more than one way, either calling .removeListener() or .dispose(). But when do we use one over the other?
---

<PostHeader title="When to use dispose() and when to use removeListener() in Flutter."></PostHeader>

_When writing apps in Flutter we might need a <code>FocusNode()</code> or an <code>AnimationController()</code>, or anything else where we can add a listener.
So we add listeners, but we need to take care of removing these aswell. This can be done in more than one way, either calling <code>.removeListener()</code> or <code>.dispose()</code>. But when do we use the one over the other? <br>
I learned this today and would love to share my new wisdom with you :)_

#### In short:

Let's say we have an <code>AnimationController()</code> class. The widget that instantiates this class should also be the widget that calls <code>dispose()</code> on it. If we provide the instantiated <code>AnimationController()</code> to a child widget, and this widget adds a listener, the child widget should only call <code>removeListner()</code> but not <code>dispose()</code>.

<PostImage src="disposeApp.png" alt="Image of the app"></PostImage>

#### Some background information on the code we are about to write:

We will build a small app with a list of items - each item will receive an <code>AnimatioCcontroller()</code>. We will also have an <code>IconButton()</code> to start the animation. In this example, we use a <code>ListView.builder()</code> to render our list items. This way, items get added or removed/disposed depending on whether or not the item is in the view. We can use this to our advantage and test a thing or two.

#### Let's look at the code at the code:

```dart
// file TestScreen.dart
import 'package:flutter/material.dart';

class TestScreen extends StatefulWidget {
  const TestScreen({Key? key}) : super(key: key);

  @override
  State<TestScreen> createState() => _TestScreenState();
}

class _TestScreenState extends State<TestScreen>
    with SingleTickerProviderStateMixin {
  late final _controller = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 1),
  );

  @override
  void initState() {
    super.initState();
    _controller.addListener(listener);
  }

  void listener() {
    print("Lister added");
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 400,
          child: ListView.builder(
            itemCount: 20,
            itemBuilder: (BuildContext context, int index) {
              return ListItem(
                animationController: _controller,
              );
            },
          ),
        ),
        IconButton(
          onPressed: () => _controller.forward(),
          icon: const Icon(Icons.play_arrow),
        )
      ],
    );
  }
}
```

Here we have a Statefullwidget called <code>TestScreen()</code> that implements a <code>ListView.builder()</code>. For each element in the <code>ListView.builder()</code> a child widget named <code>ListItem()</code>, which requires a animationcontroller, gets called. Inside the <code>\_TestScreenState</code> we instatiate an <code>AnimationController()</code>. In initState we call <code>.addListener()</code> on the <code>\_controller</code>, and in <code>dispose</code> we call <code>\_controller.dispose()</code>.
<br>

Now let's take a look at the ListItem widget.

```dart
// file TestScreen.dart
class ListItem extends StatefulWidget {
  final AnimationController animationController;

  const ListItem({
    required this.animationController,
    Key? key,
  }) : super(key: key);

  @override
  State<ListItem> createState() => _ListItemState();
}

class _ListItemState extends State<ListItem> {
  @override
  void initState() {
    super.initState();
    widget.animationController.addListener(_listener);
    print("Init $this");
  }

  @override
  void dispose() {
    widget.animationController.removeListener(_listener);
    print("Dispose $this");
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: 33, horizontal: 20),
      child: Text("Hallo"),
    );
  }

  void _listener() {
    setState(() {
      print("Hi");
    });
  }
}
```

Here we receive the <code>animationController</code>, and for every widget, we register a new listener in <code>initState()</code> by calling <code>widget.animationController.addListener(\_listener)</code>, but we also make sure to remove this listener again when the widget gets disposed by calling widget.<code>animationController.removeListener(\_listener)</code>.

This would be the correct use of <code>.removeListener()</code> and <code>.dispose()</code>. Now let's have a look at some mistakes we could make!

#### What happens when we call <code>.dispose()</code> in the child widget ListItem?

The <code>ListItem</code> calling <code>widget.animationController.dispose()</code> would look like this _(only change is in the <code>dispose()</code> function of the widget)_:

```dart
// file TestScreen.dart
class ListItem extends StatefulWidget {
  final AnimationController animationController;

  const ListItem({
    required this.animationController,
    Key? key,
  }) : super(key: key);

  @override
  State<ListItem> createState() => _ListItemState();
}

class _ListItemState extends State<ListItem> {
  @override
  void initState() {
    super.initState();
    widget.animationController.addListener(_listener);
    print("Init $this");
  }

  @override
  void dispose() {
    //widget.animationController.removeListener(_listener);
    widget.animationController.dispose();
    print("Dispose $this");
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: 33, horizontal: 20),
      child: Text("Hallo"),
    );
  }

  void _listener() {
    setState(() {
      print("Hi");
    });
  }
}
```

When we start scrolling our list of items (until some of them are out of the view, and therefore <code>dispose()</code> gets called), we will get the following error:

<PostImage src="error-dispose.png" alt="Shows error when disposed is called in a child widget"></PostImage>

This error hapens because we try to dispose the <code>animationController</code> more than once while scrolling our list. Another important note is also that calling <code>widget.animationController.dispose()</code> in the <code>ListItem</code> would remove all listeners that are added to the AnimationController(), and not only that one specific listener that is added in the widget.

#### What happens when we don't call .removeListener() in the child widget?

ListItem not calling widget.animationController.removeListener() would look like this _(only change is in the <code>dispose()</code> funktion of the widget)_:

```dart
// file TestScreen.dart
class ListItem extends StatefulWidget {
  final AnimationController animationController;

  const ListItem({
    required this.animationController,
    Key? key,
  }) : super(key: key);

  @override
  State<ListItem> createState() => _ListItemState();
}

class _ListItemState extends State<ListItem> {
  @override
  void initState() {
    super.initState();
    widget.animationController.addListener(_listener);
    print("Init $this");
  }

  @override
  void dispose() {
    //widget.animationController.removeListener(_listener);
    print("Dispose $this");
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: 33, horizontal: 20),
      child: Text("Hallo"),
    );
  }

  void _listener() {
    setState(() {
      print("Hi");
    });
  }
}
```

When we start scrolling our list of items (until some of them are out of the view, and therefore <code>dispose()</code> gets called), and then press the play button, we will see the following error:

<PostImage src="error-setstate.png" alt="Shows error when removeListener is not called in a child widget"></PostImage>

We get this error because we try to call <code>setState()</code> on a previously disposed widget (see the <code>\_listener()</code> function). This is not possible; therefore, it is crucial to call <code>.removeListener()</code> in the child widget.
<br>
But be aware! we might not see this error if our <code>\_listner()</code> function looked like this:

```dart
  void _listener() {
    print("Hi");
  }
}
```

Because we don't call <code>setState()</code> we won't get an error, but for every ListItem that gets disposed, we would keep the reference to <code>\_listener</code> that is not needed anymore, and we could end up having a memory leak or at least a lot of unused code.

#### Wrap up

So to wrap up. The widget that instantiates a class where we can add a listener should be the widget that calls <code>.dispose()</code>, and the widget that gets passed an instance where we can add a listener should only call <code>.removeListener()</code>.
<br>
I hope you had fun reading this small. If you have any comments feel free to message me - have a fantastic day :)
