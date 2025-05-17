import React from 'react';
import "./SenseBlock.css"
import Button from '../button/Button';

export default function SenseBlock({ children, ...props }) {
    return (
        <div className="sense-block">
            <div className="text-container">
                {props['little-header'] && (
                    <p className="little-heading">{props['little-header']}</p>
                )}
                <p className="sense-heading">{props.heading.toUpperCase()}</p>
                <p className="sense-text">{props.text}</p>
                {props['text-children'] && (
                    <div className="text-children">
                        {props['text-children']}
                    </div>
                )}
            </div>
            <div className="sense-children">
                {children}
            </div>
        </div>
    );
}
