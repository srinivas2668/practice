const EditAction=async({request})=>
{
    const formData=await request.json();
    const type=formData.type;
    const data=formData.data;
    console.log(data,type,'databinding')
}