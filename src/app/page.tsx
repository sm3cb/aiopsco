import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-xl">AI Ops Co</div>
          <a 
            href="#book" 
            className="bg-[#FF6B4A] text-white px-5 py-2 font-bold hover:bg-[#ff5a36] transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
            Your AI is smart.<br />
            <span className="text-[#FF6B4A]">Make it do things.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            You're using ChatGPT. Maybe Claude. But it's stuck in a browser tab.
            We connect your AI to your CRM, email, Slack, and 100+ tools — so it actually works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#book" 
              className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors text-center"
            >
              Get Your AI Audit →
            </a>
            <a 
              href="#how" 
              className="border-2 border-black px-8 py-4 font-bold text-lg hover:bg-gray-50 transition-colors text-center"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🔄",
                title: "Copy-paste hell",
                desc: "You're manually moving data between ChatGPT and your actual tools. Every. Single. Time."
              },
              {
                emoji: "🧠",
                title: "AI amnesia",
                desc: "Your AI doesn't know your customers, your deals, or what happened yesterday."
              },
              {
                emoji: "⏰",
                title: "Still doing busywork",
                desc: "You bought the AI hype but you're still drowning in the same repetitive tasks."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border-2 border-black">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">We fix this in 3 steps</h2>
          <p className="text-xl text-gray-600 mb-12">No fluff. No 6-month projects. Just results.</p>
          
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "AI Audit",
                desc: "We map your current stack and find the 3-5 automations that will save you the most time.",
                time: "45 min call"
              },
              {
                num: "02", 
                title: "We Build",
                desc: "Our team connects your AI to your tools. CRM enrichment. Email drafting. Slack summaries. Whatever moves the needle.",
                time: "1-2 weeks"
              },
              {
                num: "03",
                title: "You Scale",
                desc: "Your AI works 24/7. Leads get enriched automatically. Follow-ups write themselves. You focus on closing.",
                time: "Forever"
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-5xl font-black text-[#FF6B4A]">{step.num}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-2xl">{step.title}</h3>
                    <span className="text-sm bg-gray-100 px-3 py-1 font-medium">{step.time}</span>
                  </div>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12">What we automate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Lead comes in → AI researches company → Enriches CRM → Drafts personalized outreach",
              "Email received → AI categorizes → Routes to right person → Drafts response",
              "Meeting ends → AI summarizes → Updates CRM → Creates follow-up tasks",
              "Support ticket → AI analyzes sentiment → Suggests response → Escalates if needed",
              "New signup → AI scores lead → Triggers right sequence → Notifies sales if hot",
              "Weekly data → AI analyzes trends → Generates report → Sends to Slack"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#FF6B4A] font-bold">→</span>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Simple pricing</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">Start small. Scale when ready.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Audit */}
            <div className="border-2 border-gray-200 p-8">
              <div className="text-sm font-bold text-gray-500 mb-2">START HERE</div>
              <div className="text-4xl font-black mb-2">$297</div>
              <div className="font-bold text-xl mb-4">AI Audit</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ 45-min strategy call</li>
                <li>✓ Full stack analysis</li>
                <li>✓ Top 5 automation opportunities</li>
                <li>✓ ROI estimates</li>
                <li>✓ Implementation roadmap</li>
              </ul>
              <a href="#book" className="block text-center border-2 border-black px-6 py-3 font-bold hover:bg-gray-50 transition-colors">
                Book Audit
              </a>
            </div>

            {/* Sprint */}
            <div className="border-2 border-black p-8 relative">
              <div className="absolute -top-3 left-6 bg-[#FF6B4A] text-white text-sm font-bold px-3 py-1">
                MOST POPULAR
              </div>
              <div className="text-sm font-bold text-gray-500 mb-2">BUILD</div>
              <div className="text-4xl font-black mb-2">$3,500</div>
              <div className="font-bold text-xl mb-4">AI Sprint</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Everything in Audit</li>
                <li>✓ 5 custom AI workflows</li>
                <li>✓ Full integration setup</li>
                <li>✓ Team training session</li>
                <li>✓ 60-day support</li>
              </ul>
              <a href="#book" className="block text-center bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>

            {/* System */}
            <div className="border-2 border-gray-200 p-8">
              <div className="text-sm font-bold text-gray-500 mb-2">SCALE</div>
              <div className="text-4xl font-black mb-2">$8,500</div>
              <div className="font-bold text-xl mb-4">AI System</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Everything in Sprint</li>
                <li>✓ Unlimited workflows</li>
                <li>✓ Custom AI training</li>
                <li>✓ Dashboard & reporting</li>
                <li>✓ 90-day support</li>
              </ul>
              <a href="#book" className="block text-center border-2 border-black px-6 py-3 font-bold hover:bg-gray-50 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Need ongoing support? Ask about our <span className="font-bold">$3,000/mo retainer</span>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-20 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to put your AI to work?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Book a free 15-min call. We'll tell you exactly what's possible.
          </p>
          <a 
            href="https://cal.com" 
            target="_blank"
            className="inline-block bg-[#FF6B4A] text-white px-10 py-5 font-bold text-xl hover:bg-[#ff5a36] transition-colors"
          >
            Book Your Free Call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-black">AI Ops Co</div>
          <div className="text-gray-500 text-sm">
            © 2026 AI Ops Co. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
