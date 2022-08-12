import "./stats.scss";
import Chart from "@/components/charts/charts";
import Active from "@/components/active/active";
import Geograph from "@/components/geograph/geograph";

export default  function Stats() {
  return (
    <div className="stats">
      <Chart />
      <Active />
      <Geograph/>
    </div>
  )
}