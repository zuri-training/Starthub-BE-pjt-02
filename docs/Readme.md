# API ROUTES DOCUMENTATION

## Main Route

- ##### default route - method `GET` http://localhost:3000/api/v1/ : access public

## Auth Routes

- ##### sign up route - method `POST` http://localhost:3000/api/v1/auth/sign-up : access public

###### example

```
   firstName: string,
   lastName:  string,
   email:  string,
   password:  string,
   studentId: string // must be a valid stundent id
```

###### payload

```
{
    "success": true,
    "message": "Signup successfull",
    "data": {
        "id": "xxxxxxxx",
        "name": "test user",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDFkYmJlMjY4YjJjMzM4MGFmNWMwZCIsImlhdCI6MTYyNDM2NjAxNH0.mS_xSQyGJMFYA4-7p2AusOCjRsGu4PqxtPOvBBHjBkA"
    }
}
```

- ##### login route - method `POST` http://localhost:3000/api/v1/auth/sign-in : access public

###### example

```
   email:  string,
   password:  string,
```

###### payload

```
{
    "success": true,
    "message": "Logged in successfully",
    "data": {
        "firstName": "test",
        "lastName": "user",
        "email": "test@test.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDFkYmJlMjY4YjJjMzM4MGFmNWMwZCIsImlhdCI6MTYyNDM2NjA3MCwiZXhwIjoxNjI0NzI2MDcwfQ.Hqtgt3iuKzykuoqGtDVOiA0ZTSOtkMp7BteXZXPsbEo"
    }
}
```
