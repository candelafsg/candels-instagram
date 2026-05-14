import "./button.css";
import Shuffle from "../Shufle/Shufle";

export const Button = ({ 
  children, 
  shuffleKey, 
  variant = "primary", 
  onClick, 
  useShuffle = true, 
  ...rest 
}) => {
  const isShuffle = useShuffle && typeof children === 'string';

  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
      {...rest}
    >
      <div className={`btn-interior btn-interior--${variant}`}>
        {isShuffle ? (
          <Shuffle 
            key={shuffleKey}
            text={children}
            triggerOnHover={false}
            triggerOnce={false}
            shuffleDirection="right"
            duration={0.3}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            className="shuffle-button-text"
          />
        ) : children}
      </div>
    </button>
  );
};