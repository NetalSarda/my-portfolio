export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Netal Sarda",
  "jobTitle": "Full Stack Developer & Data Analyst",
  "description": "Hi, I’m Netal Sarda — a full stack developer and data enthusiast passionate about building scalable and impactful web applications.",
  "url": "https://netalsarda.dev",  // Change to your actual portfolio URL if any
  "image": "https://netalsarda.dev/images/profile.png",  // Replace with your actual profile image link
  "sameAs": [
    "https://github.com/netalsarda",
    "https://linkedin.com/in/netalsarda"
  ],
  "knowsAbout": [
    "React",
    "Node.js",
    "JavaScript",
    "SQL",
    "Data Analysis",
    "Python",
    "MongoDB",
    "Full Stack Development"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Shri Ramdeobaba College of Engineering and Management"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Netal Sarda Portfolio",
  "description": "Portfolio of Netal Sarda — Full Stack Developer and Data Analyst specializing in web development and insightful data solutions.",
  "url": "https://netalsarda.dev",  // Your portfolio URL
  "author": {
    "@type": "Person",
    "name": "Netal Sarda"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://netalsarda.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Netal Sarda",
  "url": "https://netalsarda.dev",
  "logo": "https://netalsarda.dev/icon.png",  // Replace with your actual favicon or logo
  "description": "Full Stack Developer and Data Analyst skilled in building responsive applications and driving insights through data.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "netalsarda11@gmail.com"
  }
};
