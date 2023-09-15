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
import Header from "@/components/header/header";
import { staff } from "@/constants/division/staff/route";

async function getStaff(): Promise<Staff[]> {
    // const res = await fetch(`${process.env.URL}/api/division/staff`)
    // if (!res.ok) {
    //     throw new Error("Could not fetch staff!")
    // }
    // return res.json();
    return staff;
}

async function DivisionStaff() {

    const staff = await getStaff();
    const departments = new Set(staff.map((staffMember: Staff) => staffMember.department))

    return (
        <>
            <Header imageUrl="/images/home-landing.png">
                <h1 className="text-5xl">Division Staff</h1>
            </Header>
            {Array.from(departments).map((department: string, index: number) => {
                return (
                    <div className="container mx-auto" key={index}>
                        <div className="grid grid-cols-4 gap-16">
                            <div><h2 className="text-3xl">{department}</h2></div>
                            <div className="col-span-4 lg:col-span-3 flex flex-wrap gap-8 justify-center">
                                {
                                    staff.filter((entry: Staff) => entry.department === department).map((staffMember: Staff, index: number) => {
                                        return (
                                            <Card key={ index }>
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
                        {index !== (Array.from(departments).length - 1) && <Separator className="my-6" />}
                    </div>
                )
            })}
        </>
    )
}

export default DivisionStaff