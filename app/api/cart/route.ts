import { NextRequest,NextResponse } from "next/server";
import { CartTable,db } from "@/sanity/lib/drizzle";


export const Get=async (request:Response)=>{
try {
    const res=await db.select().from(CartTable)
    return NextResponse.json({res})
} catch (error) {
    return NextResponse.json({message:"somthing Wrong"})
    
}
}

export const POST=async (request:Response)=>{
    try {
        const res=await db.select().from(CartTable)
        return NextResponse.json({res})
    } catch (error) {
        return NextResponse.json({message:"somthing Wrong"})
        
    }
    }