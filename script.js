const LEVEL_COUNT = 5;
const QUESTIONS_PER_LEVEL = 10;
const ANSWER_FEEDBACK_DELAY = 1500;
const STORAGE = {
  language: "littleStarsLanguage",
  settings: "littleStarsSettings",
  progress: "littleStarsProgress"
};

const countries = [
  ["Egypt", "مصر", "🇪🇬"], ["Saudi Arabia", "السعودية", "🇸🇦"], ["Morocco", "المغرب", "🇲🇦"], ["United Arab Emirates", "الإمارات العربية المتحدة", "🇦🇪"], ["Palestine", "فلسطين", "🇵🇸"], ["Jordan", "الأردن", "🇯🇴"], ["France", "فرنسا", "🇫🇷"], ["Italy", "إيطاليا", "🇮🇹"], ["Spain", "إسبانيا", "🇪🇸"], ["Germany", "ألمانيا", "🇩🇪"], ["United Kingdom", "المملكة المتحدة", "🇬🇧"], ["United States", "الولايات المتحدة", "🇺🇸"], ["Canada", "كندا", "🇨🇦"], ["Brazil", "البرازيل", "🇧🇷"], ["Japan", "اليابان", "🇯🇵"], ["China", "الصين", "🇨🇳"], ["South Korea", "كوريا الجنوبية", "🇰🇷"], ["India", "الهند", "🇮🇳"], ["Australia", "أستراليا", "🇦🇺"], ["Russia", "روسيا", "🇷🇺"],
  ["Argentina", "الأرجنتين", "🇦🇷"], ["Mexico", "المكسيك", "🇲🇽"], ["South Africa", "جنوب أفريقيا", "🇿🇦"], ["Turkey", "تركيا", "🇹🇷"], ["Greece", "اليونان", "🇬🇷"], ["Portugal", "البرتغال", "🇵🇹"], ["Netherlands", "هولندا", "🇳🇱"], ["Belgium", "بلجيكا", "🇧🇪"], ["Switzerland", "سويسرا", "🇨🇭"], ["Sweden", "السويد", "🇸🇪"], ["Norway", "النرويج", "🇳🇴"], ["Denmark", "الدنمارك", "🇩🇰"], ["Finland", "فنلندا", "🇫🇮"], ["Poland", "بولندا", "🇵🇱"], ["Ukraine", "أوكرانيا", "🇺🇦"], ["Ireland", "أيرلندا", "🇮🇪"],
  ["Pakistan", "باكستان", "🇵🇰"], ["Bangladesh", "بنغلاديش", "🇧🇩"], ["Indonesia", "إندونيسيا", "🇮🇩"], ["Malaysia", "ماليزيا", "🇲🇾"], ["Singapore", "سنغافورة", "🇸🇬"], ["Thailand", "تايلاند", "🇹🇭"], ["Vietnam", "فيتنام", "🇻🇳"], ["Philippines", "الفلبين", "🇵🇭"], ["New Zealand", "نيوزيلندا", "🇳🇿"], ["Nigeria", "نيجيريا", "🇳🇬"], ["Kenya", "كينيا", "🇰🇪"], ["Algeria", "الجزائر", "🇩🇿"], ["Tunisia", "تونس", "🇹🇳"], ["Qatar", "قطر", "🇶🇦"],
  ["Peru", "بيرو", "🇵🇪"], ["Chile", "تشيلي", "🇨🇱"], ["Colombia", "كولومبيا", "🇨🇴"], ["Croatia", "كرواتيا", "🇭🇷"], ["Romania", "رومانيا", "🇷🇴"], ["Ethiopia", "إثيوبيا", "🇪🇹"], ["Ghana", "غانا", "🇬🇭"], ["Tanzania", "تنزانيا", "🇹🇿"], ["Nepal", "نيبال", "🇳🇵"], ["Sri Lanka", "سريلانكا", "🇱🇰"], ["Cambodia", "كمبوديا", "🇰🇭"], ["Iceland", "آيسلندا", "🇮🇸"], ["Luxembourg", "لوكسمبورغ", "🇱🇺"]
];
const countryIsoCodes = {
  Egypt: "eg", "Saudi Arabia": "sa", Morocco: "ma", "United Arab Emirates": "ae", Palestine: "ps", Jordan: "jo",
  France: "fr", Italy: "it", Spain: "es", Germany: "de", "United Kingdom": "gb", "United States": "us",
  Canada: "ca", Brazil: "br", Japan: "jp", China: "cn", "South Korea": "kr", India: "in", Australia: "au",
  Russia: "ru", Argentina: "ar", Mexico: "mx", "South Africa": "za", Turkey: "tr", Greece: "gr", Portugal: "pt",
  Netherlands: "nl", Belgium: "be", Switzerland: "ch", Sweden: "se", Norway: "no", Denmark: "dk", Finland: "fi",
  Poland: "pl", Ukraine: "ua", Ireland: "ie", Pakistan: "pk", Bangladesh: "bd", Indonesia: "id", Malaysia: "my",
  Singapore: "sg", Thailand: "th", Vietnam: "vn", Philippines: "ph", "New Zealand": "nz", Nigeria: "ng",
  Kenya: "ke", Algeria: "dz", Tunisia: "tn", Qatar: "qa", Peru: "pe", Chile: "cl", Colombia: "co", Croatia: "hr",
  Romania: "ro", Ethiopia: "et", Ghana: "gh", Tanzania: "tz", Nepal: "np", "Sri Lanka": "lk", Cambodia: "kh",
  Iceland: "is", Luxembourg: "lu"
};

const palette = [
  ["red", "أحمر", "#ed5b5b"], ["blue", "أزرق", "#4389df"], ["yellow", "أصفر", "#ffd447"],
  ["green", "أخضر", "#39ae72"], ["orange", "برتقالي", "#f28a36"], ["purple", "بنفسجي", "#9561cf"],
  ["pink", "وردي", "#ee82ad"], ["brown", "بني", "#98623f"], ["black", "أسود", "#28313a"],
  ["white", "أبيض", "#ffffff"], ["gray", "رمادي", "#8d99a6"], ["cyan", "سماوي", "#38bccc"],
  ["navy", "كحلي", "#303f85"], ["lime", "أخضر فاتح", "#a0c83b"], ["magenta", "أرجواني", "#c43a8e"],
  ["teal", "فيروزي", "#258f86"], ["coral", "مرجاني", "#f17668"], ["gold", "ذهبي", "#d9a51c"],
  ["beige", "بيج", "#d8c49b"], ["indigo", "نيلي", "#5145a6"]
];
const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const arabicLetters = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];

const animals = [
  ["lion", "أسد", "🦁"], ["cat", "قطة", "🐱"], ["dog", "كلب", "🐶"], ["rabbit", "أرنب", "🐰"],
  ["elephant", "فيل", "🐘"], ["giraffe", "زرافة", "🦒"], ["monkey", "قرد", "🐵"], ["panda", "باندا", "🐼"],
  ["tiger", "نمر", "🐯"], ["fox", "ثعلب", "🦊"], ["bear", "دب", "🐻"], ["zebra", "حمار وحشي", "🦓"],
  ["frog", "ضفدع", "🐸"], ["turtle", "سلحفاة", "🐢"], ["penguin", "بطريق", "🐧"], ["owl", "بومة", "🦉"],
  ["horse", "حصان", "🐴"], ["sheep", "خروف", "🐑"], ["cow", "بقرة", "🐮"], ["chicken", "دجاجة", "🐔"],
  ["dolphin", "دلفين", "🐬"], ["whale", "حوت", "🐳"], ["octopus", "أخطبوط", "🐙"], ["bee", "نحلة", "🐝"],
  ["butterfly", "فراشة", "🦋"], ["camel", "جمل", "🐪"], ["koala", "كوالا", "🐨"], ["deer", "غزال", "🦌"]
];
const fruits = [
  ["apple", "تفاحة", "🍎"], ["banana", "موز", "🍌"], ["orange", "برتقال", "🍊"], ["grapes", "عنب", "🍇"],
  ["strawberry", "فراولة", "🍓"], ["watermelon", "بطيخ", "🍉"], ["pineapple", "أناناس", "🍍"], ["peach", "خوخ", "🍑"],
  ["pear", "كمثرى", "🍐"], ["cherries", "كرز", "🍒"], ["lemon", "ليمون", "🍋"], ["mango", "مانجو", "🥭"],
  ["kiwi", "كيوي", "🥝"], ["coconut", "جوز الهند", "🥥"], ["blueberries", "توت أزرق", "🫐"], ["melon", "شمام", "🍈"],
  ["avocado", "أفوكادو", "🥑"], ["tomato", "طماطم", "🍅"], ["plum", "برقوق", "🫒"], ["corn", "ذرة", "🌽"]
];
const shapes = [
  ["triangle", "مثلث", "🔺"], ["circle", "دائرة", "🟠"], ["square", "مربع", "🟥"], ["rectangle", "مستطيل", "▰"],
  ["star", "نجمة", "⭐"], ["heart", "قلب", "❤️"], ["diamond", "مُعين", "🔷"], ["oval", "شكل بيضاوي", "🥚"],
  ["crescent", "هلال", "🌙"], ["hexagon", "سداسي الأضلاع", "⬡"], ["pentagon", "خماسي الأضلاع", "⬟"], ["arrow", "سهم", "➡️"],
  ["cross", "صليب", "✚"], ["cloud", "سحابة", "☁️"], ["spiral", "لولب", "🌀"], ["semicircle", "نصف دائرة", "◐"],
  ["parallelogram", "متوازي الأضلاع", "▱"], ["octagon", "مثمن الأضلاع", "🛑"]
];
const family = [
  ["mother", "الأم", "👩", "Who is your female parent?", "من هي والدتك؟"],
  ["father", "الأب", "👨", "Who is your male parent?", "من هو والدك؟"],
  ["sister", "الأخت", "👧", "What do you call a girl who shares a parent with you?", "ماذا تسمّي الفتاة التي تشاركك أحد والديك؟"],
  ["brother", "الأخ", "👦", "What do you call a boy who shares a parent with you?", "ماذا تسمّي الصبي الذي يشاركك أحد والديك؟"],
  ["grandmother", "الجدة", "👵", "Who is your parent's mother?", "من هي أم والدتك أو والدك؟"],
  ["grandfather", "الجد", "👴", "Who is your parent's father?", "من هو والد والدتك أو والدك؟"],
  ["baby", "الرضيع", "👶", "What do you call a very young child in a family?", "ماذا تسمّي الطفل الصغير جدًا في العائلة؟"],
  ["aunt", "العمة أو الخالة", "👩‍🦰", "What do you call your parent's sister?", "ماذا تسمّي أخت والدتك أو والدك؟"],
  ["uncle", "العم أو الخال", "👨‍🦱", "What do you call your parent's brother?", "ماذا تسمّي أخا والدتك أو والدك؟"],
  ["cousin", "ابن أو ابنة العم أو الخال", "🧒", "What do you call the child of your aunt or uncle?", "ماذا تسمّي ابن أو ابنة عمتك أو خالتك أو عمك أو خالك؟"]
];

const categoryKeys = ["colors", "numbers", "englishAlphabet", "arabicAlphabet", "animals", "fruits", "shapes", "flags", "family"];
const categoryIcons = ["🎨", "🔢", "🔤", "🅰️", "🐶", "🍎", "🔺", "🌍", "👨‍👩‍👧‍👦"];
const categoryPools = {
  animals,
  fruits,
  shapes,
  flags: countries,
  family
};
const lookAlikeGroups = {
  colors: [
    ["red", "coral", "pink", "magenta", "orange"], ["blue", "navy", "indigo", "cyan"],
    ["green", "lime", "teal"], ["yellow", "gold", "orange"], ["black", "white", "gray", "brown", "beige"]
  ],
  animals: [
    ["lion", "tiger", "bear", "panda", "koala"], ["cat", "dog", "rabbit", "fox"],
    ["elephant", "giraffe", "zebra", "deer", "camel"], ["horse", "sheep", "cow", "chicken"],
    ["penguin", "owl", "chicken"], ["dolphin", "whale", "octopus"], ["bee", "butterfly"]
  ],
  fruits: [
    ["apple", "pear", "peach", "plum", "tomato"], ["strawberry", "grapes", "cherries", "blueberries"],
    ["banana", "pineapple", "mango", "coconut"], ["orange", "lemon", "kiwi"],
    ["watermelon", "melon", "coconut"], ["avocado", "kiwi", "lime"]
  ],
  shapes: [
    ["triangle", "pentagon", "hexagon", "octagon"], ["circle", "oval", "semicircle"],
    ["square", "rectangle", "parallelogram"], ["star", "diamond", "heart", "crescent"]
  ],
  flags: [
    ["United States", "Australia", "New Zealand", "United Kingdom"], ["Netherlands", "Luxembourg", "Russia", "Serbia"],
    ["Poland", "Indonesia", "Monaco", "Singapore"], ["Finland", "Greece", "Sweden", "Norway"],
    ["France", "Italy", "Ireland", "Romania"], ["Germany", "Belgium", "Austria", "Hungary"],
    ["Pakistan", "Saudi Arabia", "Bangladesh", "Turkey"]
  ],
  arabicAlphabet: [
    ["ب", "ت", "ث"], ["ج", "ح", "خ"], ["د", "ذ"], ["ر", "ز"], ["س", "ش"],
    ["ص", "ض"], ["ط", "ظ"], ["ع", "غ"], ["ف", "ق"], ["ك", "ل"], ["ه", "ة"]
  ]
};

const text = {
  en: {
    welcome: "Welcome, little star!", subtitle: "Play, learn, and shine! 🌟", play: "Play Now", settings: "Settings",
    greetingReplay: "Hear “Let's play!” again",
    chooseCategory: "Choose a category", chooseLevel: "Choose a level", progress: "Levels complete", level: "Level",
    question: "Question", score: "Score", streak: "Streak", accuracy: "Accuracy", categories: "Categories",
    settingsSound: "Sound effects", settingsMusic: "Background music", language: "Language", home: "Home",
    next: "Next question", finish: "See results", replay: "Replay", nextLevel: "Next level", correct: "Wonderful!", incorrect: "The correct answer is:", result: "Level results",
    passed: "Level complete! Great job!", tryAgain: "Keep practicing. Replay to try again.", correctCount: "Correct answers",
    achievement: "Achievements", firstLevelAchievement: "First level completed", perfectAchievement: "Perfect score", categoryDescription: "Choose a subject to start learning.", levelDescription: "Answer at least 6 of 10 to unlock the next level.", locked: "Complete the previous level to unlock this one.",
    colorQuestion: "Find this color: ", numberQuestion: "Choose the number for: ", numberSuffix: ".", englishLetterQuestion: "Which letter do you see?", uppercaseQuestion: "Which lowercase letter matches ", lowercaseQuestion: "?", arabicLetterQuestion: "Which Arabic letter do you see?",
    animalQuestion: "Which animal is this?", fruitQuestion: "", shapeQuestion: "Which shape is this?", flagQuestion: "Which country does this flag belong to?",
    colors: "Colors", numbers: "Numbers", englishAlphabet: "English Alphabet", arabicAlphabet: "Arabic Alphabet", animals: "Animals", fruits: "Fruits", shapes: "Shapes", flags: "Flags", family: "Family",
    colorsInfo: "Learn colors by name and shade.", numbersInfo: "Read number words and choose digits.", englishAlphabetInfo: "Learn uppercase and lowercase letters.", arabicAlphabetInfo: "Discover the Arabic alphabet.", animalsInfo: "Name the animal you see.", fruitsInfo: "Learn fruit names from pictures.", shapesInfo: "Recognize everyday shapes.", flagsInfo: "Explore flags from around the world.", familyInfo: "Learn about family members.",
    familyQuestion: "Who is this family member?",
    colorNames: Object.fromEntries(palette.map(([en]) => [en, en[0].toUpperCase() + en.slice(1)])),
    animalNames: Object.fromEntries(animals.map(([en]) => [en, en[0].toUpperCase() + en.slice(1)])),
    fruitNames: Object.fromEntries(fruits.map(([en]) => [en, en[0].toUpperCase() + en.slice(1)])),
    shapeNames: Object.fromEntries(shapes.map(([en]) => [en, en[0].toUpperCase() + en.slice(1)])),
    colorWordQuestion: "Color: ", colorCorrect: "Great color spotting!", correctFeedback: "That's right! 🌟", incorrectFeedback: "Good try!", answerTryAgain: "Try again! You can do it!",
    progressSaved: "Your progress is saved on this device.", levelsUnlocked: "Unlocked", bestScore: "Best", stars: "Stars",
    musicOn: "Background music is on.", musicOff: "Background music is off.", mute: "Mute sounds", unmute: "Turn sounds on", chooseLanguage: "Choose your language",
    and: "and", hundred: "one hundred", points: "points", fiveStreak: "Five-answer streak!", keepGoing: "Keep learning to unlock an achievement.", questionLoadError: "Sorry, this level could not be opened. Please try again.", exploreInfo: "Explore flags from around the world.", exploreButton: "Explore flags",
    numberWords: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    tensWords: ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  },
  ar: {
    welcome: "مرحبًا يا نجم صغير!", subtitle: "العب وتعلّم وتألق! 🌟", play: "العب الآن", settings: "الإعدادات",
    greetingReplay: "استمع إلى “Let's play!” مرة أخرى",
    chooseCategory: "اختر فئة", chooseLevel: "اختر مستوى", progress: "المستويات المكتملة", level: "المستوى",
    question: "السؤال", score: "النقاط", streak: "سلسلة الإجابات", accuracy: "الدقة", categories: "الفئات",
    settingsSound: "المؤثرات الصوتية", settingsMusic: "موسيقى الخلفية", language: "اللغة", home: "الرئيسية",
    next: "السؤال التالي", finish: "عرض النتائج", replay: "أعد اللعب", nextLevel: "المستوى التالي", correct: "أحسنت!", incorrect: "الإجابة الصحيحة هي:", result: "نتائج المستوى",
    passed: "أكملت المستوى! أحسنت!", tryAgain: "واصل التدريب وأعد اللعب للمحاولة مجددًا.", correctCount: "الإجابات الصحيحة",
    achievement: "الإنجازات", firstLevelAchievement: "إكمال المستوى الأول", perfectAchievement: "نتيجة كاملة", categoryDescription: "اختر موضوعًا لتبدأ التعلّم.", levelDescription: "أجب عن ٦ من ١٠ على الأقل لفتح المستوى التالي.", locked: "أكمل المستوى السابق لفتح هذا المستوى.",
    colorQuestion: "اختر هذا اللون: ", numberQuestion: "اختر الرقم المطابق للكلمة: ", numberSuffix: "؟", englishLetterQuestion: "ما الحرف الذي تراه؟", uppercaseQuestion: "ما الحرف الصغير المطابق لـ ", lowercaseQuestion: "؟", arabicLetterQuestion: "ما الحرف العربي الذي تراه؟",
    animalQuestion: "ما اسم هذا الحيوان؟", fruitQuestion: "", shapeQuestion: "ما اسم هذا الشكل؟", flagQuestion: "إلى أي دولة ينتمي هذا العلم؟",
    colors: "الألوان", numbers: "الأرقام", englishAlphabet: "الأبجدية الإنجليزية", arabicAlphabet: "الأبجدية العربية", animals: "الحيوانات", fruits: "الفواكه", shapes: "الأشكال", flags: "الأعلام", family: "العائلة",
    colorsInfo: "تعلّم أسماء الألوان ودرجاتها.", numbersInfo: "اقرأ كلمات الأرقام واختر الرقم.", englishAlphabetInfo: "تعلّم الحروف الكبيرة والصغيرة.", arabicAlphabetInfo: "اكتشف حروف الأبجدية العربية.", animalsInfo: "سمّ الحيوان الذي تراه.", fruitsInfo: "تعلّم أسماء الفواكه من الصور.", shapesInfo: "تعرّف على الأشكال من حولك.", flagsInfo: "اكتشف أعلام الدول حول العالم.", familyInfo: "تعرّف على أفراد العائلة.",
    familyQuestion: "من هو فرد العائلة هذا؟",
    colorNames: Object.fromEntries(palette.map(([en, ar]) => [en, ar])),
    animalNames: Object.fromEntries(animals.map(([en, ar]) => [en, ar])),
    fruitNames: Object.fromEntries(fruits.map(([en, ar]) => [en, ar])),
    shapeNames: Object.fromEntries(shapes.map(([en, ar]) => [en, ar])),
    colorWordQuestion: "اللون: ", colorCorrect: "أحسنت تمييز اللون!", correctFeedback: "إجابة صحيحة! 🌟", incorrectFeedback: "محاولة رائعة!", answerTryAgain: "حاول مرة أخرى! أنت تستطيع!",
    progressSaved: "تم حفظ تقدمك على هذا الجهاز.", levelsUnlocked: "مفتوح", bestScore: "أفضل نتيجة", stars: "نجوم",
    musicOn: "موسيقى الخلفية تعمل.", musicOff: "موسيقى الخلفية متوقفة.", mute: "كتم الأصوات", unmute: "تشغيل الأصوات", chooseLanguage: "اختر لغتك",
    and: "و", hundred: "مئة", points: "نقطة", fiveStreak: "سلسلة من خمس إجابات صحيحة!", keepGoing: "واصل التعلّم لفتح إنجاز.", questionLoadError: "عذرًا، تعذّر فتح هذا المستوى. حاول مجددًا.", exploreInfo: "اكتشف أعلام الدول حول العالم.", exploreButton: "استكشف الأعلام",
    numberWords: ["صفر", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"],
    tensWords: ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"]
  }
};

const initialSettings = readJson(STORAGE.settings, {});
const initialProgress = readJson(STORAGE.progress, {});
const progress = {
  categories: initialProgress.categories && typeof initialProgress.categories === "object" ? initialProgress.categories : {},
  legacyFlagGame: initialProgress.legacyFlagGame || (initialProgress.unlockedLevel || initialProgress.records
    ? { unlockedLevel: initialProgress.unlockedLevel || 1, records: initialProgress.records || {} }
    : null),
  achievements: Array.isArray(initialProgress.achievements) ? initialProgress.achievements : []
};

const state = {
  language: safeGet(STORAGE.language) === "ar" ? "ar" : "en",
  muted: initialSettings.muted === true,
  musicEnabled: initialSettings.musicEnabled === true,
  timerEnabled: initialSettings.timerEnabled === true,
  category: null,
  level: 1,
  questions: [],
  questionIndex: 0,
  selected: null,
  answered: 0,
  correct: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  audio: null,
  musicTimer: null,
  feedbackTimer: null,
  answerAdvanceTimer: null,
  voiceTimer: null,
  answerSubmitted: false,
  greetingPlaying: false,
  praisePlaying: false,
  voicePlaying: false,
  celebrationPlaying: false,
  languageReturnScreen: null
};

const screenIds = ["languageScreen", "startScreen", "modesScreen", "questionScreen", "exploreScreen", "settingsScreen", "endScreen"];
const screens = screenIds.map((id) => document.getElementById(id));

function safeGet(key) {
  try { return localStorage.getItem(key); }
  catch (error) {
    console.error("Could not read saved game data.", error);
    return null;
  }
}

function validateQuestionSet(category, questions) {
  if (questions.length !== QUESTIONS_PER_LEVEL) {
    throw new Error(`${category} level ${state.level} must have exactly ${QUESTIONS_PER_LEVEL} questions.`);
  }
  questions.forEach((question, index) => {
    const choices = question.choices;
    if (!Array.isArray(choices) || choices.length !== 4
      || choices.filter((choice) => choice.correct).length !== 1
      || new Set(choices.map((choice) => choice.id)).size !== 4) {
      throw new Error(`${category} level ${state.level}, question ${index + 1} must have four unique choices and exactly one correct answer.`);
    }
    if (category === "numbers" && !choices.some((choice) => choice.correct && choice.value === question.target.value)) {
      throw new Error(`Number question ${index + 1} is missing the matching answer.`);
    }
    if (category === "flags" && (!countries.some(([country]) => country === question.target.id)
      || !choices.some((choice) => choice.correct && choice.id === question.target.id))) {
      throw new Error(`Flag question ${index + 1} is missing its matching country answer.`);
    }
  });
}

function safeSet(key, value) {
  try { localStorage.setItem(key, value); }
  catch (error) { console.error("Could not save game data on this device.", error); }
}

function readJson(key, fallback) {
  try {
    const raw = safeGet(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Could not read saved game data for ${key}.`, error);
    return fallback;
  }
}

function saveSettings() {
  safeSet(STORAGE.settings, JSON.stringify({
    ...initialSettings,
    muted: state.muted,
    musicEnabled: state.musicEnabled,
    timerEnabled: state.timerEnabled
  }));
}

function saveProgress() {
  safeSet(STORAGE.progress, JSON.stringify(progress));
}

function tr(key) {
  return text[state.language][key] ?? text.en[key] ?? key;
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function countryName(country) {
  return country[state.language === "ar" ? 1 : 0];
}

function categoryProgress(category) {
  const current = progress.categories[category];
  if (current && typeof current === "object") {
    return current;
  }
  const created = { unlocked: 1, records: {} };
  progress.categories[category] = created;
  return created;
}

function showScreen(screen) {
  if (!screen) {
    console.error("A requested game screen does not exist.");
    return;
  }
  screens.forEach((item) => { item.hidden = item !== screen; });
  document.getElementById("gameHeader").hidden = screen === document.getElementById("startScreen") || screen === document.getElementById("languageScreen");
}

function applyLanguage(language) {
  if (!text[language]) return;
  state.language = language;
  safeSet(STORAGE.language, language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  const setText = (id, value) => { document.getElementById(id).textContent = value; };
  setText("languageKicker", tr("chooseLanguage"));
  setText("languageSubtitle", tr("subtitle"));
  setText("welcomeKicker", tr("welcome"));
  setText("coverSubtitle", tr("subtitle"));
  setText("playLabel", tr("play"));
  setText("greetingButtonLabel", tr("greetingReplay"));
  setText("settingsLabel", tr("settings"));
  setText("scoreLabel", tr("score"));
  setText("settingsTitle", tr("settings"));
  setText("soundSettingLabel", tr("settingsSound"));
  setText("musicSettingLabel", tr("settingsMusic"));
  setText("languageSettingLabel", tr("language"));
  setText("settingsHomeLabel", tr("home"));
  setText("modeKicker", tr("chooseCategory"));
  setText("modeTitle", tr("chooseCategory"));
  setText("categoryBackLabel", tr("categories"));
  setText("exploreButtonLabel", tr("exploreButton"));
  setText("modesHomeLabel", tr("home"));
  setText("levelLabel", tr("level"));
  setText("roundLabel", tr("question"));
  setText("exploreTitle", tr("flags"));
  setText("exploreKicker", tr("exploreInfo"));
  document.getElementById("coverLanguageButton").textContent = language === "ar" ? "🌐 العربية" : "🌐 English";
  document.getElementById("settingsLanguageButton").textContent = language === "ar" ? "🌐 العربية" : "🌐 English";
  document.getElementById("greetingButton").setAttribute("aria-label", tr("greetingReplay"));
  document.getElementById("languageButton").textContent = "🌐";
  document.getElementById("languageButton").setAttribute("aria-label", language === "ar" ? "تغيير اللغة" : "Change language");
  document.getElementById("homeButton").setAttribute("aria-label", tr("home"));
  document.getElementById("backButton").textContent = language === "ar" ? "→" : "←";
  document.getElementById("backButton").setAttribute("aria-label", language === "ar" ? "العودة إلى المستويات" : "Back to levels");
  document.getElementById("categoryBackButton").firstChild.textContent = language === "ar" ? "→ " : "← ";
  document.getElementById("exploreBackButton").textContent = language === "ar" ? "→" : "←";
  document.getElementById("settingsSound").checked = !state.muted;
  document.getElementById("settingsMusic").checked = state.musicEnabled;
  updateSoundButton();

  if (!document.getElementById("questionScreen").hidden && state.category) {
    renderQuestion(true);
  } else if (!document.getElementById("endScreen").hidden && state.category) {
    renderResults(false);
  } else if (!document.getElementById("modesScreen").hidden) {
    if (state.category) renderLevels(state.category);
    else renderCategories();
  } else if (!document.getElementById("exploreScreen").hidden) {
    renderExplore();
  }
}

function updateSoundButton() {
  const button = document.getElementById("soundButton");
  button.textContent = state.muted ? "🔇" : "🔊";
  button.setAttribute("aria-label", state.muted ? tr("unmute") : tr("mute"));
}

function renderCategories() {
  state.category = null;
  document.getElementById("exploreButton").hidden = false;
  document.getElementById("categoryBackButton").hidden = true;
  document.getElementById("modeKicker").textContent = tr("chooseCategory");
  document.getElementById("modeTitle").textContent = tr("chooseCategory");
  document.getElementById("progressSummary").textContent = tr("categoryDescription");
  const grid = document.getElementById("modeGrid");
  grid.replaceChildren();
  categoryKeys.forEach((category, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mode-card category-card";
    const icon = document.createElement("span");
    icon.textContent = categoryIcons[index];
    const title = document.createElement("strong");
    title.textContent = tr(category);
    const description = document.createElement("small");
    description.textContent = tr(`${category}Info`);
    const categoryState = categoryProgress(category);
    const status = document.createElement("span");
    status.className = "level-status";
    status.textContent = `${categoryState.unlocked} / ${LEVEL_COUNT} ${tr("levelsUnlocked")}`;
    card.append(icon, title, description, status);
    card.addEventListener("click", () => renderLevels(category));
    grid.appendChild(card);
  });
  showScreen(document.getElementById("modesScreen"));
}

function renderLevels(category) {
  if (!categoryKeys.includes(category)) return renderCategories();
  document.getElementById("exploreButton").hidden = true;
  state.category = category;
  document.getElementById("categoryBackButton").hidden = false;
  document.getElementById("modeKicker").textContent = tr(category);
  document.getElementById("modeTitle").textContent = tr("chooseLevel");
  const categoryState = categoryProgress(category);
  const completeCount = Object.values(categoryState.records).filter((record) => record && record.completed).length;
  document.getElementById("progressSummary").textContent = `${tr("progress")}: ${completeCount} / ${LEVEL_COUNT}`;
  const grid = document.getElementById("modeGrid");
  grid.replaceChildren();
  for (let level = 1; level <= LEVEL_COUNT; level++) {
    const unlocked = level <= categoryState.unlocked;
    const record = categoryState.records[level];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-card level-card${unlocked ? "" : " is-locked"}`;
    button.disabled = !unlocked;
    const icon = document.createElement("span");
    icon.textContent = ["🌱", "🌼", "⭐", "🚀", "🏆"][level - 1];
    const heading = document.createElement("strong");
    heading.textContent = `${tr("level")} ${level}`;
    const description = document.createElement("small");
    description.textContent = record?.completed ? `${tr("bestScore")}: ${record.bestScore} ${tr("points")}` : tr("levelDescription");
    const status = document.createElement("span");
    status.className = "level-status";
    status.textContent = record?.completed
      ? `${"★".repeat(record.stars)}${"☆".repeat(3 - record.stars)}`
      : unlocked ? tr("levelsUnlocked") : `🔒 ${tr("locked")}`;
    button.append(icon, heading, description, status);
    button.addEventListener("click", () => startLevel(category, level));
    grid.appendChild(button);
  }
  showScreen(document.getElementById("modesScreen"));
}

function renderExplore() {
  const grid = document.getElementById("exploreGrid");
  grid.replaceChildren();
  countries.forEach((country) => {
    const card = document.createElement("article");
    card.className = "explore-card";
    const flag = document.createElement("span");
    flag.textContent = country[2];
    const name = document.createElement("strong");
    name.textContent = countryName(country);
    card.append(flag, name);
    grid.appendChild(card);
  });
}

function getNumberWord(number) {
  const words = tr("numberWords");
  if (number < 20) return words[number];
  if (number === 100) return tr("hundred");
  const tens = Math.floor(number / 10);
  const ones = number % 10;
  if (!ones) return tr("tensWords")[tens];
  return state.language === "ar"
    ? `${words[ones]} ${tr("and")}${tr("tensWords")[tens]}`
    : `${tr("tensWords")[tens]}-${words[ones]}`;
}

function formatNumber(number) {
  return state.language === "ar" ? String(number).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]) : String(number);
}

function makeChoices(target, pool, labelFor, level = 1, category = "") {
  const similarGroup = (lookAlikeGroups[category] || []).find((group) => group.includes(target.id)) || [];
  if (category === "englishAlphabet") {
    const letters = englishLetters;
    const letterIndex = letters.indexOf(target.id.toUpperCase());
    for (let offset = -3; offset <= 3; offset++) {
      const neighbor = letters[letterIndex + offset];
      if (neighbor && !similarGroup.includes(neighbor)) similarGroup.push(neighbor);
    }
  }
  const similarCount = Math.floor((level - 1) * 3 / 4);
  const similarDistractors = shuffled(pool.filter((item) => item.id !== target.id && similarGroup.includes(item.id))).slice(0, similarCount);
  const selectedIds = new Set([target.id, ...similarDistractors.map((item) => item.id)]);
  const remainingDistractors = shuffled(pool.filter((item) => !selectedIds.has(item.id))).slice(0, 3 - similarDistractors.length);
  const distractors = [...similarDistractors, ...remainingDistractors];
  const choices = shuffled([target, ...distractors]).map((item) => ({
    id: item.id,
    label: labelFor(item),
    color: item.color || null,
    correct: item.id === target.id
  }));
  if (choices.length !== 4 || choices.filter((choice) => choice.correct).length !== 1) {
    throw new Error("Question data must produce exactly four choices and one correct answer.");
  }
  return choices;
}

function createCategoryQuestions(category, level) {
  if (category === "colors") {
    const shadePool = shuffled(palette).slice(0, 10);
    return shadePool.map(([id, , color]) => {
      const target = { id, color };
      return { type: category, target: { ...target, name: text.en.colorNames[id] }, choices: makeChoices(target, palette.map(([choiceId, , choiceColor]) => ({ id: choiceId, color: choiceColor })), (item) => item.id, level, category), noChoiceText: true };
    });
  }
  if (category === "numbers") {
    const ranges = [[1, 15], [1, 25], [5, 40], [10, 70], [20, 100]];
    const [minimum, maximum] = ranges[level - 1];
    const targets = shuffled(Array.from({ length: maximum - minimum + 1 }, (_, index) => minimum + index)).slice(0, QUESTIONS_PER_LEVEL);
    return targets.map((number) => {
      const step = level < 3 ? 2 : level < 5 ? 5 : 10;
      const distractors = new Set();
      [-step * 2, -step, step, step * 2, -1, 1, -3, 3].forEach((offset) => {
        const value = number + offset;
        if (value >= minimum && value <= maximum && value !== number) distractors.add(value);
      });
      for (let value = minimum; value <= maximum && distractors.size < 3; value++) {
        if (value !== number) distractors.add(value);
      }
      const candidateNumbers = shuffled([number, ...[...distractors].slice(0, 3)]);
      const target = { id: String(number), value: number };
      return {
        type: category,
        target,
        choices: candidateNumbers.map((value) => ({ id: String(value), value, correct: value === number })),
        word: getNumberWord(number)
      };
    });
  }
  if (category === "englishAlphabet") {
    return shuffled(englishLetters).slice(0, QUESTIONS_PER_LEVEL).map((letter, index) => {
      const lower = level % 2 === 0;
      const target = lower ? letter.toLowerCase() : letter;
      const choices = makeChoices({ id: target }, englishLetters.map((item) => ({ id: lower ? item.toLowerCase() : item })), (item) => item.id, level, category);
      return { type: category, target: { id: target, display: lower ? letter : letter, lower }, choices, match: lower ? letter : null };
    });
  }
  if (category === "arabicAlphabet") {
    return shuffled(arabicLetters).slice(0, QUESTIONS_PER_LEVEL).map((letter) => ({
      type: category,
      target: { id: letter, display: letter },
      choices: makeChoices({ id: letter }, arabicLetters.map((item) => ({ id: item })), (item) => item.id, level, category)
    }));
  }
  const pool = categoryPools[category];
  return shuffled(pool).slice(0, QUESTIONS_PER_LEVEL).map((item) => {
    const [id, arabic, emoji, promptEn, promptAr] = item;
    const target = { id, arabic, emoji, promptEn, promptAr };
    return {
      type: category,
      target,
      choices: makeChoices(target, pool.map(([choiceId, choiceArabic, choiceEmoji]) => ({ id: choiceId, arabic: choiceArabic, emoji: choiceEmoji })), (choice) => state.language === "ar" ? choice.arabic : titleCase(choice.id), level, category)
    };
  });
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function startLevel(category, level) {
  const categoryState = categoryProgress(category);
  if (!categoryKeys.includes(category) || level > categoryState.unlocked || level < 1 || level > LEVEL_COUNT) return;
  cancelPendingAnswer();
  try {
    state.category = category;
    state.level = level;
    state.questions = createCategoryQuestions(category, level);
    validateQuestionSet(category, state.questions);
  } catch (error) {
    console.error("Could not create the level questions.", error);
    document.getElementById("feedback").textContent = tr("questionLoadError");
    return;
  }
  state.questionIndex = 0;
  state.selected = null;
  state.answerSubmitted = false;
  state.answered = 0;
  state.correct = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  document.getElementById("score").textContent = "0";
  showScreen(document.getElementById("questionScreen"));
  renderQuestion();
}

function questionPrompt(question) {
  switch (question.type) {
    case "colors":
      return `${tr("colorQuestion")}${question.target.name}`;
    case "numbers":
      return `${tr("numberQuestion")}${getNumberWord(question.target.value)}${tr("numberSuffix")}`;
    case "englishAlphabet":
      return question.match
        ? `${tr("uppercaseQuestion")}${question.match}${tr("lowercaseQuestion")}`
        : tr("englishLetterQuestion");
    case "arabicAlphabet": return tr("arabicLetterQuestion");
    case "animals": return tr("animalQuestion");
    case "fruits": return "";
    case "shapes": return tr("shapeQuestion");
    case "flags": return "";
    case "family": return state.language === "ar" ? question.target.promptAr : question.target.promptEn;
    default: return tr("chooseCategory");
  }
}

function renderQuestion(preserveAnswer = false) {
  window.clearTimeout(state.feedbackTimer);
  const feedbackPop = document.getElementById("feedbackPop");
  feedbackPop.hidden = true;
  feedbackPop.classList.remove("show", "correct-feedback", "wrong-feedback");
  const question = state.questions[state.questionIndex];
  if (!question) return showResults();
  const answeredBeforeRender = preserveAnswer && state.selected !== null;
  document.getElementById("levelNumber").textContent = String(state.level);
  document.getElementById("round").textContent = String(state.questionIndex + 1);
  document.getElementById("levelLabel").textContent = tr("level");
  document.getElementById("roundLabel").textContent = tr("question");
  document.getElementById("categoryLabel").textContent = `${categoryIcons[categoryKeys.indexOf(state.category)]} ${tr(state.category)} · ${tr("level")} ${state.level}`;
  document.getElementById("questionPrompt").textContent = questionPrompt(question);
  document.getElementById("feedback").textContent = "";
  document.getElementById("progressBar").style.width = `${(state.questionIndex / QUESTIONS_PER_LEVEL) * 100}%`;
  document.getElementById("gameStats").dir = state.language === "ar" ? "rtl" : "ltr";
  document.getElementById("streakStat").textContent = `${tr("streak")}: ${state.streak} 🔥`;
  document.getElementById("accuracyStat").textContent = `${tr("accuracy")}: ${state.answered ? Math.round((state.correct / state.answered) * 100) : 100}%`;
  renderQuestionVisual(question);
  renderChoices(question, answeredBeforeRender);
  if (answeredBeforeRender) {
    const answerWasCorrect = question.choices.some((choice) => choice.id === state.selected && choice.correct);
    document.getElementById("feedback").textContent = answerWasCorrect
      ? tr("correctFeedback")
      : `${tr("incorrectFeedback")} ${tr("incorrect")} ${choiceLabel(question, question.choices.find((choice) => choice.correct))}`;
    showAnswerFeedback(answerWasCorrect);
  }
}

function renderQuestionVisual(question) {
  const visual = document.getElementById("questionVisual");
  visual.replaceChildren();
  const item = question.target;
  if (question.type === "colors") {
    const swatch = document.createElement("span");
    swatch.className = "color-name-card";
    swatch.textContent = item.name;
    visual.appendChild(swatch);
  } else if (question.type === "numbers") {
    const numberWord = document.createElement("span");
    numberWord.className = "large-number-word";
    numberWord.textContent = getNumberWord(question.target.value);
    visual.appendChild(numberWord);
  } else if (question.type === "englishAlphabet" || question.type === "arabicAlphabet") {
    const letter = document.createElement("span");
    letter.className = `letter-visual${question.type === "arabicAlphabet" ? " arabic-letter" : " english-letter"}`;
    letter.textContent = item.display;
    visual.appendChild(letter);
  } else if (question.type === "fruits") {
    if (supportsFruitEmoji(item.emoji)) {
      const fruit = document.createElement("span");
      fruit.className = "picture-visual fruit-visual";
      fruit.textContent = item.emoji;
      fruit.setAttribute("aria-hidden", "true");
      visual.appendChild(fruit);
    } else {
      visual.appendChild(createFruitFallback(item.id));
    }
  } else if (question.type === "flags") {
    const flag = document.createElement("span");
    flag.className = "flag-visual";
    flag.setAttribute("role", "img");
    flag.setAttribute("aria-label", tr("flagQuestion"));
    if (supportsFlagEmoji(item.emoji)) {
      flag.textContent = item.emoji;
    } else {
      const countryCode = countryIsoCodes[item.id];
      if (!countryCode) throw new Error(`Missing flag image fallback for ${item.id}.`);
      const image = document.createElement("img");
      image.src = `https://flagcdn.com/w160/${countryCode}.png`;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      image.addEventListener("error", () => console.error(`Could not load the flag image fallback for ${item.id}.`), { once: true });
      flag.appendChild(image);
    }
    visual.appendChild(flag);
  } else {
    const emoji = document.createElement("span");
    emoji.className = "picture-visual";
    emoji.textContent = item.emoji;
    emoji.setAttribute("aria-hidden", "true");
    visual.appendChild(emoji);
  }
}

const flagEmojiSupport = new Map();
const fruitEmojiSupport = new Map();
function supportsFlagEmoji(emoji) {
  return supportsColorEmoji(emoji, flagEmojiSupport);
}

function supportsFruitEmoji(emoji) {
  return supportsColorEmoji(emoji, fruitEmojiSupport);
}

function supportsColorEmoji(emoji, cache) {
  if (cache.has(emoji)) return cache.get(emoji);
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return false;
  context.font = '72px "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.fillText(emoji, 50, 50);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  let coloredPixels = 0;
  for (let index = 0; index < pixels.length; index += 4) {
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const alpha = pixels[index + 3];
    if (alpha > 40 && Math.max(red, green, blue) - Math.min(red, green, blue) > 24) coloredPixels++;
  }
  const supported = coloredPixels >= 5;
  cache.set(emoji, supported);
  return supported;
}

function createFruitFallback(fruitId) {
  const illustrations = {
    apple: '<path d="M50 32C34 20 17 33 19 53c2 22 17 34 31 25 14 9 29-3 31-25 2-20-15-33-31-21Z" fill="#ed4b54"/><path d="M49 32c-2-9-1-15 4-21" fill="none" stroke="#714b32" stroke-width="6" stroke-linecap="round"/><path d="M53 19c12-12 25-8 26-5-3 12-13 18-25 14Z" fill="#48ad67"/>',
    banana: '<path d="M20 24c8 29 25 47 54 48 10 0 16-6 15-12-24 2-42-13-52-43-4-10-19-6-17 7Z" fill="#ffd447" stroke="#d59d21" stroke-width="5"/><path d="m24 24-7-7m68 54 8 4" stroke="#714b32" stroke-width="6" stroke-linecap="round"/>',
    orange: '<circle cx="50" cy="51" r="34" fill="#ff9b2f"/><path d="M51 18c0-8 5-12 12-13m-10 14c10-9 20-7 24-3-7 10-16 12-25 8Z" fill="#48ad67"/>',
    grapes: '<path d="M48 22c0-8 7-12 15-12" fill="none" stroke="#714b32" stroke-width="5" stroke-linecap="round"/><path d="M58 16c10-9 20-5 22-1-7 8-14 10-23 7Z" fill="#48ad67"/><g fill="#8753c9"><circle cx="40" cy="34" r="12"/><circle cx="60" cy="34" r="12"/><circle cx="30" cy="53" r="12"/><circle cx="50" cy="53" r="12"/><circle cx="70" cy="53" r="12"/><circle cx="40" cy="72" r="12"/><circle cx="60" cy="72" r="12"/><circle cx="50" cy="90" r="10"/></g>',
    strawberry: '<path d="M20 35c0-20 60-20 60 0 0 22-22 49-30 57-8-8-30-35-30-57Z" fill="#ef4655"/><path d="M50 27c-4-13-18-18-29-12 4 12 16 17 29 16 4-12 18-17 29-11-4 11-16 16-29 15Z" fill="#43a85d"/><g fill="#ffd85a"><ellipse cx="37" cy="43" rx="2" ry="4"/><ellipse cx="56" cy="42" rx="2" ry="4"/><ellipse cx="45" cy="58" rx="2" ry="4"/><ellipse cx="63" cy="58" rx="2" ry="4"/><ellipse cx="37" cy="70" rx="2" ry="4"/><ellipse cx="55" cy="75" rx="2" ry="4"/></g>',
    watermelon: '<path d="M17 33a34 34 0 0 0 66 0Z" fill="#44ad67"/><path d="M25 35a26 26 0 0 0 50 0Z" fill="#f3f5e8"/><path d="M31 36a20 20 0 0 0 38 0Z" fill="#f24d58"/><g fill="#453342"><ellipse cx="42" cy="48" rx="2" ry="4"/><ellipse cx="57" cy="48" rx="2" ry="4"/><ellipse cx="50" cy="57" rx="2" ry="4"/></g>',
    pineapple: '<path d="M50 32 31 11l19 11 2-17 7 18 18-13-14 23Z" fill="#49a963"/><path d="M29 32c0-16 42-16 42 0l-5 50c-1 13-31 13-32 0Z" fill="#f3b93f" stroke="#d89728" stroke-width="4"/><path d="m33 43 34 28m-34 0 34-28M32 57h36" stroke="#db8e25" stroke-width="3"/>',
    pear: '<path d="M50 18c-2 16-5 23-14 34-15 18-8 39 14 39s29-21 14-39c-9-11-12-18-14-34Z" fill="#a8cf45"/><path d="M51 20c0-8 3-13 9-16" fill="none" stroke="#714b32" stroke-width="5" stroke-linecap="round"/><path d="M55 14c9-10 19-8 22-4-6 9-14 12-23 10Z" fill="#48ad67"/>',
    cherries: '<path d="M48 51C36 35 36 22 44 14m6 37c5-18 17-25 27-27" fill="none" stroke="#48a65d" stroke-width="5" stroke-linecap="round"/><circle cx="36" cy="65" r="20" fill="#e94152"/><circle cx="75" cy="61" r="19" fill="#d9364c"/>',
    kiwi: '<circle cx="50" cy="52" r="34" fill="#8b583a"/><circle cx="50" cy="52" r="24" fill="#71ad4a"/><circle cx="50" cy="52" r="9" fill="#f5e8bb"/><g fill="#342d2a"><circle cx="50" cy="32" r="2"/><circle cx="65" cy="40" r="2"/><circle cx="67" cy="59" r="2"/><circle cx="54" cy="71" r="2"/><circle cx="36" cy="63" r="2"/><circle cx="34" cy="43" r="2"/></g>',
    coconut: '<circle cx="50" cy="54" r="35" fill="#815331"/><circle cx="50" cy="54" r="26" fill="#fff3dc"/><circle cx="50" cy="54" r="18" fill="#f7e6c6"/><circle cx="50" cy="54" r="8" fill="#d6b98c"/>',
    watermelonSlice: '<path d="M17 33a34 34 0 0 0 66 0Z" fill="#44ad67"/><path d="M25 35a26 26 0 0 0 50 0Z" fill="#f3f5e8"/><path d="M31 36a20 20 0 0 0 38 0Z" fill="#f24d58"/>',
    avocado: '<path d="M49 15c-10 0-14 13-19 27-11 25-17 40 1 49 14 8 43 8 57-1 16-11 5-29-7-52-7-14-18-23-32-23Z" fill="#78aa45"/><path d="M50 25c-7 0-10 11-15 23-8 18-13 31 0 38 11 6 32 6 43-1 12-8 3-22-5-39-5-12-13-21-23-21Z" fill="#c6d866"/><circle cx="51" cy="64" r="16" fill="#98603b"/>',
    tomato: '<circle cx="50" cy="53" r="33" fill="#ef4b48"/><path d="m50 24 7 15 16-9-9 16 18 5-18 5 8 17-16-10-7 18-7-18-16 10 8-17-18-5 18-5-9-16 16 9Z" fill="#47a85e"/>',
    plum: '<ellipse cx="50" cy="54" rx="28" ry="36" fill="#7955a8"/><path d="M50 18c-1 9-1 16 4 22" fill="none" stroke="#63417f" stroke-width="4"/><path d="M52 21c7-10 18-10 25-5-6 10-14 12-24 10Z" fill="#48ad67"/>',
    corn: '<path d="M35 28c-5-10-12-17-19-18 1 21 5 42 19 57m30-39c5-10 12-17 19-18-1 21-5 42-19 57Z" fill="#49a963"/><path d="M34 22c0-12 32-12 32 0v52c0 20-32 20-32 0Z" fill="#ffd43f" stroke="#e5b12d" stroke-width="4"/><path d="M42 27v45m9-48v52m9-48v44M35 39h30M35 53h30M35 66h30" stroke="#e7ac29" stroke-width="3"/>'
  };
  const fallbackIds = {
    lemon: "orange",
    peach: "apple",
    mango: "apple",
    blueberries: "grapes",
    melon: "watermelonSlice"
  };
  const artwork = illustrations[fallbackIds[fruitId] || fruitId];
  if (!artwork) throw new Error(`Missing fruit illustration fallback for ${fruitId}.`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${artwork}</svg>`;
  const image = document.createElement("img");
  image.className = "picture-visual fruit-visual fruit-fallback";
  image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  image.alt = "";
  image.setAttribute("aria-hidden", "true");
  return image;
}

function renderChoices(question, preserveAnswer) {
  const grid = document.getElementById("answerGrid");
  grid.replaceChildren();
  grid.classList.toggle("color-answer-grid", question.noChoiceText);
  grid.classList.toggle("arabic-letter-grid", question.type === "arabicAlphabet");
  grid.classList.toggle("english-letter-grid", question.type === "englishAlphabet");
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `answer-button${question.noChoiceText ? " color-answer" : ""}${question.type === "arabicAlphabet" ? " arabic-letter-choice" : ""}${question.type === "englishAlphabet" ? " english-letter-choice" : ""}`;
    button.dataset.answer = choice.id;
    button.dataset.correct = String(choice.correct);
    if (question.noChoiceText) {
      button.style.backgroundColor = choice.color;
      button.setAttribute("aria-label", text[state.language].colorNames[choice.id] || text.en.colorNames[choice.id]);
    } else {
      button.textContent = localizedChoiceLabel(question, choice);
    }
    if (preserveAnswer) {
      button.disabled = true;
      if (choice.correct) button.classList.add("correct");
      if (choice.id === state.selected && !choice.correct) button.classList.add("wrong");
    } else {
      button.addEventListener("click", () => answerQuestion(choice.id));
    }
    grid.appendChild(button);
  });
}

function answerQuestion(answerId) {
  if (state.selected !== null || state.answerSubmitted) return;
  state.selected = answerId;
  const question = state.questions[state.questionIndex];
  const correct = question.choices.some((choice) => choice.id === answerId && choice.correct);
  document.querySelectorAll("#answerGrid .answer-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") button.classList.add("correct");
    if (button.dataset.answer === answerId && !correct) button.classList.add("wrong");
  });
  if (correct) {
    playTone("correct");
    playCelebrationSound();
    speakPraise();
  } else {
    playTone("incorrect");
  }
  showAnswerFeedback(correct);
  document.getElementById("feedback").textContent = correct ? tr("correctFeedback") : `${tr("incorrectFeedback")} ${tr("incorrect")} ${choiceLabel(question, question.choices.find((choice) => choice.correct))}`;
  window.clearTimeout(state.answerAdvanceTimer);
  state.answerAdvanceTimer = window.setTimeout(completeAnswer, ANSWER_FEEDBACK_DELAY);
}

function showAnswerFeedback(correct) {
  const popup = document.getElementById("feedbackPop");
  const sticker = document.getElementById("feedbackSticker");
  const message = document.getElementById("feedbackMessage");
  popup.classList.remove("show", "correct-feedback", "wrong-feedback");
  popup.hidden = false;
  sticker.textContent = correct ? "⭐ 🎉" : "🐣 💛";
  message.textContent = correct ? tr("correctFeedback") : tr("answerTryAgain");
  popup.classList.add(correct ? "correct-feedback" : "wrong-feedback");
  requestAnimationFrame(() => popup.classList.add("show"));
  window.clearTimeout(state.feedbackTimer);
  state.feedbackTimer = window.setTimeout(() => {
    popup.classList.remove("show", "correct-feedback", "wrong-feedback");
    popup.hidden = true;
  }, 1250);
}

function cancelPendingAnswer() {
  window.clearTimeout(state.answerAdvanceTimer);
  window.clearTimeout(state.feedbackTimer);
  state.answerAdvanceTimer = null;
  state.feedbackTimer = null;
  const popup = document.getElementById("feedbackPop");
  popup.hidden = true;
  popup.classList.remove("show", "correct-feedback", "wrong-feedback");
}

function choiceLabel(question, choice) {
  if (question.noChoiceText) return text[state.language].colorNames[choice.id] || text.en.colorNames[choice.id];
  return localizedChoiceLabel(question, choice);
}

function localizedChoiceLabel(question, choice) {
  if (question.type === "numbers") return formatNumber(choice.value);
  if (question.type === "animals" || question.type === "fruits" || question.type === "shapes" || question.type === "family") {
    const item = categoryPools[question.type].find(([id]) => id === choice.id);
    return state.language === "ar" ? item[1] : titleCase(item[0]);
  }
  if (question.type === "flags") {
    return countryName(countries.find(([id]) => id === choice.id));
  }
  return choice.label;
}

function completeAnswer() {
  if (state.selected === null || state.answerSubmitted) return;
  state.answerSubmitted = true;
  state.answerAdvanceTimer = null;
  const question = state.questions[state.questionIndex];
  const correct = question.choices.some((choice) => choice.id === state.selected && choice.correct);
  state.answered++;
  if (correct) {
    state.correct++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.score += 10 + (state.streak > 1 ? Math.min(10, (state.streak - 1) * 2) : 0);
  } else {
    state.streak = 0;
  }
  document.getElementById("score").textContent = String(state.score);
  document.getElementById("streakStat").textContent = `${tr("streak")}: ${state.streak} 🔥`;
  document.getElementById("accuracyStat").textContent = `${tr("accuracy")}: ${Math.round((state.correct / state.answered) * 100)}%`;
  if (state.questionIndex === QUESTIONS_PER_LEVEL - 1) {
    showResults();
    return;
  }
  state.questionIndex++;
  state.selected = null;
  state.answerSubmitted = false;
  renderQuestion();
}

function showResults() {
  const categoryState = categoryProgress(state.category);
  const passed = state.correct >= 6;
  const stars = !passed ? 0 : state.correct === 10 ? 3 : state.correct >= 8 ? 2 : 1;
  const previous = categoryState.records[state.level] || { bestScore: 0, bestCorrect: 0, stars: 0, completed: false };
  categoryState.records[state.level] = {
    bestScore: Math.max(previous.bestScore || 0, state.score),
    bestCorrect: Math.max(previous.bestCorrect || 0, state.correct),
    bestAccuracy: Math.max(previous.bestAccuracy || 0, state.correct * 10),
    stars: Math.max(previous.stars, stars),
    completed: previous.completed || passed
  };
  if (passed && state.level === categoryState.unlocked && state.level < LEVEL_COUNT) {
    categoryState.unlocked++;
  }
  if (passed && !progress.achievements.includes("first-level")) progress.achievements.push("first-level");
  if (state.bestStreak >= 5 && !progress.achievements.includes("five-streak")) progress.achievements.push("five-streak");
  if (state.correct === 10 && !progress.achievements.includes("perfect-level")) progress.achievements.push("perfect-level");
  saveProgress();
  document.getElementById("finishKicker").textContent = `${tr(state.category)} · ${tr("level")} ${state.level}`;
  document.getElementById("finishTitle").textContent = passed ? tr("passed") : tr("tryAgain");
  document.getElementById("endMessage").textContent = `${tr("correctCount")}: ${state.correct} / ${QUESTIONS_PER_LEVEL} · ${tr("score")}: ${state.score} · ${tr("accuracy")}: ${state.correct * 10}%`;
  document.getElementById("resultDetails").textContent = `${"★".repeat(stars)}${"☆".repeat(3 - stars)}  ·  ${tr("progressSaved")}`;
  document.getElementById("resultStars").textContent = `${"★".repeat(stars)}${"☆".repeat(3 - stars)}`;
  document.getElementById("resultStars").setAttribute("aria-label", `${stars} ${tr("stars")}`);
  document.getElementById("achievementHeading").textContent = tr("achievement");
  document.getElementById("achievementList").textContent = unlockedAchievementText();
  document.getElementById("playAgainButton").textContent = `↻ ${tr("replay")}`;
  document.getElementById("endHomeButton").textContent = `⌂ ${tr("home")}`;
  const next = document.getElementById("nextLevelButton");
  next.hidden = !passed || state.level >= LEVEL_COUNT;
  next.textContent = tr("nextLevel");
  next.disabled = !passed;
  showScreen(document.getElementById("endScreen"));
  if (passed) {
    playTone("complete");
    celebrate();
  }
}

function renderResults() {
  const categoryState = categoryProgress(state.category);
  const record = categoryState.records[state.level] || { bestScore: state.correct, stars: 0, completed: false };
  const passed = record.completed;
  const stars = record.stars;
  document.getElementById("finishKicker").textContent = `${tr(state.category)} · ${tr("level")} ${state.level}`;
  document.getElementById("finishTitle").textContent = passed ? tr("passed") : tr("tryAgain");
  document.getElementById("endMessage").textContent = `${tr("correctCount")}: ${state.correct} / ${QUESTIONS_PER_LEVEL} · ${tr("score")}: ${state.score} · ${tr("accuracy")}: ${state.answered ? Math.round(state.correct / state.answered * 100) : 0}%`;
  document.getElementById("resultDetails").textContent = `${"★".repeat(stars)}${"☆".repeat(3 - stars)}  ·  ${tr("progressSaved")}`;
  document.getElementById("resultStars").textContent = `${"★".repeat(stars)}${"☆".repeat(3 - stars)}`;
  document.getElementById("resultStars").setAttribute("aria-label", `${stars} ${tr("stars")}`);
  document.getElementById("achievementHeading").textContent = tr("achievement");
  document.getElementById("achievementList").textContent = unlockedAchievementText();
  document.getElementById("playAgainButton").textContent = `↻ ${tr("replay")}`;
  document.getElementById("endHomeButton").textContent = `⌂ ${tr("home")}`;
  const next = document.getElementById("nextLevelButton");
  next.hidden = !passed || state.level >= LEVEL_COUNT;
  next.textContent = tr("nextLevel");
}

function unlockedAchievementText() {
  const names = {
    "first-level": tr("firstLevelAchievement"),
    "five-streak": tr("fiveStreak"),
    "perfect-level": tr("perfectAchievement")
  };
  const unlocked = progress.achievements.map((achievement) => names[achievement]).filter(Boolean);
  return unlocked.length ? unlocked.join(" · ") : tr("keepGoing");
}

function playTone(kind) {
  if (state.muted) return;
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextType) return;
  try {
    state.audio = state.audio || new AudioContextType();
    const audio = state.audio;
    const play = () => {
      const notes = kind === "correct" ? [587, 740] : kind === "complete" ? [523, 659, 784, 1047] : [392];
      notes.forEach((frequency, index) => {
        const start = audio.currentTime + index * 0.13;
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(kind === "incorrect" ? 0.035 : 0.055, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
        oscillator.connect(gain);
        gain.connect(audio.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.13);
      });
    };
    if (audio.state === "suspended") audio.resume().then(play).catch((error) => console.error("Could not resume game audio.", error));
    else play();
  } catch (error) {
    console.error("Could not play a game sound.", error);
  }
}

function setMuted(muted) {
  state.muted = muted;
  if (muted && state.voicePlaying && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    state.greetingPlaying = false;
    state.praisePlaying = false;
    state.voicePlaying = false;
    window.clearTimeout(state.voiceTimer);
    state.voiceTimer = null;
  }
  document.getElementById("settingsSound").checked = !muted;
  updateSoundButton();
  saveSettings();
  if (muted) stopMusic();
  else if (state.musicEnabled) startMusic();
}

function startMusic() {
  stopMusic();
  if (state.muted || !state.musicEnabled) return;
  playMusicNote();
  state.musicTimer = window.setInterval(playMusicNote, 2400);
}

function playMusicNote() {
  if (state.muted || !state.musicEnabled) return;
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextType) return;
  try {
    state.audio = state.audio || new AudioContextType();
    const oscillator = state.audio.createOscillator();
    const gain = state.audio.createGain();
    const start = state.audio.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.value = [523.25, 659.25, 783.99, 659.25][Math.floor(Math.random() * 4)];
    gain.gain.setValueAtTime(0.012, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);
    oscillator.connect(gain);
    gain.connect(state.audio.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.46);
  } catch (error) {
    console.error("Could not play background music.", error);
    stopMusic();
  }
}

function stopMusic() {
  if (state.musicTimer !== null) {
    window.clearInterval(state.musicTimer);
    state.musicTimer = null;
  }
}

function setMusicEnabled(enabled) {
  state.musicEnabled = enabled;
  saveSettings();
  if (enabled) startMusic();
  else stopMusic();
}

function celebrate() {
  const layer = document.getElementById("confetti");
  layer.replaceChildren();
  ["#ff7868", "#ffd85a", "#54cba0", "#57b8e8", "#a66bdc", "#f58bb0"].forEach((color, colorIndex) => {
    for (let item = 0; item < 4; item++) {
      const piece = document.createElement("span");
      piece.style.left = `${35 + Math.random() * 30}%`;
      piece.style.backgroundColor = color;
      piece.style.animationDelay = `${(colorIndex + item) * 35}ms`;
      piece.style.setProperty("--drift", `${-130 + Math.random() * 260}px`);
      piece.style.setProperty("--spin", `${360 + Math.random() * 540}deg`);
      layer.appendChild(piece);
    }
  });
  window.setTimeout(() => layer.replaceChildren(), 1500);
}

function speakGreeting() {
  speakChildFriendlyVoice("Let's play!", "greeting");
}

function speakPraise() {
  speakChildFriendlyVoice("Great job!", "praise");
}

function speakChildFriendlyVoice(phrase, kind) {
  if (state.muted || state.voicePlaying
    || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
  const speech = window.speechSynthesis;
  if (speech.speaking || speech.pending) return;
  const englishVoices = speech.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const playfulVoice = englishVoices
    .map((voice) => ({
      voice,
      score: /child|female|samantha|karen|zira|jenny|aria|ava|susan|tessa|serena|moira/i.test(voice.name) ? 1 : 0
    }))
    .sort((left, right) => right.score - left.score)[0]?.voice;
  const utterance = new window.SpeechSynthesisUtterance(phrase);
  utterance.lang = playfulVoice ? playfulVoice.lang : "en-US";
  if (playfulVoice) utterance.voice = playfulVoice;
  utterance.rate = 0.96;
  utterance.pitch = 1.48;
  utterance.volume = 0.9;
  state.voicePlaying = true;
  state.greetingPlaying = kind === "greeting";
  state.praisePlaying = kind === "praise";
  const finishVoice = () => {
    state.voicePlaying = false;
    state.greetingPlaying = false;
    state.praisePlaying = false;
    window.clearTimeout(state.voiceTimer);
    state.voiceTimer = null;
  };
  utterance.onend = finishVoice;
  utterance.onerror = finishVoice;
  state.voiceTimer = window.setTimeout(finishVoice, 4000);
  try {
    speech.speak(utterance);
  } catch (error) {
    finishVoice();
    console.error(`Could not play the ${kind} voice.`, error);
  }
}

function playCelebrationSound() {
  const speech = window.speechSynthesis;
  if (state.muted || state.celebrationPlaying || state.greetingPlaying
    || (speech && (speech.speaking || speech.pending))) return;
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextType) return;
  state.celebrationPlaying = true;
  window.setTimeout(() => { state.celebrationPlaying = false; }, 800);
  try {
    state.audio = state.audio || new AudioContextType();
    const audio = state.audio;
    const play = () => {
      [880, 1174, 1397].forEach((frequency, index) => {
        const start = audio.currentTime + 0.28 + index * 0.1;
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.028, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.16);
        oscillator.connect(gain);
        gain.connect(audio.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.17);
      });
    };
    if (audio.state === "suspended") {
      audio.resume().then(play).catch((error) => {
        state.celebrationPlaying = false;
        console.error("Could not resume the celebration sound.", error);
      });
    } else {
      play();
    }
  } catch (error) {
    state.celebrationPlaying = false;
    console.error("Could not play the celebration sound.", error);
  }
}

function bindButtons() {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    const returnScreen = state.languageReturnScreen || document.getElementById("startScreen");
    state.languageReturnScreen = null;
    showScreen(returnScreen);
    if (returnScreen.id === "questionScreen") renderQuestion(true);
    else if (returnScreen.id === "endScreen") renderResults();
    else if (returnScreen.id === "modesScreen") state.category ? renderLevels(state.category) : renderCategories();
    else if (returnScreen.id === "exploreScreen") renderExplore();
  }));
  const openLanguage = () => {
    state.languageReturnScreen = screens.find((screen) => !screen.hidden && screen.id !== "languageScreen") || document.getElementById("startScreen");
    showScreen(document.getElementById("languageScreen"));
  };
  document.getElementById("playButton").addEventListener("click", () => {
    speakGreeting();
    renderCategories();
  });
  document.getElementById("greetingButton").addEventListener("click", speakGreeting);
  document.getElementById("exploreButton").addEventListener("click", () => {
    renderExplore();
    showScreen(document.getElementById("exploreScreen"));
  });
  document.getElementById("coverLanguageButton").addEventListener("click", openLanguage);
  document.getElementById("languageButton").addEventListener("click", openLanguage);
  document.getElementById("settingsLanguageButton").addEventListener("click", openLanguage);
  document.getElementById("coverSettingsButton").addEventListener("click", () => showScreen(document.getElementById("settingsScreen")));
  document.getElementById("settingsSound").addEventListener("change", (event) => setMuted(!event.target.checked));
  document.getElementById("settingsMusic").addEventListener("change", (event) => setMusicEnabled(event.target.checked));
  document.getElementById("settingsTimer").addEventListener("change", (event) => {
    state.timerEnabled = event.target.checked;
    saveSettings();
  });
  document.getElementById("soundButton").addEventListener("click", () => setMuted(!state.muted));
  document.getElementById("homeButton").addEventListener("click", () => {
    cancelPendingAnswer();
    showScreen(document.getElementById("startScreen"));
  });
  document.getElementById("modesHomeButton").addEventListener("click", () => showScreen(document.getElementById("startScreen")));
  document.getElementById("settingsHomeButton").addEventListener("click", () => showScreen(document.getElementById("startScreen")));
  document.getElementById("categoryBackButton").addEventListener("click", renderCategories);
  document.getElementById("backButton").addEventListener("click", () => {
    cancelPendingAnswer();
    renderLevels(state.category);
  });
  document.getElementById("exploreBackButton").addEventListener("click", renderCategories);
  document.getElementById("nextLevelButton").addEventListener("click", () => startLevel(state.category, state.level + 1));
  document.getElementById("playAgainButton").addEventListener("click", () => startLevel(state.category, state.level));
  document.getElementById("endHomeButton").addEventListener("click", () => showScreen(document.getElementById("startScreen")));
}

function initialize() {
  bindButtons();
  applyLanguage(state.language);
  document.getElementById("settingsSound").checked = !state.muted;
  document.getElementById("settingsMusic").checked = state.musicEnabled;
  document.getElementById("settingsTimer").checked = state.timerEnabled;
  showScreen(document.getElementById("startScreen"));
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => console.error("Could not register the offline app cache.", error));
    });
  }
}

initialize();
