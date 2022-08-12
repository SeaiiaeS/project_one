import "./geograph.scss";
import caretDown from "@/assets/svg's/caret-down.svg";
import worldMap from "@/assets/images/worldMap.png";


export default function Geograph() {
  return (
    <div className="geograph">
      <div className='geograph__header'>
        <h4 className='geograph__title'>Geographic Data</h4>
        <div className='geograph__box'>
          <p className='geograph__dataSelector'>Last Month</p>
          <img className='geograph__caretDown' src={caretDown} alt="down" />
        </div>
      </div>
      <img className="geograph__worldMap" src={worldMap} alt="" />
      <p className="geograph__affiliate">Affiliate Sign Ups
        <img className="geograph__caretDown" src={caretDown} alt="caretDown" />  
      </p>
      <ol className="geograph__list">
        <li className="geograph__item">
          <div className="geograph__textWrapper">
            <p className="geograph__country">United States</p>
            <p className="geograph__value">200</p>
          </div>
        </li>
        <li className="geograph__item">
          <div className="geograph__textWrapper">
            <p className="geograph__country">China</p>
            <p className="geograph__value">65</p>
          </div>
        </li>
        <li className="geograph__item">
          <div className="geograph__textWrapper">
            <p className="geograph__country">United Kingdom</p>
            <p className="geograph__value">22</p>
          </div>
        </li>
      </ol>
    </div>
  )
}