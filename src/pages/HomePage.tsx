
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import NewsSection from '../components/home/NewsSection';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import { allProjects } from '../data/projects';
import { BookOpen, Star, TrendingUp, Target, Users, Award, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const stats = [
    { label: 'Learning Paths', value: learningPaths.length.toString(), icon: BookOpen },
    { label: 'Individual Courses', value: courses.length.toString(), icon: Target },
    { label: 'Practice Projects', value: allProjects.length.toString(), icon: Code },
    { label: 'Industry Focus', value: '100%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Code,
      title: 'Hands-on Labs',
      description: 'Practice with real-world scenarios and interactive coding exercises'
    },
    {
      icon: Users,
      title: 'Expert-Led Content',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: Award,
      title: 'Structured Learning',
      description: 'Follow carefully designed paths from beginner to professional level'
    },
    {
      icon: Zap,
      title: 'Fast-Track Career',
      description: 'Accelerate your professional growth with focused, practical skills'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ORCATech Learning Platform - Master Tech Skills</title>
        <meta name="description" content="Transform your career with ORCATech's comprehensive learning paths in DevOps, Python, Java, and Cloud Computing across Beginner, Intermediate, and Professional levels." />
        <meta name="keywords" content="tech learning, devops, python, java, cloud computing, programming courses, professional development" />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Master Tech Skills
                </span>
                <br />
                <span className="text-white">Shape Your Future</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed px-4">
                Choose from structured learning paths for career development, individual courses for specific skills,
                or hands-on projects to practice what you've learned with real-world solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
                <div className="px-3 md:px-4 py-1 md:py-2 bg-blue-900/30 border border-blue-600/30 text-blue-300 text-xs md:text-sm font-medium inline-block rounded-md">
                  🚀 Hands-on Labs
                </div>
                <div className="px-3 md:px-4 py-1 md:py-2 bg-purple-900/30 border border-purple-600/30 text-purple-300 text-xs md:text-sm font-medium inline-block rounded-md">
                  📊 Structured Learning
                </div>
                <div className="px-3 md:px-4 py-1 md:py-2 bg-cyan-900/30 border border-cyan-600/30 text-cyan-300 text-xs md:text-sm font-medium inline-block rounded-md">
                  🎯 Industry-Focused
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <NewsSection />

        {/* Stats Section */}
        <section className="py-8 md:py-12 px-4 border-y border-slate-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-3 md:mb-4">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Why Choose ORCATech?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
                We provide comprehensive, industry-focused learning experiences designed to accelerate your tech career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 md:p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-3 md:mb-4">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach Section */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
                Three Ways to Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="p-6 md:p-8 rounded-lg bg-blue-900/20 border border-blue-500/30">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎯</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Learning Paths</h3>
                  <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                    Structured journeys from beginner to professional level. Follow our carefully designed curriculum to master entire technology stacks.
                  </p>
                  <ul className="text-slate-300 text-left space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Progressive skill building</li>
                    <li>• Career-focused outcomes</li>
                    <li>• Comprehensive coverage</li>
                  </ul>
                </div>
                <div className="p-6 md:p-8 rounded-lg bg-purple-900/20 border border-purple-500/30">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">📚</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Individual Courses</h3>
                  <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                    Target specific skills and technologies. Perfect for professionals looking to fill knowledge gaps or learn new tools quickly.
                  </p>
                  <ul className="text-slate-300 text-left space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Focused learning objectives</li>
                    <li>• Flexible scheduling</li>
                    <li>• Immediate application</li>
                  </ul>
                </div>
                <div className="p-6 md:p-8 rounded-lg bg-cyan-900/20 border border-cyan-500/30">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛠️</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Practice Projects</h3>
                  <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                    Apply your knowledge with real-world projects. Build practical solutions and create a portfolio to showcase your skills.
                  </p>
                  <ul className="text-slate-300 text-left space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Real-world scenarios</li>
                    <li>• Portfolio building</li>
                    <li>• Practical experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Choose a structured learning path for career development, dive into individual courses for specific skills,
              or practice with hands-on projects. Your journey to professional mastery starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/learning-paths">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore Learning Paths
                </Button>
              </Link>
              <Link to="/courses">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Browse Individual Courses
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Explore Practice Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
