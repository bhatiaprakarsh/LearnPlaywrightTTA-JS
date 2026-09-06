const user = {
    id: 101,
    name: "Prakarsh",
    username: "prakarsh20",
    age: 20,
    email: "pb@gmail.com",
    phone: "+91-9876543210",
    isActive: true,
    profession: "Software Tester",
    address: {
        houseNumber: 24,
        street: "Learning Street",
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        pinCode: 560001,
    },
    skills: ["JavaScript", "Playwright", "HTML", "CSS"],
    hobbies: ["Reading", "Coding", "Traveling"],
    education: {
        degree: "Bachelor of Technology",
        college: "ABC Institute of Technology",
        graduationYear: 2027,
    },
    projects: [
        {
            name: "E-commerce Testing",
            technology: "Playwright",
            completed: true,
        },
        {
            name: "Personal Portfolio",
            technology: "JavaScript",
            completed: false,
        },
    ],
    socialMedia: {
        github: "https://github.com/prakarsh20",
        linkedin: "https://www.linkedin.com/in/prakarsh20",
    },
    createdAt: "2026-09-06",
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    },
    getContactInfo() {
        return `${this.email} | ${this.phone}`;
    },
    addSkill(skill) {
        this.skills.push(skill);
    },
    getProjectCount() {
        return this.projects.length;
    },
    getProfileSummary() {
        return {
            name: this.name,
            profession: this.profession,
            city: this.address.city,
            skills: this.skills.length,
            projects: this.projects.length,
        };
    },
};

console.log(user.greet());
console.log(user.getContactInfo());
console.log(user.getProfileSummary());


console.log(user.name); // Accessing name property
console.log(user.address.pinCode); // Accessing nested property