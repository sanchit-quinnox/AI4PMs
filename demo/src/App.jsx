import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, RefreshCw, Network } from 'lucide-react';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import { project } from './data/mockData';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-950">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Network size={18} className="text-white" />
              </div>
              Nexus
            </h1>
            <p className="text-sm text-gray-400 mt-1">Connect Strategy to Execution</p>
          </div>
          
          <div className="p-4 border-b border-gray-800">
            <div className="text-xs font-semibold text-gray-500 mb-2">CURRENT PROJECT</div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="font-medium text-white">{project.name}</div>
              <div className="text-xs text-gray-400 mt-1">{project.description}</div>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <LayoutDashboard size={20} />
                <span className="font-medium">Dashboard</span>
              </NavLink>
              
              <NavLink
                to="/chat"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <MessageSquare size={20} />
                <span className="font-medium">Chat</span>
              </NavLink>
            </div>
            
            <div className="mt-8">
              <div className="text-xs font-semibold text-gray-500 mb-2">CONNECTED SOURCES</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Jira (PayFlow board)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>GitHub (3 repos)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>OKRs (Q4 2024)</span>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors">
              <RefreshCw size={14} />
              <span>Last sync: {Math.round((Date.now() - project.lastSync) / 60000)}m ago</span>
            </button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
