import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CardDisplay(){
    return(
        <div className="grid grid-cols-3 mt-4 gap-4">
            <Card>
                <CardTitle>Test 1</CardTitle>
                <CardContent>
                    <h1>Test</h1>
                    <Image className="flex flex-col rounded-lg self-center " src="https://res.cloudinary.com/djfue1ffl/image/upload/v1744032826/gkiver7ull6mvkwegeaj.webp" alt="test" width={100} height={100}></Image>
                    <Button variant="outline" className="w-full MT"> Test </Button>
                </CardContent>
            </Card>
            <Card>
                <CardTitle>Test 2</CardTitle>
                <CardContent>
                    <h1>Test</h1>
                    <Button variant="outline" className="w-full MT"> Test </Button>
                </CardContent>
            </Card>
            <Card>
                <CardTitle>Test 3</CardTitle>
                <CardContent>
                    <h1>Test</h1>
                    <Button variant="outline" className="w-full MT"> Test </Button>
                </CardContent>
            </Card>
            <Card>
                <CardTitle>Test 4</CardTitle>
                <CardContent>
                    <h1>Test</h1>
                    <Button variant="outline" className="w-full MT"> Test </Button>
                </CardContent>
            </Card>
        </div>
    )
}