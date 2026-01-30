'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">AI Ops Co</span>
          <a 
            href="#audit" 
            className="bg-[#FF6B4A] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#e55a3a] transition-colors"
          >
            Book AI Audit →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your AI should book meetings
            <span className="text-[#FF6B4A]"> while you sleep.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            You're using ChatGPT. Maybe Claude. But it's stuck in a browser tab while your CRM fills with dead leads and your inbox drowns you.
          </p>
          <p className="text-xl text-gray-900 font-medium mb-10">
            We connect your AI to your actual business — so it works for you 24/7.
          </p>
          <a 
            href="#audit"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Your AI Audit — $497
          </a>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#FF6B4A] font-medium mb-2">REAL RESULTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What we did last night
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#FF6B4A]">400+</p>
                <p className="text-gray-600 mt-2">Contacts enriched</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-[#FF6B4A]">8 hrs</p>
                <p className="text-gray-600 mt-2">Of manual work saved</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-[#FF6B4A]">$0</p>
                <p className="text-gray-600 mt-2">Human effort overnight</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                "Our AI pulled LinkedIn data, company info, and personalized talking points for 400+ CRM contacts — <strong>while the founder slept</strong>. He woke up to a pipeline he could actually work, with context on every lead."
              </p>
              <p className="text-gray-500 mt-4 text-sm">
                — Actual client result, January 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You know AI could help. But...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">😤</div>
              <h3 className="font-bold text-gray-900 mb-2">It's stuck in a tab</h3>
              <p className="text-gray-600">
                You copy-paste between ChatGPT and your CRM like it's 2019. There has to be a better way.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">It forgets everything</h3>
              <p className="text-gray-600">
                Every conversation starts from zero. Your AI has no memory of your business, your leads, or your context.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-bold text-gray-900 mb-2">You're still doing the work</h3>
              <p className="text-gray-600">
                AI was supposed to save time. Instead, you spend hours prompting, copying, and formatting outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B4A] font-medium mb-2">WHAT WE BUILD</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              AI that actually does the work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🔄 Lead Enrichment</h3>
              <p className="text-gray-300">
                Your AI pulls LinkedIn data, company info, and talking points for every lead in your CRM — automatically, overnight.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">✉️ Personalized Outreach</h3>
              <p className="text-gray-300">
                Draft follow-up emails that reference real context. Not generic templates — actual personalization at scale.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">📊 Meeting Notes → CRM</h3>
              <p className="text-gray-300">
                Record a call, and your AI updates the CRM, drafts follow-ups, and schedules next steps. Zero data entry.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🤖 24/7 Lead Qualification</h3>
              <p className="text-gray-300">
                Inbound leads get qualified, scored, and routed — with personalized responses sent automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-gray-600 text-lg">No fluff. No 6-month projects. Just results.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B4A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">AI Audit <span className="text-gray-400 font-normal text-base">— 45 min call</span></h3>
                <p className="text-gray-600">
                  We map your current stack, identify your biggest time sinks, and find the 3-5 automations that will save you the most hours. You leave with a concrete implementation roadmap.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">We Build <span className="text-gray-400 font-normal text-base">— 1-2 weeks</span></h3>
                <p className="text-gray-600">
                  Our team connects your AI to your tools. CRM enrichment. Email drafting. Slack notifications. Whatever moves the needle for your business.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">You Scale <span className="text-gray-400 font-normal text-base">— Forever</span></h3>
                <p className="text-gray-600">
                  Your AI works 24/7. Leads get enriched automatically. Follow-ups write themselves. You focus on closing deals, not data entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="py-20 bg-[#FF6B4A] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop using AI like it's 2023.
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Book an AI Audit. We'll find the automations that will save you 10+ hours a week — or we'll tell you we can't help.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-3xl font-bold text-gray-900 mb-2">$497</p>
            <p className="text-gray-600 mb-6">45-minute strategy call + implementation roadmap</p>
            
            <ul className="text-left text-gray-700 space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B4A]">✓</span>
                Full stack analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B4A]">✓</span>
                Top 5 automation opportunities
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B4A]">✓</span>
                ROI estimates for each
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B4A]">✓</span>
                Implementation roadmap
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B4A]">✓</span>
                100% credited to your first project
              </li>
            </ul>
            
            <a 
              href="https://calendly.com" 
              target="_blank"
              className="block w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Book Your AI Audit →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">What tools do you work with?</h3>
              <p className="text-gray-600">
                Most CRMs (HubSpot, Salesforce, Pipedrive, Notion), email (Gmail, Outlook), Slack, and 100+ others via APIs and Zapier. If it has an API, we can probably connect it.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">How is this different from just using ChatGPT?</h3>
              <p className="text-gray-600">
                ChatGPT is a chat window. We build systems that run automatically — enriching leads while you sleep, sending follow-ups when you're in meetings, updating your CRM without you lifting a finger.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">What if the audit doesn't find anything useful?</h3>
              <p className="text-gray-600">
                If we don't identify at least 3 automations worth building, we'll refund the audit fee. We've never had to do this.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">How much do the actual automations cost?</h3>
              <p className="text-gray-600">
                Implementation starts at $3,500 for a focused 2-week sprint. Complex systems with multiple integrations run $8,500+. The audit fee is credited to your first project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-900 font-bold text-lg mb-2">AI Ops Co</p>
          <p className="text-gray-500">
            Making AI actually work for your business.
          </p>
        </div>
      </footer>
    </main>
  );
}
