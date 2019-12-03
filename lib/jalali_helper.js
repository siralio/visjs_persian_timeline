function convert_to_gregorian(date_text, to_str) {
    if (typeof date_text == 'undefined' || !date_text)
        return date_text;
    if (typeof to_str == 'undefined')
        to_str = true;

    var datetime_parts = date_text.split(' ');
    var date_parts = datetime_parts[0].split('-');
    var time_parts = null;
    if (datetime_parts.length > 1) {
        time_parts = datetime_parts[1].split(':');
        date_parts = date_parts.concat(time_parts);
    }
    date_parts = date_parts.map(function(x) { return parseInt(x)});
    var pd = new persianDate(date_parts);
    var gDate = pd.toDate();
    if (to_str) {
        var d = [gDate.getFullYear(), (gDate.getMonth() + 1) % 13, gDate.getDate()];
        var r = d.join("-");
        if (time_parts != null) {
            var t = [gDate.getHours(), gDate.getMinutes()];
            r += " " + t.join(":");
        }            
        return r;
    }

    return gDate;
}


function convert_to_persian(date_obj, to_str, date_format) {
    if (typeof date_obj == 'undefined' || !date_obj)
        return date_obj;
    if (typeof to_str == 'undefined')
        to_str = true;
    
    if (typeof date_format == 'undefined')
        date_format = 'dddd DD MMMM YYYY';
    try {
        var pd = new persianDate(date_obj);
        if (to_str) 
            return pd.format(date_format);
        return pd;
    }
    catch(e) {
        debugger;
    }

}


function moment_to_persian(moment_obj, to_str, date_format) {
    if (typeof moment_obj == 'undefined' || !moment_obj)
        return moment_obj;
    if (typeof to_str == 'undefined')
        to_str = true;
    
    if (typeof date_format == 'undefined')
        date_format = 'dddd DD MMMM YYYY';
    try {
        var gDate = moment_obj.toDate();
        var pd = new persianDate(gDate);
        if (to_str) 
            return pd.format(date_format);
        return pd;
    }
    catch(e) {
        alert(e);
        debugger;
    }
}