const enteredCountryElement = document.getElementsByName('country');
$('.form_submit').click(function () {
    let enteredCountry = $('.form_text').val();
    updateDisplay(enteredCountry);
 });
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
    var contentOfTable = "<thead><tr> <td> /// </td> <td>Alpha two code</td> <td>Country</td> <td>state-province</td> <td>domains</td> <td>name</td> <td>web pages</td> </tr> </thead> <tbody>";
    for (univ of obj)
    {
        let _domains = "<td>";
        for (dom of univ.domains)
        {
            _domains += toString(dom) + '<br>';
        }
        _domains += '</td>';

        let _web_pages = "<td>";
        for (page of univ.web_pages)
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
    divForTable.preend(myTable);
}

$('.form_reset').click(function() {
		  
    $(".makingTable").fadeOut(30);    

    setTimeout(function() {    
    
    $(".makingTable").remove(); 
    
    }, 30);
});

