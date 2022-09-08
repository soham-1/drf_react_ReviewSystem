# Review Api
This is a **django-rest-framework** based review system where a candidate can fill his presonal details and upload his **resume**.
Once uploaded the status of the candidate can be changed to accepted or rejected. The frontend is built with **react.js**. Screenshots of the pages are included in readme below.

## Clone project
```
git clone https://github.com/soham-1/fastapi_pdfextractor.git
```

## Run on Docker
```
docker-compose up -d
```

### Stop the container using
```
docker-compose stop
```

## Run locally
### Api
#### Install dependencies
```
cd review
pip install -r requirements.txt
```

#### Run Server
```
python manage.py runserver
```
### React Frontend
#### Install dependencies
```
cd review_frontend
npm ci
```

#### Run Server
```
npm start
```

## Documentation
This api has following endpoints
* ```api/candidates/``` - returns list of all candidates in database
* ```api/candidate/<email>/``` - returns details of specific candidate, supports requests like get, post, patch

pages -
### home page
![Home page.JPG](/screenshots/Home_page.jpg)
<br>
### create candidate page
![create candidate.JPG](/screenshots/create_candidate.jpg)
<br>
### update candidate page
![update candidate.JPG](/screenshots/update_candidate.jpg)
