import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomerAvatarProps {
  imagePath: string | undefined;
}

export function CustomerAvatar({ imagePath }: CustomerAvatarProps) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src={imagePath} alt="Customer" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
