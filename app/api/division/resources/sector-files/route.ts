import { SectorFile } from "@/types/resources";
import { NextResponse } from "next/server";

export const GET = () => {

    const documents: SectorFile[] = [
        {
            name: "Africa UIR/FSS Control Stations",
            locationUri: "https://files.aero-nav.com/AFRX",
            airspacePrefix: ["AFR"]
        },
        {
            name: "Maghreb vACC",
            locationUri: "https://files.aero-nav.com/GMMM",
            airspacePrefix: ["GM"]
        },
        {
            name: "Gulf FSS Control Stations",
            locationUri: "https://files.aero-nav.com/GULF",
            airspacePrefix: ["GULF"]
        },
        {
            name: "North East Africa vACC - Addis Ababa",
            locationUri: "https://files.aero-nav.com/HAAA",
            airspacePrefix: ["HA"]
        },
        {
            name: "North East Africa vACC - Mogadishu",
            locationUri: "https://files.aero-nav.com/HCSM",
            airspacePrefix: ["HC"]
        },
        {
            name: "North East Africa vACC - Asmara",
            locationUri: "https://files.aero-nav.com/HHAA",
            airspacePrefix: ["HH"]
        },
        {
            name: "North East Africa vACC - Khartoum",
            locationUri: "https://files.aero-nav.com/HSSS",
            airspacePrefix: ["HS"]
        },
        {
            name: "Egypt vACC",
            locationUri: "https://files.aero-nav.com/HECC",
            airspacePrefix: ["HE"]
        },
        {
            name: "Arabian vACC - Bahrain",
            locationUri: "https://files.aero-nav.com/OBBB",
            airspacePrefix: ["OB", "OT"]
        },
        {
            name: "Arabian vACC - U.A.E",
            locationUri: "https://files.aero-nav.com/OMAE",
            airspacePrefix: ["OM"]
        },
        {
            name: "Arabian vACC - Oman",
            locationUri: "https://files.aero-nav.com/OOMM",
            airspacePrefix: ["OO"]
        },
        {
            name: "vACC Saudi Arabia",
            locationUri: "https://files.aero-nav.com/OEJD",
            airspacePrefix: ["OE"]
        },
        {
            name: "vACC Iran",
            locationUri: "https://files.aero-nav.com/OIIX",
            airspacePrefix: ["OI"]
        },
        {
            name: "Jordan vACC",
            locationUri: "https://files.aero-nav.com/OJAC",
            airspacePrefix: ["OJ"]
        },
        {
            name: "Kuwait vACC",
            locationUri: "https://files.aero-nav.com/OKAC",
            airspacePrefix: ["OK"]
        },
        {
            name: "Iraq vACC",
            locationUri: "https://files.aero-nav.com/ORBB",
            airspacePrefix: ["OR"]
        },
    ]

    return NextResponse.json(documents)
}