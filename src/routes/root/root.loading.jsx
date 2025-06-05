import { sendAllData } from "../../contacts";
export const loader=async()=>
{
    const contacts=await sendAllData();
    return {contacts}
}
