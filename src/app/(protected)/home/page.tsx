import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomePieChart } from "./components/pie-chart";
import { HomeBarChartLong } from "./components/bar-chart";

export default function Page() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 -pt-4">
      <HomePieChart />
       <Card>
            <CardContent className="">
                <h1 className="text-2xl font-bold">Home Page</h1>
                <p className="text-gray-500">Welcome to the home page!</p>
                <Button className="mt-4">
                    Get Started
                </Button>
            </CardContent>
       </Card>
    <HomeBarChartLong />
    </div>
  )
}