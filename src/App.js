import "./App.scss"
import SideNav from "@/views/sidenav/sidenav"


export default function App() {
  return <div className="app">
    <div className="app__sidenav">
      <SideNav/>
    </div>
    <div className="app__content">

    </div>
  </div>
}