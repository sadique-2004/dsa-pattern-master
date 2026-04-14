import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDiscord, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

/* Socials */
const socials = [
  {
    icon: FaDiscord,
    label: "Discord",
    url: "https://discord.gg/offerunlocked",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/company/offer-unlocked",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com/offer_unlocked",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "https://youtube.com/@offer_unlocked",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#07070f] border-t border-[#10746C]/20 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ───── LOGO + QUOTE ───── */}
        <div className="text-center mb-16">

          {/* Logo */}
          <img
            src="/logo.png"
            alt="Offer Unlocked"
            className="mx-auto h-12 mb-6"
          />

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed max-w-2xl mx-auto">
            “Consistency beats talent when talent doesn’t practice.”
          </blockquote>

          <p className="mt-4 text-white/60 text-sm">
            Stay consistent. Crack interviews.
          </p>
        </div>

        {/* ───── VALUE + CTA GRID ───── */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* WHAT WE OFFER */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              What You Get
            </h3>
            <ul className="space-y-2 text-white/60 text-sm leading-relaxed">
              <li>• Pattern-wise DSA Sheet (180+ problems)</li>
              <li>• Core CS Fundamentals</li>
              <li>• Development Roadmaps</li>
              <li>• Mock Interview Preparation</li>
              <li>• Curated Resources & Guidance</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Main Website
                </Link>
              </li>
              <li>
                <Link to="/dsa-sheet" className="hover:text-white transition">
                  DSA Pattern Sheet
                </Link>
              </li>
              <li>
                <Link to="/cs-fundamentals" className="hover:text-white transition">
                  CS Fundamentals
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Join Community
            </h3>

            <p className="text-white/60 text-sm mb-4">
              Learn, build, and grow with a community focused on cracking top tech roles.
            </p>

            <div className="flex gap-3 flex-wrap">

              {/* Discord */}
              <a
                href="https://discord.gg/offerunlocked"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#5865F2]/10 border border-[#5865F2]/40 text-[#a5abf8] hover:scale-105 transition"
              >
                Join Discord
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/offer-unlocked"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#0A66C2]/10 border border-[#0A66C2]/40 text-[#6aa9ff] hover:scale-105 transition"
              >
                Follow LinkedIn
              </a>

            </div>
          </div>
        </div>

        {/* ───── SOCIALS ───── */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition text-sm"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* ───── BOTTOM ───── */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Offer Unlocked. All rights reserved.</p>
          <p>
            Built by <span className="text-white/80">Mohammad Sadique</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;