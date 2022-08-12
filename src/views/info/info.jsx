import "./info.scss"
import Board from "@/components/board";
import check from "@/assets/svg's/check.svg";
import grapArrowUp from "@/assets/svg's/graph-arrow-up.svg";
import moneyBill from "@/assets/svg's/money-bill.svg";
import questionFill from "@/assets/svg's/question-fill.svg";

export default function Info() {
  return (
    <div className="info">
      <Board className="info" src={check} count="25" text="SIGNUPS"/>
      <Board className="info" src={grapArrowUp} count="$1000" text="PROFIT" modificator="--blue"/>
      <Board className="info" src={moneyBill} count="$350" text="COMMISSIONS" modificator="--orange"/>
      <Board className="info" src={questionFill} count="$300" text="PENDING COMMISSION" modificator="--green"/>
    </div>
  )
}