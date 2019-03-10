


import { createConnection, ConnectionOptions } from "typeorm";
import { PostAuthor } from "./entity/author"
import { Post } from "./entity/post"

const run = async () => {
  return createConnection(
    {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "shandianyun",
      password: "131415",
      database: "shandianyun",
      entities: [Post, PostAuthor],
      synchronize: true,
      logging: false
    }
  )
    .then(async connection => {
      // here you can start to work with your entities
      const p = new Post()
      p.title = "abc"
      p.text = "dce"
      await p.save()
    }).catch(error => console.log(error));
}


run()
