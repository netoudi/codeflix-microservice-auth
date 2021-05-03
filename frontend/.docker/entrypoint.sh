#!/bin/bash

npm install

# loop infinito para manter o container rodando
/bin/sh -c "while sleep 1000; do :; done"
