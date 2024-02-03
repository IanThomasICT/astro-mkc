import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function CounselingContent() {
    return <div className='space-y-4'>
        <div className='space-y-4 px-4'>
            <p>
                We specialize in working with anyone who are experiencing difficulties due to <strong>attachment-related trauma</strong>, as well as{" "}
                <strong>children having difficulties with self-regulation</strong>. <br />
                <br />
                MKC services offers counseling to all ages of children, youth, adults and families.
            </p>
            <h2 className='italic'>Click on the counseling topic below to read more</h2>
        </div>

        <Accordion type='single' collapsible>
            <AccordionItem value='behavior'>
                <AccordionTrigger className='peer whitespace-nowrap text-accent lg:text-xl'>Behavioral Issues</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        <div>
                            <strong className='my-2 block text-lg'>Behavioral Issues:</strong>
                            <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-sm'>
                                <li className=''>Acting out, angry or disruptive behavior</li>
                                <li className=''>ADHD and ADD</li>
                                <li className=''>Adoption and foster care issues</li>
                                <li className=''>Attachment</li>
                                <li className=''>Behavioral problems at school or with peers</li>
                                <li className=''>Defiant, oppositional, or controlling behavior</li>
                                <li className=''>Developmental Disorders such as Autism Spectrum Disorders</li>
                                <li className=''>History of trauma, abuse or neglect</li>
                                <li className=''>Shy, withdrawn, or clingy behavior</li>
                                <li className=''>Sibling conflict</li>
                                <li className=''>Parent/Child relationship problems</li>
                            </ul>
                        </div>
                        <div>
                            <strong className='my-2 block text-lg'>Possible Outcomes:</strong>
                            <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-sm'>
                                <li className=''>Develop new strategies & solutions to problems & behaviors</li>
                                <li className=''>Develop respect and acceptance of self and others</li>
                                <li className=''>Learn to experience and express emotion in healthy ways</li>
                                <li className=''>Develop empathy and respect for thoughts and feelings of others</li>
                                <li className=''>Learn new social skills and relational skills with family</li>
                                <li className=''>Develop better mastery and security about their abilities</li>
                                <li className=''>Achieve mastery in their abilities to relate to others</li>
                                <li className=''>Feel successful & confident that needs will be met</li>
                                <li className=''>Become more responsible for behaviors and enjoy improved relationships</li>
                            </ul>
                        </div>
                        <div>
                            <strong className='my-2 block text-lg'>For Parents:</strong>
                            <ul className='list-inside list-disc space-y-1.5 whitespace-nowrap pl-4 lg:text-sm'>
                                <li className=''>Increase parenting skills</li>
                                <li className=''>Increase satisfaction</li>
                                <li className=''>Decrease stress</li>
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='individual-family'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Individual & Family Counseling</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p>Intervention to help a person or family overcome problems. The goal is to improve an individual&apos;s mental health or a family&apos;s well-being and reduce or resolve troubling behaviors, beliefs, and thoughts and to improve relationships, social skills, and functioning.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='play-therapy'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Play Therapy</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p>Play Therapy is a method of therapy that is based in the natural language of children and is a child and family therapy for enhancing and building attachment, self esteem, and trust in others. This is also a great option for teens when combined with other techniques, too.</p>
                    <p>This is a theoretically based mode of therapy that allows for the assessment and intervention of problematic emotions and behaviors for help with problem solving. Play therapy allows children to change the way they think about, feel toward, and resolve their concerns.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='tbri'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>TBRI</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p>
                        <strong>Trust Based Relational Intervention&reg;</strong> is an attachment-based, trauma-informed intervention that is designed to meet the complex needs of vulnerable children. TBRI® uses Empowering Principles to address physical needs, Connecting Principles for attachment needs, and Correcting Principles to disarm fear-based behaviors. While the intervention is based on years of attachment,
                        sensory processing, and neuroscience research, the heartbeat of TBRI® is connection.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='attachment'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Attachment Work</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p>Focus is on increasing the responsiveness and sensitivity of the caregiver to the child. An assessment of the quality of attachment is necessary as attachment is a two-way process that requires a caregiver response. Often “children from hard places” do not elicit appropriate caregiver responses.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='trauma'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Trauma Work</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p>
                        Children who have been traumatized are often confused; they may not completely understand what has happened, they may blame themselves; or they may hold on to myths because they&apos;ve been misled and deliberately given incorrect information. They need assistance with stress management, managing their feelings, coping skills, and help processing the trauma and become desensitized to it.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='assessments'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Assessments</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <div className='grid gap-4 lg:grid-cols-2'>
                        <div>
                            <span>The Marschak Interaction Method (MIM) is a technique for the observation of adult and child as they perform a series of structured tasks together.</span>
                            <strong className='my-2 block text-lg'>The MIM is useful for:</strong>
                            <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                                <li className=''>clinical evaluation of birth parent-child relationships</li>
                                <li className=''>ongoing evaluation/progress monitoring of interventions</li>
                                <li className=''>assessing the appropriateness of placement with foster or adoptive parents</li>
                                <li className=''>evaluating the relationship between a child and stepparent</li>
                                <li className=''>help answer questions about how parents interact when relating to their one child and how two or more sibling can elicit different responses in the same set of parents</li>
                                <li className=''>teachers and child care workers when there are problems in their relationship to particular children</li>
                            </ul>
                        </div>
                        <div>
                            <strong className='my-2 block text-lg'>Psycho-educational evaluations:</strong>
                            <ul className='mb-4 list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                                <li className=''>offered on a private pay basis to students outside the Wichita Public School district</li>
                            </ul>
                            <strong className='my-2 block text-lg'>Psychological Evaluation</strong>
                            <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                                <li className=''>tailored, individualized standardized testing to help answer referral question</li>
                                <li className=''>thorough social history to address the biological, psychological & social aspects of a person in their environment.</li>
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
}

export function PyschAssessmentContent() {
    return <div className='space-y-4'>
        <div className='space-y-4 px-4'>
            <p>Psychological Assessments are offered to screen for dyslexia, identify learning disabilities, assess for clinical syndromes, pre-adoption, and identify bonding and attachment issues.</p>
            <h2 className='italic'>Click on the assessments below to read more about them.</h2>
        </div>

        <Accordion type='single' collapsible>
            <AccordionItem value='dyslexia'>
                <AccordionTrigger className='peer whitespace-nowrap text-accent lg:text-xl'>Dyslexia Screening</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>Dyslexia screening helps provide risk assessment, strength of risk, and interpretive information for individuals who may have dyslexia.</p>
                    <strong className='my-2 block text-base'>Skills we would assess:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li className=''>Phonemic Proficiency - measures speed and accuracy of phonological manipulation</li>
                        <li className=''>Orthographic Fluency - measures speed of irregular word reading</li>
                        <li className=''>Decoding Fluency - measures speed of pseudoword reading</li>
                        <li className=''>Sentence Writing Fluency - measures speed of sentence composition</li>
                        <li className=''>Orthographic Choice - measures recognition spelling skills</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='psycho-education'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Psycho-educational Evaluations</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>
                        Psycho-educational evaluations examine cognitive, academic and adaptive aspects of an individual to help in identifying the presence of a learning disorder. <br />
                        <br />
                        <i>This type of evaluation is appropriate for determining dyslexia or other related learning disorders.</i>
                    </p>
                    <strong className='my-2 block text-base'>Skills we would assess:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li className=''>Evaluation of cognitive ability</li>
                        <li className=''>Assessment of academic skills</li>
                        <li className=''>Insurance will not cover, but you will receive a superbill to submit to your insurance company</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='pre-adoption'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Play Therapy</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>Pre Adoption Psychological evaluation may be a requirement for international adoption. The purpose is to determine the adoptive parents&apos; current levels of social, emotional, and behavioral functioning in regard to becoming adoptive parents.</p>
                    <strong className='my-2 block text-base'>The evaluation would involve:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li className=''>Clinical interview</li>
                        <li className=''>Personality assessment</li>
                        <li className=''>Assessment of resiliency and coping skills</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='psych-eval'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Psychological Evaluation</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>
                        Psychological Evaluation is a more <strong>clinically oriented evaluation</strong> to look at personality or temperament and clinical syndromes as they relate to a person&apos;s functioning. <br />
                        <br />
                        <i>This type of evaluation is useful for the clarification of diagnoses and garnering of treatment recommendations. The measures used depend on the age of the child.</i>
                    </p>
                    <strong className='my-2 block text-base'>Assessments by age:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li className=''>Developmental Screening from 10 days of age</li>
                        <li className=''>Toddler assessment from 2 ½ years of age</li>
                        <li className=''>School age assessment from 5 years of age</li>
                        <li className=''>Young adult to older adult assessment</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='bonding-assessment'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Parent/Child and Bonding Assessments</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>The Marschak Interaction Method (MIM) is a technique for the observation of adult and child as they perform a series of structured tasks together.</p>
                    <strong className='my-2 block text-base'>The MIM is useful for:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li className=''>clinical evaluation of birth parent-child relationships</li>
                        <li className=''>ongoing evaluation/progress monitoring of interventions</li>
                        <li className=''>assessing the appropriateness of placement with foster or adoptive parents</li>
                        <li className=''>evaluating the relationship between a child and stepparent</li>
                        <li className=''>help answer questions about how parents interact when relating to their one child and how two or more sibling can elicit different responses in the same set of parents</li>
                        <li className=''>teachers and child care workers when there are problems in their relationship to particular children</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className='grid justify-center px-3 py-4 lg:justify-start lg:px-6'>
            <a href='/evaluation-form'>
                <Button variant={"secondary"} size='lg' className='mb-10 py-6 text-base shadow lg:text-lg'> Schedule an Evaluation </Button>
            </a>
        </div>
    </div>
}

export function AdoptionContent() {
    return <div className='space-y-4'>
        <div className='space-y-4 px-4'>
            <p className='text-balance'>
                MKC Services is a resource for adoptive families who are seeking to complete an infant adoption, domestic adoption, or international adoption in the state of Kansas and{" "}
                <strong>require a home study as part of their adoption process.</strong> Post placement services are also offered per your agency&apos;s requirements.
            </p>

            <strong className='my-2 block text-lg'>Home Study</strong>
            <p>
                Essentially, a home study is a report to the court that verifies your ability to provide for a child, vets your background, and establishes your ability to care for a child emotionally, physically and financially. MKC Services home studies are written in compliance with the guidelines set forth by the State of Kansas.
                <br />
                <br /> The scope of service at this time is conducting a home assessment (home study) and updating an existing home study for an independent, domestic or international adoption and post placement visits. <br />
                <br />
                <strong>This is not a Child Placing Agency</strong> and there are no services available to match prospective adoptive parents with birth mothers or children who are available for adoption.
            </p>
            <h2 className='italic'>Click on the services below to read more about them.</h2>
        </div>

        <Accordion type='single' collapsible>
            <AccordionItem value='home-study-process'>
                <AccordionTrigger className='peer whitespace-nowrap text-accent lg:text-xl'>
                    Home Study Process <strong className='text-red-700/50'>Start Here</strong>
                </AccordionTrigger>
                <AccordionContent className='space-y-4 py-2 tracking-wide shadow-inner lg:text-base'>
                    <h1 className='my-2 text-center text-lg font-medium'>So, you&apos;ve decided to adopt!</h1>
                    <p className='text-balance text-center'>
                        You now need to obtain a home study. Here is a{" "}
                        <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='/forms/check_list.pdf'> checklist </a>{" "}
                        to help get you organized:
                    </p>
                    <strong className='block text-lg'>Checklist:</strong>
                    <ol className='list-inside list-decimal space-y-4 pl-1 text-sm'>
                        <li className=''>Call 316-371-7226 for an informational phone consultation.</li>
                        <li className=''>Complete the Home Study Application - Sent via secure email.</li>
                        <li className=''>Return the application with the $200 non-refundable processing fee, which is applied to the total cost.</li>
                        <li className=''>Provide the email addresses of three personal references.</li>
                        <li className=''>
                            Check with your agency or attorney regarding the type of criminal background check they require. Choose the one your attorney or agency recommends:
                            <ul>
                                <li className=''>
                                    A manual background check that does not involve fingerprinting can be obtained at{" "}
                                    <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='/forms/Record-Check-Form.pdf' target='_blank'> Certified Kansas Bureau of Investigation </a>
                                    . Follow the link and complete a background check for each adult in your home.
                                </li>
                                <li className=''>
                                    To begin the process for a fingerprint background check, follow the{" "}
                                    <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='https://fbi.fieldprint.com' target='_blank'> Fieldprint </a>{" "}
                                    link. Complete one for each adult in your home.
                                </li>
                            </ul>
                        </li>

                        <li className=''>
                            Follow the link to complete your{" "}
                            <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='/forms/CANIS-PPS1011.pdf' target='_blank'> Child Abuse and Neglect (CANIS) </a>{" "}
                            background check for each adult in your home.
                        </li>

                        <li className=''>
                            Follow the link to obtain a health assessment form for each person in your home and have these completed by your physician.
                            <br />
                            <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='/forms/certificate-of-health-assessment-16+.pdf' target='_blank'> Health Form 16 & older </a>
                            <br />
                            <a className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='/forms/health-assessment-for-children.pdf' target='_blank'> Health Form 15 & younger </a>
                        </li>
                        <li className=''>Once the Home Study Application is received the home study interview will be scheduled.</li>
                        <li className=''>All accompanying documents (KBI, CANIS, health assessment, and references) must be obtained prior to interview date. These forms are required to finalize the study.</li>
                    </ol>
                    <p>$200 Home Study Application Fee is non-refundable and will go toward the total service fee.</p>
                    <p>All fees, including mileage, are due prior to release of any reports.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='for-adoption'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Home Study for Adoption - $650</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <strong className='my-2 block text-base'>Study will involve:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li>Review of home study application</li>
                        <li>One home visit interview</li>
                        <li>Writing and compiling of the study</li>
                        <li>Documentation - 3 original documents</li>
                        <li>Administration costs (scanning, copying, phone calls and standard postage, etc…)</li>
                    </ul>
                    <p>
                        *The assessment and report shall have been completed no more than 1 year prior to the filing of the petition for adoption. Citation: Ann. Stat. § 59-2132 <br />
                        **This basically means your home study is current for one year
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='international-study'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>International Home Study - $1200</AccordionTrigger>
                <AccordionContent className='space-y-4 py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <p className='text-balance'>
                        A home study that is written for an international adoption must meet the state&apos;s criteria, the international agency&apos;s criteria, and the criteria set forth by the country and also by the USICS. As a result of the myriad of factors, this type of home study tends to be more expensive. Some international agencies prefer to work with certain types of providers.
                    </p>
                    <i className='block'>
                        If you need an international home study completed, please send a message through our{" "}
                        <a href='/#contact-form' className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800'> Contact form </a>
                        . A free consultation with your international agency will determine if services can be rendered.
                    </i>
                    <strong className='my-2 block text-base'>International evaluation would involve:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li>Consultation with international agency (this could be multiple consultations)</li>
                        <li>Compliance with the international agency&apos;s standards</li>
                        <li>Review of the study by the agency prior to submission to the agency</li>
                        <li>Review of information from the application and other sources</li>
                        <li>Writing and compiling of the study</li>
                        <li>Documentation - 4 original documents</li>
                        <li>Administration costs (scanning, copying, phone calls and standard postage, etc…)</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='addendum'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Addendum - $90/hour</AccordionTrigger>
                <AccordionContent className='py-2 text-xs tracking-wide shadow-inner lg:text-base'>
                    <strong className='my-2 block text-base'>Addendum includes:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li>Documentation of any change needed to the study within the twelve month approval period</li>
                        <li>For example, a change in residence, addition of a family member or any other major life event</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='annual-update'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Home Study Update (annual) - $300</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <strong className='my-2 block text-base'>Annual update requires:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li>Review of updated documents</li>
                        <li>One home visit interview</li>
                        <li>Writing and compiling of the study</li>
                        <li>Administration costs (scanning, copying, phone calls and standard postage, etc…)</li>
                        <li>Documentation - 3 original documents for domestic and 4 original documents for international</li>
                        <li>Fee due with submission of the updated materials, prior to the home visit</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='post-placement'>
                <AccordionTrigger className='whitespace-nowrap text-accent lg:text-xl'>Post Placement Reports - $250</AccordionTrigger>
                <AccordionContent className='text-xs tracking-wide shadow-inner lg:text-base'>
                    <strong className='my-2 block text-base'>Post placement reports involve:</strong>
                    <ul className='list-inside list-disc space-y-1.5 pl-4 lg:text-base'>
                        <li>One visit</li>
                        <li>Developmental screening</li>
                        <li>Preparation and writing of post placement report</li>
                        <li>Administrative costs (scanning, copying, phone calls, standard postage, etc.)</li>
                        <li>Documentation - 2 original documents</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <h1 className='block pt-4 text-xl font-semibold text-accent'>Additional Fees</h1>
        <p>
            Mileage rate: no charge if travel distance is within a 60 mile radius. After 60 miles, a rate of $0.57 per mile is charged.
            <br />
            <br />
            Additional documents are $10 per original
        </p>
    </div>
}
