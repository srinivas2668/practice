import { sendDataWRTId } from "../../contacts";

export const loader=async({params})=>
{
    const {contactId}=params
    console.log('1')
    const contact=await sendDataWRTId(contactId);
    return{contact}
}