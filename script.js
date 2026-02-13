let photoInterval;

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = "999";
}

function celebrate() {
    document.getElementById('proposalSection').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('title').innerText = "My Valentine! ❤️";
    document.getElementById('photoFrame').style.display = 'block';
    document.getElementById('wishMessage').style.display = 'block';
    
    // Show surprise button after 3 seconds
    setTimeout(() => {
        document.getElementById('surpriseBtn').style.display = 'block';
    }, 3000);

    startPhotoTransition();
    for(let i=0; i<15; i++) setTimeout(spawnHeart, i * 150);
}

function startPhotoTransition() {
    const imgs = document.querySelectorAll('.photo-frame img');
    let idx = 0;

    if (photoInterval) clearInterval(photoInterval);

    photoInterval = setInterval(() => {
        // 1. Identify current active image
        const currentImg = imgs[idx];
        
        // 2. Remove 'last-active' from everyone else
        imgs.forEach(img => img.classList.remove('last-active'));
        
        // 3. Make current image the 'last-active' (so it stays visible during fade)
        currentImg.classList.add('last-active');
        currentImg.classList.remove('active');

        // 4. Move to next index
        idx = (idx + 1) % imgs.length;

        // 5. Fade in the new image
        imgs[idx].classList.add('active');
    }, 4000); // 4 seconds gives enough time for the 1.8s transition
}

function showKisses() {
    document.getElementById('photoFrame').style.display = 'none';
    document.getElementById('wishMessage').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('kissSection').style.display = 'block';
    
    for(let i=0; i<25; i++) setTimeout(spawnHeart, i * 100);
}

function resetPage() {
    document.getElementById('kissSection').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('title').innerText = "My Valentine! ❤️";
    document.getElementById('photoFrame').style.display = 'block';
    document.getElementById('wishMessage').style.display = 'block';
}

function spawnHeart() {
    const h = document.createElement('div');
    h.innerHTML = '❤️';
    h.className = 'floating-heart';
    h.style.left = Math.random() * 95 + 'vw';
    h.style.top = '105vh';
    h.style.fontSize = (Math.random() * 15 + 15) + 'px';
    document.getElementById('heartBg').appendChild(h);
    setTimeout(() => h.remove(), 5000);
}

setInterval(spawnHeart, 500);

const audio = document.getElementById('bgMusic');
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        document.querySelector('.music-ctrl').innerText = '⏸️';
    } else {
        audio.pause();
        document.querySelector('.music-ctrl').innerText = '🎵';
    }
}