\---
title: Visible Focus
description: Documentation on resources around visible focus.
---
### Considerations    
* At a minimum we should never use outline: 0, which removes default focus indicators.  
* Visible focus should work and be tested on smaller viewports as well.  
* The team could consider setting different focus styles for certain elements. For example changing the background color of inline links on focus.  
* If we refine the color of the focus indicator, it should have a contrast of 3:1 with the background, see the Standards section for more information on that.

### Standards  
#### WCAG 2.0, 2.4.7 Focus Visible 
This is the success criteria requiring visible focus. 

* WCAG Article: [Focus Visible: Understanding SC 2.4.7](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)  

#### WCAG 2.1, 1.4.11  Non-text Contrast
WCAG 2.1 set a contrast ratio minimum of 3:1 for user interface components.  
Reminder, you can test contrast ratios with tools like [WebAIM's Color Contrast Checker](https://webaim.org/resources/contrastchecker/).  

* [WCAG 2.1 Non-text contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast)  
* [WCAG 2.1 article Understanding Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)  

### Resources  
Additional resources which may be of interest.

* Paciello article around backwards compatibility [:focus-visible and backwards compatibility](https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/)  
* Deque article with general intro to focus indicators [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)  
