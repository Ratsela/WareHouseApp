/*
 * Service settings
 */
var WarehouseDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5405cf90e4b083a14de91dc4"
}

/*
 * Services
 */

var WarehouseDB_Merchandise_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Merchandise',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});
var CameraService = new Apperyio.CameraService({});
/*
 * Data models
 */
Apperyio.models = {
    "AAB7DD8B-612F-6E85-DA32-0D74E1330AA0": {
        "name": "String",
        "type": "string",
        "parentGuid": null,
        "reference": null
    },
    "ABB7DD8B-612F-6E85-DA32-0D74E1330AA1": {
        "name": "Number",
        "type": "number",
        "parentGuid": null,
        "reference": null
    },
    "ACB7DD8B-612F-6E85-DA32-0D74E1330AA2": {
        "name": "Boolean",
        "type": "boolean",
        "parentGuid": null,
        "reference": null
    }

};

/*
 * Data storages
 */
Apperyio.storages = {};