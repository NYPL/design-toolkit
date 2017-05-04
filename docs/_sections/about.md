---
title: About This Toolkit
description: Why this toolkit exists and how to use it.
---

### Introduction

This toolkit aims to serve multiple purposes:

- facilitate the creation of new web user interfaces
- ensure consistency in design and quality
- serve as the main repository for documenting the web design efforts at NYPL Digital

**This is a work in progress.** We will be constantly updating it, making additions and modifications to suit the needs of the team and the organization. If you see something missing or wrong, please [open an issue on the Github repository](https://github.com/NYPL/design-toolkit/issues/new).

### How This Site Is Organized

Each section deals with a specific topic (for example [Forms]({{ "/sections/forms.html" | relative_url }}) or [Buttons]({{ "/sections/buttons.html" | relative_url }})) which detail the different widgets to use in interfaces (for example [Primary Action Buttons]({{ "/sections/buttons.html#primaryButton" | relative_url }})). Each widget has a working example, the CSS class or classes involved, the HTML expected, and a JavaScript example, if applicable.

While the goal is to make this toolkit as easy to use as possible, some web development experience is required to be able to use it successfully.

### Copy/Paste Everything

The main idea behind this toolkit is to have as much of the design and functionality for any user interface available “out of the box”. **You shouldn't need to be writing any custom CSS**. If you are working on a NYPL Digital project and you think the functionality or widget you need is not covered, please [open an issue in Github](https://github.com/NYPL/design-toolkit/issues/new). This way future project will benefit from new developments and you won't need to do the heavy lifting of coming up with a custom solution to a design problem. As [someone else put it best](http://mrmrs.io/writing/2016/03/24/scalable-css/): “the real way to scale CSS, is to stop writing CSS.”

### System Fonts

After relying on custom web fonts for a while, we have decided that it is in our patron's best interest for NYPL websites to rely on system fonts instead. These fonts have several benefits:

- they are already installed in your computer or mobile device so there is no additional download required to use them, thus reducing bandwidth usage costs
- having the nuances of **bold text**, _italic text_, or `code text` also increases the size of the download (and we want those)
- our materials are multilanguage, making finding a custom font that supports, say, Persian or Chinese very expensive
- even if a custom font supports every single language, like the commendable [Noto free font](https://www.google.com/get/noto/) by Google, it will be a _very_ big download for our patrons (the complete Google Noto set is 970 megabytes!)

These are just the main reasons why we decided, for now, to use system fonts in this toolkit.

### Accessibility And Mobile First

This toolkit is designed with accessibility and mobile use in mind first. All features should be available to all users in all devices. If you see something that does not conform to this goal, please [open an issue in Github](https://github.com/NYPL/design-toolkit/issues/new).

### Installation

There are [installation instructions](https://github.com/NYPL/design-toolkit/blob/master/INSTALL.md) in the Github repository.

### Acknowledgements

The idea behind this toolkit borrows heavily from initiatives such as the [Gov.UK Service Manual](https://www.gov.uk/service-manual) or the [US Web Design Standards](https://standards.usa.gov/). We hope this code, which is [available on Github](https://github.com/NYPL/design-toolkit/), will be of use to others.
