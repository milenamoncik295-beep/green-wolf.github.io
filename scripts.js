document.addEventListener('DOMContentLoaded', () => {
    const pricingSections = document.querySelectorAll('.pricing-section');

    pricingSections.forEach(section => {
        const slides = Array.from(section.querySelectorAll('.slide'));
        let currentIndex = 0;

        // Показать первый слайд при загрузке
        slides[currentIndex].classList.add('active');

        const prevButton = section.querySelector('.prev');
        const nextButton = section.querySelector('.next');

        // Функция смены слайда
        const showSlide = (index) => {
            // Скрываем текущий
            slides[currentIndex].classList.remove('active');
            // Показываем новый
            slides[index].classList.add('active');
            currentIndex = index;
        };

        prevButton.addEventListener('click', () => {
            if (currentIndex === 0) return;
            showSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex === slides.length - 1) return;
            showSlide(currentIndex + 1);
        });
    });
});