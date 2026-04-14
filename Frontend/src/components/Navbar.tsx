import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const clerkAppearance = {
  variables: {
    colorPrimary: "#10746C",
    colorBackground: "#0b1f1e",
    colorText: "#ffffff",
    colorTextSecondary: "#9fbfbb",
    colorInputBackground: "#0f2a27",
    colorDanger: "#ef4444",
    borderRadius: "0.75rem",
  },
  elements: {
    modal: "bg-[#0b1f1e] border border-[#1e4e49] rounded-2xl shadow-2xl",
    card: "bg-[#091518] shadow-none rounded-xl",
    headerTitle: "text-2xl font-bold text-white",
    headerSubtitle: "text-[#9fbfbb]",
    socialButtonsBlockButton:
      "bg-white text-black hover:bg-gray-100 border border-gray-300 font-medium",
    formFieldInput:
      "bg-[#0f2a27] text-white border border-[#1e4e49] focus:ring-2 focus:ring-[#10746C]",
    formFieldLabel: "text-white font-medium",
    formButtonPrimary:
      "bg-[#10746C] hover:bg-[#0e5f59] text-white font-semibold rounded-lg",
    footerActionText: "text-[#9fbfbb]",
    footerActionLink: "text-[#10746C] hover:underline",
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 10);
  });

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#0a0a12",
        borderBottom: scrolled
          ? "1px solid rgba(16,116,108,0.25)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: scrolled ? "0 4px 32px rgba(16,116,108,0.08)" : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #10746C55 30%, #10746C 50%, #10746C55 70%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-5 py-3 flex items-center justify-between">

        {/* LEFT — Logo */}
        <Link to="https://offerunlocked.online" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at center, #10746C22 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src="/logo.png"
              alt="Offer Unlocked"
              style={{ height: "38px", width: "auto", display: "block", position: "relative" }}
            />
          </motion.div>
        </Link>

        {/* RIGHT — Nav + Auth */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* DSA Sheet */}
          {/* <Link to="/dsa-sheet" className="group relative"> */}
            <motion.span
              className="relative flex items-center text-sm font-medium px-3 py-1.5 rounded-md"
              style={{ color: "rgba(255,255,255,0.55)" }}
              whileHover={{ color: "rgba(255,255,255,0.95)" }}
              transition={{ duration: 0.15 }}
            >
              <span
                className="absolute inset-0 rounded-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"
                style={{ background: "rgba(16,116,108,0.1)" }}
              />
              <span className="relative">DSA Sheet</span>
            </motion.span>
          {/* </Link> */}

          {/* Divider */}
          {/* <div
            className="hidden sm:block h-4 w-px opacity-20"
            style={{ background: "#ffffff" }}
          /> */}

          {/* Auth */}
          {/* <SignedOut>
            <SignInButton mode="modal" appearance={clerkAppearance}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:inline-flex items-center rounded-lg text-sm font-semibold px-4 py-2"
                style={{
                  background: "rgba(16,116,108,0.12)",
                  border: "1px solid rgba(16,116,108,0.38)",
                  color: "#5ecec7",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(16,116,108,0.22)";
                  el.style.borderColor = "rgba(16,116,108,0.65)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(16,116,108,0.12)";
                  el.style.borderColor = "rgba(16,116,108,0.38)";
                }}
              >
                Sign In
              </motion.button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "h-8 w-8 ring-2 ring-[#10746C]/50 hover:ring-[#10746C]/80 transition-all duration-200",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;