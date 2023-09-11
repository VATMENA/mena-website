import Link from "next/link";
import { BsFillPeopleFill, BsDiscord } from "react-icons/bs"
import { FaBookReader, FaPlaneDeparture } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

export default function Home() {
    return (
        <div>
            <div className="bg-[url('/images/home-landing.png')] bg-cover bg-no-repeat">
                <div className="bg-[rgba(0,0,0,0.70)]">
                    <div className="h-screen flex flex-col justify-center ps-3 lg:ps-[15%]">
                        <h1 className="text-5xl">Welcome to VATMENA</h1>
                        <p>Providing VATSIM services in the Middle East & North Africa, from Morocco to Oman and everything in between.</p>
                        <Link href={"/"} className="btn btn-primary text-neutral-100 normal-case w-fit mt-2">Join Us</Link>
                    </div>
                </div>
            </div>
            <div className="my-16 flex justify-center items-center gap-8 flex-wrap lg: mx-8">
                <div className="card static w-96 bg-base-100 shadow-xl h-fit">
                    <figure className="px-10 pt-10 text-5xl text-primary">
                        <BsFillPeopleFill />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Be apart of our diverse community of simulation pilots and virtual air traffic controllers.</p>
                    </div>
                </div>
                <div className="card static w-96 bg-base-100 shadow-xl h-fit">
                    <figure className="px-10 pt-10 text-5xl text-primary">
                        <FaBookReader />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Kick start your virtual air traffic controller career with training from one of our vACCs.</p>
                    </div>
                </div>
                <div className="card static w-96 bg-base-100 shadow-xl h-fit">
                    <figure className="px-10 pt-10 text-5xl text-primary">
                        <FaPlaneDeparture />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Enjoy events between our vACCs and neighboring divisions, ranging from short hops to full days.</p>
                    </div>
                </div>
            </div>
            <div className="my-16 text-center">
                <p>Follow us for news, events, and updates.</p>
                <div className="mt-3 flex justify-center gap-3 flex-wrap">
                    <Link href="https://twitter.com/vatmena" target="_blank" className="btn btn-ghost bg-twitter"><RiTwitterXFill />Follow us on X</Link>
                    <Link href="https://discord.com/invite/Hvxm5Ky" target="_blank" className="btn btn-ghost bg-discord"><BsDiscord />Join our Discord</Link>
                </div>
            </div>
        </div>
    )
}
