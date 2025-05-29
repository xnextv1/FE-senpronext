'use client'
import { useEffect, useState, ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { getProfile } from "../actions/getProfile";
import { updateProfile } from "../actions/updateProfile";


export default function ProfileCard() {

  const [username, setUsername] = useState("John Doe");

  const [description, setDescription] = useState("Web developer and UI enthusiast.");
  const [tempDescription, setTempDescription] = useState(description);

  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/150?img=5");
  const [tempProfilePic, setTempProfilePic] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string>(profilePic);

  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTempProfilePic(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (tempProfilePic) {
        
        setProfilePic(previewURL);
    }
    setDescription(tempDescription);
    await updateProfile(tempProfilePic, tempDescription)
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfilePic(null);
    setPreviewURL(profilePic);
    setTempDescription(description);
    setIsEditing(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      const result = await getProfile();
      if (result) {
        setUsername(result.username || "John Doe");
        setProfilePic(result.image || profilePic);
        setDescription(result.description || description);
        setPreviewURL(result.image || profilePic);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Card className="w-full mx-auto mt-10 p-4">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={previewURL} alt="Profile Picture" />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{username}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {isEditing ? (
          <>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
            <Textarea
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
              placeholder="Description"
            />
            <div className="flex gap-2">
              <Button onClick={handleSave}>Save</Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-600">{description}</p>
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
