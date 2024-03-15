// ;(function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         const toggleSwitch = document.querySelector('.checkbox');
//         const darkModeElements = document.querySelectorAll('[data-theme="current"]');
//         const nestedPs = document.querySelectorAll('div p');
//         const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');

//         // Get stored toggle state and theme from localStorage
//         const storedState = localStorage.getItem('toggleState');
//         const storedTheme = localStorage.getItem('theme');

//         if (storedState) {
//             // Set toggle element based on stored state
//             toggleSwitch.checked = storedState === 'true';

//             // Apply stored theme to nested paragraphs (assuming CSS variables are used)
//             document.documentElement.style.setProperty('--theme-mode', storedTheme);
//         }

//         // Check initial state based on document styles (as a fallback)
//         const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
//         toggleSwitch.checked = initialTheme === 'light';

//         toggleSwitch.addEventListener('change', () => {
//             const currentTheme = toggleSwitch.checked ? 'light' : 'dark';

//             // Update element styles and nested paragraphs
//             darkModeElements.forEach((element) => {
//                 element.dataset.theme = currentTheme; // Update data attribute
//                 if (element.dataset.imageBackground) {
//                     element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;
//                 }
//                 if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
//                     element.style.color = `var(--text-color-${currentTheme}-mode)`;
//                 }
//             });

//             // Update paragraph colors (using CSS variable for consistency)
//             nestedPs.forEach(paragraph => {
//                 paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
//             });

//             // Update heading colors
//             headings.forEach(heading => {
//                 heading.style.color = `var(--text-color-${currentTheme}-mode)`;
//             });

//             // Update document-level theme variable
//             document.documentElement.style.setProperty('--theme-mode', currentTheme);
//             //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);


//             // Store the new toggle state and theme in localStorage
//             localStorage.setItem('toggleState', toggleSwitch.checked);
//             localStorage.setItem('theme', currentTheme);
//         });
//     });
// })();


// ; (function () {
//     const toggleSwitch = document.querySelector('.checkbox');
//     const darkModeElements = document.querySelectorAll('[data-theme="current"]');
//     const nestedPs = document.querySelectorAll('div p');
//     const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');

//     // Get stored toggle state and theme from localStorage
//     const storedState = localStorage.getItem('toggleState');
//     const storedTheme = localStorage.getItem('theme');

//     if (storedState) {
//         // Set toggle element based on stored state
//         toggleSwitch.checked = storedState === 'true';

//         // Apply stored theme to nested paragraphs (assuming CSS variables are used)
//         document.documentElement.style.setProperty('--theme-mode', storedTheme);
//     }

//     // Check initial state based on document styles (as a fallback)
//     const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
//     toggleSwitch.checked = initialTheme === 'light';

//     toggleSwitch.addEventListener('change', () => {
//         const currentTheme = toggleSwitch.checked ? 'light' : 'dark';

//         // Update element styles and nested paragraphs
//         darkModeElements.forEach((element) => {
//             element.dataset.theme = currentTheme; // Update data attribute
//             if (element.dataset.imageBackground) {
//                 element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;
//             }
//             if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
//                 element.style.color = `var(--text-color-${currentTheme}-mode)`;
//             }
//         });

//         // Update paragraph colors (using CSS variable for consistency)
//         nestedPs.forEach(paragraph => {
//             paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
//         });

//         // Update heading colors
//         headings.forEach(heading => {
//             heading.style.color = `var(--text-color-${currentTheme}-mode)`;
//         });

//         // Update document-level theme variable
//         document.documentElement.style.setProperty('--theme-mode', currentTheme);
//         //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);


//         // Store the new toggle state and theme in localStorage
//         localStorage.setItem('toggleState', toggleSwitch.checked);
//         localStorage.setItem('theme', currentTheme);
//     })
// })
// }) ()

    // (function () {
    //     function interval() {
    //         const toggleSwitch = document.querySelector('.checkbox');
    //         const darkModeElements = document.querySelectorAll('[data-theme="current"]');
    //         const nestedPs = document.querySelectorAll('div p');
    //         const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');

    //         // Get stored toggle state and theme from localStorage
    //         const storedState = localStorage.getItem('toggleState');
    //         const storedTheme = localStorage.getItem('theme');

    //         if (storedState) {
    //             // Set toggle element based on stored state
    //             toggleSwitch.checked = storedState === 'true';

    //             // Apply stored theme to nested paragraphs (assuming CSS variables are used)
    //             document.documentElement.style.setProperty('--theme-mode', storedTheme);
    //         }

    //         // Check initial state based on document styles (as a fallback)
    //         const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
    //         toggleSwitch.checked = initialTheme === 'light';

    //         toggleSwitch.addEventListener('change', () => {
    //             const currentTheme = toggleSwitch.checked ? 'light' : 'dark';

    //             // Update element styles and nested paragraphs
    //             darkModeElements.forEach((element) => {
    //                 element.dataset.theme = currentTheme; // Update data attribute
    //                 if (element.dataset.imageBackground) {
    //                     element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;
    //                 }
    //                 if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
    //                     element.style.color = `var(--text-color-${currentTheme}-mode)`;
    //                 }
    //             });

    //             // Update paragraph colors (using CSS variable for consistency)
    //             nestedPs.forEach(paragraph => {
    //                 paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
    //             });

    //             // Update heading colors
    //             headings.forEach(heading => {
    //                 heading.style.color = `var(--text-color-${currentTheme}-mode)`;
    //             });

    //             // Update document-level theme variable
    //             document.documentElement.style.setProperty('--theme-mode', currentTheme);
    //             //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);


    //             // Store the new toggle state and theme in localStorage
    //             localStorage.setItem('toggleState', toggleSwitch.checked);
    //             localStorage.setItem('theme', currentTheme);
    //         })
    //     }

    //     setInterval(interval(), 1000)

    // })()

let text;

switch (new Date().getDay()) { 
    case 1:
        text = "Monday";
        break; 
    case 0:
        text = "Sunday";
        break; 
    default:
        text = "Whatever";
}

console.log(text);

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const date = new Date().getDay()

console.log(date)



// <style>
//     @media screen and (max-width: 750px) and (min-width:700px) {
//     .container {
//         width: 680px;
//     }
//     .dorik-button-n4w0gelw {
//         margin-right: 10px !important;
//     }
// }
// </style>


[
    {
      "id": "65f225f1e0dc7a0012d2d7a8",
      "title": "Notes & Docs for Trello - What's New in March",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "This release includes a more flexible drag & drop note editor, new @mention feature for collaboration, and a quicker way to interact with the AI Assistant. Furthermore, we've made numerous fixes and enhancements to improve the overall editing experience.",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1710371100054,\"blocks\":[{\"id\":\"Zv_FvLizXl\",\"type\":\"paragraph\",\"data\":{\"text\":\"This release includes a more flexible drag &amp; drop note editor, new @mention feature for collaboration, a quicker way to interact with the AI Assistant, new editor elements, additional export options, and a simple automation feature.\"}},{\"id\":\"qVm_0Iws1L\",\"type\":\"header\",\"data\":{\"text\":\"Brand new drag &amp; drop block note editor\",\"level\":3,\"id\":\"Brand-new-drag-and-drop-block-note-editor\"}},{\"id\":\"dCh5e63tYB\",\"type\":\"paragraph\",\"data\":{\"text\":\"We improved our editor by introducing a block-based drag-and-drop editing experience, allowing for more intuitive content organization. Simply drag and drop editor elements around the note editing area to rearrange your content. Also, each block comes with a context menu packed with handy editing actions, including copy, paste, duplicate, export, convert, and wrap-in elements.\"}},{\"id\":\"13sO9qKZul\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/video-1-dd-editor-H2gRXK.gif\",\"key\":\"619f90ec31d6360012b5ac06/video-1-dd-editor-H2gRXK.gif\"},\"withBackground\":true}},{\"id\":\"wjLbrsyuED\",\"type\":\"header\",\"data\":{\"text\":\"Asynchronous collaboration with @mentions \",\"level\":3,\"id\":\"Asynchronous-collaboration-with-@mentions\"}},{\"id\":\"t9kSbv9609\",\"type\":\"paragraph\",\"data\":{\"text\":\"Using @mentions enables team members to directly address colleagues in shared notes drawing their focus to relevant discussions or decisions. The @mentions feature was developed by leveraging Trello's existing notification system, thereby offering a seamless, coherent and familiar solution for your team members.\"}},{\"id\":\"rpCBtWDWOm\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/video-2-collaboration-yZIkE-.gif\",\"key\":\"619f90ec31d6360012b5ac06/video-2-collaboration-yZIkE-.gif\"},\"withBackground\":true}},{\"id\":\"AN2g0uIYZh\",\"type\":\"header\",\"data\":{\"text\":\"In-line AI Assistant\",\"level\":3,\"id\":\"In-line-AI-Assistant\"}},{\"id\":\"bSDKRKGkQF\",\"type\":\"paragraph\",\"data\":{\"text\":\"We have introduced a new way to interact with the AI Assistant to be able to easily get continuous AI support while you are writing. You can use the Inline AI functionality by clicking on the AI Assistant icon located to the right of the paragraph you're working on.\"}},{\"id\":\"CmBliWaVB2\",\"type\":\"paragraph\",\"data\":{\"text\":\"Additionally, there are keyboard shortcuts for quick, mouse-free assistance. For example, type <code>f</code> and press <code>Tab</code> at the end of a paragraph for an instant grammar and spelling check. \"}},{\"id\":\"jCszRmfwYf\",\"type\":\"paragraph\",\"data\":{\"text\":\"To overcome writer's block or simply continue your writing flow, type <code>+</code> for a short suggestion, <code>++</code> or <code>+++</code> for longer suggestions, then press <code>Tab</code>. If you're not satisfied with the suggestion, pressing <code>Tab</code> again will prompt the AI for an alternative. If the suggestion meets your needs, pressing <code>Enter</code> will add it to your document.\"}},{\"id\":\"dSdPErwgyW\",\"type\":\"paragraph\",\"data\":{\"text\":\"To view all available shortcuts, type <code>?</code> and press <code>Tab</code>. For quick access to a complete list of all available AI prompts, including your saved ones, type <code>?</code> and press <code>Tab</code> twice. \"}},{\"id\":\"WFJU3MORnN\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/video-3-inline-ai-assistant-35dNts.gif\",\"key\":\"619f90ec31d6360012b5ac06/video-3-inline-ai-assistant-35dNts.gif\"},\"withBackground\":true,\"stretched\":false}},{\"id\":\"JNJZrJlTvn\",\"type\":\"paragraph\",\"data\":{\"text\":\"Here is the full list of available keyboard shortcuts for the Inline AI. Type <code><code class=\\\"inline-code\\\">keycode</code></code> then press <code><code class=\\\"inline-code\\\">Tab</code></code> to access the desired functionality.\"}},{\"id\":\"GyNnIv07uu\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"<code class=\\\"inline-code\\\">?</code> then <code class=\\\"inline-code\\\">Tab</code> - Access Inline AI keyboard shortcuts help\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">?</code> then <code class=\\\"inline-code\\\">Tab</code> two times - Access the full list of AI prompts instantly, including your own saved prompts\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">+</code> , <code class=\\\"inline-code\\\">++</code> , <code class=\\\"inline-code\\\">+++</code>  then <code class=\\\"inline-code\\\">Tab</code> - Continue writing\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">i</code> then <code class=\\\"inline-code\\\">Tab</code> - Improve writing\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">f</code> then <code class=\\\"inline-code\\\">Tab</code> - Fix grammar\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">r</code> then <code class=\\\"inline-code\\\">Tab</code> - Re-pharse text\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">t</code> then <code class=\\\"inline-code\\\">Tab</code> - Translate to account default or note language. This language can be configured in the Settings menu, accessible from the \\\"…\\\" menu of your current note.\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">e</code> then <code class=\\\"inline-code\\\">Tab</code> - Explain selected text or concept\",\"items\":[]},{\"content\":\"<code class=\\\"inline-code\\\">p</code> then <code class=\\\"inline-code\\\">Tab</code> - Change tone to professional\",\"items\":[]},{\"content\":\"F then <code class=\\\"inline-code\\\">Tab</code> - Change tone to friendly\",\"items\":[]}]}},{\"id\":\"_kjmYDWYrI\",\"type\":\"header\",\"data\":{\"text\":\"Export as Confluence content\",\"level\":3,\"id\":\"Export-as-Confluence-content\"}},{\"id\":\"Nk7E8vxV7q\",\"type\":\"paragraph\",\"data\":{\"text\":\"Take the advatages of Notes &amp; Docs, start working on your content immediately and collaborate within Trello. Once completed, easily move your work to your corporate Confluence pages. This approach streamlines collaboration and information sharing, making it easier for team members to stay on the same page.\"}},{\"id\":\"bYXB0qOaie\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/video-4-confluence-export-x2sq1L.gif\",\"key\":\"619f90ec31d6360012b5ac06/video-4-confluence-export-x2sq1L.gif\"},\"withBackground\":true}},{\"id\":\"r4VwGLQq7a\",\"type\":\"header\",\"data\":{\"text\":\"Export as Trello Card\",\"level\":3,\"id\":\"Export-as-Trello-Card\"}},{\"id\":\"o_jR0R4DbD\",\"type\":\"paragraph\",\"data\":{\"text\":\"This functionality becomes invaluable to those who start recording ideas, plans, or sub-tasks in notes, with the potential for these initial thoughts to mature into separate tasks.\"}},{\"id\":\"mCL_fm5ToC\",\"type\":\"header\",\"data\":{\"text\":\"Placeholders\",\"level\":3,\"id\":\"Placeholders\"}},{\"id\":\"HZRfvszC07\",\"type\":\"paragraph\",\"data\":{\"text\":\"As the name suggests, you can create placeholders in your text with the help of this feature. This is especially useful if you create note templates as part of your Trello card templates. Using placeholders, users can quickly fill in specific details in notes.\"}},{\"id\":\"V26FLyG4yG\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/video-5-placeholders-sXkj8f.gif\",\"key\":\"619f90ec31d6360012b5ac06/video-5-placeholders-sXkj8f.gif\"},\"withBackground\":true}},{\"id\":\"Ybv4NBK1Sw\",\"type\":\"header\",\"data\":{\"text\":\"Collapsible elements \",\"level\":3,\"id\":\"Collapsible-elements\"}},{\"id\":\"lJMXbgWCXR\",\"type\":\"paragraph\",\"data\":{\"text\":\"We have introduced two new editor elements for organizing your notes content better. With the toggle and accordion elements, you can easily hide or reveal content for a more streamlined reading experience, improving navigation and focus on specific sections of your notes.\"}},{\"id\":\"c0q44wSINn\",\"type\":\"header\",\"data\":{\"text\":\"Simple automation\",\"level\":3,\"id\":\"Simple-automation\"}},{\"id\":\"Ha0a4Ky5Pm\",\"type\":\"paragraph\",\"data\":{\"text\":\"If your typical usage pattern involves creating only one note per card, you might find this feature particularly useful. It allows you to set up a simple automation that automatically generates your first note when you create and open a new card on your board. Also, you have the option to set it up to automatically open the sole note of the card.\"}},{\"id\":\"16YIGz7E4M\",\"type\":\"paragraph\",\"data\":{\"text\":\"The automation settings are available in the Notes section of the Trello card details, under the Options menu.\"}},{\"id\":\"i4siPN9nlE\",\"type\":\"paragraph\",\"data\":{\"text\":\"For those needing a more advanced solution with some pre-filled notes, we recommend utilizing Trello card templates in conjunction with Notes &amp; Docs notes. You can add notes as part of your Trello card template, so when you create a new card from this template, your notes will be created automatically, too. You can make your note templates even better by utilizing the new placeholder feature (mentioned above), and set up the date element to be a placeholder as well.\"}},{\"id\":\"YKx0INLTGV\",\"type\":\"header\",\"data\":{\"text\":\"Numerous minor updates and improvements\",\"level\":3,\"id\":\"Numerous-minor-updates-and-improvements\"}},{\"id\":\"gmBlFAvuDN\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"We have improved the code block element which now allows you to easily open code in StackBlitz \",\"items\":[]}]}},{\"id\":\"zG8NrkDeV9\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"We have made some note editing and export features available in the toolbar of the note for simple access \",\"items\":[]}]}},{\"id\":\"xyshsNEHpq\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"We have enhanced the editor's Markdown parser. For those unaware, you can simply paste any Markdown text into the editor, and it will be transformed into nicely formatted text. \",\"items\":[]}]}},{\"id\":\"2h6KBWTSmk\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"You can convert selected text into a code block, and similarly, convert a code block back into regular text. \",\"items\":[]}]}},{\"id\":\"AashT_vVH1\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"The Note Link element and Inline Note Link features now enable the immediate creation of new sub-notes. \",\"items\":[]}]}},{\"id\":\"g8FX8glOOS\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"Addressed some minor bugs, glitches, and issues that may affect the note editing experience.\",\"items\":[]}]}},{\"id\":\"5Yl5OOnPhj\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"4N-29hIV9c\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your <a target=\\\"_blank\\\" href=\\\"https://trello.com/\\\">Trello</a> and try out these new features. Don't have the power-up yet? <a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a> from the Trello power-up directory.\"}},{\"id\":\"jGYqX64Tq5\",\"type\":\"paragraph\",\"data\":{\"text\":\"We hope these new features will improve your productivity while using Notes &amp; Docs for Trello power-up.\"}},{\"id\":\"E7hZq1xtjc\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop us an email at <a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": "",
      "slug": "notes-and-docs-for-trello-whats-new-in-march",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/announcement-CpklMV.png",
      "bannerImage": "619f90ec31d6360012b5ac06/announcement-0-D1vl.png",
      "additionalMeta": "{}",
      "createdAt": "1710368241532",
      "updatedAt": "1710371667823",
      "publishedAt": "2024-03-13T22:17:21.527Z"
    },
    {
      "id": "651d6c5f85f4bd0012b0f7e7",
      "title": "Notes & Docs for Trello - What's New in October",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "Note & Docs for Trello Power-Up October release has arrived. Improved overall performance, speed, and reliability. Real-time spell-checking, dark theme and large file uploads. PDF, TikTok, audio and video files in your notes.",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1696429796005,\"blocks\":[{\"id\":\"cAFsDPOPGI\",\"type\":\"paragraph\",\"data\":{\"text\":\"Over the past few months, we have worked hard to make Notes &amp; Docs even better. We have <b>improved the overall performance, speed, and reliability. </b>Additionally, we have added<b> real-time spell-checking,</b> <b>dark theme </b>and <b>large file uploads</b> to the product. You can now upload and <b>embed PDF,</b> <b>audio</b> and <b>video</b> files directly into your notes. We have also added <b>TikTok</b> <b>embed</b>, bringing the total number of supported services to twenty-four. Let's dive into the details.\"}},{\"id\":\"LdBydklGhU\",\"type\":\"header\",\"data\":{\"text\":\"Real-time Spell Checking\",\"level\":3,\"id\":\"Real-time-Spell-Checking\"}},{\"id\":\"sLDoayjmGQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"To improve writing accuracy, we have integrated a simple to use, dictionary-based, real-time spell-checking feature into the product. By enabling this feature, you will receive instant feedback on spelling errors while typing. You can also create your own dictionary for special words to reduce false spelling error alerts. This feature helps maintain a higher quality of content by catching misspelled words as you go.\"}},{\"id\":\"_Xlo5z-Twk\",\"type\":\"header\",\"data\":{\"text\":\"Combine Real-time Spell-Checking with our AI Assistant's Advanced Grammar Checking Capabilities\",\"level\":5,\"id\":\"Combine-Real-time-Spell-Checking-with-our-AI-Assistant's-Advanced-Grammar-Checking-Capabilities\"}},{\"id\":\"2tqDMo42R9\",\"type\":\"paragraph\",\"data\":{\"text\":\"We recommend enabling real-time spell-checking while writing your content. Then, use the AI Assistant to perform a deeper grammar check after you have finished with your content or with a larger section of your writing. The combination of real-time spell-checking and the AI Assistant's grammar checking provides a robust solution for maintaining correct spellings and improving overall grammar in your writing.\"}},{\"id\":\"htKMCzmI93\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/notes-and-docs-spell-checking-33NNAE.gif\",\"key\":\"619f90ec31d6360012b5ac06/notes-and-docs-spell-checking-33NNAE.gif\"},\"stretched\":true,\"withBorder\":false,\"withBackground\":true}},{\"id\":\"yOkv50vCJg\",\"type\":\"header\",\"data\":{\"text\":\"Dark Theme\",\"level\":3,\"id\":\"Dark-Theme\"}},{\"id\":\"XgInVxY2pd\",\"type\":\"paragraph\",\"data\":{\"text\":\"Say hello to Dark Theme in Notes &amp; Docs! This highly requested feature is finally here. Now, Notes &amp; Docs seamlessly adapts to your Trello theme settings, offering a visually appealing dark mode experience.\"}},{\"id\":\"mgQF7VY70_\",\"type\":\"header\",\"data\":{\"text\":\"Large and Fast File Uploads and Downloads\",\"level\":3,\"id\":\"Large-and-Fast-File-Uploads-and-Downloads\"}},{\"id\":\"9FeqW0l9xm\",\"type\":\"paragraph\",\"data\":{\"text\":\"You have been able to upload files into your notes for a long time, but the file size was limited to 10MB. Now, we have made file uploads and especially downloads much faster and increased the file limit to 100MB. This enhancement makes our application capable of storing work-related files, such as PDFs, videos, audio recordings, and any other file types you may want to have in the context of your writing.\"}},{\"id\":\"PSHiLebQoq\",\"type\":\"header\",\"data\":{\"text\":\"Upload Videos and Audios into Your Notes\",\"level\":3,\"id\":\"Upload-Videos-and-Audios-into-Your-Notes\"}},{\"id\":\"FwacBVy1YZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"By embedding videos in your notes, you can include tutorial videos, presentations, or recorded webinars, making it convenient to have all relevant content in one place. You can upload browser-supported video formats like mp4, webm, and ogg.\"}},{\"id\":\"y5H5dXq7jU\",\"type\":\"paragraph\",\"data\":{\"text\":\"Embedding audio files allows you to include podcast episodes, recorded interviews, or sound clips for easy reference and access. Supported audio file formats include wav, mp3, aac, m4a, ogg, oga, flac, weba.\"}},{\"id\":\"w1_ZUfcA9c\",\"type\":\"header\",\"data\":{\"text\":\"PDF in Your Notes\",\"level\":3,\"id\":\"PDF-in-Your-Notes\"}},{\"id\":\"Y59n6kG2EN\",\"type\":\"paragraph\",\"data\":{\"text\":\"With the ability to upload and embed PDF files directly into your notes, you can easily include important documents, reports, or reference materials in a seamless and organized manner.\"}},{\"id\":\"DIXmc2Jwm2\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/notes-and-docs-pdf-embed-coBfQA.gif\",\"key\":\"619f90ec31d6360012b5ac06/notes-and-docs-pdf-embed-coBfQA.gif\"},\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"Wv_PagI2Cc\",\"type\":\"header\",\"data\":{\"text\":\"TikTok Embed\",\"level\":3,\"id\":\"TikTok-Embed\"}},{\"id\":\"YFaUkMaqjY\",\"type\":\"paragraph\",\"data\":{\"text\":\"Now, you can easily incorporate TikTok video embeds into your notes. With this add-on, there are twenty-four services that you can embed into your content by simply pasting their URL into the note editor. You can also add many more services that support code embeds using our iframe embed component.\"}},{\"id\":\"0qduOtnW09\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"0Z_P18bw7T\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your <a target=\\\"_blank\\\" href=\\\"https://trello.com/\\\">Trello</a> and try out these new features. Don't have the power-up yet? <a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a> from the Trello power-up directory.\"}},{\"id\":\"L8HftLApyM\",\"type\":\"paragraph\",\"data\":{\"text\":\"We hope these new features will improve your productivity while using Notes &amp; Docs for Trello power-up.\"}},{\"id\":\"dxXrE753jR\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop us an email at <a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": "",
      "slug": "notes-and-docs-power-up-product-updtate-october",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_upgrade_re_gano-EzFVA9.png",
      "bannerImage": "619f90ec31d6360012b5ac06/undraw_upgrade_re_gano-NKRm1Y.png",
      "additionalMeta": "{}",
      "createdAt": "1696427103248",
      "updatedAt": "1710370400860",
      "publishedAt": null
    },
    {
      "id": "647e0dac997c70001272d56e",
      "title": "Level Up Your Trello Workflow with ChatGPT-Powered AI Assistant in Notes & Docs",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The ever-popular Notes & Docs for Trello Power-Up just got even better with the brand new AI Assistant feature.",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1687217323148,\"blocks\":[{\"id\":\"Fl-nejaHik\",\"type\":\"paragraph\",\"data\":{\"text\":\"The ever-popular&nbsp;<b>Notes &amp; Docs for Trello Power-Up</b>&nbsp;just got even better with the brand new AI Assistant feature.\"}},{\"id\":\"D2MVXNfOl0\",\"type\":\"paragraph\",\"data\":{\"text\":\"We're excited to unveil a game-changing update to our product, <b>Notes &amp; Docs for Trello Power-Up</b>. Our latest release introduces <b>ChatGPT AI Assistant</b>, which will revolutionize your daily work in Trello in more ways than you could imagine. \"}},{\"id\":\"jzi2IIZSmf\",\"type\":\"paragraph\",\"data\":{\"text\":\"Building upon the existing functionality, this AI-powered upgrade offers a helping hand while staying true to our guiding principle: making your Trello experience better and smarter.\"}},{\"id\":\"mMe73GcLuC\",\"type\":\"header\",\"data\":{\"text\":\"AI-powered assistance at your fingertips\",\"level\":3,\"id\":\"AI-powered-assistance-at-your-fingertips\"}},{\"id\":\"FPw4dDiUqD\",\"type\":\"paragraph\",\"data\":{\"text\":\"Have a question? Just ask anything! The ChatGPT AI Assistant is designed to enhance your productivity, providing rapid and intelligent assistance that feels like having an extra team member.  \"}},{\"id\":\"FHk8T_I-o7\",\"type\":\"paragraph\",\"data\":{\"text\":\"You can ask the AI Assistant anything and even choose from the menu for built-in prompts such as summarized explanations, improving a text's grammar, enhancing writing, paraphrasing text, changing its tone, translating into different languages, and so on.\"}},{\"id\":\"G6TsE7-9hV\",\"type\":\"paragraph\",\"data\":{\"text\":\"Providing endless support for your content creation, the AI can continue your writing, write blog posts, suggest title options, generate data in table format, or do whatever you can imagine asking for.\"}},{\"id\":\"gQ-HUWbAPH\",\"type\":\"paragraph\",\"data\":{\"text\":\"The AI Assistant is available on the toolbar, selection toolbar, and the slash command menu. With the <code><code class=\\\"inline-code\\\">+++</code></code> + <code><code class=\\\"inline-code\\\">TAB</code></code> shortcut, you can quickly instruct the AI to continue or complete a paragraph or sentence while you're typing it.\"}},{\"id\":\"Iw5Q9xda2X\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/ask-anything-10fps-75p-JTq6Rg.gif\",\"key\":\"619f90ec31d6360012b5ac06/ask-anything-10fps-75p-JTq6Rg.gif\"},\"stretched\":true}},{\"id\":\"9ppFlSAeFF\",\"type\":\"header\",\"data\":{\"text\":\"Enhance your content creation\",\"level\":3,\"id\":\"Enhance-your-content-creation\"}},{\"id\":\"NfyrUB545l\",\"type\":\"paragraph\",\"data\":{\"text\":\"The AI Assistant is here to supercharge your content creation process. With the integration of ChatGPT AI Assistant, the helpful features of Notes &amp; Docs Power-Up have gained an additional layer of accessibility and ease of use. \"}},{\"id\":\"f_8g_GZ7Fj\",\"type\":\"paragraph\",\"data\":{\"text\":\"Some of the ways AI could improve your Trello workflows include:\"}},{\"id\":\"3dNLoiajMz\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"Generating first drafts of notes, blog posts and social media content\",\"items\":[]},{\"content\":\"Proofreading and editing text for spelling and grammatical errors\",\"items\":[]},{\"content\":\"Simplifying complex language for improved understanding\",\"items\":[]},{\"content\":\"Paraphrasing text to create fresh perspectives\",\"items\":[]},{\"content\":\"Translating content into multiple languages\",\"items\":[]},{\"content\":\"Helping to brainstorm creative ideas for any project\",\"items\":[]}]}},{\"id\":\"z9sTbJPBaC\",\"type\":\"header\",\"data\":{\"text\":\"Well-crafted AI prompts for any use cases\",\"level\":3,\"id\":\"Well-crafted-AI-prompts-for-any-use-cases\"}},{\"id\":\"kN2frG0kEz\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our built-in prompts are carefully created to handle a myriad of writing tasks and are just a click away in your current note or selected text within the editor. They transform the AI assistant into an intuitive writing tool that can shape your content as per your need.\"}},{\"id\":\"6fhgFMtN-d\",\"type\":\"paragraph\",\"data\":{\"text\":\"Here is a list of prompts that can enhance your existing text:\"}},{\"id\":\"Q-lbZ2uSoU\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"<b>Fix Spelling and Grammar</b>: Eliminate spelling and grammar errors swiftly.\",\"items\":[]},{\"content\":\"<b>Improve Writing</b>: Make your writing more compelling and effective.\",\"items\":[]},{\"content\":\"<b>Simplify Writing</b>: Make complex concepts easier to understand.\",\"items\":[]},{\"content\":\"<b>Paraphrase</b>: Rewrite text to convey the same idea differently.\",\"items\":[]},{\"content\":\"<b>Short Summary</b>: Condense lengthy documents for a quick read.\",\"items\":[]},{\"content\":\"<b>Longer Summary</b>: Provide a detailed overview of your text.\",\"items\":[]},{\"content\":\"<b>List Key Takeaways</b>: Highlight the most important points.\",\"items\":[]},{\"content\":\"<b>List Action Items</b>: Identify actionable steps from your text.\",\"items\":[]},{\"content\":\"<b>Continue Writing</b>: Extend your text seamlessly.\",\"items\":[]},{\"content\":\"<b>Explain</b>: Get a simplified explanation of complicated concepts.\",\"items\":[]},{\"content\":\"<b>Make Text Shorter</b>: Trim your content while keeping key points.\",\"items\":[]},{\"content\":\"<b>Make Text Longer</b>: Expand your text with additional information.\",\"items\":[]},{\"content\":\"<b>Change Tone to Professional</b>: Make your text more formal and business-like.\",\"items\":[]},{\"content\":\"<b>Change Tone to Friendly</b>: Make your text more casual and approachable.\",\"items\":[]},{\"content\":\"<b>Suggest Title Options</b>: Generate engaging title ideas for your content.\",\"items\":[]}]}},{\"id\":\"WPhtEgR3XT\",\"type\":\"paragraph\",\"data\":{\"text\":\"The versatility of the AI Assistant isn't limited to refining your existing text; it also excels at generating new content based on your requirements. Here are some prompts that can kickstart your writing process:\"}},{\"id\":\"xuadJ2OtvR\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[{\"content\":\"<b>Blog Post</b>: Generate a compelling blog post on a given topic.\",\"items\":[]},{\"content\":\"<b>Social Media Announcement</b>: Create exciting social media announcements to grab attention.\",\"items\":[]},{\"content\":\"<b>Social Media Post</b>: Craft engaging posts for various social media platforms.\",\"items\":[]},{\"content\":\"<b>Press Release</b>: Write an informative press release for your latest news.\",\"items\":[]},{\"content\":\"<b>Essay</b>: Start an in-depth essay on a specific subject.\",\"items\":[]},{\"content\":\"<b>Generate Table</b>: Create structured data tables.\",\"items\":[]},{\"content\":\"<b>Taglines</b>: Conjure catchy taglines for your brand or products.\",\"items\":[]},{\"content\":\"<b>Email Subject Lines</b>: Create enticing subject lines for your emails.\",\"items\":[]},{\"content\":\"<b>List Ideas</b>: Generate a list of ideas on a given topic.\",\"items\":[]},{\"content\":\"<b>Customer Persona</b>: Build a detailed customer persona for marketing strategies.\",\"items\":[]},{\"content\":\"<b>Write</b>: Simply start writing on a given topic.\",\"items\":[]}]}},{\"id\":\"4qEhbOuS7L\",\"type\":\"header\",\"data\":{\"text\":\"Smart follow-up prompts\",\"level\":3,\"id\":\"Smart-follow-up-prompts\"}},{\"id\":\"eeZ-sJtwF7\",\"type\":\"paragraph\",\"data\":{\"text\":\"In certain scenarios, it's only natural to have follow-up queries or wish to continue a line of questioning. To address this, we've integrated unique, context-specific follow-up prompts. \"}},{\"id\":\"hhGhqYunFp\",\"type\":\"paragraph\",\"data\":{\"text\":\"For instance, if you use the AI Assistant to translate a word or phrase within a text, you can then easily request example sentences featuring the translated term with a single click in the follow-up prompt. This smart continuation empowers you to engage in deeper exploration and understanding of the content you are working with.\"}},{\"id\":\"Zt0891hZIM\",\"type\":\"header\",\"data\":{\"text\":\"Chat with and ask anything to your AI Assistant\",\"level\":3,\"id\":\"Chat-with-and-ask-anything-to-your-AI-Assistant\"}},{\"id\":\"cWR6wFFeuQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Apart from using the built-in prompts, you also have the chance to ask entirely unique questions to the AI Assistant. These can be related to the text you're working on, or about something completely different.\"}},{\"id\":\"gw1uikC30w\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our AI Assistant allows you to not only ask for tasks to be done but also to have full discussions on a topic. It's more than just an assistant for tasks, it's a responsive partner ready to chat and help you work better and come up with new ideas. Start a chat with the AI Assistant and discover new insights, creative thoughts, and efficient ways to get things done!\"}},{\"id\":\"emUhQOhDcQ\",\"type\":\"header\",\"data\":{\"text\":\"Build your own prompt library and pin favorites for quick access\",\"level\":3,\"id\":\"Build-your-own-prompt-library-and-pin-favorites-for-quick-access\"}},{\"id\":\"LU_2QUXpTm\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our AI Assistant goes beyond just answering unique queries - it also lets you save those that you might want to use repeatedly or at a later time. This way, you're able to build a personal library of prompts that are easily accessible whenever needed. It's like having your customized set of tools ready at your fingertips.\"}},{\"id\":\"tT_rnkwk6Z\",\"type\":\"header\",\"data\":{\"text\":\"Let's look at some practical examples of the new AI Assistant's potential\",\"level\":3,\"id\":\"Let's-look-at-some-practical-examples-of-the-new-AI-Assistant's-potential\"}},{\"id\":\"uZVuH-eU-P\",\"type\":\"header\",\"data\":{\"text\":\"Writing content\",\"level\":5,\"id\":\"Writing-content\"}},{\"id\":\"DtflsPONW4\",\"type\":\"paragraph\",\"data\":{\"text\":\"AI Assistant makes your content creation tasks a breeze by generating first drafts of notes, blog posts, and social media content. All you need to do is provide a topic or idea and watch the AI craft well-organized and engaging content.\"}},{\"id\":\"QNcmcTELPY\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/write-a-blog-post-10fps-75p-hzClUq.gif\",\"key\":\"619f90ec31d6360012b5ac06/write-a-blog-post-10fps-75p-hzClUq.gif\"},\"withBackground\":false,\"stretched\":true}},{\"id\":\"RFbeZq9PrC\",\"type\":\"header\",\"data\":{\"text\":\"Translating text\",\"level\":5,\"id\":\"Translating-text\"}},{\"id\":\"ksPxwNqoB_\",\"type\":\"paragraph\",\"data\":{\"text\":\"Dealing with a global audience requires providing information in multiple languages. AI Assistant can translate your content into a variety of languages, making it accessible to a diverse user base without the need for manual translation.\"}},{\"id\":\"38tSM3j60l\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/translate-10fps-75-SsqXIG.gif\",\"key\":\"619f90ec31d6360012b5ac06/translate-10fps-75-SsqXIG.gif\"},\"stretched\":true}},{\"id\":\"uOBR8j5HfR\",\"type\":\"header\",\"data\":{\"text\":\"Summarizing text\",\"level\":5,\"id\":\"Summarizing-text\"}},{\"id\":\"TI0A2PYjH1\",\"type\":\"paragraph\",\"data\":{\"text\":\"Sometimes, lengthy documents or articles need a concise summary for quick understanding at a glance. AI Assistant makes this easy by summarizing your text without losing its essence or meaning, and presenting it in a shorter, more digestible format.\"}},{\"id\":\"9Im5YVFT-v\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/summarize-10fps-75p-l4Vxew.gif\",\"key\":\"619f90ec31d6360012b5ac06/summarize-10fps-75p-l4Vxew.gif\"},\"stretched\":true}},{\"id\":\"QwNbqENf72\",\"type\":\"paragraph\",\"data\":{\"text\":\"In conclusion, the examples presented above showcase just a fraction of AI Assistant's potential. There are countless other ways this powerful tool can help, such as explaining complex concepts, improving overall writing quality, simplifying language, adjusting the tone of your writing, generating various types of content, and more. With AI Assistant, your content creation possibilities are limited only by your imagination – so go ahead and explore its full potential!\"}},{\"id\":\"bPn7_P9wqV\",\"type\":\"header\",\"data\":{\"text\":\"Beyond AI: Explore our new markdown import/export feature!\",\"level\":3,\"id\":\"Beyond-AI:-Explore-our-new-markdown-importexport-feature!\"}},{\"id\":\"NyhD9af-Rf\",\"type\":\"paragraph\",\"data\":{\"text\":\"In our constant effort to improve Notes &amp; Docs, we have recently introduced a comprehensive markdown import/export feature.\"}},{\"id\":\"xYiJdV4jVh\",\"type\":\"paragraph\",\"data\":{\"text\":\"All you need to do is paste a markdown text into the editor area, and it will appear in a beautifully formatted layout. With our new <b>Import card description</b>&nbsp;feature, accessible from the selection toolbar in a Trello card context, you can import a card description into a note with just a single click.\"}},{\"id\":\"Qt9DB_MOxX\",\"type\":\"paragraph\",\"data\":{\"text\":\"Moreover, we've also introduced a convenient way to export the complete editor content, or a selected text portion into Markdown format. This way, we aim to make your work with text content even smoother. Enjoy the ease of Markdown import/export with our latest update!\"}},{\"id\":\"Y5uxmXxN9B\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"TlQ7JqwTgQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your <a target=\\\"_blank\\\" href=\\\"https://trello.com/\\\">Trello</a> and try out this new features. Don’t have the power-up yet? <a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a> from the Trello power-up directory.\"}},{\"id\":\"7JB-PaluMU\",\"type\":\"paragraph\",\"data\":{\"text\":\"We hope the AI Assistant feature will significantly improve your productivity with Notes &amp; Docs for Trello power-up.\"}},{\"id\":\"hCRbS4SrrZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop an email to us at <a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": "",
      "slug": "level-up-your-trello-workflow-with-chat-gpt-powered-ai-assistant-in-notes-and-docs",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_chat_bot_re_e2gj-Qa2C4L.png",
      "bannerImage": "619f90ec31d6360012b5ac06/undraw_chat_bot_re_e2gj-KzXHiq.png",
      "additionalMeta": "{}",
      "createdAt": "1685982636573",
      "updatedAt": "1693351788377",
      "publishedAt": null
    },
    {
      "id": "641b2cd3c4eb6700bc462e87",
      "title": "Unleash Your Note Writing Potential in Trello - Notes & Docs v2.0 has arrived!",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "We are thrilled to announce the release of Notes & Docs for Trello v2.0, our biggest product update ever!",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1679529878213,\"blocks\":[{\"id\":\"tplWTvdsXk\",\"type\":\"paragraph\",\"data\":{\"text\":\"We are thrilled to announce the release of Notes &amp; Docs for Trello v2.0, <b>our biggest product update ever!</b> With this new version, you can now take your note-taking and document-editing experience to the next level and organize your notes and documents like never before.\"}},{\"id\":\"iV2cc3HKIk\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our latest product version is <b>packed with a host of new and improved features</b>. You can now better organize your thoughts by creating sub-notes, easily find relevant information by searching notes, access version history, lock notes, and quickly overview your note structure with the brand new document outline feature. \"}},{\"id\":\"28RxEmHbin\",\"type\":\"paragraph\",\"data\":{\"text\":\"We have also <b>made significant improvements to our editor</b>, introducing new extensions such as callouts, sticky notes, columns, tables of content, and task hierarchies. \"}},{\"id\":\"X2coztyqnj\",\"type\":\"paragraph\",\"data\":{\"text\":\"We have <b>expanded our supported embed types</b> to include popular tools such as Google Docs, Google Sheets, Google Slides, Gist, Stackblitz, Spotify, and more.\"}},{\"id\":\"Ftyp6dUalb\",\"type\":\"paragraph\",\"data\":{\"text\":\"In addition to all these new features, we have revamped Notes &amp; Docs for Trello to enhance your experience.&nbsp;We've fixed various visual inconsistencies and glitches, improved drag and drop, made images, embeds, tables, and code blocks precisely resizable. \"}},{\"id\":\"mW0MSsnsTh\",\"type\":\"paragraph\",\"data\":{\"text\":\"Let’s deep dive into the details.\"}},{\"id\":\"8NmbWMdfr9\",\"type\":\"header\",\"data\":{\"text\":\"Sub-notes\",\"level\":3,\"id\":\"Sub-notes\"}},{\"id\":\"XVy9kZYLw7\",\"type\":\"paragraph\",\"data\":{\"text\":\"By using sub-notes, you can organize and structure your thoughts in a meaningful way. Sub-notes can be used to create a hierarchy of thoughts, where sub-notes provide more in-depth information while top notes offer a general overview.\"}},{\"id\":\"a81nlybX6a\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/1-sub-notes-x3-gfQIfb.gif\",\"key\":\"619f90ec31d6360012b5ac06/1-sub-notes-x3-gfQIfb.gif\"},\"stretched\":true,\"withBackground\":true}},{\"id\":\"8NacPt0MjG\",\"type\":\"header\",\"data\":{\"text\":\"Search notes and recently updated notes\",\"level\":3,\"id\":\"Search-notes-and-recently-updated-notes\"}},{\"id\":\"Fv-Mjus8ry\",\"type\":\"paragraph\",\"data\":{\"text\":\"As more and more information becomes available on your notes, it is crucial to find relevant information fast. \"}},{\"id\":\"9gQbcpe1hK\",\"type\":\"paragraph\",\"data\":{\"text\":\"With our full-text search capability, you can quickly locate the notes and documents you're looking for, saving you time and hassle. Plus, this feature can give you a clear overview of recently updated documents to keep you up-to-date and informed.\"}},{\"id\":\"c7xVy6O-dI\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/2-search-3-UV8h54.gif\",\"key\":\"619f90ec31d6360012b5ac06/2-search-3-UV8h54.gif\"},\"stretched\":true,\"withBackground\":true,\"withBorder\":false}},{\"id\":\"MNEc3Hihrp\",\"type\":\"header\",\"data\":{\"text\":\"Document version history\",\"level\":3,\"id\":\"Document-version-history\"}},{\"id\":\"rciWZjufnO\",\"type\":\"paragraph\",\"data\":{\"text\":\"With note version history you can ensure that no content is lost accidentally. The version history feature enables you to access and restore previous versions of your notes and documents any time.\"}},{\"id\":\"y9FqjGcmEO\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/6-version-history-ZA4pZY.gif\",\"key\":\"619f90ec31d6360012b5ac06/6-version-history-ZA4pZY.gif\"},\"stretched\":true,\"withBackground\":true}},{\"id\":\"zYvkN16deb\",\"type\":\"header\",\"data\":{\"text\":\"Lock notes\",\"level\":3,\"id\":\"Lock-notes\"}},{\"id\":\"JVfPi3yF7r\",\"type\":\"paragraph\",\"data\":{\"text\":\"This feature comes in handy when you want to restrict editing access to other team members.\"}},{\"id\":\"he_gYrwWh3\",\"type\":\"header\",\"data\":{\"text\":\"Document outline\",\"level\":3,\"id\":\"Document-outline\"}},{\"id\":\"Iq7RNbe18H\",\"type\":\"paragraph\",\"data\":{\"text\":\"Overview the structure and easily navigate through your document with the help of the new document outline feature. Apply heading styles to the different sections and sub-sections of a note, and Notes &amp; Docs uses these styles to automatically generate the document outline, updating it as the document is edited and revised.\"}},{\"id\":\"cz42VzGClX\",\"type\":\"header\",\"data\":{\"text\":\"Improved text formatting experience\",\"level\":3,\"id\":\"Improved-text-formatting-experience\"}},{\"id\":\"nIbM2Qo14C\",\"type\":\"paragraph\",\"data\":{\"text\":\"Enjoy more colors for the text highlighter, text colors, task hierarchies, text indentation and alignment.\"}},{\"id\":\"UGjNFEN7tT\",\"type\":\"header\",\"data\":{\"text\":\"New editor elements\",\"level\":3,\"id\":\"New-editor-elements\"}},{\"id\":\"y-FeEkSz-r\",\"type\":\"paragraph\",\"data\":{\"text\":\"We made our note editor more capable by adding callout, sticky notes, columns, table of contents, date and Trello member extensions.\"}},{\"id\":\"EAjwd5JfVM\",\"type\":\"header\",\"data\":{\"text\":\"Table of contents\",\"level\":5,\"id\":\"Table-of-contents\"}},{\"id\":\"X2ylWRJ7tc\",\"type\":\"paragraph\",\"data\":{\"text\":\"The purpose of a table of contents is to help you navigate through the document and find specific sections quickly. In addition, it provides a useful overview of the document's structure and organization. The table of contents element works in the same way as the \\\"Document Outline\\\" feature mentioned above. However, it can be embedded directly into the note itself, making it easily accessible even when the note is exported or shared.\"}},{\"id\":\"QCjzybf0V0\",\"type\":\"header\",\"data\":{\"text\":\"Callout\",\"level\":5,\"id\":\"Callout\"}},{\"id\":\"b8CjH7OUdC\",\"type\":\"paragraph\",\"data\":{\"text\":\"Callout element is about highlighting important information in your note. You can choose from a predefined set of styles and colors as hint, info, success, warning, error and note. Use callouts to make your content more engaging and visually appealing, ensuring that important information never goes unnoticed.\"}},{\"id\":\"l1Y-gqRlGw\",\"type\":\"header\",\"data\":{\"text\":\"Sticky note\",\"level\":5,\"id\":\"Sticky-note\"}},{\"id\":\"8EmKg5Lpe8\",\"type\":\"paragraph\",\"data\":{\"text\":\"Sticky notes offer another way to visually highlight and separate ideas or tasks from the rest of the content. They are great to represent various planning items in your document, which can be converted to Trello cards when it's time to start working on the corresponding task.\"}},{\"id\":\"vJUEtNWX4X\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/5-sticky-note-2-8Pgd5B.gif\",\"key\":\"619f90ec31d6360012b5ac06/5-sticky-note-2-8Pgd5B.gif\"},\"stretched\":true,\"withBackground\":true}},{\"id\":\"z4Sn7gE8lu\",\"type\":\"header\",\"data\":{\"text\":\"Columns\",\"level\":5,\"id\":\"Columns\"}},{\"id\":\"M7DBvt49cS\",\"type\":\"paragraph\",\"data\":{\"text\":\"The columns layout element allows you to create visually appealing and organized layouts for your content. With the ability to split the page into multiple columns, you can easily divide information into distinct sections, making it easier for readers to navigate and understand.\"}},{\"id\":\"m9NNvqqK87\",\"type\":\"header\",\"data\":{\"text\":\"Date\",\"level\":5,\"id\":\"Date\"}},{\"id\":\"c6bP4kW9IE\",\"type\":\"paragraph\",\"data\":{\"text\":\"Typing dates manually can be a tedious task that often leads to inconsistent date formats across your documents. But now, with our new Date feature, you can easily add dates to your content by simply typing <code><code class=\\\"inline-code\\\">/date</code></code>. The Date element can also be used as a placeholder for current date in note templates. This means that when you create a new note by copying an existing one, the Date placeholder will automatically be replaced with the current date.\"}},{\"id\":\"ADY-IyViVf\",\"type\":\"header\",\"data\":{\"text\":\"Trello member\",\"level\":5,\"id\":\"Trello-member\"}},{\"id\":\"WG11tB1HXM\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our Trello member editor element makes it easy to reference board members in your notes. With the ability to embed Trello members directly into your content, you can quickly and easily identify who is responsible for a particular task or project.\"}},{\"id\":\"NnfLdndluX\",\"type\":\"header\",\"data\":{\"text\":\"Improved table element\",\"level\":3,\"id\":\"Improved-table-element\"}},{\"id\":\"oeajc_nvNx\",\"type\":\"paragraph\",\"data\":{\"text\":\"The table element now comes with new themes, colors and many customization options. Besides representing tabular data, it is flexible and customizable enough to use it as layout element to organizing note content or representing different kind of canvas-like visualizations.\"}},{\"id\":\"aty1nWJYrU\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/3-table-2-P6dQzC.gif\",\"key\":\"619f90ec31d6360012b5ac06/3-table-2-P6dQzC.gif\"},\"stretched\":true,\"withBackground\":true}},{\"id\":\"GZK2VtTew0\",\"type\":\"header\",\"data\":{\"text\":\"Keyboard-only editing experience\",\"level\":3,\"id\":\"Keyboard-only-editing-experience\"}},{\"id\":\"1kYehTBtmq\",\"type\":\"paragraph\",\"data\":{\"text\":\"Now, you can perform almost all content editing actions without using your mouse or learning complicated keyboard shortcuts. We have added all the existing and new text formatting options to the <code><code class=\\\"inline-code\\\">/</code></code> command menu. Simply hit the <code><code class=\\\"inline-code\\\">/</code></code> key, start typing the name of the desired command, select it, and done, you're ready to use it while typing.\"}},{\"id\":\"C0eEhu-k4g\",\"type\":\"paragraph\",\"data\":{\"text\":\"In addition to the command menu, we have also added a new way to reorganize your notes with ease. Just move your cursor to the desired part or element in the editor and press <br><code><code class=\\\"inline-code\\\">Options/Alt + Up/Down</code></code> to move it up or down.\"}},{\"id\":\"TUdOGu1rGS\",\"type\":\"image\",\"data\":{\"caption\":\"\",\"alt\":\"\",\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/4-move-MG5yTH.gif\",\"key\":\"619f90ec31d6360012b5ac06/4-move-MG5yTH.gif\"},\"stretched\":true,\"withBackground\":true,\"withBorder\":false}},{\"id\":\"HBv1d59_NA\",\"type\":\"header\",\"data\":{\"text\":\"New rich media embeds\",\"level\":3,\"id\":\"New-rich-media-embeds\"}},{\"id\":\"Qyy1MkT7iP\",\"type\":\"paragraph\",\"data\":{\"text\":\"Notes &amp; Docs allows you to embed rich media embeds like Youtube, Miro, Figma, Loom, etc. in your notes. We extended this capability by adding the following new embed types:\"}},{\"id\":\"1t15DXs16i\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"CloudApp\",\"CleanShot\",\"Google Docs\",\"Google Sheets\",\"Google Slides\",\"Google Maps\",\"Google Calendar\",\"Gist\",\"Stackblitz\",\"Tweet\",\"Giphy\",\"TED\",\"Quizlet\",\"Spotify\",\"iFrame code embed\"]}},{\"id\":\"FM2Tw1m9z1\",\"type\":\"header\",\"data\":{\"text\":\"Additional note icons and icon colors\",\"level\":3,\"id\":\"Additional-note-icons-and-icon-colors\"}},{\"id\":\"pIIeuMzyLg\",\"type\":\"paragraph\",\"data\":{\"text\":\"Note icons serve multiple purposes, including visually differentiating between different types of notes, categorizing them based on content, and indicating note status. For example, you can use different icons for meetings, tasks, or drafts, and show if a task is complete or overdue.\"}},{\"id\":\"BJT4DH893f\",\"type\":\"paragraph\",\"data\":{\"text\":\"To make note icons even more useful, we have doubled the number of available icons and introduced icon colors. With more icons and colors to choose from, you can easily create a more detailed and customizable system for organizing your notes.\"}},{\"id\":\"Zh3L6ceHh-\",\"type\":\"header\",\"data\":{\"text\":\"Numerous minor updates and improvements\",\"level\":3,\"id\":\"Numerous-minor-updates-and-improvements\"}},{\"id\":\"axE0die2Mp\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"We've improved the code block element which is now resizable and you can set the programming language as well.\",\"With the Trello card element, you can create Trello cards on your board directly from your note from now on.\",\"We've made images, embeds, tables, and code blocks precisely resizable.\",\"The note panel info has become more informative by showing the word and charater count of your note.\",\"We've also fixed various visual inconsistencies and glitches to enhance the overall experience.\"]}},{\"id\":\"vjchhYf8dL\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your <a target=\\\"_blank\\\" href=\\\"https://trello.com/\\\">Trello</a> and try out these new features. Don’t have the power-up yet? <a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a> from Trello power-up directory.\"}},{\"id\":\"fi94jqFO9O\",\"type\":\"paragraph\",\"data\":{\"text\":\"We hope these new features will significantly improve your productivity with Notes &amp; Docs power-up.\"}},{\"id\":\"f3rJG6og9w\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop an email to us at <a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.25.0\"}",
      "htmlContent": "",
      "slug": "unleash-your-note-writing-potential-in-trello-with-notes-and-docs-v2",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/notes-and-docs-hero-604x480-tPkqKd.png",
      "bannerImage": "619f90ec31d6360012b5ac06/notes-and-docs-hero-604x480-IAGoRQ.png",
      "additionalMeta": "{}",
      "createdAt": "1679502547871",
      "updatedAt": "1687531916117",
      "publishedAt": null
    },
    {
      "id": "64130f2482c832001287c2e9",
      "title": "Notes & Docs for Trello is on the \"Top New Power-Ups in 2022\" list",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "We are excited to announce that our team has once again made it onto the list of fastest-growing Trello power-ups for 2022!",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1678970951240,\"blocks\":[{\"id\":\"Q6kRYlOOlT\",\"type\":\"paragraph\",\"data\":{\"text\":\"We are excited to announce that our team has once again made it onto the list of fastest-growing Trello power-ups for 2022! \"}},{\"id\":\"nk7BC5Rlfb\",\"type\":\"paragraph\",\"data\":{\"text\":\"<br>Our product,&nbsp;<a href=\\\"https://geeksight.co/notes-and-docs\\\" target=\\\"_blank\\\">Notes &amp; Docs for Trello</a>, has earned a spot on the <b>Top New Power-Ups in 2022</b>&nbsp;list, following the success of our previous power-up,&nbsp;<a href=\\\"https://geeksight.co/persona-tool\\\" target=\\\"_blank\\\">Personas for Trello</a>, which has been named one of the <b>Top New Power-Ups in 2021</b> last year.\"}},{\"id\":\"lnVQGPKweM\",\"type\":\"paragraph\",\"data\":{\"text\":\"<br>Notes &amp; Docs has been&nbsp;<b><a href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\" target=\\\"_blank\\\" rel=\\\"nofollow\\\">installed more than 25,000 times</a>&nbsp;</b>in less than 10 months.\"}},{\"id\":\"Gifb_SXQuU\",\"type\":\"paragraph\",\"data\":{\"text\":\"<br>Notes &amp; Docs for Trello is a powerful tool that allows Trello users to create, edit, and share notes and documents directly within Trello boards. Teams can streamline their workflows and keep all their project-related information in one central location using this power-up.\"}},{\"id\":\"XXTFlEbors\",\"type\":\"paragraph\",\"data\":{\"text\":\"<br>Check out the \\\"Top New Power-Ups in 2022\\\" list here:&nbsp;<a href=\\\"https://www.bluecatreports.com/blog/power-up-stats-2022\\\" target=\\\"_blank\\\" rel=\\\"nofollow\\\">https://www.bluecatreports.com/blog/power-up-stats-2022</a>\"}}],\"version\":\"2.25.0\"}",
      "htmlContent": "",
      "slug": "notes-and-docs-for-trello-on-the-top-new-power-ups-list",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_celebration_re_kc9k-Z89a7G.png",
      "bannerImage": "619f90ec31d6360012b5ac06/undraw_celebration_re_kc9k-mIKaFR.png",
      "additionalMeta": "{\"noFollow\":false,\"hrefLang\":[]}",
      "createdAt": "1678970660858",
      "updatedAt": "1687531930694",
      "publishedAt": null
    },
    {
      "id": "637544c035682d006178bfd1",
      "title": "Account export in Notes & Docs power-up, service status page and more exciting news",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "Backup all your notes and content in Notes & Docs power-up, public system status page, a new incident management platform, and more.",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1669035998076,\"blocks\":[{\"id\":\"TvXjDc-kuh\",\"type\":\"header\",\"data\":{\"text\":\"Backup all your notes and content in Notes &amp; Docs power-up\",\"level\":3,\"id\":\"Backup-all-your-notes-and-content-in-Notes-andamp-Docs-power-up\"}},{\"id\":\"W84Zz9frfB\",\"type\":\"paragraph\",\"data\":{\"text\":\"You don’t have to worry about vendor lock-in at Notes &amp; Docs, and you can also keep a copy of your notes in a place that you fully trust.\"}},{\"id\":\"NWf1hc0zvQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"From now, it’s easy to backup and export all your data in Notes &amp; Docs for Trello. The new backup functionality is capable&nbsp;of exporting all your notes in JSON data and&nbsp;editable Word docx format.\"}},{\"id\":\"4oBDzKwCgT\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/notes-and-docs-backup-05-9ny_R6.gif\",\"key\":\"619f90ec31d6360012b5ac06/notes-and-docs-backup-05-9ny_R6.gif\"},\"caption\":\"Export all notes and content in Notes &amp; Docs power-up\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"xy2UnMyO2R\",\"type\":\"header\",\"data\":{\"text\":\"Public system status page and&nbsp;new incident management platform\",\"level\":3,\"id\":\"Public-system-status-page-andandnbspnew-incident-management-platform\"}},{\"id\":\"_prpyHyINF\",\"type\":\"paragraph\",\"data\":{\"text\":\"We believe transparency is essential to be a trustworthy and successful software service provider. Along with this aspiration, we have made our system status page public, where you can check the reliability of our platform with historical uptime and performance timeline. We have also introduced a new incident management platform on which we will communicate planned service maintenance periods and possible service outages - the latter hopefully very rarely -. This platform is also integrated with our Twitter account - where we&nbsp;regularly post company and product news - so it’s worth following us. \"}},{\"id\":\"Mis70DqIPq\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/cleanshot-2022-11-18-at-14.50.29@2x-GDt9dz.png\",\"key\":\"619f90ec31d6360012b5ac06/cleanshot-2022-11-18-at-14.50.29@2x-GDt9dz.png\"},\"caption\":\"Service status report at status.geeksight.co\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"VjfXZ568vA\",\"type\":\"paragraph\",\"data\":{\"text\":\"Check out our&nbsp;<a href=\\\"https://status.geeksight.co/\\\" target=\\\"_blank\\\">server status reports</a>, and&nbsp;<a href=\\\"https://twitter.com/geeksight\\\" target=\\\"_blank\\\" rel=\\\"nofollow\\\">start following us on Twitter</a>.\"}},{\"id\":\"NbthXp9wkj\",\"type\":\"header\",\"data\":{\"text\":\"Minor usability improvements in Notes &amp; Docs\",\"level\":3,\"id\":\"Minor-usability-improvements-in-Notes-andamp-Docs\"}},{\"id\":\"UcxdMqF55F\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"You can copy Bookmark and Trello card links to clipboard by selecting them in the editor and using the Cmd/Control+C keyboard shortcuts\",\"From now, it is possible to copy-paste Bookmarks, Images, and Trello cards in the editor\",\"Embedding Trello cards in your notes has never been easier. Just simply paste the card URL in the note. \",\"Convert Trello card to Bookmark and back\"]}},{\"id\":\"1MB7QswXzX\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/notes-and-docs-embed-trello-h5Mzo0.gif\",\"key\":\"619f90ec31d6360012b5ac06/notes-and-docs-embed-trello-h5Mzo0.gif\"},\"caption\":\"Paste Trello card in note\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"jZHNNSHWOY\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your&nbsp;<a target=\\\"_blank\\\" href=\\\"https://trello.com/\\\">Trello</a>&nbsp;and try out these new features. Don’t have the power-up yet?&nbsp;<a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a>&nbsp;from Trello power-up directory for free.\"}},{\"id\":\"Ln7xQIm0P2\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop an email to us at&nbsp;<a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.25.0\"}",
      "htmlContent": "",
      "slug": "notes-and-docs-power-up-account-export-backup",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_partying_re_at7f-z0-pfs-O8zYD6.webp",
      "bannerImage": null,
      "additionalMeta": "{}",
      "createdAt": "1668629696048",
      "updatedAt": "1687531945945",
      "publishedAt": null
    },
    {
      "id": "634d37d23cf8330137e65b00",
      "title": "🔥 The most requested Notes & Docs for Trello features have arrived",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "Notes & Docs for Trello got a massive update. Let's check all the new features and product improvements.",
      "authors": [
        "61012cb44d76da0011269128"
      ],
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1668467955957,\"blocks\":[{\"id\":\"AfG3giRXYy\",\"type\":\"paragraph\",\"data\":{\"text\":\"We've been hard at work in the past few months to make Notes &amp; Docs for Trello even more valuable for you. We're super excited to tell you all about these new features, and we hope you enjoy them as much as we do.\"}},{\"id\":\"lGYXZbxzDX\",\"type\":\"header\",\"data\":{\"text\":\"Oct 2022\",\"level\":2,\"id\":\"Oct-2022\"}},{\"id\":\"HQqDR-x84N\",\"type\":\"header\",\"data\":{\"text\":\"Link between notes\",\"level\":3,\"id\":\"Link-between-notes\"}},{\"id\":\"TmohPnj9zr\",\"type\":\"paragraph\",\"data\":{\"text\":\"From now, you can interlink your notes by selecting any text or even inserting a note link block in your notes.\"}},{\"id\":\"q9E62aR_xE\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/note_links_4x3_final-jDdk0c.gif\",\"key\":\"619f90ec31d6360012b5ac06/note_links_4x3_final-jDdk0c.gif\"},\"caption\":\"Interlink between notes\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"07VhsuC3QW\",\"type\":\"header\",\"data\":{\"text\":\"Link board notes to cards\",\"level\":3,\"id\":\"Link-board-notes-to-cards\"}},{\"id\":\"5c7vw34sS4\",\"type\":\"paragraph\",\"data\":{\"text\":\"You can attach existing board notes to any cards. This allows you to easily access related content from the context of the task you are currently working on. You can also make linked board notes the part of your Trello card templates.\"}},{\"id\":\"5z0w5-Hx-J\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/link_existing_bord_note_4x3_final-nTrEcn.gif\",\"key\":\"619f90ec31d6360012b5ac06/link_existing_bord_note_4x3_final-nTrEcn.gif\"},\"caption\":\"Link board notes to card\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"bdrR0g0HDh\",\"type\":\"header\",\"data\":{\"text\":\"Print notes\",\"level\":3,\"id\":\"Print-notes\"}},{\"id\":\"3T-BWtQzqX\",\"type\":\"paragraph\",\"data\":{\"text\":\"Print notes quickly with one click without the need to export them.\"}},{\"id\":\"no8QgsDez-\",\"type\":\"header\",\"data\":{\"text\":\"Share notes via web link\",\"level\":3,\"id\":\"Share-notes-via-web-link\"}},{\"id\":\"yniO9qY_48\",\"type\":\"paragraph\",\"data\":{\"text\":\"From now, you are able to share any of your notes via a unique web link. This allows you to share your notes with people who aren't members of your Trello boards.\"}},{\"id\":\"hDkZhig5es\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/share_with_link_4x3_final-przG83.gif\",\"key\":\"619f90ec31d6360012b5ac06/share_with_link_4x3_final-przG83.gif\"},\"caption\":\"Share note via web link\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"BiEOF5Zzk5\",\"type\":\"header\",\"data\":{\"text\":\"Minor usability and UI improvements\",\"level\":3,\"id\":\"Minor-usability-and-UI-improvements\"}},{\"id\":\"pdfGFUKfmK\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"We improved the board notes view layout to make it more usable.\",\"A new personal preference allows you to decide if you want to open board notes with standard or full width by default.\",\"You can replace an existing picture of image embeds.\",\"Easily switch between card notes in full page view without the need to close the current one and open another.\",\"Convert bookmarks to regular web links\"]}},{\"id\":\"OGP3DtC482\",\"type\":\"header\",\"data\":{\"text\":\"Aug 2022\",\"level\":2,\"id\":\"Aug-2022\"}},{\"id\":\"iUrg8BNCPz\",\"type\":\"header\",\"data\":{\"text\":\"Export notes\",\"level\":3,\"id\":\"Export-notes\"}},{\"id\":\"HaK3eqVnTV\",\"type\":\"paragraph\",\"data\":{\"text\":\"By exporting notes, you are able to print, backup, or send over&nbsp;them in the desired format. PDF, Word, and HTML export formats are supported.\"}},{\"id\":\"TaJemOM2lo\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/export_notes_4x3_final--IEetl.gif\",\"key\":\"619f90ec31d6360012b5ac06/export_notes_4x3_final--IEetl.gif\"},\"caption\":\"Export note\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"TJ5mMksx-L\",\"type\":\"header\",\"data\":{\"text\":\"New rich media embeds\",\"level\":3,\"id\":\"New-rich-media-embeds\"}},{\"id\":\"98n0vNYDwk\",\"type\":\"paragraph\",\"data\":{\"text\":\"Notes &amp; Docs allows you to include rich media embeds like Youtube, Miro, Figma, Loom, etc. in your notes. We extended this capability by adding the following new embed types:\"}},{\"id\":\"CDbX4uoq2W\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Vimeo\",\"Pinterest\",\"CodePen\"]}},{\"id\":\"NpYTXU09fh\",\"type\":\"header\",\"data\":{\"text\":\"Convert bookmarks to embeds and back again\",\"level\":3,\"id\":\"Convert-bookmarks-to-embeds-and-back-again\"}},{\"id\":\"HMON7cDp6L\",\"type\":\"paragraph\",\"data\":{\"text\":\"Want to include a Youtube video in your note quickly? Just paste its web link into your note, then convert the inserted bookmark to a Youtube video embed with a simple click.\"}},{\"id\":\"xv8QIXAx2_\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/convert_bookmark_to_image_4x3_final-1CslNh.gif\",\"key\":\"619f90ec31d6360012b5ac06/convert_bookmark_to_image_4x3_final-1CslNh.gif\"},\"caption\":\"Convert bookmark to image or embed\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"ep18SEqp9e\",\"type\":\"header\",\"data\":{\"text\":\"Jul 2022\",\"level\":2,\"id\":\"Jul-2022\"}},{\"id\":\"z69GEZ9_7V\",\"type\":\"header\",\"data\":{\"text\":\"Copy notes with cards\",\"level\":3,\"id\":\"Copy-notes-with-cards\"}},{\"id\":\"w-_jxbHXAE\",\"type\":\"paragraph\",\"data\":{\"text\":\"This feature makes it possible to copy notes when copying cards in Trello. It also allows you to <b>make predefined notes part of Trello card templates</b>.\"}},{\"id\":\"9oEEYtSiCF\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/6_notes_in_card_template_4x3_final-CaJRtQ.gif\",\"key\":\"619f90ec31d6360012b5ac06/6_notes_in_card_template_4x3_final-CaJRtQ.gif\"},\"caption\":\"Make notes part of Trello card templates\",\"withBorder\":false,\"stretched\":true,\"withBackground\":true}},{\"id\":\"Gzs3M5fNR3\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"qnhtl1-iTF\",\"type\":\"paragraph\",\"data\":{\"text\":\"Open your <a target=\\\"_blank\\\" href=\\\"https://trello.com\\\">Trello</a> and try out these new features. Don’t have the power-up yet? <a target=\\\"_blank\\\" href=\\\"https://trello.com/power-ups/625eaa6e39cc3f862e4db912\\\">Install it</a> from Trello power-up directory.\"}},{\"id\":\"tKZgNMmu1A\",\"type\":\"paragraph\",\"data\":{\"text\":\"We hope these new features will significantly improve your productivity with Notes &amp; Docs power-up.\"}},{\"id\":\"2uwBVgf0Sb\",\"type\":\"paragraph\",\"data\":{\"text\":\"In the meantime, we'd love to hear any feedback you have on the product and what we can do to make it even better. Feel free to drop an email to us at <a target=\\\"_blank\\\" href=\\\"mailto:feedback@geeksight.co\\\">feedback@geeksight.co</a>.\"}}],\"version\":\"2.25.0\"}",
      "htmlContent": "",
      "slug": "the-most-requested-notes-and-docs-for-trello-power-up-features-have-arrived",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        },
        {
          "id": "6495b15bafc6980012820ac1",
          "name": "Notes & Docs",
          "slug": "notes-and-docs"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_partying_re_at7f-Z0-pfS.png",
      "bannerImage": null,
      "additionalMeta": "{}",
      "createdAt": "1666004946480",
      "updatedAt": "1687531961151",
      "publishedAt": null
    },
    {
      "id": "62aa3b7f299aed0012dad6d4",
      "title": "Our top pick of Persona resources on the Internet",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": null,
      "authors": null,
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1655323926575,\"blocks\":[{\"id\":\"H2VUPQC4O8\",\"type\":\"paragraph\",\"data\":{\"text\":\"There are tons of great resources on the Internet about defining and using customer and user personas. Our team has found some really useful, interesting, and informative ones that we’d like to share with you.<br><b><br>Personas Demystified 1.0 by Mo Glotz</b>\"}},{\"id\":\"OuUh7YSQam\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https://www.slideshare.net/TheConartist/what-are-personas-and-how-to-use-them-a-presentation-by-shlomo-goltz\\\"></a><a href=\\\"https://www.slideshare.net/TheConartist/what-are-personas-and-how-to-use-them-a-presentation-by-shlomo-goltz\\\">https://www.slideshare.net/TheConartist/what-are-personas-and-how-to-use-them-a-presentation-by-shlomo-goltz</a>\"}},{\"id\":\"bXvIGByqQu\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b><br>The UX Designer’s Guide to Lean User Personas</b>\"}},{\"id\":\"N27LoKSQFt\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https://www.uxpin.com/studio/blog/ux-designers-5-minute-guide-lean-personas/\\\"></a><a href=\\\"https://www.uxpin.com/studio/blog/ux-designers-5-minute-guide-lean-personas/\\\">https://www.uxpin.com/studio/blog/ux-designers-5-minute-guide-lean-personas</a>\"}},{\"id\":\"iklVwk0Npm\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b><br>Creating User Personas: A Product Manager’s Approach by Kirsty Kearney Greig</b>\"}},{\"id\":\"7HKKi8YdAA\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https://www.prodpad.com/blog/a-product-managers-approach-to-creating-user-personas/\\\"></a><a href=\\\"https://www.prodpad.com/blog/a-product-managers-approach-to-creating-user-personas/\\\">https://www.prodpad.com/blog/a-product-managers-approach-to-creating-user-personas</a>\"}},{\"id\":\"IszHjiU-FT\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b><br>Fixing User Personas by Jordan Bowman</b>\"}},{\"id\":\"_evJ6Wr7JT\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https://uxdesign.cc/fixing-user-personas-6da3f00e75b3\\\"></a><a href=\\\"https://uxdesign.cc/fixing-user-personas-6da3f00e75b3\\\">https://uxdesign.cc/fixing-user-personas-6da3f00e75b3</a>\"}},{\"id\":\"vnL7nkO_qi\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b><br>The Big Problem with Personas</b>\"}},{\"id\":\"99y9meYjet\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https://uxmovement.medium.com/the-big-problem-with-personas-b606b49b74b2\\\"></a><a href=\\\"https://uxmovement.medium.com/the-big-problem-with-personas-b606b49b74b2\\\">https://uxmovement.medium.com/the-big-problem-with-personas-b606b49b74b2</a>\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": null,
      "slug": "our-top-pick-of-persona-resources",
      "tags": [],
      "categories": [
        {
          "id": "619f90ec31d6360012b5ac16",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_share_link_re_54rx--86BIf.png",
      "bannerImage": "619f90ec31d6360012b5ac06/undraw_share_link_re_54rx-6htrmL.png",
      "additionalMeta": null,
      "createdAt": "1655323519982",
      "updatedAt": "1659636576456",
      "publishedAt": null
    },
    {
      "id": "628e1f0bb909d800137ec41b",
      "title": "PersonaTool for Trello made the top 10 new Trello power-up of 2021",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": null,
      "authors": null,
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1653482007159,\"blocks\":[{\"id\":\"Rk5Oy7h1hQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Our product, Personas for Trello was one of the top 10 most installed Trello new power-ups of 2021! 🎉\"}},{\"id\":\"YPm3EngYhi\",\"type\":\"paragraph\",\"data\":{\"text\":\"Check it out here: <a href=\\\"https://www.bluecatreports.com/blog/power-up-stats-2021/\\\"></a><a href=\\\"https://www.bluecatreports.com/blog/power-up-stats-2021/\\\">https://www.bluecatreports.com/blog/power-up-stats-2021</a>\"}},{\"id\":\"oLoBeiUyZP\",\"type\":\"paragraph\",\"data\":{\"text\":\"Big thanks to Robin Warren from Cherry Wood Software Ltd for the stats and for making this ranking.\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": null,
      "slug": "personas-for-trello-made-the-top-10-new-trello-power-up-of-2021",
      "tags": [],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/undraw_well_done_i2wr-ZmtkKR.png",
      "bannerImage": "619f90ec31d6360012b5ac06/undraw_well_done_i2wr-FGIss0.png",
      "additionalMeta": null,
      "createdAt": "1653481227403",
      "updatedAt": "1659636576456",
      "publishedAt": null
    },
    {
      "id": "61af8af2ca09460016cd0e54",
      "title": "Introducing PersonaTool for Trello",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "We are happy to announce that our new product, PersonaTool for Trello, is available in the Trello Power-Ups Directory!",
      "authors": null,
      "authorId": "61012cb44d76da0011269128",
      "content": "{\"time\":1639154750022,\"blocks\":[{\"id\":\"8vE4FA4wkZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"We are happy to announce that our new product, PersonaTool for Trello, is available in the Trello Power-Ups Directory!\"}},{\"id\":\"S2BEtAKERm\",\"type\":\"paragraph\",\"data\":{\"text\":\"PersonaTool for Trello brings&nbsp;shared understanding of personas&nbsp;and&nbsp;customer-focused work&nbsp;to product teams who live and breathe in Trello.\"}},{\"id\":\"n4GeN9xTT_\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/619f90ec31d6360012b5ac06/pt-features-3-lyRtSC.png\",\"key\":\"619f90ec31d6360012b5ac06/pt-features-3-lyRtSC.png\"},\"caption\":\"Personas assigned to a Trello card\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"a-ub_PrWGh\",\"type\":\"paragraph\",\"data\":{\"text\":\"We believe that personas are essential tools for every customer-centered team. We think that our target user's pain points should influence our design and prioritization decisions more than anything else. Our personas should be living artifacts, not stagnant, stale Word or PDF documents. PersonaTool for Trello was built to ensure that. \"}},{\"id\":\"r4MdkJXrzh\",\"type\":\"paragraph\",\"data\":{\"text\":\"PersonaTool for Trello makes it straightforward to define, refine, co-work with, and share personas right in Trello, where teamwork happens. It helps your team members work with the users in mind. \"}},{\"id\":\"UswIglDxMD\",\"type\":\"paragraph\",\"data\":{\"text\":\"When adding a new user story or task card to your task list, ask the following questions: Who is this user story for? How important is this work item for that user? Make the answers visible and explicit with the help of PersonaTool by defining, then assigning personas to cards and adjusting the importance of the task for the persona. It can help your team prioritize and think about what functionality or special cases they might need to consider for each user story or task card. \"}},{\"id\":\"xbLY7TDluH\",\"type\":\"paragraph\",\"data\":{\"text\":\"PersonaTool also enables you to inspect and adapt your work focusing on the delivered customer value. Any time you can overview and review what is on the table and has been done for each persona.\"}},{\"id\":\"dSmRE0PAd1\",\"type\":\"paragraph\",\"data\":{\"text\":\"We believe that many teams, such as research, design, development, marketing, HR, or sales&nbsp;can benefit from using our new product.\"}},{\"id\":\"TMvb2ubgFS\",\"type\":\"paragraph\",\"data\":{\"text\":\"Check out our <a href=\\\"https://geeksight.co/persona-tool\\\">product page</a> and watch our <a href=\\\"https://youtu.be/3kmNcNWa8Ec\\\">short introduction video</a> to learn more about PersonaTool, or just&nbsp;<a href=\\\"https://trello.com/power-ups/614e30a57a092c725c5a661c\\\">install</a>&nbsp;it on your Trello boards right now.\"}},{\"id\":\"VkRushHZi5\",\"type\":\"paragraph\",\"data\":{\"text\":\"PersonaTool for Trello is free and in beta for a limited time. In order to build a sustainable business that can continue to innovate, we will need to charge for the product. Pricing has not yet been determined and will be announced in the future.\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": null,
      "slug": "introducing-personatool-for-trello",
      "tags": [
        {
          "id": "61af8bc7bc7ff70013c7db61",
          "name": "announcement",
          "slug": "announcement"
        }
      ],
      "categories": [
        {
          "id": "61af8b88ca09460016cd0ec1",
          "name": "Announcements",
          "slug": "announcements"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "619f90ec31d6360012b5ac06/personatool-illustration-eQDlmZ.png",
      "bannerImage": "619f90ec31d6360012b5ac06/pt-features-3-PhBtxl.png",
      "additionalMeta": null,
      "createdAt": "1638894322188",
      "updatedAt": "1659636576456",
      "publishedAt": null
    }
  ]















  [
    {
      "id": "65f15bf72bad2900122fee4e",
      "title": "In one hundred years from now, this headline will still get attention.",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The world is changing and we are in the middle of a revolution. Technology has changed the way we wo",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "649423d4a9d37a0011be2492",
      "content": "{\"time\":1634392838082,\"blocks\":[{\"id\":\"Y0Bj9C67_D\",\"type\":\"paragraph\",\"data\":{\"text\":\"The world is changing and we are in the middle of a revolution. Technology has changed the way we work, communicate.  \"}},{\"id\":\"RdwZs24_qz\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1596040033229-a9821ebd058d-dCMoFW.jpeg\",\"key\":\"6161c4c90c591c0012a6dcbb/photo-1596040033229-a9821ebd058d-dCMoFW.jpeg\"},\"caption\":\"Indian Herbs\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"9D6-QH8f3b\",\"type\":\"paragraph\",\"data\":{\"text\":\"Protein aroma first-class dish gluten-free lasagna sustainable cookie vegetables. Wine artisan a la carte bar Indian main course lovely. Cuisine fridge pub seafood oven conserves peas etiquette. Olive oil fresh chocolate ingredients lobster salami rice cuisine meals biological hummus. Sour bacon wholesome poultry chocolate conserves caramelize taste beets. Gastronome cookie restaurants have locally grown a la carte paprika aroma bacon indie foods recommendations consumer sustainable. Broth salt cuisine luncheon Indian whipped cream soda food truck coffee. Steam kitchen aroma consumer al dente. Lovely luncheon yummy lobster ginger.\"}},{\"id\":\"mpCRyXqwh6\",\"type\":\"paragraph\",\"data\":{\"text\":\"Pub fork beverages. Vegetarian starter gastronome drink delicious delivery eggs chocolate carbs sweet vegan eat better sauce. Consumer grocery shopping protein heating baking fish quinoa hummus wine chopsticks poultry Chinese food tasty pie. Healthy ginger etiquette meals. Breakfast Indian groceries pasta dish recommendations simmer cheese. Foodtruck groceries sausage ginger mineral water lovely bon appetit chopsticks cuisine a la carte carrots steam bartender. Blend sweet cookie wine cream local yummy meat. Coffee banquet conserves bon appetit etiquette oven meat chopsticks blend barbeque. Groceries cheese sustainable. Flavor taste butter consumer.\"}},{\"id\":\"rZh4I_n7TO\",\"type\":\"header\",\"data\":{\"text\":\"Authentic hummus pizza butter tea restaurant dessert pots\",\"level\":2}},{\"id\":\"sdGUjK9ZYV\",\"type\":\"paragraph\",\"data\":{\"text\":\"Pans starter restaurants custard apples pepper. Ingredients liquor romantic consumer. Coffee cream al dente lobster consumer bacon indie foods paprika drink baking. Lobster tasty eat better take away seafood yummy herbs carbs java. Cook beets locally grown chocolate. Locally grown pots and pans drink. Locally grown cook cuisine carbs sustainable marinate. Fresh chocolate pizza broth deep frying. Grape lovely tea paprika plate ingredients first class bon appetit pots and pan sausage restaurants. \"}},{\"id\":\"1edB5fwhU6\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Vegan protein vegetables salami tasty lunch bacon consumer appliances.\",\"Protein spinach breakfast sour restaurant recommendations luncheon vegetarian carbs chopsticks.<br>\",\"Fork foodtruck grocery shopping bar indie foods delicious locally grown scent.<br>\",\"Delivery chef locally grown beer coffee protein gluten free restaurants indie foods spice pub.<br>\"]}},{\"id\":\"Xf6J3EhXLG\",\"type\":\"paragraph\",\"data\":{\"text\":\"Chickpeas vegan artisan restaurant kitchen grape mustard farm poultry coffee. Eat better fork tea paprika dish bartender gluten-free food truck lovely luncheon. Sausage oven artisan bacon locally grown bar sous-chef meals blender. Gastronome conserves bacon heating customer scent. Beets tea appliances farm bon appetit tasty authentic pub fish consumer herbes chick peas. Carrots mineral water blend peas sous-chef dish chef. Lobster deep frying food aroma etiquette wine beets lasagna kitchen first class. Olive oil hummus bread salt. Fruit whipped cream sushi local fork custard funghi carrots Chinese food vegetarian authentic. Cafe beer deep frying wine bacon bread heating delivery eggs.\"}},{\"id\":\"ZuAKyb89tW\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1512621776951-a57141f2eefd-0M1-JV.jpeg\",\"key\":\"6161c4c90c591c0012a6dcbb/photo-1512621776951-a57141f2eefd-0M1-JV.jpeg\"},\"caption\":\"Chickpeas vegan\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"c8wN77qm6X\",\"type\":\"paragraph\",\"data\":{\"text\":\"Beets conserve coffee indian salami herbes aroma wine cupcake whipped cream. Restaurants mustard beer savory fresh bread caramelize starter cafe cook desert rice heating. Protein authentic starter coffee tea mineral water lobster apples quinoa delivery grape take away etiquette.\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": "",
      "slug": "in-one-hundred-years-from-now-this-headline-will-still-get-attention",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "common/images/photo-1596040033229-a9821ebd058d-cropped--QB3IX.jpeg",
      "bannerImage": "common/images/photo-1596040033229-a9821ebd058d-cropped-ex514A.jpeg",
      "additionalMeta": "{}",
      "createdAt": "1710316535800",
      "updatedAt": "1710349031008",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee4f",
      "title": "This is the first blog post",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "This is the first example post with different elements",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "649423d4a9d37a0011be2492",
      "content": "{\"time\":1634392957451,\"blocks\":[{\"id\":\"qNEu-72TqW\",\"type\":\"paragraph\",\"data\":{\"text\":\"Here are examples of content options available on the post Editor.\"}},{\"id\":\"Jvn3kTwkMm\",\"type\":\"header\",\"data\":{\"text\":\"H1.Almost before we knew it\",\"level\":1}},{\"id\":\"KYc5tSZo-9\",\"type\":\"header\",\"data\":{\"text\":\"H2.Almost before we knew it\",\"level\":2}},{\"id\":\"5W9_8tVnoA\",\"type\":\"header\",\"data\":{\"text\":\"H3.Almost before we knew it\",\"level\":3}},{\"id\":\"oN4-lfAjRi\",\"type\":\"header\",\"data\":{\"text\":\"H4.Almost before we knew it\",\"level\":4}},{\"id\":\"04InCf0nZn\",\"type\":\"header\",\"data\":{\"text\":\"h5.Almost before we knew it\",\"level\":5}},{\"id\":\"EIgbEocNIr\",\"type\":\"header\",\"data\":{\"text\":\"H6.Almost before we knew it\",\"level\":6}},{\"id\":\"JdZVkY8sgw\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"FiNe3-yneK\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b>Paragraph</b>\"}},{\"id\":\"6ptFwKBjoI\",\"type\":\"paragraph\",\"data\":{\"text\":\"Long-tail business <b>model canvas early</b> adopters founders <i>lean startup seed</i> money scrum <a href=\\\"https://example.com\\\">project hackathon</a> iteration. Startup iteration alpha prototype accelerator pivot customer hackathon ramen release bandwidth crowdfunding equity series A financing. Infrastructure traction pitch <u class=\\\"cdx-underline\\\">paradigm shifts</u> ownership crowdfunding gen-z influencer entrepreneur long-tail investor iPad. <mark class=\\\"cdx-marker\\\">Accelerator bootstrapping founders</mark> advisor crowdfunding startup. Focus bandwidth handshake success seed money social media accelerator <code class=\\\"inline-code\\\">venture responsive </code>web design prototype infographic client startup.\"}},{\"id\":\"MG2Uht1cgK\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"coy0Pfwd6M\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b>List</b>\"}},{\"id\":\"nV1P3m7uIu\",\"type\":\"paragraph\",\"data\":{\"text\":\"Here is the example of a simple list\"}},{\"id\":\"MbVlfLfBqE\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Accelerator pitch ramen infrastructure conversion.&nbsp;<br>\",\"Gen-Z alpha value proposition venture metrics assets early adopters graphical user interface.\",\"focus accelerator lean startup. Termsheet validation research &amp; development android venture.&nbsp;\",\"Hypotheses traction business-to-consumer. Network effects value proposition ecosystem business plan innovator.\"]}},{\"id\":\"qfPP2IMdhX\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"74tU2ATISX\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b>Blockquote</b>\"}},{\"id\":\"jqPCcn8MFv\",\"type\":\"quote\",\"data\":{\"text\":\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\",\"caption\":\"St. Jerome\",\"alignment\":\"left\"}},{\"id\":\"mR9dd-M2UA\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"DOGU_CDJao\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b>Image with Caption</b>\"}},{\"id\":\"GiGumDhlxt\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1488554378835-f7acf46e6c98-jiULH5.jpeg\",\"key\":\"6161c4c90c591c0012a6dcbb/photo-1488554378835-f7acf46e6c98-jiULH5.jpeg\"},\"caption\":\"Image Caption\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"lgZZ3isC5s\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"7xcYOc3LsL\",\"type\":\"paragraph\",\"data\":{\"text\":\"More options are coming soon! 🙌\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": null,
      "slug": "this-is-the-first-blog-post",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "common/images/lucas-benjamin-wqlagv4_oys-unsplash-cropped-lmzsuf.jpeg",
      "bannerImage": "common/images/lucas-benjamin-wqlagv4_oys-unsplash-cropped-_vcwt5.jpeg",
      "additionalMeta": "{}",
      "createdAt": "1710316535800",
      "updatedAt": "1710316535800",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee4d",
      "title": "Beets conserve coffee Indian salami herbs aroma wine cupcake whipped cream",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "Custard pie starter bartender mineral water carbs salami marinate groceries pasta dessert cream.",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "649423d4a9d37a0011be2492",
      "content": "{\"time\":1634048247756,\"blocks\":[{\"id\":\"Y0Bj9C67_D\",\"type\":\"paragraph\",\"data\":{\"text\":\"Custard pie starter bartender mineral water carbs salami marinate groceries pasta dessert cream delicious. \"}},{\"id\":\"RdwZs24_qz\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1596040033229-a9821ebd058d-dCMoFW.jpeg\",\"key\":\"6161c4c90c591c0012a6dcbb/photo-1596040033229-a9821ebd058d-dCMoFW.jpeg\"},\"caption\":\"Indian Herbs\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"btgsZZ9Kho\",\"type\":\"paragraph\",\"data\":{\"text\":\"Protein aroma first-class dish gluten-free lasagna sustainable cookie vegetables. Wine artisan a la carte bar Indian main course lovely. Cuisine fridge pub seafood oven conserves peas etiquette. Olive oil fresh chocolate ingredients lobster salami rice cuisine meals biological hummus. Sour bacon wholesome poultry chocolate conserves caramelize taste beets. Gastronome cookie restaurants have locally grown a la carte paprika aroma bacon indie foods recommendations consumer sustainable. Broth salt cuisine luncheon Indian whipped cream soda food truck coffee. Steam kitchen aroma consumer al dente. Lovely luncheon yummy lobster ginger.\"}},{\"id\":\"mpCRyXqwh6\",\"type\":\"paragraph\",\"data\":{\"text\":\"Pub fork beverages. Vegetarian starter gastronome drink delicious delivery eggs chocolate carbs sweet vegan eat better sauce. Consumer grocery shopping protein heating baking fish quinoa hummus wine chopsticks poultry Chinese food tasty pie. Healthy ginger etiquette meals. Breakfast Indian groceries pasta dish recommendations simmer cheese. Foodtruck groceries sausage ginger mineral water lovely bon appetit chopsticks cuisine a la carte carrots steam bartender. Blend sweet cookie wine cream local yummy meat. Coffee banquet conserves bon appetit etiquette oven meat chopsticks blend barbeque. Groceries cheese sustainable. Flavor taste butter consumer.\"}},{\"id\":\"rZh4I_n7TO\",\"type\":\"header\",\"data\":{\"text\":\"Authentic hummus pizza butter tea restaurant dessert pots\",\"level\":2}},{\"id\":\"sdGUjK9ZYV\",\"type\":\"paragraph\",\"data\":{\"text\":\"Pans starter restaurants custard apples pepper. Ingredients liquor romantic consumer. Coffee cream al dente lobster consumer bacon indie foods paprika drink baking. Lobster tasty eat better take away seafood yummy herbs carbs java. Cook beets locally grown chocolate. Locally grown pots and pans drink. Locally grown cook cuisine carbs sustainable marinate. Fresh chocolate pizza broth deep frying. Grape lovely tea paprika plate ingredients first class bon appetit pots and pan sausage restaurants. \"}},{\"id\":\"1edB5fwhU6\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Vegan protein vegetables salami tasty lunch bacon consumer appliances.\",\"Protein spinach breakfast sour restaurant recommendations luncheon vegetarian carbs chopsticks.<br>\",\"Fork foodtruck grocery shopping bar indie foods delicious locally grown scent.<br>\",\"Delivery chef locally grown beer coffee protein gluten free restaurants indie foods spice pub.<br>\"]}},{\"id\":\"Xf6J3EhXLG\",\"type\":\"paragraph\",\"data\":{\"text\":\"Chickpeas vegan artisan restaurant kitchen grape mustard farm poultry coffee. Eat better fork tea paprika dish bartender gluten-free food truck lovely luncheon. Sausage oven artisan bacon locally grown bar sous-chef meals blender. Gastronome conserves bacon heating customer scent. Beets tea appliances farm bon appetit tasty authentic pub fish consumer herbes chick peas. Carrots mineral water blend peas sous-chef dish chef. Lobster deep frying food aroma etiquette wine beets lasagna kitchen first class. Olive oil hummus bread salt. Fruit whipped cream sushi local fork custard funghi carrots Chinese food vegetarian authentic. Cafe beer deep frying wine bacon bread heating delivery eggs.\"}},{\"id\":\"ZuAKyb89tW\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://dorik-test-object.s3.us-east-2.amazonaws.com/6161c4c90c591c0012a6dcbb/photo-1512621776951-a57141f2eefd-0M1-JV.jpeg\",\"key\":\"6161c4c90c591c0012a6dcbb/photo-1512621776951-a57141f2eefd-0M1-JV.jpeg\"},\"caption\":\"Chickpeas vegan\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"c8wN77qm6X\",\"type\":\"paragraph\",\"data\":{\"text\":\"Beets conserve coffee indian salami herbes aroma wine cupcake whipped cream. Restaurants mustard beer savory fresh bread caramelize starter cafe cook desert rice heating. Protein authentic starter coffee tea mineral water lobster apples quinoa delivery grape take away etiquette.\"}},{\"id\":\"42ll_8CkvY\",\"type\":\"paragraph\",\"data\":{\"text\":\"Groceries steam banquet gluten free beverages a la carte customer artisan lunch yummy heating. Mustard blender savory. Funghi savory aroma. Sushi cream cuisine scent romantic flavor deep frying. Soda beer coffee. Pie beets coffee sustainable. Etiquette barbeque pizza coffee relish restaurant simmer.\"}}],\"version\":\"2.22.2\"}",
      "htmlContent": null,
      "slug": "beets-conserve-coffee-indian-salami-herbs-aroma-wine-cupcake-whipped-cream-m-qbb-hgoflcdo",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "PUBLISHED",
      "scheduledDateTime": null,
      "thumbnailImage": "common/images/photo-1596040033229-a9821ebd058d-cropped-AKNMOQ.jpeg",
      "bannerImage": "common/images/photo-1596040033229-a9821ebd058d-cropped-TeFNvz.jpeg",
      "additionalMeta": "{}",
      "createdAt": "1710316535799",
      "updatedAt": "1710316535799",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee57",
      "title": "10 best ways to promote your affiliate links and boost your earnings",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The world is changing and we are in the middle of a revolution.",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "638302c96354f80011242543",
      "content": "{\"time\":1684408167408,\"blocks\":[{\"id\":\"f4EUwqOzmL\",\"type\":\"header\",\"data\":{\"text\":\"What is Lorem Ipsum?\",\"level\":2,\"id\":\"What-is-Lorem-Ipsum\"}},{\"id\":\"9yrzbPIBX7\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"}},{\"id\":\"9FxczALVuf\",\"type\":\"image\",\"data\":{\"caption\":\"Do more or less\",\"file\":{\"url\":\"https://cdn.cmsfly.com/6463237fdf1efc0012dcca57/rectangle-42-1-m_jSHw.png\",\"key\":\"6463237fdf1efc0012dcca57/rectangle-42-1-m_jSHw.png\"},\"alt\":\"Do it now\"}},{\"id\":\"TnzeW4ar_v\",\"type\":\"header\",\"data\":{\"text\":\"Why Do We Use It?\",\"level\":2,\"id\":\"Why-Do-We-Use-It\"}},{\"id\":\"8k7ycY5shA\",\"type\":\"paragraph\",\"data\":{\"text\":\"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"}},{\"id\":\"mNSJa23hKT\",\"type\":\"header\",\"data\":{\"text\":\"<a href=\\\"https://business-coach.dcms.site/post/think-like-an-entrepreneur#Where-Does-It-Come-From\\\"></a>Where Does It Come From?\",\"level\":2,\"id\":\"lessa-href\\\"https:business-coach.dcms.sitepostthink-like-an-entrepreneurWhere-Does-It-Come-From\\\"greaterlessagreaterWhere-Does-It-Come-From\"}},{\"id\":\"YwBKmK6V3F\",\"type\":\"paragraph\",\"data\":{\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\"}},{\"id\":\"pV8gRkPeDQ\",\"type\":\"paragraph\",\"data\":{\"text\":\" literature.Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32.\"}},{\"id\":\"Z_mw71zGo8\",\"type\":\"quote\",\"data\":{\"text\":\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\",\"caption\":\"St. Jerome\",\"alignment\":\"left\"}},{\"id\":\"NtVcpendR1\",\"type\":\"paragraph\",\"data\":{\"text\":\"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>\"}},{\"id\":\"MTtc40Zwth\",\"type\":\"header\",\"data\":{\"text\":\"Where Can I Get Some?\",\"level\":2,\"id\":\"Where-Can-I-Get-Some\"}},{\"id\":\"m5VMVXn4xZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.&nbsp;It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": null,
      "slug": "promote-business",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "DRAFT",
      "scheduledDateTime": null,
      "thumbnailImage": "6463237fdf1efc0012dcca57/rectangle-42-1-uPBskD.png",
      "bannerImage": "",
      "additionalMeta": "{}",
      "createdAt": "1684407999291",
      "updatedAt": "1684408172281",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee54",
      "title": "A comprehensive guide to promote your affiliate links and boost your earnings",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The world is changing and we are in the middle of a revolution.",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "638302c96354f80011242543",
      "content": "{\"time\":1684407978615,\"blocks\":[{\"id\":\"f4EUwqOzmL\",\"type\":\"header\",\"data\":{\"text\":\"What is Lorem Ipsum?\",\"level\":2,\"id\":\"What-is-Lorem-Ipsum\"}},{\"id\":\"9yrzbPIBX7\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"}},{\"id\":\"1E6UmJrm80\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/6463237fdf1efc0012dcca57/rectangle-42-TkCU6g.png\",\"key\":\"6463237fdf1efc0012dcca57/rectangle-42-TkCU6g.png\"},\"caption\":\"charts on dashboard\",\"alt\":\"charts\"}},{\"id\":\"TnzeW4ar_v\",\"type\":\"header\",\"data\":{\"text\":\"Why Do We Use It?\",\"level\":2,\"id\":\"Why-Do-We-Use-It\"}},{\"id\":\"8k7ycY5shA\",\"type\":\"paragraph\",\"data\":{\"text\":\"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"}},{\"id\":\"mNSJa23hKT\",\"type\":\"header\",\"data\":{\"text\":\"<a href=\\\"https://business-coach.dcms.site/post/think-like-an-entrepreneur#Where-Does-It-Come-From\\\"></a>Where Does It Come From?\",\"level\":2,\"id\":\"lessa-href\\\"https:business-coach.dcms.sitepostthink-like-an-entrepreneurWhere-Does-It-Come-From\\\"greaterlessagreaterWhere-Does-It-Come-From\"}},{\"id\":\"YwBKmK6V3F\",\"type\":\"paragraph\",\"data\":{\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\"}},{\"id\":\"pV8gRkPeDQ\",\"type\":\"paragraph\",\"data\":{\"text\":\" literature.Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32.\"}},{\"id\":\"Z_mw71zGo8\",\"type\":\"quote\",\"data\":{\"text\":\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\",\"caption\":\"St. Jerome\",\"alignment\":\"left\"}},{\"id\":\"NtVcpendR1\",\"type\":\"paragraph\",\"data\":{\"text\":\"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>\"}},{\"id\":\"MTtc40Zwth\",\"type\":\"header\",\"data\":{\"text\":\"Where Can I Get Some?\",\"level\":2,\"id\":\"Where-Can-I-Get-Some\"}},{\"id\":\"m5VMVXn4xZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.&nbsp;It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": null,
      "slug": "comprehensive",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "DRAFT",
      "scheduledDateTime": null,
      "thumbnailImage": "6463237fdf1efc0012dcca57/rectangle-41-1-w2dfP2.png",
      "bannerImage": "",
      "additionalMeta": "{}",
      "createdAt": "1684407997244",
      "updatedAt": "1684408429052",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee56",
      "title": "How to build relationships with your affiliate marketing partners",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The world is changing and we are in the middle of a revolution.",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "638302c96354f80011242543",
      "content": "{\"time\":1684408208897,\"blocks\":[{\"id\":\"f4EUwqOzmL\",\"type\":\"header\",\"data\":{\"text\":\"What is Lorem Ipsum?\",\"level\":2,\"id\":\"What-is-Lorem-Ipsum\"}},{\"id\":\"9yrzbPIBX7\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"}},{\"id\":\"SGw3MH--cz\",\"type\":\"image\",\"data\":{\"caption\":\"smartphone in the hand\",\"alt\":\"app runs on background\",\"file\":{\"url\":\"https://cdn.cmsfly.com/6463237fdf1efc0012dcca57/rectangle-41-0LOK9a.png\",\"key\":\"6463237fdf1efc0012dcca57/rectangle-41-0LOK9a.png\"}}},{\"id\":\"TnzeW4ar_v\",\"type\":\"header\",\"data\":{\"text\":\"Why Do We Use It?\",\"level\":2,\"id\":\"Why-Do-We-Use-It\"}},{\"id\":\"8k7ycY5shA\",\"type\":\"paragraph\",\"data\":{\"text\":\"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"}},{\"id\":\"mNSJa23hKT\",\"type\":\"header\",\"data\":{\"text\":\"<a href=\\\"https://business-coach.dcms.site/post/think-like-an-entrepreneur#Where-Does-It-Come-From\\\"></a>Where Does It Come From?\",\"level\":2,\"id\":\"lessa-href\\\"https:business-coach.dcms.sitepostthink-like-an-entrepreneurWhere-Does-It-Come-From\\\"greaterlessagreaterWhere-Does-It-Come-From\"}},{\"id\":\"YwBKmK6V3F\",\"type\":\"paragraph\",\"data\":{\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\"}},{\"id\":\"pV8gRkPeDQ\",\"type\":\"paragraph\",\"data\":{\"text\":\" literature.Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32.\"}},{\"id\":\"Z_mw71zGo8\",\"type\":\"quote\",\"data\":{\"text\":\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\",\"caption\":\"St. Jerome\",\"alignment\":\"left\"}},{\"id\":\"NtVcpendR1\",\"type\":\"paragraph\",\"data\":{\"text\":\"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>\"}},{\"id\":\"MTtc40Zwth\",\"type\":\"header\",\"data\":{\"text\":\"Where Can I Get Some?\",\"level\":2,\"id\":\"Where-Can-I-Get-Some\"}},{\"id\":\"m5VMVXn4xZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.&nbsp;It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": null,
      "slug": "marketing-partners",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "DRAFT",
      "scheduledDateTime": null,
      "thumbnailImage": "6463237fdf1efc0012dcca57/rectangle-41-QRGDpc.png",
      "bannerImage": "",
      "additionalMeta": "{}",
      "createdAt": "1684407994634",
      "updatedAt": "1684408234395",
      "publishedAt": null
    },
    {
      "id": "65f15bf72bad2900122fee55",
      "title": "Free guide today and start earning more with affiliate marketing",
      "shouldIncludeInRss": true,
      "shouldIncludeInSitemap": true,
      "excerpt": "The world is changing and we are in the middle of a revolution.",
      "authors": [
        "649423d4a9d37a0011be2492"
      ],
      "authorId": "638302c96354f80011242543",
      "content": "{\"time\":1684407978615,\"blocks\":[{\"id\":\"f4EUwqOzmL\",\"type\":\"header\",\"data\":{\"text\":\"What is Lorem Ipsum?\",\"level\":2,\"id\":\"What-is-Lorem-Ipsum\"}},{\"id\":\"9yrzbPIBX7\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"}},{\"id\":\"1E6UmJrm80\",\"type\":\"image\",\"data\":{\"file\":{\"url\":\"https://cdn.cmsfly.com/6463237fdf1efc0012dcca57/rectangle-42-TkCU6g.png\",\"key\":\"6463237fdf1efc0012dcca57/rectangle-42-TkCU6g.png\"},\"caption\":\"charts on dashboard\",\"alt\":\"charts\"}},{\"id\":\"TnzeW4ar_v\",\"type\":\"header\",\"data\":{\"text\":\"Why Do We Use It?\",\"level\":2,\"id\":\"Why-Do-We-Use-It\"}},{\"id\":\"8k7ycY5shA\",\"type\":\"paragraph\",\"data\":{\"text\":\"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"}},{\"id\":\"mNSJa23hKT\",\"type\":\"header\",\"data\":{\"text\":\"<a href=\\\"https://business-coach.dcms.site/post/think-like-an-entrepreneur#Where-Does-It-Come-From\\\"></a>Where Does It Come From?\",\"level\":2,\"id\":\"lessa-href\\\"https:business-coach.dcms.sitepostthink-like-an-entrepreneurWhere-Does-It-Come-From\\\"greaterlessagreaterWhere-Does-It-Come-From\"}},{\"id\":\"YwBKmK6V3F\",\"type\":\"paragraph\",\"data\":{\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\"}},{\"id\":\"pV8gRkPeDQ\",\"type\":\"paragraph\",\"data\":{\"text\":\" literature.Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32.\"}},{\"id\":\"Z_mw71zGo8\",\"type\":\"quote\",\"data\":{\"text\":\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\",\"caption\":\"St. Jerome\",\"alignment\":\"left\"}},{\"id\":\"NtVcpendR1\",\"type\":\"paragraph\",\"data\":{\"text\":\"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>\"}},{\"id\":\"MTtc40Zwth\",\"type\":\"header\",\"data\":{\"text\":\"Where Can I Get Some?\",\"level\":2,\"id\":\"Where-Can-I-Get-Some\"}},{\"id\":\"m5VMVXn4xZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.&nbsp;It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"}}],\"version\":\"2.26.5\"}",
      "htmlContent": null,
      "slug": "free-guide",
      "tags": [],
      "categories": [
        {
          "id": "65f15bf72bad2900122fee49",
          "name": "Uncategorized",
          "slug": "uncategorized"
        }
      ],
      "status": "DRAFT",
      "scheduledDateTime": null,
      "thumbnailImage": "6463237fdf1efc0012dcca57/rectangle-42-WVkbHu.png",
      "bannerImage": "",
      "additionalMeta": "{}",
      "createdAt": "1684218751818",
      "updatedAt": "1684407990086",
      "publishedAt": null
    }
  ]