
import "./button.css";
import Shuffle from "../Shufle/Shufle";

export const Button = ({ children, variant = "primary", onClick, useShuffle = true }) => {

  const renderChildren = () => {
    // Si es un string y useShuffle es true, usar Shuffle
    if (useShuffle && typeof children === 'string') {
      return (
        <Shuffle 
          key={children} // Forzar re-renderizado cuando cambia el texto
          text={children}
          triggerOnHover={true}
          triggerOnce={false}
          shuffleDirection="right"
          duration={0.3}
          scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          className="shuffle-button-text"
        />
      );
    }
    
    // Si no, renderizar children normal
    return children;
  };

  return (
    <button className={`btn btn-${variant} ${useShuffle && typeof children === 'string' ? 'no-hover' : ''}`} onClick={onClick}>
      <div className={`btn-interior btn-${variant}`}>
        {renderChildren()}
      </div>
    </button>
  );
};