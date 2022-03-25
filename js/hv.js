 function firstLoad(){
    document.getElementById('formEnglish').style.display = "none"; 
 }

function GeneraReportePDF() { 
    debugger; 
    document.getElementById('BtnGeneraSp').style.display = "none";
    document.getElementById('imgFotoPerfilSp').style.display = "none";
    document.getElementById('BtnIdiomaSp').style.display = "none";
    var invoice1 = this.document.getElementById("formSpanish");
     var opt = {
        margin: 1,
        filename: 'HV David Rodriguez.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice1).set(opt).save(); 
    setTimeout(activaDescarga, 5000);
}

function GeneraReportePDFEnglish() { 
    debugger; 
    document.getElementById('BtnGeneraEn').style.display = "none";
    document.getElementById('imgFotoPerfilEn').style.display = "none";
    document.getElementById('BtnIdiomaEn').style.display = "none";
    var invoice1 = this.document.getElementById("formEnglish");
     var opt = {
        margin: 1,
        filename: 'CV David Rodriguez.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice1).set(opt).save(); 
    setTimeout(activaDescargaEn, 5000);
}

function activaDescarga(){
    document.getElementById('imgFotoPerfilSp').style.display = "block";
    document.getElementById('BtnGeneraSp').style.display = "block"; 
    document.getElementById('BtnIdiomaSp').style.display = "block"; 
}

function activaDescargaEn(){
    document.getElementById('imgFotoPerfilEn').style.display = "block";
    document.getElementById('BtnGeneraEn').style.display = "block";
    document.getElementById('BtnIdiomaEn').style.display = "block";
}

// 1-Spanish 2-English
function cambiarIdioma(idioma){ 
    debugger; 

    switch(idioma){
        case 1:  
        document.getElementById('formSpanish').style.display = "none";
        document.getElementById('formEnglish').style.display = "block";
            break;
        case 2: 
           
                document.getElementById('formEnglish').style.display = "none";
                document.getElementById('formSpanish').style.display = "block";      
            break; 

    }

   
 
}