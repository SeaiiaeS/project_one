import "./App.scss"
import Sidenav from "@/views/sidenav/sidenav"
import Header from "@/views/header/header"
import Info from "@/views/info/info"
import Stats from "@/views/stats/stats"
import Total from "@/views/total/total"

export default function App() {
  return <div className="app">
    <div className="app__sidenav">
      <Sidenav/>
    </div>
    <div className="app__content">
      <Header/>
      <Info/>
      <Stats/>
      <Total/>
    </div>
  </div>
}