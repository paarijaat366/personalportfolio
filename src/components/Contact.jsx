// src/components/Contact.jsx

const Contact = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Let’s work together
        </h2>

        {/* Subtext */}
        <p className="text-neutral-400 max-w-xl mb-12">
          Have a project in mind or want to collaborate?
          Reach out — I’m always open to discussing new ideas.
        </p>

        {/* Icons */}
        <div className="flex items-center gap-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/krishna_awasthi__22/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-neutral-400 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="insta.svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.87 1.26" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/paarijaat-awasthi-542790327/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="link.svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6v7h-4v-6.2c0-1.48-.03-3.38-2.05-3.38-2.05 0-2.36 1.6-2.36 3.25v6.33h-4v-16z" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            
            aria-label="Email"
            className="text-neutral-400 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6 12 13 2 6" />
            </svg>
          </a>
          <p className="mr-1.5">paarijaat366@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
