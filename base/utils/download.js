export const fileDownload = (url,name) =>{

	if (/^\d+$/.test(name.split('.')[0])) {
		const blob = new Blob([url], { type: 'application/octet-stream' });
		const objectURL = URL.createObjectURL(blob);
		let a = document.createElement('a');
		a.href = objectURL;
		a.setAttribute('download', name);
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(objectURL);
	  }else{
		let a = document.createElement('a');
		a.href = url;
		a.setAttribute('download','');
		a.target = "downloadIframe";
		a.download = name;
		a.click();
	  }


} 


export const localFileDownload = (url,name) =>{
	if (/^\d+$/.test(name.split('.')[0])) {
		const blob = new Blob([url], { type: 'application/octet-stream' });
		const objectURL = URL.createObjectURL(blob);
		let a = document.createElement('a');
		a.href = objectURL;
		a.setAttribute('download', name);
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(objectURL);
	  }else{
		let a = document.createElement('a');
		a.href = url;
		a.setAttribute('download','');
		a.target = "downloadIframe";
		a.download = name;
		a.click();
	  }


} 
