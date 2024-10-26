// Initialize Dropbox SDK
const DROPBOX_APP_KEY = '6v4766eliatlmbu'; // Replace with your actual Dropbox App Key
const REDIRECT_URI = 'http://127.0.0.1:5500/dropbox/'; // The URI to redirect to after authentication

// Create an instance of Dropbox with no access token initially
let dropbox = new Dropbox.Dropbox({ clientId: DROPBOX_APP_KEY });

// Function to handle authentication
function authenticate() {
    const authUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${DROPBOX_APP_KEY}&response_type=token&redirect_uri=${REDIRECT_URI}`;
    window.location.href = authUrl;
}

// Function to extract the access token from URL hash after redirect
function getAccessTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}

// Store the access token after authentication
const accessToken = getAccessTokenFromUrl();
if (accessToken) {
    dropbox = new Dropbox.Dropbox({ accessToken: accessToken });
    console.log('Authenticated successfully');
    // Optionally, you can remove the hash from the URL
    window.history.replaceState({}, document.title, window.location.pathname);
}

// Handle file input and upload to Dropbox
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    // Check if the access token is set
    if (!accessToken) {
        authenticate(); // Redirect for authentication
        return;
    }

    console.log("uploading....");

    // Upload the file to Dropbox
    // dropbox.filesUpload({ path: '/' + file.name, contents: file })
    //     .then(response => {
    //         console.log('File uploaded successfully:', response);
    //         // After the file is uploaded, get a shareable link
    //         return dropbox.sharingCreateSharedLinkWithSettings({ path: response.result.path_lower });
    //     })
    //     .then(linkResponse => {
    //         console.log('Shareable link:', linkResponse.result.url);
    //         alert('Shareable link: ' + linkResponse.result.url);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });

        dropbox.filesUpload({ path: '/' + file.name, contents: file })
        .then(response => {
            console.log('File uploaded successfully:', response);
            // Get a temporary download link
            return dropbox.filesGetTemporaryLink({ path: response.result.path_display });
        })
        .then(linkResponse => {
            console.log('Download link:', linkResponse.result.link);
            alert('Download link: ' + linkResponse.result.link);
        })
        .catch(error => {
            console.error('Error:', error);
            console.error('Full error object:', JSON.stringify(error));
        });
});

// Trigger authentication if the user is not authenticated
if (!accessToken) {
    console.log('User not authenticated, redirecting for authentication...');
    authenticate();
}
