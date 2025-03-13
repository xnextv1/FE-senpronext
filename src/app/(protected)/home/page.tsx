import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col justify-center -pt-4 items-center h-full">
        <Card className="w-[50%]">
            <CardContent className="flex flex-col gap-4">
                <h1 className="text-lg font-bold">Home</h1>
                <p className="text-gray-500">Welcome to the NextBot platform.</p>
                <Button className="self-center w-[25%]">Start Chatting</Button>
            </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-8 w-[50%] mt-12 -mx-8">
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Resources & Support</h1>
                    <p className="text-gray-400">Find resources </p>
                    <Button>Explore Resources</Button>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Direct Help</h1>
                    <p className="text-gray-400">Find the nearest psychologist </p>
                    <Button>Get An Emergency</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}