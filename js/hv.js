function GeneraReportePDF() { 
    debugger; 
    document.getElementById('BtnGenera').style.display = "none";
    document.getElementById('imgFotoPerfil').style.display = "none";
    var invoice1 = this.document.getElementById("form1");
     var opt = {
        margin: 1,
        filename: 'hv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice1).set(opt).save(); 
    setTimeout(activaDescarga, 5000);
}

function activaDescarga(){
    document.getElementById('imgFotoPerfil').style.display = "block";
    document.getElementById('BtnGenera').style.display = "block";
}