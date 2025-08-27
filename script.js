let collectedStars = 0;
const totalStars = 5;

// Переменные для правильных ответов (измени их на свои)
const correctAnswers = {
    q1: "синий",  // Твой любимый цвет
    q2: "привет", // Что ты сказал при первой встрече
    q3: "паста"   // Твоё лучшее блюдо
};

const correctRiddles = {
    r1: "тоска",  // или "мысли обо мне"
    r2: "любовь"  // или "чувства"
};

function startGame() {
    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('screen-level1').classList.remove('hidden');
}

function collectStar(star) {
    if (!star.classList.contains('collected')) {
        star.classList.add('collected');
        collectedStars++;
        document.getElementById('stars-counter').textContent = `Звёзд собрано: ${collectedStars}/${totalStars}`;
        
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
        resultElement.textContent = "✅ Все ответы правильные! Мост построен!";
        resultElement.style.color = "#7fff00";
        document.getElementById('next2').classList.remove('hidden');
    } else {
        resultElement.textContent = "❌ Попробуй ещё раз...";
        resultElement.style.color = "#ff6b6b";
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
        resultElement.textContent = "✅ Загадки разгаданы! Выход найден!";
        resultElement.style.color = "#7fff00";
        document.getElementById('next3').classList.remove('hidden');
    } else {
        resultElement.textContent = "❌ Подумай ещё...";
        resultElement.style.color = "#ff6b6b";
    }
    
    resultElement.classList.remove('hidden');
}

function showFinal() {
    document.getElementById('screen-level3').classList.add('hidden');
    document.getElementById('screen-final').classList.remove('hidden');
    
    // Твоё личное сообщение (измени его как хочешь)
    const finalMessage = `
        <p>Ты прошла весь путь... ❤</p>
        <p>Каждый шаг, каждая звезда, каждая загадка — всё это ведёт к одному.</p>
        <p>К тебе.</p>
        <p>Спасибо, что есть. Спасибо, что рядом.</p>
        <p>Я скучал. Я люблю тебя.</p>
        <p>Твой, навсегда ❤</p>
    `;
    
    document.getElementById('final-message').innerHTML = finalMessage;
}