var date =document.getElementById('date');
date.n=new Date().toISOString().split("T")[0];
function calculateAge()
{
  const ans= new Date();
  const tdate = ans.getDate();
  const tmonth = ans.getMonth()+1;
  const tyear = ans.getFullYear();
  console.log(tdate);
  console.log(tmonth);
  console.log(tyear);

  const res= new Date(date.value);
  
  const bdate = res.getDate();
  const bmonth = res.getMonth()+1;
  const byear = res.getFullYear();

  console.log(bdate);
  console.log(bmonth);
  console.log(byear);

  let adate,amonth,ayear;
  ayear=tyear-byear;
 
 
  if(tmonth>=bmonth)
  amonth=tmonth-bmonth;
 else{
 ayear--;
 amonth=12+tmonth-bmonth;}

 console.log(ayear);
 console.log(amonth);

 if(tdate>=bdate)
 adate=tdate-bdate;
 else{
     amonth--;
     adate= (new Date(byear,bmonth,0).getDate())+tdate-bdate;
 }
 
 document.getElementById('year').innerText=ayear;
 document.getElementById('month').innerText=amonth;
 document.getElementById('days').innerText=adate;

  
}