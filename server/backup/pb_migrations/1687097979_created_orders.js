migrate((db) => {
  const collection = new Collection({
    "id": "1v9452dh578zz0o",
    "created": "2023-06-18 14:19:39.627Z",
    "updated": "2023-06-18 14:19:39.627Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8jbjqyjy",
        "name": "order",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "old8rymk",
        "name": "user",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tn5jvozk",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "oh9oqi1f",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1v9452dh578zz0o");

  return dao.deleteCollection(collection);
})
