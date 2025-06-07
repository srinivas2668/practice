import { sendDataWRTId } from "../../contacts";

export const loader=async({params})=>
{
    const {contactId}=params
    const contact=await sendDataWRTId(contactId);
    return{contact}
}