import time
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.cleanup()
time.sleep(2)
muxTable = [
            [0,0,0,0],
            [1,0,0,0],
            [0,1,0,0],
            [1,1,0,0],
            [0,0,1,0],
            [1,0,1,0],
            [0,1,1,0],
            [1,1,1,0],
            [0,0,0,1],
            [1,0,0,1],
            [0,1,0,1],
            [1,1,0,1],
            [0,0,1,1],
            [1,0,1,1],
            [0,1,1,1],
            [1,1,1,1]
            ]


def switching(muxTable):
    bit = 0
    while True:
        for i in muxTable:
            r = i
            s = i
            t = i
            u = i
            GPIO.setup(20, GPIO.OUT, initial=u[3])     # to Multiplexer S3 Pin
            GPIO.setup(21, GPIO.OUT, initial=t[2])     # to Multiplexer S2 Pin
            GPIO.setup(12, GPIO.OUT, initial=s[1])     # to Multiplexer S1 Pin
            GPIO.setup(16, GPIO.OUT, initial=r[0])     # to Multiplexer S0 Pin

            #print r[0],s[1],t[2],u[3] , 'this is count:' , bit
            bit+=1
            time.sleep(.01)


            if bit > 15:
                bit = 0

switching(muxTable)
