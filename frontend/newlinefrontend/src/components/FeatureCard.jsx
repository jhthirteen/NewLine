import React from 'react'

export default function FeatureCard({ Icon, title, description }) {
    return (
        <div className="feature-card">
            <div className="feature-icon">
                <Icon />
            </div>
            <div className="feature-content">
                <h2 className="feature-title">{title}</h2>
                <p className="feature-description">{description}</p>
            </div>
        </div>
    )
}