import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <div className="flex items-center justify-center">
          {/* <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          > */}
          <h1 className="font-mono text-xl font-bold tracking-tight text-foreground md:text-2xl">
            <span className="text-primary">life</span>
            <span className="text-muted-foreground">_</span>
            <span className="text-secondary">indebug</span>
            <span className="text-muted-foreground">_mode</span>
          </h1>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md" />
            <Terminal className="relative h-8 w-8 text-primary" />
          </div>
        </div>

        <SignedOut>
          <SignInButton
            mode="modal"
           appearance={{
  variables: {
    colorPrimary: "#10746C",
    colorBackground: "#0b1f1e",      // solid background
    colorText: "#ffffff",            // labels & headings
    colorTextSecondary: "#9fbfbb",
    colorInputBackground: "#0f2a27",
    colorDanger: "#ef4444",
    borderRadius: "0.75rem",
    fontFamily: "Inter, ui-sans-serif",
  },
  elements: {
    modal:
      "bg-[#0b1f1e] border border-[#1e4e49] rounded-2xl shadow-2xl",
    card:
      "bg-[#091518] shadow-none rounded-xl",
    headerTitle:
      "text-2xl font-bold text-white",
    headerSubtitle:
      "text-[#9fbfbb]",

    /* GOOGLE BUTTON */
    socialButtonsBlockButton:
      "bg-white text-black hover:bg-gray-100 border border-gray-300 font-medium",

    /* INPUTS */
    formFieldInput:
      "bg-[#0f2a27] text-white border border-[#1e4e49] focus:ring-2 focus:ring-primary",

    /* INPUT LABELS */
    formFieldLabel:
      "text-white font-medium",

    /* PRIMARY BUTTON */
    formButtonPrimary:
      "bg-[#10746C] hover:bg-[#0e5f59] text-white font-semibold rounded-lg",

    footerActionText:
      "text-[#9fbfbb]",
    footerActionLink:
      "text-primary hover:underline",
  },
}}

          >
            <button
              type="button"
              // className="btn nav-item  hidden md:inline-flex btn btn-primary"
              className="
              rounded-full
              hidden md:inline-flex
              bg-primary/10
              border border-primary/30
              text-sm font-medium text-primary
              px-5 py-2
              transition
              hover:bg-primary/20"
            >
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8 ring-2 ring-primary-700",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </motion.nav>
  );
};

export default Navbar;
