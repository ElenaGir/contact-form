<?php
/* Page: contact.php */
//mettez ici votre adresse mail
$VotreAdresseMail="e.girard@codeur.online";//"n9y4CQNi8";
// si le bouton "SUBMIT" est cliqué
if(isset($_POST['submit'])) {
    //on vérifie que le champ mail est correctement rempli
    if(empty($_POST['mail'])) {
        echo "The email field is empty";
    } else {
        //on vérifie que l'adresse est correcte
        if(!preg_match("#^[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?@[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?\.[a-z]{2,}$#i",$_POST['mail'])){
            echo "The email address is incorrect";
        }else{
            //on vérifie que le champ sujet est correctement rempli
            if(empty($_POST['name'])) {
                echo "The name field is empty";
            }else{
                //on vérifie que le champ message n'est pas vide
                if(empty($_POST['message'])) {
                    echo "The message field is empty";
                }else{
                    //tout est correctement renseigné, on envoi le mail
                    //on renseigne les entêtes de la fonction mail de PHP
                    $Entetes = "MIME-Version: 1.0\r\n";
                    $Entetes .= "Content-type: text/html; charset=UTF-8\r\n";
                    $Entetes .= "From: Formulaire <".$_POST['mail'].">\r\n";//de préférence une adresse avec le même domaine de là où, vous utilisez ce code, cela permet un envoie quasi certain jusqu'au destinataire
                    $Entetes .= "Reply-To: Formulaire <".$_POST['mail'].">\r\n";
                    //on prépare les champs:
                    $Mail=$_POST['mail']; 
                    $Sujet='=?UTF-8?B?'.base64_encode($_POST['nom']).'?=';//Cet encodage (base64_encode) est fait pour permettre aux informations binaires d'être manipulées par les systèmes qui ne gèrent pas correctement les 8 bits (=?UTF-8?B? est une norme afin de transmettre correctement les caractères de la chaine)
                    $Message=htmlentities($_POST['msg'],ENT_QUOTES,"UTF-8");//htmlentities() converti tous les accents en entités HTML, ENT_QUOTES Convertit en + les guillemets doubles et les guillemets simples, en entités HTML
                    //en fin, on envoi le mail
                    if(mail($VotreAdresseMail,$Sujet,nl2br($Message),$Entetes)){//la fonction nl2br permet de conserver les sauts de ligne et la fonction base64_encode de conserver les accents dans le titre
                        echo "THANK YOU";
                    } else {
                        echo "Sorry, there was a problem sending your message";
                    }
                }
            }
        }
    }
}
?>