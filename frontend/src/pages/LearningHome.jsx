import React from 'react'
import "../styles/LearningHome.css"
import LearningModuleCard from '../components/LearningModuleCard.jsx'
import IntroToPythonCover from '../../public/IntroPython.png'

export default function LearningHome() {

    const inProgressModules = [
        {
            id: 1,
            title: "Introduction to Python",
            description: "Master the fundamentals of Python and its applications",
            progress: 75,
            image: IntroToPythonCover
        },
        {
            id: 2,
            title: "Introduction to Machine Learning",
            description: "Explore core concepts of machine learning and create your first models",
            progress: 40,
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "Discrete Mathematics",
            description: "A branch of mathematics that deals with countable, distinct, and separable mathematical structures.",
            progress: 67,
            image: "https://engineering.jhu.edu/ams/wp-content/uploads/2021/06/hero-image-research-500x282.jpeg"
        }
    ]

    return(
        <div className="container">
            <h1 className="title">Learning Modules</h1>
            <div className="section">
                <h2 className="sectionTitle">In Progress</h2>
                <div className="grid">
                    {inProgressModules.map(module => (
                        <div key={module.id} className="card">
                            <LearningModuleCard module={module} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}