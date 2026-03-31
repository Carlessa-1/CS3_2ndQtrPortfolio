# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
With the added css, the sidebar shifts 20px downward and 20px to the right from where it would normally appear. Unlike static positioning (which ignores top, left, bottom, right), relative positioning respects those offset properties while still occupying its original space in the document flow, meaning the other elements (content, footer) don't move to fill the gap left behind.If you change the values, say top: 50px; left: 100px;, the sidebar moves further down and to the right. Using bottom and right instead pushes it in the opposite directions.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
With the added css on .footer, the footer sticks to the bottom of the browser viewport no matter how far you scroll. It is completely removed from the normal document flow and is always visible. This is different from position: relative because relative still belongs to the page's flow and scrolls along with the rest of the content. Fixed is anchored to the viewport (the screen window), not the page itself.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

With position: absolute; top: 66px; left: 200px; on .content, the content box is removed from the normal document flow and positioned relative to its nearest positioned ancestor (an ancestor with position other than static). Since none of the parent elements here have a non-static position, it falls back to being positioned relative to the html root element. Absolute is positioned relative to nearest positioned ancestor, it scrools with the page, but doesnt always stay on screen. While position fixed is relative to browser viewport, it doesnt scroll with page but is always on the screen.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

Both .notice and .content are absolutely positioned, so they can overlap. The z-index property controls the stacking order, a higher z-index means the element appears in front. Since .notice has z-index: 2 and .content has default z-index of 0, .notice appears on top.

If you give .content a z-index: 2 and .notice a z-index: 0, the content box will render on top and hide the notice wherever they overlap.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
        position: relative;
      background: lightyellow;
      width: 300px;
      height: 200px;
    }   
    
    .notice {
      position: absolute;
      top: 0;
      right: 0;
      background: orange;
      padding: 10px;
      z-index: 2;
    }
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content
    <div class="notice">Notice!</div>
  </div>
  <div class="footer">Footer</div>
</body>
</html>
```

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    Relative: The content box returns to the document flow and sits in its natural position. .notice (if still inside it) will be positioned relative to the content box's corner.
    Fixed: The content box is locked to the viewport and won't scroll with the page, similar to the footer in Step 2. It's removed from document flow, possibly overlapping other elements.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    Effect of z-index on .notice and .content:
    Z-index only works on positioned elements (non-static). The higher the value, the closer to the viewer the element appears. Swapping the values reverses which box is "on top."

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

Static - default positioning, follows normal layout and ignores top/left/bottom/right
Relative - follows normal layout, but can be changed using top/left/etc from its original spot, the original space is kept.
Absolute - removed from normal layout, positioned relative to nearest positioned ancestor, or <html> if none, it also scrolls with the page.
Fixed - removed from normal layout, positioned relative to browser viewport, stays in place whe scrolling.

    b. How does absolute positioning depend on its parent element?

An absolutely positioned element looks for the nearest positioned ancestor. That ancestor becomes the positioning context, and top/left/bottom/right are calculated from that ancestor's edges. If no such ancestor exists, it uses the <html> element (the page itself) as its reference point. This is why wrapping .notice inside a position: relative .content box makes .notice position itself relative to .content's corners.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

Sticky acts like relative until you scroll to a defined point, then it behaves like fixed. For example, a table header with position: sticky; top: 0 will scroll normally at first, then lock to the top of the viewport once it reaches the top edge.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

Sticky - I could use the sticky position on the navbar of a webpage that could include sections for "Home", "Schedule", "Merch", and Register" page.

Absolute -  Could be applied to labels/alerts on the corner of something, like if there was a merch section, there could be labels on the corners of each item (lets say each item is in a div) the labels could say "50% off" or "Brand New!"

Fixed - Could be applied to a footer containing social media handles so it always stays in place even when scrolling.