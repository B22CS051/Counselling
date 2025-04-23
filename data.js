// EduGuideAI - Data Module

// Career dataset
const careerData = [
    {
        id: 1,
        title: "Software Developer",
        description: "Design, develop, and maintain software applications and systems. Solve complex problems with coding and logical thinking.",
        skills: {
            analytical: 0.9,
            creative: 0.6,
            social: 0.5,
            technical: 0.9,
            outdoor: 0.1
        },
        education: "Bachelor's Degree",
        salary: "₹4,00,000 - ₹15,00,000",
        growth: "High",
        ruralOpportunity: "Low",
        keySkills: ["Programming", "Problem Solving", "Logical Thinking", "Software Design"],
        entryPathways: ["B.Tech/B.E. in Computer Science", "BCA", "Diploma in Computer Science", "Self-taught coding"]
    },
    {
        id: 2,
        title: "Data Scientist",
        description: "Analyze large data sets to find patterns and insights. Use statistical methods and machine learning to solve business problems.",
        skills: {
            analytical: 0.9,
            creative: 0.6,
            social: 0.5,
            technical: 0.8,
            outdoor: 0.2
        },
        education: "Master's Degree",
        salary: "₹6,00,000 - ₹18,00,000",
        growth: "High",
        ruralOpportunity: "Very Low",
        keySkills: ["Statistics", "Programming", "Machine Learning", "Data Analysis"],
        entryPathways: ["M.Tech/M.E. in CS/Data Science", "M.Sc in Statistics/Mathematics", "B.Tech with certifications"]
    },
    {
        id: 3,
        title: "Teacher",
        description: "Educate students, develop curriculum, and assess learning progress. Make complex topics accessible and engaging.",
        skills: {
            analytical: 0.6,
            creative: 0.7,
            social: 0.9,
            technical: 0.4,
            outdoor: 0.4
        },
        education: "Bachelor's Degree",
        salary: "₹3,00,000 - ₹8,00,000",
        growth: "Medium",
        ruralOpportunity: "High",
        keySkills: ["Communication", "Patience", "Subject Knowledge", "Classroom Management"],
        entryPathways: ["B.Ed after any Bachelor's degree", "D.El.Ed for primary teaching", "B.A./B.Sc. B.Ed integrated courses"]
    },
    {
        id: 4,
        title: "Nurse",
        description: "Provide healthcare services, administer treatments, and support patients. Combine medical knowledge with compassionate care.",
        skills: {
            analytical: 0.6,
            creative: 0.4,
            social: 0.9,
            technical: 0.6,
            outdoor: 0.4
        },
        education: "Bachelor's/Diploma",
        salary: "₹3,00,000 - ₹8,00,000",
        growth: "High",
        ruralOpportunity: "Medium",
        keySkills: ["Patient Care", "Medical Knowledge", "Empathy", "Critical Thinking"],
        entryPathways: ["B.Sc Nursing", "General Nursing and Midwifery (GNM) Diploma", "Post-Basic B.Sc Nursing"]
    },
    {
        id: 5,
        title: "Electrician",
        description: "Install, maintain, and repair electrical systems in homes, businesses, and factories. Ensure safety and functionality of electrical equipment.",
        skills: {
            analytical: 0.5,
            creative: 0.3,
            social: 0.5,
            technical: 0.9,
            outdoor: 0.7
        },
        education: "ITI/Vocational Training",
        salary: "₹2,00,000 - ₹6,00,000",
        growth: "Medium",
        ruralOpportunity: "High",
        keySkills: ["Electrical Systems", "Troubleshooting", "Safety Standards", "Technical Skills"],
        entryPathways: ["ITI Electrician Course", "Diploma in Electrical Engineering", "Apprenticeship Programs"]
    },
    {
        id: 6,
        title: "Plumber",
        description: "Install and repair plumbing systems. Ensure water supply and drainage systems work properly in buildings.",
        skills: {
            analytical: 0.4,
            creative: 0.3,
            social: 0.5,
            technical: 0.9,
            outdoor: 0.7
        },
        education: "ITI/Vocational Training",
        salary: "₹2,00,000 - ₹6,00,000",
        growth: "Medium",
        ruralOpportunity: "High",
        keySkills: ["Plumbing Systems", "Troubleshooting", "Technical Skills", "Physical Strength"],
        entryPathways: ["ITI Plumbing Course", "Apprenticeship Programs", "Technical Certifications"]
    },
    {
        id: 7,
        title: "Graphic Designer",
        description: "Create visual concepts for digital and print media. Communicate ideas through images, layouts, and designs.",
        skills: {
            analytical: 0.3,
            creative: 0.9,
            social: 0.6,
            technical: 0.7,
            outdoor: 0.2
        },
        education: "Bachelor's/Diploma",
        salary: "₹2,50,000 - ₹8,00,000",
        growth: "Medium",
        ruralOpportunity: "Low",
        keySkills: ["Visual Design", "Creativity", "Software Tools", "Communication"],
        entryPathways: ["Bachelor's in Design/Fine Arts", "Diploma in Graphic Design", "Certificate Courses in Design"]
    },
    {
        id: 8,
        title: "Content Creator",
        description: "Develop written, video, or audio content for various platforms. Engage audiences through storytelling and information sharing.",
        skills: {
            analytical: 0.5,
            creative: 0.9,
            social: 0.7,
            technical: 0.5,
            outdoor: 0.3
        },
        education: "Bachelor's/Self-learning",
        salary: "₹2,00,000 - ₹10,00,000",
        growth: "High",
        ruralOpportunity: "Medium",
        keySkills: ["Writing/Speaking", "Creativity", "Research", "Digital Media"],
        entryPathways: ["Bachelor's in Mass Communication", "Journalism Courses", "Self-learning and Portfolio Building"]
    },
    {
        id: 9,
        title: "Accountant",
        description: "Prepare and examine financial records. Ensure accuracy of financial statements and tax compliance.",
        skills: {
            analytical: 0.9,
            creative: 0.3,
            social: 0.6,
            technical: 0.5,
            outdoor: 0.1
        },
        education: "Bachelor's Degree",
        salary: "₹3,50,000 - ₹10,00,000",
        growth: "Medium",
        ruralOpportunity: "Medium",
        keySkills: ["Financial Analysis", "Attention to Detail", "Mathematics", "Tax Knowledge"],
        entryPathways: ["B.Com", "Bachelor's in Accounting", "CA Intermediate", "CS Foundation"]
    },
    {
        id: 10,
        title: "Agricultural Technician",
        description: "Apply agricultural technologies to improve farming practices. Help farmers increase productivity and sustainability.",
        skills: {
            analytical: 0.6,
            creative: 0.4,
            social: 0.5,
            technical: 0.7,
            outdoor: 0.9
        },
        education: "Diploma/Certificate",
        salary: "₹2,00,000 - ₹5,00,000",
        growth: "Medium",
        ruralOpportunity: "Very High",
        keySkills: ["Farming Techniques", "Plant/Animal Science", "Technical Skills", "Problem Solving"],
        entryPathways: ["Diploma in Agriculture", "B.Sc Agriculture", "Certificate Courses in Agricultural Technology"]
    },
    {
        id: 11,
        title: "Social Worker",
        description: "Provide support to individuals and communities facing challenges. Connect people with resources and services.",
        skills: {
            analytical: 0.5,
            creative: 0.6,
            social: 0.9,
            technical: 0.3,
            outdoor: 0.6
        },
        education: "Bachelor's Degree",
        salary: "₹3,00,000 - ₹7,00,000",
        growth: "Medium",
        ruralOpportunity: "High",
        keySkills: ["Empathy", "Communication", "Problem Solving", "Community Outreach"],
        entryPathways: ["Bachelor's in Social Work", "Master's in Social Work", "Psychology/Sociology Degrees"]
    },
    {
        id: 12,
        title: "Entrepreneur",
        description: "Start and run businesses. Identify opportunities, take risks, and create value through innovation.",
        skills: {
            analytical: 0.7,
            creative: 0.8,
            social: 0.8,
            technical: 0.6,
            outdoor: 0.5
        },
        education: "Any/Self-learning",
        salary: "Variable",
        growth: "High",
        ruralOpportunity: "Medium",
        keySkills: ["Business Acumen", "Leadership", "Problem Solving", "Risk Management"],
        entryPathways: ["Any Educational Background", "Business Management Courses", "Entrepreneurship Programs"]
    },
    {
        id: 13,
        title: "Chef",
        description: "Prepare and cook food in restaurants, hotels, or other settings. Create menus and develop recipes.",
        skills: {
            analytical: 0.4,
            creative: 0.8,
            social: 0.7,
            technical: 0.7,
            outdoor: 0.4
        },
        education: "Diploma/Certificate",
        salary: "₹2,00,000 - ₹12,00,000",
        growth: "Medium",
        ruralOpportunity: "Medium",
        keySkills: ["Cooking Techniques", "Creativity", "Time Management", "Food Safety"],
        entryPathways: ["Hotel Management Degree", "Culinary Arts Diploma", "Apprenticeship in Restaurants"]
    },
    {
        id: 14,
        title: "Mechanical Engineer",
        description: "Design, develop, and test mechanical systems and machines. Solve problems related to mechanical devices and equipment.",
        skills: {
            analytical: 0.7,
            creative: 0.5,
            social: 0.4,
            technical: 0.9,
            outdoor: 0.6
        },
        education: "Bachelor's Degree",
        salary: "₹3,50,000 - ₹12,00,000",
        growth: "Medium",
        ruralOpportunity: "Low",
        keySkills: ["Mechanical Design", "Problem Solving", "Technical Skills", "Mathematics"],
        entryPathways: ["B.Tech/B.E. in Mechanical Engineering", "Diploma in Mechanical Engineering"]
    },
    {
        id: 15,
        title: "Civil Engineer",
        description: "Design, construct, and maintain infrastructure like buildings, roads, and bridges. Ensure structural safety and functionality.",
        skills: {
            analytical: 0.7,
            creative: 0.5,
            social: 0.5,
            technical: 0.9,
            outdoor: 0.7
        },
        education: "Bachelor's Degree",
        salary: "₹3,50,000 - ₹12,00,000",
        growth: "Medium",
        ruralOpportunity: "Medium",
        keySkills: ["Structural Design", "Project Management", "Technical Skills", "Mathematics"],
        entryPathways: ["B.Tech/B.E. in Civil Engineering", "Diploma in Civil Engineering"]
    }
];

// Scholarship dataset
const scholarshipData = [
    {
        id: 1,
        name: "National Scholarship Portal",
        eligibility: "All students with >60% marks",
        amount: "₹10,000 - ₹100,000 per year",
        deadline: "October 31, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Central government portal offering various scholarships for students from different backgrounds and academic levels."
    },
    {
        id: 2,
        name: "Post-Matric Scholarship",
        eligibility: "SC/ST/OBC students",
        amount: "₹5,000 - ₹60,000 per year",
        deadline: "December 15, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Financial assistance for students belonging to SC/ST/OBC categories pursuing post-matriculation education."
    },
    {
        id: 3,
        name: "Central Sector Scheme",
        eligibility: "Top 20 percentile students",
        amount: "₹12,000 per month",
        deadline: "September 30, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Merit-based scholarship for students who scored in the top 20 percentile in their board exams."
    },
    {
        id: 4,
        name: "PM Scholarship Scheme",
        eligibility: "Wards of military personnel",
        amount: "₹2,500 per month",
        deadline: "August 31, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship for the wards of ex-servicemen/ex-coast guards and their widows."
    },
    {
        id: 5,
        name: "INSPIRE Scholarship",
        eligibility: "Science students with >85% marks",
        amount: "₹80,000 per year",
        deadline: "November 30, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship for students pursuing science education to encourage scientific talent."
    },
    {
        id: 6,
        name: "Pragati Scholarship for Girls",
        eligibility: "Girls in technical education",
        amount: "₹50,000 per year",
        deadline: "July 31, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship to encourage female students to pursue technical education and support them financially."
    },
    {
        id: 7,
        name: "State Merit Scholarship",
        eligibility: "Top performers in state exams",
        amount: "₹10,000 - ₹50,000 per year",
        deadline: "October 15, 2025",
        region: "State-specific",
        applicationLink: "https://scholarships.gov.in/",
        description: "Merit-based scholarship for students who have performed exceptionally well in state-level examinations."
    },
    {
        id: 8,
        name: "Minority Scholarship",
        eligibility: "Minority community students",
        amount: "₹5,000 - ₹30,000 per year",
        deadline: "September 15, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Financial assistance for students belonging to minority communities to pursue higher education."
    },
    {
        id: 9,
        name: "SC/ST/OBC Scholarship",
        eligibility: "SC/ST/OBC students with >55% marks",
        amount: "₹5,000 - ₹60,000 per year",
        deadline: "December 31, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship program to support students from SC/ST/OBC backgrounds in their educational pursuits."
    },
    {
        id: 10,
        name: "Women in STEM Scholarship",
        eligibility: "Girls pursuing STEM education",
        amount: "₹50,000 - ₹100,000 per year",
        deadline: "August 15, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship to encourage and support women pursuing education in Science, Technology, Engineering, and Mathematics."
    },
    {
        id: 11,
        name: "Rural Development Scholarship",
        eligibility: "Students from rural areas",
        amount: "₹10,000 - ₹30,000 per year",
        deadline: "November 15, 2025",
        region: "Rural areas only",
        applicationLink: "https://scholarships.gov.in/",
        description: "Scholarship specifically designed to support students from rural backgrounds to access quality education."
    },
    {
        id: 12,
        name: "First Generation Learners Grant",
        eligibility: "First-generation college students",
        amount: "₹15,000 - ₹40,000 per year",
        deadline: "October 1, 2025",
        region: "All India",
        applicationLink: "https://scholarships.gov.in/",
        description: "Financial assistance for students who are the first in their families to pursue higher education."
    }
];

// Mentor dataset
const mentorData = [
    {
        id: 1,
        name: "Rajesh Kumar",
        profession: "Software Engineer",
        experience: "10+ years at Microsoft",
        availability: "Weekends",
        languages: ["Hindi", "English"],
        region: "Delhi",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        specialization: "Web Development, Mobile Apps"
    },
    {
        id: 2,
        name: "Priya Sharma",
        profession: "Data Scientist",
        experience: "8 years at TCS",
        availability: "Weekday evenings",
        languages: ["English", "Tamil"],
        region: "Chennai",
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        specialization: "Machine Learning, Data Analysis"
    },
    {
        id: 3,
        name: "Ankit Patel",
        profession: "Teacher",
        experience: "15+ years at Delhi Public School",
        availability: "Saturdays",
        languages: ["Gujarati", "Hindi", "English"],
        region: "Ahmedabad",
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        specialization: "Mathematics, Science Education"
    },
    {
        id: 4,
        name: "Sunita Desai",
        profession: "Nurse",
        experience: "12 years at Apollo Hospital",
        availability: "Weekends",
        languages: ["Marathi", "Hindi", "English"],
        region: "Mumbai",
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        specialization: "Healthcare, Medical Support"
    },
    {
        id: 5,
        name: "Mohammed Khan",
        profession: "Electrician",
        experience: "20 years in electrical contracting",
        availability: "Flexible hours",
        languages: ["Urdu", "Hindi", "English"],
        region: "Lucknow",
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        specialization: "Electrical Systems, Safety Standards"
    },
    {
        id: 6,
        name: "Lakshmi Narayanan",
        profession: "Accountant",
        experience: "14 years at HDFC Bank",
        availability: "Weekday evenings",
        languages: ["Tamil", "English"],
        region: "Chennai",
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        specialization: "Financial Planning, Tax Compliance"
    },
    {
        id: 7,
        name: "Arjun Singh",
        profession: "Agricultural Expert",
        experience: "18 years in agricultural extension",
        availability: "Mornings",
        languages: ["Punjabi", "Hindi", "English"],
        region: "Punjab",
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        specialization: "Sustainable Farming, Crop Management"
    },
    {
        id: 8,
        name: "Meera Gupta",
        profession: "Social Worker",
        experience: "10 years at NGO sector",
        availability: "Afternoons",
        languages: ["Hindi", "English"],
        region: "Delhi",
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        specialization: "Community Development, Social Services"
    },
    {
        id: 9,
        name: "Prakash Joshi",
        profession: "Entrepreneur",
        experience: "7 years running startups",
        availability: "Weekends",
        languages: ["Hindi", "English", "Gujarati"],
        region: "Gujarat",
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        specialization: "Business Development, Startups"
    },
    {
        id: 10,
        name: "Neha Verma",
        profession: "Content Creator",
        experience: "12 years as content writer",
        availability: "Flexible hours",
        languages: ["Hindi", "English"],
        region: "Jaipur",
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        specialization: "Digital Content, Social Media"
    },
    {
        id: 11,
        name: "Sanjay Mehta",
        profession: "Mechanical Engineer",
        experience: "15 years at Maruti Suzuki",
        availability: "Sunday only",
        languages: ["Hindi", "English"],
        region: "Delhi",
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        specialization: "Automotive Engineering, Manufacturing"
    },
    {
        id: 12,
        name: "Geeta Reddy",
        profession: "Civil Engineer",
        experience: "9 years at L&T",
        availability: "Weekday evenings",
        languages: ["Telugu", "English", "Hindi"],
        region: "Hyderabad",
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        specialization: "Construction Management, Structural Design"
    }
];
