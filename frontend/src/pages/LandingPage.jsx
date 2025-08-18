import React from 'react'
import '../styles/LandingPage.css'
import NewLineHeader from '../components/NewLineHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import NewLineFooter from '../components/NewLineFooter.jsx'
import { FaRegLightbulb, FaCode, FaChartPie } from "react-icons/fa"
import { CiWavePulse1 } from "react-icons/ci"
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

    const nav = useNavigate();

    return (
        <>
            <div className="main-container">
                <div className="layout-container">
                    <NewLineHeader />
                    <div className="main-content">
                        <div className="content-container">

                            <div className="hero-container">
                                <div className="hero-section">
                                    <div className="hero-content">
                                        <h1 className="hero-title">Learn to Code. See the Trends. Build Your Career.</h1>
                                        <h2 className="hero-subtitle">NewLine is a platform empowering self learners. Master computer science concepts, understand industry trends, and build a clear path to a career in tech.</h2>
                                    </div>
                                    <button className="btn btn-primary hero-btn" onClick={() => nav('/learning-home')}>
                                        <span>Start Learning</span>
                                    </button>
                                </div>
                            </div>

                            <div className="features-section">
                                <div className="features-header">
                                    <h1 className="features-title">NewLine Features</h1>
                                    <p className="features-description">NewLine offers a unique blend of learning and career development tools to help you succeed in the tech industry.</p>
                                </div>
                            </div>

                            <div className="features-grid">
                                <FeatureCard Icon={FaRegLightbulb} title="Interactive Lessons" description="Engage with bite-sized lessons that make learning to code fun and effective." />
                                <FeatureCard Icon={FaCode} title="Deploy Impactful Projects" description="Build real-world projects and deploy them instantly to showcase your skills." />
                                <FeatureCard Icon={FaChartPie} title="Personalized Career Insights" description="Get tailored career advice based on your learning progress and goals." />
                                <FeatureCard Icon={CiWavePulse1} title="Tech Pulse" description="Stay ahead with a live view of trending technologies, in-demand skills, and job market insights" />
                            </div>

                        </div>
                    </div>
                    <NewLineFooter />
                </div>
            </div>
        </>
    )
}