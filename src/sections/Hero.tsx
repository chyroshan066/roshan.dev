import { GradientSpheres } from "@/components/GradientSphere";
import Image from "next/image";

export const Hero = () => {
    return <>
        <section id="home" className="h-dvh relative text-white-50 px-5 md:p-0">

            <GradientSpheres sphere1Class={"gradient-sphere sphere-1"} sphere2Class={"gradient-sphere sphere-2"} />

            <div className="h-full w-full flex-center">
                <div className="container relative h-full w-full">
                    <div className="md:mt-40 mt-20">
                        <p className="font-medium md:text-2xl text-base">👋 Hey, I'm Here</p>
                        <h1 className="font-bold md:text-9xl text-5xl">ROSHAN CHAUDHARY</h1>
                        <h1 className="font-bold md:text-9xl text-5xl">FULL-STACK</h1>
                    </div>
                    <div className="absolute w-full z-30 bottom-20 right-0">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col items-center md:gap-5 gap-1">
                                <p className="md:text-base text-xs">Explore</p>
                                <Image
                                    src="images/arrowdown.svg"
                                    alt="arrowdown"
                                    width={28}
                                    height={28}
                                    className="size-7 animate-bounce"
                                />
                            </div>
                            <div className="flex flex-col items-end">
                                <Image
                                    src="images/shape.svg"
                                    alt="shape"
                                    width={100}
                                    height={100}
                                />
                                <h1 className="font-bold md:text-9xl text-5xl">DEVELOPER</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>;
}