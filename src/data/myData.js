import React from 'react';

export const biography = `
As a Full Stack Developer, I leverage a strong emphasis on React, coupled with experience in Next.js and API integrations. Proficient 
in CSS styling and UX design using Bootstrap and Tailwind, I excel in meticulous organization and enjoy breaking down projects into 
elegant React components. Despite my relatively recent start in coding, I've dedicated countless hours to refining my skills, fueled 
by a deep passion for frontend development. With a solid IT foundation and sharp analytical skills, I merge creativity with problem-solving 
to craft user-friendly applications. Recognized for meticulous attention to detail and adeptness in managing complex projects, I am eager
 to bring these valuable skills to the forefront of innovative software development endeavors.
`;

const calculateAge = (birthday) => {
  const birthdayDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthdayDate.getFullYear();
  const m = today.getMonth() - birthdayDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
    age--;
  }
  return age;
};

export const details = [
  {
    title: "Website",
    icon: "bi bi-chevron-right",
    content: <a href="https://william-kim.com/" target="_blank" rel="noopener noreferrer">william-kim.com</a>,
  },
  {
    title: "City",
    icon: "bi bi-chevron-right",
    content: "Victorville, USA",
  },
  {
    title: "Age",
    icon: "bi bi-chevron-right",
    content: calculateAge('1988-06-08').toString(),
  },
  {
    title: "Email",
    icon: "bi bi-chevron-right",
    content: <a href="mailto:thewillkim@icloud.com">thewillkim@icloud.com</a>,
  },
  {
    title: "Freelance",
    icon: "bi bi-chevron-right",
    content: "Available",
  }
];

export const contactInfo = {
    email: "thewillkim@icloud.com",
    location: "Victoville, CA",
    socialLinks: {
        linkedIn: "https://www.linkedin.com/in/thewillkim/",
        github: "https://github.com/wiilki/",
    }
};
