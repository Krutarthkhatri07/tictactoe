//var a = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var a = [100,101,102,103,104,105,106,107,108];
function p1()
{
    var in1=prompt("enter pl1: "," ");
    if(a[parseInt(in1)-1]!=0 && a[parseInt(in1)-1]!=1)
    {
        a[parseInt(in1)-1]=1;
        if((a[0]==1 && a[1]==1 && a[2]==1) || (a[3]==1 && a[4]==1 && a[5]==1) || (a[6]==1 && a[7]==1 && a[8]==1) || (a[0]==1 && a[3]==1 && a[6]==1) || (a[1]==1 && a[4]==1 && a[7]==1) || (a[2]==1 && a[5]==1 && a[8]==1 || (a[0]==1 && a[4]==1 && a[8]==1) || (a[2]==1 && a[4]==1 && a[6]==1)) )
        {
            console.log("pl1 wins:");
            return 1;
        }
    }
    else 
    {
        console.log("enter valid input:");
        p1();
    }
}
function p2()
{
    var in2=prompt("enter pl2: "," ");
    if(a[parseInt(in2)-1]!=0 && a[parseInt(in2)-1]!=1)
    {
        a[parseInt(in2)-1]=0;
        if((a[0]==0 && a[1]==0 && a[2]==0) || (a[3]==0 && a[4]==0 && a[5]==0) || (a[6]==0 && a[7]==0 && a[8]==0) || (a[0]==0 && a[3]==0 && a[6]==0) || (a[1]==0 && a[4]==0 && a[7]==0) || (a[2]==0 && a[5]==0 && a[8]==0) || (a[0]==0 && a[4]==0 && a[8]==0) || (a[2]==0 && a[4]==0 && a[6]==0)) 
        {
            console.log("pl2 wins:");
            return 1;
        }
    }
    else 
    {
        console.log("enter valid input:");
        p2();
    }
}
function show()
{
    for(i=0;i<9;i=i+3)
    {
        console.log("\n");
        console.log(a[i]+" "+a[i+1]+" "+a[i+2]);
    }
}
var x=0;
while(x<9)
{
    if(x%2!=0)
    {
        var f=p1();
        show();
        if(f==1)
        {
            break;
        }
    }
    else
    {
        var f1=p2();
        show();
        if(f1==1)
        {
            break;
        }
    }
    x++;
}
