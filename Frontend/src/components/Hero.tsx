// import { motion } from "framer-motion";
// import { Code2, Sparkles } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-grid opacity-30" />
//       <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center"
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
//           >
//             <Sparkles className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium text-primary">
//               Interview Ready DSA Sheet
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mb-4 text-4xl font-bold tracking-tight md:text-6xl"
//           >
//             Pattern-wise <span className="text-gradient">DSA Sheet</span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
//           >
//             Master Data Structures & Algorithms using a structured,
//             interview-focused pattern approach.
//           </motion.p>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="flex justify-center"
//           >
//             <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
//               <Code2 className="h-5 w-5 text-primary" />
//               <span className="font-mono text-sm text-muted-foreground">
//                 25 Patterns • 180 Problems
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden px-6 md:px-12 lg:px-20">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/3 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Crack DSA Interviews Faster
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl leading-tight">
              Pattern-wise <span className="text-gradient">DSA Sheet</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              Stop solving blindly. Master DSA through structured patterns and
              become <span className="text-primary font-semibold">interview-ready</span> with confidence.
            </p>

            {/* Stats */}
            <div className="flex md:justify-start justify-center">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 shadow-sm">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">
                  25 Patterns • 180 Curated Problems
                </span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-end">

            {/* Glow */}
            <div className="absolute h-[420px] w-[420px] bg-primary/10 blur-3xl rounded-full" />

            {/* Floating Tags */}
            {/* <div className="absolute top-10 left-0 bg-card border px-3 py-1 text-xs rounded-md shadow-md">
              Arrays
            </div>
            <div className="absolute bottom-10 left-10 bg-card border px-3 py-1 text-xs rounded-md shadow-md">
              Graphs
            </div>
            <div className="absolute top-1/2 -right-6 bg-card border px-3 py-1 text-xs rounded-md shadow-md">
              DP
            </div>
            <div className="absolute bottom-0 right-10 bg-card border px-3 py-1 text-xs rounded-md shadow-md">
              Trees
            </div> */}

            {/* Mentor Image */}
            <motion.img
              src="/assets/mentor.png"
              alt="Mentor"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                relative 
                w-[280px] md:w-[360px] lg:w-[440px]
                object-contain
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;