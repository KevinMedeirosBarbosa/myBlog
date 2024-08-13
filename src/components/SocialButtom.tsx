import React from "react";

interface SocialButtonProps {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
  className?: string;
}

export default function SocialButtom({
  Icon,
  text,
  className,
}: SocialButtonProps) {
  return (
    <div className="select-none cursor-pointer hover:opacity-80 w-full flex gap-3 items-center py-2 rounded-lg pl-1 border-2 border-gray-500/40">
      <Icon className={`w-8 h-8 ${className}`} />
      <p className="text-sm text-gray-400 font-light event-none">
        {text}
      </p>
    </div>
  );
}
