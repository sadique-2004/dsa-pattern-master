import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Question } from '@/data/dsaData';
import PlatformLogo from './PlatformLogo';

interface QuestionRowProps {
  question: Question;
  index: number;
}

const difficultyColors = {
  Easy: 'bg-difficulty-easy/10 text-difficulty-easy border-difficulty-easy/20',
  Medium: 'bg-difficulty-medium/10 text-difficulty-medium border-difficulty-medium/20',
  Hard: 'bg-difficulty-hard/10 text-difficulty-hard border-difficulty-hard/20',
};

const QuestionRow = ({ question, index }: QuestionRowProps) => {
  const handleClick = () => {
    window.open(question.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      onClick={handleClick}
      className="group relative cursor-pointer"
    >
      {/* Hover Glow */}
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-card">
        {/* Platform Logo */}
        <div className="flex-shrink-0">
          <PlatformLogo platform={question.platform} />
        </div>

        {/* Question Name */}
        <div className="flex-1 min-w-0">
          <h4 className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary md:text-base">
            {question.name}
          </h4>
          <p className="text-xs text-muted-foreground md:hidden">
            {question.platform}
          </p>
        </div>

        {/* Platform Badge - Hidden on Mobile */}
        <span className="hidden flex-shrink-0 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground md:block">
          {question.platform}
        </span>

        {/* Difficulty Badge */}
        <span
          className={`flex-shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold ${difficultyColors[question.difficulty]}`}
        >
          {question.difficulty}
        </span>

        {/* External Link Icon */}
        <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default QuestionRow;
