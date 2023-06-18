migrate((db) => {
  const collection = new Collection({
    "id": "r01qkwnfd2ynthf",
    "created": "2023-06-18 14:45:01.085Z",
    "updated": "2023-06-18 14:45:01.085Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jrp01ydt",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "98eay2uj",
        "name": "cost",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hai8mdoo",
        "name": "tmb",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "mvt6mnfo",
        "name": "img",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "859wiqur",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r01qkwnfd2ynthf");

  return dao.deleteCollection(collection);
})
