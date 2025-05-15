import { HomePieChart } from "./components/pie-chart";
import RecapCard from "./components/recap-card";




export default function Page() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-4 pt-4 px-2">
      <HomePieChart />
      <RecapCard />
    </div>
  )
} 