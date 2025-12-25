// import { motion } from 'framer-motion';
// import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
// import { Heart } from 'lucide-react';

// const socialLinks = [
//   {
//     name: 'LinkedIn',
//     icon: FaLinkedin,
//     url: 'https://linkedin.com/in/sadiquemd',
//     hoverColor: 'hover:text-[#0A66C2]',
//   },
//   {
//     name: 'Instagram',
//     icon: FaInstagram,
//     url: 'https://instagram.com/life_indebug_mode',
//     hoverColor: 'hover:text-[#E4405F]',
//   },
//   {
//     name: 'YouTube',
//     icon: FaYoutube,
//     url: 'https://youtube.com/@life_indebug_mode',
//     hoverColor: 'hover:text-[#FF0000]',
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="relative mt-auto border-t border-border bg-card/50">
//       <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

//       <div className="container relative mx-auto px-4 py-12">
//         <div className="flex flex-col items-center gap-8">

//           {/* Quote */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center font-mono text-sm text-muted-foreground md:text-base"
//           >
//             "Consistency beats talent when talent doesn't practice."
//           </motion.p>

//                     <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center font-mono text-sm text-muted-foreground md:text-base"
//           >
//             "DSA pattern sheet inspired by <b className='font-bold text-blue-500'>Padho with Pratyush</b>. Big thanks"
//           </motion.p>
          

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.5 }}
//             className="flex items-center gap-4"
//           >
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={social.name}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
//                 whileHover={{ y: -4, scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={`rounded-lg border border-border bg-card p-3 text-muted-foreground transition-colors ${social.hoverColor}`}
//                 aria-label={social.name}
//               >
//                 <social.icon className="h-5 w-5" />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Built by + Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="flex items-center gap-3 text-sm text-muted-foreground"
//           >
//             {/* Profile Image */}
//             <motion.img
//               src="https://www.sadiquedev.xyz/static/media/profileImg.a9385fbf86fe196e8bf5.jpg"
//               alt="MD Sadique"
//               className="h-10 w-10 rounded-full object-cover border border-border grayscale hover:grayscale-0 transition"
//               animate={{ y: [0, -4, 0] }}
//               transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
//             />

//             <span>Built with</span>

//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               <Heart className="h-4 w-4 fill-destructive text-destructive" />
//             </motion.span>

//             <span>by</span>
//             <span className="font-semibold text-foreground">Mohammad Sadique</span>
//           </motion.div>

//           {/* Copyright */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="text-xs text-muted-foreground"
//           >
//             © {new Date().getFullYear()} life_indebug_mode. All rights reserved.
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Heart } from "lucide-react";

const socials = [
  { icon: FaLinkedin, url: "https://linkedin.com/in/sadiquemd", hover: "hover:text-[#0A66C2]" },
  { icon: FaInstagram, url: "https://instagram.com/life_indebug_mode", hover: "hover:text-[#E4405F]" },
  { icon: FaYoutube, url: "https://youtube.com/@life_indebug_mode", hover: "hover:text-[#FF0000]" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-10">

        {/* QUOTE (HERO LINE) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xl font-bold tracking-tight text-foreground md:text-2xl"
        >
          Consistency beats talent when talent doesn’t practice.
        </motion.p>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* LEFT — YOU */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground"
          >
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-md border border-border bg-card p-2 transition ${s.hover}`}
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Built by */}
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="h-3 w-3 fill-destructive text-destructive" />
              <span>by</span>
              <span className="font-medium text-foreground">
                Mohammad Sadique
              </span>
            </div>
          </motion.div>

          {/* RIGHT — INSPIRATION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground"
          >
            <span className="uppercase tracking-wider text-xs">
              Inspiration
            </span>

            <span className="font-medium text-foreground">
              Padho with Pratyush
            </span>

            <span className="max-w-xs">
              DSA Pattern Sheet inspired by his teaching.
            </span>
          </motion.div>

        </div>

        {/* COPYRIGHT */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} life_indebug_mode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
