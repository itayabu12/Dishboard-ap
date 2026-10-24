const $=s=>document.querySelector(s),main=$('#main'),root=document.documentElement;
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
function h(t,a={},...c){const e=document.createElement(t);for(const k in a){const v=a[k];if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else if(k==='class')e.className=v;else if(v!==false&&v!=null)e.setAttribute(k,v===true?'':v)}c.flat().forEach(x=>{if(x!=null&&x!=='')e.append(x instanceof Node?x:document.createTextNode(String(x)))});return e}
const P={recipes:'M11 9H9V2H7v7H5V2H3v7c0 2.1 1.6 3.8 3.6 4v9h2.8v-9c2-.2 3.6-1.9 3.6-4V2h-2v7zm5-3v8h2.5v8H21V2c-2.8 0-5 2.2-5 4z',heart:'M12 21.4 10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.6 11.5z',home:'M12 3 2 12h3v8h5v-6h4v6h5v-8h3z',plus:'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z',user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z',access:'M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18z',gear:'M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22L2.74 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.12.22.37.3.61.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.49 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.01-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z'};
Object.assign(P,{recipes:'M4 5c3-1 5-1 8 1 3-2 5-2 8-1v14c-3-1-5-1-8 1-3-2-5-2-8-1z M12 6v14',discover:'M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z M8 3h8 M9 14h6 M13 12l2 2-2 2',home:'M4 11l8-7 8 7 M6 10v10h12V10 M10 20v-6h4v6',plus:'M12 5v14M5 12h14',saved:'M6 4h12v17l-6-4-6 4z',heart:'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',close:'M6 6l12 12M18 6L6 18',bowl:'M4 12h16a8 8 0 0 1-16 0z M9 8c0-1.5 1-1.5 1-3 M13 8c0-1.5 1-1.5 1-3',access:'M12 5.2a1.2 1.2 0 1 0 .01 0 M5 9l7 1.5L19 9 M12 10.5V15 M9 20l3-5 3 5',gear:'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8'});
function ic(n){const N='http://www.w3.org/2000/svg',s=document.createElementNS(N,'svg'),p=document.createElementNS(N,'path');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('aria-hidden','true');p.setAttribute('d',P[n]);s.append(p);return s}
const D={recipes:['מתכונים','Recipes'],favs:['מועדפים','Favorites'],home:['ראשי','Home'],add:['הוספה','Add'],acc:['חשבון','Account'],
a11y:['נגישות','Accessibility'],contrast:['ניגודיות גבוהה','High contrast'],bigtext:['טקסט גדול','Larger text'],spacing:['מרווחים רחבים','Wider spacing'],close:['סגירה','Close'],skip:['דלג לתוכן הראשי','Skip to main content'],
search:['חיפוש מתכונים או מצרכים','Search recipes or ingredients'],all:['הכול','All'],found:['נמצאו {n} מתכונים','{n} recipes found'],
ingH:['מצרכים','Ingredients'],ingF:['מצרכים (כל מצרך בשורה נפרדת)','Ingredients (one per line)'],method:['אופן הכנה','Method'],prep:['זמן הכנה (בדקות)','Prep time (minutes)'],cook:['זמן בישול (בדקות)','Cook time (minutes)'],diff:['רמת קושי','Difficulty'],easy:['קל','Easy'],med:['בינוני','Medium'],hard:['מאתגר','Hard'],
cats:['קטגוריות','Categories'],vegan:['טבעוני','Vegan'],veg:['צמחוני','Vegetarian'],meat:['בשרי','Meat'],pastry:['מאפים','Pastry'],quick:['מהיר','Quick'],budget:['חסכוני','Budget'],
title:['שם המתכון','Recipe title'],img:['תמונה (לא חובה)','Image (optional)'],imgH:['JPEG, PNG או WebP עד 3MB. התמונה נשמרת מחדש כדי להסיר מידע נסתר.','JPEG, PNG or WebP, up to 3 MB. Images are re-encoded to remove hidden data.'],
alt:['תיאור התמונה (טקסט חלופי)','Image description (alt text)'],altH:['חובה כשמוסיפים תמונה. תארו מה רואים בה, עבור מי שלא רואה אותה.','Required with an image. Describe it for people who can’t see it.'],
vid:['קישור לסרטון מאינסטגרם או מפייסבוק (לא חובה)','Instagram or Facebook video link (optional)'],vidH:['הדביקו קישור ציבורי, למשל https://www.instagram.com/reel/…','Paste a public link, e.g. https://www.instagram.com/reel/…'],
publish:['פרסום המתכון','Publish recipe'],watch:['צפייה בסרטון','Watch video'],by:['מאת','by'],mins:['דק׳ בסך הכול','min total'],fav:['מועדף','Favorite'],
noFav:['עוד לא שמרתם מתכונים. לחצו על "מועדף" בעמוד המתכונים.','No favorites yet. Tap “Favorite” on the Recipes page.'],mypage:['העמוד שלי','My page'],myRec:['המתכונים שלי','My recipes'],noMine:['עוד לא שיתפתם מתכונים. אפשר להתחיל בלשונית ההוספה.','You haven’t shared any recipes yet. Start from the Add tab.'],hi:['שלום, ','Hi, '],
del:['מחיקה','Delete'],delRT:['למחוק את המתכון?','Delete this recipe?'],delRB:['המתכון יימחק לצמיתות.','This recipe will be permanently deleted.'],cancel:['ביטול','Cancel'],
login:['התחברות','Log in'],signup:['הרשמה','Sign up'],email:['אימייל','Email'],pw:['סיסמה','Password'],pwH:['לפחות 10 תווים.','At least 10 characters.'],name:['שם תצוגה','Display name'],
termsAcc:['אני מאשר/ת את תנאי השימוש ואת מדיניות הפרטיות','I accept the Terms of Service and Privacy Policy'],google:['המשך עם Google','Continue with Google'],gNote:['התחברות עם Google דורשת מזהה OAuth ושרת, והיא מצייַן מקום בגרסת הדגמה זו.','Google sign-in needs an OAuth client ID and a server. It is a placeholder in this prototype.'],
logout:['התנתקות','Log out'],delAcc:['מחיקת החשבון שלי','Delete my account'],delAccT:['למחוק את החשבון לצמיתות?','Delete your account permanently?'],delAccB:['החשבון, המועדפים וכל המתכונים והתמונות שהעליתם יימחקו לצמיתות. אי אפשר לבטל.','Your account, favorites and every recipe and image you uploaded will be permanently deleted. This can’t be undone.'],delAll:['מחיקת הכול','Delete everything'],
dataNote:['השליטה בנתונים שלכם: מחיקת החשבון מסירה את הפרופיל, המועדפים וכל מה שהעליתם.','You control your data: deleting your account removes your profile, favorites and everything you uploaded.'],need:['כדי להמשיך יש להתחבר או להירשם.','Please log in or sign up to continue.'],
privacy:['מדיניות פרטיות','Privacy Policy'],terms:['תנאי שימוש','Terms of Service'],cookies:['הגדרות עוגיות','Cookie settings'],ph:['דף מציין מקום. יש להחליף בטקסט שנבדק על ידי יועץ משפטי לפני ההשקה.','Placeholder page. Replace with text reviewed by your legal adviser before launch.'],
secP:['איזה מידע נאסף|שימוש במידע|עוגיות ואחסון|הזכויות שלך|יצירת קשר','What we collect|How we use it|Cookies and storage|Your rights|Contact'],secT:['שימוש ב־Dishboard|התוכן שלך ורישיון|שימוש מותר|סיום שימוש|יצירת קשר','Using Dishboard|Your content and licence|Acceptable use|Termination|Contact'],
ckT:['בחירות העוגיות שלך','Your cookie choices'],ckP:['אנחנו משתמשים באחסון הכרחי כדי לשמור אותך מחובר/ת. קטגוריות אופציונליות כבויות אלא אם תפעילו אותן. אפשר לשנות בכל עת.','We use strictly necessary storage to keep you signed in. Optional categories are off unless you turn them on. You can change this any time.'],
accAll:['אישור הכול','Accept all'],reject:['דחיית לא הכרחיות','Reject non-essential'],custom:['התאמה אישית','Customize'],nec:['הכרחיות (התחברות והבחירה הזו) – תמיד פעילות','Strictly necessary (login, this choice) – always on'],prefs:['העדפות (זכירת שפה ונגישות)','Preferences (remember language and accessibility)'],ana:['אנליטיקה (כבויה; גרסת הדגמה זו לא מפעילה)','Analytics (off; this prototype sets none)'],saveCh:['שמירת הבחירות','Save my choices'],ckOk:['העדפות העוגיות נשמרו.','Cookie preferences saved.'],ckL:['בחרו קטגוריות עוגיות','Choose cookie categories'],
fix:['יש לתקן את הבעיות הבאות ({n}):','Please fix these problems ({n}):'],eTitle:['יש להזין שם בן 3 עד 80 תווים.','Enter a title of 3 to 80 characters.'],eIng:['יש להוסיף לפחות מצרך אחד, כל מצרך בשורה.','List at least one ingredient, one per line.'],eMeth:['יש לתאר את אופן ההכנה (לפחות 10 תווים).','Describe the method (at least 10 characters).'],eTime:['יש להזין זמן בדקות (0 עד 600).','Enter a time in minutes (0 to 600).'],
eAlt:['טקסט חלופי הוא חובה כשמוסיפים תמונה (לפחות 5 תווים).','Alt text is required with an image (at least 5 characters).'],eImgT:['מותרות רק תמונות JPEG, PNG או WebP.','Only JPEG, PNG or WebP images are allowed.'],eImgS:['התמונה חייבת להיות קטנה מ־3MB.','Image must be under 3 MB.'],eImgR:['לא ניתן לקרוא את התמונה. נסו קובץ אחר.','That image could not be read. Try another file.'],
eVid:['הקישור חייב להיות כתובת https מאינסטגרם או מפייסבוק.','The link must be an https address from Instagram or Facebook.'],eName:['יש להזין שם תצוגה של 2 עד 40 תווים.','Enter a display name of 2 to 40 characters.'],eEmail:['יש להזין כתובת אימייל תקינה.','Enter a valid email address.'],ePw:['הסיסמה חייבת להכיל לפחות 10 תווים.','Use a password of at least 10 characters.'],eTerms:['יש לאשר את תנאי השימוש ומדיניות הפרטיות.','Please accept the Terms and Privacy Policy.'],
eDup:['לא ניתן ליצור חשבון עם הפרטים האלה. נסו להתחבר.','We couldn’t create an account with those details. Try logging in.'],eBad:['האימייל או הסיסמה שגויים.','Email or password is incorrect.'],eLock:['יותר מדי ניסיונות. המתינו 30 שניות.','Too many attempts. Wait 30 seconds.'],
okPub:['המתכון פורסם.','Your recipe is published.'],okDel:['המתכון נמחק.','Recipe deleted.'],okOut:['התנתקתם.','You’re logged out.'],okAcc:['החשבון והנתונים נמחקו.','Your account and data have been deleted.'],okIn:['ברוכים הבאים!','Welcome!'],settings:['הגדרות','Settings'],langL:['שפה','Language'],heroT:['מה מבשלים היום?','What’s cooking today?'],heroS:['מתכונים פשוטים, טעימים וחסכוניים מקהילת הסטודנטים.','Simple, tasty, budget-friendly recipes from the student community.']};
Object.assign(D,{discover:['גלו','Discover'],saved:['אוסף','Collection'],save:['שמירה','Save'],skipB:['דילוג','Skip'],swipeH:['החליקו ימינה כדי לשמור ושמאלה כדי לדלג. אפשר גם להשתמש בחצים במקלדת או בכפתורים.','Swipe right to save, left to skip. You can also use the arrow keys or the buttons.'],pickT:['לאן לשלוח את המתכון?','Where should this go?'],pickN:['או שם לתיקייה חדשה','Or name a new folder'],addF:['יצירה ושמירה','Create and save'],savedTo:['נשמר ב־{n}.','Saved to {n}.'],skipped:['דולג.','Skipped.'],left:['נותרו {n} מתכונים לדפדוף','{n} recipes left to browse'],deckEnd:['ראיתם את כל המתכונים לעכשיו.','You’ve seen all the recipes for now.'],again:['להתחיל מחדש','Start over'],emptyCol:['עוד אין כאן כלום. החליקו ימינה במסך הגלו כדי לשמור מתכונים.','Nothing here yet. Swipe right on Discover to save recipes.'],rm:['הסרה','Remove']});
const STILL=`<svg viewBox='0 0 200 133' preserveAspectRatio='xMidYMid slice' role='presentation'><g fill='none' stroke='#8a7a5a' stroke-width='2' stroke-linecap='round' opacity='.55'><path d='M85 40c-6-8 6-12 0-22'/><path d='M100 38c-6-8 6-12 0-24'/><path d='M115 40c-6-8 6-12 0-22'/></g><path d='M50 68h100c0 26-20 44-50 44S50 94 50 68z' fill='#a8643a'/><ellipse cx='100' cy='68' rx='50' ry='9' fill='#e6b95c'/><ellipse cx='100' cy='68' rx='50' ry='9' fill='none' stroke='#8a4f2b' stroke-width='2'/><circle cx='86' cy='66' r='4' fill='#c8452f'/><circle cx='108' cy='69' r='3.5' fill='#6d9a4e'/><circle cx='122' cy='66' r='3' fill='#c8452f'/><path d='M60 120h80' stroke='#8a4f2b' stroke-width='3' stroke-linecap='round'/><g transform='translate(30 100)'><circle r='11' fill='#c8452f'/><path d='M-4-10c2-4 6-4 8 0' stroke='#4f7a3a' stroke-width='2.5' fill='none'/></g><ellipse cx='168' cy='104' rx='13' ry='10' fill='#ecc84a' transform='rotate(-20 168 104)'/><g fill='#5f8a4a'><ellipse cx='160' cy='70' rx='10' ry='4' transform='rotate(-35 160 70)'/><ellipse cx='172' cy='60' rx='10' ry='4' transform='rotate(-70 172 60)'/><ellipse cx='150' cy='58' rx='9' ry='3.5' transform='rotate(-5 150 58)'/></g><path d='M165 72c-3 8-4 14-4 22' stroke='#4f7a3a' stroke-width='2' fill='none'/></svg>`;
const HERO=`<svg viewBox='0 0 600 150' role='presentation'><rect y='128' width='600' height='22' fill='#d8b98a'/><rect y='128' width='600' height='3' fill='#b8935f'/><g fill='none' stroke='#9a8d70' stroke-width='3' stroke-linecap='round' opacity='.55'><path d='M70 58c-8-10 8-14 0-26'/><path d='M92 56c-8-10 8-14 0-28'/><path d='M114 58c-8-10 8-14 0-26'/></g><path d='M38 72h104v44a12 12 0 0 1-12 12H50a12 12 0 0 1-12-12z' fill='#5f7a52'/><rect x='32' y='66' width='116' height='9' rx='4' fill='#4a6240'/><circle cx='28' cy='84' r='5' fill='#4a6240'/><circle cx='152' cy='84' r='5' fill='#4a6240'/><path d='M170 128L206 46' stroke='#a4703c' stroke-width='7' stroke-linecap='round'/><ellipse cx='210' cy='38' rx='11' ry='15' fill='#b9824a' transform='rotate(18 210 38)'/><circle cx='258' cy='108' r='19' fill='#c8452f'/><circle cx='294' cy='114' r='15' fill='#d4533a'/><circle cx='273' cy='88' r='14' fill='#c8452f'/><g stroke='#4f7a3a' stroke-width='3' fill='none' stroke-linecap='round'><path d='M251 91c4-4 9-4 14 0M288 101c3-3 7-3 11 0M267 76c3-3 7-3 11 0'/></g><path d='M350 86c14 8 22 22 22 36 0 6-10 8-22 8s-22-2-22-8c0-14 8-28 22-36z' fill='#f4ecd6' stroke='#cdbf99' stroke-width='2'/><path d='M350 86v-8' stroke='#cdbf99' stroke-width='3' stroke-linecap='round'/><ellipse cx='418' cy='114' rx='26' ry='17' fill='#ecc84a' transform='rotate(-12 418 114)'/><ellipse cx='410' cy='108' rx='9' ry='4' fill='#f6e08a' transform='rotate(-12 410 108)'/><g fill='#5f8a4a'><ellipse cx='488' cy='96' rx='13' ry='6' transform='rotate(-40 488 96)'/><ellipse cx='506' cy='82' rx='13' ry='6' transform='rotate(-75 506 82)'/><ellipse cx='474' cy='80' rx='12' ry='5.5' transform='rotate(-10 474 80)'/></g><path d='M480 128c4-14 8-24 12-34' stroke='#4f7a3a' stroke-width='3' fill='none' stroke-linecap='round'/><circle cx='556' cy='108' r='20' fill='#c58a4a'/><path d='M556 88c-8 10-8 30 0 40M556 88c8 10 8 30 0 40' stroke='#a56f35' stroke-width='2' fill='none'/><path d='M556 88v-8' stroke='#a56f35' stroke-width='3' stroke-linecap='round'/></svg>`;
const PAT=`<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180' fill='none' stroke='#355a3a' stroke-opacity='.12' stroke-width='1.6' stroke-linecap='round'><path d='M20 40c8-14 22-18 30-14-4 12-16 20-30 14zM20 40l-8 10'/><path d='M120 30c6 10 4 22-4 28M120 30c-8 6-10 18-4 28'/><circle cx='140' cy='120' r='12'/><path d='M140 108v24M128 120h24'/><path d='M40 130c6 10 4 20 0 28M40 130c-6 10-4 20 0 28'/><path d='M80 90q10-16 20 0'/></svg>`;
document.body.style.backgroundImage='url("data:image/svg+xml,'+encodeURIComponent(PAT)+'")';
function ph(r){const d=h('div',{class:'ph c-'+(r.cats[0]||'x'),'aria-hidden':'true'});d.innerHTML=STILL;return d}
function heroArt(){const d=h('div',{class:'art','aria-hidden':'true'});d.innerHTML=HERO;return d}
Object.assign(D,{remember:['השאירו אותי מחובר/ת במכשיר הזה','Keep me signed in on this device'],fridgeL:['מה יש לך במקרר?','What’s in your fridge?'],fridgeH:['רשמו מצרכים מופרדים בפסיקים ונמצא מתכונים שמתאימים. בקרוב: צילום המקרר.','List ingredients separated by commas and we’ll find matching recipes. Coming soon: photograph your fridge.'],bySearch:['חיפוש חופשי','Search'],byFridge:['מה יש במקרר','From my fridge'],modeL:['שיטת חיפוש','Search mode'],have:['יש לך','You have'],of:['מתוך','of'],miss:['חסר','Missing'],fridgeH2:['כתבו מה יש לכם במקרר כדי לראות מתכונים מתאימים.','Type what you have to see matching recipes.']});
let lang='he';
const t=(k,n)=>D[k][lang==='he'?0:1].replace('{n}',n);
const pers=(k,v)=>{const c=store.get('fm_consent',null);if(c&&c.pref)store.set(k,v)};
{const c=store.get('fm_consent',null);if(c&&c.pref){lang=store.get('fm_lang','he');['contrast','size','font'].forEach(k=>{const v=store.get('fm_'+k,null);if(v)root.setAttribute('data-'+k,v)})}}
const pref=(k,v)=>{root.setAttribute('data-'+k,v);pers('fm_'+k,v)};
function applyLang(){root.lang=lang;root.dir=lang==='he'?'rtl':'ltr';[['#ab','a11y','access'],['#sb','settings','gear']].forEach(([s,k,i])=>{const a=$(s);a.setAttribute('aria-label',t(k));a.title=t(k);a.replaceChildren(ic(i))});$('#skip').textContent=t('skip');$('#tabs').setAttribute('aria-label','Dishboard')}
function setLang(l){lang=l;pers('fm_lang',lang);applyLang();go();if($('.cookie'))banner(true)}
$('#sb').onclick=()=>dlg(t('settings'),h('div',{role:'group','aria-label':t('langL')},h('p',{class:'meta'},t('langL')),h('div',{class:'row'},...[['he','עברית'],['en','English']].map(([l,n])=>h('button',{type:'button',class:'btn alt',lang:l,'aria-pressed':String(lang===l),onclick:()=>{setLang(l);document.querySelector('dialog')?.close()}},n))),acctBox()),[[t('close'),null]]);
function acctBox(){const u=me(),box=h('div',{class:'acct'},h('h3',{},t('acc')));if(u){const a=V.acc(u);a.querySelector('h1')?.remove();a.addEventListener('click',e=>{if(e.target.closest('button'))setTimeout(()=>document.querySelector('dialog')?.close(),0)});box.append(a)}else box.append(h('div',{class:'row'},...[['in','login'],['up','signup']].map(([m,l])=>h('button',{type:'button',class:'btn'+(m==='up'?' alt':''),onclick:e=>{mode=m;e.currentTarget.closest('dialog').close();nav('home')}},t(l)))));return box}
$('#brand').onclick=e=>{e.preventDefault();nav('recipes')};
$('#skip').onclick=e=>{e.preventDefault();main.focus()};
const SEED=[
{id:'s1',uid:'',by:'fitme',title:'קארי חומוס וקוקוס',desc:'מטגנים בצל ושום, מוסיפים משחת קארי, חומוס, עגבניות משומרות וחלב קוקוס. מבשלים 15 דקות ומגישים עם אורז.',ing:['קופסת חומוס','קופסת חלב קוקוס','קופסת עגבניות','בצל אחד','2 כפות משחת קארי'],prep:10,cook:20,diff:'easy',cats:['vegan','budget'],img:'',alt:'',vid:'',tr:{en:{title:'Chickpea Coconut Curry',desc:'Fry onion and garlic, add curry paste, chickpeas, tinned tomatoes and coconut milk. Simmer 15 minutes. Serve with rice.',ing:['1 tin chickpeas','1 tin coconut milk','1 tin tomatoes','1 onion','2 tbsp curry paste']}}},
{id:'s2',uid:'',by:'fitme',title:'פסטה במחבת אחת',desc:'מטגנים נקניקיות פרוסות, מוסיפים פסטה, רסק עגבניות ומים. מכסים ומבשלים כ־12 דקות עד שהפסטה רכה.',ing:['4 נקניקיות','200 גרם פסטה','400 גרם רסק עגבניות','500 מ״ל מים'],prep:5,cook:20,diff:'easy',cats:['meat','quick'],img:'',alt:'',vid:'',tr:{en:{title:'One-Pan Sausage Pasta',desc:'Brown sliced sausages, add pasta, passata and water. Cover and simmer about 12 minutes until tender.',ing:['4 sausages','200 g pasta','400 g passata','500 ml water']}}},
{id:'s3',uid:'',by:'fitme',title:'שבלולי קינמון למעונות',desc:'מרדדים בצק מוכן, מורחים חמאה, סוכר וקינמון, מגלגלים, פורסים ואופים ב־180 מעלות 20 דקות.',ing:['אריזת בצק שמרים','50 גרם חמאה','60 גרם סוכר','2 כפיות קינמון'],prep:20,cook:20,diff:'med',cats:['pastry','veg'],img:'',alt:'',vid:'',tr:{en:{title:'Dorm-Room Cinnamon Rolls',desc:'Roll out ready dough, spread with butter, sugar and cinnamon, roll, slice and bake at 180 °C for 20 minutes.',ing:['1 pack yeast dough','50 g butter','60 g sugar','2 tsp cinnamon']}}}];
let db=store.get('fm_db',null)||{users:[],recipes:SEED};db.recipes.forEach(r=>{if(r.by==='fitme')r.by='Dishboard'});const save=()=>store.set('fm_db',db);
let sess=null;try{sess=JSON.parse(sessionStorage.getItem('fm_s'))}catch(e){}
function restore(){const rm=store.get('fm_rem',null);if(rm&&rm.exp>Date.now()){const u=db.users.find(x=>x.id===rm.uid);if(u&&u.tok&&u.tok===rm.tok){sess={uid:u.id,exp:Date.now()+18e5};return true}}return false}
const me=()=>{if(!sess||sess.exp<Date.now()){sess=null;if(!restore())return null}sess.exp=Date.now()+18e5;try{sessionStorage.setItem('fm_s',JSON.stringify(sess))}catch(e){}const u=db.users.find(x=>x.id===sess.uid);if(u){u.cols=u.cols||(u.fav&&u.fav.length?{'מועדפים':u.fav}:{});u.skip=u.skip||[]}return u||null};
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b))),unb=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function hash(pw,salt){const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']);return b64(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt,iterations:310000},k,256))}
const clean=(s,n)=>String(s||'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F<>]/g,'').trim().slice(0,n);
const CATS=['vegan','veg','meat','pastry','quick','budget'],EM={vegan:'🥗',veg:'🧀',meat:'🍝',pastry:'🥐',quick:'🍳',budget:'🥘'};
let route=me()?'home':'recipes',STATUS='',mode='in',fails=0,lock=0;
function nav(r){route=r;go()}
function dlg(title,body,acts){const d=h('dialog',{'aria-labelledby':'dt'},h('h2',{id:'dt'},title),body,h('div',{class:'row'},...acts.map(([x,fn,c])=>h('button',{type:'button',class:'btn '+(c||''),onclick:async()=>{if(!fn||await fn(d)!==false)d.close()}},x))));d.addEventListener('close',()=>d.remove());document.body.append(d);d.showModal()}
$('#ab').onclick=()=>{const tg=(k,v,l)=>h('button',{type:'button',class:'btn alt','aria-pressed':String(root.dataset[k]===v),onclick:e=>{const on=root.dataset[k]!==v;pref(k,on?v:'normal');e.currentTarget.setAttribute('aria-pressed',String(on))}},t(l));dlg(t('a11y'),h('div',{class:'row'},tg('contrast','high','contrast'),tg('size','large','bigtext'),tg('font','wide','spacing')),[[t('close'),null]])};
function banner(force){if(!force&&store.get('fm_consent',null))return;$('.cookie')?.remove();
const pf=h('input',{type:'checkbox',id:'cpf'}),an=h('input',{type:'checkbox',id:'can'});
const done=(p,a)=>{store.set('fm_consent',{pref:p,ana:a,t:Date.now()});['contrast','size','font'].forEach(k=>p?store.set('fm_'+k,root.dataset[k]||'normal'):store.del('fm_'+k));p?store.set('fm_lang',lang):store.del('fm_lang');$('.cookie').remove();STATUS=t('ckOk');go()};
const opts=h('fieldset',{hidden:true},h('legend',{},t('ckL')),h('label',{class:'cb'},h('input',{type:'checkbox',checked:true,disabled:true}),t('nec')),h('label',{class:'cb',for:'cpf'},pf,t('prefs')),h('label',{class:'cb',for:'can'},an,t('ana')),h('button',{class:'btn',type:'button',onclick:()=>done(pf.checked,an.checked)},t('saveCh')));
document.body.append(h('section',{class:'cookie','aria-labelledby':'ckt'},h('h2',{id:'ckt'},t('ckT')),h('p',{},t('ckP')),h('div',{class:'row'},h('button',{class:'btn',type:'button',onclick:()=>done(true,true)},t('accAll')),h('button',{class:'btn alt',type:'button',onclick:()=>done(false,false)},t('reject')),h('button',{class:'btn alt',type:'button','aria-expanded':'false',onclick:e=>{opts.hidden=!opts.hidden;e.currentTarget.setAttribute('aria-expanded',String(!opts.hidden))}},t('custom'))),opts))}
function fld(l,id,ctl,hint){return h('div',{},h('label',{for:id},l),hint?h('p',{id:id+'h',class:'hint'},hint):'',ctl,h('p',{id:id+'e',class:'err',hidden:true}))}
const sum=()=>h('div',{class:'sum',role:'alert',tabindex:'-1',hidden:true});
function showErrs(f,errs){f.querySelectorAll('.err').forEach(p=>{p.hidden=true;p.textContent=''});f.querySelectorAll('[aria-invalid]').forEach(x=>x.removeAttribute('aria-invalid'));const s=f.querySelector('.sum');s.replaceChildren();s.hidden=!errs.length;if(!errs.length)return;
s.append(h('p',{},t('fix',errs.length)));const ul=h('ul',{});errs.forEach(({id,msg})=>{const el=f.querySelector('#'+id),p=f.querySelector('#'+id+'e');if(el){el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby',id+'e')}if(p){p.hidden=false;p.textContent=msg}ul.append(h('li',{},h('a',{href:'#'+id,onclick:v=>{v.preventDefault();el&&el.focus()}},msg)))});s.append(ul);s.focus()}
function vurl(s){try{const u=new URL(s);return u.protocol==='https:'&&/(^|\.)(instagram\.com|facebook\.com|fb\.watch)$/.test(u.hostname)?u.href:''}catch(e){return''}}
const IMG=new RegExp('^data:image/jpeg;base64,[A-Za-z0-9+/=]+$');
function fav(r,b){const u=me();if(!u){STATUS=t('need');return nav('home')}pickFolder(r,u,()=>b.setAttribute('aria-pressed','true'))}
const stem=w=>w.length>3?w.replace(/(ים|ות|ה)$/,''):w,words=s=>s.toLowerCase().split(/[\s,.;:()\-\/]+/).filter(w=>w.length>1).map(stem);
const hit=(ing,f)=>{const a=words(ing),b=words(f);return b.length>0&&b.every(w=>a.some(x=>(x.length>2&&w.includes(x))||(w.length>2&&x.includes(w))))};
function rem(u,on){if(on){u.tok=crypto.randomUUID();save();store.set('fm_rem',{uid:u.id,tok:u.tok,exp:Date.now()+2592e6})}}
function deck(u){const have=Object.values(u.cols).flat();return db.recipes.filter(r=>r.uid!==u.id&&!u.skip.includes(r.id)&&!have.includes(r.id))}
function pickFolder(r,u,done){const base=lang==='he'?['לבשל השבוע','ימים עמוסים','אירוח','מתוקים']:['Cook this week','Busy days','Hosting','Sweet things'],names=[...new Set([...Object.keys(u.cols),...base])],nw=h('input',{id:'nf',maxlength:'40',autocomplete:'off'});
const put=(n,e)=>{n=clean(n,40);if(!n)return;u.cols[n]=u.cols[n]||[];if(!u.cols[n].includes(r.id))u.cols[n].push(r.id);save();e.currentTarget.closest('dialog').close();done(n)};
dlg(t('pickT'),h('div',{},h('div',{class:'chips'},...names.map(n=>h('button',{type:'button',class:'btn alt',onclick:e=>put(n,e)},n))),h('label',{for:'nf'},t('pickN')),nw,h('div',{class:'row'},h('button',{type:'button',class:'btn',onclick:e=>put(nw.value,e)},t('addF')))),[[t('cancel'),null,'alt']])}
function card(r,u,ex){const x=(lang!=='he'&&r.tr&&r.tr[lang])||r,ok=/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(r.img||''),fv=u&&Object.values(u.cols).some(a=>a.includes(r.id)),vl=vurl(r.vid);
return h('li',{class:'card'},ok?h('img',{src:r.img,alt:r.alt,loading:'lazy'}):ph(r),h('h2',{},x.title),h('p',{class:'meta'},(r.prep+r.cook)+' '+t('mins')+' · '+t(r.diff)+' · '+t('by')+' '+r.by),h('p',{class:'tags'},...r.cats.map(c=>h('span',{class:'tag'},t(c)))),
ex?h('p',{class:'match'},ex):'',h('details',{},h('summary',{},t('ingH')+' · '+t('method')),h('ul',{},...x.ing.map(i=>h('li',{},i))),h('p',{},x.desc)),
vl?h('a',{class:'btn alt',href:vl,target:'_blank',rel:'noopener noreferrer'},'▶ '+t('watch'),h('span',{class:'sr'},' – '+x.title)):'',
h('div',{class:'row'},h('button',{class:'btn alt',type:'button','aria-pressed':String(!!fv),onclick:e=>fav(r,e.currentTarget)},t('save'),h('span',{class:'sr'},' – '+x.title)),
u&&r.uid===u.id?h('button',{class:'btn alt',type:'button',onclick:()=>dlg(t('delRT'),h('p',{},x.title+' – '+t('delRB')),[[t('del'),()=>{db.recipes=db.recipes.filter(z=>z.id!==r.id);db.users.forEach(z=>{for(const n in (z.cols||{}))z.cols[n]=z.cols[n].filter(i=>i!==r.id)});save();STATUS=t('okDel');go()},'danger'],[t('cancel'),null,'alt']])},t('del'),h('span',{class:'sr'},' – '+x.title)):''))}
const grid=(rs,u,ex)=>h('ul',{class:'grid'},...rs.map(r=>card(r,u,ex&&ex(r))));
async function procImg(f){if(f.size>3e6)throw t('eImgS');const b=new Uint8Array(await f.slice(0,12).arrayBuffer());
if(!((b[0]==255&&b[1]==216&&b[2]==255)||(b[0]==137&&b[1]==80&&b[2]==78&&b[3]==71)||(b[0]==82&&b[1]==73&&b[2]==70&&b[3]==70&&b[8]==87&&b[9]==69)))throw t('eImgT');
let bm;try{bm=await createImageBitmap(f)}catch(e){throw t('eImgR')}
const s=Math.min(1,800/Math.max(bm.width,bm.height)),c=document.createElement('canvas');c.width=Math.round(bm.width*s);c.height=Math.round(bm.height*s);c.getContext('2d').drawImage(bm,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.8)}
const V={
recipes(u){let q='',cat='',fr=[],mode='s';const list=h('div'),cnt=h('p',{role:'status',class:'meta'});
const sc=r=>{const x=(lang!=='he'&&r.tr&&r.tr[lang])||r,m=x.ing.filter(i=>fr.some(f=>hit(i,f)));return{h:m.length,t:x.ing.length,miss:x.ing.filter(i=>!m.includes(i))}};
const draw=()=>{let rs=db.recipes.filter(r=>{const x=(lang!=='he'&&r.tr&&r.tr[lang])||r;return(!cat||r.cats.includes(cat))&&(mode==='f'?sc(r).h>0:(!q||(x.title+' '+x.ing.join(' ')).toLowerCase().includes(q)))});
if(mode==='f')rs=rs.sort((a,b)=>{const A=sc(a),B=sc(b);return B.h/B.t-A.h/A.t||B.h-A.h});
list.replaceChildren(grid(rs,u,mode==='f'?r=>{const s=sc(r);return t('have')+' '+s.h+' '+t('of')+' '+s.t+' '+t('ingH')+(s.miss.length?' · '+t('miss')+': '+s.miss.join(', '):'')}:null));cnt.textContent=mode==='f'&&!fr.length?t('fridgeH2'):t('found',rs.length)};
const chips=h('div',{class:'chips',role:'group','aria-label':t('cats')},...[['','all'],...CATS.map(c=>[c,c])].map(([v,l])=>h('button',{type:'button',class:'chip','aria-pressed':String(v===''),onclick:e=>{cat=v;chips.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));e.currentTarget.setAttribute('aria-pressed','true');draw()}},t(l))));
const sb=h('div',{},h('label',{for:'q'},t('search')),h('input',{type:'search',id:'q',autocomplete:'off',maxlength:'60',oninput:e=>{q=e.target.value.trim().toLowerCase();draw()}})),
fb=h('div',{hidden:true},h('label',{for:'fr'},t('fridgeL')),h('p',{class:'hint',id:'frh'},t('fridgeH')),h('input',{id:'fr','aria-describedby':'frh',autocomplete:'off',maxlength:'200',oninput:e=>{fr=e.target.value.split(/[,;\n]+/).map(s=>s.trim().toLowerCase()).filter(Boolean).slice(0,30);draw()}})),
modes=h('div',{class:'seg',role:'group','aria-label':t('modeL')},...[['s','bySearch'],['f','byFridge']].map(([m,l])=>h('button',{type:'button',class:'chip','aria-pressed':String(m==='s'),onclick:e=>{mode=m;modes.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));e.currentTarget.setAttribute('aria-pressed','true');sb.hidden=m==='f';fb.hidden=m==='s';draw()}},t(l))));
draw();return h('section',{},h('h1',{},t('heroT')),h('p',{class:'lede'},t('heroS')),heroArt(),modes,sb,fb,chips,cnt,list)},
discover(u){const live=h('p',{class:'sr',role:'status'}),info=h('p',{class:'meta',style:'text-align:center'}),
stage=h('div',{class:'stage',tabindex:'0',role:'group','aria-label':t('discover'),onkeydown:e=>{if(e.key==='ArrowRight'){e.preventDefault();act(1)}else if(e.key==='ArrowLeft'){e.preventDefault();act(-1)}}}),
ctl=h('div',{class:'ctl'},h('button',{class:'btn alt',type:'button','aria-label':t('skipB'),onclick:()=>act(-1)},ic('close')),h('button',{class:'btn yes',type:'button','aria-label':t('save'),onclick:()=>act(1)},ic('heart')));
let list=deck(u);const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fly=(el,d,cb)=>{if(reduce||!el){cb();return}el.style.transition='transform .22s ease,opacity .22s';el.style.transform='translateX('+d*120+'%) rotate('+d*12+'deg)';el.style.opacity='0';setTimeout(cb,220)};
const next=()=>{list.shift();draw()};
function act(d){const r=list[0];if(!r)return;const el=stage.querySelector('.sw');if(d>0)pickFolder(r,u,n=>{live.textContent=t('savedTo',n);fly(el,1,next)});else{u.skip.push(r.id);save();live.textContent=t('skipped');fly(el,-1,next)}}
function draw(){stage.replaceChildren();if(!list.length){ctl.hidden=true;info.textContent='';stage.append(h('div',{class:'end'},h('p',{},t('deckEnd')),h('button',{class:'btn',type:'button',onclick:()=>{u.skip=[];save();list=deck(u);draw()}},t('again'))));return}
ctl.hidden=false;info.textContent=t('left',list.length);
const r=list[0],x=(lang!=='he'&&r.tr&&r.tr[lang])||r,vl=vurl(r.vid),sy=h('span',{class:'stamp y','aria-hidden':'true'},t('save')),sn=h('span',{class:'stamp n','aria-hidden':'true'},t('skipB'));
const el=h('article',{class:'sw','aria-label':x.title},IMG.test(r.img||'')?h('img',{src:r.img,alt:r.alt,draggable:'false'}):ph(r),
h('div',{class:'in'},h('h2',{},x.title),h('p',{class:'meta'},(r.prep+r.cook)+' '+t('mins')+' · '+t(r.diff)+' · '+t('by')+' '+r.by),h('p',{class:'tags'},...r.cats.map(c=>h('span',{class:'tag'},t(c)))),h('h3',{},t('ingH')),h('ul',{},...x.ing.map(i=>h('li',{},i))),h('h3',{},t('method')),h('p',{},x.desc),vl?h('a',{class:'btn alt',href:vl,target:'_blank',rel:'noopener noreferrer'},t('watch')):''));
let sx=null;const reset=()=>{sx=null;el.classList.remove('drag');el.style.transform='';sy.style.opacity=0;sn.style.opacity=0};
el.addEventListener('pointerdown',e=>{if(e.target.closest('a'))return;sx=e.clientX;el.classList.add('drag');el.setPointerCapture(e.pointerId)});
el.addEventListener('pointermove',e=>{if(sx===null)return;const dx=e.clientX-sx;el.style.transform='translateX('+dx+'px) rotate('+dx/25+'deg)';sy.style.opacity=Math.max(0,Math.min(1,dx/100));sn.style.opacity=Math.max(0,Math.min(1,-dx/100))});
el.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;reset();if(dx>100)act(1);else if(dx<-100)act(-1)});
el.addEventListener('pointercancel',reset);
stage.append(el,sy,sn)}
draw();return h('section',{},h('h1',{},t('discover')),h('p',{class:'lede'},t('swipeH')),stage,ctl,info,live)},
saved(u){const ents=Object.entries(u.cols).filter(([n,ids])=>ids.some(id=>db.recipes.some(r=>r.id===id)));return h('section',{},h('h1',{},t('saved')),ents.length?ents.map(([n,ids])=>h('section',{class:'fold'},h('h2',{},n+' · '+ids.length),h('ul',{class:'lst'},...ids.map(id=>db.recipes.find(r=>r.id===id)).filter(Boolean).map(r=>{const x=(lang!=='he'&&r.tr&&r.tr[lang])||r;return h('li',{},h('details',{},h('summary',{},x.title),h('ul',{},...x.ing.map(i=>h('li',{},i))),h('p',{},x.desc)),h('button',{class:'lnk',type:'button',onclick:()=>{u.cols[n]=u.cols[n].filter(i=>i!==r.id);if(!u.cols[n].length)delete u.cols[n];save();go()}},t('rm'),h('span',{class:'sr'},' – '+x.title)))})))):h('p',{class:'meta'},t('emptyCol')))},
home(u){const mine=db.recipes.filter(r=>r.uid===u.id);return h('section',{},h('h1',{},t('hi')+u.name),h('section',{'aria-labelledby':'mp'},h('h2',{id:'mp'},t('mypage')),h('p',{class:'meta'},mine.length+' '+t('recipes')+' · '+Object.values(u.cols).flat().length+' '+t('saved'))),h('h2',{},t('myRec')),mine.length?grid(mine,u):h('p',{class:'meta'},t('noMine')))},
add(u){const cats=h('fieldset',{},h('legend',{},t('cats')),h('div',{style:'display:flex;flex-wrap:wrap'},...CATS.map(c=>h('label',{class:'cb'},h('input',{type:'checkbox',value:c}),t(c)))));
const f=h('form',{novalidate:true,'aria-labelledby':'sh',onsubmit:async e=>{e.preventDefault();const q=i=>f.querySelector('#'+i),errs=[],T=clean(q('t').value,80),d=clean(q('d').value,1500),ing=q('i').value.split('\n').map(x=>clean(x,120)).filter(Boolean).slice(0,40),pr=+q('p').value,ck=+q('c').value,file=q('im').files[0],alt=clean(q('a').value,150),vr=q('v').value.trim();
if(T.length<3)errs.push({id:'t',msg:t('eTitle')});if(!ing.length)errs.push({id:'i',msg:t('eIng')});if(d.length<10)errs.push({id:'d',msg:t('eMeth')});
if(q('p').value===''||!(pr>=0&&pr<=600))errs.push({id:'p',msg:t('eTime')});if(q('c').value===''||!(ck>=0&&ck<=600))errs.push({id:'c',msg:t('eTime')});
if(vr&&!vurl(vr))errs.push({id:'v',msg:t('eVid')});if(file&&alt.length<5)errs.push({id:'a',msg:t('eAlt')});
let img='';if(file&&!errs.length){try{img=await procImg(file)}catch(x){errs.push({id:'im',msg:String(x)})}}
showErrs(f,errs);if(errs.length)return;
db.recipes.unshift({id:crypto.randomUUID(),uid:u.id,by:u.name,title:T,desc:d,ing,prep:pr,cook:ck,diff:q('df').value,cats:[...cats.querySelectorAll('input:checked')].map(x=>x.value),img,alt:img?alt:'',vid:vr?vurl(vr):''});save();STATUS=t('okPub');nav('home')}},
sum(),fld(t('title'),'t',h('input',{id:'t',maxlength:'80','aria-required':'true'})),fld(t('ingF'),'i',h('textarea',{id:'i',rows:'5','aria-required':'true'})),fld(t('method'),'d',h('textarea',{id:'d',rows:'5',maxlength:'1500','aria-required':'true'})),
fld(t('prep'),'p',h('input',{id:'p',type:'number',min:'0',max:'600',inputmode:'numeric','aria-required':'true'})),fld(t('cook'),'c',h('input',{id:'c',type:'number',min:'0',max:'600',inputmode:'numeric','aria-required':'true'})),
fld(t('diff'),'df',h('select',{id:'df'},...['easy','med','hard'].map(x=>h('option',{value:x},t(x))))),cats,
fld(t('img'),'im',h('input',{id:'im',type:'file',accept:'image/jpeg,image/png,image/webp'}),t('imgH')),fld(t('alt'),'a',h('input',{id:'a',maxlength:'150'}),t('altH')),
fld(t('vid'),'v',h('input',{id:'v',type:'url',inputmode:'url',dir:'ltr',autocomplete:'off'}),t('vidH')),h('div',{class:'row'},h('button',{class:'btn',type:'submit'},t('publish'))));
return h('section',{},h('h1',{id:'sh'},t('add')),f)},
acc(u){const out=()=>{sess=null;try{sessionStorage.removeItem('fm_s')}catch(e){}u.tok='';save();store.del('fm_rem')};return h('section',{},h('h1',{},t('acc')),h('p',{},u.name+' · '+u.email),h('p',{},t('dataNote')),
h('div',{class:'row'},h('button',{class:'btn alt',type:'button',onclick:()=>{out();STATUS=t('okOut');nav('recipes')}},t('logout')),
h('button',{class:'btn danger',type:'button',onclick:()=>dlg(t('delAccT'),h('p',{},t('delAccB')),[[t('delAll'),()=>{const ids=db.recipes.filter(r=>r.uid===u.id).map(r=>r.id);db.recipes=db.recipes.filter(r=>r.uid!==u.id);db.users=db.users.filter(x=>x.id!==u.id);db.users.forEach(x=>{for(const n in (x.cols||{}))x.cols[n]=x.cols[n].filter(i=>!ids.includes(i))});save();out();STATUS=t('okAcc');nav('recipes')},'danger'],[t('cancel'),null,'alt']])},t('delAcc'))))}};
const legal=(k,s)=>()=>h('section',{},h('h1',{},t(k)),h('p',{class:'status'},t('ph')),...t(s).split('|').flatMap(x=>[h('h2',{},x),h('p',{},'…')]));
V.privacy=legal('privacy','secP');V.terms=legal('terms','secT');
function auth(){const up=mode==='up';const f=h('form',{novalidate:true,onsubmit:async e=>{e.preventDefault();const q=i=>f.querySelector('#'+i)?.value||'',em=q('ae').trim().toLowerCase(),pw=q('ap'),errs=[];
if(!up){if(Date.now()<lock)errs.push({id:'ae',msg:t('eLock')});else{const u=db.users.find(x=>x.email===em),hh=await hash(pw,u?unb(u.salt):new Uint8Array(16));
if(!u||hh!==u.hash){if(++fails>=5){lock=Date.now()+3e4;fails=0}errs.push({id:'ae',msg:t('eBad')})}else{fails=0;sess={uid:u.id,exp:Date.now()+18e5};rem(u,f.querySelector('#ar').checked);STATUS=t('okIn');route='home';return go()}}showErrs(f,errs)}
else{const nm=clean(q('an'),40);if(nm.length<2)errs.push({id:'an',msg:t('eName')});if(!/^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(em))errs.push({id:'ae',msg:t('eEmail')});if(pw.length<10||/^(.)\1+$/.test(pw))errs.push({id:'ap',msg:t('ePw')});if(!f.querySelector('#at').checked)errs.push({id:'at',msg:t('eTerms')});
if(!errs.length&&db.users.some(u=>u.email===em))errs.push({id:'ae',msg:t('eDup')});showErrs(f,errs);if(errs.length)return;
const salt=crypto.getRandomValues(new Uint8Array(16)),u={id:crypto.randomUUID(),email:em,name:nm,salt:b64(salt),hash:await hash(pw,salt),cols:{},skip:[]};db.users.push(u);save();sess={uid:u.id,exp:Date.now()+18e5};rem(u,f.querySelector('#ar').checked);STATUS=t('okIn');route='home';go()}}},
sum(),up?fld(t('name'),'an',h('input',{id:'an',autocomplete:'nickname',maxlength:'40','aria-required':'true'})):'',
fld(t('email'),'ae',h('input',{id:'ae',type:'email',dir:'ltr',autocomplete:'email','aria-required':'true'})),
fld(t('pw'),'ap',h('input',{id:'ap',type:'password',dir:'ltr',autocomplete:up?'new-password':'current-password','aria-required':'true'}),up?t('pwH'):''),
up?h('div',{},h('label',{class:'cb',for:'at'},h('input',{type:'checkbox',id:'at'}),t('termsAcc')),h('p',{id:'ate',class:'err',hidden:true})):'',
h('label',{class:'cb',for:'ar'},h('input',{type:'checkbox',id:'ar'}),t('remember')),
h('div',{class:'row'},h('button',{class:'btn',type:'submit'},t(up?'signup':'login'))));
return h('section',{},h('h1',{},t(up?'signup':'login')),h('div',{class:'chips',role:'group'},...[['in','login'],['up','signup']].map(([m,l])=>h('button',{type:'button',class:'chip','aria-pressed':String(mode===m),onclick:()=>{mode=m;go()}},t(l)))),
h('button',{class:'btn alt',type:'button',onclick:async ()=>{
  const { error } = await supabaseClient.auth.signInWithOAuth({ 
    provider: 'google',
    options: {
      redirectTo: 'https://itayabu12.github.io/Dishboard-ap/'
    }
  });
  if (error) console.error('שגיאה בהתחברות:', error.message);
}},t('google')),f)}
const TABS=[['recipes','recipes'],['discover','discover'],['home','home'],['add','plus'],['saved','saved']];
function go(){const u=me();if(!V[route])route='recipes';let v;if(['discover','saved','home','add'].includes(route)&&!u){if(!STATUS)STATUS=t('need');v=auth()}else v=V[route](u);
$('#tabs').replaceChildren(...TABS.map(([r,i],k)=>h('button',{type:'button',class:k===2?'mid':'','aria-current':r===route?'page':false,onclick:()=>nav(r)},h('span',{class:'ic'},ic(i)),h('span',{},t(r)))));
const lg=h('p',{class:'legal'},h('button',{class:'lnk',type:'button',onclick:()=>nav('privacy')},t('privacy')),' · ',h('button',{class:'lnk',type:'button',onclick:()=>nav('terms')},t('terms')),' · ',h('button',{class:'lnk',type:'button',onclick:()=>banner(true)},t('cookies')));
main.replaceChildren(...(STATUS?[h('p',{class:'status',role:'status'},STATUS)]:[]),v,lg);STATUS='';document.title=t(route)+' – Dishboard';main.focus();window.scrollTo(0,0)}
supabaseClient.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' && session) {
    const em = session.user.email;
    let u = db.users.find(x => x.email === em);
    
supabaseClient.auth.onAuthStateChange((event, session) => {
  if (session) {
    const em = session.user.email;
    let u = db.users.find(x => x.email === em);
    
    // יצירת משתמש מקומי אם הוא לא קיים
    if (!u) {
      u = { 
        id: session.user.id, 
        email: em, 
        name: session.user.user_metadata?.full_name || em.split('@')[0], 
        cols: {}, 
        skip: [] 
      };
      db.users.push(u);
      save();
    }
    
    // בדיקה אם המשתמש כרגע נחשב "מנותק" במערכת שלנו
    const justLoggedIn = !me();
    
    // עדכון החיבור
    sess = { uid: u.id, exp: Date.now() + 18e5 };
    sessionStorage.setItem('fm_s', JSON.stringify(sess));
    
    // מעבר לעמוד הראשי של המשתמש רק אם הוא בדיוק התחבר
    if (justLoggedIn) {
      STATUS = t('okIn');
      nav('home');
    }
  }
});
applyLang();go();banner();
