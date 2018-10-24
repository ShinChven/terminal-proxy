@echo off
set /p proxy=< "%HOMEPATH%\.termproxy"
echo %proxy%
set all_proxy=%proxy%
%*
set all_proxy=
set proxy=
