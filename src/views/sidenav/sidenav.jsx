import "./sidenav.scss"
import Icon from "@/components/icon";
import bwin from "@/assets/images/bwin.png";
import speedometer from "@/assets/svg's/speedometer.svg";
import key from "@/assets/svg's/key.svg";
import user from "@/assets/svg's/user.svg";
import report from "@/assets/svg's/report.svg";
import graph from "@/assets/svg's/graph.svg";
import arrows from "@/assets/svg's/arrows.svg";
import params from "@/assets/svg's/params.svg";
import heart from "@/assets/svg's/heart.svg";
import clock from "@/assets/svg's/clock.svg";
import eye from "@/assets/svg's/eye.svg";

export default function SideNav() {
  return (
    <div className="sidenav">
      <ul className="sidenav__list">
        <Icon src={bwin} alt="bwin" className="sidenav__item" modificator="--logo"/>
        <Icon src={speedometer} alt="speedometer" className="sidenav__item" />
        <Icon src={key} alt="key" className="sidenav__item" />
        <Icon src={user} alt="user" className="sidenav__item" />
        <Icon src={report} alt="report" className="sidenav__item" />
        <Icon src={graph} alt="graph" className="sidenav__item" />
        <Icon src={arrows} alt="arrows" className="sidenav__item" />
        <Icon src={params} alt="params" className="sidenav__item" />
        <Icon src={heart} alt="heart" className="sidenav__item" modificator="--disabled"/>
        <Icon src={clock} alt="clock" className="sidenav__item" modificator="--disabled"/>
        <Icon src={eye} alt="eye" className="sidenav__item" modificator="--disabled"/>
        <li className="sidenav__text">#171717</li>
      </ul>
    </div>
    
  )
}