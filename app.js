function showEnglish() {
    document.getElementById("engVer").style.display = "";
    document.getElementById("chiVer").style.display = "none";
    document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";
    document.getElementById("engInput").style.display = "";
    document.getElementById("chiInput").style.display = "none";

}

function showChinese() {
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


  
  $(".input").focus(function() {
    $(".close-btn").addClass("active");
  });
  
  $(".input").focusout(function() {
    $(".close-btn").removeClass("active");
    $(this).val("");
  });
