---
title: When to use dispose() and when to use removeListener().
image: malene-2x.jpg
tags:
  - Flutter
  - Dart
  - Programming
description: We add listeners, but we need to take care of removing these as well. This can be done in more than one way, either calling .removeListener() or .dispose(). But when do we use one over the other?
updatedAt:
---

<PostHeader title="When to call .dispose() and when to call .removeListener() in Flutter."></PostHeader>

_When writing apps in Flutter, we might need a <code>FocusNode()</code> or an <code>AnimationController()</code>, or any other class that provides <code>.addListener()</code>, <code>.dispose()</code> and <code>.removeListener()</code> methods. We can add listeners everywhere, but we also need to handle removing these again. This can be done in more than one way, by either calling <code>.removeListener()</code> or <code>.dispose()</code>. But when do we use one over the other, and why do we get exceptions like_ ".setState() called after .dispose()" _or_ "xy.dispose() called more than once"_?. In this post, we will investigate when to use what and how to avoid these exceptions as well as memory leaks._

## In short:

Let's say we have an <code>AnimationController()</code> class. The widget that instantiates this class should also be the widget that calls <code>.dispose()</code> on it. If we provide the instantiated <code>AnimationController()</code> to a child widget, and this widget adds a listener, the child widget should only call <code>.removeListner()</code> but not <code>.dispose()</code>.
Try to remember:

<h4 class="text-center italic h-">Widget that inizialize calls .dispose(), widget that recieve calls .removeListener().</h4>

## The code we will explore:

We will build a small app with a list of items - each item will receive an instance of the <code>AnimationCcontroller()</code>. We will also have an <code>IconButton()</code> to start the animation. In this example, we use the <code>ListView.builder(</code>) to render our list items lazy; this will add or remove the ListItems while scrolling the list. As soon as a ListItem enters the view of the screen, <code>initState()</code> of that ListItem will get called. On the other hand, when a ListItem isn't visible anymore, it will get disposed, and therefore, <code>dispose()</code> of that ListItem will get called. We can use this to our advantage and test a thing or two.

<PostImage src="disposeApp.png" alt="Image of the app" classes="h-36"></PostImage>

#### Let's look at the code:

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

Here we have a Statefullwidget called <code>TestScreen()</code> that implements a <code>ListView.builder()</code>. For each element in the <code>ListView.builder()</code> a child widget named <code>ListItem()</code>, which requires a animationController, gets called. Inside the <code>\_TestScreenState</code> we instatiate an <code>AnimationController()</code>. In initState we call <code>.addListener()</code> on the <code>\_controller</code>, and in <code>dispose</code> we call <code>\_controller.dispose()</code>.
<br>
<br>

#### Now let's take a look at the ListItem widget.

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

Here we receive the <code>animationController</code>, and for every widget, we register a new listener in <code>initState()</code> by calling <code>widget.animationController.addListener(\_listener)</code>, but we also make sure to remove this listener again when the widget gets disposed by calling widget.<code>animationController.removeListener(\_listener)</code> in <code>dispose()</code>.
<br>
<br>
This would be the correct use of <code>.removeListener()</code> and <code>.dispose()</code>. Now let's have a look at some mistakes we could make!

## Calling .dispose() in the child widget ListItem?

Calling <code>widget.animationController.dispose()</code> in the <code>ListItem</code> would look like this _(only change is in the <code>dispose()</code> function of the widget)_:

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

This error happens because we try to dispose the animation controller more than once while scrolling our list. Another important note is that calling <code>widget.animationController.dispose()</code> in the <code>ListItem</code> would remove all listeners added to the <code>AnimationController()</code>, and not only the specific listener added in the widget.

## Not calling .removeListener() in the child widget?

ListItem not calling <code>widget.animationController.removeListener()</code> would look like this _(only change is in the <code>dispose()</code> function of the widget)_:

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

We get this error because we try to call <code>setState()</code> (see the <code>\_listener()</code> function) on a widget that is already disposed.
But be aware! We might not see this error if our <code>\_listner()</code> function looked like this:

```dart
void _listener() {
  print("Hi");
}
```

Because we don't call <code>setState()</code> we would not get an error, but for every <code>ListItem</code> that gets disposed, we would keep the reference to <code>\_listener</code> that is not needed anymore, and we could end up having a memory leak or at least a lot of unused code.
So, it is crucial to call <code>.removeListener()</code> in the child widget to prevent having any listeners attached to widgets that are not in the widget tree anymore.

## Wrap up

So to wrap up. The widget that instantiates a class where we can add a listener should also be the widget that calls <code>.dispose()</code>, and the widget that gets passed an instance where we can add a listener should only call <code>.removeListener()</code>. So again, remember:

<h4 class="text-center italic">Widget that inizialize calls .dispose(), widget that recieve calls .removeListener().</h4>

<br>
I hope you had fun reading this tutorial. If you have any comments feel free to message me - have a fantastic day :)
