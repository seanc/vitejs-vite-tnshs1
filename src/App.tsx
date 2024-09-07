import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar as CalendarIcon,
  BarChart2,
  Settings,
  DollarSign,
  PlusCircle,
} from 'lucide-react';
import './index.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// Make sure to import the CSS for react-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('marketplace');

  const localizer = momentLocalizer(moment);

  const DashboardPreview = () => {
    const [activeView, setActiveView] = useState('marketplace');

    const sidebarItems = [
      {
        icon: <BarChart2 size={20} />,
        label: 'Marketplace Overview',
        id: 'marketplace',
      },
      {
        icon: <CalendarIcon size={20} />,
        label: 'Profit Calendar',
        id: 'calendar',
      },
      { icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
      {
        icon: <PlusCircle size={20} />,
        label: 'Add Channel',
        id: 'add-channel',
      },
    ];

    const events = [
      {
        title: 'Amazon: $523.45',
        start: new Date(2024, 8, 1),
        end: new Date(2024, 8, 1),
        allDay: true,
      },
      {
        title: 'Walmart: $312.67',
        start: new Date(2024, 8, 1),
        end: new Date(2024, 8, 1),
        allDay: true,
      },
      // Add more events as needed
    ];

    return (
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto h-[600px] flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6">AlliedEcom</h2>
          <nav>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center space-x-2 w-full text-left py-2 px-4 rounded ${
                  activeView === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveView(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main content area */}
        <div className="p-6">
          {activeView === 'marketplace' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Marketplace Overview</h2>
              {/* Add your marketplace overview content here */}
            </div>
          )}
          {activeView === 'calendar' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Profit Calendar</h2>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          )}
          {activeView === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p>Settings page coming soon...</p>
            </div>
          )}
          {activeView === 'add-channel' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Add Channel</h2>
              <p>Add new sales channel feature coming soon...</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const HowItWorksStep = ({ number, title, description }) => (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
        {number}
      </span>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </li>
  );

  const FAQItem = ({ question, answer }) => (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">AlliedEcom</div>
          <div className="space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600"
            >
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#story" className="text-gray-600 hover:text-blue-600">
              Our Story
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-40 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-5xl font-bold mb-6">
                Simplify Multi-Channel E-commerce Inventory Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unify your sales channels with a single source of truth for
                inventory. No complexity, just results.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center mx-auto">
                Join the Waitlist <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Dashboard Preview (overlapping hero and features) */}
        <div className="container mx-auto px-4 -mt-32 mb-20">
          <DashboardPreview />
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="text-blue-500" size={40} />}
                title="Real-time Sync"
                description="Keep inventory up-to-date across Amazon, Walmart, and Shopify instantly, preventing overselling and stockouts."
              />
              <FeatureCard
                icon={<Settings className="text-blue-500" size={40} />}
                title="Simple Integration"
                description="Easy setup with major e-commerce platforms. Start syncing your inventory in minutes, not days."
              />
              <FeatureCard
                icon={<DollarSign className="text-blue-500" size={40} />}
                title="Profit Tracking"
                description="Monitor your daily profits across all channels with our intuitive calendar view, helping you make data-driven decisions."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              How AlliedEcom Works
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-gray-200">
                <HowItWorksStep
                  number={1}
                  title="Connect Your Channels"
                  description="Easily integrate your Amazon, Walmart, and Shopify stores with our secure API."
                />
                <HowItWorksStep
                  number={2}
                  title="Sync Your Inventory"
                  description="Our system automatically syncs your inventory levels across all connected platforms in real-time."
                />
                <HowItWorksStep
                  number={3}
                  title="Monitor Performance"
                  description="Track your sales and profits across all channels from a single, intuitive dashboard."
                />
                <HowItWorksStep
                  number={4}
                  title="Grow Your Business"
                  description="Focus on scaling your e-commerce empire while we handle the complexities of multi-channel inventory management."
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Simple, Transparent Pricing
            </h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Coming Soon
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  We're working hard to bring you the best multi-channel
                  inventory management solution. Sign up for our waitlist to be
                  notified when we launch and receive exclusive early-bird
                  pricing.
                </p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-4">
                AlliedEcom was born from firsthand experience with the
                challenges of multi-channel e-commerce. As a former Amazon and
                Walmart marketplace seller, I struggled with the complexity of
                managing inventory across platforms.
              </p>
              <p className="text-gray-600 mb-4">
                Existing solutions were often bloated with unnecessary features,
                requiring months of historical data to provide actionable
                insights. I saw a need for a straightforward tool that followed
                the Unix philosophy: do one thing and do it well.
              </p>
              <p className="text-gray-600">
                That's why we created AlliedEcom – a focused solution that
                simplifies inventory synchronization across multiple e-commerce
                channels. Our mission is to empower sellers to grow their
                businesses without the headache of inventory mismanagement.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQItem
                question="Which e-commerce platforms does AlliedEcom support?"
                answer="We currently support Amazon, Walmart, and Shopify, with plans to expand to other major platforms in the near future."
              />
              <FAQItem
                question="How quickly does inventory sync across platforms?"
                answer="Our system syncs inventory in real-time, ensuring that your stock levels are always up-to-date across all connected platforms."
              />
              <FAQItem
                question="Is AlliedEcom suitable for businesses of all sizes?"
                answer="Yes! Whether you're just starting out or managing a large e-commerce operation, AlliedEcom scales to meet your needs."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Simplify Your E-commerce Operations?
            </h2>
            <p className="text-xl mb-8">
              Join our waitlist and be the first to know when AlliedEcom
              launches.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Sign Up for Early Access
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">AlliedEcom</h3>
              <p>Simplifying multi-channel e-commerce inventory management.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <a href="#features" className="hover:text-blue-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-blue-400">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-blue-400">
                    Our Story
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p>Stay updated on our launch and e-commerce tips:</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-full text-gray-800"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 AlliedEcom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
