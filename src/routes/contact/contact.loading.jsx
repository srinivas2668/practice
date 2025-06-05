import { sendDataWRTId } from "../../contacts";
export const loader=async({params})=>
{
    const {contactId}=params
    const objData=await sendDataWRTId(contactId);
    return {objData};
}