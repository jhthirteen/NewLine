import React from 'react'

export default function LearningModuleCard({ module }) {
    return(
        <div className="card">
            <img src={module.image} className="cardImage"></img>
            <div className="cardContent">
                <div className="cardHeader">
                    <h3 className="cardTitle">{module.title}</h3>
                </div>
                <p className="cardDescription">{module.description}</p>
                <div className="progressContainer">
                    <div className="progressBackground">
                        <div className="progressBar" style={{width: `${module.progress}%`}}></div>
                    </div>
                    <p className="progressText">{module.progress}% complete</p>
                </div>
            </div>
        </div>
    ) 
}