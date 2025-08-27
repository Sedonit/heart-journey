let collectedStars = 0;
const totalStars = 5;

// Счетчики попыток
let quizAttempts = 0;
let riddleAttempts = 0;

// Переменные для правильных ответов (несколько вариантов для каждого)
const correctAnswers = {
    q1: ["когда дуюсь", "дуюсь", "строю губки"],  // Что я люблю в тебе больше всего
    q2: ["меня", "Меня", "тебя"],  // Чего мне не хватает прямо сейчас
    q3: ["умничка", "умница", "лучшая"]   // Каким словом я тебе хвалю
};

const correctRiddles = {
    r1: ["липтон", "чай", "черный чай"],  // Загадка 1
    r2: ["mzlff", "мзлфф", "илья"]  // Загадка 2
};

// Подсказки
let hintUsed = {
    q1: false,
    q2: false,
    q3: false,
    r1: false,
    r2: false
};

const hints = {
    q1: "Что то, что касается губ...",
    q2: "Какого-то человечка...",
    q3: "Что то умном...",
    r1: "Говорила что его можно пить с шоколадом...",
    r2: "Какой-то Илюша, вот только не всопмню его псевдоним..."
};

// Функция для проверки ответа (с учетом регистра и нескольких вариантов)
function checkAnswer(userAnswer, correctAnswersArray) {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    return correctAnswersArray.some(answer => 
        normalizedUserAnswer === answer.toLowerCase().trim()
    );
}

function showHint(questionId) {
    if (!hintUsed[questionId]) {
        alert(hints[questionId]);
        hintUsed[questionId] = true;
    } else {
        alert("Уже все натыкала, родная...");
    }
}

function startGame() {
    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('screen-level1').classList.remove('hidden');
}

function collectStar(star) {
    if (!star.classList.contains('collected')) {
        star.classList.add('collected');
        collectedStars++;
        let counterText = `Звёзд собрано: ${collectedStars}/${totalStars}`;
        
        // Сообщения поддержки
        if (collectedStars === 1) {
            counterText += "<br>❤ Ты умничка!";
        } else if (collectedStars === 3) {
            counterText += "<br>❤ Горжусь тобой!";
        } else if (collectedStars === 5) {
            counterText += "<br>❤ Пойдем дальше?";
        }
        
        document.getElementById('stars-counter').innerHTML = counterText;
        
        if (collectedStars === totalStars) {
            document.getElementById('next1').classList.remove('hidden');
        }
    }
}

function showLevel2() {
    document.getElementById('screen-level1').classList.add('hidden');
    document.getElementById('screen-level2').classList.remove('hidden');
}

function checkAnswers() {
    const answer1 = document.getElementById('q1').value;
    const answer2 = document.getElementById('q2').value;
    const answer3 = document.getElementById('q3').value;
    
    const isCorrect1 = checkAnswer(answer1, correctAnswers.q1);
    const isCorrect2 = checkAnswer(answer2, correctAnswers.q2);
    const isCorrect3 = checkAnswer(answer3, correctAnswers.q3);
    
    const resultElement = document.getElementById('quiz-result');
    
    if (isCorrect1 && isCorrect2 && isCorrect3) {
        resultElement.innerHTML = "✅ Все ответы правильные! Умничка!<br>❤ Димка передает что он рядом с тобой в этой мини игре!";
        resultElement.style.color = "#4CAF50";
        document.getElementById('next2').classList.remove('hidden');
        document.getElementById('skip-quiz').classList.add('hidden');
    } else {
        quizAttempts++;
        if (quizAttempts >= 3) {
            // Показываем правильные ответы
            resultElement.innerHTML = `
                ❌ Не получилось... Вот правильные ответики:<br>
                <div class="correct-answers">
                    1. ${correctAnswers.q1[0]}<br>
                    2. ${correctAnswers.q2[0]}<br>
                    3. ${correctAnswers.q3[0]}
                </div>
                Введи их правильно и нажми "Проверить ответы", ничего страшного не случилось и не случиться милашка
            `;
            resultElement.style.color = "#f44336";
            document.getElementById('skip-quiz').classList.remove('hidden');
        } else {
            resultElement.innerHTML = `❌ Может попробуешь еще раз Лизаветка...<br>💡 Там есть кнопка 'Подсказка' если нужно! Так.. к слову!<br>Попыток: ${quizAttempts}/3`;
            resultElement.style.color = "#f44336";
        }
    }
    
    resultElement.classList.remove('hidden');
}

function skipQuiz() {
    document.getElementById('q1').value = correctAnswers.q1[0];
    document.getElementById('q2').value = correctAnswers.q2[0];
    document.getElementById('q3').value = correctAnswers.q3[0];
    document.getElementById('quiz-result').innerHTML = "Ты умничка! Нажми 'Проверить ответы'";
    document.getElementById('quiz-result').style.color = "#4CAF50";
}

function showLevel3() {
    document.getElementById('screen-level2').classList.add('hidden');
    document.getElementById('screen-level3').classList.remove('hidden');
    // Сброс счетчиков при переходе
    quizAttempts = 0;
    document.getElementById('skip-quiz').classList.add('hidden');
}

function checkRiddles() {
    const riddle1 = document.getElementById('r1').value;
    const riddle2 = document.getElementById('r2').value;
    
    const isCorrect1 = checkAnswer(riddle1, correctRiddles.r1);
    const isCorrect2 = checkAnswer(riddle2, correctRiddles.r2);
    
    const resultElement = document.getElementById('riddle-result');
    
    if (isCorrect1 && isCorrect2) {
        resultElement.innerHTML = "✅ Загадки разгаданы! Умничка!<br>❤ Я рад что ты смогла справиться с этим. Рад даже если настолько далеко от тебя";
        resultElement.style.color = "#4CAF50";
        document.getElementById('next3').classList.remove('hidden');
        document.getElementById('skip-riddles').classList.add('hidden');
    } else {
        riddleAttempts++;
        if (riddleAttempts >= 3) {
            // Показываем правильные ответы
            resultElement.innerHTML = `
                ❌ Не получилось... Вот правильные ответики:<br>
                <div class="correct-answers">
                    1. ${correctRiddles.r1[0]}<br>
                    2. ${correctRiddles.r2[0]}
                </div>
                Введи их правильно и нажми "Проверить загадки" у тебя все получится Лизаветка!
            `;
            resultElement.style.color = "#f44336";
            document.getElementById('skip-riddles').classList.remove('hidden');
        } else {
            resultElement.innerHTML = `❌ Если не получается ты всегда можешь спросить у меня...<br>💡 Так же есть подсказки!<br>Попыток: ${riddleAttempts}/3`;
            resultElement.style.color = "#f44336";
        }
    }
    
    resultElement.classList.remove('hidden');
}

function skipRiddles() {
    document.getElementById('r1').value = correctRiddles.r1[0];
    document.getElementById('r2').value = correctRiddles.r2[0];
    document.getElementById('riddle-result').innerHTML = "Еще раз умничка! Нажми 'Проверить загадки'";
    document.getElementById('riddle-result').style.color = "#4CAF50";
}

function showFinal() {
    document.getElementById('screen-level3').classList.add('hidden');
    document.getElementById('screen-final').classList.remove('hidden');
    
    // Твоё личное сообщение
    const finalMessage = `
        <p>Ты прошла весь путь, ты справилась ❤</p>
        <p>Все что ты сейчас сделала — всё это ведёт к одному.</p>
        <p>К тебе. К твоим чуствам, к твоему внутреннему "я"</p>
        <p>❤ Даже когда мы не говорим, я рядом. Я рад что мог занять тебя такой мелочью и очень рад что ты его прошла, ты умничка! </p>
        <p>Спасибо, что есть. Спасибо, что рядом.</p>
        <p>Я всегда скучал и скучаю по тебе, даже когда ты рядом</p>
        <p>Спасибо за все и спасибо за то что ты есть ❤</p>
        <p>Люблю </p>
    `;
    
    document.getElementById('final-message').innerHTML = finalMessage;
}