export default function Icon({ className, modificator = '', src, alt}) {
  const parentClassName = className + "Wrapper";
  return (
    <li className={modificator ? [parentClassName,parentClassName + modificator].join(' ') : parentClassName}>
      <img className={modificator ? [className,className + modificator].join(' ') : className} src={src} alt={alt}/>
    </li>
  );
}