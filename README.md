# HFDS-Paperless-Proj

The purpose of this project is to create a web application to remove paper waste in HFDS and increase efficiency among forklift drivers and supermarket employees. The current system used results in printing report multiple times per day, without real-time updating. This project is meant to solve both those problems.

## Architecture

This project is built using a Vite typscript frontend with a flask backend. The backend is used to communcate with an OBDC server that pulls information from Alfield's CMS system. This project also uses the **factory engine component library** (If more information is needed, talk to Joe Furfaro)

### Screen Layout

The two screens that are needed for functionality for this project is a screen that is mounted at the end of each supermarket row and a screen that will be mounted on the forklifts for the forklift drivers can use.

#### Forklift Screen

The forklift screen functions to alert the forklift drivers of job requests for parts to be decanted, as well as an easier way navigate to selected part FIFO locations 

#### Supermarket Aisle Screen

The supermarket screen functions simply to request parts. A part table is displayed where the user can select a certain part to be decanted and the job is added to an array that is the used by the forklift screen to notify a driver.

## Future Development

This project was started but needs more work for it to be in a state that is appropriate for production.

The frontend is for the most part fully built, however may need some changes to be made for the queue of jobs (yet to be done). The backend already communicated data to the frontend, however is currently not connected to the CMS server so isn't displaying any real data.

The following tasks are what should be though about moving forward:

* Finishing the backend integration
* Create a job queue system so that if the forklift driver is occupied, the requested job will be queued until completed
* Setting up a CMS account with a static password (doesnt need to be reset)
* Hardware for tablets and screens has already been ordered for the pilot, however it will need to be installed
* Figure out a way to mount the screens to the forklifts (also think about charging?, making a low power screen)
* Create a "management" screen that is at the HFDS station (features could be like editing job queue, adding parts)

Play <https://diep.io>!!!
