var enteredCountryElement = document.forms.form.country;
enteredCountryElement.onchange = function() {
    var enteredCountry = enteredCountryElement.value;
    updateDisplay(enteredCountry);
};
function updateDisplay(enteredCountry) {
    var url = "http://universities.hipolabs.com/search?country=" + enteredCountry;
   
    fetch(url).then(function (response) {
       if(response.ok) {
    response.json().then(function(json) {
       universitiesOfCountry= json;
      makeTable(universitiesOfCountry);
    });
  } else {
    console.log('request failed with response ' + response.status + ': ' + response.statusText);
  }
});

};

function makeTable(obj) {
    const divForTable = document.querySelector('.makingTable');
    const myTable = document.createElement('table');
    var contentOfTable = " <table> <thead><tr> <td> № </td> <td>Alpha two code</td> <td>Country</td> <td>state-province</td> <td>domains</td> <td>name</td> <td>web pages</td> </tr> </thead> <tbody>";
    for (univ in obj)
    {
        let _domains = "<td>";
        for (dom of obj.univ.domains)
        {
            _domains += dom + '<br>';
        }
        _domains += '</td>';

        let _web_pages = "<td>";
        for (page of obj.univ.web_pages)
        {
            _web_pages += "<a href='"+ page +"'></a><br>";
        }
        _web_pages += '</td>';

        let i = 1;

        contentOfTable += "<td>" + i + "</td> <td>"+ obj.univ.alpha_two_code +"</td> <td>"+ obj.univ.country +"</td> <td>"+ obj.univ["state-province"] +"</td>"+ _domains+"<td>"+ obj.univ.name +"</td> "+ _web_pages +" </tr>"
        
        i++;

    }
    contentOfTable += " </tbody>"
    myTable.innerHTML = contentOfTable;
    divForTable.prepend(myTable);
}
var resetElement = document.forms.form.form_submit;

resetElement.click(function() {
		  
    $("table").fadeOut(30);    

    setTimeout(function() {    
    
    $("table").remove(); 
    
    }, 30);
    enteredCountryElement.value = "";

});

