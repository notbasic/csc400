from gevent import monkey; monkey.patch_all()
from flask import Flask, Response, render_template, stream_with_context
from gevent.pywsgi import WSGIServer
import json
import time
import random
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in import AnalogIn
import board
import busio
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.cleanup()

adjusted = 1.28
# kill -9 PID <<< reminder to stop background process


# Create the I2C bus
i2c = busio.I2C(board.SCL, board.SDA)

# Create the ADC object using the I2C bus
ads = ADS.ADS1115(i2c)
# you can specify an I2C adress instead of the default 0x48
# ads = ADS.ADS1115(i2c, address=0x49)
gains = (2 / 3, 1, 2, 4, 8, 16)
ads.gain = gains[0]
# Create single-ended input on channel 0
chan1 = AnalogIn(ads, ADS.P0)
chan2 = AnalogIn(ads, ADS.P1)
chan3 = AnalogIn(ads, ADS.P2)
# chan4 = AnalogIn(ads, ADS.P3)

# ADS1115 gain options.
#
#       GAIN    RANGE (V)
#       ----    ---------
#        2/3    +/- 6.144
#          1    +/- 4.096
#          2    +/- 2.048
#          4    +/- 1.024
#          8    +/- 0.512
#         16    +/- 0.256
#


app = Flask(__name__)
counter = 100



############################################

@app.route("/")
def render_index():
    return render_template("index.html")

##################################################

@app.route("/listen")
def listen():
    def respond_to_client():
        while True :

            global num
            track1 = 0
            track2 = 0
            track3 = 0
            num = []


            while track1 < 16:

                num.append('{:.3f}'.format(chan1.voltage * adjusted))

                time.sleep(0.01)
                track1 += 1

            while track2 < 16:

                num.append('{:.3f}'.format(chan2.voltage * adjusted))

                time.sleep(0.01)
                track2 += 1

            while track3 < 16:

                num.append('{:.3f}'.format(chan3.voltage * adjusted))

                time.sleep(0.01)
                track3 += 1





            _data = json.dumps({"num":num})
            yield f"id: 1\ndata: {_data}\nevent: online\n\n"
    return Response(respond_to_client(), mimetype='text/event-stream')





#######################################################

if __name__ == "__main__":
    # app.run(port=80, debug=True)
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()
