import "./total.scss"
import Table from "@/components/table/table"
import view from "@/assets/svg's/view.svg"

const params = [
  { 
    value:"ID", 
    list:["1007", "1008", "1009","1010","1011"] 
  },
  { 
    value:"Username", 
    list:["Simona", "Ariana", "Adam","John","Garry"] 
  },
  { 
    value:"Profit($)", 
    list:["55", "45", "35","25","15"] 
  },
  { 
    value:"Commission($)", 
    list:["Simona", "Ariana", "Adam","John","Garry" ] 
  },
  { 
    value:"View", 
    list:[view, view, view,view,view] 
  },
]

export default function Total() {
  return (
    <div className="total">
      <Table params={params} text="Top Affiliates" />
      <Table params={params} text="Signups" />
      <Table params={params} text="Pending Commissions" />
    </div>
  )
}