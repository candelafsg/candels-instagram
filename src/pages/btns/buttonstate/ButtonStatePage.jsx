
import { BtnState } from "../../../components/buttons/btnState/BtnState";
import BatteryAnimation from "../../../components/battery/BatteryAnimation";
import { useState, useRef, useEffect } from "react";
import "./buttonpage.css";

const ButtonStatePage = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [currentText, setCurrentText] = useState('DEFAULT');
    const [currentVariant, setCurrentVariant] = useState('default');
    const [activeControl, setActiveControl] = useState('active'); // Track which control button is active
    const [batteryPercentage, setBatteryPercentage] = useState(0);
    const spanRef = useRef(null);
    const titleRef = useRef(null);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleActiveClick = () => {
        setIsClicked(false);
        setIsDisabled(false);
        setActiveControl('active');
    };

    const handleDisabledClick = () => {
        setIsClicked(false);
        setIsDisabled(true);
        setActiveControl('disabled');
    };

    const getVariant = () => {
        if (isDisabled) return 'disabled';
        if (isClicked) return 'active';
        if (isHovered) return 'hover';
        return 'default';
    };

    const getText = () => {
        if (isDisabled) return 'DISABLED';
        if (isClicked) return 'PRESSED';
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

        // Animar el título cuando cambia la variante
        if (newVariant !== currentVariant && titleRef.current) {
            titleRef.current.classList.remove('title-scale');
            void titleRef.current.offsetWidth;
            titleRef.current.classList.add('title-scale');
            setCurrentVariant(newVariant);
        }
    }, [isClicked, isHovered, currentText, currentVariant]);



    const stateButton = [
        {
            variant: 'default',
            text: 'DEFAULT'
        },
        {
            variant: 'hover',
            text: 'HOVER'
        },
        {
            variant: 'active',
            text: 'PRESSED'
        },

        {
            variant: 'disabled',
            text: 'DISABLED'
        }
    ]

    return (


        <main className="main-button">

            <p ref={titleRef} className="button-text">{stateButton.find(btn => btn.variant === getVariant())?.text}</p>



            <BtnState
                variant={getVariant()}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span ref={spanRef}>{getText()}</span>
            </BtnState>


            <div className="button-disabled">
                <button
                    className={`disabled-btn ${activeControl === 'active' ? 'control-active' : ''}`}
                    onClick={handleActiveClick}
                >
                    ACTIVE
                </button>
                <button
                    className={`disabled-btn ${activeControl === 'disabled' ? 'control-active' : ''}`}
                    onClick={handleDisabledClick}
                >
                    DISABLED
                </button>
            </div>

            <footer className="main-button-footer">
                <img src="/img/logo.png" alt="logo" className="main-logo" />
            </footer>


        </main>


    );
}

export default ButtonStatePage;