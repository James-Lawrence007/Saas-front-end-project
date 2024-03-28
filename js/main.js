// FAQ accordion
// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    // variable to access container link
    const faqContainer = document.querySelector(".faq-content");
    // Add event listener on parent
    faqContainer.addEventListener("click", (e) => {
        // Create logic to only select header using event delegation
        const groupHeader = e.target.closest('.faq-group-header');

        if(!groupHeader) return;
        
        // create variables for each node within faq-group
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Add logic to switch between plus or minus icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // toggle visibillity of body
        groupBody.classList.toggle('open');

        // close inactive body elements
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        
        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon= otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        } );

    })
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});