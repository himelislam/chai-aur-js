document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const fileInput = document.getElementById('fileInput');
    const languageSelect = document.getElementById('languageSelect');
    const fileIdElement = document.getElementById('fileId');
    const statusText = document.getElementById('statusText');
    const downloadButton = document.getElementById('downloadButton');
    const statusSection = document.getElementById('statusSection');
  
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('language', languageSelect.value);
  
    try {
      // Upload the file
      const uploadResponse = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!uploadResponse.ok) {
        throw new Error('Failed to upload file');
      }
  
      const { fileId } = await uploadResponse.json();
      fileIdElement.textContent = fileId;
      statusSection.classList.remove('hidden');
  
      // Check the status periodically
      const checkStatus = async () => {
        const statusResponse = await fetch(`http://localhost:3000/upload/${fileId}`);
        if (!statusResponse.ok) {
          throw new Error('Failed to check status');
        }
  
        const { status, translatedFile } = await statusResponse.json();
        console.log(status, 'statusResponse');
        statusText.textContent = status.status;
  
        if (status.status === 'completed') {
          // Show the download button
          downloadButton.classList.remove('hidden');
          downloadButton.onclick = () => {
            window.location.href = `http://localhost:3000/download/${fileId}`;
          };
        } else {
          // Check status again after 5 seconds
          setTimeout(checkStatus, 5000);
        }
      };
  
      checkStatus();
    } catch (error) {
      console.error('Error:', error);
      statusText.textContent = 'Error: ' + error.message;
    }
  });


  // Language data from provided JSON
  const languages = [
    {
      "code": "en",
      "name": "English"
    },
    {
      "code": "sq",
      "name": "Albanian"
    },
    {
      "code": "ar",
      "name": "Arabic"
    },
    {
      "code": "az",
      "name": "Azerbaijani"
    },
    {
      "code": "eu",
      "name": "Basque"
    },
    {
      "code": "bn",
      "name": "Bengali"
    },
    {
      "code": "bg",
      "name": "Bulgarian"
    },
    {
      "code": "ca",
      "name": "Catalan"
    },
    {
      "code": "zh",
      "name": "Chinese"
    },
    {
      "code": "zt",
      "name": "Chinese (traditional)"
    },
    {
      "code": "cs",
      "name": "Czech"
    },
    {
      "code": "da",
      "name": "Danish"
    },
    {
      "code": "nl",
      "name": "Dutch"
    },
    {
      "code": "eo",
      "name": "Esperanto"
    },
    {
      "code": "et",
      "name": "Estonian"
    },
    {
      "code": "fi",
      "name": "Finnish"
    },
    {
      "code": "fr",
      "name": "French"
    },
    {
      "code": "gl",
      "name": "Galician"
    },
    {
      "code": "de",
      "name": "German"
    },
    {
      "code": "el",
      "name": "Greek"
    },
    {
      "code": "he",
      "name": "Hebrew"
    },
    {
      "code": "hi",
      "name": "Hindi"
    },
    {
      "code": "hu",
      "name": "Hungarian"
    },
    {
      "code": "id",
      "name": "Indonesian"
    },
    {
      "code": "ga",
      "name": "Irish"
    },
    {
      "code": "it",
      "name": "Italian"
    },
    {
      "code": "ja",
      "name": "Japanese"
    },
    {
      "code": "ko",
      "name": "Korean"
    },
    {
      "code": "lv",
      "name": "Latvian"
    },
    {
      "code": "lt",
      "name": "Lithuanian"
    },
    {
      "code": "ms",
      "name": "Malay"
    },
    {
      "code": "nb",
      "name": "Norwegian"
    },
    {
      "code": "fa",
      "name": "Persian"
    },
    {
      "code": "pl",
      "name": "Polish"
    },
    {
      "code": "pt",
      "name": "Portuguese"
    },
    {
      "code": "ro",
      "name": "Romanian"
    },
    {
      "code": "ru",
      "name": "Russian"
    },
    {
      "code": "sk",
      "name": "Slovak"
    },
    {
      "code": "sl",
      "name": "Slovenian"
    },
    {
      "code": "es",
      "name": "Spanish"
    },
    {
      "code": "sv",
      "name": "Swedish"
    },
    {
      "code": "tl",
      "name": "Tagalog"
    },
    {
      "code": "th",
      "name": "Thai"
    },
    {
      "code": "tr",
      "name": "Turkish"
    },
    {
      "code": "uk",
      "name": "Ukranian"
    },
    {
      "code": "ur",
      "name": "Urdu"
    }
  ]

  // Sort languages alphabetically by name
  languages.sort((a, b) => a.name.localeCompare(b.name));

  // Populate language select options
  const languageSelect = document.getElementById('languageSelect');
  languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    languageSelect.appendChild(option);
  });

  // Rest of your existing application logic
  // (Form submission handling, status updates, etc.)