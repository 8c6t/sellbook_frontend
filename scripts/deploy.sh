#!/bin/bash

REPOSITORY=/home/ec2-user/app

echo "> 이전 파일 삭제"
sudo rm -rf $REPOSITORY/frontend/*

echo "> 빌드 파일 압축 해제"
unzip $REPOSITORY/deploy/frontend/build.zip -d $REPOSITORY/frontend

echo "> Nginx reload"
sudo service nginx reload
