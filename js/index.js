window.onload=function(){
	var wdyt=$(".wdyt")[0];
	var wdul=$(".wdul")[0];
	hover(wdyt,function(){
		wdul.style.display="block";
	},function(){
		wdul.style.display="none";
	});

	var sjyt=$(".sjyt")[0];
	var sjytimg=$(".sjytimg")[0];
	hover(sjyt,function(){
		sjytimg.style.display="block";
	},function(){
		sjytimg.style.display="none";
	})

	var weixin=$(".weixin")[0];
	var wximg=$(".wximg")[0];
	hover(weixin,function(){
		wximg.style.display="block";
	},function(){
		wximg.style.display="none";
	})
	// 滚动开始

	var bann=$(".container1")[0];
	var bans=$(".ban2")[0];
	var banBox=$(".img-box1",bann)[0];
	var banImgs=$("img",bann);
	var baw=1190;
	var bind=0;
	var bnex=0;
	var h=setInterval(bamo,2000);
	var banBtn=$(".btn1",bann)[0];
	var bale=$(".left1",bann)[0];
	var bari=$(".right1",bann)[0];
	var banli=$("li",bann);
	banli[0].style.background="red";
	banBox.style.width=baw*banImgs.length+"px";
	for (var i = 0; i < banImgs.length; i++) {
		banImgs[i].style.left=baw*i+"px";
	}
	bans.onmouseover=function(){
		animate(bans,{left:980},200)
	}
	bans.onmouseout=function(){
		animate(bans,{left:990},200)
	}
	function bamo(){
		bnex++;
		if(bnex>=banImgs.length){
			bnex=0
		}
		for (var i = 0; i < banli.length; i++) {
			banli[i].style.background="";
		}
		banBox.style.left=0;
		banImgs[bnex].style.left=baw+"px";
		banli[bnex].style.background="red";
		animate(banImgs[bind],{left:-baw});
		animate(banImgs[bnex],{left:0});
		bind=bnex;
	}
	bann.onmouseover=function(){
		clearInterval(h);
		animate(bale,{left:210});
		animate(bari,{left:939});
	}
	bann.onmouseout=function(){
		h=setInterval(bamo,2000);
		animate(bale,{left:185});
		animate(bari,{left:961});
	}
	bari.onclick=function(){
		bamo()
	}
	bale.onclick=function(){
		bnex--;
		if(bnex<0){
			bnex=banImgs.length-1
		}
		for (var i = 0; i < banli.length; i++) {
			banli[i].style.background="";
		}
		banImgs[bnex].style.left=-baw+"px";
		banli[bnex].style.background="red";
		animate(banImgs[bind],{left:baw});
		animate(banImgs[bnex],{left:0});
		bind=bnex;
	}
	for (var i = 0; i < banli.length; i++) {
		banli[i].index=i;
		banli[i].onclick=function(){
			bnex=this.index;
			banImgs[bnex].style.left=baw+"px";
			for(var j=0;j<banli.length;j++){
				banli[j].style.background="";
			}
			banli[bnex].style.background="red";
			animate(banImgs[bind],{left:-baw});
			animate(banImgs[bnex],{left:0});
			bind=bnex;
		}
	}
	
	
	// 选项卡开始
	var chaozhi=getClass("chaozhi-le-top",document);
	var chaozhis=getClass("chaozhis",document);
	var sanjiaos=getClass("sanjiao",document);
	sanjiaos[0].style.opacity="1";
	chaozhis[0].style.zIndex="10";
	chaozhi[0].style.borderBottomColor="#db024c";
	sanjiaos[0].style.borderBottomColor="#db024c";
	for(var j=0;j<chaozhi.length;j++){
		chaozhi[j].index=j;
		chaozhi[j].onmouseover=function(){
			for(var k=0;k<chaozhi.length;k++){
				chaozhi[k].style.borderBottomColor="";
				chaozhis[k].style.zIndex="0";
				sanjiaos[k].style.borderBottomColor="";
				sanjiaos[k].style.opacity="0";
				chaozhi[k].style.fontWeight="normal";
			}
			chaozhi[this.index].style.borderBottomColor="#db024c";
			chaozhis[this.index].style.zIndex="10";
			sanjiaos[this.index].style.borderBottomColor="#db024c";
			sanjiaos[this.index].style.opacity="1";
			chaozhi[this.index].style.fontWeight="bolder";
		}
	}
	for (var i = 0; i < chaozhis.length; i++) {
		var sjzx=$(".sjzx",chaozhis[i]);
		for(var j=0;j<sjzx.length;j++){
			var sjiw=$("img",sjzx[0])[0].offsetWidth;
			var sjih=$("img",sjzx[0])[0].offsetHeight;
			sjzx[j].onmouseover=function(){
				animate($(".xkbt",this)[0],{width:sjiw});
				animate($(".xkbl",this)[0],{height:sjih})
				animate($(".xkbr",this)[0],{height:sjih})
				animate($(".xkbb",this)[0],{width:sjiw})
			}
			sjzx[j].onmouseout=function(){
				animate($(".xkbt",this)[0],{width:0});
				animate($(".xkbl",this)[0],{height:0})
				animate($(".xkbr",this)[0],{height:0})
				animate($(".xkbb",this)[0],{width:0})
			}
		}
	}
	// 选项卡结束
	// 专柜开始
	var zgs=getClass("tk-r",document)[0];
	var spans=zgs.getElementsByTagName('span');
	var rbs=getClass("tk-r-b",document);
	var bx=$(".mp-r");
	rbs[0].style.display="block";
	spans[0].style.borderBottomColor="#db024c";
	spans[0].style.fontSize="24px";
	spans[0].style.fontWeight="bolder";
	for(var k=0;k<spans.length;k++){
		spans[k].index=k;
		spans[k].onmouseover=function(){
			for(var l=0;l<spans.length;l++){
				spans[l].style.borderBottomColor="";
				spans[l].style.fontSize="23px";
				spans[l].style.fontWeight="normal";
				rbs[l].style.display="none"
			}
			spans[this.index].style.borderBottomColor="#db024c";
			spans[this.index].style.fontSize="24px";
			spans[this.index].style.fontWeight="bolder";
			rbs[this.index].style.display="block";
		}
	}
	for (var i = 0; i < bx.length; i++) {
				bx[i].index=i;
				bx[i].onmouseover=function(){
					animate($(".bt",this)[0],{width:270},500);
					animate($(".bl",this)[0],{height:180},500);
					animate($(".br",this)[0],{height:180},500);
					animate($(".bb",this)[0],{width:270},500);
				}
				bx[i].onmouseout=function(){
					animate($(".bt",this)[0],{width:0},500);
					animate($(".bl",this)[0],{height:0},500);
					animate($(".br",this)[0],{height:0},500);
					animate($(".bb",this)[0],{width:0},500);
				}
			}
	// 专柜结束
	
	var container=$(".container");
	for(var o=0;o<container.length;o++){
		lb(container[o]);
	}
	function lb(container){
	var box=$(".img-box",container)[0];
	var coimgs=$('img',box);
	var index=0;
	var next=0;
	var coiw=370;
	var xia=$("li",$(".list",container)[0]);
	var leftBtn=$(".left",container)[0];
	var rightBtn=$(".right",container)[0];
	xia[0].style.background="red";
	box.style.width=coiw*coimgs.length+"px";
	for (var i = 0; i < coimgs.length; i++) {
		coimgs[i].style.left=coiw*i+"px";
	}
	function move(){
		next++;
		if(next==coimgs.length){
			next=1;
		}
		for(var i=0;i<coimgs.length;i++){
			xia[i].style.background="";
		}
		animate(coimgs[index],{left:-coiw});
		animate(coimgs[next],{left:0});
		xia[next].style.background="red";
		index=next;
	}
	container.onmouseover=function(){
		animate(leftBtn,{left:0},200);
		animate(rightBtn,{left:340},200);
	}
	container.onmouseout=function(){
		animate(leftBtn,{left:-30},200);
		animate(rightBtn,{left:370},200)
	}
	for (var i = 0; i < xia.length; i++) {
		xia[i].index=i;
		xia[i].onclick=function(){
			if(this.index==0&&index==0){
				return
			}else if(this.index==0&&index==1){
				animate(coimgs[0],{left:0});
				animate(coimgs[1],{left:coiw})
				for (var i = 0; i < xia.length; i++) {
					xia[i].style.background=""
				}
				index=0;
				xia[index].style.background="red";
			}else if(this.index==1&&index==0){
				animate(coimgs[0],{left:-coiw});
				animate(coimgs[1],{left:0})
				for (var i = 0; i < xia.length; i++) {
					xia[i].style.background=""
				}
				index=1;
				xia[index].style.background="red";

			}else if(this.index==1&&index==1){
				return
			}
		}
	}
	leftBtn.onclick=function(){
		if(index!=0){
			index=0;
			coimgs[0].style.left=-coiw+"px";
			animate(coimgs[0],{left:0});
			animate(coimgs[1],{left:coiw});
			for (var i = 0; i < xia.length; i++) {
					xia[i].style.background=""
				}
			xia[0].style.background="red";
		}
	}
	rightBtn.onclick=function(){
		move()
	}
}



var mpi=$(".mp-l-img");
for (var i = 0; i < mpi.length; i++) {
	wf(mpi[i])
}
// wf(mpi);
function wf(mpi){
	var mpib=$(".mp-ib",mpi)[0];
	var mpimgs=$("img",mpib);
	var mpmid=$(".mp-mid",mpi)[0];
	var leftmp=$(".mp-le",mpmid)[0];
	var rightmp=$(".mp-ri",mpmid)[0];
	var mpiw=mpimgs[1].offsetWidth;
	// var mpiw=200;
	var mpindex=0;
	var mpnext=0;
	for(var i=0;i<mpimgs.length;i++){
		mpimgs[i].style.left=mpiw*i+"px";
	}
	mpimgs[0].style.left=0+"px";
	var g= setInterval(mov,2000);
	function mov(){
		mpnext++;
		if(mpnext==mpimgs.length){mpnext=0};
		mpimgs[mpnext].style.left=mpiw+'px';
		animate(mpimgs[mpindex],{left:-mpiw});
		animate(mpimgs[mpnext],{left:0});
		mpindex=mpnext;
	}
	mpi.onmouseover=function(){
		clearInterval(g)
	}
	mpi.onmouseout=function(){
		g=setInterval(mov,2000)
	}
	rightmp.onclick=function(){
		mov()
	}
	leftmp.onclick=function(){
		mpnext--;
		if(mpnext<0){
			mpnext=mpimgs.length-1
		}
		mpimgs[mpnext].style.left=-mpiw+'px'; 
		animate(mpimgs[mpindex],{left:mpiw});
		animate(mpimgs[mpnext],{left:0});
		mpindex=mpnext;
	}
}
	// 导航侧栏开始
	var gds=$(".gds")[0];
	var gdssp=$("span",gds);
	var gud=$(".guding")[0];
	var gd=$(".gd",gud);
	var topss=[];
	var mps=$(".mp",document);
	var ch=parseInt(document.documentElement.clientHeight);
	var f=[];
	for(var i=0;i<mps.length;i++){
		topss.push(mps[i].offsetTop);
		f.push(true)
	}
	console.log(topss)
	for (var i = 0; i < gd.length; i++) {
		gd[i].index=i;
		gd[i].onmouseover=function(){
			for(var j=0;j<gd.length;j++){
				gd[j].style.opacity=1;
			}
			gd[this.index].style.opacity=0;
		}
		gd[i].onclick=function(){
			animate(document.body,{scrollTop:topss[this.index]-400});
			animate(document.documentElement,{scrollTop:topss[this.index]-400})
		}
		}
		var todingbu=$(".todingbu")[0];
		todingbu.onclick=function(){
			animate(document.body,{scrollTop:0});
			animate(document.documentElement,{scrollTop:0})
		}
	window.onscroll=function(){
		var stod=document.body.scrollTop||document.documentElement.scrollTop;
		if(stod>1300){
			gud.style.opacity=1;
			gds.style.opacity=1;
			todingbu.style.opacity=1;
		}else{
			gud.style.opacity=0;
			gds.style.opacity=0;
			todingbu.style.opacity=0;

		}
		var dizg=$(".tk")[0];
		var zgim=$("img",dizg);
		var zgh=dizg.offsetTop;
		if(zgh<stod+ch){
			for (var i = 0; i < zgim.length; i++) {
				zgim[i].src=zgim[i].getAttribute("asrc");
			}
		}
		for (var i = 0; i < topss.length; i++) {
			if(topss[i]<stod+ch&&f[i]){
			f[i]=false;
			var mpImgs = $("img",mps[i]);
			for(var j=0;j<mpImgs.length;j++){
				mpImgs[j].src=mpImgs[j].getAttribute("asrc");
			}
		}
		}
		
		for (var i = 0; i < topss.length; i++) {
			if(topss[i]<stod+500){
				for(var j=0;j<gd.length;j++){
					gd[j].style.opacity=1;
				}
				gd[i].style.opacity=0;
			}
		}
	}

	window.onscroll();
	// 导航侧栏结束
	var lie=$(".liebiao");
	for (var i = 0; i < lie.length; i++) {
		lie[i].index=i;
		var tclb=$(".tclb",lie[this.index]);
		lie[i].onmouseover=function(){
			for (var j = 0; j < tclb.length; j++) {
				tclb[j].style.display="none"
			}
			tclb[this.index].style.display="block"
		}
		lie[i].onmouseout=function(){
			for (var j = 0; j < tclb.length; j++) {
				tclb[j].style.display="none"
			}
		}
	}


}