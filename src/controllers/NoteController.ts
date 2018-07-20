import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from "routing-controllers"
import { getConnectionManager, Repository } from "typeorm"
import { Note } from "../entity/Note"
import { EntityFromBody } from "typeorm-routing-controllers-extensions"

@Controller()
export class NoteController {
  private noteRepository: Repository<Note>

  constructor() {
    this.noteRepository = getConnectionManager()
      .get()
      .getRepository(Note)
  }

  @Get("/notes")
  getAll() {
    // return all
    return this.noteRepository.find()
  }

  @Get("/notes/:id")
  getOne(@Param("id") id: number) {
    // return one
    return this.noteRepository.findOne(id)
  }

  @Post("/notes")
  save(@EntityFromBody() note: Note) {
    return this.noteRepository.save(note)
  }

  @Put('/notes/:noteId')
  update(@Param("noteId") noteId:number, @EntityFromBody() note: Note){
    return this.noteRepository.update(noteId,note)
  }
}
