

// Accordion
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isOpen = content.style.maxHeight;
    const arrow = header.querySelector('.arrow');

    // Close all accordions
    const allContents = document.querySelectorAll('.accordion-content');
    const allArrows = document.querySelectorAll('.arrow');
    allContents.forEach(item => {
        item.style.maxHeight = null;
    });
    allArrows.forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
    });

    // If it was closed, open it
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px"; // Set to the scroll height
        arrow.style.transform = 'rotate(90deg)'; // Rotate the arrow
    }
}

// Open the first accordion by default
window.onload = () => {
    const firstContent = document.querySelector('.accordion-content');
    const firstArrow = firstContent.previousElementSibling.querySelector('.arrow');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    firstArrow.style.transform = 'rotate(90deg)'; // Rotate the first arrow
};