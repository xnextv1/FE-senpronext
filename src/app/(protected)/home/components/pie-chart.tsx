"use client"

import * as React from "react"
import { PieChart, Pie, Cell, Label } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import getChartDashboard from "../../actions/get-chart-dashboard"

export interface PieChart{
  emotion_counts: PieData[]
}

export interface PieData{
  emotion: string
  count: number
}



const emotionColors: Record<string, string> = {
  sadness: "hsl(var(--chart-1))",   // Cool blue
  love: "hsl(var(--chart-2))",      // Warm red/pink
  fear: "hsl(var(--chart-3))",      // Orange/yellow
  joy: "hsl(var(--chart-4))",       // Purple/lavender
  surprise: "hsl(var(--chart-5))",  // Green
  anger: "hsl(var(--chart-6))",     // Red
}



export function HomePieChart() {
  const [emotion, setEmotion] = React.useState<PieChart | null>(null)

  const chartData = React.useMemo(() => {
    if (!emotion || !emotion.emotion_counts) return [];
    return emotion.emotion_counts.map((item) => ({
      emotion: item.emotion,
      count: item.count,
    }));
  }, [emotion]);

  const totalEmotion = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [chartData])

  const chartConfig = {
    visitors: {
      label: "Emotion",
    },
    ...Object.fromEntries(
      chartData.map(({ emotion }) => [
        emotion,
        { label: emotion, color: emotionColors[emotion] },
      ])
    ),
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getChartDashboard()
      setEmotion(data)
    }
    fetchData()
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Emotion Count Pie Chart</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="emotion"
              innerRadius={60}
              strokeWidth={5}
              isAnimationActive={false}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={emotionColors[entry.emotion] || "#ccc"}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalEmotion.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Emotion
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm" />
    </Card>
  )
}
