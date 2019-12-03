class Database {
  constructor(data) {
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

// const postgresql = new Database('PostgreSQL');
// console.log(postgresql.getData());
//
// const mongo = new Database('MongoDB');
// console.log(mongo.getData());
