document.addEventListener('DOMContentLoaded', function() {
    const slidesContainers = document.querySelectorAll('.slider-container');

    slidesContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        const prevButton = container.querySelector('.prev');
        const nextButton = container.querySelector('.next');

        let currentSlideIndex = 0;

        function showSlide(index) {
            // Скрываем все слайды
            slides.forEach(slide => {
                slide.classList.remove('active', 'right', 'left'); // Удаляем активные классы
                slide.style.display = 'none'; // Прячем слайд
            });

            // Показываем нужный слайд
            slides[index].classList.add('active');
            slides[index].style.display = 'flex'; // Показываем слайд
        }

        function nextSlide() {
            const oldIndex = currentSlideIndex;
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;

            // Применяем сдвиг вправо для старого слайда
            slides[oldIndex].classList.add('right');

            setTimeout(() => {
                showSlide(currentSlideIndex);
                slides[oldIndex].classList.remove('right'); // Убираем сдвиг после завершения анимации
            }, 500); // Задержка равна времени перехода в CSS
        }

        function prevSlide() {
            const oldIndex = currentSlideIndex;
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

            // Применяем сдвиг влево для старого слайда
            slides[oldIndex].classList.add('left');

            setTimeout(() => {
                showSlide(currentSlideIndex);
                slides[oldIndex].classList.remove('left'); // Убираем сдвиг после завершения анимации
            }, 500); // Задержка равна времени перехода в CSS
        }

        // Добавляем слушатели событий для кнопок
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Показываем первый слайд при загрузке
        showSlide(currentSlideIndex);
    });
});