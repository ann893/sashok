const imageContainer = document.getElementById('image-container');
const images = [
    './1.jpg',
    './2.jpg',
    './f.jpg',
    './3.jpg',
    './4.jpg',
    './5.jpg',
    './6.jpg',
    './7.jpg',
    './8.jpg',
    './9.jpg',
    // Добавьте сюда пути к вашим изображениям
];

function createFloatingImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('floating-image');
    img.style.width = '70px'; // Размер изображения
    img.style.height = 'auto';
    img.style.top = `${Math.random() * 100}vh`;
    img.style.left = `${Math.random() * 100}vw`;
    img.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`;
    img.style.opacity = 1;
    imageContainer.appendChild(img);

    setTimeout(() => {
        img.style.opacity = 0;
        setTimeout(() => {
            imageContainer.removeChild(img);
        }, 1000); // Время исчезания
    }, 3000); // Время появления
}

function addImages() {
    images.forEach((src, index) => {
        setTimeout(() => {
            createFloatingImage(src);
        }, index * 500); // Интервал появления изображений
    });
}

addImages();
setInterval(addImages, 5000); // Интервал повторения цикла

// Добавляем обработчик события для кнопки воспроизведения музыки
document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play();

    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    // Показываем гифку
    const gifContainer = document.getElementById('gif-container');
    gifContainer.classList.remove('hidden');
    gifContainer.classList.add('visible');

    // Скрываем кнопку
    const playButton = document.getElementById('play-button');
    playButton.classList.add('hidden');
});
