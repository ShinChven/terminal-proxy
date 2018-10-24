#!/bin/bash
proxy=`cat ~/.termproxy`
export all_proxy=$proxy
$*