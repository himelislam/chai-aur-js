; (function () {
    document.addEventListener('DOMContentLoaded', function () {
        const toggleSwitch = document.querySelector('.checkbox');
        const darkModeElements = document.querySelectorAll('[data-theme="current"]');
        const nestedPs = document.querySelectorAll('div p');
        const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');

        // Get stored toggle state and theme from localStorage
        const storedState = localStorage.getItem('toggleState');
        const storedTheme = localStorage.getItem('theme');

        if (storedState) {
            // Set toggle element based on stored state
            toggleSwitch.checked = storedState === 'true';

            // Apply stored theme to nested paragraphs (assuming CSS variables are used)
            document.documentElement.style.setProperty('--theme-mode', storedTheme);
        }

        // Check initial state based on document styles (as a fallback)
        const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
        toggleSwitch.checked = initialTheme === 'light';

        toggleSwitch.addEventListener('change', () => {
            const currentTheme = toggleSwitch.checked ? 'light' : 'dark';

            // Update element styles and nested paragraphs
            darkModeElements.forEach((element) => {
                element.dataset.theme = currentTheme; // Update data attribute
                if (element.dataset.imageBackground) {
                    element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;
                }
                if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
                    element.style.color = `var(--text-color-${currentTheme}-mode)`;
                }
            });

            // Update paragraph colors (using CSS variable for consistency)
            nestedPs.forEach(paragraph => {
                paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
            });

            // Update heading colors
            headings.forEach(heading => {
                heading.style.color = `var(--text-color-${currentTheme}-mode)`;
            });

            // Update document-level theme variable
            document.documentElement.style.setProperty('--theme-mode', currentTheme);
            //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);


            // Store the new toggle state and theme in localStorage
            localStorage.setItem('toggleState', toggleSwitch.checked);
            localStorage.setItem('theme', currentTheme);
        });
    });
})();


    ; (function () {
        const toggleSwitch = document.querySelector('.checkbox');
        const darkModeElements = document.querySelectorAll('[data-theme="current"]');
        const nestedPs = document.querySelectorAll('div p');
        const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');

        // Get stored toggle state and theme from localStorage
        const storedState = localStorage.getItem('toggleState');
        const storedTheme = localStorage.getItem('theme');

        if (storedState) {
            // Set toggle element based on stored state
            toggleSwitch.checked = storedState === 'true';

            // Apply stored theme to nested paragraphs (assuming CSS variables are used)
            document.documentElement.style.setProperty('--theme-mode', storedTheme);
        }

        // Check initial state based on document styles (as a fallback)
        const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
        toggleSwitch.checked = initialTheme === 'light';

        toggleSwitch.addEventListener('change', () => {
            const currentTheme = toggleSwitch.checked ? 'light' : 'dark';

            // Update element styles and nested paragraphs
            darkModeElements.forEach((element) => {
                element.dataset.theme = currentTheme; // Update data attribute
                if (element.dataset.imageBackground) {
                    element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;
                }
                if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
                    element.style.color = `var(--text-color-${currentTheme}-mode)`;
                }
            });

            // Update paragraph colors (using CSS variable for consistency)
            nestedPs.forEach(paragraph => {
                paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
            });

            // Update heading colors
            headings.forEach(heading => {
                heading.style.color = `var(--text-color-${currentTheme}-mode)`;
            });

            // Update document-level theme variable
            document.documentElement.style.setProperty('--theme-mode', currentTheme);
            //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);


            // Store the new toggle state and theme in localStorage
            localStorage.setItem('toggleState', toggleSwitch.checked);
            localStorage.setItem('theme', currentTheme);
        })
    })
})()

(function(){
    function interval(){
        const toggleSwitch = document.querySelector('.checkbox');
    const darkModeElements = document.querySelectorAll('[data-theme="current"]');
    const nestedPs = document.querySelectorAll('div p');
    const headings = document.querySelectorAll('.dorik-heading, h1, h2, h3, h4, h5, h6, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6');
  
    // Get stored toggle state and theme from localStorage
    const storedState = localStorage.getItem('toggleState');
    const storedTheme = localStorage.getItem('theme');
  
    if (storedState) {
      // Set toggle element based on stored state
      toggleSwitch.checked = storedState === 'true';
  
      // Apply stored theme to nested paragraphs (assuming CSS variables are used)
      document.documentElement.style.setProperty('--theme-mode', storedTheme);
    }
  
    // Check initial state based on document styles (as a fallback)
    const initialTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme-mode');
    toggleSwitch.checked = initialTheme === 'light';
  
    toggleSwitch.addEventListener('change', () => {
      const currentTheme = toggleSwitch.checked ? 'light' : 'dark';
  
      // Update element styles and nested paragraphs
      darkModeElements.forEach((element) => {
        element.dataset.theme = currentTheme; // Update data attribute
        if (element.dataset.imageBackground) {
            element.style.backgroundImage = `var(--background-image-hero-${currentTheme}-mode)`;}
            if (element.dataset.fontColor || element.classList.contains('dorik-title')) {
              element.style.color = `var(--text-color-${currentTheme}-mode)`;
            }
      });
  
      // Update paragraph colors (using CSS variable for consistency)
      nestedPs.forEach(paragraph => {
        paragraph.style.color = `var(--text-color-${currentTheme}-mode)`;
      });
  
      // Update heading colors
      headings.forEach(heading => {
        heading.style.color = `var(--text-color-${currentTheme}-mode)`;
      });
  
      // Update document-level theme variable
    document.documentElement.style.setProperty('--theme-mode', currentTheme);
     //document.body.style.setProperty('background-color', `var(--body-color-${currentTheme}-mode)`);

  
      // Store the new toggle state and theme in localStorage
      localStorage.setItem('toggleState', toggleSwitch.checked);
      localStorage.setItem('theme', currentTheme);
    })
    }

    setInterval(interval(), 1000)
    
})()