import { motion } from 'framer-motion';
import PatternCard from './PatternCard';
import { dsaPatterns, Pattern } from '@/data/dsaData';

interface PatternListProps {
  onSelectPattern: (pattern: Pattern) => void;
}

const PatternList = ({ onSelectPattern }: PatternListProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Select a Pattern
          </h2>
          <p className="mt-2 text-muted-foreground">
            Choose a pattern to view related problems
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dsaPatterns.map((pattern, index) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              index={index}
              onClick={() => onSelectPattern(pattern)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatternList;
