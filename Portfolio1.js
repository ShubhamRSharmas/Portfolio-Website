document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    }

    
    setInterval(nextSlide, 5000);

    
    showSlide(currentIndex);
});
