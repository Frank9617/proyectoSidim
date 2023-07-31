from pymongo import MongoClient
MONGO_URI= 'mongodb://localhost'
cliente=MongoClient(MONGO_URI)
db = cliente['prueba']
coleccion=db['emp']
eps1=coleccion.find()
for r in eps1:
    print (r['idemp']+"-"+r['nom'])