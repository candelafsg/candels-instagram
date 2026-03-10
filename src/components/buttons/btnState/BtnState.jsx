
import "./buttonstate.css"



export const BtnState = ({children, variant, href, target, rel, type, disabled, form, name, value, autoFocus, ...props}) => {

  const commonProps = {
    ...props,
    className: `button btn-${variant}`
  };

  if (href) {
    // Render as link
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button 
      type={type}
      form={form}
      name={name}
      value={value}
      autoFocus={autoFocus}
      disabled={disabled || variant === 'disabled'}  // Deshabilitar si es disabled
      {...commonProps}
    >
      {children}
    </button>
  );
}

    
