import React, { useMemo } from 'react';
import { TriviaData } from '../types';
import { BackArrowIcon } from './icons/Icons';

interface ResponsePageProps {
  triviaData: TriviaData;
  onRephrase: () => void;
  onCancel: () => void;
  onBack: () => void;
}

const ResponsePage: React.FC<ResponsePageProps> = ({ triviaData, onRephrase, onCancel, onBack }) => {
  const { question, aiResponse } = triviaData;
  
  const responseInfo = useMemo(() => {
    const answer = aiResponse.answer;
    const words = answer.split(/\s+/).filter(Boolean);
    return {
      wordCount: words.length,
      charCountWithSpaces: answer.length,
      charCountWithoutSpaces: answer.replace(/\s/g, '').length,
    };
  }, [aiResponse.answer]);

  const emojis = ['👍', '👎', '😄', '😡'];
  const [selectedEmoji, setSelectedEmoji] = React.useState<string | null>(null);

  return (
    <div>
      <header className="bg-[#2E425C] text-white flex items-center p-4 sticky top-0 z-10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <BackArrowIcon />
        </button>
        <h1 className="text-lg font-semibold text-center flex-grow truncate px-2">
            {question}
        </h1>
        <div className="w-10"></div> {/* Spacer */}
      </header>

      <div className="p-4 space-y-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{aiResponse.answer || "AI Response Appears Here"}</p>
        </div>
        
        <div className="px-2 py-2 space-y-1">
          <p className="text-sm text-gray-600">Word Count: {responseInfo.wordCount} words</p>
          <p className="text-sm text-gray-600">Character Count: {responseInfo.charCountWithSpaces} characters</p>
          <p className="text-sm text-gray-600">Characters Excluding Spaces: {responseInfo.charCountWithoutSpaces} characters</p>
          <p className="text-sm text-gray-600">Tone: {aiResponse.tone}</p>
        </div>

        <div className="text-center py-2">
            <div className="flex justify-around items-center gap-2 max-w-sm mx-auto">
                {emojis.map((emoji) => (
                    <button 
                        key={emoji} 
                        onClick={() => setSelectedEmoji(emoji)}
                        className={`w-14 h-14 flex items-center justify-center text-3xl border rounded-lg transition-all duration-200 ${selectedEmoji === emoji ? 'border-orange-400 bg-orange-100 scale-110' : 'border-gray-300 bg-white'}`}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
        
        <div className="space-y-3 pt-2 pb-8">
            <button onClick={onRephrase} className="w-full py-3 rounded-lg text-white font-semibold bg-[#2E425C] hover:bg-[#1e2a3a] transition shadow-lg">Rephrase</button>
            <button onClick={() => console.log("Saved to draft")} className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition shadow">Save to Draft</button>
            <button onClick={() => console.log("Submitted")} className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition shadow">Submit</button>
            <button onClick={onCancel} className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition shadow">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;