// Array of phrases to show when "No" is clicked
const NO_PHRASES = [
    "baby naman",
    "pretty fls?",
    "sige na huhu",
    "one more chance, baby",
    "iiyak na aq",
    "payag ka na fls?"
];

// Track state
let noClicks = 0;

// Get elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionView = document.getElementById('question-view');
const successView = document.getElementById('success-view');

// Handle "Yes" button click
yesBtn.addEventListener('click', function() {
    questionView.classList.remove('active');
    successView.classList.add('active');
    
    // Create confetti effect
    createConfetti();
});

// Handle "No" button click
noBtn.addEventListener('click', function() {
    noClicks++;
    
    // Update "No" button text
    if (noClicks <= NO_PHRASES.length) {
        noBtn.textContent = NO_PHRASES[noClicks - 1];
    }
    
    // Increase "Yes" button size
    const newSize = noClicks * 20 + 16;
    yesBtn.style.fontSize = newSize + 'px';
    yesBtn.style.padding = (15 + noClicks * 5) + 'px ' + (30 + noClicks * 10) + 'px';
    
    // Add shake animation to "No" button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);
});

// Shake animation for "No" button
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Create confetti effect
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ff6b9d', '#ffc0cb', '#c71585'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const angle = Math.random() * 360;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight + 10}px) rotate(${angle}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 30);
    }
}

// Add hearts floating in background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = ['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.opacity = '0.3';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    
    document.body.appendChild(heart);
    
    const duration = Math.random() * 5 + 5;
    
    heart.animate([
        { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: 0.3
        },
        { 
            transform: `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`,
            opacity: 0
        }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000);
