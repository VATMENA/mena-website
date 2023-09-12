import Link from "next/link"
import React from 'react'
import { Staff } from "@/types/staff";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

async function getStaff(): Promise<Staff[]> {
    const res = await fetch(`${process.env.URL}/api/division/staff`)
    if (!res.ok) {
        throw new Error("Could not fetch staff!")
    }
    return res.json();
}

async function DivisionStaff() {

    const staff = await getStaff();
    const departments = new Set(staff.map((staffMember: Staff) => staffMember.department))

    return (
        <div className="min-h-screen">
            <div className="bg-[url('/images/home-landing.png')] bg-cover bg-no-repeat h-80">
                <div className="bg-[rgba(0,0,0,0.70)] h-full">
                    <div className="flex flex-col justify-center container mx-auto mb-7 h-full">
                        <h1 className="text-5xl">Division Staff</h1>
                    </div>
                </div>
            </div>

            {Array.from(departments).map((department: string, index: number) => {
                return (
                    <div className="container mx-auto mt-12" key={index}>
                        <div className="grid grid-cols-4 gap-16">
                            <div><h2 className="text-3xl">{department}</h2></div>
                            <div className="col-span-4 lg:col-span-3 flex flex-wrap gap-8 justify-center mb-6">
                                {
                                    staff.filter((entry: Staff) => entry.department === department).map((staffMember: Staff, index: number) => {
                                        return (
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <CardTitle>{staffMember.name}</CardTitle>
                                                    <CardDescription>{staffMember.title}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="text-center">
                                                    <Link href={`mailto:${staffMember.email}`} target="_blank" className={buttonVariants({ variant: "default" })} >
                                                        {staffMember.vacant ? "Apply Here" : `Email ${staffMember.name.split(" ")[0]}`}
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Separator />
                    </div>
                )
            })}

        </div>
    )
}

export default DivisionStaff