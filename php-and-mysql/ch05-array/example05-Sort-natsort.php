<?php

/**
 * Nature sort for array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Picture_URL = array(
    "https://localhost/1.jpg" => "Pic60",
    "https://localhost/2.jpg" => "Pic50",
    "https://localhost/3.jpg" => "Pic40",
    "https://localhost/4.jpg" => "Pic30",
    "https://localhost/5.jpg" => "Pic20",
    "https://localhost/6.jpg" => "Pic10",
);
natsort($Picture_URL);

print_r($Picture_URL);
