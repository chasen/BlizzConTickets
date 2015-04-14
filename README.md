BlizzCon Ticket Grabber
===

This chrome extension is intended to aid in the selecting of tickets and clicking the register/order button.
Everyone knows that every milisecond counts when it comes to selecting the number of tickets you want and then clicking register.
This extension helps you with that.

How it Works
---

A couple of javascript snippets are injected into eventbrite pages. 1 of them helps improve the load time of the page by killing 
of the unnessicary socail media "see whos going" section and the "When Pannel" that loads a google map. Remember every second counts.
Clicking the icon for the extension will cause the extension to check the page for the existence of a register / order button. If found 
it will target the all select boxes on the page and set their values to 4. See how to change that number in the customize section below.
The extension will then call eventbrites own update / checkout functions that will get you into the checkout process.

Installation
---

To install the extension:

# Clone or download the repository to your computer
# Open Chrome extensions tab: chrome://extensions/
# Check the box that says developer mode
# Click the button for "Load unpacked extension..."
# Navigate to where you cloned the repository and select the folder for it

You should see the extension appear now and an icon in the top right near the menu button.


Customizing
---

After you have downloaded the repository to your computer you can open the BlizzConTickets/js/app.js. On line 2 change 
"4" to how ever many tickets you want.