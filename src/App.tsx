import React from 'react';
import { Bot, BookOpen, Star, ChevronRight, CheckCircle2, Brain, Rocket, DollarSign, Target } from 'lucide-react';

function App() {
  const handlePurchase = () => {
    window.location.href = 'https://chimoshop.gumroad.com/l/AIbusinessmodels';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full mb-6">
                <Bot className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-blue-400">AI-Powered Future</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Unlock 21 AI Business Models to Earn Passive Income in 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Build scalable, automated income streams using ChatGPT, Canva, and more — even as a beginner.
              </p>
              <button
                onClick={handlePurchase}
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-xl font-semibold"
              >
                Buy Now for $8.99
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://public-files.gumroad.com/afxpt6xbd9sfcyy6qth76uo51vca"
                alt="AI Business Models Book"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Book Is Your Gateway to AI Success</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This comprehensive guide reveals 21 AI-powered business models you can launch fast, with little to no startup cost. Perfect for beginners looking to get ahead of the curve in 2025.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-blue-400" />,
                title: "AI-Powered Tools",
                description: "ChatGPT, Canva, Replit, and more cutting-edge AI tools covered in detail"
              },
              {
                icon: <Rocket className="w-12 h-12 text-green-400" />,
                title: "Step-by-Step Guide",
                description: "Clear, actionable instructions for each business model"
              },
              {
                icon: <DollarSign className="w-12 h-12 text-yellow-400" />,
                title: "Proven Models",
                description: "Tested and verified business models generating real income"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What's Inside</h2>
              <div className="space-y-4">
                {[
                  "Build a 6-figure Etsy printable store with ChatGPT",
                  "Create an AI-powered YouTube channel",
                  "Start a LinkedIn ghostwriting agency",
                  "Launch an AI content creation service",
                  "Automate social media management",
                  "Create and sell AI-generated art",
                  "Build profitable chatbots"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-xl opacity-20"></div>
              <div className="relative bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Why Buy This Book?</h3>
                <div className="space-y-4">
                  {[
                    "21 unique, beginner-friendly business ideas",
                    "Step-by-step setup instructions",
                    "Automation + monetization tactics",
                    "Built for solopreneurs & side hustlers",
                    "Start earning online fast with zero coding"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-blue-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Game-changing strategies for solopreneurs. Worth every penny!",
                author: "Sarah K.",
                rating: 5
              },
              {
                text: "So actionable. I made my first sale in just a week following these methods.",
                author: "Michael R.",
                rating: 5
              },
              {
                text: "Finally, an AI business guide that actually delivers results.",
                author: "David L.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="text-sm text-gray-400">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss The AI Wave — Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get instant access to 21 proven AI business models for just $8.99
          </p>
          <button
            onClick={handlePurchase}
            className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-xl font-semibold"
          >
            <BookOpen className="w-6 h-6 mr-2" />
            Download Now for $8.99
          </button>
          <p className="mt-4 text-sm text-gray-400">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;