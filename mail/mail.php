<?php
 
// mb_internal_encoding("UTF-8");
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
 
    use PHPMailer\PHPMailer\PHPMailer;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
        require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/phpmailer.php');
        require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/config.php');
        require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/valid.php');
 
        if(defined('HOST') && HOST != '') {
            $mail = new PHPMailer;
            $mail->isSMTP();
            $mail->Host = HOST;
            $mail->SMTPAuth = true;
            $mail->Username = LOGIN;
            $mail->Password = PASS;
            $mail->SMTPSecure = 'ssl';
            $mail->Port = PORT;
            $mail->AddReplyTo(SENDER);
        } else {
            $mail = new PHPMailer;
        }
 
        $mail->setFrom(SENDER);
    $mail->addAddress(CATCHER);
    $mail->CharSet = CHARSET;
    $mail->isHTML(true);
        $mail->Subject = SUBJECT;
        $mail->Body = "$name $tel $email"; 
        if(!$mail->send()) {
    } else {
      echo json_encode($msgs);
    }
     
    } else{
          header ("Location: /"); // главная страница вашего лендинга
    }
    (function ($) {
      $(".contact-form").submit(function (event) {
      event.preventDefault();
       
          // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
          let form = $('#' + $(this).attr('id'))[0];
       
          // Сохраняем в переменные дивы, в которые будем выводить текст ошибки
          let inpNameError = $(this).find('.contact-form__error_name');
          let inpEmailError = $(this).find('.contact-form__error_email');
          let inpTelError = $(this).find('.contact-form__error_tel');
       
          // Сохраняем в переменную див, в который будем выводить сообщение формы
          let formDescription = $(this).find('.contact-form__description');
       
          let fd = new FormData(form);
          $.ajax({
              url: "/mail/php/mail.php",
              type: "POST",
              data: fd,
              processData: false,
              contentType: false,
              success: function success(res) {
                  let respond = $.parseJSON(res);
       
                  if (respond.name) {
                   inpNameError.text(respond.name);
                  } else {
                   inpNameError.text('');
                  }
       
                  if (respond.tel) {
                      inpTelError.text(respond.tel);
                  } else {
                      inpTelError.text('');
                  }
       
                  if (respond.email) {
                      inpEmailError.text(respond.email);
                  } else {
                      inpEmailError.text('');
                  }
       
                  if (respond.attantion) {
                      formDescription.text(respond.attantion).css('color', '#e84a66').fadeIn();
                  } else {
                      formDescription.text('');
                  }
       
                  if (respond.success) {
                      formDescription.text(respond.success).fadeIn();
                      setTimeout(() => {
                          formDescription.fadeOut("slow");
                      }, 4000);
                      setTimeout(() => {
                          formDescription.text('');
                      }, 5000);
                  }
              },
          });
      });
      }(jQuery));