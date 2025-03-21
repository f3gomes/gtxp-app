import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LinkedinIcon } from "lucide-react";
import { SpeakerCardProps } from "./speakers-card";

export default function SpeakerDetails({
  name,
  role,
  image,
}: SpeakerCardProps) {
  return (
    <div className="flex min-h-[600px] w-full flex-col gap-1 rounded-3xl bg-white shadow-md xl:h-[600px] xl:min-w-[700px] xl:max-w-[700px]">
      <div className="flex flex-col gap-3 p-4 sm:flex-row">
        <div className="flex min-w-[270px] flex-col items-center gap-4">
          <Image
            width={350}
            height={350}
            src={"/assets/profile.jpeg"}
            alt={image}
            className="h-[350px] w-[270px] rounded-xl object-cover"
          />

          <Link href={"/speakers"} className="w-full">
            <Button className="h-12 w-full bg-[#35246F] transition duration-200 hover:bg-[#35246F]">
              Todos os speakers
            </Button>
          </Link>
        </div>

        <div className="bg-blue-gray-50 relative flex w-full flex-col gap-2 rounded-xl bg-[#F3F3F3] p-3">
          <Link href={"/"} target="_blank" className="absolute right-2 top-2">
            <Button>
              <LinkedinIcon size={22} />
            </Button>
          </Link>

          <h1 className="text-3xl font-bold lg:text-xl">{name}</h1>

          <div className="text-justify text-sm md:text-base">{role}</div>

          <div className="mt-12 text-justify text-sm font-medium md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            earum nihil officiis quam accusantium provident ipsum deserunt
            veritatis fuga sapiente rem perspiciatis hic blanditiis eaque, ipsa,
            debitis esse veniam obcaecati. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatum earum nihil officiis quam
            accusantium provident ipsum deserunt veritatis fuga sapiente rem
            perspiciatis hic blanditiis eaque, ipsa, debitis esse veniam
            obcaecati.
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Tema da Palestra:</h1>

        <div className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          repudiandae recusandae eius aliquam quam dicta ut a, ullam
          necessitatibus totam mollitia, possimus officia voluptatum dolorum,
          enim voluptates soluta accusamus. Similique!
        </div>
      </div>
    </div>
  );
}
