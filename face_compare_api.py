# -*- coding: utf-8 -*-
"""
Created on Tue Jun 15 18:47:11 2021

@author: Varun

"""

from flask import Flask,request,Response
import requests
import json
import time

from facepplib import FacePP, exceptions
from krakenio import Client


app = Flask(__name__)



@app.route("/getImageSimilarity",methods=['POST','GET','OPTIONS'])
def send_image_similarity():
    
    api = Client('67c48db0c259af77ce7989abdf040909', '4535de82acef6ef1a1b770014481ab52afb4929e')

    data = {
        'wait': True
    }
    
    try:
        
        image1 = request.files["image1"]
        filepath1 = '{}.jpg'.format(str(time.time()).replace('.',''))
        image1.save(filepath1)
        
        image2 = request.files["image2"]
        filepath2 = '{}.jpg'.format(str(time.time()).replace('.',''))
        image2.save(filepath2)
        
        api_key ='xQLsTmMyqp1L2MIt7M3l0h-cQiy0Dwhl'
        api_secret ='TyBSGw8NBEP9Tbhv_JbQM18mIlorY6-D'
        
        image1 = api.upload(filepath1, data).get('kraked_url')
        image2 = api.upload(filepath2, data).get('kraked_url')
        
        app_ = FacePP(api_key = api_key,api_secret = api_secret)
        
        cmp_ = app_.compare.get(image_url1 = image1,image_url2 = image2)
    
        print('similarity between the photos is : {}'.format(cmp_.confidence))
        
        if cmp_.confidence >= 85:
            
            return {"similarity" : cmp_.confidence,'match' : True}
        else:
            
            return {"similarity" : cmp_.confidence,'match' : False}
#        
        print(image1)
        
        
        
    except Exception as error:
        
        print(error)
        
        return {"status" : 'error'}

if __name__ == "__main__":
    from waitress import serve
    serve(app,port = 5000)
    app.run()
    
