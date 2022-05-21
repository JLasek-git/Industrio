<h4 align="center">***Project isn't fully finished yet. Scroll down to read things I want to add and fix.***</h4>
<h3>To start this locally</h3>

          git clone https://github.com/JLasek-git/Industrio.git
          cd Industrio
          npm install
          npm run start

If there's any problem with "npm install" just delete package-lock.json before npm install.

You can check this project on heroku: https://murmuring-plateau-49512.herokuapp.com/panel/game

<h1 align="center">Project info</h1>

<h4 align="center">Hi! I'm glad you're here. This is "Industrio", one of my first projects.</h6>
<p>I've always been huge fan of web browser games, so I've decided to make one by myself. Game isn't big, but coding Industrio taught me a lot. Especially about React and Redux. I haven't used any materials libraries, so every component was made entirely by myself.</p> 

<h4 align="center"> What player can do in Industrio? </h6>

<p>Industrio is a game, where player becomes the owner of a metallurgical plant. He can buy new machines, expand the warehouse and hire employees which can improve production results.</p> 

<br />
<br />

<h3> Things I made in this project: </h3>
  
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
          - Employees bonuses
         
<h3> Things to fix in project: </h3>
          
          - Complete change of the visual layer of the website (the current one was done quickly,
             I mainly focused on functionalities)
          - Improving page responsiveness
          - Overall code quality improvement, minor refactoring
          - Changing layout structer (currently it's a little bit messy)
          - Fixing bug that adding wrong amount of material after production when production lasts shorter
              than the previous one
              
<h3> Things I want to add: </h3>
          
          - Add starter login page (currently homepage link is just blank page with MainLayout)
          - Development tree
          - Separate levels for each production branch
          - Research center
          - Server connection
          - Dynamic prices depending on supply and demand
          - Dynamic generation of employees stats
          - Graphs showing the player stats such as money balance etc.
      

