import { Upload } from "lucide-react";
import Image from "next/image";
import { IProfileImg } from "./sign-up-form";
import { toast } from "sonner";

interface ImageContainerProps {
  profileImg: IProfileImg | undefined;
  setProfileImg: (value: IProfileImg | undefined) => void;
}

export default function ImageContainer({
  profileImg,
  setProfileImg,
}: ImageContainerProps) {

  const handleImageChange = (event: any) => {
    const file = event?.target?.files;

    if (!file[0]?.type.match("image/*")) {
      toast.message("Formato inválido!", {
        description: "Somente arquivos de imagens são aceitos",
        position: "top-right",
      });
    }

    if (file?.length > 0 && file[0]?.type?.match("image/*")) {
      const path = file[0];
      const profileImgUrl = URL.createObjectURL(file[0]);

      setProfileImg({ path, profileImgUrl });
    }
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      {!profileImg?.profileImgUrl && (
        <Upload className="absolute text-[#e5e5e8]" size={50} />
      )}

      <input
        id="file"
        type="file"
        name="file"
        onChange={handleImageChange}
        className={"absolute h-[150px] w-[150px] cursor-pointer opacity-0"}
      />

      <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border">
        {profileImg?.profileImgUrl && (
          <Image
            width={150}
            height={150}
            alt="Profile Image"
            src={profileImg?.profileImgUrl}
            className="h-[150px] w-[150px] rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
