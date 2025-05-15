import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BookDialog from "./book-dialog";

export default function CardDisplay(){
    return(
        <div className="grid grid-cols-1 mt-4 gap-4">
            <Card>
                <CardTitle className="ml-8">Therapist 1</CardTitle>
                <CardContent>
                    <div className="flex ">
                    <img className="flex flex-col rounded-lg self-center mb-2" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="test" width={100} height={100}></img>
                    <div>
                        <h1 className="ml-2">John Doe</h1>
                        <p className="mt-2 ml-2 text-gray-400">Born in new jersey ....</p>
                    </div>
                    </div>
                    <BookDialog />
                </CardContent>
            </Card>
            <Card>
                <CardTitle className="ml-8">Therapist 2</CardTitle>
                <CardContent>
                    <div className="flex ">
                    <img className="flex flex-col rounded-lg self-center mb-2" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="test" width={100} height={100}></img>
                    <div>
                        <h1 className="ml-2">Alice Doe</h1>
                        <p className="mt-2 ml-2 text-gray-400">Born in new jersey ....</p>
                    </div>
                    </div>
                    <BookDialog />
                </CardContent>
            </Card>
            <Card>
                <CardTitle className="ml-8">Therapist 3</CardTitle>
                <CardContent>
                    <div className="flex ">
                    <img className="flex flex-col rounded-lg self-center mb-2" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="test" width={100} height={100}></img>
                    <div>
                        <h1 className="ml-2">John Mayer</h1>
                        <p className="mt-2 ml-2 text-gray-400">Born in new jersey ....</p>
                    </div>
                    </div>
                    <BookDialog />
                </CardContent>
            </Card>
            <Card>
                <CardTitle className="ml-8">Therapist 4</CardTitle>
                <CardContent>
                    <div className="flex ">
                    <img className="flex flex-col rounded-lg self-center mb-2" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="test" width={100} height={100}></img>
                    <div>
                        <h1 className="ml-2">Alice Mayer</h1>
                        <p className="mt-2 ml-2 text-gray-400">Born in new jersey ....</p>
                    </div>
                    </div>
                    <BookDialog />
                </CardContent>
            </Card>
        </div>
    )
}