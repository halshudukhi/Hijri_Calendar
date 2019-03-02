var currDate = '';
function initWork() {
		//Today
		var todayElement = document.getElementById("today");
		todayElement.innerHTML = HijriJS.today().toString();
    // get today's date in Hijri
    currDate = HijriJS.today().toString();
    // to remove H from yearH ex: 1440H, drop the last character to be 1440
    currDate = currDate.substring(0, currDate.length - 1);
    // reformat date from dd/mm/yyyy to dd-mm-yyyy
    currDate = currDate.split('/').join('-');
    // set the date input field to currDate so, datepicker sets it as the current date automatically
    $('#datepicker').val(currDate);
}

$( function() {
   $( "#datepicker" ).datepicker({
     changeMonth: true, // show months menu
     changeYear: true, // show years menu
     dayNamesMin: [ "س", "ج", "خ", "ر", "ث", "ن", "ح" ], // arabic days names
     dateFormat: "dd-mm-yy", // set format to dd-mm-yyyy
     monthNames: [ "محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأول", "جمادى الثاني", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة" ],
     yearRange: "c-0:c+15", // year range in Hijri from current year and +15 years
     monthNamesShort: [ "محرم", "صفر", "ربيع ١", "ربيع ٢", "جمادى ١", "جمادى ٢", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة" ],
      showAnim: 'bounce'
     });
});