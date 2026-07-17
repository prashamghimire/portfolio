export default function Footer() {
  return (
    <footer className="bg-slate-950 text-stone-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Brand */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400">
            Prasham Ghimire
          </h2>

          <p className="mt-4 max-w-2xl mx-auto leading-8 text-stone-400">
            A personal archive documenting my journey through education,
            experiences, achievements, writings, and memorable moments.
          </p>
        </div>

        {/* Contact & Connect */}
        <div className="grid md:grid-cols-2 gap-14 mt-14">

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <a
              href="https://www.google.com/maps/place/Shree+Manohar+Secondary+School/@27.7387512,85.3209861,20z/data=!4m15!1m8!3m7!1s0x39eb193298b5899b:0xda8eaafc8b4fb805!2sTokha+Rd,+Tokha+44600!3b1!8m2!3d27.7504685!4d85.3253407!16s%2Fg%2F11_pzt8bp!3m5!1s0x39eb1925cdabc1bd:0x1ee2dd48bd1afd71!8m2!3d27.7378038!4d85.3194226!16s%2Fg%2F11b6nm7gfz?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 hover:text-yellow-400 transition"
            >
              📍 Tokha Road, Samakhushi
            </a>

            <a
              href="tel:+9779742539612"
              className="block mb-4 hover:text-yellow-400 transition"
            >
              📞 (+977) 9742539612
            </a>

            <a
              href="mailto:prashamghimire666@gmail.com"
              className="block hover:text-yellow-400 transition"
            >
              📧 prashamghimire666@gmail.com
            </a>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Connect
            </h3>

            <div className="grid grid-cols-2 gap-y-4">

              <a
                href="https://www.facebook.com/prasham.ghimire.564885"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/prasham_ghim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/prasham-ghimire-36707b294/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/prasham_Ghim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                X (Previously Twitter) 
              </a>

              <a
                href="https://www.tiktok.com/@prasham_ghim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                TikTok
              </a>

              <a
                href="https://prashamghim.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Substack
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 gap-3">

          <p>
            © 2026 Prasham Ghimire. All rights reserved.
          </p>

          <p>
            Designed & Developed by Prasham Ghimire
          </p>

        </div>

      </div>
    </footer>
  );
}