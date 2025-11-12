import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
// import SignIn from "./components/SignIn/SignIn.jsx";
import CreateStudentAccount from "./components/CreateAccount/CreateStudentAccount.jsx";
import CreateTriviaQuestion from "./components/CreateTriviaQuestion/CreateTriviaQuestion.jsx";
import CreateTeacherAccount from "./components/CreateAccount/CreateTeacherAccount.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-student" element={<CreateStudentAccount />} />
      <Route path="/create-teacher" element={<CreateTeacherAccount />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<CreateTriviaQuestion />} />
      
      {/* 
        Uncomment these when you’re ready to add them:
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-teacher" element={<CreateTeacherAccount />} />
      */}
    </Routes>
  );
}

export default App;