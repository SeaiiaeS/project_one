export default function Icon({className="", modificator = '', src, alt="icon", count, text}) {
  const parentClassName = className + "__container";
  const countClassName = className + "__count";
  return (
    <div className={modificator ? [parentClassName,parentClassName + modificator].join(' ') : parentClassName} >
      <h3 className={modificator ? [countClassName,countClassName + modificator].join(' ') : countClassName}>{count}</h3>
      <div className={className + "__textWrapper"}>
        <span className={className + "__text"}>
          <img className={className + "__image"} src={src} alt={alt} />
          {text}
        </span>
      </div>
    </div>
  );
}