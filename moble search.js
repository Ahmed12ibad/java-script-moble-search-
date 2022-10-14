function iphone_x(){
    var iphonex = document.getElementById("iphonex")
    iphonex.src="https://www.applestore.pk/wp-content/uploads/2020/03/buy-iphone11-black-apple-store-pakistan.png"

}

function iphone_xpromex(){
    var iphonex = document.getElementById("iphonex")
    iphonex.src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-pro-max-midnight-green.png"

}


///


var val = document.getElementById("val")


function Moble_1(moble_name){
  this.moble_name = moble_name;
}
function Moble_2(prize){
    this.prize = prize;
  }
  


////

var iphonex = new Moble_1("iphone X ")
var iphone_prize = new Moble_2("||130.900")

//

var iphonex11 = new Moble_1("IPHONE 11")
var iphone11_prize = new Moble_2("||134,549.")

//


var iphone11pro = new Moble_1("IPHONE 11 PRO MAX")
var iphone11pro_prize = new Moble_2("226,599")


//

var samsungs6 = new Moble_1("SAMSUNG GALAXY-S6")
var samsungs6_prize = new Moble_2("42,999")

//

var samsungs7 = new Moble_1("SAMSUNG GALAXY-S7")
var samsungs7_prize = new Moble_2("57,399")

//

var samsungs8 = new Moble_1("SAMSUNG GALAXY-S8")
var samsungs8_prize = new Moble_2("65,499")

//


var oppo2 = new Moble_1("OPPO_RENO_2")
var oppo2_prize = new Moble_2("69,999")

//


var oppo3 = new Moble_1("OPPO_RENO_3")
var oppo3_prize = new Moble_2("46,999")

//

var oppo4 = new Moble_1("OPPO_RENO_4")
var oppo4_prize = new Moble_2("59,999")







///

function serach_3(){
var h3_1 = document.getElementById("text_1")
var h3_2 = document.getElementById("text_2")

for(var key5 in iphone11pro){
    h3_1.innerHTML=iphone11pro[key5]
     }

     for(var key6 in iphone11pro_prize){
         h3_2.innerHTML=iphone11pro_prize[key6]
          }
}

// ///

function serach_4(){
    var h3_1 = document.getElementById("text_1")
    var h3_2 = document.getElementById("text_2")
    
    for(var key6 in samsungs6){
        h3_1.innerHTML=samsungs6[key6]
         }
    
         for(var key7 in samsungs6_prize){
             h3_2.innerHTML=samsungs6_prize[key7]
              }
    }
    
    //

    function serach_5(){
        var h3_1 = document.getElementById("text_1")
        var h3_2 = document.getElementById("text_2")
        
        for(var key8 in samsungs7){
            h3_1.innerHTML=samsungs7[key8]
             }
        
             for(var key9 in samsungs7_prize){
                 h3_2.innerHTML=samsungs7_prize[key9]
                  }
        }

        //

        function serach_6(){
            var h3_1 = document.getElementById("text_1")
            var h3_2 = document.getElementById("text_2")
            
            for(var key10 in samsungs8){
                h3_1.innerHTML=samsungs8[key10]
                 }
            
                 for(var key11 in samsungs8_prize){
                     h3_2.innerHTML=samsungs8_prize[key11]
                      }
            }

            //

            function serach_7(){
                var h3_1 = document.getElementById("text_1")
                var h3_2 = document.getElementById("text_2")
                
                for(var key12 in oppo2){
                    h3_1.innerHTML=oppo2[key12]
                     }
                
                     for(var key13 in oppo2_prize){
                         h3_2.innerHTML=oppo2_prize[key13]
                          }
                }

        //

        function serach_8(){
            var h3_1 = document.getElementById("text_1")
            var h3_2 = document.getElementById("text_2")
            
            for(var key14 in oppo3){
                h3_1.innerHTML=oppo3[key14]
                 }
            
                 for(var key15 in oppo3_prize){
                     h3_2.innerHTML=oppo3_prize[key15]
                      }
            }

         //
         
         function serach_9(){
            var h3_1 = document.getElementById("text_1")
            var h3_2 = document.getElementById("text_2")
            
            for(var key16 in oppo4){
                h3_1.innerHTML=oppo4[key16]
                 }
            
                 for(var key17 in oppo4_prize){
                     h3_2.innerHTML=oppo4_prize[key17]
                      }
            }



    

window.onkeydown = function(){
    // console.log(event.keyCode)
    if(event.keyCode === 13){
       
        var ip =  document.getElementById("ip")

        switch(val.value){

            case "I PHONE X":
                     ip.src="iphonex.jpg"
                    //  serach_1()
                    var h3_1 = document.getElementById("text_1")
                    var h3_2 = document.getElementById("text_2")

                    for(var key1 in iphonex){
                   h3_1.innerHTML=iphonex[key1]
                    }

                    for(var key2 in iphone11_prize){
                        h3_2.innerHTML=iphone_prize[key2]
                         }
                    
             break
            case "I PHONE 11":
                     ip.src="iphone11.png"
                    //  serach_2()

                    var h3_1 = document.getElementById("text_1")
                    var h3_2 = document.getElementById("text_2")

                    for(var key3 in iphonex11){
                        h3_1.innerHTML=iphonex11[key3]
                         }
     
                         for(var key4 in iphone11_prize){
                             h3_2.innerHTML=iphone11_prize[key4]
                              }

                     break
            case "I PHONE 11 PRO MAX":
                     ip.src="iphone11promax.webp"
                     serach_3()
                     break
                     
            case "SAMSUNG GALAXY-S6":
                     ip.src="samsungs6.jpg"
                     serach_4()
                     
                     break

                    

           
            case "SAMSUNG GALAXY-S7":
                     ip.src="samsungs7.jpg"
                     serach_5()
                     break
                     

           
            case "SAMSUNG GALAXY-S8":
                     ip.src="samsungs8.jpg"
                     serach_6()
                     break
                     
            case "OPPO-RENO2":
                     ip.src="oppo2.jpg"
                     serach_7()
                     break
                     
            case "OPPO-RENO3":
                     ip.src="oppo3.jpg"
                     serach_8()
                     break
                     
            case "OPPO-RENO4":
                     ip.src="oppo4.jpg"
                     serach_9()
                     break
                     

           default:
           alert("search only uppercase latter")

        }
       
        


    }
}