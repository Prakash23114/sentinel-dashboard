import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MLMonitoring from './components/MLMonitoring';
import LLMObservability from './components/LLMObservability';
import Profile from './components/Profile';
import Governance from './components/Governance'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Settings from './components/Settings'; 

function App() {
  const [activePage, setActivePage] = useState('login');

  const user = {
    name: "Sarah Jenkins",
    role: "LLM Platform Engineer",
    email: "s.jenkins@sentinel-bank.com",
    dept: "AI Safety & Governance"
  };

  const isAuthPage = ['login', 'signup', 'forgot-password'].includes(activePage);

  const renderContent = () => {
    switch (activePage) {
      case 'login': return <Login onLogin={() => setActivePage('ml-monitoring')} onNavigate={setActivePage} />;
      case 'signup': return <SignUp onNavigate={setActivePage} />;
      case 'forgot-password': return <ForgotPassword onNavigate={setActivePage} />;
      case 'ml-monitoring': return <MLMonitoring />;
      case 'llm-observability': return <LLMObservability />;
      case 'governance': return <Governance />;
      case 'profile': return <Profile user={user} />;
      case 'settings': return <Settings />;
      default: return <MLMonitoring />;
    }
  };

  if (isAuthPage) {
    return <div className="min-h-screen bg-slate-50">{renderContent()}</div>;
  }

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onSignOut={() => setActivePage('login')} // Ab ye Sidebar mein kaam karega
      />
      <div className="flex-1 ml-64">
        <Navbar
          title={activePage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          user={user}
          onProfileClick={() => setActivePage('profile')}
        />
        <main className="pb-10">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;