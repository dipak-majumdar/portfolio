import React from 'react';

const radius = 4;
const gap = 16;

const Dots = ({ width = 5, height = 5 } = {}) => {
    const svgWidth = (radius * 2 + gap) * width - gap;
    const svgHeight = (radius * 2 + gap) * height - gap;

    const dots = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const x = radius + i * (radius * 2 + gap);
            const y = radius + j * (radius * 2 + gap);
            dots.push(<circle key={`${i}-${j}`} cx={x} cy={y} r={radius} />);
        }
    }

    return (
        <svg 
            width="100%" 
            className="dots" 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {dots}
        </svg>
    );
};

export default Dots;
