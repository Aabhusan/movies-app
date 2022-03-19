instruction

- setup the drone ci server and runner 
    - here we had setup docker pipeline for the drone CI server
    - for local setup we have exposed ngrok to expose the port 80 so that runner container can ping the drone server container running at port 80
    - see droneci documentation for more details

- activated the github repo in the drone ci interface
- written .drone.yml file that have instruction of command when pipeline is triggered
- this pipeline login to dockerhub, build the docker image for react-app and node-app then push these images to the dockerhub
