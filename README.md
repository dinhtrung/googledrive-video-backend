# Google-drive-video-streaming-nodejs
This is a small script in nodejs that allow you to watch a video stored into your Google drive directly into your video player.

### Client Secret file configuration

```json
{
  "web": {
    "project_id": "videoportal-192905",
    "client_id": "824071160160-b7clga6gs94g6moca0rdu3o9fg5qon5n.apps.googleusercontent.com",
    "client_secret": "Mk8V2rTqX5_a1Tki7HB79Hdu",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "redirect_uris": ["http://127.0.0.1:8998/code"]
  }
}
```

### Install
You need only to install all the dependencies typing this command:
```bash
npm install
```


### Usage
Just type this command to startup the script:
```bash
node ./app.js
```
Now that the server is started you can start watching your video or download it.

#### Streaming
Paste this link into your player to start watching the video in streaming
```bash
http://127.0.0.1:8998/<google-drive-video-id>
```

#### File Info
Paste this link into your player to start watching the video in streaming
```bash
http://127.0.0.1:8998/<google-drive-video-id>/info
```

#### File Listing

Paste this link into your player to start watching the video in streaming
```bash
http://127.0.0.1:8998/
```


#### Download
To download it, type this url into a new broser tab
```bash
http://127.0.0.1:8998/<google-drive-video-id>/download
```
if you want you can specify the parameter p, that indicate in percentage what portion of video will be skipped.
For example to start downloading the video from half you should use this link

```bash
http://127.0.0.1:8998/<google-drive-video-id>/download?p=50
```
You can even use the parameter c, that indicate from what chunk the download must be started.
To stop the downloading process use this url:
```bash
http://127.0.0.1:8998/<google-drive-video-id>/download_stop
```
