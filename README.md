# AV Translator 2.0

Flutter Android app for Japanese -> Indonesian subtitle translation, SRT/VTT workflow, and video playback.

## Build from HP
1. Upload the contents of this folder to the root of a GitHub repository.
2. Open Actions -> Build AV Translator APK -> Run workflow.
3. Download artifact `AV-Translator-APK`.

## Groq security
Do not put your Groq API key in `lib/main.dart`, APK, or GitHub source. Deploy `backend/` to a Node.js host and set `GROQ_API_KEY` in the host's secret/environment settings. Then configure the app's backend URL.
