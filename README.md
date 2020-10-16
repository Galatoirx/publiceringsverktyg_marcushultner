## Setup Notes

1. `npm install` in both frontend and backend directories
2. NOTE!!! Beaware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend.
3. In the backend run `npm run develop`
4. In your backend recreate the folder upload under extensions, then in the upload folder create the config folder, in the config folder create settings.json file with the following structure.
5. `{`
   `"provider": "cloudinary",`
   `"providerOptions": { "cloud_name": "xxxx",`
   `"api_key": "xxxxxx",`
   `"api_secret": "xxx" }`
   `}`
   Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudnairy
6. NOTE!!! In your frontend, change settings for student-portfolio/student_frontend/src/pages/contact.js, the settings for form action must be specifically be yours that you recieved from fromspree
7. In the frontend run `gatsby develop`
8. To use the git make file, please ensure that there are only tabs and no spaces. You can control this with the following add-on "Space Cadet"
