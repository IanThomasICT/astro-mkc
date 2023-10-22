import { TailwindIndicator } from "@/components/tailwind-indicator.astro";
import "@/styles/global.css";
import { Metadata } from "next";
import Navbar from "./navbar.astro";
import { cn } from "../lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const fontSans = League_Spartan({ subsets: ["latin"], variable: "--font-sans" });
export const fontMono = Bitter({ subsets: ["latin"], variable: "--font-mono" });
export const fontInter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "MKC - Services | %s",
    default: "MKC - Services | Wichita, KS",
  },
  description:
    "Intervention to help a person or family overcome problems. The goal is to improve an individual's mental health or a family's well-being and reduce or resolve troubling behaviors, beliefs, and thoughts and to improve relationships, social skills, and functioning.",
  keywords:
    "Counseling, MKC-Counseling, counseling, counselor, family counselor, family counseling, individual counselor, individual counseling, special needs children counselor, special needs children counseling, play therapy, TBRI, Trust Based Relational Intervention, Trust Based Relational Intervention Practitioner, Attachment Work, Trauma Work, TIPS-MAPP, Trauma Focused Cognitive Behavioral Therapy, Certified Youth Mental Health, Certified Play Therapist, Theraplay counselor, Theraplay counseling, Theraplay, Trainer of Sunshine Circles, therapists who take medicaid, therapists who take medicaid ks,",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn("relative grid overflow-x-hidden bg-white-diamond font-sans", fontSans.variable, fontMono.variable, fontInter.variable)}>
        <AxiomWebVitals />
        <div className='absolute inset-0 bg-background/30' />
        <Navbar className='sm:px-24' />
        <main className='z-10 mx-auto grid gap-36 lg:max-w-[90rem]'>{children}</main>

        {/* <Footer /> */}
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}

function Footer({ className }: { className?: string }) {
  return <div className={cn("sticky top-0 z-20 flex h-[--navbar-height] items-center justify-around gap-4 border-t border-t-primary/10 bg-background px-3 py-1", className)}></div>;
}
