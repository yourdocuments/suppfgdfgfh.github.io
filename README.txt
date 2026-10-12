SNK SUPPORT - COMPLETE (web + APK)
==================================
Folder structure:
  index.html, app.css, ui.js, manifest.json, sw.js, icons   -> main site (PWA)
  admin/index.html                                          -> admin dashboard (login ekhane-i)
  firebase/data.js, auth.js, config.js                      -> apnar Firebase code (same, sudhu comment ek line)
  firestore.rules                                           -> Firebase Console > Firestore > Rules-e paste + Publish
  .github/workflows/build-apk.yml + package.json + capacitor.config.json -> APK auto build

UPLOAD
1. Repo-r root-e sob file upload korun (.github folder shoho). Ager index.html ar admin/ replace hobe.
   Ager firebase/ folder-e apnar nijer file thakle oigulo-i rakhte paren.
2. firestore.rules publish korun.
3. Settings > Pages ON thakle site live. Admin: /admin/  (super admin: Firebase email/password diye login)
4. Super admin > Team > protita member Save korun > "Create staff login".

APK: push korle GitHub > Actions > Build APK > Artifacts > app-debug.apk
Cache atke thakle Ctrl+Shift+R.
