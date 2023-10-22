import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { recommendedBooks } from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

type Props = {
  className?: string;
};

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: true,
  loading: () => (
    <div className='flex w-full justify-center pt-24'>
      <Loader2 className='h-24 w-24 animate-spin text-secondary' />
    </div>
  ),
});

export default function Main() {
  return (
    <div className='space-y-12 overflow-x-hidden lg:space-y-20'>
      {/* Hero Section */}
      <article className='font-sans md:pt-12 '>
        <div className='mx-auto flex w-fit flex-col md:mx-24 md:flex-row md:gap-4'>
          <div className='mx-4 grow space-y-5 md:mx-0 md:grow-0 md:basis-3/5 md:space-y-10'>
            <h1 className='my-6 text-[2rem] font-semibold leading-none tracking-tighter text-neutral-700 md:text-[4rem]'>
              <span>Trauma-Informed</span>
              <span className='block bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent md:whitespace-nowrap'>Attachment-Focused</span>
              <span>Therapy for all ages</span>
            </h1>
            <span className='block max-w-[36ch] text-lg leading-relaxed tracking-tight text-primary md:text-2xl'>
              Equipping families to <strong>strengthen their bond</strong> and <strong>resolves issues</strong> that prevent full participation in meaningful relationships and major life functions.
            </span>
            <div className='flex flex-col items-start gap-4 md:mt-6 md:flex-row'>
              <Link className='w-2/3 md:w-auto' href='/services'>
                <Button variant={"outline"} className='peer w-full border-accent py-3 hover:bg-accent/80 md:p-6 md:text-lg'>
                  View our Services
                </Button>
              </Link>
              <Link className='w-2/3 md:w-auto' href={siteConfig.links.evaluationAppt}>
                <Button variant={"secondary"} className='peer w-full border border-primary/20 py-3 brightness-95 hover:brightness-100 md:p-6 md:text-lg'>
                  Request an Evaluation
                </Button>
                <span className='hidden pt-2 text-center text-xs text-primary/50 opacity-0 duration-200 peer-hover:opacity-100 md:block'>Psych evaluation appointment</span>
              </Link>
            </div>
          </div>
          <div className='row-start-1 hidden w-fit items-center py-5 md:px-10 lg:flex '>
            <img src={"/images/laughing-kids.jpg"} alt='MKC-services - Children' className='rounded-lg shadow drop-shadow-2xl' />
          </div>
        </div>

        <div id='stripe' className='/shadow-lg mt-12 bg-accent/70 py-4'>
          <h1 className='text-center text-3xl font-semibold text-primary md:text-6xl lg:ml-24 lg:text-start'>Meet the Clinician</h1>
        </div>
      </article>

      <article className='relative max-h-fit md:mx-24'>
        <div className='mb-10 flex flex-col md:flex-row md:gap-12'>
          <div className='md:mx-none mx-auto grid max-w-fit flex-col gap-2 md:flex'>
            <img src={"/images/marcia.png"} alt='Marcia Kennedy' className='mx-auto w-52 md:w-72' />
            <span className='mb-4 text-center text-2xl'>Marcia Kennedy</span>
            <ul className='grid w-full gap-2 pl-10 text-xs md:pl-14 md:text-start md:text-base'>
              <li className='flex items-center gap-4 md:whitespace-nowrap'>
                <Check className='min-w-5 -ml-6 text-green-700' /> <span className='block grow'>Licensed Specialist Clinical Social Worker</span>
              </li>
              <li className='flex items-center gap-4 md:whitespace-nowrap'>
                <Check className='min-w-5 -ml-6 text-green-700' /> <span className='block grow'>Licensed Clinical Psychotherapist</span>
              </li>
              <li className='flex items-center gap-4 md:whitespace-nowrap'>
                <Check className='min-w-5 -ml-6 text-green-700' /> <span className='block grow'>Training in Adoption Competency</span>
              </li>
              <li className='flex items-center gap-4 md:whitespace-nowrap'>
                <Check className='min-w-5 -ml-6 text-green-700' /> <span className='block grow'>25+ years working with &quot;children from hard places&quot;</span>
              </li>
            </ul>

            <Button
              variant={"outline"}
              size={"lg"}
              className='mx-auto mt-2 max-w-fit border border-border/25 bg-secondary text-xs md:border-secondary md:bg-background md:text-base md:hover:bg-secondary'>
              <Link href={"https://mkc-services.com/client-downloads/expertise-kennedy.pdf"}>View full expertise</Link>
            </Button>
          </div>
          <div className='hidden max-w-[60ch] items-center space-y-6 text-xl leading-normal tracking-tight text-primary/90 lg:grid'>
            <p className='text-black'>
              I am a seasoned Licensed Specialist Clinical Social Worker and Licensed Clinical Psychotherapist with extensive expertise in various areas. With over 25 years of experience, I have
              worked extensively in domestic infant adoption, international adoption, and adoption through foster care.
            </p>
            <div className='space-y-6'>
              <p>
                <span className='mb-2 block text-2xl font-semibold text-black'>Methodology and Passion</span>
                My approach to therapy is trauma-informed and attachment-focused, and I am dedicated to providing assessment, treatment, and psychological testing counseling to individuals and
                families of all ages. My passion lies in strengthening relationships and addressing obstacles that impede meaningful connections and major life functions.
              </p>
              <p>
                <span className='mb-2 block text-2xl font-semibold text-black'>Other specialties</span>I specialize in supporting attachment, facilitating healing from trauma and loss, and ensuring
                the safety and happiness of adoptive and foster families. Additionally, I offer adult attachment-focused therapy to help individuals navigate and enhance their interpersonal bonds.
              </p>
            </div>
          </div>
        </div>

        {/* Training logos */}
        <div className='flex flex-wrap justify-center gap-10 md:mx-24 md:gap-14'>
          <img src={"/images/logos/masgutova-logo.png"} alt='Masgutova Method logo' className='md:min-w-16 h-12 w-fit' />
          <img src={"/images/logos/SomaticExperiencing-logo.png"} alt='Somatic Experiencing logo' className='md:min-w-16 h-12 w-fit' />
          <img src={"/images/logos/TAC-logo.png"} alt='MKC-counseling TAC - Training for Adoption Competency' className='md:min-w-16 h-12 w-fit' />
          <img src={"/images/logos/TBRI_logo.png"} alt='MKC-counseling TBRI Practitioner' className='md:min-w-16 h-12 w-fit' />
          <img src={"/images/logos/Theraplay-logo.png"} alt='MKC-counseling Theraplay' className='md:min-w-16 h-12 w-fit' />
          <img src={"/images/logos/CASE-logo.png"} alt='MKC-counseling C.A.S.E. - Center for Adoption Support and Education' className='md:min-w-16 h-12 w-fit' />
        </div>
      </article>

      <article className='flex flex-col-reverse gap-6 px-8 md:flex-row md:p-8 lg:px-24 xl:gap-16'>
        <div className='grid h-fit flex-auto grid-cols-2 gap-4'>
          <div className='grid justify-center gap-2 rounded-lg border border-neutral-100 bg-background p-4 shadow'>
            <img src='/images/therapy-icon.png' alt='hand holding a heart - Icons8' className='mx-auto w-24' />
            <h3 className='block text-center text-xs font-semibold md:text-lg'>Counseling</h3>
            <p className='hidden h-16 text-center text-sm md:block'>Address trauma and self-regulation challenges through expert attachment-focused therapy.</p>
          </div>
          <div className='grid justify-center gap-2 rounded-lg border border-neutral-100 bg-background p-4 shadow'>
            <img src='/images/adoption-icon.png' alt='multi-ethnic family - Icons8' className='mx-auto w-24' />
            <h3 className='block text-center text-xs font-semibold md:text-lg'>Adoption</h3>
            <p className='hidden h-16 text-center text-sm md:block'>Comprehensive home studies and support for Kansas adoptive families, ensuring a loving environment.</p>
          </div>
          <div className='grid justify-center gap-2 rounded-lg border border-neutral-100 bg-background p-4 shadow'>
            <img src='/images/psych-assess-icon.png' alt='brain - Icons8' className='mx-auto w-24' />
            <h3 className='block text-center text-xs font-semibold md:text-lg'>Psychological Assessment</h3>
            <p className='hidden h-16 text-center text-sm md:block'>Precise evaluations uncovering dyslexia, learning issues, clinical insights, and attachment concerns.</p>
          </div>
          <div className='grid justify-center gap-2 rounded-lg border border-neutral-100 bg-background p-4 shadow'>
            <img src='/images/aroma-icon.png' alt='aroma - Icons8' className='mx-auto w-24' />
            <h3 className='block text-center text-xs font-semibold md:text-lg'>Somatic Therapy</h3>
            <p className='hidden h-16 text-center text-sm md:block'>Holistic healing for the body and mind, fostering relaxation and well-being.</p>
          </div>
        </div>
        <div className='h-full w-4/5 space-y-4 md:w-full lg:basis-4/5 lg:pr-8'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Let us support your family&apos;s diverse needs and challenges</h2>
          <p className='hidden leading-loose text-primary/70 md:block lg:text-[1.125rem]'>
            Our range of specialized services encompass counseling, adoption support, psychological assessments, holistic wellness therapies, and more.
          </p>
          <p className='text-sm leading-loose text-primary/70 md:hidden'>Join us in embracing healing, growth, and deeper family connection.</p>
          <div className='md:pt-4'>
            <Link href={"/services"}>
              <Button variant={"ghost"} className='inline-flex items-center gap-2 rounded-md border border-accent/40 text-xs'>
                <span>Explore our services</span> <ChevronRight className='w-4 md:w-5' />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <article className='grid gap-12 pb-14 md:flex'>
        <div className='space-y-6 px-8 sm:my-auto sm:ml-24 sm:px-16'>
          <h1 className='text-3xl font-semibold md:text-[2.5rem]'>Contact us</h1>
          <ContactForm id='contact-form' className={cn("font-sans")} />
        </div>

        <div id='stripe' className='z-10 row-start-1 h-full bg-secondary bg-opacity-60 px-8 py-12 shadow md:rounded-l-xl md:px-10'>
          <img src={"/images/kids-with-blocks.jpg"} alt='kids with blocks' className='rounded-lg shadow drop-shadow-2xl' />
        </div>
      </article>
      <span className='absolute bottom-1.5 right-2 text-sm text-neutral-600 sm:right-16'>Icon images by Icon8</span>
    </div>
  );
}

function FAQ({ className }: Props) {
  return (
    <Accordion type='multiple' className={cn("h-full", className)}>
      <AccordionItem value='question1'>
        <AccordionTrigger className='text-xl text-accent'>Who has to be present?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>The adoptive parent(s) must be present as well as any children who are also in the home.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='question2'>
        <AccordionTrigger className='text-xl text-accent'>Will you walk through my home?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>Yes. I will walk through your home to ensure there is adequate space and safety features.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='question3'>
        <AccordionTrigger className='text-xl text-accent'>Are you going to evaluate how clean my house is?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>I will not go through your home with a white glove! The expectation is that your home is reasonably clean.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='question4'>
        <AccordionTrigger className='text-xl text-accent'>Will a DUI or criminal record prohibit me from being recommended for adoption?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>
          There are certain offenses that will prohibit your ability to adopt and this question should be directed to an attorney.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='question5' className=''>
        <AccordionTrigger className='text-xl text-accent'>Do I need to use the health forms you provide?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>
          No. They are provided for your convenience. Your doctor&apos;s office can use their preferred method to show you have no mental or physical health problems that would interfere with your
          caring for the health, safety and wellbeing of a child.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='question6'>
        <AccordionTrigger className='text-xl text-accent'>How long will the appointment take?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>
          Generally three to three and a half hours. All of the information you provided on the Application will be entered into the home study template prior to the interview. This is the reason for
          the application fee, which is non refundable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='question7'>
        <AccordionTrigger className='text-xl text-accent'>Can I make payments?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>No. All fees are due at the time of service (day of the appointment) or before.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='question8'>
        <AccordionTrigger className='text-xl text-accent'>How long will it take for you to write up the home study?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>
          Generally, this will take a week to ten days. You will have a chance to review your study prior to it being completed and signed. This is to ensure correct information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='question9'>
        <AccordionTrigger className='text-xl text-accent'>What else do I need to know?</AccordionTrigger>
        <AccordionContent className='max-w-[90%] text-xl tracking-wide'>
          Avoid procrastinating! The background checks really don&apos;t take long to run and you can do them online. If you have a current exam on file with your doctor&apos;s office they may sign
          off on your health assessment without needing to make an appointment; that will be up to your doctor. Be sure to let your references know that they will be contacted and ask them to respond
          as quickly as possible. These items will be attachments to your home study and are needed for completion of the study.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function RecommendedReading({ className }: Props) {
  return (
    <div className={className}>
      <h3 className='pb-2 text-2xl font-semibold text-accent'>Recommended Reading</h3>

      <div className='flex-wrap gap-2 md:flex md:flex-nowrap'>
        {recommendedBooks.map((book) => (
          <>
            <a key={book.href} href={book.href} className='flex-auto duration-150 ease-in-out hover:brightness-90'>
              <img src={book.src} alt='' className='h-32 w-[5.5rem] rounded-sm shadow' />
            </a>
          </>
        ))}
      </div>
    </div>
  );
}
