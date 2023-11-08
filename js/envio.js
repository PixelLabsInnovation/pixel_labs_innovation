var sendButton = document.getElementById('sendButton');
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let dimension = document.getElementById('dimension').value;
        let personaje = document.getElementById('personaje').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= +51926598644;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%0ALos%20datos%20de%20mi%20compra%20son%20los%20siguientes:
%0A•%20AEl%20tamaño%20de%20mi%20producto%20es:%20${dimension}%0A•%20El%20personaje%20o%20asunto
%20es:%20${personaje}%0A•%20Algunas%20características%20adicionales%20de%20mi%20producto:%20${mensaje}`,'_blank');       
}
downloadButton.addEventListener('click', function() {
        var a = document.createElement('a');
        a.href = imgUrl;
        a.download = "comprobante.png";
        a.click();
        enableButton(sendButton);
});
        
sendButton.addEventListener('click', enviarFormulario);