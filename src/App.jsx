import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import BaseLayout from "./layout/BaseLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import QuestionPage4 from "./pages/Questions/Question4/Question4";
import Otp from "./pages/Otp/Otp";
import HeaderWithLogo from "./components/HeaderWithLogo/HeaderWithLogo";
import QuestionPage1 from "./pages/Questions/Question1/Question1";
import QuestionPage2 from "./pages/Questions/Question2/Question2";
import QuestionPage3 from "./pages/Questions/Question3/Question3";
import LearningModules from "./modules/admin/pages/Learning modules/Learningmodules";
import Userdetails from "./modules/admin/pages/User details/Userdetails";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import BacktoSignIn from "./pages/BacktoSignIn/BacktoSignIn";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ResetSuccessful from "./pages/passwordresetsuccessful/ResetSuccessful";

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import OtpEmail from "./pages/OtpEmail/OtpEmail";
import UploadModule from "./modules/admin/pages/UploadModule/UploadModule";
import AddNewModule from "./modules/admin/pages/AddNewModule/AddNewModule";

import SkillAssessment from "./modules/admin/pages/Skill Assesment/SkillAssesment";

import Flashcards from "./modules/admin/pages/Flashcards/Flashcards";


import Challenges from "./modules/admin/pages/Challenges/Challenges";
import Analytics from "./modules/admin/pages/ViewAnalytics/Analytics";
import Faq from "./modules/admin/pages/FAQ/Faq";
import Notification from "./modules/admin/pages/Notification/Notification";
import SupportQuery from "./modules/admin/pages/SupportQuery/SupportQuery";
import SupportQueryUserDetails from "./modules/admin/components/SupportQueryComponents/SupportQueryUserDetails/SupportQueryUserDetails";
import CompaniesPlan from "./pages/Questions/CompaniesPlan/CompaniesPlan";
import Question6 from "./pages/Questions/Question6/Question6";
import Question7 from "./pages/Questions/Question7/Question7";
import FinalQuestion from "./pages/Questions/FinalQuestion/FinalQuestion";
import AccountCreated from "./pages/AcountCreated/AccountCreated";
import ValidationPage from "./pages/validationPage/validationPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/loginPhone" element={<Login />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/question1" element={<QuestionPage1 />} />
          <Route path="/question2" element={<QuestionPage2 />} />
          <Route path="/question3" element={<QuestionPage3 />} />
          <Route path="/question4" element={<QuestionPage4 />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/question5" element={<CompaniesPlan/>} />
          <Route path="/question6" element={<Question6 />} />
          <Route path="/question7" element={<Question7/>} />
          <Route path="/question8" element={<FinalQuestion/>} />
          <Route path="/profileComplete" element={<AccountCreated/>} />
          <Route path="/otpEmail" element={<OtpEmail />} />
          <Route path="/validation" element={<ValidationPage/>}/>


          <Route path="/learning" element={<LearningModules />} />

          {/* <Route path="/Diagnosing-and-Investigating-Metrics" element={<Userdetails />} /> */}

          <Route path="/Diagnosing-and-Investigating-Metrics" element={<Userdetails />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/backtosignIn" element={<BacktoSignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetsuccessful" element={<ResetSuccessful />} />


          {/* <Route path="/skill-assessment" element={<SkillAssessment />} /> */}
          {/* <Route path="/try-it-yourself" element={<TryItYourself />} /> */}
          {/* <Route path="/question-bank" element={<QuestionBank />} /> */}
          {/* <Route path="/challenges" element={<Challenges />} /> */}



          <Route path="/admin" element={<BaseLayout />} >
            <Route path="/admin/learning" element={<LearningModules />} />
            <Route path="/admin/Diagnosing-and-Investigating-Metrics" element={<Userdetails />} />
            <Route path="/admin/skill-assessment" element={<SkillAssessment />} />
            <Route path="/admin/uploadmodule" element={<UploadModule />} />
            <Route path="/admin/addnewmodule" element={<AddNewModule />} />

            <Route path="/admin/Flashcards" element={<Flashcards />} />

            <Route path="/admin/challenges" element={<Challenges />} />
            <Route path="/admin/viewanalytics" element={<Analytics />} />
            <Route path="/admin/faq" element={<Faq />} />
            <Route path="/admin/notifications" element={<Notification />} />
            {/* <Route path="/admin/edit" element={<EditModal />} /> */}
            <Route path="/admin/SupportQuery" element={<SupportQuery />} />
            <Route path="/admin/SupportQuery/1234" element={<SupportQueryUserDetails />} />
          </Route>

          <Route path="/user" element={<BaseLayout />} >
           </Route>
        </Routes>

      </Router>
    </ThemeProvider>
  );


}

export default App;







