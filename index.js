var Redis = require('ioredis');

Mapper = function (OBJY, options) {
    return Object.assign(new OBJY.StorageTemplate(OBJY, options), {
        database: {},


        connect: (connectionString, success, error, options) => {
            this.database = new Redis(connectionString, options);
            success(this.database);
            return this;
        },

        getConnection:  () => {
            return this.database;
        },

        useConnection: (connection, success, error) => {
           this.database = connection;
           success(this.database);
           return this;
        },

        getDBByMultitenancy: (client) => {
            return this.database;
        },

        createClient: (client, success, error) => {
            return this;
        },

        listClients: (success, error) => {
            success([]);
        },

        getById: (id, success, error, app, client) => {
        
        this.database.get(id,(err, result) => {
            if(err) return success({})
            else if(!result) {
                return success({})
            }
            else {
                success(JSON.parse(result), 'break')
            }
        }

      },

      update:(spooElement, success, error, app, client) => { 

        this.database.get(spooElement._id,(err, result) => {
            if(result) {
                
                this.database.set(spooElement._id, JSON.stringify(spooElement), (err, result) => {
                    success(JSON.parse(spooElement));
                }

            } 
        }

      },

      remove: (spooElement, success, error, app, client) => {

            this.database.del(spooElement._id);

            success(JSON.parse(spooElement));

       },

        getByCriteria: (criteria, success, error, app, client, flags) => {
            success({});
         },

        count: (criteria, success, error, app, client, flags) => { 
            success({});
        },

         add: (spooElement, success, error, app, client) => { 
            success({});
         }
    });
};

module.exports = Mapper;
