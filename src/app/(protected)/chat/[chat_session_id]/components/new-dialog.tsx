import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function NewChatDialog(){
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
                        Start a new conversation with the AI.
                    </p>
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