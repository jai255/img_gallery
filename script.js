const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Add click event to each gallery item to open the modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.src;
        modalImg.src = imgSrc;
        modal.style.display = "flex";  // Show modal
    });
});

// Close the modal when clicking the close button
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});