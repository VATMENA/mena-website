import Link from "next/link"
import React from 'react'
import { Staff } from "@/types/staff";

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
                    <div className="flex flex-col justify-center ps-3 lg:ps-[15%] mb-7 h-full">
                        <h1 className="text-5xl">Division Staff</h1>
                    </div>
                </div>
            </div>

            {Array.from(departments).map((department: string, index: number) => {
                return (
                    <div className="container mx-auto mt-12" key={index}>
                        <div className="grid grid-cols-4 gap-16">
                            <div><h2 className="text-3xl">{department}</h2></div>
                            <div className="col-span-3 flex flex-wrap gap-8 justify-center">
                                {
                                    staff.filter((entry: Staff) => entry.department === department).map((staffMember: Staff, index: number) => {
                                        return (
                                            <div className="card static w-64 bg-neutral text-neutral-content">
                                                <div className="card-body items-center text-center">
                                                    <h3 className="card-title">{staffMember.name}</h3>
                                                    <p>{staffMember.title}</p>
                                                    <div className="card-actions justify-end">
                                                        <Link href={`mailto:${staffMember.email}`} target="_blank" className="btn btn-primary text-neutral-100">
                                                            {staffMember.vacant ? "Apply Here" : `Email ${staffMember.name.split(" ")[0]}`}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default DivisionStaff