let collectedStars = 0;
const totalStars = 5;

// Переменные для правильных ответов (измени их на свои)
const correctAnswers = {
    q1: "когда дуюсь",  // Что я люблю в тебе больше всего
    q2: "меня",         // Чего мне не хватает прямо сейчас
    q3: "умничка"       // Каким словом я тебе хвалю
};

const correctRiddles = {
    r1: "липтон",       // Загадка 1
    r2: "mzlff"         // Загадка 2
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
    const answer1 = document.getElementById('q1').value.toLowerCase().trim();
    const answer2 = document.getElementById('q2').value.toLowerCase().trim();
    const answer3 = document.getElementById('q3').value.toLowerCase().trim();
    
    const isCorrect1 = answer1 === correctAnswers.q1.toLowerCase();
    const isCorrect2 = answer2 === correctAnswers.q2.toLowerCase();
    const isCorrect3 = answer3 === correctAnswers.q3.toLowerCase();
    
    const resultElement = document.getElementById('quiz-result');
    
    if (isCorrect1 && isCorrect2 && isCorrect3) {
        resultElement.innerHTML = "✅ Все ответы правильные! Умничка!<br>❤ Димка передает что он рядом с тобой в этом мини игре!";
        resultElement.style.color = "#4CAF50";
        document.getElementById('next2').classList.remove('hidden');
    } else {
        resultElement.innerHTML = "❌ Может попробуешь еще раз Лизаветка...<br>💡 Там есть кнопка 'Подсказка' если нужно! Так.. к слову!";
        resultElement.style.color = "#f44336";
    }
    
    resultElement.classList.remove('hidden');
}

function showLevel3() {
    document.getElementById('screen-level2').classList.add('hidden');
    document.getElementById('screen-level3').classList.remove('hidden');
}

function checkRiddles() {
    const riddle1 = document.getElementById('r1').value.toLowerCase().trim();
    const riddle2 = document.getElementById('r2').value.toLowerCase().trim();
    
    const isCorrect1 = riddle1 === correctRiddles.r1.toLowerCase();
    const isCorrect2 = riddle2 === correctRiddles.r2.toLowerCase();
    
    const resultElement = document.getElementById('riddle-result');
    
    if (isCorrect1 && isCorrect2) {
        resultElement.innerHTML = "✅ Загадки разгаданы! Умничка!<br>❤ Я рад что ты смогла справиться с этим. Рад даже если настолько далеко от тебя";
        resultElement.style.color = "#4CAF50";
        document.getElementById('next3').classList.remove('hidden');
    } else {
        resultElement.innerHTML = "❌ Если не получается ты всегда можешь спросить у меня...<br>💡 Так же есть подсказки!";
        resultElement.style.color = "#f44336";
    }
    
    resultElement.classList.remove('hidden');
}

function showFinal() {
    document.getElementById('screen-level3').classList.add('hidden');
    document.getElementById('screen-final').classList.remove('hidden');
    
    // Твоё личное сообщение
    const finalMessage = `
        <p>Ты прошла весь путь, ты справилась ❤</p>
        <p>Все что ты сейчас сделала — всё это ведёт к одному.</p>
        <p>К тебе. К твоим чуствам, к твоему внутреннему "я"</p>
        <p>❤ Даже когда мы не говорим, я рядом. Я рад что мог занять тебя такой мелочью и очень рад что ты его прошла, ты умничка!</p>
        <p>Спасибо, что есть. Спасибо, что рядом.</p>
        <p>Я всегда скучал и скучаю по тебе, даже когда ты рядом</p>
        <p>Спасибо за все и спасибо за то что ты есть ❤</p>
        <p>Люблю</p>
    `;
    
    document.getElementById('final-message').innerHTML = finalMessage;
}