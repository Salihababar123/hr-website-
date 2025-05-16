// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Form submission handling
function handleDemoRequest(event) {
    event.preventDefault();
    const name = document.getElementById('demo-name').value;
    const email = document.getElementById('demo-email').value;
    const company = document.getElementById('demo-company').value;
    
    // In a real application, you would send this data to your server
    console.log("Demo requested by:", name, email, company);
    
    // Show success message
    alert(`Thank you, ${name}! Your demo request has been received. We'll contact you shortly at ${email}.`);
    
    // Close the modal
    closeModal('demo-modal');
}

function handleGetStarted(event) {
    event.preventDefault();
    
    // Open the signup modal
    openModal('signup-modal');
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // In a real application, you would send this data to your server
    console.log("Sign up attempted:", name, email);
    
    // For demo purposes
    alert(`Thank you for signing up, ${name}! In a real application, we would create your account and log you in.`);
    
    // Close the modal
    closeModal('signup-modal');
    
    // Simulate logged-in state
    simulateLoggedInState(email);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // In a real application, you would authenticate with your server
    console.log("Login attempted:", email);
    
    // For demo purposes
    alert(`Login functionality would connect to your authentication system.`);
    
    // Close the modal
    closeModal('login-modal');
    
    // In a real application, you would redirect to a dashboard or another page
    // For demo purposes, we'll simulate being logged in by updating the header buttons
    simulateLoggedInState(email);
}

// Function to simulate logged-in state (for demo purposes)
function simulateLoggedInState(email) {
    // Get the header buttons container
    const headerButtons = document.querySelector('header .header-content > div:last-child');
    
    if (headerButtons) {
        // Replace the login/signup buttons with a user menu
        headerButtons.innerHTML = `
            <div class="user-menu">
                <span class="user-email">${email.split('@')[0]}</span>
                <a href="#" class="btn btn-secondary" onclick="handleLogout()">Log Out</a>
            </div>
        `;
        
        // Add some basic styling for the user menu
        const style = document.createElement('style');
        style.textContent = `
            .user-menu {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .user-email {
                font-weight: 500;
                color: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to handle logout
function handleLogout() {
    // Get the header buttons container
    const headerButtons = document.querySelector('header .header-content > div:last-child');
    
    if (headerButtons) {
        // Restore the original login/signup buttons
        headerButtons.innerHTML = `
            <a href="#" class="btn btn-secondary" onclick="openModal('login-modal')">Log In</a>
            <a href="#" class="btn btn-primary" onclick="handleGetStarted(event)">Get Started</a>
        `;
    }
}

// Initialize the buttons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Get Started button in the header
    const getStartedBtn = document.querySelector('header .btn-primary');
    if (getStartedBtn) {
        getStartedBtn.onclick = handleGetStarted;
    }
    
    // Initialize the Get Started button in the hero section if it exists
    const heroGetStartedBtn = document.querySelector('.hero-buttons .btn-primary');
    if (heroGetStartedBtn) {
        heroGetStartedBtn.onclick = handleGetStarted;
    }
});