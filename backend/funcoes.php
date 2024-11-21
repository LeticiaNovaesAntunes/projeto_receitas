<?php
Class Projeto{

    //função para logar usuário
    public function login($email,$senha){
      global $pdo;
 
      $sql = "SELECT * FROM Usuarios WHERE email= :email AND senha = :senha";
      $sql = $pdo->prepare($sql);
      $sql->bindValue(":email", $email);
      $sql->bindValue(":senha", md5($senha));
      $sql->execute();

     if($sql->rowCount() >0){
      $usuario = $sql->fetch();
      
     
      
        return true;
     }else{
      return false;
    }
  }
}
?>