#!/bin/bash
cd konradgnat_com/
sudo git reset --hard
sudo git pull
cd app/client
sudo npm install
sudo npm run build
cd ../konradgnat

# start virtual env, update requirements, rebuild app

virtualenv .
source bin/activate

pip install -r requirements.txt
python manage.py migrate

# restarts gunicorn, resets .sock

sudo systemctl daemon-reload
sudo systemctl restart konradgnat
deactivate
