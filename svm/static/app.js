$(document).ready(function() {
  let once = true




    var eventSource = new EventSource("/listen")

    eventSource.addEventListener("message", function(e) {
      console.log(e.data)
    }, false)

    eventSource.addEventListener("online", function(e) {
      // console.log(e.data.color)
      const vData = JSON.parse(e.data)
      let list = []
      var count = 0

      //document.querySelector("body").style.backgroundColor= data.color

      document.querySelector("#ss1").innerHTML = vData.num[0]
      document.querySelector("#ss2").innerHTML = vData.num[1]
      document.querySelector("#ss3").innerHTML = vData.num[2]
      document.querySelector("#ss4").innerHTML = vData.num[3]
      document.querySelector("#ss5").innerHTML = vData.num[4]
      document.querySelector("#ss6").innerHTML = vData.num[5]
      document.querySelector("#ss7").innerHTML = vData.num[6]
      document.querySelector("#ss8").innerHTML = vData.num[7]
      document.querySelector("#ss9").innerHTML = vData.num[8]
      document.querySelector("#ss10").innerHTML = vData.num[9]
      document.querySelector("#ss11").innerHTML = vData.num[10]
      document.querySelector("#ss12").innerHTML = vData.num[11]

      document.querySelector("#ss13").innerHTML = vData.num[12]
      document.querySelector("#ss14").innerHTML = vData.num[13]
      document.querySelector("#ss15").innerHTML = vData.num[14]
      document.querySelector("#ss16").innerHTML = vData.num[15]
      document.querySelector("#ss17").innerHTML = vData.num[16]
      document.querySelector("#ss18").innerHTML = vData.num[17]
      document.querySelector("#ss19").innerHTML = vData.num[18]
      document.querySelector("#ss20").innerHTML = vData.num[19]
      document.querySelector("#ss21").innerHTML = vData.num[20]
      document.querySelector("#ss22").innerHTML = vData.num[21]
      document.querySelector("#ss23").innerHTML = vData.num[22]
      document.querySelector("#ss24").innerHTML = vData.num[23]

      document.querySelector("#ss25").innerHTML = vData.num[24]
      document.querySelector("#ss26").innerHTML = vData.num[25]
      document.querySelector("#ss27").innerHTML = vData.num[26]
      document.querySelector("#ss28").innerHTML = vData.num[27]
      document.querySelector("#ss29").innerHTML = vData.num[28]
      document.querySelector("#ss30").innerHTML = vData.num[29]
      document.querySelector("#ss31").innerHTML = vData.num[30]
      document.querySelector("#ss32").innerHTML = vData.num[31]
      document.querySelector("#ss33").innerHTML = vData.num[32]
      document.querySelector("#ss34").innerHTML = vData.num[33]
      document.querySelector("#ss35").innerHTML = vData.num[34]
      document.querySelector("#ss36").innerHTML = vData.num[35]

      document.querySelector("#ss37").innerHTML = vData.num[36]
      document.querySelector("#ss38").innerHTML = vData.num[37]
      document.querySelector("#ss39").innerHTML = vData.num[38]
      document.querySelector("#ss40").innerHTML = vData.num[39]
      document.querySelector("#ss41").innerHTML = vData.num[40]
      document.querySelector("#ss42").innerHTML = vData.num[41]
      document.querySelector("#ss43").innerHTML = vData.num[42]
      document.querySelector("#ss44").innerHTML = vData.num[43]
      document.querySelector("#ss45").innerHTML = vData.num[44]
      document.querySelector("#ss46").innerHTML = vData.num[45]
      document.querySelector("#ss47").innerHTML = vData.num[46]
      document.querySelector("#ss48").innerHTML = vData.num[47]
      list = [vData.num[0], vData.num[1], vData.num[2], vData.num[3], vData.num[4], vData.num[5],
                    vData.num[6], vData.num[7], vData.num[8], vData.num[9], vData.num[10], vData.num[11],
                    vData.num[12], vData.num[13], vData.num[14], vData.num[15], vData.num[16], vData.num[17],
                    vData.num[18], vData.num[19], vData.num[20], vData.num[21], vData.num[22], vData.num[23],
                    vData.num[24], vData.num[25], vData.num[26], vData.num[27], vData.num[28], vData.num[29],
                    vData.num[30], vData.num[31], vData.num[32], vData.num[33], vData.num[34], vData.num[35],
                    vData.num[36], vData.num[37], vData.num[38], vData.num[39], vData.num[40], vData.num[41],
                    vData.num[42], vData.num[43], vData.num[44], vData.num[45], vData.num[46], vData.num[47]
    ];





    const labels = [
      'ss1', 'ss2', 'ss3', 'ss4', 'ss5', 'ss6',
      'ss7', 'ss8', 'ss9', 'ss10', 'ss11', 'ss12',
      'ss13', 'ss14', 'ss15', 'ss16', 'ss17', 'ss18',
      'ss19', 'ss20', 'ss21', 'ss22', 'ss23', 'ss24',
      'ss25', 'ss26', 'ss27', 'ss28', 'ss29', 'ss30',
      'ss31', 'ss32', 'ss33', 'ss34', 'ss35', 'ss36',
      'ss37', 'ss38', 'ss39', 'ss40', 'ss41', 'ss42',
      'ss43', 'ss44', 'ss45', 'ss46', 'ss47', 'ss48'
    ];

    let data = {
      labels: labels,
      datasets: [{
        label: 'Volts',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: list,
      }]
    };

    let config = {
    type: 'bar',
    data,
    options: {}
    };




    // === include 'setup' then 'config' above ===
    if (once == true) {
    var chart = new Chart(
    document.getElementById('myChart'),
    config
    );
  }


  if ( document.getElementById('myChart').width >= 200) {
    setTimeout(function() {
          //chart.data.datasets[0].data[0] = list[0];
          chart.destroy()
      }, 5000)
  } else {
    console.log('not it')
  }



    }, true)



    function myfunc(list) {




}




})
