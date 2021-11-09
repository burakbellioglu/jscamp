export class BaseLogger //(Default logger)
{
    log(data)
    {
        console.log("Default Logger : " + data)
    }
}                       //extend edersek Elastic logger içinde baselogger a sahip oluruz(içeriğine)
                          //sen BaseLogger sın
export class ElasticLogger extends BaseLogger
{
    
    log(data)
    {
        console.log("Logged to Elastic" + data )
    }
}

export class MongoLogger extends BaseLogger
{
    
    log(data)
    {
        console.log("Logged to Mongo" + data )
    }
}