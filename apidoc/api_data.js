define({ "api": [
  {
    "type": "get",
    "url": "/check_auth",
    "title": "Verify an access token.",
    "name": "check",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "access_token",
            "description": "<p>Give values of access token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Wrong token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/login_auth",
    "title": "Login a user.",
    "name": "login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "access_token",
            "description": "<p>Give an access token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Wrong token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/refresh_token_auth",
    "title": "Get a new access token.",
    "name": "refreshToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Refresh Token value in authorisation Bearer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "access_token",
            "description": "<p>Give a new access token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Wrong token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  }
] });
