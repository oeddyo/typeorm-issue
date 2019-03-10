import { Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn, Entity } from "typeorm";
import { PostAuthor } from "./author";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  // post has relation with details. not cascades here. means cannot be persisted, updated or removed
  @ManyToOne(type => PostAuthor, author => author.posts)
  author: PostAuthor;

}