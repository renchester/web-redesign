# Web Redesign

[The live deployment of the app can be found here.](https://web-redesign-ct.vercel.app/)

## Installation

In order to setup and work on this project on your own, you will need to:

1. Clone this project using:\
   `git clone https://github.com/renchester/web-redesign.git`

2. Go to the folder/directory where you cloned the project and type the following into the CLI to install the required dependencies:\
   `npm install`

3. After installing dependencies, the distribution files can be produced using:\
   `npm run build`

4. Finally, a live demo of the project can be started by using:\
   `npm run preview`

5. Go to `http://localhost:4173/` to test the app out

6. _Alternatively_, you can go into development mode after installing the dependencies(#2) by typing `npm run dev` and following the instructions on the terminal

## Rationale for Redesign

Overall, the design was strong from the start, but I identified several areas where small but meaningful improvements could enhance the experience and accessibility.

### Hero Section

I decided to replace the static lightbulb with a glowing one to better fit with the "creative technology" theme. The glowing bulb symbolizes innovation and energy, which is more appropriate than a static one. I also consolidated the "Learn More" and "Scroll Down" buttons into a single, larger button at the bottom of the hero section. This simplifies the interface and draws the user's attention toward exploring more content.

### Navigation/Sidebar Menu

The navigation menu's size was reduced significantly, as it doesn’t need to fully hide the page given the minimal information it shows. By reducing its width, users have more visible space to close the menu, improving ease of use. The menu can now also be closed by clicking outside of it or by using keyboard shortcuts, such as the Escape key, for easier accessibility. I also incorporated ARIA labels for the toggle button, ensuring screen readers can accurately describe its function to users. Animations and hover effects are also added for better experience. _(Note: Smooth-scrolling could not be reliably implemented, which is a known issue.)_

### About Section

Here, the focus was on improving readability by simplifying the design and removing unnecessary display elements. This adjustment better aligns the section with the page's more angular design. While the mobile carousel for the "What We Do" section remained unchanged, I acknowledge that the desktop version of this section is better than my implementation. What I'd change about it is to keep the sections along one axis for better readability.

### Other Sections

For sections like "What's Latest," "Join Us," and the "Contact Form," I centered the content to maintain a clear vertical flow, making it easier for users to scroll and read the information. I kept the angular designs across these sections for consistency.

In the **Clients** section, I added hover/focus text labels to each logo. This is a key accessibility improvement, as it provides clarity for visually-impaired visitors using screen readers or keyboard navigation. Lastly, the **Contact Form** was modernized, cleaned up, and centered for better visual appeal and usability.

### Additional Enhancements

I also introduced semantic HTML to ensure better structure and accessibility, particularly for assistive technologies. ARIA labels were added where appropriate, and subtle transitions were applied to buttons and links, making interactions smoother and more intuitive.

## Views

### Hero Section

## ![Hero Section](/public/views/hero-view.png)

### About Section

## ![About Section](/public/views/about-view.png)

### Contact Form

![Contact Form](/public/views/contact-view.png)
