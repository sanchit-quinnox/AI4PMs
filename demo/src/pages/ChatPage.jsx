import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ChatWindow from '../components/Chat/ChatWindow';
import { chatConversation, demoResponses } from '../data/mockData';

function ChatPage() {
  const [messages, setMessages] = useState(chatConversation);
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = (content) => {
    // Add user message
    const newMessage = {
      id: messages.length + 1,
      type: 'pm',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    
    // Simulate AI response based on content
    setTimeout(() => {
      const lowerContent = content.toLowerCase();
      let aiMessage;
      
      if (lowerContent.includes('split') || lowerContent.includes('smaller')) {
        aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          ...demoResponses['split-story'],
          timestamp: new Date(),
          actions: ['export-jira', 'refine']
        };
      } else if (lowerContent.includes('plan') || lowerContent.includes('break')) {
        aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          content: "Great, let's plan that out! First, a quick question:",
          timestamp: new Date(),
          planningMode: true,
          planningContext: {
            feature: extractFeature(content),
            status: 'gathering-requirements'
          },
          question: {
            text: "What's the primary goal for this feature? Is it to increase revenue, improve user experience, or something else?",
            context: "Understanding the goal helps me prioritize the stories correctly.",
            options: [
              { id: "a", label: "Increase revenue and conversions", value: "revenue", recommended: true },
              { id: "b", label: "Improve user experience and satisfaction", value: "ux" },
              { id: "c", label: "Reduce operational costs", value: "cost" },
              { id: "d", label: "Meet compliance or regulatory requirements", value: "compliance" }
            ]
          }
        };
      } else if (lowerContent.includes('block') || lowerContent.includes('stuck')) {
        aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          content: "Looking at the current blockers in Jira...",
          timestamp: new Date(),
          analysis: {
            title: "Current Blockers",
            sections: [
              {
                title: "BLOCKED TICKETS",
                items: [
                  "PAY-106: Enhanced fraud detection - Waiting on vendor API access (5 days)",
                  "SEC-204: Access control reviews - Waiting for HR integration (4 days)",
                  "AUTH-304: JIT user provisioning - Dependency on user service refactor (3 days)"
                ]
              },
              {
                title: "IMPACT",
                items: [
                  "SSO work is blocked - affecting KR 2.2 (Enterprise SSO)",
                  "SOC 2 certification timeline at risk - affecting KR 2.1"
                ]
              }
            ],
            recommendation: "Recommend syncing with the user-service team (Sarah) to unblock AUTH-304. This is the critical path for SSO."
          }
        };
      } else if (lowerContent.includes('okr') || lowerContent.includes('progress') || lowerContent.includes('q1') || lowerContent.includes('q4')) {
        aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          content: "Here's your Q1 OKR status summary:",
          timestamp: new Date(),
          analysis: {
            title: "Q1 2025 OKR Progress",
            sections: [
              {
                title: "ON TRACK (3 KRs)",
                items: [
                  "Payment success rate: 75% complete (96.25% current vs 97% target)",
                  "Processing time: 60% complete (1.9s current vs 1.5s target)",
                  "Onboarding speed: 85% complete (1.3 days vs 1 day target)"
                ]
              },
              {
                title: "AT RISK (2 KRs)",
                items: [
                  "SOC 2 certification: 45% complete - 2 tickets blocked",
                  "Enterprise SSO: 30% complete - dependency blocker"
                ]
              },
              {
                title: "NEEDS ATTENTION (1 KR)",
                items: [
                  "Merchant activation rate: Only 20% complete, 3 tickets not started"
                ]
              }
            ],
            recommendation: "Focus on unblocking SOC 2 and SSO work. Activation rate needs a kickoff meeting to staff the remaining tickets."
          }
        };
      } else {
        aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          content: "I understand. Based on the codebase and current context, I can help you explore this further. Would you like me to:\n\n• Analyze the feasibility and effort\n• Check for related existing work in Jira\n• Start planning this as a new epic\n\nJust let me know how you'd like to proceed!",
          timestamp: new Date()
        };
      }
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleAction = (actionId, messageId, option) => {
    // Handle option selection from MCQ
    if (actionId === 'select-option' && option) {
      // Add user's selection as a message
      const userMessage = {
        id: messages.length + 1,
        type: 'pm',
        content: `${option.id.toUpperCase()}: ${option.label}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate AI acknowledging and moving to next question or result
      setIsTyping(true);
      setTimeout(() => {
        const aiMessage = {
          id: messages.length + 2,
          type: 'ai',
          content: `Got it - ${option.label.toLowerCase()}. That keeps scope tight.`,
          timestamp: new Date(),
          planningMode: true
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000);
      return;
    }
    
    // Handle other actions
    setIsTyping(true);
    
    setTimeout(() => {
      const responseTemplate = demoResponses[actionId];
      
      if (responseTemplate) {
        const aiMessage = {
          id: messages.length + 1,
          type: 'ai',
          ...responseTemplate,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        const aiMessage = {
          id: messages.length + 1,
          type: 'ai',
          content: `Action "${actionId}" triggered. In the real implementation, this would integrate with Jira/external systems.`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      }
      
      setIsTyping(false);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Ask + Plan</h1>
            <p className="text-xs text-gray-400">
              Chat for feasibility checks, status updates, or interactive planning
            </p>
          </div>
        </div>
      </div>
      
      {/* Chat Window */}
      <div className="flex-1 overflow-hidden">
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onAction={handleAction}
          isTyping={isTyping}
        />
      </div>
    </div>
  );
}

// Helper to extract feature name from planning request
function extractFeature(content) {
  const planningPhrases = ['plan', 'break down', 'create epic', 'add'];
  let feature = content;
  
  planningPhrases.forEach(phrase => {
    const idx = content.toLowerCase().indexOf(phrase);
    if (idx !== -1) {
      feature = content.slice(idx + phrase.length).trim();
    }
  });
  
  // Clean up common words
  feature = feature.replace(/^(out |for |adding |the )/i, '');
  
  // Capitalize first letter
  return feature.charAt(0).toUpperCase() + feature.slice(1);
}

export default ChatPage;
