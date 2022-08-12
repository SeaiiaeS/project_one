import "./table.scss";

export default function Table({params, text}) {
  return (
    <div className="table">
      <div className="table__header">
        <h4 className="table__title">{text}</h4>
      </div>
      <ul className="table__paramList">
        {params.map((param, index) => {
          return (
            <li key={index} className="table__paramItem">{param.value}
                <ul className="table__itemList">
                  {param.list.map((item, index) => {
                    return ( param.value === "View") 
                    ? <img src={item} alt="icon" key={index} className="table__itemImg"/> 
                    : <li key={index} className="table__itemValue">{item}</li>
                  })}
                </ul>     
            </li>
          );
        }) || <li className="table__paramItem">No data</li>}
      </ul>
    </div>
  )
}