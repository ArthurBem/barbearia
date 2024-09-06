"use client"
import CardEquipe from "./ui/cardEquipe";
import teamMembers from "../data/teamMembers.json"
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function Team() {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className="h-[590px] w-full bg-primary-default flex items-center flex-row px-[180px]">
            <svg width="200" height="400" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" fill="#909090">
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
                    transform="rotate(-90, 100, 200)"
                    className="text-[#909090] font-poppins text-[40px] tracking-wider">
                    NOSSA EQUIPE
                </text>
            </svg>
            <div className="flex overflow-x-auto space-x-9 focus:scroll-auto scrollbar-hide"
                {...events}
                ref={ref}
            >
                {teamMembers.map((member, index) => (
                    <div className="inline-block">
                        <CardEquipe
                            key={index}
                            url={member.url}
                            nome={member.nome}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}