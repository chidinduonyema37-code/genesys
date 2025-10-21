const questions = [
  {
    prompt: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "define"],
    answer: "const",
  },
  {
    prompt: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    answer: "Abuja",
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    prompt: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "HyperText Markdown Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    prompt: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    prompt: "Which method adds an item to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    prompt: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    prompt: "Which country is known for the Eiffel Tower?",
    options: ["Italy", "France", "Germany", "Spain"],
    answer: "France",
  },
  {
    prompt: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/*", "//", "#", "<!--"],
    answer: "//",
  },
  {
    prompt: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "120°C", "80°C"],
    answer: "100°C",
  },
  {
    prompt: "Which artist sang 'Thriller'?",
    options: ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"],
    answer: "Michael Jackson",
  },
  {
    prompt: "Which loop runs at least once before checking the condition?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
  },
  {
    prompt: "What is the chemical symbol for gold?",
    options: ["Gd", "Au", "Ag", "Go"],
    answer: "Au",
  },
  {
    prompt: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa",
  },
  {
    prompt: "Which function displays output in the browser console?",
    options: ["print()", "console.log()", "echo()", "display()"],
    answer: "console.log()",
  },
  {
    prompt: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    prompt: "Which organ pumps blood throughout the human body?",
    options: ["Lungs", "Brain", "Heart", "Kidney"],
    answer: "Heart",
  },
  {
    prompt: "Which keyword is used to define a function in JavaScript?",
    options: ["func", "function", "def", "method"],
    answer: "function",
  },
  {
    prompt: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    prompt: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "USA"],
    answer: "Brazil",
  },
];

const quizzer = () => {
  let answer = "";
  let score = "";
  let timer = 0;

  let quizOver = true;
  const failedQuestions = [];
  const answeredQuestions = [];

  for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    prompt(element.prompt);
    console.log("🚀 ~ quizzer ~ element:", element);
  }
};

quizzer();
