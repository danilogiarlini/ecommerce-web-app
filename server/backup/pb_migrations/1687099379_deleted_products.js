migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uax9xku0kr6kdzx");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "uax9xku0kr6kdzx",
    "created": "2023-06-18 14:11:28.548Z",
    "updated": "2023-06-18 14:11:28.548Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rcfnty0s",
        "name": "name",
        "type": "text",
        "required": true,
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
})
