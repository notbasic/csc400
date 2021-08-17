# csc400
capstone project
the folders and files are where they should be if the whole repo is downloaded.
the server file has a loop that will send data to the client 
style.css is not important and can be ignored.
for multiplexer.py should called to run with the following command: nohup python -u multiplex.py &
it will run in the backhround. allow this program and the server program to run at the same time. 
after that program starts a PID# will be displayed. run kill -9 PID#. replace the PID# with just the number to stop that program.
if it is not stopped then it will keep running even after the command prompt is closed. turning off your pc will also stop it. 
server.py will not display data correctly without multiplexer.py running. multiplexer.py is constantly switching the bits on the multiplexers. 
