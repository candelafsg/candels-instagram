import { useState, useEffect } from 'react'
import './animated-logo.css'

export const AnimatedLogo = () => {
    const [visibleElements, setVisibleElements] = useState([])

    useEffect(() => {
        // Agrupar por elementos que deben aparecer juntos
        const elementGroups = [
            // Primero el punto izquierdo
            ['circle-1'],
            // Luego el punto derecho
            ['circle-2'],
            // Primera C (completa - ambas partes a la vez)
            ['path-1', 'path-2'],
            // Segunda C con ojos (completa - todo a la vez)
            ['path-3', 'ellipse-1', 'ellipse-2', 'ellipse-3', 'ellipse-4'],
            // Letra A (COMPLETA - con ojos del mismo color)
            ['rect-1', 'path-4', 'ellipse-6', 'ellipse-7', 'ellipse-8', 'ellipse-9'],
            // Letra N (completa)
            ['rect-2'],
            // Letra O (completa - todo a la vez)
            ['ellipse-5', 'ellipse-6', 'ellipse-7', 'ellipse-8', 'ellipse-9'],
            // Letra E (completa)
            ['path-5'],
            // Letra D (COMPLETA - con ojos del mismo color)
            ['path-6', 'path-7', 'ellipse-1', 'ellipse-2', 'ellipse-3', 'ellipse-4'],
            // Letra L (completa - ambas partes a la vez)
            ['path-8', 'path-9'],
            // Letra S (completa - ambas partes a la vez)
            ['path-10', 'path-11']
        ]

        const timeouts = []
        
        elementGroups.forEach((group, groupIndex) => {
            const timeout = setTimeout(() => {
                setVisibleElements(prev => [...prev, ...group])
            }, groupIndex * 300) // Cada grupo aparece cada 300ms
            timeouts.push(timeout)
        })

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout))
        }
    }, [])

    return (
        <div className="animated-logo-container">
            <svg width="805" height="128" viewBox="0 0 805 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    cx="9.8877" cy="64.0312" r="9.8877" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('circle-1') ? 'visible' : ''}`}
                />
                <path 
                    d="M119.719 3.96084C56.5659 -7.0455 38.4893 37.6812 37.3452 61.4204L84.8248 61.4204C112.283 58.1832 119.529 21.7652 119.719 3.96084Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="1.14636"
                    className={`logo-element ${visibleElements.includes('path-1') ? 'visible' : ''}`}
                />
                <path 
                    d="M119.719 124.102C56.5659 135.108 38.4893 90.3813 37.3452 66.6421L84.8248 66.6421C112.283 69.8793 119.529 106.297 119.719 124.102Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="1.14636"
                    className={`logo-element ${visibleElements.includes('path-2') ? 'visible' : ''}`}
                />
                <path 
                    d="M146.843 13.3443C125.09 33.6826 124.758 95.9279 127.505 124.936H174.471V81.9128C185.018 124.154 207.43 128.195 217.318 124.936C223.473 -7.18904 171.563 -9.76732 146.843 13.3443Z" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('path-3') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="165.634" cy="43.5913" rx="8.57884" ry="8.39984" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-1') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="178.503" cy="43.5917" rx="8.57884" ry="8.39984" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-2') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="178.503" cy="55.1411" rx="8.57884" ry="8.39984" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-3') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="165.634" cy="55.1411" rx="8.57884" ry="8.39984" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-4') ? 'visible' : ''}`}
                />
                <rect 
                    x="224.41" y="2.24805" width="34.6069" height="123.566" rx="4.39249" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('rect-1') ? 'visible' : ''}`}
                />
                <path 
                    d="M261.517 6.64054C261.517 4.21463 263.483 2.24805 265.909 2.24805H273.052C291.255 2.24805 306.011 17.0043 306.011 35.207V125.275H265.909C263.483 125.275 261.517 123.309 261.517 120.883V6.64054Z" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('path-4') ? 'visible' : ''}`}
                />
                <rect 
                    x="312.6" y="2.24805" width="35.14" height="122.99" rx="6.26197" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('rect-2') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="369.897" cy="64.0312" rx="56.0043" ry="61.7831" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('ellipse-5') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="362.722" cy="60.387" rx="8.57884" ry="8.28938" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-6') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="375.591" cy="60.3875" rx="8.57884" ry="8.28938" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-7') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="375.591" cy="71.785" rx="8.57884" ry="8.28938" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-8') ? 'visible' : ''}`}
                />
                <ellipse 
                    cx="362.722" cy="71.785" rx="8.57884" ry="8.28938" 
                    fill="#F6F5F0"
                    className={`logo-element ${visibleElements.includes('ellipse-9') ? 'visible' : ''}`}
                />
                <path 
                    d="M459.467 2.24805H530.328V38.1221H479.242C471.518 38.1221 470.694 49.0836 479.242 49.0836H530.328V80.9717H479.242C489.646 95.9192 510.553 92.5975 530.328 88.9437V125.814H459.467C425.376 125.814 430.902 79.643 437.219 62.0381C424.036 22.1781 447.623 2.24805 459.467 2.24805Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="1.64795"
                    className={`logo-element ${visibleElements.includes('path-5') ? 'visible' : ''}`}
                />
                <path 
                    d="M586.089 125.814C595.507 31.0802 557.232 3.96424 536.917 2.24805L536.917 73.4702C539.688 114.659 570.853 125.528 586.089 125.814Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="1.35478"
                    className={`logo-element ${visibleElements.includes('path-6') ? 'visible' : ''}`}
                />
                <path 
                    d="M641.113 65.1548C599.824 70.5468 588.203 107.841 587.554 125.815H641.113V65.1548Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="1.94758"
                    className={`logo-element ${visibleElements.includes('path-7') ? 'visible' : ''}`}
                />
                <path 
                    d="M702.615 4.62921C648.458 6.68175 647.212 50.1169 650.675 65.1714L724.329 62.3799C764.924 60.8414 766.04 18.1343 765.437 2.24828L702.615 4.62921Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="4.33567"
                    className={`logo-element ${visibleElements.includes('path-10') ? 'visible' : ''}`}
                />
                <path 
                    d="M702.655 67.2817C648.459 67.2817 645.568 110.638 648.459 125.813H722.165C762.79 125.813 765.522 83.1792 765.522 67.2817H702.655Z" 
                    fill="#333333" 
                    stroke="#333333" 
                    strokeWidth="4.33567"
                    className={`logo-element ${visibleElements.includes('path-11') ? 'visible' : ''}`}
                />
                <circle 
                    cx="795.112" cy="64.0312" r="9.8877" 
                    fill="#333333"
                    className={`logo-element ${visibleElements.includes('circle-2') ? 'visible' : ''}`}
                />
            </svg>
        </div>
    )
}
