import { Document } from "@/types/resources";
import { NextResponse } from "next/server";

export const GET = () => {

    const briefings: Document[] = []

    return NextResponse.json(briefings)
}