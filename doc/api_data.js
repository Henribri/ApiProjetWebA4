define({ "api": [
  {
    "type": "",
    "url": "Global",
    "title": "Middleware Check Json web token.",
    "name": "CheckJwt",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>must be check to auth the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "JWT",
            "description": "<p>verified and validated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWT",
            "description": "<p>not validated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Middleware/CheckJwt.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/create_command",
    "title": "Create a new Command.",
    "name": "createCommand",
    "group": "Command",
    "body": [
      {
        "group": "Body",
        "type": "Command",
        "optional": false,
        "field": "Command",
        "description": "<p>object.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Command",
            "description": "<p>created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Data",
            "description": "<p>given are wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "delete",
    "url": "/delete_command",
    "title": "Delete a Command.",
    "name": "deleteCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Commands unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Command",
            "description": "<p>deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Command",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "delete",
    "url": "/delete_historic_command",
    "title": "Delete Commands historic.",
    "name": "deleteHistoricCommand",
    "group": "Command",
    "body": [
      {
        "group": "Body",
        "type": "[Number]",
        "optional": false,
        "field": "historic",
        "description": "<p>Commands that must be deleted.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Selected",
            "description": "<p>Commands historic deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Commands",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "put",
    "url": "/edit_command",
    "title": "Edit a Command.",
    "name": "editCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Commands unique ID.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Command",
        "optional": false,
        "field": "new",
        "description": "<p>Command.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Command",
            "description": "<p>edited.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Command",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/get_command",
    "title": "Request Command information.",
    "name": "getCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Commands unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Command",
            "optional": false,
            "field": "Command",
            "description": "<p>found.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Command",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/get_historic_command",
    "title": "Get Commands of a user.",
    "name": "getHistoricCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Commands",
            "description": "<p>historic found.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Commands",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  },
  {
    "type": "patch",
    "url": "/pay_command",
    "title": "Pay a Command.",
    "name": "payCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Commands unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Command",
            "description": "<p>paid.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Command",
            "description": "<p>not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  }
] });
