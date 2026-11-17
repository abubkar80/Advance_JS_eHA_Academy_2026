function calculateAge(birthYear){
    const currentYear = new Date().getFullYear();
    
    // Calculating the age by subtracting the birth year from the current year
    return currentYear - birthYear;
}

const personalProfile = {
    name: "Abubakar Usman Muhammad",

    //this object store the date of birth
    dateOfBirth: new Date("1998-08-02"),
    nationality: "Nigerian",
    currentLocation: "Gombe, Gombe State, Nigeria",
    //this function calculates the age of the persona
    age: calculateAge(1998),

    // this array stored the list of my hobbies and interests

    hobbies: [
        "Coding",
        "Reading",
        "Cybersecurity",
        "Blockchain Technology",
        "Research"
    ],

    education: "B.Sc. Computer Science",

    skills: [
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "react"
    ]
};

console.log("My Basic Personal Profile");
console.log(personalProfile);

// Display individual information
console.log("Name:", personalProfile.name);
console.log("Date of Birth:", personalProfile.dateOfBirth.toDateString());
console.log("Nationality:", personalProfile.nationality);
console.log("Current Location:", personalProfile.currentLocation);
console.log("Age:", personalProfile.age);
console.log("Hobbies:", personalProfile.hobbies.join(", "));