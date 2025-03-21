"use client";

import { listUsers } from "@/actions/listUsers";
import ParticipantCard from "./participants-card";
import { useEffect, useState } from "react";

export default function ParticipantsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [participantsList, setParticipantsList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const list: any = await listUsers();
      setParticipantsList(list?.data?.updatedList);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  return (
    <div className="flex h-full min-h-[600px] flex-col items-center justify-start gap-6 rounded-xl bg-white p-4 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Participantes
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {!isLoading ? (
          <>
            {participantsList.map(
              (item: any) =>
                item.type === "CONGRESSMAN" && (
                  <ParticipantCard
                    key={item.id}
                    index={item.id}
                    name={item.name}
                    role={item.role}
                    activities={item.role}
                    image={item.profileImgUrl}
                  />
                ),
            )}
          </>
        ) : (
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-[#35246F]"></div>
        )}
      </div>
    </div>
  );
}
