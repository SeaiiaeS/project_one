import "./header.scss"
import Icon from "@/components/icon";
import alignLeft from "@/assets/svg's/align-left.svg";
import britain from "@/assets/svg's/britain.svg";
import caretDown from "@/assets/svg's/caret-down.svg";
import heart from "@/assets/svg's/heart.svg";
import user from "@/assets/images/user.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <Icon src={alignLeft} alt="align" className="header__icon"/>
        <div className="header__languageWrapper">
          <img className="header__languageImage" src={britain} alt="britain"/>
          <span className="header__language">EN</span>
        </div>
        <div className="header__userWrapper">
          <img className="header__userImage" src={user} alt="user"/>
          <div className="header__userInfo">
            <p className="header__userHello">Hello, Max!</p>
            <p className="header__lastLogin">Last login: Thu Mar 20 2014</p>
          </div>
          <Icon src={caretDown} alt="caretDown" className="header__userIcon"/>
        </div>
      </div>
      <div className="header__favoritesWrapper">
        <p className="header__text">Dashboard</p>
        <div className="header__favorites">
          <Icon src={heart} alt="heart" className="header__heart"/>
          <span className="header__add">ADD THIS PAGE TO FAVORITES</span>
        </div>
      </div>
    </div>
  )
}