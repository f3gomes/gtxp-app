import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { Images } from "lucide-react";
import { UserSearch } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { UserPen } from "lucide-react";
import { FileCheck2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";

const topIcons = [MessageCircle, Bell, CircleUserRound];
const socialIcons = [Linkedin, Instagram, Youtube, Mail];
const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: UserPen },
  { title: "Feedbacks", icons: FileCheck2 },
];
const navItems = [
  { title: "Início", link: "/" },
  { title: "Programação", link: "/" },
  { title: "Notícias", link: "/" },
  { title: "Fotos", link: "/" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-green-600">
      {/* Header */}
      <header className="relative flex h-[134px] w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image
              width={215}
              height={78}
              src="/assets/Design_sem_nome-removebg-preview.png"
              alt="Congresso Logo"
              className="object-contain"
            />
          </div>
        </div>
        <nav className="left-[422px] top-[54px] flex h-[25px] w-[586px] items-center justify-between">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-base font-medium text-black hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4 p-4">
          {topIcons.map((Item, index) => (
            <button
              key={index}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
            >
              <Item size={20} className="text-[#FFFFFF]" />
            </button>
          ))}
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto flex w-full flex-grow flex-col gap-4 p-2 md:flex-row md:p-6">
        <aside className="h-12 w-full items-center rounded-2xl bg-white px-4 shadow-md md:h-[600px] md:w-[330px] md:p-4 md:px-0">
          <div className="mb-4 flex items-center justify-between">
            {socialIcons.map((Item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="[&_svg]:h-6 [&_svg]:w-6"
              >
                <Item size={64} className="text-[#35246F]" />
              </Button>
            ))}
          </div>

          <div className="hidden md:block">
            {sideIcons.map((Item, index) => (
              <div key={index}>
                <hr className="my-2 border-gray-300" />
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <Item.icons size={40} className="text-[#35246F]" />
                  <span className="font-inter text-lg">{Item.title}</span>
                </Button>
              </div>
            ))}
          </div>
        </aside>

        <aside className="h-[600px] w-[330px] rounded-2xl bg-white p-4 shadow-md">
          <hr className="my-4 border-gray-300" />
          <div className="mb-4 flex items-center gap-2 font-semibold text-gray-400">
            <span>Patrocinado</span>
          </div>
        </aside>
      </main>
    </div>
  );
}