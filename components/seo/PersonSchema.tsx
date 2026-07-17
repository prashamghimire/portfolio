export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://prashamghimire.com.np/#person",

    name: "Prasham Ghimire",

    url: "https://prashamghimire.com.np",

    image: "https://prashamghimire.com.np/profile.jpg",

    description:
      "Prasham Ghimire is a Nepali student, writer, and creator of the official website prashamghimire.com.np, documenting his academic journey, leadership, writings, projects, and official communications.",

    jobTitle: "Student",

    nationality: {
      "@type": "Country",
      name: "Nepal",
    },

    telephone: "+9779742539612",

    email: "mailto:prashamghimire666@gmail.com",

    knowsAbout: [
      "Leadership",
      "Management",
      "Writing",
      "Student Affairs",
      "Public Speaking",
      "Web Development",
      "Portfolio Development",
    ],

    sameAs: [
      "https://www.instagram.com/prasham_ghim/",
      "https://www.facebook.com/prasham.ghimire.564885",
      "https://www.linkedin.com/in/prasham-ghimire-36707b294/",
      "https://x.com/prasham_Ghim",
      "https://www.tiktok.com/@prasham_ghim",
      "https://prashamghim.substack.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}