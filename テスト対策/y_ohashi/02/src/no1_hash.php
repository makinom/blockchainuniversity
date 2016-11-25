<?php

$data = "My name is Yuta Ohashi";
echo "//対象文字列: " . $data . "\n";

// sha1(D)
echo "//sha1(D)\n";
echo hash('sha1', $data);
echo "\n\n";

// sha256(D)
echo "//sha256(D)\n";
echo hash('sha256', $data);
echo "\n\n";

// sha512(D)
echo "//sha512(D)\n";
echo hash('sha512', $data);
echo "\n\n";

// sha256(sha256(D))
echo "//sha256(sha256(D))\n";
$sha256 = hash('sha256', $data);
echo hash('sha256', $sha256);
echo "\n\n";

// ripemd160(D)
echo "//ripemd160(D)\n";
echo hash('ripemd160', $data);
echo "\n\n";

// ripemd160(sha256(D))
echo "//ripemd160(sha256(D))\n";
$sha256 = hash('sha256', $data);
echo hash('ripemd160', $sha256);
echo "\n\n";