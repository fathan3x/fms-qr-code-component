import { cn } from "cn";
import image from "./assets/qr-code.webp";
import "@fontsource-variable/outfit";

export function App() {
  const style = {
    "bg-slate-300": "bg-[hsl(212,45%,89%)]",
    "text-slate-900": "text-[hsl(218,44%,22%)]",
    "text-slate-500": "text-[hsl(216,15%,48%)]",
  };
  return (
    <main
      className={cn(
        "w-screen h-screen flex items-center justify-center p-6",
        style["bg-slate-300"],
      )}
      style={{ fontFamily: "Outfit Variable" }}
    >
      <section className="p-6 bg-white rounded-xl max-w-94 w-full space-y-6 shadow-xl">
        <img src={image} className="rounded-md max-h-80 w-full object-cover" />
        <h1
          className={cn(
            "text-center text-xl sm:text-[26px] font-bold leading-tight px-4",
            style["text-slate-900"],
          )}
        >
          Improve your front-end skills by building projects
        </h1>
        <p
          class={cn(
            "text-center font-medium pb-6 px-4 sm:text-lg",
            style["text-slate-500"],
          )}
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}
