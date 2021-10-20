var master = [];
var cq1 = [];
var cq2 = [];
var cq3 = [];
var cq4 = [];
var mr = 0;
var rear1 = 0;
var rear2 = 0;
var rear3 = 0;
var rear4 = 0;
var mf = 0;
var front1 = 0;
var front2 = 0;
var front3 = 0;
var front4 = 0; 
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;

function masaiCodingCompetition(N, a, b){
    // console.log(N, a, b);
   if(N == 'E')
   {
       if(a == 1)
       {
           cq1.push(b);
           rear1++;
           if(flag1 == false)
           {
               master.push(a);
               mr++;
               flag1 = true;
           }
       }
       else if(a == 2)
       {
           cq2.push(b);
           rear2++;
           if(flag2 == false)
           {
               master.push(a);
               mr++;
               flag2 = true;
           }
       }
       else if(a == 3)
       {
           cq3.push(b);
           rear3++;
           if(flag3 == false)
           {
               master.push(a);
               mr++;
               flag3 = true;
           }
       }
       else if(a == 4)
       {
           cq4.push(b);
           rear4++;
           if(flag4 == false)
           {
               master.push(a);
               mr++;
               flag4 = true;
           }
       }
   }
   
   else if(N == 'D')
   {
       if(master[mf] == 1)
       {
           console.log(master[mf] + " " + cq1[front1]);
           front1++;
       }
       else if(master[mf] == 2)
       {
           console.log(master[mf] + " " + cq2[front2]);
           front2++;
       }
       else if(master[mf] == 3)
       {
           console.log(master[mf] + " " + cq3[front3]);
           front3++;
       }
       else if(master[mf] == 4)
       {
           console.log(master[mf] + " " + cq4[front4]);
           front4++;
       }
       
       
       if(master[mf] == 1)
       {
           if(front1 == rear1)
           {
               flag1 = false;
               mf++;
           }
       }
       
       else if(master[mf] == 2)
       {
           if(front2 == rear2)
           {
               flag2 = false;
               mf++;
           }
       }
       
       else if(master[mf] == 3)
       {
           if(front3 == rear3)
           {
               flag3 = false;
               mf++;
           }
       }
       
       else if(master[mf] == 4)
       {
           if(front4 == rear4)
           {
               flag4 = false;
               mf++;
           }
       }
   }
}