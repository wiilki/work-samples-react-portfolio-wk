import React from 'react';

export const biography = `
As a Full Stack Developer, I specialize in React with experience in Next.js and API integrations. Proficient in CSS styling and UX design using Bootstrap and Tailwind, I excel in organizing projects into elegant React components. While I'm still in the early stages of my coding journey, having dedicated countless hours to refining my skills in recent years, my passion for software development continues to grow. With a strong IT foundation and sharp analytical skills, I combine creativity with problem-solving to craft user-friendly applications. Recognized for meticulous attention to detail and adept project management, I am eager to contribute these valuable skills to innovative software development endeavors.
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
content: <a href="https://work-samples-react-portfolio-wk-bfdd-5jvtx10ju.vercel.app/" target="_blank" rel="noopener noreferrer">william-kim.com</a>,
  },
  {
    title: "City",
    icon: "bi bi-chevron-right",
    content: "Chino Hills, USA",
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
    location: "Chino Hills, CA",
    socialLinks: {
        linkedIn: "https://www.linkedin.com/in/thewillkim/",
        github: "https://github.com/wiilki/",
    }
};
