export default function Icon({ className="icon", modificator = '', src, alt="icon", isListItem=false }) {
  const parentClassName = className + "Wrapper";
  if (isListItem) {
    return (
    <li className={modificator ? [parentClassName,parentClassName + modificator].join(' ') : parentClassName}>
      <img className={modificator ? [className,className + modificator].join(' ') : className} src={src} alt={alt}/>
    </li>
    );
  }
  return (
    <div className={modificator ? [parentClassName,parentClassName + modificator].join(' ') : parentClassName}>
      <img className={modificator ? [className,className + modificator].join(' ') : className} src={src} alt={alt}/>
    </div>
  );
}