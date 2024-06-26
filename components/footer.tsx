import React from "react";

export default function Footer() {

  const setDynamicYearRange = () => {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    return (startYear == currentYear) ? `${startYear}` : `${startYear}-${currentYear}`;
  }

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {setDynamicYearRange()}. Haley Jung. All rights reserved.
      </small>
      <p className="text-xs">
        This website is built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, & Vercel hosting.
      </p>
    </footer>
  );
}
