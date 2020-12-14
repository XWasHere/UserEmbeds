# /bin/sh

rm ./consts.js

echo -n checking os... 

if (($OS == 'Windows_NT'))
then
    echo Windows
    SYS=WIN
fi

echo -n getting working dir..
if ((SYS=='WIN'))
then
else
WD=$CD
fi
echo $WD

echo const wd=\'$WD\' > consts.js