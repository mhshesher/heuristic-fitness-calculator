function cal(){
	var q=document.getElementById("qn").value;
	var s=document.getElementById("st").value;

	try{
		q=parseInt(q);
		var qn=s.split(" ");
		
		if(q!=qn.length){
			document.getElementById("op").value="Invalid Input";
			return;
		}

		for(var i=0;i<qn.length;i++){
			qn[i]=parseInt(qn[i]);
			qn[i]--;
		}

		var ar=new Array(q+2);
		for(var i=0;i<ar.length;i++){
			ar[i]=new Array(q+2);
		}

		for(var i=0;i<q;i++){
			for(var j=0;j<q;j++){
				ar[i][j]=0;
			}
		}

		for(var i=0;i<qn.length;i++){
			ar[qn[i]][i]=1;
		}


		var fit=0, heu=0;

		for(var i=0;i<qn.length;i++){
			for(var j=0;j<qn.length;j++){
				if(i==j){
					continue;
				}
				var tmp1=Math.abs(i-j);
				var tmp2=Math.abs(qn[i]-qn[j]);

				if(tmp1==tmp2){
					heu++;
				}
				else if(qn[i]==qn[j]){
					heu++;
				}
				else{
					fit++;
				}
			}
		}

		heu/=2;
		fit/=2;

		if(document.getElementById("heu").checked==true){
			document.getElementById("op").value="The heuristic value is "+heu;
			console.log(heu);
		}
		else if(document.getElementById("fit").checked==true){
			document.getElementById("op").value="The fitness value is "+fit;
			console.log(fit);
		}
	}
	catch(ex){
		document.getElementById("op").value="Invalid Input";
	}

}

function rfs(){
	var hg=document.getElementById("frm").clientHeight;
	var hgb=window.innerHeight;
	var gap=hgb-hg-4;
	var vp=gap/2;
	document.getElementById("frm").style.marginTop=(vp+"px");
	document.getElementById("frm").style.marginBottom=(vp+"px");

	document.getElementById("qn").value=null;
	document.getElementById("st").value=null;
	document.getElementById("heu").checked=false;
	document.getElementById("fit").checked=false;
	document.getElementById("op").value=null;
}