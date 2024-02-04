# Hidetext v1.1.1

(by the way, this project is an old mess, you have been warned)

Hide text in other text with zero width characters.

Hidetext is based on and is compatible with [jasonkimprojects/zerosteg](https://github.com/jasonkimprojects/zerosteg). It is has a really good explanation on how the encoding works.

## Download
[Download](https://github.com/jerbear2008/hidetext-source/raw/main/Hidetext.exe) and run Hidetext.exe anywhere.

## How to use
Select text, then press Ctrl + E (encode), and input some secret text to hide within. 

The hidetext will be copied to your clipboard. Select hidetext, then press Ctrl + D (decrypt) to reveal the secret text.

The window will show a list of all the encodings and decodings that you can copy from.

## Compiling
Use the latest version of AHK to compile Hidetext.ahk to Hidetext.exe. I used resource hacker to change all the output file's icons to the included search.ico.

## Notes
You can also use the [ZeroSteg](https://nosajmik.codes/zerosteg/) converter to create and decode hidetext.
This file is a modified AHK Exo file and an embedded JS file that Exo loads. The detections on VirusTotal are because it is an unsigned compiled AHK file, which are commonly used by script kiddies.
