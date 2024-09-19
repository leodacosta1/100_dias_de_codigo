const images = document.querySelectorAll('.img-wrapper img');
const totalImages = images.length;
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

showImage(currentIndex);

document.getElementById('arrow-left').onclick = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1; // Loop to the last image
    showImage(currentIndex);
};

document.getElementById('arrow-right').onclick = () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0; // Loop to the first image
    showImage(currentIndex);
};
