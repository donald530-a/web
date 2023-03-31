function showEnglish() {
  document.getElementById("engVer1").style.display = "none";
  document.getElementById("order").style.display = ""
  document.getElementById("engVer").style.display = "";
  document.getElementById("chiVer").style.display = "none";
  document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";
  document.getElementById("engInput").style.display = "";
  document.getElementById("chiInput").style.display = "none";

}

function showChinese() {
  document.getElementById("engVer1").style.display = "none";
  document.getElementById("order").style.display = "none"
  document.getElementById("engVer").style.display = "none";
  document.getElementById("chiVer").style.display = "";
  document.getElementById("toptitle").innerHTML = "健步行徑";
  document.getElementById("engInput").style.display = "none";
  document.getElementById("chiInput").style.display = "";
}

function searchEngTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("engInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tb1");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchChiTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("chiInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tb2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function showengorder() {
  document.getElementById("engVer1").style.display = "";
  var list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  fetch("mydata.json")
  .then(response => response.json())
  .then(data => {
      for  (var x = 0; x < 25; x++){   
          var index = list[x]
          for (var i = 0; i<data.items.length; i++){
              let vTitle_en = data.items[i].Title_en;
              let vDistrict_en = data.items[i].District_en;
              let vRoute_en = data.items[i].Route_en;
              let vHowToAccess_en = data.items[i].HowToAccess_en;
              let vMapURL_en = data.items[i].MapURL_en;
              let vLatitude = data.items[i].Latitude;
              let vLongitude = data.items[i].Longitude;
              if (index=vTitle_en[0]){
                  document.querySelector("#tb3").innerHTML += `
                      <tbody>
                          <tr>
                              <td>${vTitle_en}</td>
                              <td>${vDistrict_en}</td>
                              <td>${vRoute_en}</td>
                              <td>${vHowToAccess_en}</td>
                              <td>${vLatitude}</td>
                              <td>${vLongitude}</td>
                          </tr>
                      <tbody>`;
              
      }}
  }    })
}
