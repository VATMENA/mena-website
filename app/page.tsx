import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { links } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsFillPeopleFill, BsDiscord } from "react-icons/bs"
import { FaBookReader, FaPlaneDeparture } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

export default function Home() {
    return (
        <div>
            <div className="bg-[url('/images/home-landing.png')] bg-cover bg-no-repeat">
                <div className="bg-[rgba(0,0,0,0.70)]">
                    <div className="h-screen flex flex-col justify-center container mx-auto">
                        <h1 className="text-5xl">Welcome to VATMENA</h1>
                        <p>Providing VATSIM services in the Middle East & North Africa, from Morocco to Oman and everything in between.</p>
                        <Link href={"/"} className={cn(buttonVariants({ variant: "default" }) , "w-fit mt-2")}>Join Us</Link>
                    </div>
                </div>
            </div>
            <div className="my-16 flex justify-center items-center gap-8 flex-wrap lg: mx-8 container mx-auto">
                <Card className="w-3/12">
                    <CardHeader>
                        <CardTitle className="flex justify-center text-primary text-4xl"><BsFillPeopleFill /></CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Be apart of our diverse community of simulation pilots and virtual air traffic controllers.</p>
                    </CardContent>
                </Card>

                <Card className="w-3/12">
                    <CardHeader>
                        <CardTitle className="flex justify-center text-primary text-4xl"><FaBookReader /></CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Kick start your virtual air traffic controller career with training from one of our vACCs.</p>
                    </CardContent>
                </Card>

                <Card className="w-3/12">
                    <CardHeader>
                        <CardTitle className="flex justify-center text-primary text-4xl"><FaPlaneDeparture /></CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Enjoy events between our vACCs and neighboring divisions, ranging from short hops to full days.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="my-16 text-center">
                <p>Follow us for news, events, and updates.</p>
                <div className="mt-3 flex justify-center gap-3 flex-wrap">
                    <Link href={links.twitter} target="_blank" className={cn(buttonVariants({ variant: "ghost" }), "bg-twitter")}><RiTwitterXFill className="me-1" />Follow us on X</Link>
                    <Link href={links.discord} target="_blank" className={cn(buttonVariants({ variant: "ghost" }), "bg-discord")}><BsDiscord className="me-1" />Join our Discord</Link>
                </div>
            </div>
        </div>
    )
}
