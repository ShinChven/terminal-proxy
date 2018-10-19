@echo off
set /p proxy=< proxy
set all_proxy=%proxy%
%*
set all_proxy=

