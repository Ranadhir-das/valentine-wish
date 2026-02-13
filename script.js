function moveNoButton() {
            const noBtn = document.getElementById('noBtn');
            // Safe margins so button doesn't go off edge
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
            
            const imgs = document.querySelectorAll('.photo-frame img');
            let idx = 0;
            setInterval(() => {
                imgs[idx].classList.remove('active');
                idx = (idx + 1) % imgs.length;
                imgs[idx].classList.add('active');
            }, 3000);

            for(let i=0; i<15; i++) setTimeout(spawnHeart, i * 150);
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
            audio.paused ? (audio.play(), document.querySelector('.music-ctrl').innerText = '⏸️') : (audio.pause(), document.querySelector('.music-ctrl').innerText = '🎵');
        }