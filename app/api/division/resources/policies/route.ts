import { Document } from "@/types/resources";
import { NextResponse } from "next/server";

export const GET = () => {

    const documents: Document[] = [
        {
            title: "Division Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_DD_R01-2023.pdf",
            lastUpdated: new Date("2023-08-22")
        },
        {
            title: "Membership Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_MP_R01-2022.pdf",
            lastUpdated: new Date("2022-05-13")
        },
        {
            title: "ATC Training Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_TRP_R02-2023.pdf",
            lastUpdated: new Date("2022-09-02")
        },
        {
            title: "ATC Examination Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_CPE_R01-2022.pdf",
            lastUpdated: new Date("2022-05-13")
        },
        {
            title: "Flight Service Station Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_FSS_R02-2022.pdf",
            lastUpdated: new Date("2022-11-17")
        },
        {
            title: "Flight Service Station Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_FSS_R02-2022.pdf",
            lastUpdated: new Date("2022-11-17")
        },
        {
            title: "OpenSkies Policy",
            locationUri: "https://cdn.vatsim.me/policies/VATMENA_POL_OPSKY_R02-2022.pdf",
            lastUpdated: new Date("2022-05-10")
        },
    ]

    return NextResponse.json(documents)
}