define({ "api": [
  {
    "type": "post",
    "url": "/create_delivery",
    "title": "Create a new delivery.",
    "name": "createDelivery",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "delivery",
            "description": "<p>Delivery object.</p>"
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
            "description": "<p>Delivery created.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "501": [
          {
            "group": "501",
            "optional": false,
            "field": "Error",
            "description": "<p>Error with database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/DeliveriesController.ts",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "/get_one_delivery",
    "title": "Get information about a delivery.",
    "name": "getOneDelivery",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delivery_id",
            "description": "<p>Id of the delivery.</p>"
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
            "field": "delivery",
            "description": "<p>Delivery object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "501": [
          {
            "group": "501",
            "optional": false,
            "field": "Error",
            "description": "<p>Error with database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/DeliveriesController.ts",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "/get_all_deliveries",
    "title": "Get information about all deliveries.",
    "name": "getOneDelivery",
    "group": "Delivery",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_delivery",
            "description": "<p>List of delivery object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "501": [
          {
            "group": "501",
            "optional": false,
            "field": "Error",
            "description": "<p>Error with database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/DeliveriesController.ts",
    "groupTitle": "Delivery"
  },
  {
    "type": "patch",
    "url": "/update_delivery",
    "title": "Update information on a delivery.",
    "name": "updateDelivery",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delivery_id",
            "description": "<p>Id of the delivery.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "delivery",
            "description": "<p>Delivery object.</p>"
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
            "description": "<p>Delivery updated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "501": [
          {
            "group": "501",
            "optional": false,
            "field": "Error",
            "description": "<p>Error with database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/DeliveriesController.ts",
    "groupTitle": "Delivery"
  }
] });
