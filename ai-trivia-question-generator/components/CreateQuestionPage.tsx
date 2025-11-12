import React, { useState, useEffect } from 'react';
import { Category, Difficulty, TriviaData } from '../types';
import { BackArrowIcon } from './icons/Icons';

interface CreateQuestionPageProps {
  onSubmit: (question: string, category: Category, difficulty: Difficulty) => void;
  initialData: TriviaData | null;
}

const presetQuestions = [
    "What is the capital of France?",
    "Who wrote 'Romeo and Juliet'?",
    "What is the chemical symbol for water?",
];

const CreateQuestionPage: React.FC<CreateQuestionPageProps> = ({ onSubmit, initialData }) => {
  const [question, setQuestion] = useState(initialData?.question || '');
  const [category, setCategory] = useState<Category>(initialData?.category || Category.History);
  const [difficulty, setDifficulty] = useState<Difficulty>(initialData?.difficulty || Difficulty.Medium);

  useEffect(() => {
    if(initialData) {
        setQuestion(initialData.question);
        setCategory(initialData.category);
        setDifficulty(initialData.difficulty);
    }
  }, [initialData]);

  const handleClear = () => {
    setQuestion('');
    setCategory(Category.History);
    setDifficulty(Difficulty.Medium);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question, category, difficulty);
    }
  };

  const difficultyColors = {
    [Difficulty.Easy]: 'bg-green-500',
    [Difficulty.Medium]: 'bg-yellow-500',
    [Difficulty.Hard]: 'bg-red-500',
  };

  return (
    <div>
      <header className="bg-[#2E425C] text-white flex items-center p-4 sticky top-0 z-10">
        <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <BackArrowIcon />
        </button>
        <h1 className="text-lg font-semibold text-center flex-grow">Create Trivia Question</h1>
        <div className="w-10"></div> {/* Spacer */}
      </header>
      
      <form onSubmit={handleSubmit}>
        <div className="bg-[#FDF6EC] p-4">
          <label htmlFor="question" className="block text-sm font-semibold mb-2 text-gray-800">Type your trivia question here...</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What is the capital of France?"
            className="w-full h-28 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            required
          />
          <p className="text-xs text-gray-600 mt-2">
            Tip: Keep questions short and clear. Example: Who wrote Hamlet?
          </p>
        </div>
        
        <div className="bg-[#4A5568] p-4">
            <h3 className="text-sm font-semibold mb-3 text-gray-200">Select a preset question</h3>
            <div className="grid grid-cols-3 gap-2">
              {presetQuestions.map((q, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setQuestion(q)}
                  className="text-center p-2 bg-[#718096] text-white rounded-md hover:bg-[#A0AEC0] transition-colors text-xs"
                >
                  Preset Question {i + 1}
                </button>
              ))}
            </div>
        </div>
        
        <div className="bg-orange-500 p-4">
          <h3 className="text-white font-bold text-center mb-3">Question Topic</h3>
          <div className="grid grid-cols-3 gap-2">
            {Object.values(Category).map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                className={`w-full p-2 rounded-md text-sm transition-all ${
                  category === cat ? 'bg-white text-orange-500 font-bold' : 'bg-orange-300 text-white hover:bg-orange-100 hover:text-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-[#2E425C] p-4">
          <h3 className="text-white font-bold text-center mb-3">Difficulty</h3>
          <p className="text-gray-300 text-xs text-center mb-4">Select Difficulty Level</p>
          <div className="flex justify-around items-center">
            {Object.values(Difficulty).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setDifficulty(level)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-4 ${difficulty === level ? 'border-white' : 'border-transparent'}`}
              >
                <div className={`w-8 h-8 rounded-full ${difficultyColors[level]}`}></div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-[#FDF6EC] p-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-800">Preview</h3>
          <div className="p-4 border border-gray-300 rounded-lg min-h-[80px] bg-white text-gray-500">
             <p className="text-gray-800">{question || "Preview of how your question will appear to classmates."}</p>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <button type="button" onClick={() => console.log("Saved as draft")} className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition shadow">Save as Draft</button>
          <button type="button" onClick={handleClear} className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition shadow">Clear</button>
          <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold bg-[#2E425C] hover:bg-[#1e2a3a] transition shadow-lg">Submit to AI</button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuestionPage;