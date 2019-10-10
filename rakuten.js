const url ="https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1095910084106683101";

		$.ajax({
			url:url,
			dataType:'json'
		})
		.then(function(data){
			let html ='';
			let categories = data.result.large;
			console.log(data);
		for(let i=0; i<categories.length; i++){
			let category = categories[i];
			
			html+=
			`<div class="col">
				  <a href=''><li class="list-group-item list-group-item-warning" ;">
					 ${category.categoryName}
				  </li>
				</div>
			`
			;
			
			 
			};
			document.querySelector('.content').innerHTML = html;
			
		});
		