class Database {
  constructor(data) {
    console.log(Database.instance);
    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database('MongoDB');
// console.log(mongo.getData());

const postgresql = new Database('PostgreSQL');
// console.log(postgresql.getData());