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