xD remake into static slackingly?

13/11/24 update: 
the copy function only works for the 1st link sadly...  

### Kliko's branch ChatGPT breakdown

# NerdWiki Documentation

`NerdWiki` is a JavaScript module that helps build a web interface for displaying sections of links, with functionalities like copying text to the clipboard, showing notifications, and adding tooltips.

### Overview

The code creates a `NerdWiki` object with two main components:

1. **htmlHelper**: A helper object that provides functions to work with HTML elements.
2. **NerdWiki**: The main class that initializes the content and appends it to the page.

---

### 1. `htmlHelper` - Functions for Managing HTML Elements

#### `copyToClipboard`
Copies a text string to the clipboard:
- Tries to use the `navigator.clipboard` API (a modern clipboard access method).
- If `navigator.clipboard` isn’t available, falls back to using a hidden `<textarea>` element and the `document.execCommand('copy')` command for older browsers.
- Calls `showNotification` to display a success or error message after the copy action.

#### `showNotification`
Displays a notification message on the page:
- Creates a `<div>` element with the message text, styles, and attaches it to the page.
- Adds a close button for manual dismissal.
- Automatically removes the notification after a set timeout if one is provided.

#### `createTooltip`
Creates a tooltip (hover text) for an element:
- Uses `createElement` to build a `<div>` with text and a nested tooltip.

#### `createSectionItem`
Creates a link item with a copy button:
- Each item has a copy button and link element.
- The copy button uses `copyToClipboard` to copy the link URL when clicked.

#### `createSection`
Creates a full section for each set of links, including the title and individual link items as `createSectionItem` elements.

#### `createElement`
A helper function that creates an HTML element of any type with specified attributes and child elements:
- Takes in an element type (`div`, `a`, `button`, etc.), attributes (like `class` or `href`), and child elements.
- Loops through `children` array, appending each child to the new element.

---

### 2. `NerdWiki` - Main Class that Organizes and Displays Content

The `NerdWiki` class uses `htmlHelper` to display content on the page:
- Loads configuration data (`globalConfig.links`) for the links.
- Uses `htmlHelper.createSection` to create sections for each link group.
- Appends sections to the main container (`appRoot`) on the page.

---

### 3. `NerdWiki.prototype.init` Method

The `init` function initializes the app by:
- Creating sections from the links in `globalConfig.links`.
- Appending sections to `appRoot`, the placeholder element on the page.

---

### Summary

- `NerdWiki` provides a modular JavaScript structure for a web page that displays groups of links.
- Includes helper functions for copying links, showing notifications, and adding tooltips.
- The main `init` method creates and displays sections for each set of links on the page.

---
