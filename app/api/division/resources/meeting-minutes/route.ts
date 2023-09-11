import { Document } from "@/types/resources";
import { NextResponse } from "next/server";

export const GET = () => {

    const meetingMinutes: Document[] = []

    return NextResponse.json(meetingMinutes)
}