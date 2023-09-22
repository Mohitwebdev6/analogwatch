setInterval(() => {
    const date=new Date();
    let sec=document.querySelector(".second");
    let min=document.querySelector(".minute");
    let hrs=document.querySelector(".hour");
    sec.style.transform=`rotate(${date.getSeconds()*6 +180}deg)`
    hrs.style.transform=`rotate(${date.getHours()*30+(date.getMinutes()/2)+180}deg)`
    min.style.transform=`rotate(${date.getMinutes()*6 +180}deg)`
});