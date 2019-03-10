import { Column, BaseEntity, OneToMany, PrimaryGeneratedColumn, Entity} from "typeorm";
import { Post } from "./post";

@Entity()
export class PostAuthor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Post, post => post.author)
  posts: Post[];

}