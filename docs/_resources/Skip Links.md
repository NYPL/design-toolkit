---
title: Skip Links
description: Documentation and resources around skip links
---
## Draft page  
This page is a draft.  

## Skip Links
The purpose of a skip link is to provide users to skip repeated content. The purpose of a Skip to main content link is to let users skip repeated header and navigation regions to navigate directly to the unique content of a page.
The skip link is one way in which we fulfill success criteria 2.4.1 Bypass Blocks (Level A). Success criteria 2.4.1 Bypass Blocks requires:
>A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

This criterion is to save the time of users by reducing the time spent wading through repeated content, particularly for users of assistive technology such as alternate keyboard interface, screen magnifiers, and screen readers.

Some users of assistive technology also navigate segments of the page using landmarks, which include main. This does not replace the Skip to Main Content link.

Most core websites and apps use the NYPL Global header to implement and configure a skip to main content link.

### Main  
The `main` Landmark region is generally the target of a skip link. While some Assistive Technology affords browsing by region, we include a standard skip link at the top of all pages to ensure that all users can skip repeated content.  

## Skip Link Pattern  
This Skip Link pattern should be true for all viewports. It should be the default skip nav of a page with a properly configured global header. If a page does not use a global header, this is the recommendation for a skip to main content functionality.  

* The Skip to Main content link is the first element in the page order
* The Skip to Main content link is in the tab order
* On focus, the skip link(s) are visible
* When not in focus, the skip link(s) are not visible
* When not in focus the skip link(s) are still available to screen readers
* If there are multiple Skip links, the Skip to Main link is the first in the order
* The text “Skip to main content” is the main link text for the link with target to main section of the page
* The text of the skip links is rendered in sentence or capital case. It is not rendered in all caps which can cause AT to read out text letter by letter.
* Skip links are organized in a nav element with role=”navigation” and a descriptive aria-label.
* If there are multiple skip links, they are organized as an unordered list.
* The second skip link is “Click to learn about accessibility at the library” with target https://www.nypl.org/accessibility


## Resources  

* [W3C article Understanding SC 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)  
* NYPL Universal header repo & Documentation
