import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewChatDialog(){
    const [chatTitle, setChatTitle] = useState("");

    return (
       <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    New Chat
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="grid gap-4 py-4">
                    <DialogTitle className="text-lg font-medium">
                        Start a new chat
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">
                        Start a new conversation with test AI.
                    </p>
                    <Input
                        value={chatTitle}
                        onChange={(e) => setChatTitle(e.target.value)}
                        placeholder="Enter chat title"
                        className="border rounded-lg border-gray-400 p-2 text-black"
                    />
                </div>
                <div className="flex justify-between space-x-2">

                    <DialogClose asChild>
                        <Button variant="outline" onClick={() => console.log("Cancel")}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button onClick={() => console.log("Start Chat")}>
                        Start Chat
                    </Button>
                </div>
            </DialogContent>
       </Dialog>
    );
}