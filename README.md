#responsiveElement 1.0.0
===================

Element queries don't exist yet for CSS3, but this plugin allows you to do just that with jQuery.

The basic functionality of this plugin applies different css classes to an element depending on it's width.

##Installation

###Step 1: Link Required Files

The jQuery library needs to be loaded first, then this plugin.

```html
<!-- jQuery library (served from Google) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!-- bxSlider Javascript file -->
<script src="/js/jquery.responsiveElement.min.js"></script>
```

###Step 2: Create HTML Markup

Locate the element you want made responsive and add add any class name you want to it. For this example, we will make it "responsive".

```html
<div class="responsive">
  The content of my div is here
</div>
```

###Step 3: Call responsiveElement

```javascript
$(document).ready(function(){
  $('.responsive').responsiveElement();
});
```

That's it!

There are a couple options that can be applied to customize it. You can also apply this to multiple elements on the page at a time, all with different options!

##Configuration Options

**rules**
Rules that are applied to the element in question
```
default: [
  '750,responsive-lg',
  '617,responsive-md',
  '470,responsive-sm',
  '0,responsive-xs'
]
```
The format of the each element in the default array is "minimum pixel width, class to be applied". So if the width of `<div class="responsive">` is 750 pixels or larger, then the element will become `<div class="responsive responsive-lg">`.

See the example.html file for a couple examples.

Have fun!
