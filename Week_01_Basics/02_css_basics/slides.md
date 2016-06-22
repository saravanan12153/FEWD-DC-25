# BONUS - CSS Basics

##DOM

(a.k.a. Document Object Model)

* Convention for representing objects in a document (i.e. an HTML document)
* Document tree / DOM tree

---

##HTML Structure

```
<html>
	<head>
		<!-- Stuff goes here -->
	</head>

	<body>
		<!-- Stuff people see goes here -->
	</body>
</html>
```

Note:
Talk about title tag, what goes in head vs. body.


## Let's Talk About Styles

##Where does CSS go?

* Inline
* In the `head`
* In a separate file


##Using a separate CSS file

It's best practice to put CSS in its own file and link to it from the `<head>`.

```
<link rel="stylesheet" href="style.css">
```

---

##CSS

![](../../img/unit_1/css_syntax.png)

---

##CSS Break Down

```
p {
	color: red;
	font-weight: bold;
}
```

---

##CSS Break Down

* This whole thing is called a **rule**.
* The `p` is called a **selector**, and it's followed by a set of **declarations** in a **declaration block**.

---

##CSS Break Down

* The **selector**, `p` in this case, specifies what parts of the HTML document should be styled by the declaration.
* This selector will style all `p` elements on the page.

---

##CSS Break Down

The **declaration block** here is:

```
{
	color: red;
	font-weight: bold;
}
```

**Declarations** go inside curly braces.

---

##CSS Break Down

#### Declarations

This example has two declarations. Here's the first:

```
color: red;
```

Note:
Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.

In this declaration, we are setting the `color` **property** to the **value** `red`.


##CSS Break Down

Let's look at the second declaration:

```
font-weight: bold;
```

Note:
	* What style **property** are we specifying here?
	* What **value** are we setting that **property** to?
	* Try writing a new set of styles for another element, like an `h1`.


##CSS Break Down

Why might we want to link to a separate CSS file?

Note:
Discuss as a class


##Colors

Colors can be specified in CSS in a variety of ways:

![](../../img/unit_1/color.png)

Note:
* keyword
* hex codes
* rgb

---

##Color Keywords

* These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

* See [here](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more.

---

##Hex Codes (RGB)

![Hex Color explanation](../../img/unit_1/hex_colors.png)

Note:
"Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.

Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.


---

##RGB Color Values

####```rgb(0,0,0)```

*	The first value is red, the second green, the third blue.
*	Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.


Note:
FF in base-16 is equivalent to 255 in base-10.

In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.

---

##Images

Images are placed using the ```<img>``` tag.

```
<img src="img/imageName.jpg" alt="alternative text">
```

The `img` tag requires a `src` attribute, which tells the browser where to find the image.

---

##Images

Full URL

```
<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/397/thumb_User-Experience-Sketching.jpg">
```

Note:
Make sure you have permission to use that image!

---

##What about local images?

Inside ```webroot```, a relative path could be used:

![Parent Folder Structure](../../img/unit_1/folder_structure_parentDirectory.png)

---

##Images
Relative Path

```
<img src="images/logo.png">
```

---

##Images

Absolute Path

```
<img src="/images/logo.png">
```

Note:
	Absolute URLs start with a `/`, so if we imagine that our `webroot` directory was stored on a server such that the `webroot/index.html` file is accessible at `http://example.com/index.html`, then placing the logo image could be done from any html page with: ```<img src="/images/logo.png">```

	The benefit here is that this same ```src``` path works on any html page, no matter what its location, so the same ```img``` tag can be used on both the ```webroot/index.html``` page and the ```webroot/about/index.html``` page.

	The downside is that the path only works if the project is stored to a proper location for serving.

---

##Image Alt Attribute

A piece of text to be used in lieu of the image when the image is unavailable

```
<img src="puppy.jpg" alt="My cute puppy">
```

---

##Images

Why didn't my image load?

Note:
Reasons an image may not load:
- There was a connection error, the browser didn't download the image.
- The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated yet to reflect the change.
- The user is running a text-based browser such as an older phone with a WAP-style browser, or a non-graphical browser like lynx.
- The user is using a screen reader because she has low vision, which will read the `alt` text aloud or present it through a braille reader.

---

##Image File Formats

There are three main image file formats:

* .png
* .gif
* .jpg

Note:
Images
- PNG: Supports transparency and semi-transparency, great for logos, icons, and repeating background tiles. Almost always preferable to a `gif`, unless semi-transparency is not needed, and the `gif` format is significantly smaller.
- GIF: Can have basic transparency, typically a `png` is used instead.
- No transparency, can be stored at different compression levels with varying amounts of "lossy-ness", typically the best format for photos. (Try to balance between photo quality and file size.)

Thanks to Joni Halabi for this information!
