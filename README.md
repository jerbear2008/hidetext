# hidetext-source
Hide text in other text with zero width characters. _PUBLIC DOMAIN_
**USE AT YOUR OWN RISK**

## Download
[Download](https://github.com/jerbear2008/hidetext-source/raw/main/HidetextClient.exe) and run HidetextClient.exe, then minimize the pop-up. Close it to stop.

## How to use
Select text, then press Ctrl + E (encode), and input some secret text to hide within. 
The hidetext will be copied to your clipboard. Select hidetext, then press Ctrl + D (decrypt) to reveal the secret text.

## Compiling
Use the latest version of AHK to compile hidetext.ahk to hidetext.exe, then run the iexpress command as admin, and use the hidetext.SED file to compile. I used resource hacker to change the output file's icon to the included search.ico.

## Notes
You can also use the [ZeroSteg](https://nosajmik.codes/zerosteg/) converter to create and decode hidetext.
This file was created with the Win10 iexpress command and contains a compiled AHK Exo file and a JS file that Exo loads. The detections on VirusTotal are because it is unsigned and listens to keystrokes and the clipboard.
