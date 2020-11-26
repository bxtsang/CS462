# CS462 Internet of Things Project
## Team 8, Ultrasonic the Hedgehog

This project aimed to measure the usage of toilets at a hawker centre using ultrasonic sensors placed at the entrance of the toilet, and in the cubicle area. To provide more measures of toilet cleanliness, a humidity and temperature sensor was deployed as well.

The sensors were connected to microbits (code in /microbits/) which communicated to a receiver microbit via radio, and the receiver microbit sent the data to a raspberry pi via a serial port. The raspberry pi then aggregated, transformed and sent the collected information to an MQTT broker powered KAA dashboard, as well as a MySQL database for further analysis (code in /raspberry_pi/).

## Overall Topology
![topology](/images/topology.png?raw=true "topology")
*Deployed solution topology.*

## Raspberry Pi flows in Node-Red
![node-red flows](/images/rpi_flow.JPG?raw=true "node-red flows")
*Source code files are named according to the node names.*


## The Team
<img src="/images/team8photo.jpeg" alt="drawing" width="50%"/>

*Back row, from left to right*
* **Tsang Bao Xian** - [bxtsang](https://github.com/bxtsang)
* **Glen See** - [glensee](https://github.com/glensee)
* **Cliffen Lee** - [Cliffenlee](https://github.com/Cliffenlee)

*Front row, from left to right*
* **Eunice Chua** - [eunicechua](https://github.com/eunicecxj)
* **Liaw Siew Yee** - [liawsy](https://github.com/liawsy)
* **Mary Heng** - [maryheng](https://github.com/maryheng)
