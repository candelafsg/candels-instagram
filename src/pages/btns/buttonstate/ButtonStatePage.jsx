
import { BtnState } from "../../../components/buttons/btnState/BtnState";
import { useState, useRef, useEffect } from "react";
import "./buttonpage.css";

const ButtonStatePage = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentText, setCurrentText] = useState('DEFAULT');
    const spanRef = useRef(null);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const getVariant = () => {
        if (isClicked) return 'active';
        if (isHovered) return 'hover';
        return 'default';
    };

    const getText = () => {
        if (isClicked) return 'ACTIVE';
        if (isHovered) return 'HOVER';
        return 'DEFAULT';
    };

    useEffect(() => {
        const newText = getText();
        const newVariant = getVariant();
        if (newText !== currentText && spanRef.current) {
            // Remover todas las clases de animación
            spanRef.current.classList.remove('flip', 'scale');
            // Forzar reflow
            void spanRef.current.offsetWidth;
            
            // Aplicar animación según el nuevo estado
            if (newVariant === 'active') {
                spanRef.current.classList.add('scale');
            } else {
                spanRef.current.classList.add('flip');
            }
            
            setCurrentText(newText);
        }
    }, [isClicked, isHovered, currentText]);

    return (


        <main className="main-button">

            <BtnState
                variant={getVariant()}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span ref={spanRef}>{getText()}</span>
            </BtnState>
        </main>


    );
}

export default ButtonStatePage;