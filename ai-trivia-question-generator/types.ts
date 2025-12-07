export enum Category {
  History = "History",
  Science = "Science",
  Literature = "Literature",
  Math = "Math",
  PopCulture = "Pop Culture",
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export interface TriviaData {
  question: string;
  category: Category;
  difficulty: Difficulty;
  aiResponse: AIResponse;
}

export interface AIResponse {
  answer: string;
  tone: string;
}