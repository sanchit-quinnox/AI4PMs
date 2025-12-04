import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import Message from './Message';

function ChatWindow({ messages, onSendMessage, onAction, isTyping }) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  // Get current planning mode status
  const activePlanningMessage = [...messages].reverse().find(m => m.planningMode && m.planningContext);
  const isInPlanningMode = activePlanningMessage && activePlanningMessage.planningContext.status !== 'complete';
  
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map(message => (
          <Message key={message.id} message={message} onAction={onAction} />
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Loader2 size={18} className="text-white animate-spin" />
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t border-gray-700 p-4 bg-gray-900">
        {isInPlanningMode && (
          <div className="mb-2 px-3 py-2 bg-cyan-900/20 border border-cyan-800 rounded-lg">
            <div className="text-xs text-cyan-400 font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              Planning Mode Active - Answer the question above or type your response
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              isInPlanningMode 
                ? "Type your answer..." 
                : "Ask about feasibility, status, or say 'let's plan...' to start planning"
            }
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors flex items-center gap-2"
          >
            <Send size={18} />
            Send
          </button>
        </form>
        
        <div className="mt-2 flex flex-wrap gap-2">
          <SuggestionChip onClick={() => setInput("What's blocking the SSO work?")}>
            What's blocking SSO?
          </SuggestionChip>
          <SuggestionChip onClick={() => setInput("Let's plan adding Apple Pay support")}>
            Plan: Apple Pay
          </SuggestionChip>
          <SuggestionChip onClick={() => setInput("How are we tracking against Q1 OKRs?")}>
            Q1 OKR status
          </SuggestionChip>
        </div>
      </div>
    </div>
  );
}

function SuggestionChip({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1 text-xs text-gray-400 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full transition-colors"
    >
      {children}
    </button>
  );
}

export default ChatWindow;
