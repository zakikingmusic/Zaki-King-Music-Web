document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. تحريك الأشكال الهندسية مع السكرول
    // ========================================
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const rotation = scrolled * speed * 0.05;
            const translateY = scrolled * speed * 0.1;
            
            shape.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
        });
    });

    // ========================================
    // 2. تأثير الظهور التدريجي للأقسام
    // ========================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 1s ease-out';
        observer.observe(section);
    });

    // ========================================
    // 3. التنقل السلس
    // ========================================
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // 4. تغيير شفافية القائمة عند السكرول
    // ========================================
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.98)';
            nav.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.5)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.3)';
        }
    });

    // ========================================
    // 5. تحريك بطاقات الموسيقى بالتتابع
    // ========================================
    const musicCards = document.querySelectorAll('.music-card');
    
    musicCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, { threshold: 0.2 });
        
        cardObserver.observe(card);
    });

    // ========================================
    // 6. تحريك صور المعرض
    // ========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8) rotate(-5deg)';
        item.style.transition = `all 0.6s ease-out ${index * 0.08}s`;
        
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        }, { threshold: 0.2 });
        
        galleryObserver.observe(item);
    });

    // ========================================
    // 7. نافذة عرض الصور بملء الشاشة
    // ========================================
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src && !img.src.includes('رابط_صورة')) {
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    cursor: pointer;
                    animation: fadeIn 0.3s ease;
                `;
                
                const fullImg = document.createElement('img');
                fullImg.src = img.src;
                fullImg.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 10px;
                    border: 3px solid #00d9ff;
                    box-shadow: 0 0 50px rgba(0, 217, 255, 0.5);
                `;
                
                overlay.appendChild(fullImg);
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
            }
        });
    });

    // ========================================
    // 8. تحريك بطاقات التواصل
    // ========================================
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        cardObserver.observe(card);
    });

    // ========================================
    // 9. تأثير 3D عند تحريك الماوس على البطاقات
    // ========================================
    musicCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-15px)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // 10. تحريك الموجات الصوتية
    // ========================================
    const waves = document.querySelectorAll('.wave');
    let waveAnimation;
    
    function animateWaves() {
        waves.forEach((wave, index) => {
            const randomHeight = Math.random() * 100 + 50;
            wave.style.height = randomHeight + 'px';
        });
    }
    
    // تحريك الموجات كل 200 ميلي ثانية
    waveAnimation = setInterval(animateWaves, 200);

    // ========================================
    // 11. تحديث السنة تلقائياً
    // ========================================
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
    }

    // ========================================
    // 12. إنشاء جزيئات متحركة
    // ========================================
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesCount = 20;
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: #00d9ff;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5};
                animation: float-particle ${5 + Math.random() * 10}s linear infinite;
                box-shadow: 0 0 10px #00d9ff;
            `;
            hero.appendChild(particle);
        }
    }
    
    createParticles();

    // ========================================
    // إضافة CSS للأنيميشن
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes float-particle {
            0% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-40px) translateX(-10px);
            }
            75% {
                transform: translateY(-20px) translateX(5px);
            }
            100% {
                transform: translateY(0) translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('⚡ الموقع جاهز! جميع التأثيرات تعمل بنجاح');
});

// ========================================
// انتهى الكود
// ========================================