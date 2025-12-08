document.addEventListener('DOMContentLoaded', () => {
    
    // Check if the form exists on this page. 
    // If not (e.g., we are on index.html), stop the script to prevent errors.
    const form = document.getElementById('adoptionForm');
    if (!form) return;

    // --- 1. Interactivity: Conditional Form Logic ---
    const radioButtons = document.querySelectorAll('input[name="hasPets"]');
    const petDetailsDiv = document.getElementById('petDetails');
    const petInfoText = document.getElementById('petInfo');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'yes') {
                petDetailsDiv.classList.remove('hidden');
                // Accessibility: Move focus to help keyboard users
                petInfoText.focus();
            } else {
                petDetailsDiv.classList.add('hidden');
            }
        });
    });

    // --- 2. Security: Event Handling & Sanitization ---
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop actual page reload

        // Security: Prevent Double Submission (Rage Clicks)
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";

        // Input Sanitization Logic
        const nameInput = document.getElementById('fullName').value;
        const safeName = nameInput.trim(); 

        // Simulate API call
        setTimeout(() => {
            // Use textContent instead of innerHTML to prevent XSS (Cross Site Scripting)
            statusMsg.textContent = `Thank you, ${safeName}. We have received your application!`;
            statusMsg.style.color = "green";
            statusMsg.style.marginTop = "10px";
            statusMsg.style.fontWeight = "bold";
            
        }, 1500);
    });
});