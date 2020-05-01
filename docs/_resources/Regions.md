---
title: Landmark roles & Regions
description: Documentation and resources around landmarks & regions
---
### Regions
Regions are the basic building blocks of a page. WCAG 2.1 [defines regions](https://www.w3.org/TR/WCAG21/#dfn-regions) as "perceivable, programmatically determined section of content." Examples of a region are a page's header or footer. Different regions classify the different uses and functions of a page. Similar to headings, regions programmatically represent the organization of a page, which is often visually conveyed as well.  

Regions should block out large areas of the page. Because  regions can be used for browsing a page at a top level, too many regions, say 15, can counter that. Remember Regions are only one of the ways to organize a page. For example, a complex page with a lot of different content in the main region may be further organized with headings.   

All content on the page should be included in a region. If content is not included in a region, it may be missed by an AT user skimming the page by region.  

Users of Assistive Technology can navigate by regions using shortcuts. They may browse through all the regions of the page or navigate directly to one in particular. For instance, a user may use the "main" region to skip through repeated information in the header. When navigating through a page, a screenreader will announce changes between regions with the type of regions and the region name (if added).  

### Skip links  
The `main` region is generally the target of a skip link. While some Assistive Technology affords browsing by region, we include a standard skip link at the top of all pages to ensure that all users can skip repeated content.  

### Regions  
HTML5 introduced sectioning region elements which map to ARIA landmark roles. NYPL continues to use HTML and corresponding, ARIA roles together but will eventually do away with use of ARIA roles as recommended.  

### Labeling Conventions  
Regions can be labeled using an `aria-label` or `aria-labeledby`. (Use `aria-labeledby` to associate existing text on the page, otherwise use aria label.) Some single use regions, like main, do not need a label. However, when there are multiple regions of a type, they should each always be labeled with a unique and descriptive name. Labels can also be applied to make clear the content of a landmark such as an aside.

Note, a screenreader will announce the label and announce  the type of region. For instance, a nav region named "secondary navigation" would be announced "Secondary navigation navigation region". To prevent repetition do not include "Region" in the region label.  
#### NYPL Label Patterns  
##### Navigation Regions
* Secondary: In some current Drupal templates page orders, there is a subnavigation between the banner/header and the main content. On desktop, secondary navigation is anchored to the left of the screen and in mobile, secondary navigation is contained in an expandable menu.
"Secondary" is the label for these subnavs.  
* Pagnation: Nav regions for pagination should have the label "Pagination".  

| HTML5 | Aria Role | Notes |
| :------------- |:-------------| :-----	|
| `aside`| `complementary`|Used for content related or supplemental to the main content of the page, but not integral. For instance, we've used this for a region following the main region in page order with the heading "Related blogs" and links to blog posts which may be of interest.|
| `footer`| `contentinfo` (if nested under `body` element)||
| `form`| `form` | Must be named with one of labeling techniques |
| `header`| `banner` (if nested under `body` element)| <ul><li>One top level per page</li></ul> |
| `main` | `main`| <ul><li>One per page</li><li>Top level</li><li>Should include the h1 of the page</li></ul> |
| `nav`| `navigation`| Often multiple navs on the page so best practice is to have labels. |
| `section`| `region` if has label |||

### Resources  

* [Aria Landmark Regions spec](https://www.w3.org/TR/wai-aria-practices/#aria_landmark)  
* [Aria Landmark Examples](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html)  
* [Aria Breadcrumb example](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html)
