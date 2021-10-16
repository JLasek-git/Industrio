<h3 aling="center">To start this locally</h3>

          git clone git@github.com:JLasek-git/Industrio.git
          cd Industrio
          npm install
          npm run start

If there's any problem with "npm install" just delete package-lock.json before npm install.

You can check this project on heroku: https://murmuring-plateau-49512.herokuapp.com/panel/game

<h1 align="center">Project info</h1>

<h3> Things I made in this project: </h3>
  
          - Whole graphic design
          - Routing between views using React Router
          - Application state management using React Redux
          - Dynamic components generation
          - Stores/Markets functionalities (buying, selling, requirements checking, and forms handling)
          - Dynamic shop elements generation from templates using JSON files
          - Production timers, and indicators that changes durning production
          - Production start form, where player can set production settings and start new production
          - Multiple production handling
          - Functionality which limits material space and machine places in player magazine
          - Gaining experience and new levels
          - Game reseting button
         
<h3> Things to fix in project: </h3>
  
          - Add starter login page (currently homepage link is just blank page with MainLayout)
          - Fix bug that adding wrong amount of material after production when production lasts shorter 
              than the previous one
          - Mediaquerries (especially for Employees Market)
          - Some ReduxState datatypes fixes (for example making machines object an array, to easier generation 
              and not displaying all machines in Dashboard, only those that the player owns)
              
<h3> Things I want to add: </h3>

          - Development tree
          - Separate levels for each production branch
          - Research center
          - Server connection
          - Dynamic prices depending on supply and demand
          - Dynamic generation of employees stats
          - Graphs showing the player stats such as money balance etc.
        
