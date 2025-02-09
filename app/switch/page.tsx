"use client";

import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

export default function Home() {
  const [airplaneMode, setAirplaneMode] = useState(false);

  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen w-screen">
      <label className="flex space-x-4">
        <span className="font-medium">Airplane mode</span>
        <Switch.Root
          checked={airplaneMode}
          onCheckedChange={setAirplaneMode}
          className="data-[state=checked]:bg-sky-500 w-11 rounded-full bg-gray-800 shadow-inner shadow-black/50 active:bg-gray-600 active:data-[state=checked]:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 outline-sky-400"
        >
          <Switch.Thumb className="size-6 data-[state=checked]:bg-white block rounded-full data-[state=checked]:translate-x-[18px] shadow-sm transition bg-gray-200" />
        </Switch.Root>
      </label>
    </main>
  );
}
