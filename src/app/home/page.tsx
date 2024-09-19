import HomeLayout from "@/components/layouts/home/HomeLayout";
import PostCard from "@/components/main/home/PostCard";
import React from "react";
import PostInput from "@/components/main/home/PostInput";
import RightSection from "@/components/main/RightSection";

const post = [
  {
    name: "Kevin Medeiros",
    time: "3m",
    content:
      "Sou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfaz",
  },
  {
    name: "Kevin Medeiros",
    time: "3m",
    content:
      "Sou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfaz  Sou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfaz Sou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfaz Sou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfazSou o Kevin e gosto de dar o bumbum sem o uso de nenhum tipo de auxilia para amenizar a dor pois isso me satisfaz",
  },
];

export default function page() {
  return (
    <div className="w-auto h-auto  gap-1 md:px-[2vw] flex   lg:px-[5vw]  m-auto">
      <HomeLayout />
      <div className="w-full gap-1 flex flex-col py-1 px-2 lg:px-0">
        <PostInput />
        {post.map((post, index) => (
          <PostCard
            key={index}
            name={post.name}
            time={post.time}
            content={post.content}
          />
        ))}
      </div>
      <div className="  xl:flex hidden  gap-1 w-1/2 ml-[2vw]  flex-col py-1 px-2 lg:px-0">
        <RightSection />
      </div>
    </div>
  );
}
