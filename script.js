function displayProfile() {

let profile = {
  name: "Antoniya Jency J",
  location: "Chennai, Tamil Nadu, India",
  profession: "Software Developer",
  skills: ["Next.js", "React", "Python", "C++", "Java", "HTML", "CSS"],
  interests: ["Web Development", "AI", "Team Leadership"],
  email: "antoniyajency@gmail.com"
}

console.log("Name:", profile.name);
console.log("Location:", profile.location);
console.log("Profession:", profile.profession);
console.log("Skills:", profile.skills.join(", "));
console.log("Interests:", profile.interests.join(", "));
console.log("Email:", profile.email);
}
 