// EduGuideAI - Main Application Logic

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Application initialization
function initApp() {
    // Set up event listeners
    setupEventListeners();
    
    // Check if user is logged in (from localStorage)
    checkLoginStatus();
    
    // Load any saved data
    loadSavedData();
}

// Set up event listeners for all interactive elements
function setupEventListeners() {
    // Login form submission
    document.getElementById('student-login-form').addEventListener('submit', handleStudentLogin);
    document.getElementById('teacher-login-form').addEventListener('submit', handleTeacherLogin);
    
    // Navigation links
    document.getElementById('assessment-link').addEventListener('click', loadAssessmentPage);
    document.getElementById('scholarships-link').addEventListener('click', loadScholarshipsPage);
    document.getElementById('mentors-link').addEventListener('click', loadMentorsPage);
    document.getElementById('dashboard-link').addEventListener('click', loadDashboardPage);
    document.getElementById('logout-link').addEventListener('click', handleLogout);
    
    // Learn more button
    document.getElementById('learn-more-btn').addEventListener('click', scrollToEthicalApproach);
}

// Handle student login
function handleStudentLogin(event) {
    event.preventDefault();
    
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    
    if (studentId && studentName) {
        // Create a user object
        const user = {
            id: student_${studentId},
            name: studentName,
            type: 'student',
            createdAt: new Date().toISOString(),
            assessments: {},
            recommendations: {}
        };
        
        // Save user to localStorage
        localStorage.setItem('eduguideai_user', JSON.stringify(user));
        
        // Update UI
        updateUIForLoggedInUser(user);
        
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
        
        // Load the assessment page
        loadAssessmentPage();
    }
}

// Handle teacher login
function handleTeacherLogin(event) {
    event.preventDefault();
    
    const teacherId = document.getElementById('teacher-id').value;
    const teacherName = document.getElementById('teacher-name').value;
    
    if (teacherId && teacherName) {
        // Create a user object
        const user = {
            id: teacher_${teacherId},
            name: teacherName,
            type: 'teacher',
            createdAt: new Date().toISOString(),
            students: []
        };
        
        // Save user to localStorage
        localStorage.setItem('eduguideai_user', JSON.stringify(user));
        
        // Update UI
        updateUIForLoggedInUser(user);
        
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
        
        // Load the teacher dashboard
        loadTeacherDashboard();
    }
}

// Check if user is logged in
function checkLoginStatus() {
    const userData = localStorage.getItem('eduguideai_user');
    
    if (userData) {
        const user = JSON.parse(userData);
        updateUIForLoggedInUser(user);
        
        // Load appropriate starting page based on user type
        if (user.type === 'student') {
            if (user.assessments && user.assessments.latest) {
                loadDashboardPage();
            } else {
                loadAssessmentPage();
            }
        } else if (user.type === 'teacher') {
            loadTeacherDashboard();
        }
    }
}

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
    // Hide login button, show user profile
    document.getElementById('login-btn').classList.add('d-none');
    document.getElementById('user-profile').classList.remove('d-none');
    
    // Set username
    document.getElementById('username-display').textContent = user.name;
    
    // Show/hide appropriate nav items based on user type
    if (user.type === 'student') {
        document.getElementById('nav-assessment').classList.remove('d-none');
        document.getElementById('nav-scholarships').classList.remove('d-none');
        document.getElementById('nav-mentors').classList.remove('d-none');
    } else {
        document.getElementById('nav-assessment').classList.add('d-none');
        document.getElementById('nav-scholarships').classList.add('d-none');
        document.getElementById('nav-mentors').classList.add('d-none');
    }
}

// Handle logout
function handleLogout() {
    // Clear localStorage
    localStorage.removeItem('eduguideai_user');
    
    // Update UI
    document.getElementById('login-btn').classList.remove('d-none');
    document.getElementById('user-profile').classList.add('d-none');
    
    // Redirect to home
    window.location.href = 'index.html';
}

// Load assessment page
function loadAssessmentPage() {
    // Check if user is logged in
    const userData = localStorage.getItem('eduguideai_user');
    if (!userData) {
        showLoginPrompt();
        return;
    }
    
    const user = JSON.parse(userData);
    if (user.type !== 'student') {
        alert('Assessment is only available for students.');
        return;
    }
    
    // Clear the dynamic content area
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = '';
    
    // Create assessment page content
    const assessmentContent = `
        <section id="career-assessment" class="container my-5">
            <h2 class="fw-bold text-primary text-center mb-4">Career Interest Assessment</h2>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="ethics-note mb-4">
                                <i class="bi bi-info-circle me-2"></i>
                                This assessment helps us understand your skills, interests, and background to provide 
                                personalized career guidance. All information is kept private and secure.
                            </div>
                            
                            <form id="assessment-form">
                                <h4 class="mb-3">Rate your skills and interests</h4>
                                <p class="text-muted">On a scale of 1-10, how would you rate yourself in the following areas:</p>
                                
                                <div class="mb-4">
                                    <label for="analytical" class="form-label d-flex justify-content-between">
                                        <span><i class="bi bi-graph-up me-2"></i> Analytical Skills</span>
                                        <span class="rating-value">5</span>
                                    </label>
                                    <input type="range" class="form-range skill-slider" id="analytical" min="1" max="10" value="5" 
                                           oninput="this.previousElementSibling.querySelector('.rating-value').textContent = this.value">
                                    <div class="d-flex justify-content-between small text-muted">
                                        <span>Problem-solving, logical thinking, working with numbers</span>
                                        <span></span>
                                    </div>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="creative" class="form-label d-flex justify-content-between">
                                        <span><i class="bi bi-palette me-2"></i> Creative Abilities</span>
                                        <span class="rating-value">5</span>
                                    </label>
                                    <input type="range" class="form
