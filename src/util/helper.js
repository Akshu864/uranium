const a=new Date();
const printDate=function()
{
    console.log("current date",a.getDate());
}
const printMonth=function()
{
    console.log("current month is",a.getMonth()+1);

}
const getBatchInfo=function()
{
    console.log('Uranium' +printDate+ '/'+ printMonth + 'the topic for today is Nodejs module system',)

}
module.exports={printDate,printMonth,getBatchInfo}