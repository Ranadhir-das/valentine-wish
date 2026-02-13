// The Fix: Use absolute positioning for the 'No' button relative to the window
        function moveNoButton() {
            const noBtn = document.getElementById('noBtn');
            // Calculate random positions within the visible window
            const maxX = window.innerWidth - noBtn.offsetWidth;
            const maxY = window.innerHeight - noBtn.offsetHeight;
            
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            
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
            
            const imgs = document.querySelectorAll('.photo-frame img');
            let idx = 0;
            setInterval(() => {
                imgs[idx].classList.remove('active');
                idx = (idx + 1) % imgs.length;
                imgs[idx].classList.add('active');
            }, 3000);

            for(let i=0; i<20; i++) setTimeout(spawnHeart, i * 100);
        }

        function spawnHeart() {
            const h = document.createElement('div');
            h.innerHTML = '❤️';
            h.className = 'floating-heart';
            h.style.left = Math.random() * 100 + 'vw';
            h.style.top = '105vh';
            h.style.fontSize = (Math.random() * 20 + 15) + 'px';
            document.getElementById('heartBg').appendChild(h);
            setTimeout(() => h.remove(), 5000);
        }
        setInterval(spawnHeart, 400);

        const audio = document.getElementById('bgMusic');
        function toggleMusic() {
            audio.paused ? (audio.play(), document.querySelector('.music-ctrl').innerText = '⏸️') : (audio.pause(), document.querySelector('.music-ctrl').innerText = '🎵');
        }