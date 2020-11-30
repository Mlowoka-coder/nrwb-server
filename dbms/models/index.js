const accountant = require('./accountant')
const admin = require('./admin')
const application = require('./application')
const bill = require('./bill')
const crime = require('./crime')
const customer = require('./customer')
const faultReport = require('./faultReport')
const financeRequest = require('./financeRequest')
const measurement = require('./measurement')
const meter = require('./meter')
const nationalID = require('./nationalID')
const payment = require('./payment')
const plumber = require('./plumber')
const quotation = require('./quotation')
const reading = require('./reading')
const reminder = require('./reminder')
const salesRepresentative = require('./salesRepresentative')
const schemeCoordinator = require('./schemeCoordinator')
const storesClerk = require('./storesClerk')
const supervisor = require('./supervisor')
const tariff = require('./tariff')
const task = require('./task')
const taskReport = require('./taskReport')
const toolsList = require('./toolsList')
const toolsRequest = require('./toolsRequest')
const user = require('./user')
const notification = require('./notification')
const store = require('./store')

const initializer = (alter)=>{
    accountant.sync(alter)
    admin.sync(alter)
    application.sync(alter)
    bill.sync(alter)
    crime.sync(alter)
    customer.sync(alter)
    faultReport.sync(alter)
    financeRequest.sync(alter)
    measurement.sync(alter)
    meter.sync(alter)
    nationalID.sync(alter)
    payment.sync(alter)
    plumber.sync(alter)
    quotation.sync(alter)
    reading.sync(alter)
    reminder.sync(alter)
    salesRepresentative.sync(alter)
    schemeCoordinator.sync(alter)
    storesClerk.sync(alter)
    supervisor.sync(alter)
    tariff.sync(alter)
    task.sync(alter)
    taskReport.sync(alter)
    toolsList.sync(alter)
    toolsRequest.sync(alter)
    user.sync(alter)
    store.sync(alter)
    notification.sync(alter)
}

initializer({force:true})