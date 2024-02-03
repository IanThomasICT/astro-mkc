import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

type Props = {
  className?: string;
};

const EvaluationForm = dynamic(() => import("./EvaluationForm"), {
  ssr: true,
  loading: () => (
    <div className='flex w-full justify-center bg-background py-8 lg:pt-24'>
      <Loader2 className='h-24 w-24 animate-spin text-secondary' />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Psych Evaluation Form",
  description: "Fill out our form to schedule an appointment for a psychological evaluation",
  keywords: ["psychological evaluation", "form", "appointment"],
};

export default function EvaluationFormPage({ className }: Props) {
  return (
    <>
      <div className={cn("h-full py-2 font-inter lg:mx-auto lg:min-h-[100dvh] lg:w-[50dvw] lg:py-8", className)}>
        <EvaluationForm className='w-full' />
      </div>
    </>
  );
}
