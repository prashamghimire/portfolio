export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prasham Ghimire",
    "url": "https://prashamghimire.com.np",
    "jobTitle": "Student",
    "description":
      "Prasham Ghimire is a student, writer, and creator of the official personal archive website.",
    "sameAs": [
      "https://www.instagram.com/prasham_ghim",
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