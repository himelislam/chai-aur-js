// // **Toggle button**

// HTML:

// <div class="toggle-switch">
//   <label class="switch-label">
//     <input type="checkbox" class="checkbox">
//     <span class="slider"></span>
//   </label>
// </div>  

// CSS for HTML toogle button > Custom Code element > Advanced > General CSS:

/* Global Toggle */
// .toggle-switch {
//     position: relative;
//     width: 100px;
//     height: 50px;
//     --light: #d8dbe0;
//     --dark: #28292c;
//     --link: rgb(27, 129, 112);
//     --link-hover: rgb(24, 94, 82);
//   }
  
//   .switch-label {
//     position: absolute;
//     width: 100%;
//     height: 50px;
//     background-color: var(--dark);
//     border-radius: 25px;
//     cursor: pointer;
//     border: 2px solid var(--dark);
//   }
  
//   .checkbox {
//     position: absolute;
//     display: none;
//   }
  
//   .slider {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: 25px;
//     -webkit-transition: 0.3s;
//     transition: 0.3s;
//   }
  
//   .checkbox:checked ~ .slider {
//     background-color: var(--light);
//   }
  
//   .slider::before {
//     content: "";
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
//     box-shadow: inset 12px -4px 0px 0px var(--light);
//     background-color: var(--dark);
//     -webkit-transition: 0.3s;
//     transition: 0.3s;
//   }
  
//   .checkbox:checked ~ .slider::before {
//     -webkit-transform: translateX(50px);
//     -ms-transform: translateX(50px);
//     transform: translateX(50px);
//     background-color: var(--dark);
//     -webkit-box-shadow: none;
//     box-shadow: none;
//   }


// CSS on site settings Header code: 

// <style>
//     /* Initial Styles */

// /*body {
//   background-color: var(--body-color);
// }

// p {
//     color: var(--text-color-dark-mode);
// }

// a > h1,
// a > h2,
// a > h3,
// a > h4,
// a > h5,
// a > h6,
// .dorik-heading{
//     color: var(--text-color-dark-mode);
// }
// */
// [data-image-background="standard"] {
//     background-image: var(--background-image-hero-dark-mode);
// }
// [data-image-background="alt"] {
//     background-image: var(--background-image-alt-dark-mode);
// }
// [data-image-background="soundwave"]{
//     background-image: url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr.soundwave.dark-V6dOkV.svg');
//     background-size: cover;
//     background-color: #202020;
// }
// [data-font-color="color-standard"]{
//     color: var(--text-color-dark-mode);
// }


// /* Toggle On */

// :root[style*="--theme-mode: light"] {
//   div.dorik-text p{
//     color: var(--text-color-light-mode);
//   }
//   body {
//   background-color: var(--body-color-light-mode);
//     }
//     [data-image-background="standard"] {
//     background-image: var(--background-image-hero-light-mode);
//     }
// a > h1,
// a > h2,
// a > h3,
// a > h4,
// a > h5,
// a > h6,
// .dorik-heading{
//     color: var(--text-color-light-mode);
// }
// p {
//     color: var(--text-color-light-mode);
// }
// [data-image-background="alt"] {
//     background-image: var(--background-image-alt-light-mode);
// }
// [data-image-background="soundwave"]{
//     background-image: url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr.soundwave-_6Edtk.svg');
//     background-size: cover;
//     background-color: var(--color-12);
// }
// --color-8: #D8D8D5;
// --color-7: #E7E7E4;
// --color-6: #595959;
// --color-12: #DFDFDF;
// --color-11: #050505;
// }

// /* Toggle Off */
// :root[style*="--theme-mode: dark"] {
//  div.dorik-text p{
//     color: var(--text-color-dark-mode);
//   }
//   body {
//   background-color: var(--body-color-dark-mode);
// }
// a > h1,
// a > h2,
// a > h3,
// a > h4,
// a > h5,
// a > h6,
// .dorik-heading{
//     color: var(--text-color-dark-mode);
// }
// [data-image-background="standard"] {
//     background-image: var(--background-image-hero-dark-mode);
// }
// p {
//     color: var(--text-color-dark-mode);
// }
// [data-image-background="alt"] {
//     background-image: var(--background-image-alt-dark-mode);
// }
// [data-image-background="soundwave"]{
//     background-image: url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr.soundwave.dark-V6dOkV.svg');
//     background-size: cover;
//     background-color: #202020;
// }
// --color-8: #27272A;
// --color-7: #18181B;
// --color-6: #E7FF02;
// --color-12: #202020;
// --color-11: #FAFAFA;
// }

// /* Configure theme styles */
// :root {
//     /* Set initial state (light : dark) */
//     --theme-mode: dark;
//     /* Set initial */
//     --body-color: var(--body-color-dark-mode);
//   --background-image-hero-dark-mode: linear-gradient(to bottom, rgba(252, 70, 107, 0) 0%, #18181B 79%),
//     url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr-bg-1-mobi-oFJ9Wl.webp');
//   --background-image-hero-light-mode: linear-gradient(to bottom, rgba(250, 250, 250, 0.65) 0%, rgba(250, 250, 250, 1) 100%), url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr-bg-1-mobi-oFJ9Wl.webp');
//   --background-image-alt-light-mode: url('https://cdn.cmsfly.com/65cad2c947a99100122c0566/audlr.alt.bg-2NoYoF.webp');
//   --background-image-alt-dark-mode: url('https://cdn.cmsfly.com/64194e6b4376f4009b6739ec/frame-602-xKM-_i.png');
//   --text-color-dark-mode: #FAFAFA;
//   --text-color-light-mode: #18181B;
//   --body-color-dark-mode: #18181B;
//   --body-color-light-mode: #FAFAFA;
// }
// </style>



// Js on site settings Fotter code:

// <script>
//     document.addEventListener('DOMContentLoaded', function() {
//     const toggleSwitch = document.querySelector('.checkbox');
//     const darkModeElements = document.querySelectorAll('[data-theme="current"]');
//     const nestedPs = document.querySelectorAll('div p');
//     const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');
  
//     // Get stored toggle state and theme from localStorage
//     const storedState = localStorage.getItem('toggleState');
//     const storedTheme = localStorage.getItem('theme');
  
//     if (storedState) {
//       // Set toggle element based on stored state
//       toggleSwitch.checked = storedState === 'true';
  
//       // Apply stored theme to nested paragraphs (assuming CSS variables are used)
//       document.documentElement.style.setProperty('--theme-mode', storedTheme);
//     }
  
//     // Check initial state based on document styles (as a fallback)
//     const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
//     toggleSwitch.checked = initialTheme === 'light';
  
//     toggleSwitch.addEventListener('change', () => {
//       const currentTheme = toggleSwitch.checked ? 'light' : 'dark';
  
//       // Update element styles and nested paragraphs
//       darkModeElements.forEach((element) => {
//         element.dataset.theme = currentTheme; // Update data attribute
//         if (element.dataset.imageBackground) {
//             element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;}
//             if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
//               element.style.color = `var(--text-color-${currentTheme}-mode)`;
//             }
//       });
  
//       // Update paragraph colors (using CSS variable for consistency)
//       nestedPs.forEach(paragraph => {
//         paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
//       });
  
//       // Update heading colors
//       headings.forEach(heading => {
//         heading.style.color = `var(--text-color-${currentTheme}-mode)`;
//       });
  
//       // Update document-level theme variable
//     document.documentElement.style.setProperty('--theme-mode', currentTheme);
//      //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);

  
//       // Store the new toggle state and theme in localStorage
//       localStorage.setItem('toggleState', toggleSwitch.checked);
//       localStorage.setItem('theme', currentTheme);
//     });
//   });
  
// </script>