
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Flag, X, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ProfileData } from "@/hooks/useProfile";

interface EditProfileFormProps {
  profile: ProfileData;
  onSave: (data: Partial<ProfileData>) => void;
  onCancel: () => void;
}

const EditProfileForm = ({ profile, onSave, onCancel }: EditProfileFormProps) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    country: profile.country,
    countryFlag: profile.countryFlag,
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully",
    });
  };

  return (
    <Card className="glass-card p-6 mb-6 animate-fade-in">
      <CardHeader className="p-0 pb-6">
        <CardTitle className="text-xl">Edit Profile</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-clarity-blue to-clarity-purple flex items-center justify-center shadow-glow-md">
                <User size={32} className="text-white" />
              </div>
              <Button type="button" variant="outline" size="sm">
                Change Avatar
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your display name"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countryFlag">Flag Emoji</Label>
                <Input
                  id="countryFlag"
                  name="countryFlag"
                  value={formData.countryFlag}
                  onChange={handleChange}
                  placeholder="🏳️"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              className="flex items-center gap-1"
            >
              <X size={16} />
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex items-center gap-1"
            >
              <Save size={16} />
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditProfileForm;
