"use client";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/16/solid";
import * as Slider from "@radix-ui/react-slider";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen w-screen">
      <form
        action={(formData) => {
          let data = Object.fromEntries(formData);

          alert(JSON.stringify(data));
        }}
        className="flex items-center justify-center flex-col gap-5"
      >
        <div className="group flex items-center gap-3 transition-[margin] hover:-mx-3 *:duration-[150ms] cursor-grab active:cursor-grabbing touch-none select-none w-[300px]">
          <SpeakerXMarkIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />

          <Slider.Root
            className="relative flex h-1.5 items-center w-3/6 group-hover:h-4 flex-1"
            name={"slider"}
            defaultValue={[50]}
          >
            <Slider.Track className="relative h-full grow rounded-full overflow-hidden bg-gray-700 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-2 group-has-[:focus-visible]:outline-sky-500">
              <Slider.Range className="absolute h-full bg-gray-300 group-hover:bg-white" />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>

          <SpeakerWaveIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
        </div>

        <button type="submit">Save</button>
      </form>
    </main>
  );
}
