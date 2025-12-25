import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Pattern } from '@/data/dsaData';

interface PatternCardProps {
  pattern: Pattern;
  index: number;
  onClick: () => void;
}

const PatternCard = ({ pattern, index, onClick }: PatternCardProps) => {
  const questionCount = pattern.questions.length;
  const easyCount = pattern.questions.filter(q => q.difficulty === 'Easy').length;
  const mediumCount = pattern.questions.filter(q => q.difficulty === 'Medium').length;
  const hardCount = pattern.questions.filter(q => q.difficulty === 'Hard').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
      
      {/* Card Content */}
      <div className="relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 group-hover:border-primary/50">
        {/* Icon and Title */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{pattern.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {pattern.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {questionCount} Problems
              </p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {pattern.description}
        </p>

        {/* Difficulty Distribution */}
        <div className="flex items-center gap-3">
          {easyCount > 0 && (
            <span className="flex items-center gap-1.5 rounded-full bg-difficulty-easy/10 px-2.5 py-1 text-xs font-medium text-difficulty-easy">
              <span className="h-1.5 w-1.5 rounded-full bg-difficulty-easy" />
              {easyCount} Easy
            </span>
          )}
          {mediumCount > 0 && (
            <span className="flex items-center gap-1.5 rounded-full bg-difficulty-medium/10 px-2.5 py-1 text-xs font-medium text-difficulty-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-difficulty-medium" />
              {mediumCount} Med
            </span>
          )}
          {hardCount > 0 && (
            <span className="flex items-center gap-1.5 rounded-full bg-difficulty-hard/10 px-2.5 py-1 text-xs font-medium text-difficulty-hard">
              <span className="h-1.5 w-1.5 rounded-full bg-difficulty-hard" />
              {hardCount} Hard
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PatternCard;
