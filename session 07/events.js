/**
 * JAVASCRIPT DOM EVENTS - SESSION 07
 * This file provides an overview of the most common DOM event types in JavaScript.
 * Events are actions or occurrences that happen in the browser, which can be detected and handled by JavaScript.
 */

// =====================================================================
// MOUSE EVENTS
// =====================================================================
// Mouse Events - Triggered by mouse interactions
// ----------------
// click       - Fires when an element is clicked (mousedown and mouseup on the same element)
// dblclick    - Fires when an element is double-clicked
// mousedown   - Fires when a mouse button is pressed down on an element
// mouseup     - Fires when a mouse button is released over an element
// mouseenter  - Fires when the pointer enters an element (doesn't bubble)
// mouseleave  - Fires when the pointer leaves an element (doesn't bubble)
// mousemove   - Fires continuously as the mouse pointer moves over an element

// =====================================================================
// KEYBOARD EVENTS
// =====================================================================
// Keyboard Events - Triggered by keyboard interactions
// ----------------
// keydown     - Fires when a key is pressed down (repeats if key is held down)
// keyup       - Fires when a key is released
// keypress    - Fires when a key that produces a character is pressed (deprecated)

// =====================================================================
// FORM EVENTS
// =====================================================================
// Form Events - Related to HTML forms
// ----------------
// submit      - Fires when a form is submitted
// change      - Fires when the value of an input element changes (after focus lost)
// input       - Fires every time the value of an input element changes (real-time)
// focus       - Fires when an element receives focus
// blur        - Fires when an element loses focus

// =====================================================================
// TOUCH EVENTS
// =====================================================================
// Touch Events - For touch-enabled devices
// ----------------
// touchstart  - Fires when a touch point is placed on the touch surface
// touchmove   - Fires when a touch point is moved along the touch surface
// touchend    - Fires when a touch point is removed from the touch surface

// =====================================================================
// DRAG AND DROP EVENTS
// =====================================================================
// Drag and Drop Events - For implementing drag and drop functionality
// ----------------
// dragstart   - Fires when the user starts dragging an element
// drag        - Fires continuously during a drag operation
// dragend     - Fires when a drag operation ends (releasing mouse button)
// dragenter   - Fires when a dragged element enters a valid drop target
// dragover    - Fires continuously when a dragged element is over a valid drop target
// dragleave   - Fires when a dragged element leaves a valid drop target
// drop        - Fires when a dragged element is dropped on a valid drop target

// =====================================================================
// WINDOW EVENTS
// =====================================================================
// Window Events - Related to the browser window
// ----------------
// load        - Fires when a resource and its dependent resources have finished loading
// beforeunload - Fires before the document is about to be unloaded (can be used to show a confirmation dialog)
// resize      - Fires when the browser window is resized
// scroll      - Fires when the document view or an element has been scrolled

// =====================================================================
// CLIPBOARD EVENTS
// =====================================================================
// Clipboard Events - Related to clipboard operations
// ----------------
// copy        - Fires when the user copies content to the clipboard
// cut         - Fires when the user cuts content to the clipboard
// paste       - Fires when the user pastes content from the clipboard

// =====================================================================
// MEDIA EVENTS
// =====================================================================
// Media Events - For audio and video elements
// ----------------
// play        - Fires when media playback is started or resumed
// pause       - Fires when media playback is paused
// ended       - Fires when media playback has reached the end
// timeupdate  - Fires continuously as the playback position changes
