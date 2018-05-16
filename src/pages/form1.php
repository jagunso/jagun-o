<?php
 ini_set('default_charset','UTF-8');

$nome = $_POST["nome"];
$rua = $_POST['rua'];
$bairro = $_POST["bairro"];
$telefone = $_POST["telefone"];
$arquivo = $_POST["arquivo"];
$mensagem = $_POST["mensagem"];

 
$msgCompleta = " 
Nome: $nome \n
Rua: $rua\n
Bairro: $bairro\n
Telefone: $telefone\n
Arquivo: $arquivo\n
Denuncia: $mensagem ";


mail("CalendarioJPBapp2018@hotmail.com","Denúncia(Segurança) - Calendário JPB - APP",$msgCompleta);




echo "<img src='https://denguezeroapp.000webhostapp.com/enviado.gif'>"; 
?>