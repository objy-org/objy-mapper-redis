

Mapper = function (OBJY, options) {
    return Object.assign(new OBJY.StorageTemplate(OBJY, options), {
        database: {},


        connect: function (connectionString, success, error, options) {
           

            return this;
        },

        getConnection: function () {
            return this.database;
        },

        useConnection: function (connection, success, error) {
           
        },

        getDBByMultitenancy: function (client) {
            
        },

        createClient: function (client, success, error) {
            
        },

        listClients: function (success, error) {
            
        },

        getById: function (id, success, error, app, client) {
           
        },

        getByCriteria: function (criteria, success, error, app, client, flags) {
            
        },

        count: function (criteria, success, error, app, client, flags) {
           
        },

        update: function (spooElement, success, error, app, client) {
            
        },

        add: function (spooElement, success, error, app, client) {
            
        },

        remove: function (spooElement, success, error, app, client) {
            
        },
    });
};

module.exports = Mapper;
