import { Routes, Route } from "react-router-dom";

///////////////// Elena Wireframes
import HomePage from "./components/HomePage/HomePage.jsx";
import Login from "./components/Login/Login.jsx";
import CreateStudentAccount from "./components/CreateAccount/CreateStudentAccount.jsx";
import CreateTeacherAccount from "./components/CreateAccount/CreateTeacherAccount.jsx";
import About from "./components/About/About.jsx";
///////////// Adya WireFrames //////////
import CreateTriviaQuestion from "./components/CreateTriviaQuestion/CreateTriviaQuestion.jsx";
import AIResponsePage from "./components/AIResponsePage/AIResponsePage.jsx";
import TeacherHomePage from "./components/TeacherHomePage/TeacherHomePage.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-student" element={<CreateStudentAccount />} />
      <Route path="/create-teacher" element={<CreateTeacherAccount />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/handleSignIn" element={<TeacherHomePage />} />
      {/* <Route path="/teacher-home" element={<TeacherHomePage />} /> */}

      <Route path="/goToCTQ" element = { <CreateTriviaQuestion/>}/>
      <Route path="/AIResponsePage" element = { <AIResponsePage/>}/>
      

      <Route path="/ai-response" element={<AIResponsePage />} />

      
      {/* 
        Uncomment these when you’re ready to add them:
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-teacher" element={<CreateTeacherAccount />} />
      */}
    </Routes>
  );
}

export default App;