const config = window.VALENTINE_CONFIG;

function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        noButtonBackground: "#444444",
        noButtonHover: "#666666",
        textColor: "#ff4757"
    };
    return defaults[key];
}

function validateConfig() {
    const warnings = [];
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);

    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(w => console.warn("- " + w));
    }
}

document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;

    // Question 1
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;

    // Question 2
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;

    // Question 3
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Floating elements
    createFloatingElements();

    // ✅ Love meter setup (MUST be inside DOMContentLoaded)
    setupLoveMeter();
});

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    container.innerHTML = "";

    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

function setupLoveMeter() {
    const loveMeter = document.getElementById('loveMeter');
    const loveValue = document.getElementById('loveValue');
    const extraLove = document.getElementById('extraLove');

    if (!loveMeter || !loveValue || !extraLove) return;

    function setInitialPosition() {
        loveMeter.value = 100;
        loveValue.textContent = "100";
        loveMeter.style.width = '100%';
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
    }

    setInitialPosition();

    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value, 10);
        loveValue.textContent = String(value);

        if (value > 100) {
            extraLove.classList.remove('hidden');
            const overflowPercentage = (value - 100) / 9900;
            const extraWidth = overflowPercentage * window.innerWidth * 0.8;

            loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
            loveMeter.style.transition = 'width 0.3s';

            if (value >= 5000) {
                extraLove.classList.add('super-love');
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.classList.remove('super-love');
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.classList.remove('super-love');
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add('hidden');
            extraLove.classList.remove('super-love');
            loveMeter.style.width = '100%';
        }
    });

    window.addEventListener('load', setInitialPosition);
}

function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));

    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;

    // ✅ Safe image handling
    const celebrationImage = document.getElementById('celebrationImage');
    if (celebrationImage && config.celebration.image) {
        celebrationImage.src = config.celebration.image;
        celebrationImage.classList.remove('hidden');
    }

    createHeartExplosion();
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}
