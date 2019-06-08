$(document).ready(function(){

	var film = $('.myFilm');

	var sort = $('.sort');

	function check(a,b){

		if(a.value < b.value){

			return 1;

		}else{

			if(a.value > b.value){

				return -1;

			}else{

				return 0;
				
					}
			}

	} /*function check*/
	
	arrObj.sort(check);
	newOrder(arrObj);

	function newOrder(a){

		for(let i = 0; i < film.length; i++){
			$(film[i]).html(`

			 <div class="row">              
			    <div class="col-lg-4 col-md-6 mx-auto "> 
			        <img class="filmImg " src="${a[i].pic}" alt="${a[i].name}">
			    </div>
			        <div class="col-lg-8 contenuto">
			              
			            <h1 class="movieTitle ml-lg-1 mx-md-auto">${a[i].name}</h1>
			            <p class="fdescrition filmImg mb-md-3 mb-sm-3 "> 
			                  ${a[i].bio} 
			            </p>
			                                                
			            <div class="mt-md-5 mt-sm-5">
			                <div class="likesLine">
			                  <span class="i_like_it">Like <i class="fas fa-thumbs-up"></i> 
			                 	 <span class="likesNumber">${a[i].value}</span>
			                  </span> 					                  
			                </div>
			           </div> 

			        </div>
			  </div>

			`);

		}

		var like = $(".i_like_it");
		var increasedLikes = $(".likesNumber");

		for(let i = 0; i < film.length; i++){

			$(like[i]).on('click', function(){

					++arrObj[i].value;

					$(increasedLikes[i]).text(arrObj[i].value);

					$('.sort').on('click' ,function(){
						
						arrObj.sort(check);
						newOrder(arrObj);
						
					})

			});

		}

	}


});  //  document ready function  