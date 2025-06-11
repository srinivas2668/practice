const EditAction=async({request})=>
{
    const formData=await request.json();
    console.log('method ==> ',request.method,'\nformData ==> ',formData,'databinding')
}
export default EditAction;