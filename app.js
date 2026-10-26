/* Dishboard – app.js */
const SB = typeof supabaseClient !== 'undefined' ? supabaseClient : null;
const BUCKET = 'recipe-images';
const $ = s => document.querySelector(s), main = $('#main'), root = document.documentElement;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} },
  del(k) { try { localStorage.removeItem(k) } catch (e) {} }
};
function h(t, a = {}, ...c) {
  const e = document.createElement(t);
  for (const k in a) {
    const v = a[k];
    if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (k === 'class') e.className = v;
    else if (v !== false && v != null) e.setAttribute(k, v === true ? '' : v);
  }
  c.flat().forEach(x => { if (x != null && x !== '') e.append(x instanceof Node ? x : document.createTextNode(String(x))) });
  return e;
}
const P = {
  recipes: 'M4 5c3-1 5-1 8 1 3-2 5-2 8-1v14c-3-1-5-1-8 1-3-2-5-2-8-1z M12 6v14',
  discover: 'M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z M8 3h8 M9 14h6 M13 12l2 2-2 2',
  home: 'M4 11l8-7 8 7 M6 10v10h12V10 M10 20v-6h4v6',
  plus: 'M12 5v14M5 12h14',
  saved: 'M6 4h12v17l-6-4-6 4z',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  close: 'M6 6l12 12M18 6L6 18',
  access: 'M12 5.2a1.2 1.2 0 1 0 .01 0 M5 9l7 1.5L19 9 M12 10.5V15 M9 20l3-5 3 5',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8'
};
function ic(n) {
  const N = 'http://www.w3.org/2000/svg', s = document.createElementNS(N, 'svg'), p = document.createElementNS(N, 'path');
  s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); p.setAttribute('d', P[n]); s.append(p); return s;
}

const D = {
  recipes: ['מתכונים', 'Recipes'], home: ['ראשי', 'Home'], add: ['הוספה', 'Add'], acc: ['חשבון', 'Account'],
  a11y: ['נגישות', 'Accessibility'], contrast: ['ניגודיות גבוהה', 'High contrast'], bigtext: ['טקסט גדול', 'Larger text'], spacing: ['מרווחים רחבים', 'Wider spacing'], close: ['סגירה', 'Close'], skip: ['דלג לתוכן הראשי', 'Skip to main content'],
  search: ['חיפוש מתכונים או מצרכים', 'Search recipes or ingredients'], all: ['הכול', 'All'], found: ['נמצאו {n} מתכונים', '{n} recipes found'],
  ingH: ['מצרכים', 'Ingredients'], ingF: ['מצרכים (כל מצרך בשורה נפרדת)', 'Ingredients (one per line)'], method: ['אופן הכנה', 'Method'], prep: ['זמן הכנה (בדקות)', 'Prep time (minutes)'], cook: ['זמן בישול (בדקות)', 'Cook time (minutes)'], diff: ['רמת קושי', 'Difficulty'], easy: ['קל', 'Easy'], med: ['בינוני', 'Medium'], hard: ['מאתגר', 'Hard'],
  cats: ['קטגוריות', 'Categories'], vegan: ['טבעוני', 'Vegan'], veg: ['צמחוני', 'Vegetarian'], meat: ['בשרי', 'Meat'], pastry: ['מאפים', 'Pastry'], quick: ['מהיר', 'Quick'], budget: ['חסכוני', 'Budget'],
  title: ['שם המתכון', 'Recipe title'], img: ['תמונה (לא חובה)', 'Image (optional)'], imgH: ['JPEG, PNG או WebP עד 3MB. התמונה נשמרת מחדש כדי להסיר מידע נסתר.', 'JPEG, PNG or WebP, up to 3 MB. Images are re-encoded to remove hidden data.'],
  alt: ['תיאור התמונה (טקסט חלופי)', 'Image description (alt text)'], altH: ['חובה כשמוסיפים תמונה. תארו מה רואים בה, עבור מי שלא רואה אותה.', 'Required with an image. Describe it for people who can’t see it.'],
  vid: ['קישור לסרטון (לא חובה)', 'Instagram or Facebook video link (optional)'], vidH: ['הדביקו קישור ציבורי, למשל https://www.instagram.com/reel/…', 'Paste a public link, e.g. https://www.instagram.com/reel/…'],
  publish: ['פרסום המתכון', 'Publish recipe'], watch: ['צפייה בסרטון', 'Watch video'], by: ['מאת', 'by'], mins: ['דק׳ בסך הכול', 'min total'], fav: ['מועדף', 'Favorite'],
  mypage: ['העמוד שלי', 'My page'], myRec: ['המתכונים שלי', 'My recipes'], noMine: ['עוד לא שיתפתם מתכונים. אפשר להתחיל בלשונית ההוספה.', 'You haven’t shared any recipes yet. Start from the Add tab.'], hi: ['שלום, ', 'Hi, '],
  del: ['מחיקה', 'Delete'], delRT: ['למחוק את המתכון?', 'Delete this recipe?'], delRB: ['המתכון יימחק לצמיתות.', 'This recipe will be permanently deleted.'], cancel: ['ביטול', 'Cancel'],
  login: ['התחברות', 'Log in'], signup: ['הרשמה', 'Sign up'], email: ['אימייל', 'Email'], pw: ['סיסמה', 'Password'], pwH: ['לפחות 10 תווים.', 'At least 10 characters.'], name: ['שם תצוגה', 'Display name'],
  termsAcc: ['אני מאשר/ת את תנאי השימוש ואת מדיניות הפרטיות', 'I accept the Terms of Service and Privacy Policy'], google: ['המשך עם Google', 'Continue with Google'],
  logout: ['התנתקות', 'Log out'], delAcc: ['מחיקת החשבון שלי', 'Delete my account'], delAccT: ['למחוק את החשבון לצמיתות?', 'Delete your account permanently?'], delAccB: ['החשבון יימחק לצמיתות. אי אפשר לבטל.', 'Your account will be permanently deleted. This can’t be undone.'], delAll: ['מחיקת הכול', 'Delete everything'],
  dataNote: ['השליטה בנתונים שלכם.', 'You control your data.'], need: ['כדי להמשיך יש להתחבר או להירשם.', 'Please log in or sign up to continue.'],
  privacy: ['מדיניות פרטיות', 'Privacy Policy'], terms: ['תנאי שימוש', 'Terms of Service'], cookies: ['הגדרות עוגיות', 'Cookie settings'],
  secP: ['איזה מידע נאסף|שימוש במידע|עוגיות ואחסון|הזכויות שלך|יצירת קשר', 'What we collect|How we use it|Cookies and storage|Your rights|Contact'], secT: ['שימוש ב־Dishboard|התוכן שלך ורישיון|שימוש מותר|סיום שימוש|יצירת קשר', 'Using Dishboard|Your content and licence|Acceptable use|Termination|Contact'],
  ckT: ['בחירות העוגיות שלך', 'Your cookie choices'], ckP: ['אנחנו משתמשים באחסון הכרחי.', 'We use strictly necessary storage.'],
  accAll: ['אישור הכול', 'Accept all'], reject: ['דחיית לא הכרחיות', 'Reject non-essential'], custom: ['התאמה אישית', 'Customize'], nec: ['הכרחיות', 'Strictly necessary'], prefs: ['העדפות', 'Preferences'], ana: ['אנליטיקה', 'Analytics'], saveCh: ['שמירת הבחירות', 'Save my choices'], ckOk: ['העדפות נשמרו.', 'Preferences saved.'], ckL: ['קטגוריות', 'Categories'],
  fix: ['יש לתקן את הבעיות הבאות ({n}):', 'Please fix these problems ({n}):'], eTitle: ['יש להזין שם (3-80 תווים).', 'Enter a title (3-80 characters).'], eIng: ['יש להוסיף לפחות מצרך אחד.', 'List at least one ingredient.'], eMeth: ['יש לתאר את אופן ההכנה.', 'Describe the method.'], eTime: ['יש להזין זמן.', 'Enter a time.'],
  eAlt: ['טקסט חלופי הוא חובה.', 'Alt text is required.'], eImgT: ['רק תמונות מותרות.', 'Only images allowed.'], eImgS: ['התמונה גדולה מדי.', 'Image is too large.'], eImgR: ['לא ניתן לקרוא תמונה.', 'Could not read image.'],
  eVid: ['הקישור אינו תקין.', 'Invalid link.'], eName: ['יש להזין שם תצוגה.', 'Enter a display name.'], eEmail: ['יש להזין אימייל תקין.', 'Enter a valid email address.'], ePw: ['הסיסמה חייבת להכיל 10 תווים.', 'Password must be 10 chars.'], eTerms: ['יש לאשר את התנאים.', 'Accept terms.'],
  eDup: ['שגיאה בהרשמה.', 'Registration error.'], eBad: ['האימייל או הסיסמה שגויים.', 'Email or password incorrect.'], eLock: ['יותר מדי ניסיונות.', 'Too many attempts.'],
  okPub: ['המתכון פורסם.', 'Recipe published.'], okDel: ['המתכון נמחק.', 'Recipe deleted.'], okOut: ['התנתקתם.', 'Logged out.'], okAcc: ['החשבון נמחק.', 'Account deleted.'], okIn: ['ברוכים הבאים!', 'Welcome!'], settings: ['הגדרות', 'Settings'], langL: ['שפה', 'Language'], heroT: ['מה מבשלים היום?', 'What’s cooking today?'], heroS: ['מתכונים מקהילת הסטודנטים.', 'Recipes from the student community.'],
  discover: ['גלו', 'Discover'], saved: ['אוסף', 'Collection'], save: ['שמירה', 'Save'], skipB: ['דילוג', 'Skip'], swipeH: ['החליקו לשמירה או דילוג.', 'Swipe to save or skip.'], pickT: ['לאן לשלוח?', 'Where to send?'], pickN: ['שם לתיקייה חדשה', 'New folder name'], addF: ['יצירה', 'Create'], savedTo: ['נשמר.', 'Saved.'], skipped: ['דולג.', 'Skipped.'], left: ['נותרו {n} מתכונים', '{n} recipes left'], deckEnd: ['אין עוד מתכונים כרגע.', 'No more recipes.'], again: ['להתחיל מחדש', 'Start over'], emptyCol: ['עוד אין כאן כלום.', 'Nothing here yet.'], rm: ['הסרה', 'Remove'],
  fridgeL: ['מה יש במקרר?', 'What’s in your fridge?'], fridgeH: ['חיפוש לפי מצרכים.', 'Search by ingredients.'], bySearch: ['חיפוש', 'Search'], byFridge: ['מקרר', 'Fridge'], modeL: ['שיטת חיפוש', 'Search mode'], have: ['יש לך', 'You have'], of: ['מתוך', 'of'], miss: ['חסר', 'Missing'], fridgeH2: ['חיפוש במקרר.', 'Fridge search.'],
  scanB: ['סריקת מתכון מתמונה', 'Scan recipe from image'], scanH: ['צלמו מתכון ונמלא את הטופס.', 'Photograph a recipe and we fill the form.'], scanning: ['סורק...', 'Scanning...'], scanOk: ['נסרק בהצלחה.', 'Scanned successfully.'], scanNo: ['לא זוהה טקסט.', 'No text identified.'], scanErr: ['שגיאה בסריקה.', 'Scan error.'], eSave: ['שגיאה.', 'Error.'], eAuth: ['שגיאה.', 'Error.'], okConfirm: ['אימייל נשלח.', 'Email sent.'], eConfirm: ['אשרו אימייל.', 'Confirm email.']
};

const STILL = `<svg viewBox='0 0 200 133' preserveAspectRatio='xMidYMid slice'><path d='M50 68h100c0 26-20 44-50 44S50 94 50 68z' fill='#a8643a'/></svg>`;
const HERO = `<svg viewBox='0 0 600 150'><rect y='128' width='600' height='22' fill='#d8b98a'/></svg>`;
const PAT = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180' fill='none' stroke='#355a3a' stroke-opacity='.12' stroke-width='1.6' stroke-linecap='round'><path d='M20 40l-8 10'/></svg>`;
document.body.style.backgroundImage = 'url("data:image/svg+xml,' + encodeURIComponent(PAT) + '")';
function ph(r) { const d = h('div', { class: 'ph c-x', 'aria-hidden': 'true' }); d.innerHTML = STILL; return d; }
function heroArt() { const d = h('div', { class: 'art', 'aria-hidden': 'true' }); d.innerHTML = HERO; return d; }

let lang = 'he';
const t = (k, n) => D[k][lang === 'he' ? 0 : 1].replace('{n}', n);
const pers = (k, v) => { const c = store.get('fm_consent', null); if (c && c.pref) store.set(k, v) };
{ const c = store.get('fm_consent', null); if (c && c.pref) { lang = store.get('fm_lang', 'he'); ['contrast', 'size', 'font'].forEach(k => { const v = store.get('fm_' + k, null); if (v) root.setAttribute('data-' + k, v) }) } }
const pref = (k, v) => { root.setAttribute('data-' + k, v); pers('fm_' + k, v) };
function applyLang() {
  root.lang = lang; root.dir = lang === 'he' ? 'rtl' : 'ltr';
  [['#ab', 'a11y', 'access'], ['#sb', 'settings', 'gear']].forEach(([s, k, i]) => { const a = $(s); a.setAttribute('aria-label', t(k)); a.title = t(k); a.replaceChildren(ic(i)) });
  $('#skip').textContent = t('skip'); $('#tabs').setAttribute('aria-label', 'Dishboard');
}
function setLang(l) { lang = l; pers('fm_lang', lang); applyLang(); go(); }
function dlg(title, body, acts) {
  const d = h('dialog', { 'aria-labelledby': 'dt' }, h('h2', { id: 'dt' }, title), body, h('div', { class: 'row' }, ...acts.map(([x, fn, c]) => h('button', { type: 'button', class: 'btn ' + (c || ''), onclick: async () => { if (!fn || await fn(d) !== false) d.close() } }, x))));
  d.addEventListener('close', () => d.remove()); document.body.append(d); d.showModal();
}
$('#ab').onclick = () => {
  const tg = (k, v, l) => h('button', { type: 'button', class: 'btn alt', 'aria-pressed': String(root.dataset[k] === v), onclick: e => { const on = root.dataset[k] !== v; pref(k, on ? v : 'normal'); e.currentTarget.setAttribute('aria-pressed', String(on)) } }, t(l));
  dlg(t('a11y'), h('div', { class: 'row' }, tg('contrast', 'high', 'contrast'), tg('size', 'large', 'bigtext'), tg('font', 'wide', 'spacing')), [[t('close'), null]]);
};
$('#sb').onclick = () => dlg(t('settings'), h('div', { role: 'group' }, h('p', { class: 'meta' }, t('langL')), h('div', { class: 'row' }, ...[['he', 'עברית'], ['en', 'English']].map(([l, n]) => h('button', { type: 'button', class: 'btn alt', lang: l, 'aria-pressed': String(lang === l), onclick: () => { setLang(l); document.querySelector('dialog')?.close() } }, n))), acctBox()), [[t('close'), null]]);
function acctBox() {
  const u = me(), box = h('div', { class: 'acct' }, h('h3', {}, t('acc')));
  if (u) {
    const a = V.acc(u); a.querySelector('h1')?.remove();
    a.addEventListener('click', e => { if (e.target.closest('button')) setTimeout(() => document.querySelector('dialog')?.close(), 0) });
    box.append(a);
  } else box.append(h('div', { class: 'row' }, ...[['in', 'login'], ['up', 'signup']].map(([m, l]) => h('button', { type: 'button', class: 'btn' + (m === 'up' ? ' alt' : ''), onclick: e => { mode = m; e.currentTarget.closest('dialog').close(); nav('home') } }, t(l)))));
  return box;
}
$('#brand').onclick = e => { e.preventDefault(); nav('recipes') };
$('#skip').onclick = e => { e.preventDefault(); main.focus() };

function banner(force) {
  if (!force && store.get('fm_consent', null)) return; $('.cookie')?.remove();
  const pf = h('input', { type: 'checkbox', id: 'cpf' }), an = h('input', { type: 'checkbox', id: 'can' });
  const done = (p, a) => {
    store.set('fm_consent', { pref: p, ana: a, t: Date.now() });
    ['contrast', 'size', 'font'].forEach(k => p ? store.set('fm_' + k, root.dataset[k] || 'normal') : store.del('fm_' + k));
    p ? store.set('fm_lang', lang) : store.del('fm_lang'); $('.cookie')?.remove(); STATUS = t('ckOk'); go();
  };
  const opts = h('fieldset', { hidden: true }, h('legend', {}, t('ckL')), h('label', { class: 'cb' }, h('input', { type: 'checkbox', checked: true, disabled: true }), t('nec')), h('label', { class: 'cb', for: 'cpf' }, pf, t('prefs')), h('label', { class: 'cb', for: 'can' }, an, t('ana')), h('button', { class: 'btn', type: 'button', onclick: () => done(pf.checked, an.checked) }, t('saveCh')));
  document.body.append(h('section', { class: 'cookie', 'aria-labelledby': 'ckt' }, h('h2', { id: 'ckt' }, t('ckT')), h('p', {}, t('ckP')), h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => done(true, true) }, t('accAll')), h('button', { class: 'btn alt', type: 'button', onclick: () => done(false, false) }, t('reject')), h('button', { class: 'btn alt', type: 'button', 'aria-expanded': 'false', onclick: e => { opts.hidden = !opts.hidden; e.currentTarget.setAttribute('aria-expanded', String(!opts.hidden)) } }, t('custom'))), opts));
}

const SEED = [
  { id: 's1', uid: '', by: 'Dishboard', title: 'קארי חומוס וקוקוס', desc: 'מטגנים בצל ושום, מוסיפים משחת קארי.', ing: ['קופסת חומוס', 'קופסת חלב קוקוס', 'בצל אחד'], prep: 10, cook: 20, diff: 'easy', cats: ['vegan', 'budget'], img: '', alt: '', vid: '', tr: { en: { title: 'Chickpea Coconut Curry', desc: 'Fry onion and garlic.', ing: ['1 tin chickpeas', '1 onion'] } } }
];
let db = { recipes: [...SEED] };
let user = null;
const me = () => user;
let route = 'recipes', STATUS = '', mode = 'in', lastLoad = 0;

async function loadRecipes(force) {
  if (!SB) return false;
  if (!force && Date.now() - lastLoad < 15e3) return false;
  const { data, error } = await SB.from('recipes').select('*').order('created_at', { ascending: false }).limit(500);
  lastLoad = Date.now();
  if (error) { console.error('Loading recipes failed:', error); return false }
  db.recipes = [...(data || []), ...SEED];
  return true;
}
async function loadUser(session) {
  if (!session) { user = null; return }
  const u = session.user, md = u.user_metadata || {};
  user = { id: u.id, email: u.email || '', name: md.full_name || md.name || (u.email || '').split('@')[0], cols: {}, skip: [] };
  if(SB) {
    const { data, error } = await SB.from('user_collections').select('cols,skip').eq('uid', u.id).maybeSingle();
    if (data) { user.cols = data.cols || {}; user.skip = data.skip || [] }
  }
}
function save() {
  if (!user || !SB) return;
  const row = { uid: user.id, cols: user.cols, skip: user.skip, updated_at: new Date().toISOString() };
  SB.from('user_collections').upsert(row).then();
}

const clean = (s, n) => String(s || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F<>]/g, '').trim().slice(0, n);
const CATS = ['vegan', 'veg', 'meat', 'pastry', 'quick', 'budget'];
function nav(r) { route = r; go(); if (r === 'recipes' || r === 'discover') loadRecipes().then(ch => { if (ch && route === r) go() }) }
function fld(l, id, ctl, hint) { return h('div', {}, h('label', { for: id }, l), hint ? h('p', { id: id + 'h', class: 'hint' }, hint) : '', ctl, h('p', { id: id + 'e', class: 'err', hidden: true })) }
const sum = () => h('div', { class: 'sum', role: 'alert', tabindex: '-1', hidden: true });
function showErrs(f, errs) {
  f.querySelectorAll('.err').forEach(p => { p.hidden = true; p.textContent = '' });
  f.querySelectorAll('[aria-invalid]').forEach(x => x.removeAttribute('aria-invalid'));
  const s = f.querySelector('.sum'); s.replaceChildren(); s.hidden = !errs.length; if (!errs.length) return;
  s.append(h('p', {}, t('fix', errs.length)));
  const ul = h('ul', {});
  errs.forEach(({ id, msg }) => {
    const el = f.querySelector('#' + id), p = f.querySelector('#' + id + 'e');
    if (el) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', id + 'e') }
    if (p) { p.hidden = false; p.textContent = msg }
    ul.append(h('li', {}, h('a', { href: '#' + id, onclick: v => { v.preventDefault(); el && el.focus() } }, msg)));
  });
  s.append(ul); s.focus();
}
function vurl(s) { try { const u = new URL(s); return u.protocol === 'https:' && /(^|\.)(instagram\.com|facebook\.com|fb\.watch)$/.test(u.hostname) ? u.href : '' } catch (e) { return '' } }
const tx = r => (lang !== 'he' && r.tr && r.tr[lang]) || r;

function card(r, u, ex) {
  const x = tx(r), fv = u && Object.values(u.cols).some(a => a.includes(r.id)), vl = vurl(r.vid);
  return h('li', { class: 'card' },
    ph(r), h('h2', {}, x.title),
    h('p', { class: 'meta' }, (r.prep + r.cook) + ' ' + t('mins') + ' · ' + t(r.diff) + ' · ' + t('by') + ' ' + r.by),
    h('p', { class: 'tags' }, ...r.cats.map(c => h('span', { class: 'tag' }, t(c)))),
    ex ? h('p', { class: 'match' }, ex) : '',
    h('details', {}, h('summary', {}, t('ingH') + ' · ' + t('method')), h('ul', {}, ...x.ing.map(i => h('li', {}, i))), h('p', {}, x.desc)),
    vl ? h('a', { class: 'btn alt', href: vl, target: '_blank' }, '▶ ' + t('watch')) : '',
    h('div', { class: 'row' },
      h('button', { class: 'btn alt', type: 'button', 'aria-pressed': String(!!fv) }, t('save')),
      u && r.uid === u.id ? h('button', { class: 'btn alt', type: 'button' }, t('del')) : ''
    )
  );
}
const grid = (rs, u, ex) => h('ul', { class: 'grid' }, ...rs.map(r => card(r, u, ex && ex(r))));

const V = {
  recipes(u) {
    return h('section', {}, h('h1', {}, t('heroT')), h('p', { class: 'lede' }, t('heroS')), heroArt(), grid(db.recipes, u));
  },
  discover(u) {
    return h('section', {}, h('h1', {}, t('discover')), h('p', { class: 'lede' }, t('swipeH')));
  },
  saved(u) {
    return h('section', {}, h('h1', {}, t('saved')));
  },
  home(u) {
    const mine = db.recipes.filter(r => r.uid === u.id);
    return h('section', {}, h('h1', {}, t('hi') + u.name), h('h2', {}, t('myRec')), mine.length ? grid(mine, u) : h('p', { class: 'meta' }, t('noMine')));
  },
  add(u) {
    const cats = h('fieldset', {}, h('legend', {}, t('cats')), h('div', { style: 'display:flex;flex-wrap:wrap' }, ...CATS.map(c => h('label', { class: 'cb' }, h('input', { type: 'checkbox', value: c }), t(c)))));
    
    const onScan = async e => {
      const file = e.target.files[0]; if (!file) return;
      
      const st = document.getElementById('scs');
      if (st) st.textContent = lang === 'he' ? 'סורק טקסט בעברית (זה ייקח כמה שניות)...' : 'Scanning...'; 
      e.target.disabled = true;
      
      try {
        if (typeof Tesseract === 'undefined') {
          throw new Error('הסורק עדיין נטען, נסה שוב בעוד רגע.');
        }

        const { data: { text } } = await Tesseract.recognize(file, 'heb', {
          logger: m => console.log(m)
        });
        
        if (!text || text.trim() === '') {
          throw new Error('לא זוהה טקסט בתמונה');
        }
        
        const cleanText = text.split('\n').map(l => l.trim()).filter(Boolean).join('\n');
        
        const titleEl = document.getElementById('t');
        const ingEl = document.getElementById('i');
        const descEl = document.getElementById('d');
        const prepEl = document.getElementById('p');
        const cookEl = document.getElementById('c');

        if(titleEl) titleEl.value = lang === 'he' ? 'מתכון סרוק' : 'Scanned Recipe';
        if(ingEl) ingEl.value = lang === 'he' ? 'העתיקו לכאן את המצרכים מתיבת ההכנה למטה' : 'Paste ingredients here';
        if(descEl) descEl.value = cleanText;
        if(prepEl) prepEl.value = '15';
        if(cookEl) cookEl.value = '45';
        
        if (st) st.textContent = lang === 'he' ? 'הסריקה הושלמה! כל הטקסט הוכנס לתיבת "אופן הכנה". אנא סדרו אותו בשדות.' : 'Scan complete.';
      } catch (x) { 
        console.error('OCR Error:', x);
        if (st) st.textContent = lang === 'he' ? 'הסריקה נכשלה. נסו תמונה ברורה יותר.' : 'Scan failed.';
      } finally { 
        e.target.disabled = false; 
        e.target.value = ''; 
      }
    };

    const f = h('form', {
      novalidate: true, 'aria-labelledby': 'sh', onsubmit: async e => {
        e.preventDefault();
        const btn = f.querySelector('button[type=submit]'); if (btn.disabled) return;
        const q = i => document.getElementById(i), errs = [];
        const T = clean(q('t')?.value, 80), d = clean(q('d')?.value, 1500), ing = (q('i')?.value||'').split('\n').map(x => clean(x, 120)).filter(Boolean).slice(0, 40),
          pr = +(q('p')?.value||0), ck = +(q('c')?.value||0);
          
        if (T.length < 3) errs.push({ id: 't', msg: t('eTitle') }); 
        if (!ing.length) errs.push({ id: 'i', msg: t('eIng') }); 
        if (d.length < 10) errs.push({ id: 'd', msg: t('eMeth') });
        if (q('p')?.value === '' || !(pr >= 0 && pr <= 600)) errs.push({ id: 'p', msg: t('eTime') }); 
        if (q('c')?.value === '' || !(ck >= 0 && ck <= 600)) errs.push({ id: 'c', msg: t('eTime') });
        
        showErrs(f, errs); if (errs.length) return;
        btn.disabled = true;
        
        try {
          const row = { id: crypto.randomUUID(), uid: u.id, by: u.name, title: T, desc: d, ing, prep: pr, cook: ck, diff: q('df').value, cats: [...cats.querySelectorAll('input:checked')].map(x => x.value), img: '', alt: '', vid: '' };
          if(SB) {
            const { data, error } = await SB.from('recipes').insert(row).select().single();
            if (error) throw error;
            db.recipes.unshift(data);
          } else {
            db.recipes.unshift(row);
          }
          STATUS = t('okPub'); nav('home');
        } catch (x) {
          btn.disabled = false;
          showErrs(f, [{ id: 't', msg: String(x) }]);
        }
      }
    },
      sum(),
      fld(t('scanB'), 'sc', h('input', { id: 'sc', type: 'file', accept: 'image/*', onchange: onScan }), t('scanH')),
      h('p', { id: 'scs', class: 'meta', role: 'status' }),
      fld(t('title'), 't', h('input', { id: 't', maxlength: '80', 'aria-required': 'true' })),
      fld(t('ingF'), 'i', h('textarea', { id: 'i', rows: '5', 'aria-required': 'true' })),
      fld(t('method'), 'd', h('textarea', { id: 'd', rows: '5', maxlength: '1500', 'aria-required': 'true' })),
      fld(t('prep'), 'p', h('input', { id: 'p', type: 'number', min: '0', max: '600', inputmode: 'numeric', 'aria-required': 'true' })),
      fld(t('cook'), 'c', h('input', { id: 'c', type: 'number', min: '0', max: '600', inputmode: 'numeric', 'aria-required': 'true' })),
      fld(t('diff'), 'df', h('select', { id: 'df' }, ...['easy', 'med', 'hard'].map(x => h('option', { value: x }, t(x))))),
      cats,
      h('div', { class: 'row' }, h('button', { class: 'btn', type: 'submit' }, t('publish')))
    );
    return h('section', {}, h('h1', { id: 'sh' }, t('add')), f);
  },
  acc(u) {
    return h('section', {}, h('h1', {}, t('acc')), h('p', {}, u.name + ' · ' + u.email), h('p', {}, t('dataNote')));
  }
};

const LEGAL = {
  privacy: { he: ['פרטיות.'], en: ['Privacy.'] },
  terms: { he: ['תנאים.'], en: ['Terms.'] }
};
const legal = (k, s) => () => h('section', {}, h('h1', {}, t(k)), h('p', { class: 'meta' }, lang === 'he' ? 'עדכון אחרון: אוקטובר 2026' : 'Last updated: October 2026'), ...t(s).split('|').flatMap((x, i) => [h('h2', {}, x), h('p', {}, LEGAL[k][lang][i] || '…')]));
V.privacy = legal('privacy', 'secP');
V.terms = legal('terms', 'secT');

function auth() {
  const f = h('form', { onsubmit: e => e.preventDefault() }, h('p', {}, 'Login disabled in this preview.'));
  return h('section', {}, h('h1', {}, 'Log in'), f);
}

const TABS = [['recipes', 'recipes'], ['discover', 'discover'], ['home', 'home'], ['add', 'plus'], ['saved', 'saved']];
function go() {
  const u = me(); if (!V[route]) route = 'recipes';
  let v; if (['discover', 'saved', 'home', 'add'].includes(route) && !u) { if (!STATUS) STATUS = t('need'); v = auth() } else v = V[route](u);
  $('#tabs').replaceChildren(...TABS.map(([r, i], k) => h('button', { type: 'button', class: k === 2 ? 'mid' : '', 'aria-current': r === route ? 'page' : false, onclick: () => nav(r) }, h('span', { class: 'ic' }, ic(i)), h('span', {}, t(r)))));
  main.replaceChildren(...(STATUS ? [h('p', { class: 'status', role: 'status' }, STATUS)] : []), v);
  STATUS = ''; document.title = t(route) + ' – Dishboard'; main.focus(); window.scrollTo(0, 0);
}

if (SB) {
  SB.auth.onAuthStateChange((event, session) => {
    setTimeout(async () => {
      await loadUser(session);
      if (session) { route = 'home'; STATUS = t('okIn') } else route = 'recipes';
      go();
    }, 0);
  });
}
applyLang();
loadRecipes(true).finally(() => { go(); banner(); });