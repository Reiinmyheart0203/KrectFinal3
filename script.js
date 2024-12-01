// Define a function to show or hide the contact form
function showForm() {
    const form = document.getElementById("contactForm");

    // Check the current display state of the form
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        setTimeout(() => {
            form.classList.add("show"); 
        }, 10);
    } else {
        form.classList.remove("show");
        setTimeout(() => {
            form.style.display = "none";
        }, 500);
    }
}

// Loop through all the elements with the class '.recipe-card'
document.querySelectorAll('.recipe-card').forEach(card => {
    const img = document.createElement('img');
    card.appendChild(img);

    // Loop through all <li> elements inside the current card
    card.querySelectorAll('li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imageSrc = item.getAttribute('data-image');
            img.src = imageSrc;
            img.style.opacity = '1'; // Fade in
        });

        item.addEventListener('mouseleave', () => {
            img.style.opacity = '0'; // Fade out
        });
    });
});

// Define a function to show the comment form
function showCommentForm() {
    document.getElementById("comment-form-container").classList.remove("hidden");
}

// Define a function to hide the comment form
function hideCommentForm() {
    document.getElementById("comment-form-container").classList.add("hidden");
}


