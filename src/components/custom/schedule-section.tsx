"use client";

import { useState } from "react";
import WorkshopCard from "./workshop-card";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Workshop } from "./workshop-details";

interface ScheduleSectionProps {
  date: string;
  sessions: Workshop[];
}

export default function ScheduleSection({
  date,
  sessions,
}: ScheduleSectionProps) {
  const [filter, setFilter] = useState("Todos");

  const filteredSessions = sessions?.filter(
    (session) => filter === "Todos" || session?.type === filter,
  );

  return (
    <div className="relative">
      <div className={"left-0-0 absolute top-0 z-50 flex items-center"}>
        <SlidersHorizontal className="text-[#35246F]" size={22} />
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            e.target.blur();
          }}
          className="w-28 cursor-pointer appearance-none rounded bg-transparent p-2 text-sm"
        >
          <option value="Todos">Todos</option>
          <option value="Workshop">Workshop</option>
          <option value="Palestra">Palestra</option>
        </select>
      </div>

      <div
        className={cn(
          sessions.length === 1 && "justify-center",
          "relative z-10 mt-6 flex h-full flex-col flex-wrap items-center gap-2",
        )}
      >
        <div className="mb-4 flex items-center justify-between pl-3">
          <div className="mx-auto mr-auto flex h-[39px] w-[160px] items-center justify-center rounded-[18px] bg-orange-500 px-4">
            <h2 className="text-center font-sans text-base font-extrabold uppercase leading-6 tracking-wider text-white">
              {date}
            </h2>
          </div>
        </div>

        {filteredSessions.map((session: Workshop) => (
          <div
            key={session?.workshopId}
            className="relative w-[345px] rounded-[27px] bg-white py-1 pl-3"
          >
            <div className="flex flex-col gap-4">
              <div className="flex min-h-[240px] w-[325px] flex-col rounded-[27px] bg-[#35246F] shadow-md">
                <div className="px-4 pt-2 text-center text-white">
                  <span className="font-semibold">
                    {session?.type} | {session?.time}
                  </span>
                </div>
                <WorkshopCard workshop={session} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
