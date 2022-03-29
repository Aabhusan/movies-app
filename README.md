Instructions

- clone this repository : git clone https://github.com/Aabhusan/movies-app.git
- setup the drone ci server and runner 
    - here we had setup docker pipeline for the drone CI
    - for local setup we have used ngrok to expose the port 80 in host system that proxy to the drone server docker container so that runner container can ping  the drone server container running at port 80
    - if you setup drone CI in the remote instance then you donot need to use ngrok. See droneci documentation for more details on setting up the drone server and runners https://docs.drone.io/

- access the drone dashboard with the server ip or domain name and enable the github repository in the droneci dashboard
- add your dockerhub username and password in the droneci secrets : these credentials are used to push the build docker images to the dockerhub
- Have a look in .drone.yml file which is used by the drone for the pipelines. we have describe to build the  docker image and upload it to the dockerhub.
- finally push the code to the repository in the github and drone will find .drone.yml file and starts the pipeline as instructed in the .drone.yml config file