import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, X } from 'lucide-react';
import { Pattern } from '@/data/dsaData';
import QuestionRow from './QuestionRow';

interface QuestionListProps {
  pattern: Pattern;
  onBack: () => void;
}

const QuestionList = ({ pattern, onBack }: QuestionListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = pattern.questions.filter((question) =>
    question.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const easyCount = pattern.questions.filter(q => q.difficulty === 'Easy').length;
  const mediumCount = pattern.questions.filter(q => q.difficulty === 'Medium').length;
  const hardCount = pattern.questions.filter(q => q.difficulty === 'Hard').length;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-8 pt-24"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Patterns
          </button>

          {/* Pattern Info */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {/* <span className="text-4xl">{pattern.icon}</span> */}
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {pattern.name}
                </h2>
                <p className="text-muted-foreground">{pattern.description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-difficulty-easy/10 px-3 py-1.5 text-sm font-medium text-difficulty-easy">
                {easyCount} Easy
              </span>
              <span className="rounded-full bg-difficulty-medium/10 px-3 py-1.5 text-sm font-medium text-difficulty-medium">
                {mediumCount} Medium
              </span>
              <span className="rounded-full bg-difficulty-hard/10 px-3 py-1.5 text-sm font-medium text-difficulty-hard">
                {hardCount} Hard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-3 pl-12 pr-12 text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Question List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question, index) => (
                <QuestionRow
                  key={`${question.name}-${question.platform}`}
                  question={question}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center"
              >
                <p className="text-muted-foreground">
                  No questions found matching "{searchQuery}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Question Count */}
        {filteredQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-sm text-muted-foreground"
          >
            Showing {filteredQuestions.length} of {pattern.questions.length} questions
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default QuestionList;
