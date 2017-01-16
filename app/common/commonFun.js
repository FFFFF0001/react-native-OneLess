/**
 * Created by mifind on 2017/1/13.
 */
export function formatDate(date: string) {
    let splitDate = (date.split(' '))[0].split("-");
    let year = splitDate[0];
    let month = formatMonth(splitDate[1]);
    let day = splitDate[2];
    return day + ' ' + month + "." + year;
}

export function formatMonth(s: string) {
    let f = "";
    switch (s) {
        case "01":
            f = "Jan";
            break;
        case "02":
            f = "Feb";
            break;
        case "03":
            f = "Mar";
            break;
        case "04":
            f = "Apr";
            break;
        case "05":
            f = "May";
            break;
        case "06":
            f = "Jun";
            break;
        case "07":
            f = "Jul";
            break;
        case "08":
            f = "Aug";
            break;
        case "09":
            f = "Sep";
            break;
        case "10":
            f = "Oct";
            break;
        case "11":
            f = "Nov";
            break;
        case "12":
            f = "Dec";
            break;
    }
    return f;
}
