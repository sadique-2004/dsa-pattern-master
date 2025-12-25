// import Marquee from "react-fast-marquee";
// import { Sparkles, CheckCircle2, Bookmark, Target } from "lucide-react";

// const HeroScroller = () => {
//   return (
//     <div className="relative mt-2 overflow-hidden border-y border-primary/20 bg-primary/5 backdrop-blur">
      
//       {/* subtle glow */}
//       <div className="absolute inset-0 bg-grid opacity-20" />

//       <Marquee speed={70} gradient={false} pauseOnHover>
        
//         <ScrollerItem
//           icon={<Sparkles className="h-4 w-4 text-primary" />}
//           text="Pattern-wise DSA for Interview Preparation"
//         />

//         <Separator />

//         <ScrollerItem
//           icon={<Target className="h-4 w-4 text-primary" />}
//           text="Focus on Concepts • Not Random Problem Solving"
//         />

//         <Separator />

//         <ScrollerItem
//           icon={<CheckCircle2 className="h-4 w-4 text-primary" />}
//           text="Track Progress with Checkboxes (Coming Soon)"
//         />

//         <Separator />

//         <ScrollerItem
//           icon={<Bookmark className="h-4 w-4 text-primary" />}
//           text="Bookmark Important Problems for Revision (Coming Soon)"
//         />

//         <Separator />

//         <ScrollerItem
//           icon={<Sparkles className="h-4 w-4 text-primary" />}
//           text="Inspired by Industry-Proven DSA Teaching Patterns"
//         />

//       </Marquee>
//     </div>
//   );
// };

// const ScrollerItem = ({ icon, text }) => (
//   <div className="mx-6 flex items-center gap-2">
//     {icon}
//     <p className="whitespace-nowrap font-mono text-sm text-muted-foreground md:text-base">
//       {text}
//     </p>
//   </div>
// );

// const Separator = () => (
//   <span className="text-primary/40">✦</span>
// );

// export default HeroScroller;
import Marquee from "react-fast-marquee";
import {
  Sparkles,
  CheckCircle2,
  Bookmark,
  Target,
  Code2,
} from "lucide-react";

const HeroScroller = () => {
  return (
    <div className="relative mt-3 overflow-hidden border-y border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">

      {/* Animated glow */}
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-primary/10 blur-2xl" />

      <Marquee speed={85} gradient={false} pauseOnHover>

        <ScrollerItem
          icon={<Code2 className="h-4 w-4 text-primary" />}
          text="Interview-Ready Pattern-wise DSA Sheet"
        />

        <Separator />

        <ScrollerItem
          icon={<Target className="h-4 w-4 text-primary" />}
          text="Learn WHY a Pattern Works — Not Just the Solution"
        />

        <Separator />

        <ScrollerItem
          icon={<CheckCircle2 className="h-4 w-4 text-primary" />}
          text="Checkbox-based Progress Tracking (Coming Soon)"
        />

        <Separator />

        <ScrollerItem
          icon={<Bookmark className="h-4 w-4 text-primary" />}
          text="Bookmark High-Frequency Interview Problems"
        />

        <Separator />

        <ScrollerItem
          icon={<Sparkles className="h-4 w-4 text-primary" />}
          text="Designed for Consistency • Revision • Confidence"
        />

        <Separator />

        <ScrollerItem
          icon={<Code2 className="h-4 w-4 text-primary" />}
          text="25+ Core Patterns • Curated Problem Sets"
        />

      </Marquee>
    </div>
  );
};

const ScrollerItem = ({ icon, text }) => (
  <div className="mx-8 flex items-center gap-3">
    <span className="animate-[spin_8s_linear_infinite]">
      {icon}
    </span>
    <p className="whitespace-nowrap font-mono text-sm tracking-wide text-foreground md:text-base">
      {text}
    </p>
  </div>
);

const Separator = () => (
  <span className="text-lg text-primary/50">✦✦✦</span>
);

export default HeroScroller;
