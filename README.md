# Marketplace App
An app that lets users register there business to the XXX platform via the CH API

## Intructions to get app working locally

* Visit https://developer.companieshouse.gov.uk/api/docs/index/gettingStarted/apikey_authorisation.html to register the app and get API key
* When registering app with CH, include http://localwebapp.com:3000 as an authorised javascript domain
* To get app working locally you now need to edit hosts file on your computer and include the following line: 127.0.0.1    localwebapp.com
* Make sure you have instance of MongoDB running locally and then clone the repo and cd into server, run `npm run start`
* Then cd into client and open folder in your editor of choice. In API.js add the API key from CH to line 7 and then run `npm run start` in terminal
* A window will open in the browser to take you to the app landing page but in order for the CH API to work you will need to go to: http://localwebapp.com:3000
* Please refer to `questions.txt` for requested Q&A.

### Input field choices:
* In addition to name and email, information from Companies House has been utilised to provide greater context about the company:
  * Company Number - gives potential trading partners confidence in the companies legitamacy i.e. they can conduct their own research if needed
  * Type - increase transparency of company structure 
  * Status - to ensure the company is actively trading otherwise there is no value to it being on the platform
  * Address - some trade may be location specific, having company location make it easier for other companies to filter search 
