---
title: Development Checklist
description:
---

**Resource Note**: This page is currently in draft mode. The content, layout, and formatting are incomplete and will likely change.


## Development Checklist

The following is a non-exhaustive list of concrete elements which help *create a foundation* for accessible design. Intended to for use during active development in parallel with the wider design toolkit resources. While pulled in part from WCAG 2.0 AA, not all success criteria are represented and for those that are sometimes only a part of the criteria are represented.  

### Checklist for All Pages
These items are required of all products. If you believe you are facing one of the **very rare** cases where these cannot be applied, consult with the coordinator before proceeding.  

####  HTML is valid.
**Standard**: [4.1.1 | Parsing](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)  
**Rule**: HTML/XHTML must be valid.   
**Test**: your favorite validator, ex [https://validator.w3.org/](https://validator.w3.org/)  

####  Pages have `titles`
**Standard**: [2.4.2 | Page Titled](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)  
**Rule**: All pages have unique and meaningful html `title` elements.  
**Test**: automated & manual evaluation    

####  Pages have a `lang` element
**Standard**: [3.1.1 | Language of Page](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)  
**Rule**: HTML `lang` element for page is present in `head`.  
**Test**: automated    

####  Unique language sections have `lang` element
<!--this example could be more clear - maybe model like the rest of the toolkit code snippets-->
**Standard**: [3.1.2 | Language of Parts](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)  
**Rule**: If a *section* of a page is in a different language than the language of the page, the section's language is noted in an `lang` element. For example, if a page is in English and a block quote is in Spanish, a `lang` element would note this: `<blockquote lang="es">Por ejemplo</blockquote>`  
Exceptions to this rule are proper names, technical terms, words which are part of vernacular, a lot of library metadata.  
**Test**: automated   

#### Names, roles, and values are programmatically available   
**Standard**: [4.1.2 | Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html)  
**Rule**: Name, role, and value of components are programmatically available.    
**Test**:   

####  Minimum color contrast
**Standard**: [1.4.3 | Contrast (Minimum)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)  
**Rule**: Text and images of text have a ratio of at least 4.5:1. Large text (over 18 point or 14 point bold) has minimum ratio of 3:1.  
**Test**: automated   

####  Focus is visible
**Standard**: [2.4.7 | Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)  
**Rule**: As you keyboard navigate through a page, the focus is visible. The default browser focus should never be suppressed unless reliably and fully replaced with higher quality focus.  
**Test**: manual evaluation

####  Images of text aren't used, except logos
**Standard**: [1.4.5 | Images of Text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html)  
**Rule**: Do not use images of text unless they are logos.  
**Test**: manual  

####  Bypass blocks mechanism
**Standard**: [2.4.1 | Bypass Blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)  
**Rule**: Users should be able to easily skip content *repeated among pages*. Navigation should be through **either** clear, strong semantic headings structure **or** a skip to main content link. If skip to main content link is used, link should be always be visible or should be visible on focus.  
**Test**: manual assessment  

####  200% Text resize
**Standard**: [1.4.4 | Resize text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)   
**Rule**: Within the browser, text should be able to be resized up to 200% and the product should retain content and functionality. Images of text and captions are exempted.    
**Test**: manual assessment  

####  Multisensory instructions
**Standard**: [1.3.3 | Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html)  
**Rule**: Instructions never depend on perception of a visual sense(s). For example, "Related pages are in right hand column" is inadequate. "Related pages are in the "Resources" section of the right hand column" is better.  
**Test**:   

####  Use of color
**Standard**: [1.4.1 | Use of Color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)  
**Rule**: Never rely soley on color to differentiate or identify components and page sections. For example, a form can't have 2 identical buttons differentiated only with one being green and one red with instructions to users "click the red button to submit"  
**Test**: manual assessment  

####  Content time limits are minimized to the maximum
**Standard**: [2.2.1 | Timing Adjustable](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)  
**Rule**: Don't use time limits unless absolutely essential. If content time limits are necessary refer to the standard for compliance. Note: conformance is reached when one of the following is true: Turn off; Adjust; Extend; Real-time Exception; Essential Exception; 20 Hour Exception.   
**Test**:   

####  Lists, special text, and other structures use semantic markup
**Standard**: [1.3.1 | Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)  
**Rule**: Content structure and relationships need to be represented programmatically or with text to ensure that those structures persist if the content's presentation format changes. This means using appropriate semantic markup such as `<ol>` for ordered lists and `<abbr>` for abbreviations.  
**Test**: automated & manual evaluation  


####  Semantic headings
**Standards**: [1.3.1 | Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html) // [1.3.2 | Meaningful Sequence](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)   
**Rule**: Heading structure is represented with semantic markup. The structure begins wih `h1` and increases by *only one* level at a time. For example, `h2` cannot be followed by `h4`. Multiple levels can be skipped when moving from header with a higher level to a lower one. For example, the following sequence is acceptable: `<h1>`, `<h2>`, `<h3>`, `<h1>`, `<h2>`  
**Test**:   

####  Headings and Labels are descriptive and mostly unique
**Standard**: [2.4.6 | Headings and Labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)  
**Rule**: Headings and labels must be descriptive and should be meaningful *out of context*. For example, avoid duplicating headings like "Read more" on pages.  
**Test**: manual evaluation  

####  Within whole, multiple pathways to parts
**Standard**: [2.4.5 | Multiple  Ways](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)  
**Rule**: Within a product, there are multiple pathways to the respective pages and sections. Multiple pathways are not needed if a page is a step in a process—like a form submission confirmation page.  
**Test**:   

####  Fully keyboard navigable
**Standard**: [2.1.1 | Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)  
**Rule**: Keyboard interface can operate all product functionality. Timing requirements on keystrokes are restricted. Product shortcuts should not include standard browser and AT shortcuts.<!--reference resources on shortcuts to avoid in resources section; first research and add those-->  
**Test**: manual evaluation  

####  No keyboard traps
**Standard**: [2.1.2 | No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)  
**Rule**: Users should be able to keyboard navigate a full page without getting trapped! User should always be able to remove focus from a component with arrow, tab, or other standard exits; If a non-standard is used, user is informed and instructed.    
**Test**: manual evaluation  

####  Meaningful sequence is agnostic to display format
<!---Is this one concrete enough for the purposes of this list?-->
**Standard**: [1.3.2 | Meaningful Sequence](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)  
**Rule**: When the *order* of a page affects its *meaning* that order can be programmatically determined.  
**Test**:   


####  Repeated navigation is consistent
<!--Not sure if this belongs here-->
**Standard**: [3.2.3 | Consistent Navigation](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)  
**Rule**: When navigation is duplicated across multiple pages, it is consistent. For example, landing page links in the global header are always in the same order.   
**Test**:   

####  Consistent identification
<!--Not sure if this belongs here-->
**Standard**: [3.2.4 | Consistent Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)  
**Rule**: Across product pages, components performing the same action and function have the same visual formatting and semantic labelling.    
**Test**:   

### Component and Format Specific Checklists

These checklists apply to the specific component and formats being described.

### Frames  
####  Frames have a `title` element
**Standard**: []()  
**Rule**: If a frame is embedded in a page, the frame has a unique and descriptive title.  
**Test**: automated & manual evaluation  

### Tables  
####  Tables are for tabular data and have appropriate semantic markup, including `scope`
**Standard**: [1.3.1 | Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)  
**Rule**: Use tables only for tabular data. Use the design toolkit [table pattern](https://nypl.github.io/design-toolkit/sections/tables.html#basicTable).       
**Test**: manual AT evaluation and responsiveness testing  

### Links
####  Link text is descriptive
**Standard**: [2.4.4 | Link Purpose (In Context)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)  
**Rule**: Link text should make sense and be descriptive even out of page context. A user should know where the link takes them based on the link text.  
**Test**: manual evaluation  

####  Linked materials are identified   
**Standard**: [2.4.4 | Link Purpose (In Context)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)  
**Rule**: If a link is to material like a pdf, that is noted in the link text. Example: "Complete the [application [PDF]](https://digitalcollections.nypl.org/items/510d47d9-8284-a3d9-e040-e00a18064a99)."  
**Test**: manual evaluation  

####  Link formatting  
**Standard**: [1.4.1 | Use of Color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)  
**Rule**: Links are set apart from static text with more than just color **and** link color has a minimum color contrast is 3:1. Most links should include `text-decoration: underline` styling.  
**Test**:   

####  Links work
**Standard**: common sense  
**Rule**: Links work.  
**Test**:   

####  Minimize duplicate links
**Standard**: [2.4.4 | Link Purpose (In Context)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)  
**Rule**: Try not to repeat links to the same resources multiple times on a page.  
**Example**: If you have a cover image and a book title and want both to link to an item detail page; it's better to wrap them up in one link.  
**Test**: automated & manual evaluation   

### Images  
####  Decorative images are noted as such
**Standard**: [1.1.1 | Non-text Content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)  
**Rule**: All decorative images **either** contain a null `alt` attribute **OR** are implemented as CSS backgrounds.  
**Test**: automated & manual evaluation  

####  Informative images have `alt` attribute
**Standard**: [1.1.1 | Non-text Content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)  
**Rule**: If an image contains unique content or context, it is noted in their `alt` attribute.  
**Test**: automated & manual evaluation  

### AV Materials
####  Audio has controls
**Standard**: [1.4.2 | Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)  
**Rule**: If audio plays on a webpage, there are controls for user to stop, pause, mute, or adjust volume for audio *independent* of their device's audio settings.   
**Test**:   

####  Audio doesn't play automatically
**Standard**: [1.4.2 | Audio Control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)  
**Rule**: Please.  
**Test**:   

####  Prerecorded audio has a transcript
**Standard**: [1.2.1 | Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)  
**Rule**: Text alternatives are provided for time-based media.   
**Test**: automated  

####  Prerecorded audio-visual material has synchronized captions
**Standard**: [1.2.1 | Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)  
**Rule**: Text alternatives are provided for time-based media.  
**Test**: automated  

####  Prerecorded video with visual content has synchronized audio descriptions or media alternatives
**Standard**: [1.2.3 | Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)  
**Rule**: If a video is more than just a talking head or two, audio descriptions are available or all the information is provided in text form.    
**Test**: automated  

####  Live AV content has synchronized captions
**Standard**: [1.2.4 | Captions (Live)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html)  
**Rule**: Text alternatives are provided for time-based media.  
**Test**: automated  

### Dynamic, Flashing, Blinking, & Scrolling content
####  Flashing content doesn't flash too much
**Standard**: [2.3.1 | Three Flashes or Below Threshold](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)  
**Rule**: No page content flashes more than 3 times per second unless that flashing content is sufficiently small and the flashes are of low contrast and do not contain too much red. Refer to standard for detailed compliance specs.  
**Test**:   

####  User can manage automatic changes
**Standard**: [2.2.2 | Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)  
**Rule**: If auto-updating information starts automatically and in parallel with other content, user can stop, pause, or change frequency of updates. Note: discussion needed if moving, blinking, or scrolling is essential to function.  
**Test**:    

####  User can manage moving, blinking, and scrolling
**Standard**: [2.2.2 | Pause, Stop, Hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)  
**Rule**: If information automatically moves, blinks, or scrolls for more than 5 seconds in parallel with other content, users can hide, stop, or pause dynamic content. Note: discussion needed if moving, blinking, or scrolling is essential to function.  
**Test**:    

### User input
####  Form elements are labelled
**Standard**: [1.3.1 | Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)  
**Rule**: Content structure and relationships should be represented programmatically agnostic of presentation format. Forms must be labelled.  
**Test**: automated & manual evaluation  

####  User is advised of on input changes
**Standard**: [3.2.2 | On Input](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)  
**Rule**: Interacting with components doesn't automatically change context, unless user has been informed and instructed. In other words, the user is in control.  
**Test**: manual evaluation  

####  Input error notification  
<!--Not sure if this belongs here-->
**Standard**: [3.3.1 | Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)  
**Rule**: Error messaging should conform with [design toolkit](https://nypl.github.io/design-toolkit/sections/forms.html#formValidation). In short, users receive notification of server-side and client-side errors.  
**Test**:   

####  Input instructions are provided  
<!--Not sure if this belongs here-->
**Standard**: [3.3.2 | Labels or Instructions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)  
**Rule**: Error messaging should conform with [design toolkit](https://nypl.github.io/design-toolkit/sections/forms.html#formValidation). In short, when input is required in specific format, value, length, this information is clearly and persistently available to the user in text format.  
**Test**:   

####  Users are provided suggestions for resolving input errors  
<!--Not sure if this belongs here-->
**Standard**: [3.3.3 | Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html)  
**Rule**:  Error messaging instructions should conform with [design toolkit](https://nypl.github.io/design-toolkit/sections/forms.html#formValidation). In short, when users are notificed of input errors, they are also provided in text information on how to revise input. True for server-side and client-side errors.  
**Test**:   



<!--
Hello! The concrete elements of the following could still to be incorporated:

Error messages  
[3.3.4 | Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html)

-->
