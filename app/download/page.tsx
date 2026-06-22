import type { Metadata } from "next";
import { Download, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

export const metadata: Metadata = {
  title: "Download Hagah — Latest APK",
  description:
    "Download the latest Hagah APK for Android and follow the simple steps to install it on your device.",
};

const steps = [
  {
    step: "1",
    title: "Download the APK",
    desc: "Tap the Download button above. The hagah-latest.apk file will be saved to your device.",
  },
  {
    step: "2",
    title: "Allow unknown sources",
    desc: 'Open Settings > Security (or Apps) and enable "Install unknown apps" for your browser or file manager.',
  },
  {
    step: "3",
    title: "Open the file",
    desc: "Tap the downloaded hagah-latest.apk in your notifications or Files app to begin installing.",
  },
  {
    step: "4",
    title: "Install and open",
    desc: "Confirm the install, then open Hagah and start meditating on the Word of God.",
  },
];

export default function DownloadPage() {
  // Replace with the real APK URL once it is hosted (e.g. /hagah-latest.apk or a release link).
  const apkUrl = "/hagah-mobile.apk";

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Download {"&"} Test
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-foreground md:text-5xl">
          Get Hagah on your Android device
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          Download the latest APK and install it directly. iOS support is on the
          way.
        </p>
      </header>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Smartphone className="size-8" />
        </div>
        <div>
          <p className="font-serif text-2xl font-semibold text-foreground">
            Hagah for Android
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Version 1.0.0 &middot; APK &middot; ~18 MB
          </p>
        </div>
        <Button
          size="lg"
          className="mt-2 gap-2"
          render={<a href={apkUrl} download />}
        >
          <Download className="size-4" />
          Download APK
        </Button>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" />
          Safe install &middot; No account required to try
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-center font-serif text-2xl font-semibold text-foreground md:text-3xl">
          How to install on Android
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Installing an APK from outside the Play Store is safe when it comes
          from a source you trust. You can disable {'"'}unknown sources{'"'}{" "}
          again after installing.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-center font-serif text-2xl font-semibold text-foreground md:text-3xl">
          A look inside
        </h2>
        <div className="mt-8">
          <ScreenshotGallery />
        </div>
      </section>
    </main>
  );
}
