const words = [
["apple", "jabłko", "I eat an apple every day.", "Jedzenie", "A1"],
["bread", "chleb", "We need some fresh bread.", "Jedzenie", "A1"],
["water", "woda", "Please give me a glass of water.", "Jedzenie", "A1"],
["breakfast", "śniadanie", "Breakfast is at eight.", "Jedzenie", "A1"],
["dinner", "kolacja", "We have dinner together.", "Jedzenie", "A1"],
["vegetable", "warzywo", "This vegetable is healthy.", "Jedzenie", "A2"],

["beautiful", "piękny", "What a beautiful day!", "Przymiotniki", "A1"],
["expensive", "drogi", "This restaurant is expensive.", "Przymiotniki", "A2"],
["friendly", "przyjazny", "Our neighbours are very friendly.", "Przymiotniki", "A1"],
["difficult", "trudny", "This exercise is difficult.", "Przymiotniki", "A1"],
["important", "ważny", "English is important for my job.", "Przymiotniki", "A2"],
["careful", "ostrożny", "Be careful on the stairs.", "Przymiotniki", "A2"],
["happy", "szczęśliwy", "She looks happy today.", "Przymiotniki", "A1"],
["tired", "zmęczony", "I am tired after work.", "Przymiotniki", "A1"],

["quickly", "szybko", "He runs very quickly.", "Przysłówki", "A2"],
["usually", "zwykle", "I usually get up at seven.", "Przysłówki", "A2"],
["sometimes", "czasami", "We sometimes go to the cinema.", "Przysłówki", "A1"],
["always", "zawsze", "She always helps me.", "Przysłówki", "A1"],
["never", "nigdy", "I never drink coffee at night.", "Przysłówki", "A1"],
["already", "już", "I have already finished.", "Przysłówki", "B1"],

["travel", "podróżować", "I love to travel.", "Czasowniki", "A1"],
["learn", "uczyć się", "I learn English every day.", "Czasowniki", "A1"],
["choose", "wybierać", "Choose one answer.", "Czasowniki", "A2"],
["forget", "zapominać", "Don't forget your keys.", "Czasowniki", "A1"],
["remember", "pamiętać", "Do you remember his name?", "Czasowniki", "A2"],
["improve", "poprawiać", "Practice will improve your English.", "Czasowniki", "B1"],
["decide", "decydować", "We need to decide today.", "Czasowniki", "B1"],
["explain", "wyjaśniać", "Can you explain this word?", "Czasowniki", "B1"],
["borrow", "pożyczać", "Can I borrow your pen?", "Czasowniki", "A2"],
["lend", "pożyczać komuś", "Can you lend me some money?", "Czasowniki", "B1"],
["arrive", "przyjeżdżać/przybywać", "We arrive at noon.", "Czasowniki", "A2"],
["leave", "wyjeżdżać/opuszczać", "The train leaves at six.", "Czasowniki", "A1"],
["buy", "kupować", "I need to buy a new phone.", "Czasowniki", "A1"],
["sell", "sprzedawać", "They sell fresh fruit.", "Czasowniki", "A1"],
["work", "pracować", "I work from home.", "Czasowniki", "A1"],
["meet", "spotykać", "Let's meet tomorrow.", "Czasowniki", "A1"],

["weather", "pogoda", "The weather is sunny.", "Podróże", "A1"],
["airport", "lotnisko", "We are at the airport.", "Podróże", "A1"],
["ticket", "bilet", "I bought a train ticket.", "Podróże", "A1"],
["journey", "podróż", "The journey takes two hours.", "Podróże", "A2"],
["hotel", "hotel", "Our hotel is near the beach.", "Podróże", "A1"],
["luggage", "bagaż", "My luggage is very heavy.", "Podróże", "A2"],
["station", "stacja", "Meet me at the station.", "Podróże", "A1"],
["map", "mapa", "Look at the map.", "Podróże", "A1"],

["office", "biuro", "She works in an office.", "Praca", "A1"],
["meeting", "spotkanie", "The meeting starts at ten.", "Praca", "A2"],
["manager", "kierownik", "My manager is helpful.", "Praca", "A2"],
["customer", "klient", "The customer needs help.", "Praca", "A2"],
["deadline", "termin", "The deadline is Friday.", "Praca", "B1"],
["salary", "wynagrodzenie", "He gets a good salary.", "Praca", "B1"],

["computer", "komputer", "My computer is new.", "Technologia", "A1"],
["keyboard", "klawiatura", "The keyboard is black.", "Technologia", "A1"],
["password", "hasło", "Never share your password.", "Technologia", "A2"],
["website", "strona internetowa", "This website is useful.", "Technologia", "A1"],
["download", "pobierać", "Download the file here.", "Technologia", "A2"],
["upload", "przesyłać", "Please upload the document.", "Technologia", "A2"],
["screen", "ekran", "The screen is too bright.", "Technologia", "A1"],
["search", "wyszukiwać", "Search for the answer online.", "Technologia", "A1"],

["morning", "poranek", "Good morning!", "Czas", "A1"],
["afternoon", "popołudnie", "See you this afternoon.", "Czas", "A1"],
["evening", "wieczór", "We study in the evening.", "Czas", "A1"],
["tomorrow", "jutro", "See you tomorrow.", "Czas", "A1"],
["yesterday", "wczoraj", "I saw him yesterday.", "Czas", "A1"],
["early", "wcześnie", "I get up early.", "Czas", "A1"],
["late", "późno", "Don't be late.", "Czas", "A1"],
["weekend", "weekend", "What are you doing this weekend?", "Czas", "A1"],

["family", "rodzina", "My family lives nearby.", "Ludzie", "A1"],
["friend", "przyjaciel", "He is my best friend.", "Ludzie", "A1"],
["neighbour", "sąsiad", "Our neighbour has a dog.", "Ludzie", "A2"],
["parent", "rodzic", "Every parent wants their child to be happy.", "Ludzie", "A2"],
["child", "dziecko", "The child is sleeping.", "Ludzie", "A1"],
["teacher", "nauczyciel", "Our teacher is very patient.", "Ludzie", "A1"],
["student", "uczeń/student", "She is a university student.", "Ludzie", "A1"],

["language", "język", "English is a global language.", "Nauka", "A1"],
["question", "pytanie", "I have a question.", "Nauka", "A1"],
["answer", "odpowiedź", "What is the correct answer?", "Nauka", "A1"],
["mistake", "błąd", "Everyone makes mistakes.", "Nauka", "A2"],
["practice", "ćwiczyć/praktyka", "Practice makes progress.", "Nauka", "A2"],
["sentence", "zdanie", "Write a complete sentence.", "Nauka", "A1"],
["meaning", "znaczenie", "What is the meaning of this word?", "Nauka", "B1"],
["idea", "pomysł", "That's a great idea!", "Nauka", "A1"],
["example", "przykład", "Can you give me an example?", "Nauka", "A1"]
];

const quizData = [
["Jak po angielsku jest „jabłko”?", "apple", ["apple", "orange", "bread", "water"], "Jedzenie"],
["Wybierz poprawne tłumaczenie „difficult”.", "trudny", ["łatwy", "trudny", "drogi", "ważny"], "Przymiotniki"],
["Co oznacza „borrow”?", "pożyczać", ["sprzedawać", "pożyczać", "zapominać", "wybierać"], "Czasowniki"],
["„Airport” to…", "lotnisko", ["hotel", "stacja", "lotnisko", "bagaż"], "Podróże"],
["Jak powiedzieć „jutro”?", "tomorrow", ["yesterday", "today", "tomorrow", "evening"], "Czas"],
["„Customer” oznacza…", "klient", ["kierownik", "klient", "nauczyciel", "sąsiad"], "Praca"],
["Co oznacza „password”?", "hasło", ["ekran", "hasło", "klawiatura", "strona"], "Technologia"],
["„Improve” znaczy…", "poprawiać", ["wyjaśniać", "decydować", "poprawiać", "pamiętać"], "Czasowniki"],
["Wybierz tłumaczenie „friendly”.", "przyjazny", ["zmęczony", "ostrożny", "przyjazny", "piękny"], "Przymiotniki"],
["Jak po angielsku jest „pytanie”?", "question", ["answer", "question", "sentence", "meaning"], "Nauka"],
["„Luggage” to…", "bagaż", ["bilet", "mapa", "bagaż", "podróż"], "Podróże"],
["Co oznacza „salary”?", "wynagrodzenie", ["spotkanie", "wynagrodzenie", "biuro", "termin"], "Praca"],
["Jak powiedzieć „nigdy”?", "never", ["always", "usually", "sometimes", "never"], "Przysłówki"],
["„Neighbour” oznacza…", "sąsiad", ["przyjaciel", "rodzic", "sąsiad", "dziecko"], "Ludzie"],
["Jak po angielsku jest „znaczenie”?", "meaning", ["example", "meaning", "mistake", "idea"], "Nauka"]
];

let cardIndex = 0;
let activeCategory = "Wszystkie";

let quizQuestions = [];
let quizIndex = 0;
let score = 0;
let quizAnswered = false;

const $ = id => document.getElementById(id);

const categories = [
"Wszystkie",
...new Set(words.map(word => word[3]))
];

/* =========================
NARZĘDZIA
========================= */

function shuffle(array) {
const result = [...array];

for (let i = result.length - 1; i > 0; i--) {
const randomIndex = Math.floor(Math.random() * (i + 1));

```
[result[i], result[randomIndex]] = [
  result[randomIndex],
  result[i]
];
```

}

return result;
}

function filteredWords() {
if (activeCategory === "Wszystkie") {
return words;
}

return words.filter(word => word[3] === activeCategory);
}

/* =========================
FISZKI
========================= */

function renderFilters() {
const container = $("categoryFilters");

container.innerHTML = categories
.map(category => `       <button
        type="button"
        class="filter ${category === activeCategory ? "active" : ""}"
        data-cat="${category}"
        aria-pressed="${category === activeCategory}"       >
        ${category}       </button>
    `)
.join("");

container.querySelectorAll(".filter").forEach(button => {
button.addEventListener("click", () => {
activeCategory = button.dataset.cat;
cardIndex = 0;

```
  renderFilters();
  renderCard();
});
```

});
}

function renderCard() {
const list = filteredWords();

if (!list.length) {
$("englishWord").textContent = "Brak słów";
$("polishWord").textContent = "";
$("example").textContent = "";
$("cardLevel").textContent = "";
$("cardProgress").textContent = "";
return;
}

if (cardIndex >= list.length) {
cardIndex = 0;
}

if (cardIndex < 0) {
cardIndex = list.length - 1;
}

const word = list[cardIndex];

$("englishWord").textContent = word[0];
$("polishWord").textContent = word[1];
$("example").textContent = `Przykład: ${word[2]}`;
$("cardLevel").textContent = word[4];

$("cardProgress").textContent =
`Fiszka ${cardIndex + 1} z ${list.length}`;

$("cardCount").textContent = words.length;

resetFlashcard();
}

function resetFlashcard() {
$("flashcard").classList.remove("flipped");
$("flashcard").setAttribute("aria-pressed", "false");
}

function toggleFlashcard() {
const flashcard = $("flashcard");
const flipped = flashcard.classList.toggle("flipped");

flashcard.setAttribute("aria-pressed", String(flipped));
}

$("flashcard").addEventListener("click", toggleFlashcard);

$("flashcard").addEventListener("keydown", event => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
toggleFlashcard();
}

if (event.key === "ArrowLeft") {
event.preventDefault();
previousCard();
}

if (event.key === "ArrowRight") {
event.preventDefault();
nextCard();
}
});

function previousCard() {
const list = filteredWords();

if (!list.length) {
return;
}

cardIndex--;

if (cardIndex < 0) {
cardIndex = list.length - 1;
}

renderCard();
}

function nextCard() {
const list = filteredWords();

if (!list.length) {
return;
}

cardIndex++;

if (cardIndex >= list.length) {
cardIndex = 0;
}

renderCard();
}

$("prevCard").addEventListener("click", previousCard);
$("nextCard").addEventListener("click", nextCard);

/* =========================
QUIZ
========================= */

function startNewQuiz() {
quizQuestions = shuffle(quizData);
quizIndex = 0;
score = 0;
quizAnswered = false;

$("score").textContent = "0";

renderQuiz();
}

function renderQuiz() {
if (!quizQuestions.length) {
startNewQuiz();
return;
}

if (quizIndex >= quizQuestions.length) {
renderQuizSummary();
return;
}

const question = quizQuestions[quizIndex];

$("questionNumber").textContent =
`Pytanie ${quizIndex + 1} / ${quizQuestions.length}`;

$("quizCategory").textContent = question[3];
$("question").textContent = question[0];

$("quizFeedback").textContent = "";
$("quizFeedback").className = "feedback";

$("nextQuestion").classList.add("hidden");
$("nextQuestion").textContent = "Następne pytanie →";

quizAnswered = false;

const answers = shuffle(question[2]);

$("answers").innerHTML = answers
.map(answer => `       <button type="button" class="answer">
        ${answer}       </button>
    `)
.join("");

$("answers").querySelectorAll(".answer").forEach(button => {
button.addEventListener("click", () => {
answerQuiz(button, question);
});
});
}

function answerQuiz(button, question) {
if (quizAnswered) {
return;
}

quizAnswered = true;

const answerButtons =
$("answers").querySelectorAll(".answer");

answerButtons.forEach(answerButton => {
answerButton.disabled = true;

```
if (answerButton.textContent.trim() === question[1]) {
  answerButton.classList.add("correct");
}
```

});

const selectedAnswer = button.textContent.trim();

if (selectedAnswer === question[1]) {
score++;

```
$("score").textContent = score;

$("quizFeedback").textContent =
  "✓ Brawo! Poprawna odpowiedź.";

$("quizFeedback").className = "feedback good";
```

} else {
button.classList.add("wrong");

```
$("quizFeedback").textContent =
  `✗ Poprawna odpowiedź: ${question[1]}`;

$("quizFeedback").className = "feedback bad";
```

}

$("nextQuestion").classList.remove("hidden");

if (quizIndex === quizQuestions.length - 1) {
$("nextQuestion").textContent = "Zobacz wynik →";
}
}

$("nextQuestion").addEventListener("click", () => {
quizIndex++;
renderQuiz();
});

function renderQuizSummary() {
$("questionNumber").textContent = "Quiz zakończony";
$("quizCategory").textContent = "";

$("question").textContent =
`Twój wynik: ${score} / ${quizQuestions.length}`;

$("answers").innerHTML = "";

const percentage = Math.round(
(score / quizQuestions.length) * 100
);

let message;

if (percentage === 100) {
message = "Perfekcyjny wynik! 🎉";
} else if (percentage >= 80) {
message = "Świetny wynik! Bardzo dobrze znasz słownictwo.";
} else if (percentage >= 60) {
message = "Dobry wynik! Warto jeszcze powtórzyć kilka słów.";
} else {
message = "Warto jeszcze trochę poćwiczyć. Powtórz fiszki i spróbuj ponownie.";
}

$("quizFeedback").textContent =
`${message} Wynik: ${percentage}%.`;

$("quizFeedback").className = "feedback good";

$("nextQuestion").classList.add("hidden");
}

$("restartQuiz").addEventListener("click", startNewQuiz);

/* =========================
NAWIGACJA
========================= */

document.querySelectorAll(".nav-btn").forEach(button => {
button.addEventListener("click", () => {
const targetSection = button.dataset.section;

```
document.querySelectorAll(".nav-btn").forEach(navButton => {
  const isActive = navButton === button;

  navButton.classList.toggle("active", isActive);
  navButton.setAttribute("aria-selected", String(isActive));
});

document.querySelectorAll(".section").forEach(section => {
  section.classList.toggle(
    "active",
    section.id === targetSection
  );
});
```

});
});

/* =========================
START APLIKACJI
========================= */

function init() {
$("cardCount").textContent = words.length;

renderFilters();
renderCard();
startNewQuiz();
}

init();
