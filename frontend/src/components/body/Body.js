import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register';
import EmailActivation from './auth/EmailActivation';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Profile from './profile/Profile';
import Main from './auth/MainScreen';
import UserManage from '../app components/UserManage';
import HostelManage from '../app components/HostelManage';
import Feedback from '../app components/Feedback'
import HostelListing from '../app components/HostelListing';
import Hostelmain from './auth/Hostelmain';
import Ownerfeedback from '../app components/Ownerfeedback';
import Chatbot from '../app components/ChatbotScreen';
import ChatBotRehaish from '../app components/chatbot';
import AdminSideBar from '../app components/AdminSideBar';

function Body({ setIsLoggedIn }) {
    const role = 1
    return (
        <section>
            <Routes>
                <Route  path="/main" element={<Main />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/activate/:activation_token" element={<EmailActivation />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/user/reset/:token" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/usermanage" element={<UserManage />} />
                <Route path="/hostelmanage" element={<HostelManage />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/chatbot" element={<Chatbot/>} />
                <Route path="/bot" element={<ChatBotRehaish/>} />
                <Route path="/list" element={<HostelListing />} />
                <Route path="/hostel" element={< Hostelmain/>} />
                <Route path="/ofeedback" element={<Ownerfeedback/>} />
                <Route path="/admin" element={<AdminSideBar/>} />
            </Routes>
        </section>
    )
}

export default Body
