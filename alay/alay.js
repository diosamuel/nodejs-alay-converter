let word={
a:"4",
b:"|3",
c:"c",
d:"|)",
e:"3",
f:"f",
g:"9",
h:"h",
i:"1",
j:"7",
k:"K",
l:"|",
m:"/\\/\\",
n:"/\\/",
o:"0",
p:"p",
q:"q",
r:"r",
s:"5",
t:"t",
u:"|_|",
v:"\\/",
w:"\\/\\/",
x:"×",
y:"`/",
z:"Z"
}

let alay={
	Convert(req){
	 	txt=req;
	 	for(i in word){
	 	 reg=new RegExp(i,"gi")
	 	 txt=txt.replace(reg,word[i])
	 	}
	return txt
	},
	
	singkat(req){
		let abjad=[..."aiueo"]
		txt=req
		let check=[]
		res=""
		
		abjad.forEach(n=>{
		 reg=new RegExp(n,"gi")
		 txt=txt.replace(reg,"")
		 check.push(".")
		 if(check.length==4){res=txt}
		})
	return res
	},
	
	bapacc(req){
		req=req.replace(/nya/g,"x")
		return `${req.split(" ").join(",,,")}xixixixi`
	}

}
module.exports=alay
    
