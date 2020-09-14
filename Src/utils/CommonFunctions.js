 

export default function DateFormatter(dateParam){
    let date = new Date(dateParam);
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    // var strSplitDate = String(strDate).split(' ');
    // var date = new Date(strSplitDate[0]);
    // // alert(date);
    // var dd = date.getDate();
    // var mm = months[date.getMonth()]; //January is 0!

    // var yyyy = date.getFullYear();
    // if (dd < 10) {
    //     dd = '0' + dd;
    // }
    // if (mm < 10) {
    //     mm = '0' + mm;
    // }
    // date =  dd + "-" + mm + "-" + yyyy;
    // return date.toString();
}