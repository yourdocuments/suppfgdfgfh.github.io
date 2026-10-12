SNK SUPPORT - COMPLETE (web + APK)
==================================
Folder structure:
  index.html, app.css, ui.js, manifest.json, sw.js, icons   -> main site (PWA)
  ops-k7x2q/index.html                                      -> control room (secret path, login ekhane-i)
  firebase/data.js, auth.js, config.js                      -> apnar Firebase code (same, sudhu comment ek line)
  firestore.rules                                           -> Firebase Console > Firestore > Rules-e paste + Publish
  .github/workflows/build-apk.yml + package.json + capacitor.config.json -> APK auto build

UPLOAD
1. Repo-r root-e sob file upload korun (.github folder shoho). Ager index.html replace hobe. Ager admin/ folder DELETE korun.
   Ager firebase/ folder-e apnar nijer file thakle oigulo-i rakhte paren.
2. firestore.rules publish korun.
3. Install: site-e upore "App install korun" bar ashbe (Android=1 tap, iPhone=Share > Add to Home Screen). Settings > Pages ON thakle site live. Control room: /ops-k7x2q/ (site-er logo 5 bar tap korleo khole)  (super admin: Firebase email/password diye login)
4. Super admin > Team > protita member Save korun > "Create staff login".

APK: push korle GitHub > Actions > Build APK > Artifacts > app-debug.apk
Cache atke thakle Ctrl+Shift+R.

PREMIUM SUPPORT
- Customer chat-e 'Problem report' form (website + purchase/website issue + contact), 📎 screenshot, 🖥 screen share.
- Team control room > Inbox > chat khule 'Screen share chai' > customer Allow dile 'Screen dekhun'.
- Screen share shudhu desktop browser-e (Chrome/Edge/Firefox). Phone-e screenshot ba video call.
- firebase/data.js-e send() e img/kind/issue/site add kora hoyeche; apnar data.js-e ei ek line bodle nite hobe (ba ei zip-er data.js use korun).
- firestore.rules abar Publish korun (rtc rule add hoyeche).
