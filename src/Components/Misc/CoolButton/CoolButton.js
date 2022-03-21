function CoolButton({ size,color,className,children}) {

  return(
      <button className={`button ${size} ${color} ${className}`}>
        {children}
      </button>
  )
}

export default CoolButton 