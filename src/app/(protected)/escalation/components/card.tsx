import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BookDialog from "./book-dialog";

export interface TherapistProps {
    email: string;
    username: string;
    user_type: string;
    image: string;
    description: string;
    user_id: number;
}

interface CardDisplayProps {
    therapist: TherapistProps;
    index?: number;
}

export default function CardDisplay({ therapist, index }: CardDisplayProps) {
    return (
        <div className="grid grid-cols-1 mt-4 gap-4">
            <Card>
                <CardTitle className="ml-8">Therapist {index}</CardTitle>
                <CardContent>
                    <div className="flex">
                        <img
                            className="flex flex-col rounded-lg self-center mb-2"
                            src={therapist.image}
                            alt={therapist.username}
                            width={100}
                            height={100}
                        />
                        <div>
                            <h1 className="ml-2">{therapist.username}</h1>
                            <p className="mt-2 ml-2 text-gray-400">{therapist.description}</p>
                        </div>
                    </div>
                    <BookDialog therapist_id={therapist.user_id} />
                </CardContent>
            </Card>
        </div>
    );
}