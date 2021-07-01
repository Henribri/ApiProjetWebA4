define({ "api": [
  {
    "type": "post",
    "url": "/article",
    "title": "Create a new article",
    "name": "createArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article object.</p>"
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
            "description": "<p>Article created.</p>"
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
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "delete",
    "url": "/article",
    "title": "Delete an article",
    "name": "deleteArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
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
            "description": "<p>Articles deleted.</p>"
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
            "description": "<p>to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article",
    "title": "Edit an article",
    "name": "editArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "article",
            "description": "<p>Article object.</p>"
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
            "description": "<p>Articles edited.</p>"
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
            "description": "<p>to request database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles",
    "title": "Request all articles",
    "name": "getAllArticles",
    "group": "Article",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_article",
            "description": "<p>List of articles.</p>"
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
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles-restorer",
    "title": "Request some articles by restorer",
    "name": "getArticlesByRestorer",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restorer_id",
            "description": "<p>Id of restorer.</p>"
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
            "field": "list_article",
            "description": "<p>List of articles.</p>"
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
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles-type",
    "title": "Request some articles by type",
    "name": "getArticlesByType",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_type",
            "description": "<p>Type of articles.</p>"
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
            "field": "list_article",
            "description": "<p>List of articles.</p>"
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
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article",
    "title": "Request article information",
    "name": "getOneArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>Id of article.</p>"
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
            "field": "article",
            "description": "<p>Article object.</p>"
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
    "filename": "app/Controllers/Http/ArticlesController.ts",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/menu",
    "title": "Create a new menu",
    "name": "createMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>menu object.</p>"
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
            "description": "<p>Menu created.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/menu",
    "title": "Delete a menu",
    "name": "deleteMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of menu.</p>"
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
            "description": "<p>Menu deleted.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "put",
    "url": "/menu",
    "title": "Edit a menu",
    "name": "editMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of menu.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "menu",
            "description": "<p>menu object.</p>"
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
            "description": "<p>Menu edited.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menus",
    "title": "Request information about all menus",
    "name": "getAllMenu",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list_menu",
            "description": "<p>List of menus found.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu-restorer",
    "title": "Request information about a menu by restorer",
    "name": "getMenusByRestorer",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restorer_id",
            "description": "<p>Id of a restorer.</p>"
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
            "field": "list_menu",
            "description": "<p>list of menus found.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu",
    "title": "Request information about a menu",
    "name": "getOneMenu",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Id of a menu.</p>"
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
            "field": "menu",
            "description": "<p>Menu object.</p>"
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
    "filename": "app/Controllers/Http/MenusController.ts",
    "groupTitle": "Menu"
  }
] });
