import React, { useState, useCallback } from 'react';
import CreateQuestionPage from './components/CreateQuestionPage';
import ResponsePage from './components/ResponsePage';
import { getAIAnswer, rephraseAIAnswer } from './services/geminiService';
import { TriviaData, Category, Difficulty, AIResponse } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';
import { HomeIcon } from './components/icons/Icons';

type Page = 'create' | 'response';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('create');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [triviaData, setTriviaData] = useState<TriviaData | null>(null);

  const handleSubmitToAI = useCallback(async (question: string, category: Category, difficulty: Difficulty) => {
    setIsLoading(true);
    const aiResponse = await getAIAnswer(question);
    setTriviaData({
      question,
      category,
      difficulty,
      aiResponse,
    });
    setIsLoading(false);
    setCurrentPage('response');
  }, []);

  const handleRephrase = useCallback(async () => {
    if (!triviaData) return;
    setIsLoading(true);
    const newAIResponse = await rephraseAIAnswer(triviaData.question, triviaData.aiResponse.answer);
    setTriviaData({
      ...triviaData,
      aiResponse: newAIResponse,
    });
    setIsLoading(false);
  }, [triviaData]);
  
  const handleCancel = useCallback(() => {
    setCurrentPage('create');
    // Keep triviaData so user can go back to it if they change their mind
  }, []);
  
  const handleBackToCreate = useCallback(() => {
    setCurrentPage('create');
  }, []);


  return (
    <div className="flex justify-center items-center min-h-screen p-0 sm:p-4">
      <div className="w-full max-w-[420px] h-screen sm:h-[850px] bg-white text-black font-sans shadow-2xl sm:rounded-[40px] overflow-hidden flex flex-col relative border-black sm:border-8">
        
        {/* Mock Phone Status Bar */}
        <div className="bg-[#2E425C] text-white px-4 py-1 flex justify-between items-center text-xs shrink-0">
          <span>12:30</span>
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
          </div>
        </div>

        {/* Screen Content */}
        <div className={`flex-grow overflow-y-auto ${currentPage === 'create' ? 'bg-[#2d3748]' : 'bg-[#FDF6EC]'}`}>
          {isLoading && <LoadingSpinner />}
          <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-20' : 'opacity-100'}`}>
            {currentPage === 'create' ? (
              <CreateQuestionPage onSubmit={handleSubmitToAI} initialData={triviaData} />
            ) : triviaData ? (
              <ResponsePage 
                triviaData={triviaData}
                onRephrase={handleRephrase}
                onCancel={handleCancel}
                onBack={handleBackToCreate}
              />
            ) : null}
          </div>
        </div>

        {/* Footer Nav */}
        <footer className="bg-white border-t border-gray-200 px-4 py-2 flex justify-center items-center shrink-0">
          <button className="flex flex-col items-center text-gray-700">
            <HomeIcon />
            <span className="text-xs mt-1">Dashboard</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;