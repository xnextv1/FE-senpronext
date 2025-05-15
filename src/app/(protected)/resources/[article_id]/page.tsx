// export async function getServerSideProps({ params }: { params: { article_id: string } }) {
//     const articleId = params.article_id;
//     const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/articles/${articleId}`)
'use client'

import { Card ,CardContent,CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RatingDialog from "./components/rate-dialog";
import { Star } from "lucide-react";

//     const response = await fetch(url, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     if (!response.ok) {
//         const errorData = await response.json().catch(() => null);
//         throw new Error(
//             `Failed to fetch articles: ${response.status} ${response.statusText}${
//                 errorData ? ` - ${JSON.stringify(errorData)}` : ''
//             }`
//         );
//     }
//     const data = await response.json();
//     return { props: { data } };
// }



export default function Page(){
    return (
        <Card className="mx-24 mt-8">
            <CardTitle className="self-center">Breaking the Stigma: Why Mental Health Deserves Equal Attention</CardTitle>
            <CardContent className="flex flex-col items-center">
                <div className="flex flex-col gap-4">

                    <Image className="self-center" src="https://res.cloudinary.com/djfue1ffl/image/upload/v1744032826/gkiver7ull6mvkwegeaj.webp" 
                    alt="image" width={600} height={100}></Image>
                    <Button className="w-1/10" variant="ghost">
                    <Star className="mr-2 h-4 w-4" />
                    Rate this article
                    </Button>
                    <RatingDialog open={false}  onClose={() => {} } onSubmit={() => {}}/>
                    <p>Mental health has long been sidelined in public discourse, often overshadowed by physical health despite being just as vital. Historically, societies have treated mental illness as a taboo subject, leading to years of neglect, misunderstanding, and underinvestment in mental health services. Yet today, as rates of anxiety, depression, and burnout continue to rise—especially among young adults, students, and working professionals—the urgency to prioritize mental well-being has never been clearer.</p>

<p>Mental health isn’t simply the absence of diagnosed mental illness; it is the foundation of our emotional, psychological, and social well-being. It affects how we think, feel, behave, handle stress, and make decisions. Good mental health allows people to realize their full potential, cope with the stresses of life, work productively, and contribute meaningfully to their communities.</p>

<p>When mental health is neglected, it has a cascading effect. Personal relationships suffer, academic and professional performance declines, and physical health deteriorates. Chronic stress and mental strain are linked to serious medical conditions such as heart disease, insomnia, and weakened immune response. According to the World Health Organization, depression is now the leading cause of disability worldwide, and suicide remains one of the top causes of death among individuals aged 15–29.</p>

<p>One of the biggest obstacles to improving mental health outcomes is stigma. Misconceptions, cultural taboos, and misinformation have created a culture of silence around mental illness. Many people fear judgment, discrimination, or appearing “weak,” which stops them from seeking help. This is further compounded in regions where mental health services are scarce, expensive, or nonexistent. In developing nations, the mental health gap—the disparity between those who need care and those who receive it—is staggering.</p>

<p>However, the global narrative around mental health is starting to shift. Public awareness campaigns, mental health advocates, and educational institutions are working to normalize mental health conversations. Companies are beginning to recognize that employee well-being is essential for long-term success. Workplace initiatives such as mental health days, access to counseling services, and employee assistance programs are becoming more common.</p>

<p>In parallel, technology is reshaping the accessibility of mental health support. Teletherapy platforms have made it possible to speak with licensed therapists remotely, breaking down geographical and logistical barriers. Mental health chatbots and AI-powered wellness apps provide daily emotional support, mindfulness training, and cognitive behavioral therapy tools, especially helpful for those who might not yet be ready for formal treatment.</p>

<p>Schools and universities are also taking a proactive stance. Many are integrating mental health education into their curricula, providing on-campus counseling, and training teachers to identify early signs of distress in students. By introducing emotional intelligence and resilience training at an early age, the next generation is more likely to treat mental health with the seriousness it deserves.</p>

<p>Community-driven initiatives are emerging in both urban and rural settings, from peer-support groups and mobile clinics to online forums where people can share their struggles anonymously. Faith-based organizations, cultural leaders, and local governments are slowly becoming part of the solution by destigmatizing mental illness through inclusive dialogue and outreach.</p>

<p>Despite progress, there is still much work to be done. Mental health must be treated with the same level of urgency and investment as physical health. Policymakers need to enact stronger protections and fund more research. Employers must prioritize sustainable mental health practices over one-time wellness seminars. And most importantly, individuals must continue to educate themselves and support those around them without judgment.</p>

<p>Mental health is not a luxury. It is a basic human right and a fundamental component of a functioning, compassionate society. Prioritizing mental well-being should not be reactive—it must be proactive, deeply embedded in education, workplace culture, healthcare policy, and daily life. The cost of inaction is too high. The time to act is now.</p>

                    <Button className="mt-4">Read More</Button>
                </div>
            </CardContent>
        </Card>    
    );
}