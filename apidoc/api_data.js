define({ "api": [
  {
    "type": "post",
    "url": "/command",
    "title": "Create a new Command.",
    "name": "createCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "command",
            "description": "<p>Command object.</p>"
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
            "field": "response",
            "description": "<p>Command created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/command",
    "title": "Delete a Command.",
    "name": "deleteCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command_id",
            "description": "<p>Id of command.</p>"
          }
        ],
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
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
            "field": "response",
            "description": "<p>Command deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/commands",
    "title": "Delete Commands historic.",
    "name": "deleteHistoricCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "list_command_id",
            "description": "<p>List of id of command.</p>"
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
            "field": "response",
            "description": "<p>Historic deleted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/command",
    "title": "Edit a Command.",
    "name": "editCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command_id",
            "description": "<p>Id of command.</p>"
          }
        ],
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "command",
            "description": "<p>Command object.</p>"
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
            "field": "response",
            "description": "<p>Command edited.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/command",
    "title": "Request command information.",
    "name": "getCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command_id",
            "description": "<p>Id of command.</p>"
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
            "field": "command",
            "description": "<p>Command information found.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/commands",
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
            "field": "client_id",
            "description": "<p>Id of command.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_command",
            "description": "<p>Historic of commands.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/pay",
    "title": "Pay a Command.",
    "name": "payCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command_id",
            "description": "<p>Id of command.</p>"
          }
        ],
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
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
            "field": "response",
            "description": "<p>Command paid.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
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
    "url": "/validate",
    "title": "Validate a Command.",
    "name": "validateCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command_id",
            "description": "<p>Id of command.</p>"
          }
        ],
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>Token value in authorisation Bearer.</p>"
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
            "field": "response",
            "description": "<p>Command validated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/CommandsController.ts",
    "groupTitle": "Command"
  }
] });
