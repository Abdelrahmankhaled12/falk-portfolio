import { useState } from 'react';

function useHover() {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseOver() {
        setIsHovered(true);
    }

    function handleMouseOut() {
        setIsHovered(false);
    }

    return [isHovered, handleMouseOver, handleMouseOut];
}

export default useHover;